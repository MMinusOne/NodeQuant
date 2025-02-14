import { Indicator } from '@/lib/Indicator'
import ta from 'technicalindicators'

export class SMA extends Indicator {
  public period: number = 9
  constructor(key: string, period: number) {
    super({
      name: 'SMA',
      key: key,
      description: 'Simple Moving Average.',
    })

    this.period = period
  }

  generate(): number[] {
    const values = this.data
      .map((update) => update[4])
      .filter((value): value is number => value !== undefined)

    const sma = ta.SMA.calculate({
      period: this.period,
      values: values,
    })

    return sma
  }
}
