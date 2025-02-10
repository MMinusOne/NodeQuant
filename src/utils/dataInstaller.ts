import fs from 'fs'
import path from 'path'
import { CryptoPair, TimeFrame } from '@/types'
import exchange from '@/exchange'

export default async function downloadPairData(
  pair: CryptoPair,
  timeFrame: TimeFrame,
  dataLength: number,
  dataFolderPath: string,
) {
  const fileName = `${pair.replace('/', '_')}_${dataLength}_${timeFrame}.json`
  const filePath = path.join(dataFolderPath, fileName)

  if (fs.existsSync(filePath)) {
    console.log(
      `Data for ${pair} with length ${dataLength} already exists. Returning existing data.`,
    )
    const existingData = fs.readFileSync(filePath, 'utf-8')
    return { path: filePath, data: JSON.parse(existingData) }
  }

  console.log(`Installing ${dataLength} candles for ${pair}.`)
  const fetchedData = await exchange.fetchOHLCV(
    pair,
    timeFrame,
    undefined,
    dataLength,
    {
      paginate: true,
    },
  )

  fs.writeFileSync(filePath, JSON.stringify(fetchedData, null, 2))
  return { path: filePath, data: fetchedData }
}
