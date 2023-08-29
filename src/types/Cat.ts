export interface Cat {
  id: string
  name: string
  color: string
  breed: string
  furType: FurType
  photo: string
  status: CatStatus
  activities: {
    date: Date | string
    activity: CatActivity
  }[]
  activityLog: ActivityEntry[]
  eatenBirds: {
    date: Date | string
    count: number
  }[]
}

interface ActivityEntry {
  date: Date | string
  minutesActive: number
}

type FurType = 'Short Hair' | 'Long Hair' | 'Semi-Long Hair' | 'Curly Hair' | 'Hairless'
type CatStatus = 'Awake' | 'Sleeping' | 'Eating' | 'Playing' | 'Sunbathing'
type CatActivity = 'Woke up' | 'Slept' | 'Ate' | 'Played' | 'Sunbathed'
