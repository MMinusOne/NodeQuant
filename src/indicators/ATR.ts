import { Indicator } from '@/lib/Indicator'
import noValueCheck from '@/utils/noValueCheck'
import { parseIntoRows } from '@/utils/parseOHLCV'
import ta from 'technicalindicators'

export class ATR extends Indicator {
  public period: number = 14
  constructor(key: string, options: ATROptions) {
    super({
      name: 'ATR',
      key: key,
      description: 'Average True Range.',
    })

    if (options.period) this.period = options.period
  }

  generate(): number[] {
    const { highs, lows, closes } = parseIntoRows(this.data)

    const atr = ta.ATR.calculate({
      period: this.period,
      high: highs,
      low: lows,
      close: closes,
      format: noValueCheck,
    })

    return atr
  }
}

export interface ATROptions {
  period?: number
}
