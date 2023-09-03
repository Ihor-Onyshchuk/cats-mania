<script setup lang="ts">
import { computed, watch } from 'vue'
import Message from 'primevue/message'

import { useGlobalStore } from '../store/globalStore'

const globalStore = useGlobalStore()

const notificationMessage = computed(() => globalStore.notificationMessage)

function clearNotification() {
  globalStore.clearNotification()
}

watch(notificationMessage, (newVal, oldVal) => {
  if (newVal) {
    setTimeout(() => {
      clearNotification()
    }, newVal.life || 3000)
  }
})
</script>

<template>
  <div v-if="notificationMessage.message" class="global-notification">
    <Message
      :severity="notificationMessage.severity"
      :closable="true"
      @close="clearNotification"
      :life="notificationMessage.life"
      >{{ notificationMessage.message }}</Message
    >
  </div>
</template>

<style scoped>
.global-notification {
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
