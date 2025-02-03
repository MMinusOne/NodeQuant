import fs from 'fs'
import path from 'path'
import exchange from '../exchange'
import { SimulationOptions, StrategyOptions, TimeFrame } from '../types'
import { OHLCV } from 'ccxt'
import installData from '../utils/dataInstaller'
import { ChartingSystem, CandleSticks } from './ChartingSystems'

export class Strategy {
  private strategyOptions: StrategyOptions
  private data: OHLCV[] = []

  constructor(strategyOptions: StrategyOptions) {
    this.strategyOptions = {
      ...strategyOptions,
      name: strategyOptions.name || 'Default Strategy',
      dataLength: strategyOptions.dataLength ?? 100,
      timeFrame: strategyOptions.timeFrame ?? TimeFrame.MINUTE,
      chartType: strategyOptions.chartType ?? new CandleSticks(),
      indicators: strategyOptions.indicators || [],
      simulationOptions: strategyOptions.simulationOptions || {},
    }
    this.installData()
  }

  private async installData() {
    const { pairs, timeFrame, dataLength } = this.strategyOptions
    const dataFolderPath = path.join(process.cwd(), 'data')

    if (!fs.existsSync(dataFolderPath)) {
      fs.mkdirSync(dataFolderPath)
    }

    const dataPromises = pairs.map((pair) =>
      installData(pair, timeFrame, dataLength),
    )
    this.data = (await Promise.all(dataPromises)).flat()
  }

  public async backtest(simulationOptions?: SimulationOptions) {
    // const data = await this.strategyOptions.chartType.transform(this.data)

    // this.onStart(data)

    // for (const candle of data) {
    //   this.onUpdate(candle)
    // }

    // return {}
  }

  protected onStart(candles: OHLCV[]) {}

  protected onUpdate(candle: OHLCV) {}

  public exportTradeList() {}
}
