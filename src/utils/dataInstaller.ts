import fs from 'fs';
import path from 'path';
import { CryptoPair, TimeFrame } from '../types';
const dataFolderPath = path.join(process.cwd(), "data");
import exchange from '../exchange';

export default async function installData(pair: CryptoPair, timeFrame: TimeFrame, dataLength: number) {
    const fileName = `${pair.replace("/", "_")}_${dataLength}_${timeFrame}.json`;
    const filePath = path.join(dataFolderPath, fileName);

    if (fs.existsSync(filePath)) {
      console.log(
        `Data for ${pair} with length ${dataLength} already exists. Skipping fetch.`
      );
    }

    console.log(`Installing ${dataLength} candles for ${pair}.`);
    const fetchedData = await exchange.fetchOHLCV(
      pair,
      timeFrame,
      undefined,
      dataLength,
      {
        paginate: true
      }
    );

    fs.writeFileSync(filePath, JSON.stringify(fetchedData, null, 2));
    return fetchedData;
 }