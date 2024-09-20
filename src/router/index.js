import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Nav from '../views/Nav.vue';
import Dashboard from '../views/Dashboard.vue';
import Login from '../views/Login.vue';
import Registration from '../views/Registration.vue';


const routes = [

  { path: '/home', name: 'Home', component: Home},
  { path: '/nav', name: 'Nav', component: Nav},
  { path: '/login', name: 'Login', component: Login },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/registration', name: 'Registration', component: Registration }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
