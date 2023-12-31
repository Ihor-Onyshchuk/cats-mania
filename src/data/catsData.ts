import type { Cat } from '@/types/Cat'

export const catsData: Cat[] = [
  {
    id: '1',
    ownerId: '11',
    name: 'Boris',
    color: 'grey tabby',
    breed: 'American Shorthair',
    furType: 'Short Hair',
    photo: 'https://cdn2.thecatapi.com/images/SCHe-SekW.jpg',
    status: 'Playing',
    activities: [
      {
        date: '2023-08-25T10:00:00.000Z',
        activityType: 'Eating',
        minutesActive: 14
      },
      {
        date: '2023-08-25T11:00:00.000Z',
        activityType: 'Sleeping',
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
    ownerId: '22',
    name: 'Snow',
    color: 'white',
    breed: 'Persian',
    furType: 'Long Hair',
    photo: 'https://cdn2.thecatapi.com/images/RhBsBQg6y.jpg',
    status: 'Sleeping',
    activities: [
      {
        date: '2023-08-25T10:00:00.000Z',
        activityType: 'Eating',
        minutesActive: 34
      },
      {
        date: '2023-08-25T11:00:00.000Z',
        activityType: 'Sleeping',
        minutesActive: 40
      },
      {
        date: '2023-08-25T12:00:00.000Z',
        activityType: 'Sunbathing',
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
    ownerId: '22',
    name: 'Jelly',
    color: 'Seal Lynx',
    breed: 'Ragdoll',
    furType: 'Long Hair',
    photo: 'https://cdn2.thecatapi.com/images/eF3HSMIB_.jpg',
    status: 'Sunbathing',
    activities: [
      {
        date: '2023-08-25T10:00:00.000Z',
        activityType: 'Eating',
        minutesActive: 50
      },
      {
        date: '2023-08-25T11:00:00.000Z',
        activityType: 'Sleeping',
        minutesActive: 10
      },
      {
        date: '2023-08-25T12:00:00.000Z',
        activityType: 'Sunbathing',
        minutesActive: 25
      },
      {
        date: '2023-08-25T15:00:00.000Z',
        activityType: 'Sunbathing',
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
