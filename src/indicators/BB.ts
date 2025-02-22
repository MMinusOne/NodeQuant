import { Indicator } from '@/lib/Indicator'
import noValueCheck from '@/utils/noValueCheck'
import ta from 'technicalindicators'
import { BollingerBandsOutput } from 'technicalindicators/declarations/volatility/BollingerBands'

export class BB extends Indicator {
  public period: number = 9
  public stdDev: number = 1

  constructor(key: string, options: BBOptions) {
    super({
      name: 'Bollinger Bands',
      key: key,
      description: 'Boillinger Bands.',
    })

    if (options.period) this.period = options.period
    if (options.stdDev) this.stdDev = options.stdDev
  }

  generate(): BollingerBandsOutput[] {
    const values = this.data
      .map((update) => update[4])
      .filter((value): value is number => value !== undefined)

    const bb = ta.BollingerBands.calculate({
      values,
      period: this.period,
      stdDev: this.stdDev,
      format: noValueCheck,
    })

    return bb
  }
}

export interface BBOptions {
  period?: number
  stdDev?: number
}
