import { createRouter, createWebHistory } from 'vue-router';
import Registration from '../views/Registration.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';


const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/register', name: 'Registration', component: Registration },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
