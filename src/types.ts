import { ChartingSystem } from "./lib/ChartingSystem";
import { Indicator } from "./lib/Indicator";

export interface StrategyOptions {
  name: string;
  pairs: CryptoPair[];
  from: string;
  to: string;
  indicators?: Indicator[];
  chartType?: ChartingSystem;
  simulationOptions?: {
    capital?: number;
    leverage?: number;
  };
}

export enum CryptoPair {
  BTCUSDT = "BTC/USDT",
  ETHUSDT = "ETH/USDT",
  SOLUSDT = "SOL/USDT",
  BNBUSDT = "BNB/USDT",
  LTCUSDT = "LTC/USDT",
  DOGEUSDT = "DOGE/USDT"
}
