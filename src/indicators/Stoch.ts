import { Indicator } from '@/lib/Indicator'
import noValueCheck from '@/utils/noValueCheck'
import { parseIntoRows } from '@/utils/parseOHLCV'
import ta from 'technicalindicators'
import { StochasticOutput } from 'technicalindicators/declarations/momentum/Stochastic'

export class StockRSI extends Indicator {
  public period: number = 12
  public signalPeriod: number = 26

  constructor(key: string, options: StochOptions) {
    super({
      name: 'Stochastic',
      key: key,
      description: 'Stochastic Indicator.',
    })

    if (options.period) this.period = options.period
    if (options.signalPeriod) this.signalPeriod = options.signalPeriod
  }

  generate(): StochasticOutput[] {
    const { closes, highs, lows } = parseIntoRows(this.data)

    const stoch = ta.Stochastic.calculate({
      close: closes,
      high: highs,
      low: lows,
      period: this.period,
      signalPeriod: this.signalPeriod,
      format: noValueCheck,
    })

    return stoch
  }
}

export interface StochOptions {
  period: number
  signalPeriod: number
}
