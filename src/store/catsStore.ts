import { ref } from 'vue'
import { defineStore } from 'pinia'

import { useGlobalStore } from './globalStore'
import type { Cat } from '@/types/Cat'
import { addNewCat, fetchCatById, fetchCats } from '@/services/catService'

export const useCatsStore = defineStore('catsStore', () => {
  const globalStore = useGlobalStore()

  const cats = ref<Cat[]>([])
  const cat = ref<Cat | null>(null)

  const fetchCatData = async (fetchFunction: () => Promise<Cat | Cat[] | null>) => {
    try {
      globalStore.setIsLoading(true)
      const data = await fetchFunction()

      if (!data) {
        throw new Error('Cats data is missing or invalid.')
      }

      if (Array.isArray(data)) {
        cats.value = data
      } else {
        cat.value = data
      }
    } catch (error: any) {
      globalStore.setNotification(error?.message || 'Something went wrong!', 'error')
    } finally {
      globalStore.setIsLoading(false)
    }
  }

  const getCats = () => {
    fetchCatData(fetchCats)
  }

  const getCatById = (id: string) => {
    fetchCatData(() => fetchCatById(id))
  }

  const addCat = async (cat: Cat) => {
    try {
      globalStore.setIsLoading(true)
      await addNewCat(cat)
      cats.value.push(cat)
      globalStore.setNotification('Success', 'success')
    } catch (error: any) {
      globalStore.setNotification(error?.message || 'Something went wrong!', 'error')
    } finally {
      globalStore.setIsLoading(false)
    }
  }

  return {
    cat,
    cats,
    addCat,
    getCats,
    getCatById,
    resetCatState: () => (cat.value = null)
  }
})
