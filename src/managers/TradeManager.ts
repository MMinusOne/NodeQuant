import { CreateTradeOptions } from '@/types'
import { Trade } from '@/lib/Trade'

export class TradeManager {
  private trades = new Map<string, Trade>()

  constructor() {}

//   protected getTrade(): Trade {
//     return new Trade()
//   }
  protected getTrades(): Trade[] {
    return []
  }
  protected createTrade(options: CreateTradeOptions) {}
  protected closeTrade() {}
}
