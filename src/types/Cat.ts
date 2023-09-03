export interface Cat {
  id: string
  ownerId: string
  name: string
  color: string
  breed: string
  furType: FurType
  photo: string
  status: CatStatus
  activities: ActivityEntry[]
  eatenBirds: {
    date: Date | string
    count: number
  }[]
}

interface ActivityEntry {
  date: Date | string
  activityType: CatStatus | string
  minutesActive: number
}

export type FurType = 'Short Hair' | 'Long Hair' | 'Semi-Long Hair' | 'Curly Hair' | 'Hairless'
export type CatStatus = 'Awake' | 'Sleeping' | 'Eating' | 'Playing' | 'Sunbathing'
