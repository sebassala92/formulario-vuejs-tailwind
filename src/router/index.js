import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/form1',
      name: 'form1',
      component: () => import('../views/Form1.vue')
    },
    {
      path: '/form2',
      name: 'form2',
      component: () => import('../views/Form2.vue')
    },
    {
      path: '/form3',
      name: 'form3',
      component: () => import('../views/Form3.vue')
    },
    {
      path: '/final',
      name: 'final',
      component: () => import('../views/Final.vue')
    }
  ]
})

export default router
