import { CreateTradeOptions, TRADE_KEY } from '@/types'
import { Trade } from '@/lib/Trade'
import { Strategy } from '@/lib/Strategy'
import { OHLCV } from 'ccxt'

export class TradeManager {
  private trades = new Map<string, Trade>()
  private strategy: Strategy

  constructor(strategy: Strategy) {
    this.strategy = strategy
  }

  public onUpdate(update: OHLCV, updates: OHLCV[]) {
    for (const trade of this.trades.values()) {
      if (!trade.getData()[TRADE_KEY.isClosed]) {
        trade.onUpdate(update, updates)
      }
    }
  }

  public getTrade(id: string): Trade | null {
    return this.trades.get(id) || null
  }

  public getTrades(): Trade[] {
    return Array.from(this.trades.values())
  }

  public createTrade(options: CreateTradeOptions): Trade {
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

    this.trades.set(trade.id, trade)
    return trade
  }

  public getTradeHistory() {
    const trades = this.getTrades()

    return trades.filter(async (trade) => {
      const tradeData = await trade.getData()
      return tradeData[TRADE_KEY.isClosed]
    })
  }

  public closeTrade(tradeId: string) {
    this.getTrade(tradeId)?.close()
  }
}
