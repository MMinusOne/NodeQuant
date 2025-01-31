import fs from "fs";
import path from "path";
import exchange from "../exchange";
import { SimulationOptions, StrategyOptions } from "../types";

export class Strategy {
  private strategyOptions: StrategyOptions;
  constructor(strategyOptions: StrategyOptions) {
    this.strategyOptions = strategyOptions;
  }

  private async installData() {
    const { pairs, timeFrame, dataLength } = this.strategyOptions;
    const dataFolderPath = path.join(process.cwd(), "data");

    // Create data folder if it doesn't exist
    if (!fs.existsSync(dataFolderPath)) {
      fs.mkdirSync(dataFolderPath);
    }

    for (const pair of pairs) {
      const fileName = `${pair.replace("/", "_")}_${dataLength}.json`;
      const filePath = path.join(dataFolderPath, fileName);

      if (fs.existsSync(filePath)) {
        console.log(
          `Data for ${pair} with length ${dataLength} already exists. Skipping fetch.`
        );
        continue;
      }

      console.log(`Installing ${dataLength} candles for ${pair}.`);
      const data = await exchange.fetchOHLCV(
        pair,
        timeFrame,
        undefined,
        dataLength,
        {
          paginate: true
        }
      );

      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    }
  }

  public backtest(simulationOptions?: SimulationOptions) {}
  public exportTradeList() {}
}
