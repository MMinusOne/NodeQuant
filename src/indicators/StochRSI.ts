import { Indicator } from '@/lib/Indicator'
import noValueCheck from '@/utils/noValueCheck'
import ta from 'technicalindicators'
import { StochasticRSIOutput } from 'technicalindicators/declarations/momentum/StochasticRSI'

export class StockRSI extends Indicator {
  public dPeriod: number = 9
  public kPeriod: number = 12
  public rsiPeriod: number = 14
  public stochasticPeriod: number = 16

  constructor(key: string, options: StockRSIOptions) {
    super({
      name: 'Bollinger Bands',
      key: key,
      description: 'Boillinger Bands.',
    })

    if (options.dPeriod) this.dPeriod = options.dPeriod
    if (options.kPeriod) this.kPeriod = options.kPeriod
    if (options.rsiPeriod) this.rsiPeriod = options.rsiPeriod
    if (options.stochasticPeriod)
      this.stochasticPeriod = options.stochasticPeriod
  }

  generate(): StochasticRSIOutput[] {
    const values = this.data
      .map((update) => update[4])
      .filter((value): value is number => value !== undefined)

    const stochRSI = ta.StochasticRSI.calculate({
      values,
      dPeriod: this.dPeriod,
      kPeriod: this.kPeriod,
      rsiPeriod: this.rsiPeriod,
      stochasticPeriod: this.stochasticPeriod,
      format: noValueCheck,
    })

    return stochRSI
  }
}

export interface StockRSIOptions {
  dPeriod: number
  kPeriod: number
  rsiPeriod: number
  stochasticPeriod: number
}
