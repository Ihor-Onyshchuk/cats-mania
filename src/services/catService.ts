import type { Cat } from '@/types/Cat'
import { catsData } from '../data/catsData'

export function fetchCats(): Promise<Cat[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(catsData)
    }, 1500)
  })
}

export function fetchCatById(id: string): Promise<Cat | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const cat = catsData.find((cat) => cat.id === id)
      resolve(cat || null)
    }, 1500)
  })
}
