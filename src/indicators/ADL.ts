import { Indicator } from '@/lib/Indicator'
import { parseIntoRows } from '@/utils/parseOHLCV'
import ta from 'technicalindicators'

export class ADL extends Indicator {
  public period: number = 9
  constructor(key: string) {
    super({
      name: 'ADL',
      key: key,
      description: 'Accumulation Distribution.',
    })
  }

  generate(): number[] {
    const { closes, highs, lows, volumes } = parseIntoRows(this.data)

    const adl = ta.ADL.calculate({
      volume: volumes,
      close: closes,
      high: highs,
      low: lows,
    })

    return adl
  }
}
