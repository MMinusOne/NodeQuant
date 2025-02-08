import {
  NumberReturnType,
  TradeData,
  TRADE_KEY,
  TradeOptions,
  PositionType,
} from '@/types'
import { generateMD5Id } from '@/utils/generateId'
import { OHLCV } from 'ccxt'

export class Trade {
  public id: string = generateMD5Id()
  private tradeData: Map<TRADE_KEY, any>

  constructor(tradeOptions: TradeOptions) {
    this.tradeData = new Map<TRADE_KEY, any>([
      [TRADE_KEY.ID, generateMD5Id()],
      [TRADE_KEY.TP, tradeOptions.TP],
      [TRADE_KEY.SL, tradeOptions.SL],
      [TRADE_KEY.PL, 0],
      [TRADE_KEY.drawdown, 0],
      [TRADE_KEY.closePrice, undefined],
      [TRADE_KEY.openPrice, undefined],
      [TRADE_KEY.isClosed, false],
      [TRADE_KEY.fee, undefined],
      [TRADE_KEY.blockChainTrack, undefined],
      [TRADE_KEY.timestamp, Date.now()],
      [TRADE_KEY.pair, tradeOptions.pair],
      [TRADE_KEY.orderType, tradeOptions.orderType],
      [TRADE_KEY.positionType, tradeOptions.positionType],
      [TRADE_KEY.isOpen, tradeOptions.open ?? false],
    ])
  }

  public open() {
    if (!this.tradeData.get(TRADE_KEY.isClosed)) {
      this.tradeData.set(TRADE_KEY.isOpen, true)
    }
  }

  public close() {
    this.tradeData.set(TRADE_KEY.isOpen, false)
  }

  public updateTP(TP?: number) {
    this.tradeData.set(TRADE_KEY.TP, TP)
  }

  public updateSL(SL?: number) {
    this.tradeData.set(TRADE_KEY.SL, SL)
  }

  public getData(): TradeData {
    return Object.fromEntries(this.tradeData) as TradeData
  }

  public onUpdate(update: OHLCV, updates: OHLCV[]) {
    const currentClose = update.at(4)
    const open = this.tradeData.get(TRADE_KEY.openPrice)
    const positionType = this.tradeData.get(TRADE_KEY.positionType)
    if (open && currentClose) {
      const pl =
        positionType === PositionType.LONG
          ? 100 * ((currentClose - open) / open)
          : 100 * ((open - currentClose) / open)
      this.tradeData.set(TRADE_KEY.PL, pl)

      const currentDrawdown = this.tradeData.get(TRADE_KEY.drawdown);
      if (pl < currentDrawdown) {
        this.tradeData.set(TRADE_KEY.drawdown, pl);
      }
    }
  }

  public getFootprint() {}
}
