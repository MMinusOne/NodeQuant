import { parseIntoRows } from '@/utils/parseOHLCV'
import { OHLCV } from 'ccxt'
import { ChartingSystem } from '@/lib'
import ta from 'technicalindicators'
import { RenkoInput } from 'technicalindicators/declarations/chart_types/Renko'

type RenkoOptions = Omit<RenkoInput, 'low' | 'close' | 'high' | 'open'>

export class Renko extends ChartingSystem {
  public options: RenkoOptions

  constructor(options: RenkoOptions) {
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
