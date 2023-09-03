import { createRouter, createWebHistory } from 'vue-router'

import AddCat from '@/components/AddCat.vue'
import LoginPage from '@/pages/LoginPage.vue'
import CatsList from '@/components/CatsList.vue'
import RegisterPage from '@/pages/RegisterPage.vue'
import CatDetails from '@/components/CatDetails.vue'
import { useUserStore } from './../store/userStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CatsList
    },
    {
      path: '/login',
      component: LoginPage,
      meta: { requiresAuth: false }
    },
    {
      path: '/register',
      component: RegisterPage,
      meta: { requiresAuth: false }
    },
    {
      path: '/cats/:id',
      component: CatDetails
    },
    {
      path: '/cats/add',
      component: AddCat,
      meta: { requiresAuth: true }
    },
    // Catch-all route for URLs that did not match any defined routes
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (userStore.isAuth) {
      // User is authenticated
      next()
    } else {
      // User is not authenticated
      next('/login')
    }
  } else {
    // This route does not require authentication
    next()
  }
})

export default router
