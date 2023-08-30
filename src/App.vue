<script setup lang="ts">
import { onMounted } from 'vue'
import LoadingPortal from './components/LoadingPortal.vue'
import GlobalError from './components/GlobalError.vue'
import { useCatsStore } from './store/catsStore'

const catsStore = useCatsStore()

onMounted(() => {
  catsStore.getCats()
})
</script>

<template>
  <header>
    <div>
      <nav>
        <!-- <RouterLink to="/">Home</RouterLink> -->
      </nav>
    </div>
  </header>

  <RouterView />
  <LoadingPortal />
  <GlobalError />
</template>
