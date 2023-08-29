import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { Cat } from '@/types/Cat'
import { fetchCatById, fetchCats } from '@/services/catService'

export const useCatsStore = defineStore('catsStore', () => {
  const isFetchingCats = ref(false)
  const fetchingCatsError = ref<any | null>(null)
  const cats = ref<Cat[]>([])
  const cat = ref<Cat | null>(null)

  const resetCatState = () => {
    cat.value = null
  }

  const getCats = async () => {
    try {
      isFetchingCats.value = true
      const data = await fetchCats()
      cats.value = data
      isFetchingCats.value = false
    } catch (error) {
      if (error) {
        fetchingCatsError.value = error
      }
      isFetchingCats.value = false
    }
  }

  const getCatById = async (id: string) => {
    try {
      isFetchingCats.value = true
      const data = await fetchCatById(id)
      cat.value = data
      isFetchingCats.value = false
    } catch (error) {
      if (error) {
        fetchingCatsError.value = error
      }
      isFetchingCats.value = false
    }
  }

  return {
    cat,
    cats,
    fetchingCatsError,
    isFetchingCats,
    getCats,
    getCatById,
    resetCatState
  }
})
