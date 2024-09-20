<<<<<<< HEAD
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 


createApp(App)
  .use(router) 
  .mount('#app');
=======
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import  router from './router';
import { createPinia } from 'pinia';

const app = createApp(App);
app.use(router);
app.use(createPinia());

createApp(App).mount('#app')
>>>>>>> f76e4f398d0ce868c31699923340a52974671b92
