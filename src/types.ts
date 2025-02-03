import { Num } from "ccxt";
import { ChartingSystem } from "./lib/ChartingSystem";
import { Indicator } from "./lib/Indicator";

export interface StrategyOptions {
  name: string;
  pairs: CryptoPair[];
  dataLength: number;
  timeFrame: TimeFrame;
  indicators?: Indicator[];
  chartType?: ChartingSystem;
  simulationOptions?: SimulationOptions;
}

export interface SimulationOptions {
  capital?: number;
  leverage?: number;
  fees?: number;
}

export enum TimeFrame { 
    SECOND = '1s',
    MINUTE = '1m',
    TWO_MINUTES = '2m',
    THREE_MINUTES = '3m',
    FIVE_MINUTES = '5m',
    TEN_MINUTES = '10m',
    FIFTEEN_MINUTES = '15m',
    THIRTY_MINUTES = '30m',
    FORTY_FIVE_MINUTES = '45m',
    HOUR = '1h',
    TWO_HOURS = '2h',
    THREE_HOURS = '3h',
    FOUR_HOURS = '4h',
    DAY = '1d',
    MONTH = '1M',
    YEAR = '1Y' 
}

export interface BacktestResults { 
  alpha: number;
  beta: number;
  sharpeE: number;
  maxDrawdown: number;
  maxProfit: number;
  profitFactor: number;
  percentageProfitable: number;
}

export enum CryptoPair {
  BTCUSDT = "BTC/USDT",
  ETHUSDT = "ETH/USDT",
  SOLUSDT = "SOL/USDT",
  BNBUSDT = "BNB/USDT",
  LTCUSDT = "LTC/USDT",
  DOGEUSDT = "DOGE/USDT"
}

export interface CandleStickObject { 
  open?: Num;
  high?: Num;
  low?: Num;
  close?: Num;
  volume?: Num;
  timestamp?: Num;
}