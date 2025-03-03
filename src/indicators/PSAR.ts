import { Indicator } from '@/lib/Indicator'
import noValueCheck from '@/utils/noValueCheck'
import { parseIntoRows } from '@/utils/parseOHLCV'
import ta from 'technicalindicators'

export class PSAR extends Indicator {
  public max: number = 3
  public step: number = 2
  constructor(key: string, options: PSAROptions) {
    super({
      name: 'PSAR',
      key: key,
      description: 'Parabolic SAR.',
    })

    if (options.max) this.max = options.max
    if (options.step) this.step = options.step
  }

  generate(): number[] {
    const { closes, highs, lows, volumes } = parseIntoRows(this.data)

    const psar = ta.PSAR.calculate({
      high: highs,
      low: lows,
      max: this.max,
      step: this.step,
      format: noValueCheck,
    })

    return psar
  }
}

interface PSAROptions {
  max: number
  step: number
}
