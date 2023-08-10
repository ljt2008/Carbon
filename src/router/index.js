import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/views/Layout/index.vue'),
      children: [{
        path: '',
        name: 'home',
        component: () => import('@/views/Home/index.vue')
      },
      {
        path: 'topic/:id',
        component: () => import('@/views/Topic/index.vue')
      },
      {
        path: 'comic/:id',
        component: () => import('@/views/Comic/index.vue')
      },
      {
        path: 'recharge/:id',
        component: () => import('@/views/Recharge/index.vue')
      }
      ]
    },
  ]
})

export default router
