import { parseIntoRows } from '@/utils/parseOHLCV'
import { OHLCV } from 'ccxt'
import { ChartingSystem } from '@/chartingSystems/ChartingSystem'
import ta from 'technicalindicators'
import { RenkoInput } from 'technicalindicators/declarations/chart_types/Renko'

export class Renko extends ChartingSystem {
  public options: Omit<RenkoInput, 'low' | 'close' | 'high' | 'open'>

  constructor(options: Omit<RenkoInput, 'low' | 'close' | 'high' | 'open'>) {
    super()
    this.options = options
  }

  public transform(rawData: OHLCV[]): ta.CandleList {
    const { opens, highs, lows, closes } = parseIntoRows(rawData)
    return ta.renko({
      ...this.options,
      open: opens,
      high: highs,
      low: lows,
      close: closes,
    })
  }
}
