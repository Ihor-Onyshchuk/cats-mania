import { createRouter, createWebHistory } from 'vue-router'
import CatsList from '@/components/CatsList.vue'
import AddCat from '@/components/AddCat.vue'
import CatDetails from '@/components/CatDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CatsList
    },
    {
      path: '/cats/:id',
      component: CatDetails
    },
    {
      path: '/cats/add',
      component: AddCat
    }
  ]
})

export default router
