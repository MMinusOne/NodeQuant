import { EventEmitter } from 'events';
import { TimelineEventsInterface, IndicatorOptions, TimeLineEvents } from '@/types';
import { OHLCV } from 'ccxt';

export class Indicator extends EventEmitter {
  private data: OHLCV[] = [];
  public name: string;
  public description: string;

  constructor({ name, description }: IndicatorOptions) {
    super();
    this.name = name;
    this.description = description;
  }

  // Provides the first sample of data if not already provided
  protected provide(data: OHLCV[]) {
    if (this.data.length === 0 && data.length > 0) {
      this.data = data;
      this.emit(TimeLineEvents.PROVIDED, this.data);
    }
  }

  // Feeds new data in
  protected feed(data: OHLCV) {
    this.data.push(data);
    this.emit(TimeLineEvents.FED, data);
  }

  // Generates the result
  public generate() {
    return null;
  }

  on<K extends keyof TimelineEventsInterface>(event: K, listener: TimelineEventsInterface[K]): this {
    return super.on(event, listener);
  }
}
