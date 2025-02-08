import fs from 'fs'
import path from 'path'
import { SimulationOptions, StrategyOptions, TimeFrame } from '@/types'
import { OHLCV } from 'ccxt'
import downloadPairData from '@/utils/dataInstaller'
import { CandleSticks } from '@/ChartingSystems'
import { TimelineManager } from '@/managers/TimelineManager'
import { TradeManager } from '@/managers/TradeManager'
import { Indicator } from './Indicator'

export class Strategy {
  private data: OHLCV[] = []
  public readonly strategyOptions: StrategyOptions
  protected indicators: TimelineManager
  public tradeManager: TradeManager = new TradeManager(this)
  private rawIndicators: Indicator[] = []

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
      simulationOptions,
      pair,
    }
    this.rawIndicators = indicators
    this.indicators = new TimelineManager(indicators)
  }

  // Installs the crypto pair data this strategy works on
  public async loadData() {
    const { pair, timeFrame, dataLength } = this.strategyOptions
    const dataFolderPath = path.join(process.cwd(), 'data')

    if (!fs.existsSync(dataFolderPath)) fs.mkdirSync(dataFolderPath)

    const data = await downloadPairData(pair, timeFrame, dataLength)
    this.data.push(...data)
  }

  private provideAllIndicators() {
    for (const rawIndicator of this.rawIndicators) {
      rawIndicator.provide(this.data)
    }
  }
  private feedAllIndicators(data: OHLCV) {
    for (const rawIndicator of this.rawIndicators) {
      rawIndicator.feed(data)
    }
  }

  // Backtesting system to simulate trades
  public async backtest({}: SimulationOptions) {
    const { data } = this
    if (!data.length) return

    this.onStart(data)
    this.internalStart()

    for (const updateIndex in data) {
      const update = this.data.at(parseInt(updateIndex))!
      this.internalUpdate(update, data)
      this.onUpdate(update, data)
    }
  }

  protected onStart(updates: OHLCV[]): void {}

  protected onUpdate(update: OHLCV, updates: OHLCV[]): void {}

  private internalStart() {
    // this.provideAllIndicators()
  }

  private internalUpdate(update: OHLCV, updates: OHLCV[]) {
    this.tradeManager.onUpdate(update, updates)
    this.feedAllIndicators(update)
  }
}
