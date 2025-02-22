import { Indicator } from '@/lib/Indicator'
import noValueCheck from '@/utils/noValueCheck'
import { parseIntoRows } from '@/utils/parseOHLCV'
import ta from 'technicalindicators'
import { IchimokuCloudOutput } from 'technicalindicators/declarations/ichimoku/IchimokuCloud'

export class IchimokuCloud extends Indicator {
  public basePeriod: number = 9
  public conversionPeriod: number = 12
  public spanPeriod: number = 16
  public displacement: number = 21

  constructor(key: string, options: IchimokuCloudOptions) {
    super({
      name: 'Ichimoku Cloud',
      key: key,
      description: 'Ichimoku Cloud.',
    })
    if (options.basePeriod) this.basePeriod = options.basePeriod
    if (options.conversionPeriod)
      this.conversionPeriod = options.conversionPeriod
    if (options.spanPeriod) this.spanPeriod = options.spanPeriod
    if (options.displacement) this.displacement = options.displacement
  }

  generate(): IchimokuCloudOutput[] {
    const { highs, lows } = parseIntoRows(this.data)

    const ichimoku = ta.IchimokuCloud.calculate({
      basePeriod: this.basePeriod,
      conversionPeriod: this.conversionPeriod,
      spanPeriod: this.spanPeriod,
      displacement: this.displacement,
      high: highs,
      low: lows,
      format: noValueCheck,
    })

    return ichimoku
  }
}

export interface IchimokuCloudOptions {
  basePeriod: number
  conversionPeriod: number
  spanPeriod: number
  displacement: number
}
