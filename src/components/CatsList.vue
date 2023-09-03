<script setup lang="ts">
import { useRouter } from 'vue-router'

import CatCard from './CatCard.vue'
import { useCatsStore } from '../store/catsStore'
import { useUserStore } from '../store/userStore'
import { checkCatOwner } from '../utils/index'

const router = useRouter()

const catsStore = useCatsStore()
const userStore = useUserStore()

function handleCatCardClick(id: string) {
  router.push(`/cats/${id}`)
}
</script>

<template>
  <div class="cats-list">
    <CatCard
      v-for="cat in catsStore.cats"
      :key="cat.id"
      :cat="cat"
      :catOwner="checkCatOwner(cat.ownerId, userStore.user?.id || '')"
      @click="handleCatCardClick(cat.id)"
    />
  </div>
</template>

<style scoped>
.cats-list {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  padding: 20px 0;
}
</style>
