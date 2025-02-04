import { OHLCV } from 'ccxt';
import { CryptoPair, Strategy, TimeFrame } from 'dist';

export * from './lib/Strategy';
export * from './lib/Indicator';
export * from './ChartingSystems';
export * from './types';


class TrendStrategy extends Strategy { 
    constructor() { 
        super({ 
            name: 'Trend',
            pairs: [CryptoPair.BTCUSDT],
            dataLength: 1000,
            timeFrame: TimeFrame.FOUR_HOURS,
        })
    }
  
    protected onStart(updates: OHLCV[]): void {
        console.log(updates);
    }
  }
