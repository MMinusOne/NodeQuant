import { Indicator } from '@/lib/Indicator'
import { parseIntoRows } from '@/utils/parseOHLCV'
import ta from 'technicalindicators'

export class ATR extends Indicator {
  public period: number = 9
  constructor(key: string, period: number) {
    super({
      name: 'ATR',
      key: key,
      description: 'Simple Moving Average.',
    })

    this.period = period
  }

  generate(): number[] {
    const { highs, lows, closes } = parseIntoRows(this.data)

    const atr = ta.ATR.calculate({
      period: this.period,
      high: highs,
      low: lows,
      close: closes,
    })

    return atr
  }
}
