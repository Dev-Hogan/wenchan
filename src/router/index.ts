import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { Routes } from '@/models'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: Routes.home,
      component: HomeView,
      children: [
        {
          path: '/',
          name: Routes.all,
          component: () => import('@/modules/all/All.vue')
        },
        {
          path: '/dev',
          name: Routes.dev,
          component: () => import('@/modules/Dev.vue')
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      name: Routes.pageNotFound,
      component: () => import('@/views/PageNotFound.vue')
    }
  ]
})

export default router
