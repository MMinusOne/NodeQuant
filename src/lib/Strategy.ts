import fs from 'fs'
import path from 'path'
import {
  SimulationOptions,
  StrategyOptions,
  TimeFrame,
} from '@/types'
import { OHLCV } from 'ccxt'
import downloadPairData from '@/utils/dataInstaller'
import { CandleSticks } from '@/ChartingSystems'
import { TimelineManager } from '@/managers/TimelineManager'
import { TradeManager } from '@/managers/TradeManager'

export class Strategy {
  private data: OHLCV[] = []
  public readonly strategyOptions: StrategyOptions
  protected indicators: TimelineManager
  public tradeManager: TradeManager = new TradeManager(this)

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
    this.indicators = new TimelineManager(indicators)
    this.downloadAllPairData()
  }

  // Installs the crypto pair data this strategy works on
  private async downloadAllPairData() {
    const { pair, timeFrame, dataLength } = this.strategyOptions
    const dataFolderPath = path.join(process.cwd(), 'data')

    if (!fs.existsSync(dataFolderPath)) fs.mkdirSync(dataFolderPath)

    const data = await downloadPairData(pair, timeFrame, dataLength)
    this.data.push(...data)
  }

  // Backtesting system to simulate trades
  public async backtest({}: SimulationOptions) {
    const { data } = this
    if (!data) return

    this.onStart(data)

    for (const update of data) {
      this.internalUpdate(update, data)
      this.onUpdate(update, data)
    }
  }

  protected onStart(updates: OHLCV[]): void {}

  protected onUpdate(update: OHLCV, updates: OHLCV[]): void {}

  private internalUpdate(update: OHLCV, updates: OHLCV[]) {
    this.tradeManager.onUpdate(update, updates)
  }
}
