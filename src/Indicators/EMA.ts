import { Indicator } from '@/lib/Indicator'
import { OHLCV } from 'ccxt'
import ta from 'technicalindicators'

export class EMA extends Indicator {
  public period: number = 9
  constructor(key: string, period: number) {
    super({
      name: 'EMA',
      key: key,
      description: 'Exponential Moving Average.',
    })

    this.period = period
  }

  generate(): number[] {
    const values = this.data
      .map((update) => update[4])
      .filter((value): value is number => value !== undefined)

    const ema = ta.EMA.calculate({
      period: this.period,
      values: values,
    })

    return ema
  }
}
