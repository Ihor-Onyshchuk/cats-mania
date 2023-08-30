<script setup lang="ts">
import { computed } from 'vue'
import Message from 'primevue/message'
import { useGlobalStore } from '../store/globalStore'

const globalStore = useGlobalStore()

const errorMessage = computed(() => globalStore.errorMessage)

function dismissError() {
  globalStore.clearError()
}
</script>

<template>
  <div v-if="errorMessage" class="global-error">
    <Message severity="error" closable @close="dismissError">{{ errorMessage }}</Message>
  </div>
</template>

<style scoped>
.global-error {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1280px;
  width: 100%;
  padding: 0 20px;
  z-index: 1000;
}
</style>
