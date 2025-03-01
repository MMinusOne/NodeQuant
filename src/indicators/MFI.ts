import { Indicator } from '@/lib/Indicator'
import noValueCheck from '@/utils/noValueCheck'
import { parseIntoRows } from '@/utils/parseOHLCV'
import ta from 'technicalindicators'

export class MFI extends Indicator {
  public period: number = 12

  constructor(key: string, options: MFIOptions) {
    super({
      name: 'MFI',
      key: key,
      description: 'Money Flow Index.',
    })

    if (options.period) this.period = options.period
  }

  generate(): number[] {
    const { closes, highs, lows, volumes } = parseIntoRows(this.data)

    const adl = ta.MFI.calculate({
      volume: volumes,
      close: closes,
      high: highs,
      low: lows,
      period: this.period,
      format: noValueCheck,
    })

    return adl
  }
}

interface MFIOptions {
  period: number
}
