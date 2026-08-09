import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/components/Main.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/cv',
    name: 'CV',
    component: () => import('@/views/CV.vue')
  },
  {
    path: '/publication',
    name: 'publication',
    component: () => import('@/views/publication.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/taylermengkai-homepage/'),
  routes
})

export default router 