<script setup lang="ts">
import { onMounted } from 'vue'
import LoadingPortal from './components/LoadingPortal.vue'
import GlobalError from './components/GlobalError.vue'
import { useCatsStore } from './store/catsStore'
import AppHeader from './components/AppHeader.vue'

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
  <GlobalError />
</template>
