import { Indicator } from '@/lib/Indicator'
import noValueCheck from '@/utils/noValueCheck'
import { parseIntoRows } from '@/utils/parseOHLCV'
import ta from 'technicalindicators'

export class CCI extends Indicator {
  public period: number = 9
  constructor(key: string, options: CCIOptions) {
    super({
      name: 'CCI',
      key: key,
      description: 'Commodity Channel Index.',
    })

    if (options.period) this.period = options.period
  }

  generate(): number[] {
    const { highs, lows, closes } = parseIntoRows(this.data)

    const cci = ta.CCI.calculate({
      period: this.period,
      close: closes,
      high: highs,
      low: lows,
      format: noValueCheck,
    })

    return cci
  }
}

export interface CCIOptions {
  period?: number
}
