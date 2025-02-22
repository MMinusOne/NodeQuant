import { Indicator } from '@/lib/Indicator'
import noValueCheck from '@/utils/noValueCheck'
import { parseIntoRows } from '@/utils/parseOHLCV'
import ta from 'technicalindicators'

export class VWAP extends Indicator {
  constructor(key: string) {
    super({
      name: 'VWAP',
      key: key,
      description: 'Volume-weighted Average Price.',
    })
  }

  generate(): number[] {
    const { closes, highs, lows, opens, timestamps, volumes } = parseIntoRows(
      this.data,
    )

    const vwap = ta.VWAP.calculate({
      close: closes,
      high: highs,
      low: lows,
      volume: volumes,
      format: noValueCheck,
    })

    return vwap
  }
}
