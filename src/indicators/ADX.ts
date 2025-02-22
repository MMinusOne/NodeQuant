import { Indicator } from '@/lib/Indicator'
import noValueCheck from '@/utils/noValueCheck'
import { parseIntoRows } from '@/utils/parseOHLCV'
import ta from 'technicalindicators'
import { ADXOutput } from 'technicalindicators/declarations/directionalmovement/ADX'

export class ADX extends Indicator {
  public period: number = 9
  constructor(key: string, options: ADXOptions) {
    super({
      name: 'ADX',
      key: key,
      description: 'Trend Strength.',
    })

    if (options.period) this.period = options.period
  }

  generate(): ADXOutput[] {
    const { closes, highs, lows } = parseIntoRows(this.data)

    const adx = ta.ADX.calculate({
      period: this.period,
      close: closes,
      high: highs,
      low: lows,
      format: noValueCheck,
    })

    return adx
  }
}

export interface ADXOptions {
  period?: number
}
