import { TimelineEvents, TimelineManagerSystem, TimelineProfile } from '@/types'
import { OHLCV } from 'ccxt'

export class TimelineManager {
  private systems: TimelineManagerSystem[]
  private timelineProfiles: TimelineProfile[] = []

  constructor(systems: TimelineManagerSystem[]) {
    this.systems = systems

    for (const system of this.systems) {
      this.timelineProfiles.push({
        key: system.key,
        data: [],
      })
    }

    const setData = async (system: TimelineManagerSystem) => {
      const data = await system.generate()
      const profile = this.getProfile(system.key)
      console.log(profile)
      if (!profile) return
      profile.data = data
    }

    for (const system of this.systems) {
      system.on(TimelineEvents.FED, (data: OHLCV) => {
        setData(system)
      })
      system.on(TimelineEvents.PROVIDED, (data: OHLCV[]) => {
        setData(system)
      })
    }
  }

  private getSystem(key: string): TimelineManagerSystem | null {
    return this.systems.find((system) => system.key === key) || null
  }

  private getProfile(key: string): TimelineProfile | null {
    return this.timelineProfiles.find((profile) => profile.key === key) || null
  }

  private getData(key: string, index: number) {
    const profile = this.getProfile(key)
    if (!profile || !profile.data?.length) return null
    console.log('getData', profile.data?.length)
    return profile.data.at(index)
  }

  public getLast(key: string) {
    return this.getData(key, -1)
  }

  public getSecondLast(key: string) {
    return this.getData(key, -2)
  }

  public getFirst(key: string) {
    return this.getData(key, 0)
  }

  public getSecondFirst(key: string) {
    return this.getData(key, 1)
  }

  public getAt(key: string, index: number) {
    return this.getData(key, index)
  }

  public all(key: string) {
    const profile = this.getProfile(key)
    return profile ? profile.data : null
  }

  public getSize(key: string) {
    const profile = this.getProfile(key)
    return profile ? profile.data.length : 0
  }
}
