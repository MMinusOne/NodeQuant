import { Trade } from '@/lib'
import { TRADE_KEY } from '@/types'

export class PositionManager {
  private trade: Trade
  constructor(trade: Trade) {
    this.trade = trade
  }

    public updateTP(TP?: number): void {
      this.trade.tradeData.set(TRADE_KEY.TP, TP)
    }
  
    public updateSL(SL?: number): void {
      this.trade.tradeData.set(TRADE_KEY.SL, SL)
    }

    public cut() { }

    public add() { }
}
