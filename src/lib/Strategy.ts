import fs from 'fs'
import path from 'path'
import {
  BacktestResults,
  DataSourceType,
  SimulationOptions,
  StrategyOptions,
  TimeFrame,
  TRADE_KEY,
} from '@/types'
import { OHLCV } from 'ccxt'
import downloadPairData from '@/utils/dataInstaller'
import { CandleSticks } from '@/charting'
import { TradeManager } from '@/managers/TradeManager'
import {
  calcAlpha,
  calcBeta,
  calcCovariance,
  calcPL,
  calcSharpeE,
  calcStddev,
  calcVariance,
} from '@/utils/maths'
import getAvgMarketReturn from '@/utils/getAvgMarketReturn'

export class Strategy {
  public name: string;
  private data: OHLCV[] = []
  public readonly strategyOptions: Required<StrategyOptions>
  public tradeManager: TradeManager
  public indicators: Map<string, any> = new Map()
  public pairDataPath: string = ''

  constructor(strategyOptions: StrategyOptions) {
    const {
      name,
      dataLength = 100,
      timeFrame = TimeFrame.MINUTE,
      chartType = new CandleSticks(),
      indicators = [],
      simulationOptions,
      pair,
    } = strategyOptions

    this.name = strategyOptions.name;
    
    this.strategyOptions = {
      name,
      dataLength,
      timeFrame,
      chartType,
      indicators,
      simulationOptions: simulationOptions ?? { pair },
      pair,
    }

    this.tradeManager = new TradeManager(this)
  }

  public async loadData(): Promise<void> {
    const { pair, timeFrame, dataLength } = this.strategyOptions
    const dataFolderPath = path.join(process.cwd(), 'data')

    if (!fs.existsSync(dataFolderPath)) {
      fs.mkdirSync(dataFolderPath)
    }

    const { path: pairDataPath, data } = await downloadPairData(
      pair,
      timeFrame,
      dataLength,
      dataFolderPath,
    )

    this.pairDataPath = pairDataPath
    this.data = data
  }

  private provideAllIndicators(): void {
    this.strategyOptions.indicators.forEach((indicator) =>
      indicator.provide(this.data),
    )
  }

  private feedAllIndicators(data: OHLCV): void {
    this.strategyOptions.indicators.forEach((indicator) => indicator.feed(data))
  }

  public async backtest({}: SimulationOptions): Promise<BacktestResults> {
    const results: BacktestResults = {
      alpha: 0,
      beta: 0,
      maxDrawdown: 0,
      maxProfit: 0,
      percentageProfitable: 0,
      return: 0,
      profitFactor: 0,
      sharpeE: 0,
      tradeCount: 0,
      reportData: {
        data: [],
        trades: [],
      },
    }

    await Promise.all([this.internalStart(), this.onStart(this.data)])

    for (const update of this.data) {
      await Promise.all([
        this.internalUpdate(update, this.data),
        this.onUpdate(update, this.data),
      ])
    }

    const tradeHistory = this.tradeManager.getTradeHistory()
    results.tradeCount = tradeHistory.length

    results.reportData.trades = tradeHistory

    if (tradeHistory.length === 0) {
      return results
    }

    const returns = tradeHistory.map((trade) => {
      const { [TRADE_KEY.PL]: pl = 0, [TRADE_KEY.leverage]: leverage = 1 } =
        trade.getData()
      return pl * leverage
    })

    const totalPL = returns.reduce((sum, r) => sum + r, 0)
    const profitableTrades = returns.filter((r) => r > 0)
    const lossTrades = returns.filter((r) => r < 0)

    results.return = totalPL
    results.percentageProfitable =
      (profitableTrades.length / returns.length) * 100
    results.maxDrawdown = Math.min(...returns)
    results.maxProfit = Math.max(...returns)

    const grossProfit = profitableTrades.reduce((sum, r) => sum + r, 0)
    const grossLoss = Math.abs(lossTrades.reduce((sum, r) => sum + r, 0))
    results.profitFactor =
      grossLoss !== 0 ? grossProfit / grossLoss : grossProfit

    const averageReturn = totalPL / returns.length
    const riskFreeRate = 0
    const marketReturn = await getAvgMarketReturn(
      this.strategyOptions.pair,
      TimeFrame.MONTH,
      60, // 5 years * 12 months
    )

    const covariance = calcCovariance(returns, marketReturn) || 0
    const variance = calcVariance(returns) || 0
    const standardDeviation = calcStddev(returns)

    results.beta = calcBeta(covariance, variance)
    results.alpha = calcAlpha(
      averageReturn,
      riskFreeRate,
      results.beta,
      marketReturn,
    )
    results.sharpeE = calcSharpeE(
      averageReturn,
      results.return,
      riskFreeRate,
      standardDeviation,
    )

    results.reportData.data.push({
      name: `${this.strategyOptions.pair.replaceAll('/', '_')}_${
        this.strategyOptions.timeFrame
      }`,
      type: DataSourceType.PRICE,
      data: this.data,
    })

    this.indicators.forEach((indicatorData, indicatorKey) => {
      results.reportData.data.push({
        name: indicatorKey,
        type: DataSourceType.FACTOR,
        data: indicatorData,
      })
    })

    return results
  }

  private internalStart() {
    // this.provideAllIndicators();
    this.strategyOptions.indicators.forEach((indicator) => {
      indicator.clear()
    })
  }

  private async internalUpdate(update: OHLCV, updates: OHLCV[]): Promise<void> {
    this.feedAllIndicators(update)

    await Promise.all(
      this.strategyOptions.indicators.map(async (indicator) => {
        this.indicators.set(indicator.key, await indicator.generate())
      }),
    )

    this.tradeManager.onUpdate(update, updates)
  }

  protected live() {}

  protected onStart(updates: OHLCV[]): void {}

  protected onUpdate(update: OHLCV, updates: OHLCV[]): void {}
}
