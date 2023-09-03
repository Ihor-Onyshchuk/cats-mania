<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import Chart from 'primevue/chart'
import Tag from 'primevue/tag'
import { useRoute } from 'vue-router'
import InlineMessage from 'primevue/inlinemessage'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'

import { Cat } from '../types/Cat'
import { useCatsStore } from '../store/catsStore'
import { formatDateToHMM, checkCatOwner } from '../utils/index'
import { useUserStore } from '../store/userStore'

const route = useRoute()

const catsStore = useCatsStore()
const userStore = useUserStore()

const cat = computed<Cat | null>(() => catsStore.cat)

const birdChartData = computed(() => ({
  labels: cat.value?.eatenBirds.map((entry) => formatDateToHMM(entry.date)),
  datasets: [
    {
      label: 'Eaten Birds',
      data: cat.value?.eatenBirds.map((entry) => entry.count)
    }
  ]
}))

const activityChartData = computed(() => ({
  labels: cat.value?.activities.map((entry) => formatDateToHMM(entry.date)),
  datasets: [
    {
      label: 'Minutes active',
      data: cat.value?.activities.map((entry) => entry.minutesActive)
    }
  ]
}))

onMounted(() => {
  if (route.params.id) {
    catsStore.getCatById(route.params.id as string)
  }
})

onUnmounted(() => {
  catsStore.resetCatState()
})
</script>

<template>
  <div v-if="cat" class="cat-details">
    <div class="left-section">
      <div class="card">
        <div class="cat-photo">
          <img :src="cat.photo" alt="Cat Photo" />
        </div>
        <div class="cat-info-container">
          <div class="cat-info">
            <h2>{{ cat.name }}</h2>
            <p><strong>Color:</strong> {{ cat.color }}</p>
            <p><strong>Breed:</strong> {{ cat.breed }}</p>
            <p><strong>Fur Type:</strong> {{ cat.furType }}</p>
          </div>
          <InlineMessage severity="info" class="cat-owner">{{
            checkCatOwner(cat.ownerId, userStore.user?.id)
          }}</InlineMessage>
        </div>
      </div>
      <div class="history">
        <h3>Activity</h3>
        <Accordion activeIndex="0">
          <AccordionTab header="Show Activity History">
            <p class="mb-2">Status: <Tag severity="success" :value="cat.status" /></p>
            <ul class="activity-list">
              <li v-for="(activity, index) in cat.activities" :key="index">
                {{ formatDateToHMM(activity.date) }} - {{ activity.activityType }}
              </li>
            </ul>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
    <div class="right-section">
      <div class="chart">
        <h3>Number of Birds Eaten per Day</h3>
        <Chart :type="'bar'" :data="birdChartData" :options="birdChartOptions" />
      </div>
      <div class="chart">
        <h3>Hourly Activity</h3>
        <Chart :type="'line'" :data="activityChartData" :options="activityChartOptions" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.cat-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px 0;
}

.left-section,
.right-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.cat-photo img {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.cat-info h2 {
  margin: 0;
  font-size: 1.5rem;
}

.cat-info-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cat-owner {
  align-self: end;
  padding: 0.5rem 0.5rem;
}

.history {
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.activity-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.activity-list li {
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.4;
}

.right-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.chart {
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.chart h3 {
  margin: 0 0 10px;
  font-size: 1.2rem;
}

.p-chart {
  width: 100%;
  max-height: 300px;
  border-radius: 10px;
  background-color: white;
  overflow: hidden;
}
</style>
