import { Indicator } from '@/lib/Indicator'
import noValueCheck from '@/utils/noValueCheck'
import { parseIntoRows } from '@/utils/parseOHLCV'
import ta from 'technicalindicators'

export class SD extends Indicator {
  public period: number = 12
  constructor(key: string, options: SDOptions) {
    super({
      name: 'SD',
      key: key,
      description: 'Standard Deviation.',
    })

    if (options.period) this.period = options.period
  }

  generate(): number[] {
    const { closes } = parseIntoRows(this.data)

    const sd = ta.SD.calculate({
      period: this.period,
      values: closes,
      format: noValueCheck,
    })

    return sd
  }
}

interface SDOptions {
  period: number
}
