<script setup lang="ts">
import Card from 'primevue/card'
import Button from 'primevue/button'
</script>

<template>
  <header class="app-header">
    <router-link to="/" class="logo"> Cats Maniaaa &#128008;</router-link>
    <div class="auth-buttons">
      <Button label="Login" icon="pi pi-sign-in" />
      <Button label="Register" icon="pi pi-user-plus" />
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

@media (max-width: 470px) {
  .auth-buttons {
    flex-direction: column;
  }
}
</style>
