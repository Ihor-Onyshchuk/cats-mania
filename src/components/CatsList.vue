<script setup>
import { useCatsStore } from '../store/catsStore'
import CatCard from './CatCard.vue'

const catsStore = useCatsStore()
</script>

<template>
  <div class="cats-list">
    <CatCard v-for="cat in catsStore.cats" :key="cat.id" :cat="cat" />
  </div>
</template>

<style scoped>
.cats-list {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}
</style>
