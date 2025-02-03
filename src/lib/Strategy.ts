import fs from "fs";
import path from "path";
import exchange from "../exchange";
import { SimulationOptions, StrategyOptions } from "../types";
import { OHLCV } from "ccxt";
import installData from "../utils/dataInstaller";

export class Strategy {
  private strategyOptions: StrategyOptions;
  private data: OHLCV[] = [];

  constructor(strategyOptions: StrategyOptions) {
    this.strategyOptions = strategyOptions;
    this.installData();
  }

  private async installData() {
    const { pairs, timeFrame, dataLength } = this.strategyOptions;
    const dataFolderPath = path.join(process.cwd(), "data");

    if (!fs.existsSync(dataFolderPath)) {
      fs.mkdirSync(dataFolderPath);
    }

    for (const pair of pairs) {
      const data = await installData(pair, timeFrame, dataLength);
      this.data.push(...data);
    }
  }

  public async backtest(simulationOptions?: SimulationOptions) {
    const data = await this.strategyOptions.chartType.transform(this.data);

    this.onStart(data);

    for (const candle of data) {
      this.onUpdate(candle);
    }

    return {};
  }

  protected onStart(candles: OHLCV[]) {}

  protected onUpdate(candle: OHLCV) {}

  public exportTradeList() {}
}
