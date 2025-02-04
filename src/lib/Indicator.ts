import { IndicatorOptions } from "@/types";
import { OHLCV } from "ccxt";

export class Indicator { 
  private data: OHLCV[] = [];
  constructor(indicatorOptions: IndicatorOptions) {}

  // Only allowed to run once and first, provides the first sample of data
  protected provide() {}

  // Feeds new data in
  protected feed() {}

  // Generates the result 
  protected generate() {}
}