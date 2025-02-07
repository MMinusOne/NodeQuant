import { NumberReturnType, TradeData, TRADE_KEY, TradeOptions } from '@/types'
import { generateMD5Id } from '@/utils/generateId'
import { OHLCV } from 'ccxt'

export class Trade {
  public id: string = generateMD5Id()
  private tradeData: Map<TRADE_KEY, TradeData[TRADE_KEY]> = new Map<
    TRADE_KEY,
    TradeData[TRADE_KEY]
  >([
    [TRADE_KEY.ID, generateMD5Id()],
    [TRADE_KEY.PL, 0],
    [TRADE_KEY.closePrice, undefined],
    [TRADE_KEY.openPrice, undefined],
    [TRADE_KEY.isClosed, false],
    [TRADE_KEY.fee, undefined],
    [TRADE_KEY.blockChainTrack, undefined],
    [TRADE_KEY.timestamp, new Date().getTime()],
  ])

  constructor(tradeOptions: TradeOptions) {
    this.tradeData.set(TRADE_KEY.TP, tradeOptions.TP)
    this.tradeData.set(TRADE_KEY.SL, tradeOptions.SL)
    this.tradeData.set(TRADE_KEY.pair, tradeOptions.pair)
    this.tradeData.set(TRADE_KEY.isOpen, tradeOptions.open ?? false)
  }

  protected open() {
    if (this.tradeData.get(TRADE_KEY.isClosed)) return
    this.tradeData.set(TRADE_KEY.isOpen, true)
  }

  protected close() {
    this.tradeData.set(TRADE_KEY.isOpen, false)
  }

  protected updateTP(TP: number | undefined = undefined) {
    this.tradeData.set(TRADE_KEY.TP, TP)
  }

  protected updateSL(SL: number | undefined = undefined) {
    this.tradeData.set(TRADE_KEY.SL, SL)
  }

  protected getData() {
    const dataObject: { [key in TRADE_KEY]: TradeData[TRADE_KEY] } = {} as any
    this.tradeData.forEach((value, key) => {
      dataObject[key] = value
    })
    return dataObject
  }

  protected onUpdate(update: OHLCV) {
    const close = update.at(4)
    const open = this.tradeData.get(TRADE_KEY.openPrice)
    if (!open || !close) return
    const pl = 100 * (open / close)
    this.tradeData.set(TRADE_KEY.PL, pl)
  }
  public getFootprint() {}
}
