import { catsData } from './../data/catsData'
import type { Cat } from '@/types/Cat'

export function fetchCats(): Promise<Cat[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (localStorage.catsData) {
        try {
          const data: Cat[] = JSON.parse(localStorage.catsData)
          return resolve(data)
        } catch (error: Error | any) {
          return reject(error?.message || 'Parsing data error!')
        }
      }

      localStorage.setItem('catsData', JSON.stringify(catsData))
      resolve(catsData)
    }, 1500)
  })
}

export function fetchCatById(id: string): Promise<Cat | null> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (localStorage.catsData) {
        try {
          const data: Cat[] = JSON.parse(localStorage.catsData)
          const cat = data.find((cat) => cat.id === id)

          return cat ? resolve(cat) : reject(null)
        } catch (error: Error | any) {
          return reject(error?.message || 'Parsing data error!')
        }
      }

      reject(null)
    }, 1500)
  })
}

export function addNewCat(cat: Cat): Promise<Cat> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (localStorage.catsData) {
        try {
          const data: Cat[] = JSON.parse(localStorage.catsData)
          data.push(cat)
          localStorage.setItem('catsData', JSON.stringify(data))

          return resolve(cat)
        } catch (error: Error | any) {
          return reject(error?.message || 'Parsing data error!')
        }
      }

      localStorage.setItem('catsData', JSON.stringify([{ ...cat }]))
      resolve(cat)
    }, 1500)
  })
}
