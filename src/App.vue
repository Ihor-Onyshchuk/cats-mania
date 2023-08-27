<script setup lang="ts">
import { onMounted } from 'vue'
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
  <div v-show="catsStore.isFetchingCats">Loading...</div>
  <div v-show="catsStore.fetchingCatsError">Error</div>
</template>
