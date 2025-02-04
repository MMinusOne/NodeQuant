import fs from 'fs'
import path from 'path'
import {
  SimulationOptions,
  StrategyData,
  StrategyOptions,
  TimeFrame,
} from '../types'
import { OHLCV } from 'ccxt'
import installData from '../utils/dataInstaller'
import { CandleSticks } from '../ChartingSystems'
import { TimelineManager } from '@/managers/TimelineManager'

export class Strategy {
  private dataProfiles: StrategyData[] = []
  private strategyOptions: StrategyOptions
  protected indicators: TimelineManager

  constructor(strategyOptions: StrategyOptions) {
    this.strategyOptions = {
      ...strategyOptions,
      name: strategyOptions.name,
      dataLength: strategyOptions.dataLength ?? 100,
      timeFrame: strategyOptions.timeFrame ?? TimeFrame.MINUTE,
      chartType: strategyOptions.chartType ?? new CandleSticks(),
      indicators: strategyOptions.indicators ?? [],
      simulationOptions: strategyOptions.simulationOptions,
    }

    this.installData()

    this.indicators = new TimelineManager(this.strategyOptions.indicators)
  }

  // Installs the crypto pair data this strategy works on
  private async installData() {
    const { pairs, timeFrame, dataLength } = this.strategyOptions
    const dataFolderPath = path.join(process.cwd(), 'data')

    if (!fs.existsSync(dataFolderPath)) {
      fs.mkdirSync(dataFolderPath)
    }

    await Promise.all(
      pairs.map(async (pair) => {
        const data = await installData(pair, timeFrame, dataLength)
        this.dataProfiles.push({
          pair,
          timeframe: this.strategyOptions.timeFrame,
          data,
        })
      }),
    )
  }

  // Backtesting system to simulate trades
  public async backtest(simulationOptions: SimulationOptions) {
    const { pair } = simulationOptions

    if (!this.strategyOptions.pairs.includes(pair)) return

    const dataProfile = this.dataProfiles.find(
      (bucket) =>
        bucket.pair === pair &&
        bucket.timeframe === this.strategyOptions.timeFrame,
    )

    if (!dataProfile) return

    const { data } = dataProfile

    this.onStart(data)
  }

  protected onStart(candles: OHLCV[]): any {}

  // protected onUpdate(candle: OHLCV, candles: OHLCV[]): any {}
}
