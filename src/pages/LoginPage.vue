<script setup lang="ts">
import AuthForm from '../components/AuthForm.vue'
import { useUserStore } from '../store/userStore'
import { User } from '../types/User'

const userStore = useUserStore()

const onLoginSubmit = (userData: Omit<User, 'id'>) => {
  userStore.signInUser(userData)
}
</script>

<template>
  <div class="login-page">
    <AuthForm form-title="Login" :on-submit="onLoginSubmit" />
  </div>
</template>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
