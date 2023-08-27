import type { Cat } from '@/types/Cat'
import { catsData } from '../data/catsData'

export function fetchCats(): Promise<Cat[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(catsData)
    }, 1500)
  })
}
