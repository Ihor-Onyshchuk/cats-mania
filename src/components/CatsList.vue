<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCatsStore } from '../store/catsStore'
import CatCard from './CatCard.vue'

const router = useRouter()

const catsStore = useCatsStore()

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
