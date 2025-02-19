import { Indicator } from '@/lib/Indicator'
import ta from 'technicalindicators'

export class WEMA extends Indicator {
  public period: number = 9
  constructor(key: string, options: WEMAOptions) {
    super({
      name: 'Weighted Exponential Moving Average',
      key: key,
      description: 'Weighted Exponential Moving Average.',
    })

    if(options.period) this.period = options.period
  }

  generate(): number[] {
    const values = this.data
      .map((update) => update[4])
      .filter((value): value is number => value !== undefined)

    const wema = ta.WEMA.calculate({
      period: this.period,
      values: values,
    })

    return wema
  }
}

export interface WEMAOptions {
  period?: number
}