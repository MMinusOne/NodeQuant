import fs from 'fs'
import path from 'path'
import {
  BacktestResults,
  SimulationOptions,
  StrategyOptions,
  TimeFrame,
  TRADE_KEY,
} from '@/types'
import { OHLCV } from 'ccxt'
import downloadPairData from '@/utils/dataInstaller'
import { CandleSticks } from '@/ChartingSystems'
import { TradeManager } from '@/managers/TradeManager'
import alpha from '@/utils/maths/alpha'
import beta from '@/utils/maths/beta'
import sharpeE from '@/utils/maths/sharpeE'
import calcCovariance from '@/utils/maths/covariance'
import calcVariance from '@/utils/maths/variance'
import standarddev from '@/utils/maths/standarddev'
import getAvgMarketReturn from '@/utils/getAvgMarketReturn'

export class Strategy {
  private data: OHLCV[] = []
  public readonly strategyOptions: Required<StrategyOptions>
  public tradeManager: TradeManager
  public indicators: Map<string, any> = new Map()

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

    this.data = await downloadPairData(pair, timeFrame, dataLength)
  }

  private provideAllIndicators(): void {
    for (const indicator of this.strategyOptions.indicators) {
      indicator.provide(this.data)
    }
  }

  private feedAllIndicators(data: OHLCV): void {
    for (const indicator of this.strategyOptions.indicators) {
      indicator.feed(data)
    }
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
    }

    await Promise.all([this.internalStart(), this.onStart(this.data)])

    for (const update of this.data) {
      await Promise.all([
        this.internalUpdate(update, this.data),
        this.onUpdate(update, this.data),
      ])
    }

    const tradeHistory = this.tradeManager.getTradeHistory()

    const returns = tradeHistory.map(
      (trade) => trade.getData()[TRADE_KEY.PL] || 0,
    )

    if (returns.length === 0) {
      return results
    }

    const totalPL = returns.reduce((sum, r) => sum + r, 0)
    const profitableTrades = returns.filter((r) => r > 0).length

    results.return = totalPL
    results.percentageProfitable = (profitableTrades / returns.length) * 100
    results.maxDrawdown = Math.min(...returns)
    results.maxProfit = Math.max(...returns)

    // Calculate profit factor
    const grossProfit = returns
      .filter((r) => r > 0)
      .reduce((sum, r) => sum + r, 0)
    const grossLoss = Math.abs(
      returns.filter((r) => r < 0).reduce((sum, r) => sum + r, 0),
    )
    results.profitFactor =
      grossLoss !== 0 ? grossProfit / grossLoss : grossProfit

    // Calculate risk metrics
    const averageReturn = totalPL / returns.length
    const riskFreeRate = 0
    const years = 5
    const marketReturn = await getAvgMarketReturn(
      this.strategyOptions.pair,
      TimeFrame.MONTH,
      12 * years,
    )

    const covariance = calcCovariance(returns, marketReturn) || 0
    const variance = calcVariance(returns) || 0

    results.beta = beta(covariance, variance)
    results.alpha = alpha(
      averageReturn,
      riskFreeRate,
      results.beta,
      marketReturn,
    )

    const standardDeviation = standarddev(returns)
    results.sharpeE = sharpeE(
      averageReturn,
      results.return,
      riskFreeRate,
      standardDeviation,
    )

    return results
  }

  private internalStart() {
    // this.provideAllIndicators();
  }

  private async internalUpdate(update: OHLCV, updates: OHLCV[]): Promise<void> {
    this.feedAllIndicators(update)

    await Promise.all(
      this.strategyOptions.indicators.map(async (indicator) => {
        const data = await indicator.generate()
        this.indicators.set(indicator.key, data)
      }),
    )

    this.tradeManager.onUpdate(update, updates)
  }

  protected onStart(updates: OHLCV[]): void {}

  protected onUpdate(update: OHLCV, updates: OHLCV[]): void {}
}
