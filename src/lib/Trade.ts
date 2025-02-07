import {
  NumberReturnType,
  TradeConclusionData,
  TradeLiveData,
  TradeOptions,
} from '@/types'
import { generateMD5Id } from '@/utils/generateId'

export class Trade {
  public id: string = generateMD5Id()
  private conclusionData: TradeConclusionData = {}
  private liveData: TradeLiveData = {
    isOpen: false,
    isClosed: false,
    openPrice: undefined,
    closePrice: undefined,
    fee: undefined,
    PL: 0,
  }
  private tradeOptions: TradeOptions

  constructor(tradeOptions: TradeOptions) {
    this.tradeOptions = tradeOptions
  }

  protected createOpenSignature() {}
  protected createCloseSignature() {}
  protected open() {}
  protected close() {}
  protected getCurrentPnL(type?: NumberReturnType) {
    const returnType = type ?? NumberReturnType.RELATIVE
  }
  protected getConclusionData() {}
  protected updateTP() {}
  protected updateSL() {}
  public getFootprint() {}
}
