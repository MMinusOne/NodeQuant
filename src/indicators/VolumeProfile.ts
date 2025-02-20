import { Indicator } from '@/lib/Indicator'
import { parseIntoRows } from '@/utils/parseOHLCV'
import ta from 'technicalindicators'

export class VolumeProfile extends Indicator {
  public numberOfBars: number = 20
  constructor(key: string, options: VolumeProfileOptions) {
    super({
      name: 'Volume Profile',
      key: key,
      description: 'Volume Profile.',
    })

    if (options.numberOfBars) this.numberOfBars = options.numberOfBars
  }

  generate(): number[] {
    const { closes, highs, lows, opens, volumes } = parseIntoRows(this.data)

    const volumeProfile = ta.VolumeProfile.calculate({
      close: closes,
      high: highs,
      low: lows,
      open: opens,
      volume: volumes,
      noOfBars: this.numberOfBars,
    })

    return volumeProfile
  }
}

export interface VolumeProfileOptions {
  numberOfBars?: number
}
