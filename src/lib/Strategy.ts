import { StrategyOptions } from "../types";

export class Strategy {
  private strategyOptions: StrategyOptions;
  constructor(strategyOptions: StrategyOptions) {
    this.strategyOptions = strategyOptions;
  }
}
