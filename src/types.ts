import { Num, OHLCV } from 'ccxt'
import { ChartingSystem, Indicator, Trade } from '@/lib'
import { EventEmitter } from 'events'

export interface BacktestResults {
  alpha: number
  beta: number
  sharpeE: number
  maxDrawdown: number
  maxProfit: number
  profitFactor: number
  return: number
  percentageProfitable: number
  tradeCount: number
  reportData: {
    trades: Trade[]
    data: DataSource[]
  }
}

export interface CandleStickObject {
  open?: Num
  high?: Num
  low?: Num
  close?: Num
  volume?: Num
  timestamp?: Num
}

export interface CreateTradeOptions {
  positionType: PositionType
  orderType: OrderType
  size: number
  limitPrice?: number
  leverage?: number
  open?: boolean
  riskOptions?: {
    TP?: number
    SL?: number
  }
}

export enum CryptoPair {
  BTCUSDT = 'BTC/USDT',
  ETHUSDT = 'ETH/USDT',
  SOLUSDT = 'SOL/USDT',
  BNBUSDT = 'BNB/USDT',
  LTCUSDT = 'LTC/USDT',
  DOGEUSDT = 'DOGE/USDT',
}

export interface IndicatorOptions {
  name: string
  description: string
  key: string
  indicators?: Indicator[]
}

export interface SimulationOptions {
  capital?: number
  leverage?: number
  fees?: number
  pair: CryptoPair
}

export interface StrategyOptions {
  name: string
  pair: CryptoPair
  dataLength: number
  timeFrame: TimeFrame
  indicators?: Indicator[]
  chartType?: ChartingSystem
  simulationOptions?: SimulationOptions
}

export interface TimelineManagerSystem extends EventEmitter {
  key: string
  generate: () => any
  provide: (data: OHLCV[]) => void
  feed: (data: OHLCV) => void
}

export interface TimelineProfile {
  key: string
  data: any[]
}

export type TimelineEventsInterface = {
  provided: (data: any[]) => any[]
  fed: (data: any) => any
  generated: () => any[]
}

export enum TimelineEvents {
  PROVIDED = 'provided',
  FED = 'fed',
  GENERATED = 'generated',
}

export enum NumberReturnType {
  RELATIVE = 'relative',
  FIXED = 'fixed',
}

export enum OrderType {
  MARKET = 'market',
  LIMIT = 'limit',
  STOP = 'stop',
}

export enum PositionType {
  LONG = 'long',
  SHORT = 'short',
}

export enum TRADE_KEY {
  ID = 'id',
  isOpen = 'isOpen',
  isClosed = 'isClosed',
  PL = 'PL',
  TP = 'TP',
  SL = 'SL',
  positionSize = 'size',
  leverage = 'leverage',
  drawdown = 'drawdown',
  openPrice = 'openPrice',
  closePrice = 'closePrice',
  fee = 'fee',
  pair = 'pair',
  blockChainTrack = 'blockChainTrack',
  orderType = 'orderType',
  positionType = 'positionType',
  timestamp = 'timestamp',
}

export interface TradeData {
  [TRADE_KEY.ID]: string
  [TRADE_KEY.isOpen]: boolean
  [TRADE_KEY.isClosed]: boolean
  [TRADE_KEY.PL]?: number
  [TRADE_KEY.TP]?: number
  [TRADE_KEY.SL]?: number
  [TRADE_KEY.positionSize]: number
  [TRADE_KEY.leverage]: number
  [TRADE_KEY.drawdown]: number
  [TRADE_KEY.openPrice]: undefined
  [TRADE_KEY.closePrice]: undefined
  [TRADE_KEY.fee]?: number
  [TRADE_KEY.blockChainTrack]: number
  [TRADE_KEY.pair]: CryptoPair
  [TRADE_KEY.orderType]: OrderType
  [TRADE_KEY.positionType]: PositionType
  [TRADE_KEY.timestamp]: number
}

export interface TradeOptions {
  open?: boolean
  positionSize: number
  leverage?: number
  TP?: number
  SL?: number
  pair: CryptoPair
  orderType: OrderType
  positionType: PositionType
  isLive?: boolean
}

export interface DataSource {
  name: string
  type: DataSourceType
  data: any[]
}

export enum DataSourceType {
  PRICE = 'price',
  FACTOR = 'factor',
}

export interface ChartingOptions {
  type: 'bar' | 'line' | 'area' | 'histogram' | 'candlestick' | 'baseline';
  color: string;
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
  WEEK = '1w',
  MONTH = '1M',
}
