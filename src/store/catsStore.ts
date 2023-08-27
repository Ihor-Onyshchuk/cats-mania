import { ref } from 'vue'
import { defineStore } from 'pinia'

import { fetchCats } from '@/services/catService'
import type { Cat } from '@/types/Cat'

export const useCatsStore = defineStore('catsStore', () => {
  const isFetchingCats = ref(false)
  const fetchingCatsError = ref<any | null>(null)
  const cats = ref<Cat[]>([])

  const getCats = async () => {
    try {
      isFetchingCats.value = true
      const data = await fetchCats()
      cats.value = [...data]
      isFetchingCats.value = false
    } catch (error) {
      if (error) {
        fetchingCatsError.value = error
      }
      isFetchingCats.value = false
    }
  }

  return {
    cats,
    fetchingCatsError,
    isFetchingCats,
    getCats
  }
})
