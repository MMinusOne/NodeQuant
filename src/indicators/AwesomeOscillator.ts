import { Indicator } from '@/lib/Indicator'
import { parseIntoRows } from '@/utils/parseOHLCV'
import ta from 'technicalindicators'

export class AwesomeOscillator extends Indicator {
  public fastPeriod: number = 14
  public slowPeriod: number = 21
  constructor(key: string, options: AwesomeOscillatorOptions) {
    super({
      name: 'Awesome Oscillator',
      key: key,
      description: 'Awesome Oscillator.',
    })

    if (options.fastPeriod) this.fastPeriod = options.fastPeriod
    if (options.slowPeriod) this.slowPeriod = options.slowPeriod
  }

  generate(): number[] {
    const { highs, lows } = parseIntoRows(this.data)

    const awesomeOscillator = ta.AwesomeOscillator.calculate({
      fastPeriod: this.fastPeriod,
      slowPeriod: this.slowPeriod,
      high: highs,
      low: lows,
    })

    return awesomeOscillator
  }
}

export interface AwesomeOscillatorOptions {
  fastPeriod: number
  slowPeriod: number
}
