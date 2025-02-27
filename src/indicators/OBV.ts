import { Indicator } from '@/lib/Indicator'
import noValueCheck from '@/utils/noValueCheck'
import { parseIntoRows } from '@/utils/parseOHLCV'
import ta from 'technicalindicators'

export class OBV extends Indicator {
  constructor(key: string) {
    super({
      name: 'OBV',
      key: key,
      description: 'Balance Volume.',
    })
  }

  generate(): number[] {
    const { closes, volumes } = parseIntoRows(this.data)

    const obv = ta.OBV.calculate({
      volume: volumes,
      close: closes,
      format: noValueCheck,
    })

    return obv
  }
}
