import { EventEmitter } from 'events'
import {
  TimelineEventsInterface,
  IndicatorOptions,
  TimeLineEvents,
} from '@/types'
import { OHLCV } from 'ccxt'

export class Indicator extends EventEmitter {
  private data: OHLCV[] = []
  private options: IndicatorOptions

  constructor(indicatorOptions: IndicatorOptions) {
    super()
    this.options = indicatorOptions
  }

  // Only allowed to run once and first, provides the first sample of data
  protected provide(data: OHLCV[]) {
    if (data.length !== 0) return
    this.data = data
    this.emit(TimeLineEvents.PROVIDED, this.data)
  }

  // Feeds new data in
  protected feed(data: OHLCV) {
    this.data.push(data)
    this.emit(TimeLineEvents.FED, data)
  }

  // Generates the result
  protected generate() {
    return null
  }

  on<K extends keyof TimelineEventsInterface>(
    event: K,
    listener: TimelineEventsInterface[K],
  ): this {
    return super.on(event, listener)
  }
}
