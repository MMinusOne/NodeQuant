import { EventEmitter } from 'events'
import {
  TimelineEventsInterface,
  IndicatorOptions,
  TimelineEvents,
} from '@/types'
import { OHLCV } from 'ccxt'

export class Indicator extends EventEmitter {
  protected data: OHLCV[] = []
  public name: string
  public key: string;
  public description: string

  constructor({ name, key, description }: IndicatorOptions) {
    super()
    this.name = name
    this.key = key;
    this.description = description
  }

  // Provides the first sample of data if not already provided
  protected provide(data: OHLCV[]) {
    if (this.data.length === 0 && data.length > 0) {
      this.data = data
      this.emit(TimelineEvents.PROVIDED, this.data)
    }
  }

  // Feeds new data in
  protected feed(data: OHLCV) {
    this.data.push(data)
    this.emit(TimelineEvents.FED, data)
  }

  // Generates the result
  public generate(): any {
    return null;
  }

  on<K extends keyof TimelineEventsInterface>(
    event: K,
    listener: TimelineEventsInterface[K],
  ): this {
    return super.on(event, listener)
  }
}

