import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('globalStore', () => {
  const isLoading = ref(false)
  const notificationMessage = ref({ message: '', severity: 'error', life: 3000 })

  const setNotification = (message: string, severity: string = 'error', life: number = 3000) => {
    notificationMessage.value = { message, severity, life }
  }

  const clearNotification = () => {
    notificationMessage.value = { message: '', severity: 'error', life: 3000 }
  }

  const setIsLoading = (value: boolean) => {
    isLoading.value = value
  }

  return {
    isLoading,
    notificationMessage,
    setNotification,
    clearNotification,
    setIsLoading
  }
})
