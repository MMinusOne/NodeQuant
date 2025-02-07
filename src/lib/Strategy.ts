import fs from 'fs'
import path from 'path'
import {
  SimulationOptions,
  StrategyData,
  StrategyOptions,
  TimeFrame,
} from '@/types'
import { OHLCV } from 'ccxt'
import downloadPairData from '@/utils/dataInstaller'
import { CandleSticks } from '@/ChartingSystems'
import { TimelineManager } from '@/managers/TimelineManager'
import { TradeManager } from '@/managers/TradeManager'

export class Strategy {
  private dataProfiles: StrategyData[] = []
  private strategyOptions: StrategyOptions
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
      pairs,
    } = strategyOptions

    this.strategyOptions = {
      name,
      dataLength,
      timeFrame,
      chartType,
      indicators,
      simulationOptions,
      pairs,
    }
    this.indicators = new TimelineManager(indicators)
    this.downloadAllPairData()
  }

  // Installs the crypto pair data this strategy works on
  private async downloadAllPairData() {
    const { pairs, timeFrame, dataLength } = this.strategyOptions
    const dataFolderPath = path.join(process.cwd(), 'data')

    if (!fs.existsSync(dataFolderPath)) fs.mkdirSync(dataFolderPath)

    await Promise.all(
      pairs.map(async (pair) => {
        const data = await downloadPairData(pair, timeFrame, dataLength)
        this.dataProfiles.push({
          pair,
          timeframe: this.strategyOptions.timeFrame,
          data,
        })
      }),
    )
  }

  // Backtesting system to simulate trades
  public async backtest({ pair }: SimulationOptions) {
    console.log(this.strategyOptions.pairs, pair)
    if (!this.strategyOptions.pairs.includes(pair)) return

    console.log(this.dataProfiles);
    console.log(this.strategyOptions.timeFrame)

    const dataProfile = this.dataProfiles.find(
      (profile) =>
        profile.pair === pair &&
        profile.timeframe === this.strategyOptions.timeFrame,
    )

    
    console.log(dataProfile)
    if (!dataProfile) return

    const { data } = dataProfile
    console.log(this.onStart)
    this.onStart(data)

    for (const update of data) {
      this.onUpdate(update, data)
    }
  }

  protected onStart(updates: OHLCV[]): void {}

  protected onUpdate(update: OHLCV, updates: OHLCV[]): void {}
}
