import { CreateTradeOptions } from '@/types'
import { Trade } from '@/lib/Trade'
import { Strategy } from '@/lib/Strategy'

export class TradeManager {
  private trades = new Map<string, Trade>()

  constructor(strategy: Strategy) {}

  //   protected getTrade(): Trade {
  //     return new Trade()
  //   }
  protected getTrades(): Trade[] {
    return []
  }
  protected createTrade(options: CreateTradeOptions) {}
  protected closeTrade(tradeOrTradeId: Trade | string) {}
}
