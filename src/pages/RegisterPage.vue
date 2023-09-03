<script setup lang="ts">
import AuthForm from '../components/AuthForm.vue'
import { useUserStore } from '../store/userStore'
import { generateUniqueId } from '../utils'
import { User } from '../types/User'

const userStore = useUserStore()

const onSubmitRegister = (userData: Omit<User, 'id'>) => {
  const user: User = { ...userData, id: generateUniqueId() }
  userStore.signUpUser(user)
}
</script>

<template>
  <div class="register-page">
    <AuthForm formTitle="Register" :on-submit="onSubmitRegister" />
  </div>
</template>

<style scoped>
.register-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
