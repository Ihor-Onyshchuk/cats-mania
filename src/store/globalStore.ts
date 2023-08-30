import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('globalStore', () => {
  const isLoading = ref(false)
  const errorMessage = ref('')

  const setError = (message: string) => {
    console.log('setError', message)
    errorMessage.value = message
  }

  const clearError = () => {
    console.log('clear error')
    errorMessage.value = ''
  }

  const setIsLoading = (value: boolean) => {
    isLoading.value = value
  }

  return {
    isLoading,
    errorMessage,
    setError,
    clearError,
    setIsLoading
  }
})
