export interface Cat {
  id: number
  name: string
  color: string
  breed: string
  furType: FurType
  photo: string
  status: CatStatus
  activities: {
    date: string
    activity: CatActivity
  }[]
  activityLog: ActivityEntry[]
  eatenBirds: {
    date: string
    count: number
  }[]
}

interface ActivityEntry {
  timestamp: Date;
  minutesActive: number;
}

type FurType = 'Short Hair' | 'Long Hair' | 'Semi-Long Hair' | 'Curly Hair' | 'Hairless'
type CatStatus = 'Awake' | 'Sleeping' | 'Eating' | 'Playing' | 'Sunbathing'
type CatActivity = 'Woke up' | 'Slept' | 'Ate' | 'Played' | 'Sunbathed'
