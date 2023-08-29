<script setup lang="ts">
import LoadingIndicator from './LoadingIndicator.vue'
import { useCatsStore } from '../store/catsStore'

const catsStore = useCatsStore()
</script>

<template>
  <teleport to="body">
    <div v-if="catsStore.isFetchingCatsData">
      <LoadingIndicator />
    </div>
  </teleport>
</template>
