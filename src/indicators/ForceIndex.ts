import { Indicator } from '@/lib/Indicator'
import { parseIntoRows } from '@/utils/parseOHLCV'
import ta from 'technicalindicators'

export class ForceIndex extends Indicator {
  public period: number = 9
  constructor(key: string, options: ForceIndexOptions) {
    super({
      name: 'ForceIndex',
      key: key,
      description: 'Force Index.',
    })

    if (options.period) this.period = options.period
  }

  generate(): number[] {
    const { closes, volumes } = parseIntoRows(this.data)

    const forceIndex = ta.ForceIndex.calculate({
      period: this.period,
      close: closes,
      volume: volumes,
    })

    return forceIndex
  }
}

export interface ForceIndexOptions {
  period: number
}
