import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import TodayList from '../components/TodayList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/today',
      name: 'today',
      component: TodayList
    },
  ]
})

export default router
