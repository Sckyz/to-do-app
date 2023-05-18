import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import TodayList from '../components/TodayList.vue'
import MyReminders from '../components/MyReminders.vue'
import WeeklyGoals from '../components/WeeklyGoals.vue'

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
    {
      path: '/weekly',
      name: 'weekly',
      component: WeeklyGoals
    },
    {
      path: '/reminders',
      name: 'reminders',
      component: MyReminders
    }
  ]
})

export default router
