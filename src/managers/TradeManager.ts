import { CreateTradeOptions } from '@/types'
import { Trade } from '@/lib/Trade'
import { Strategy } from '@/lib/Strategy'
import { OHLCV } from 'ccxt'

export class TradeManager {
  private trades = new Map<string, Trade>()
  private strategy: Strategy

  constructor(strategy: Strategy) {
    this.strategy = strategy
  }

  //   protected getTrade(): Trade {
  //     return new Trade()
  //   }
  public onUpdate(update: OHLCV, updates: OHLCV[]) {}
  protected getTrades(): Trade[] {
    return []
  }
  protected createTrade(options: CreateTradeOptions): Trade {
    const trade = new Trade({
      orderType: options.orderType,
      pair: this.strategy.strategyOptions.pair,
      positionSize: options.size,
      positionType: options.positionType,
      leverage: options.leverage ?? 1,
      open: options.open ?? false,
      SL: options.riskOptions?.SL,
      TP: options.riskOptions?.TP,
      isLive: false,
    })

    return trade
  }
  protected closeTrade(tradeOrTradeId: Trade | string) {}
}
