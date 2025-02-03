import { OHLCV } from "ccxt";
import ta from "technicalindicators";
import { RenkoInput } from "technicalindicators/declarations/chart_types/Renko";
import { parseIntoObject, parseIntoRows } from "../utils/parseOHLCV";
import { HeikinAshiInput } from "technicalindicators/declarations/chart_types/HeikinAshi";

export class ChartingSystem {
  constructor() {}

  public transform(rawData: any): ta.CandleList {
    return rawData;
  }
}

export class CandleSticks extends ChartingSystem {
  constructor() {
    super();
  }

  public transform(rawData: OHLCV[]): ta.CandleList {
    const { opens, highs, lows, closes, timestamps, volumes } =
      parseIntoRows(rawData);

    return {
      open: opens,
      high: highs,
      low: lows,
      close: closes,
      timestamp: timestamps,
      volume: volumes
    };
  }
}

export class Renko extends ChartingSystem {
  public options: Omit<RenkoInput, "low" | "close" | "high" | "open">;
  constructor(options: Omit<RenkoInput, "low" | "close" | "high" | "open">) {
    super();
    this.options = options;
  }

  public transform(rawData: OHLCV[]): ta.CandleList {
    const { opens, highs, lows, closes } = parseIntoRows(rawData);

    return ta.renko({
      ...this.options,
      open: opens,
      high: highs,
      low: lows,
      close: closes
    });
  }
}

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

export default {
  Renko,
  CandleSticks,
  HeikenAishi
};
