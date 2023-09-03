<script setup lang="ts">
import { onMounted } from 'vue'
import AppHeader from './components/AppHeader.vue'
import LoadingPortal from './components/LoadingPortal.vue'
import NotificationMessage from './components/NotificationMessage.vue'
import { useCatsStore } from './store/catsStore'

const catsStore = useCatsStore()

onMounted(() => {
  catsStore.getCats()
})
</script>

<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
  <LoadingPortal />
  <NotificationMessage />
</template>
