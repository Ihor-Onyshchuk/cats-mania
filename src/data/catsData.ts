import type { Cat } from '@/types/Cat'

export const catsData: Cat[] = [
  {
    id: '1',
    name: 'Boris',
    color: 'grey tabby',
    breed: 'American Shorthair',
    furType: 'Short Hair',
    photo: 'https://cdn2.thecatapi.com/images/SCHe-SekW.jpg',
    status: 'Playing',
    activities: [
      {
        date: '2023-08-25T10:00:00.000Z',
        activity: 'Ate'
      },
      {
        date: '2023-08-25T11:00:00.000Z',
        activity: 'Slept'
      },
      {
        date: '2023-08-25T12:00:00.000Z',
        activity: 'Sunbathed'
      }
    ],
    activityLog: [
      {
        date: '2023-08-25T10:00:00.000Z',
        minutesActive: 14
      },
      {
        date: '2023-08-25T11:00:00.000Z',
        minutesActive: 8
      }
    ],
    eatenBirds: [
      {
        date: '2023-08-25T10:00:00.000Z',
        count: 2
      },
      {
        date: '2023-08-25T18:00:00.000Z',
        count: 3
      }
    ]
  },

  {
    id: '2',
    name: 'Snow',
    color: 'wite',
    breed: 'Persian',
    furType: 'Long Hair',
    photo: 'https://cdn2.thecatapi.com/images/RhBsBQg6y.jpg',
    status: 'Sleeping',
    activities: [
      {
        date: '2023-08-25T10:00:00.000Z',
        activity: 'Ate'
      },
      {
        date: '2023-08-25T11:00:00.000Z',
        activity: 'Slept'
      },
      {
        date: '2023-08-25T12:00:00.000Z',
        activity: 'Sunbathed'
      }
    ],
    activityLog: [
      {
        date: '2023-08-25T10:00:00.000Z',
        minutesActive: 34
      },
      {
        date: '2023-08-25T11:00:00.000Z',
        minutesActive: 40
      },
      {
        date: '2023-08-25T12:00:00.000Z',
        minutesActive: 20
      }
    ],
    eatenBirds: [
      {
        date: '2023-08-25T10:00:00.000Z',
        count: 3
      },
      {
        date: '2023-08-25T19:00:00.000Z',
        count: 1
      },
      {
        date: '2023-08-25T12:00:00.000Z',
        count: 2
      }
    ]
  },

  {
    id: '3',
    name: 'Jelly',
    color: 'Seal Lynx',
    breed: 'Ragdoll',
    furType: 'Long Hair',
    photo: 'https://cdn2.thecatapi.com/images/eF3HSMIB_.jpg',
    status: 'Sunbathing',
    activities: [
      {
        date: '2023-08-25T10:00:00.000Z',
        activity: 'Ate'
      },
      {
        date: '2023-08-25T11:00:00.000Z',
        activity: 'Slept'
      },
      {
        date: '2023-08-25T12:00:00.000Z',
        activity: 'Sunbathed'
      }
    ],
    activityLog: [
      {
        date: '2023-08-25T10:00:00.000Z',
        minutesActive: 50
      },
      {
        date: '2023-08-25T11:00:00.000Z',
        minutesActive: 10
      },
      {
        date: '2023-08-25T12:00:00.000Z',
        minutesActive: 25
      },
      {
        date: '2023-08-25T18:00:00.000Z',
        minutesActive: 45
      }
    ],
    eatenBirds: [
      {
        date: '2023-08-25T10:00:00.000Z',
        count: 1
      },
      {
        date: '2023-08-25T16:00:00.000Z',
        count: 2
      },
      {
        date: '2023-08-25T15:00:00.000Z',
        count: 0
      },
      {
        date: '2023-08-25T22:00:00.000Z',
        count: 3
      }
    ]
  }
]
