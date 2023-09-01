import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AddCat from '@/components/AddCat.vue'
import CatDetails from '@/components/CatDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
