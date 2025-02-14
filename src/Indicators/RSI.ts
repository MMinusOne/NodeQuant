import { Indicator } from '@/lib/Indicator'
import ta from 'technicalindicators'

export class RSI extends Indicator {
  public period: number = 14
  constructor(key: string, options: RSIOptions) {
    super({
      name: 'RSI',
      key: key,
      description: 'Relative Strength Index.',
    })

    if(options.period) this.period = options.period
  }

  generate(): number[] {
    const values = this.data
      .map((update) => update[4])
      .filter((value): value is number => value !== undefined)

    const rsi = ta.RSI.calculate({
      period: this.period,
      values: values,
    })

    return rsi
  }
}

export interface RSIOptions {
  period?: number
}
