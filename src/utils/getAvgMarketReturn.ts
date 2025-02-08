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

  let totalReturn = 0
  for (let i = 1; i < data.length; i++) {
    const prevCandle = data[i-1]
    const currCandle = data[i]
    
    if (!prevCandle || !currCandle) continue
    
    const prevClose = Number(prevCandle[4])
    const currClose = Number(currCandle[4])
    const returnPct = ((currClose - prevClose) / prevClose) * 100
    totalReturn += returnPct
  }

  return totalReturn / (data.length - 1)
}
