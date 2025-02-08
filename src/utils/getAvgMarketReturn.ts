import exchange from '@/exchange'
import { CryptoPair, TimeFrame } from '@/types'

export default async function getAvgMarketReturn(
  pair: CryptoPair,
  timeFrame: TimeFrame,
  dataLength: number,
): Promise<number> {
  const data = await exchange.fetchOHLCV(
    pair,
    timeFrame,
    undefined,
    dataLength,
    { paginate: true },
  )

  const total = data.reduce((sum, candle) => {
    const closePrice = Number(candle.at(4))
    return sum + closePrice
  }, 0)

  return total / data.length
}
