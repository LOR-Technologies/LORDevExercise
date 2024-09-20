import { createRouter, createWebHistory } from 'vue-router';
<<<<<<< HEAD
import Registration from '../views/Registration.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
=======
import Dashboard from '../views/Dashboard.vue';
import Login from '../views/Login.vue';
import Register from './views/Register.vue';
>>>>>>> f76e4f398d0ce868c31699923340a52974671b92


const routes = [
  { path: '/', name: 'Login', component: Login },
<<<<<<< HEAD
  { path: '/register', name: 'Registration', component: Registration },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
];


=======
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/register', name: 'Login', component: Register },
];

>>>>>>> f76e4f398d0ce868c31699923340a52974671b92
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
