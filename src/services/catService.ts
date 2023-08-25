import { catsData } from './../data/cats'

export function fetchCats() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockCats = [...catsData]
      resolve(mockCats)
    }, 1500)
  })
}
