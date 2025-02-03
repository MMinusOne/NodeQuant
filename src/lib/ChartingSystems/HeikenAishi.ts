import { parseIntoRows } from "@/utils/parseOHLCV";
import { OHLCV } from "ccxt";
import { ChartingSystem } from "dist";
import { HeikinAshiInput } from "technicalindicators/declarations/chart_types/HeikinAshi";
import ta from "technicalindicators";

export class HeikenAishi extends ChartingSystem {
  public options: Omit<HeikinAshiInput, "low" | "close" | "high" | "open">;

  constructor(
    options: Omit<HeikinAshiInput, "low" | "close" | "high" | "open">
  ) {
    super();
    this.options = options;
  }

  public transform(rawData: OHLCV[]) {
    const { opens, highs, lows, closes, volumes, timestamps } =
      parseIntoRows(rawData);
    return ta.heikinashi({
      ...this.options,
      open: opens,
      high: highs,
      low: lows,
      close: closes,
      volume: volumes,
      timestamp: timestamps
    });
  }
}
