import { parseIntoRows } from '@/utils/parseOHLCV'
import { OHLCV } from 'ccxt'
import { ChartingSystem } from '@/ChartingSystems/index'
import ta from 'technicalindicators'

export class CandleSticks extends ChartingSystem {
  public transform(rawData: OHLCV[]): ta.CandleList {
    const { opens, highs, lows, closes, timestamps, volumes } =
      parseIntoRows(rawData)
    return {
      open: opens,
      high: highs,
      low: lows,
      close: closes,
      timestamp: timestamps,
      volume: volumes,
    }
  }
}
