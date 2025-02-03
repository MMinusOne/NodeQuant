import { Num, OHLCV } from "ccxt";
import { CandleStickObject } from "../types";

export const parseIntoObject = (rawData: OHLCV[]) => {
  const candlesticks: CandleStickObject[] = [];

  for (const cell of rawData) {
    const [timestamp, open, high, low, close, volume] = cell;

    candlesticks.push({ timestamp, open, high, low, close, volume });
  }

  return candlesticks;
};

export const parseIntoArrays = () => {};

export const parseIntoRows = (data: OHLCV[]) => {
  const timestamps: number[] = [];
  const opens: number[] = [];
  const highs: number[] = [];
  const lows: number[] = [];
  const closes: number[] = [];
  const volumes: number[] = [];

  data.forEach((candle) => {
    timestamps.push(candle[0]!);
    opens.push(candle[1]!);
    highs.push(candle[2]!);
    lows.push(candle[3]!);
    closes.push(candle[4]!);
    volumes.push(candle[5]!);
  });

  return { timestamps, opens, highs, lows, closes, volumes };
};
