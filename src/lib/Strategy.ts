import fs from 'fs';
import path from 'path';
import { BacktestResults, SimulationOptions, StrategyOptions, TimeFrame } from '@/types';
import { OHLCV } from 'ccxt';
import downloadPairData from '@/utils/dataInstaller';
import { CandleSticks } from '@/ChartingSystems';
import { TradeManager } from '@/managers/TradeManager';
import { Indicator } from './Indicator';

export class Strategy {
  private data: OHLCV[] = [];
  public readonly strategyOptions: Required<StrategyOptions>;
  public tradeManager: TradeManager;
  public indicators: Map<string, any> = new Map();

  constructor(strategyOptions: StrategyOptions) {
    const {
      name,
      dataLength = 100,
      timeFrame = TimeFrame.MINUTE,
      chartType = new CandleSticks(),
      indicators = [],
      simulationOptions,
      pair,
    } = strategyOptions;

    this.strategyOptions = {
      name,
      dataLength,
      timeFrame,
      chartType,
      indicators,
      simulationOptions: simulationOptions ?? { pair },
      pair,
    };

    this.tradeManager = new TradeManager(this);
  }

  // Installs the crypto pair data this strategy works on
  public async loadData() {
    const { pair, timeFrame, dataLength } = this.strategyOptions;
    const dataFolderPath = path.join(process.cwd(), 'data');

    if (!fs.existsSync(dataFolderPath)) {
      fs.mkdirSync(dataFolderPath);
    }

    this.data.push(...(await downloadPairData(pair, timeFrame, dataLength)));
  }

  private provideAllIndicators() {
    this.strategyOptions.indicators.forEach(indicator => indicator.provide(this.data));
  }

  private feedAllIndicators(data: OHLCV) {
    this.strategyOptions.indicators.forEach(indicator => indicator.feed(data));
  }

  // Backtesting system to simulate trades
  public async backtest({}: SimulationOptions): Promise<BacktestResults> {
    const results: BacktestResults = {
      alpha: 0, 
      beta: 0, 
      maxDrawdown: 0,
      maxProfit: 0, 
      percentageProfitable: 0, 
      profitFactor: 0, 
      sharpeE: 0
    }
    await Promise.all([this.internalStart(), this.onStart(this.data)]);

    for (const update of this.data) {
      await Promise.all([
        this.internalUpdate(update, this.data),
        this.onUpdate(update, this.data),
      ]);
    }

    const tradeHistory = this.tradeManager.getTradeHistory();
    
    return results;
  }

  private internalStart() {
    // this.provideAllIndicators();
  }

  private async internalUpdate(update: OHLCV, updates: OHLCV[]) {
    this.feedAllIndicators(update);

    await Promise.all(
      this.strategyOptions.indicators.map(async indicator => {
        const indicatorData = await indicator.generate();
        this.indicators.set(indicator.key, indicatorData);
      })
    );

    this.tradeManager.onUpdate(update, updates);
  }

  protected onStart(updates: OHLCV[]): void {}

  protected onUpdate(update: OHLCV, updates: OHLCV[]): void {}
}
