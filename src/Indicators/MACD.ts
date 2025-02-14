import { Indicator } from '@/lib/Indicator'
import ta from 'technicalindicators'
import { MACDOutput } from 'technicalindicators/declarations/moving_averages/MACD'

export class MACD extends Indicator {
  public fastPeriod: number = 12
  public slowPeriod: number = 26
  public signalSmoothing: number = 9
  public MAType: 'EMA' | 'SMA' = 'SMA'
  public MAOscillatorType: 'EMA' | 'SMA' = 'SMA'

  constructor(key: string, options: MACDOptions) {
    super({
      name: 'MACD',
      key: key,
      description: 'Moving Average Convergence/Divergence.',
    })

    if (options.fastPeriod) this.fastPeriod = options.fastPeriod
    if (options.slowPeriod) this.slowPeriod = options.slowPeriod
    if (options.signalSmoothing) this.signalSmoothing = options.signalSmoothing
    if (options.MAOscillatorType)
      this.MAOscillatorType = options.MAOscillatorType
    if (options.MAType) this.MAType = options.MAType
  }

  generate(): MACDOutput[] {
    const values = this.data
      .map((update) => update[4])
      .filter((value): value is number => value !== undefined)

    const macd = ta.MACD.calculate({
      fastPeriod: this.fastPeriod,
      slowPeriod: this.slowPeriod,
      SimpleMAOscillator: this.MAOscillatorType === 'SMA' ? true : false,
      SimpleMASignal: this.MAType === 'SMA' ? true : false,
      signalPeriod: this.signalSmoothing,
      values: values,
    })

    return macd
  }
}

export interface MACDOptions {
  fastPeriod?: number
  slowPeriod?: number
  signalSmoothing?: number
  MAType?: 'EMA' | 'SMA'
  MAOscillatorType?: 'EMA' | 'SMA'
}
