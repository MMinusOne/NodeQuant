import { TimeLineEvents } from '@/types'
import { EventEmitter } from 'events'

interface TimeLineManagerSystem extends EventEmitter {
  name: string
  generate: () => any
}

interface TimelineProfile {
  key: string
  data: []
}

export class TimelineManager {
  private systems: TimeLineManagerSystem[]
  private timelineProfiles: TimelineProfile[] = []
  
  constructor(systems: TimeLineManagerSystem[]) {
    this.systems = systems

    const setData = async (system: TimeLineManagerSystem) => {
      const data = await system.generate()
      const profile = this.getProfile(system.name)
      if (!profile) return
      if (!profile.data) {
        profile.data = []
      }
      profile.data = data
    }

    for (const system of this.systems) {
      system.on(TimeLineEvents.FED, setData)
      system.on(TimeLineEvents.PROVIDED, setData)
    }

  }

  private getSystem(key: string): TimeLineManagerSystem | null {
    return this.systems.find((system) => system.name === key) || null
  }

  private getProfile(key: string): TimelineProfile | null {
    return this.timelineProfiles.find((profile) => profile.key === key) || null
  }

  protected getData(key: string, index: number) {
    const profile = this.getProfile(key)
    if (!profile || !profile.data) return null
    return profile.data.at(index)
  }

  protected getLast(key: string) {
    return this.getData(key, -1)
  }
  
  protected getSecondLast(key: string) {
    return this.getData(key, -2)
  }
  
  protected getFirst(key: string) {
    return this.getData(key, 0)
  }
  
  protected getSecondFirst(key: string) {
    return this.getData(key, 1)
  }
  
  protected getAt(key: string, index: number) {
    return this.getData(key, index)
  }
  
  protected all(key: string) {
    const profile = this.getProfile(key)
    return profile ? profile.data : null
  }
  
  protected getSize(key: string) {
    const profile = this.getProfile(key)
    return profile ? profile.data.length : 0
  }
}
