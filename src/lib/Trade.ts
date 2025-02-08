import {
  NumberReturnType,
  TradeData,
  TRADE_KEY,
  TradeOptions,
  PositionType,
} from '@/types'
import { generateMD5Id } from '@/utils/generateId'
import calcPL from '@/utils/maths/pl'
import { OHLCV } from 'ccxt'

export class Trade {
  private readonly id: string
  private readonly tradeData: Map<TRADE_KEY, any>

  constructor(options: TradeOptions) {
    this.id = generateMD5Id()
    this.tradeData = new Map<TRADE_KEY, any>([
      [TRADE_KEY.ID, this.id],
      [TRADE_KEY.TP, options.TP],
      [TRADE_KEY.SL, options.SL],
      [TRADE_KEY.PL, 0],
      [TRADE_KEY.drawdown, 0],
      [TRADE_KEY.closePrice, undefined],
      [TRADE_KEY.openPrice, undefined],
      [TRADE_KEY.isClosed, false],
      [TRADE_KEY.fee, undefined],
      [TRADE_KEY.blockChainTrack, undefined],
      [TRADE_KEY.timestamp, Date.now()],
      [TRADE_KEY.pair, options.pair],
      [TRADE_KEY.orderType, options.orderType],
      [TRADE_KEY.positionType, options.positionType],
      [TRADE_KEY.isOpen, options.open ?? false],
    ])
  }

  public open(): void {
    if (!this.tradeData.get(TRADE_KEY.isClosed)) {
      this.tradeData.set(TRADE_KEY.isOpen, true)
    }
  }

  public close(): void {
    this.tradeData.set(TRADE_KEY.isOpen, false)
  }

  public updateTP(TP?: number): void {
    this.tradeData.set(TRADE_KEY.TP, TP)
  }

  public updateSL(SL?: number): void {
    this.tradeData.set(TRADE_KEY.SL, SL)
  }

  public getData(): TradeData {
    return Object.fromEntries(this.tradeData) as TradeData
  }

  public onUpdate(update: OHLCV, updates: OHLCV[]): void {
    if (this.tradeData.get(TRADE_KEY.isClosed)) return

    const currentClose = Number(update.at(4) ?? 0)
    if (!currentClose || currentClose === 0) return
    const openPrice = this.tradeData.get(TRADE_KEY.openPrice)
    const positionType = this.tradeData.get(TRADE_KEY.positionType)

    if (!openPrice) {
      this.tradeData.set(TRADE_KEY.openPrice, currentClose)
      return
    }

    const pl = calcPL(currentClose, openPrice, positionType)
    this.tradeData.set(TRADE_KEY.PL, pl)
    this.tradeData.set(TRADE_KEY.closePrice, currentClose)

    const currentDrawdown = this.tradeData.get(TRADE_KEY.drawdown)
    if (pl < currentDrawdown) {
      this.tradeData.set(TRADE_KEY.drawdown, pl)
    }
  }

  public getFootprint(): void {}
}
