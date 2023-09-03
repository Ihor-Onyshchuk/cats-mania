import { computed, ref, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

import type { User } from '@/types/User'
import { useGlobalStore } from './globalStore'
import { createUser, loginUser, logoutUser } from '@/services/userService'

export const useUserStore = defineStore('userStore', () => {
  const router = useRouter()
  const globalStore = useGlobalStore()

  const user = ref<Omit<User, 'password'> | null>(null)

  const isAuth = computed<boolean>(() => Boolean(user.value?.id))

  const fetchAuthUser = async (fetchFunction: () => Promise<Omit<User, 'password'> | null>) => {
    try {
      globalStore.setIsLoading(true)
      const data = await fetchFunction()
      if (data?.id) {
        localStorage.setItem('user', JSON.stringify(data))
        user.value = data
        router.push('/')
      } else {
        throw new Error('User data is missing or invalid.')
      }
    } catch (error: any) {
      globalStore.setNotification(error?.message || 'Something went wrong!', 'error')
    } finally {
      globalStore.setIsLoading(false)
    }
  }

  const signInUser = (userCreds: Omit<User, 'id'>): void => {
    fetchAuthUser(() => loginUser({ ...userCreds }))
  }

  const signUpUser = (userCreds: User): void => {
    fetchAuthUser(() => createUser({ ...userCreds }))
  }

  const signOutUser = async () => {
    if (user.value?.id) {
      try {
        globalStore.setIsLoading(true)
        const data = await logoutUser(user.value?.id)

        if (data?.id) {
          localStorage.removeItem('user')
          user.value = null

          router.push('/')
        } else {
          throw new Error('User data is missing or invalid.')
        }
      } catch (error: any) {
        globalStore.setNotification(error?.message || 'Something went wrong!', 'error')
      } finally {
        globalStore.setIsLoading(false)
      }
    }
  }

  watchEffect(() => {
    if (localStorage.user && !user.value) {
      const cachedUser: User = JSON.parse(localStorage.user)
      user.value = cachedUser
    }
  })

  return {
    user,
    isAuth,
    signUpUser,
    signInUser,
    signOutUser
  }
})
