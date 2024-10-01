import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '../components/dashboard.vue'
import login from '../components/login.vue'
import register from '../components/register.vue'
import home from '../components/home.vue'
import navbar from '../components/navbar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/navbar',
      name: 'navbar',
      component: navbar
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})

export default router
