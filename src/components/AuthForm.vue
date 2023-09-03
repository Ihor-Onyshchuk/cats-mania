<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Password from 'primevue/password'
import InputText from 'primevue/inputtext'

import type { User } from '../types/User'

const props = defineProps<{
  formTitle?: string
  onSubmit: (userData: Omit<User, 'id'>) => void
}>()

const formData = ref<Omit<User, 'id'>>({
  username: '',
  password: ''
})

const validateInputs = (): boolean => {
  const { username, password } = formData.value
  return Boolean(username.trim()) && Boolean(password.trim())
}

const submitForm = () => {
  if (validateInputs()) {
    props.onSubmit(formData.value)

    formData.value = {
      username: '',
      password: ''
    }
  }
}
</script>
<template>
  <div class="auth-form">
    <h2 v-if="formTitle">{{ formTitle }}</h2>
    <form @submit.prevent="submitForm">
      <label for="username">Username</label>
      <InputText id="username" v-model="formData.username" placeholder="name" required />

      <label for="password">Password</label>
      <Password
        id="password"
        v-model="formData.password"
        toggleMask
        required
        placeholder="password"
        :inputStyle="{ width: `${100}%` }"
      />

      <Button type="submit" label="Submit" rounded />
    </form>
  </div>
</template>

<style scoped>
.auth-form {
  margin: 0 auto;
  min-width: 300px;
  padding: 20px;
  background-color: #f0f0f0;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-weight: bold;
}
</style>
