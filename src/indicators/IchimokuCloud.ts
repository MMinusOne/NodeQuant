import { Indicator } from '@/lib/Indicator'
import { parseIntoRows } from '@/utils/parseOHLCV'
import ta from 'technicalindicators'
import { IchimokuCloudOutput } from 'technicalindicators/declarations/ichimoku/IchimokuCloud'
import { StochasticRSIOutput } from 'technicalindicators/declarations/momentum/StochasticRSI'
import { BollingerBandsOutput } from 'technicalindicators/declarations/volatility/BollingerBands'

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
