import { parseIntoRows } from '@/utils/parseOHLCV'
import { OHLCV } from 'ccxt'
import { ChartingSystem } from '@/lib'
import { HeikinAshiInput } from 'technicalindicators/declarations/chart_types/HeikinAshi'
import ta from 'technicalindicators'

type HeikenAishiOptions = Omit<
  HeikinAshiInput,
  'low' | 'close' | 'high' | 'open'
>

export class HeikenAishi extends ChartingSystem {
  public options: HeikenAishiOptions

  constructor(options: HeikenAishiOptions) {
    super()
    this.options = options
  }

  public transform(rawData: OHLCV[]) {
    const { opens, highs, lows, closes, volumes, timestamps } =
      parseIntoRows(rawData)
    return ta.heikinashi({
      ...this.options,
      open: opens,
      high: highs,
      low: lows,
      close: closes,
      volume: volumes,
      timestamp: timestamps,
    })
  }
}
