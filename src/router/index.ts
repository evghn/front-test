import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import Page1View from '../views/Page1View.vue'
import Page2View from '@/views/Page2View.vue'

export const routes = [
  {
    path: '/page1',
    name: 'page1',
    component: Page1View,
  },
  {
    path: '/page2',
    name: 'page2',
    component: Page2View,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
