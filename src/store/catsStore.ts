import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { Cat } from '@/types/Cat'
import { fetchCatById, fetchCats } from '@/services/catService'

export const useCatsStore = defineStore('catsStore', () => {
  const isFetchingCatsData = ref(false)
  const fetchingCatsDataError = ref<any | null>(null)
  const cats = ref<Cat[]>([])
  const cat = ref<Cat | null>(null)

  const resetCatState = () => {
    cat.value = null
  }

  const getCats = async () => {
    try {
      isFetchingCatsData.value = true
      const data = await fetchCats()
      cats.value = data
      isFetchingCatsData.value = false
    } catch (error) {
      if (error) {
        fetchingCatsDataError.value = error
      }
      isFetchingCatsData.value = false
    }
  }

  const getCatById = async (id: string) => {
    try {
      isFetchingCatsData.value = true
      const data = await fetchCatById(id)
      cat.value = data
      isFetchingCatsData.value = false
    } catch (error) {
      if (error) {
        fetchingCatsDataError.value = error
      }
      isFetchingCatsData.value = false
    }
  }

  return {
    cat,
    cats,
    fetchingCatsDataError,
    isFetchingCatsData,
    getCats,
    getCatById,
    resetCatState
  }
})
