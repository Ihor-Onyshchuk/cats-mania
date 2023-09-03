<script setup lang="ts">
import { defineProps } from 'vue'
import { Cat } from '../types/Cat'

defineProps<{
  cat: Cat
  catOwner?: string
}>()
</script>

<template>
  <div class="cat-card p-shadow-4">
    <img :src="cat.photo" alt="Cat Photo" class="cat-photo" />
    <div class="cat-info">
      <h3>{{ cat.name }}</h3>
      <p>{{ cat.color }}</p>
      <p>{{ cat.breed }}</p>
    </div>
  </div>
</template>

<style scoped>
.cat-card {
  background-color: #f9fdf8;
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
}

.cat-card:hover {
  transform: translateY(-4px);
}

.cat-photo {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.cat-info h3 {
  font-size: 1.25rem;
  margin: 0;
  margin-bottom: 0.5rem;
}

.cat-info p {
  font-size: 1rem;
  margin: 0;
}
</style>
