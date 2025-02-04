import { TimeLineEvents } from '@/types'
import { EventEmitter } from 'events'

export class TimelineManager {
  private system: EventEmitter
  private data: any[] = []
  constructor(system: EventEmitter) {
    this.system = system

    this.system.on(TimeLineEvents.GENERATED, (generated: any[]) => {
      this.data.push(generated)
    })
  }

  protected getLast() {
    return this.data.at(-1)
  }
  protected getSecondLast() {
    return this.data.at(-2)
  }
  protected getFirst() {
    return this.data.at(0)
  }
  protected getSecondFirst() {
    return this.data.at(1)
  }
  protected getAt(index: number) {
    return this.data.at(index)
  }
  protected all() {
    return this.data
  }
  protected getSize() {
    return this.data.length
  }
}
