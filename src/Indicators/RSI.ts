import { Indicator } from '@/lib/Indicator'
import ta from 'technicalindicators'

export class RSI extends Indicator {
  public period: number = 9
  constructor(key: string, period: number) {
    super({
      name: 'RSI',
      key: key,
      description: 'Simple Moving Average.',
    })

    this.period = period
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
