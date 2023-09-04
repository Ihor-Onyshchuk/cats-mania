<script setup lang="ts">
import { useRouter } from 'vue-router'
import Button from 'primevue/button'
import Divider from 'primevue/divider'

import { useUserStore } from '../store/userStore'

const userStore = useUserStore()
const router = useRouter()

const logout = userStore.signOutUser

const addNewCat = () => {
  if (userStore.isAuth) {
    router.push('/cats/add')
  }
}
</script>

<template>
  <header class="app-header">
    <router-link to="/" class="logo"> Cats Maniaaa, meow meow &#128008;</router-link>
    <div class="user-section">
      <div v-if="userStore.isAuth" class="user-info">
        <span class="user-icon pi pi-user"></span>
        <span class="username">{{ userStore.user?.username || 'User name' }}</span>
        <template v-if="userStore.isAuth">
          <Divider layout="vertical" class="hidden md:flex" />
          <Divider layout="horizontal" class="flex md:hidden" />
          <Button
            label="Add New Cat"
            size="small"
            icon="pi pi-plus"
            rounded
            outlined
            class="add-cat-button"
            @click="addNewCat"
          />
        </template>
        <Divider layout="vertical" class="hidden md:flex" />
        <Divider layout="horizontal" class="flex md:hidden" />
        <Button
          label="Logout"
          size="small"
          icon="pi pi-sign-out"
          rounded
          outlined
          @click="logout"
        />
      </div>
      <div v-else class="auth-buttons">
        <router-link to="/login">
          <Button label="Login" icon="pi pi-sign-in" size="small" rounded outlined />
        </router-link>
        <router-link to="/register">
          <Button label="Register" icon="pi pi-user-plus" size="small" rounded outlined />
        </router-link>
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 10px 20px;
  margin-bottom: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  text-decoration: none;
  text-shadow: 0 0.1em 0.2em rgb(170, 170, 170);
}

.auth-buttons {
  display: flex;
  gap: 10px;
}

.user-section {
  display: flex;
  align-items: center;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-icon {
  font-size: 1.5rem;
  margin-right: 5px;
}

.username {
  font-weight: bold;
  margin-right: 10px;
}

.add-cat-button {
  width: 160px;
}

@media (max-width: 768px) {
  .auth-buttons,
  .user-info {
    flex-direction: column;
  }
}
</style>
