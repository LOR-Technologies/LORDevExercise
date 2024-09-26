import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Nav from '../views/Nav.vue';
import Registration from '../views/Registration.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Users from '../views/Users.vue';



const routes = [

  { path: '/', name: 'Home', component: Home},
  { path: '/nav', name: 'Nav', component: Nav},
  { path: '/login', name: 'Login', component: Login },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/registration', name: 'Registration', component: Registration },
  { path: '/users', component: Users },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
