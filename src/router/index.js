import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import LoginView from '../views/Login.vue'; // นำเข้า LoginView
import ServeView from '../views/Serve.vue'; // 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView, // เพิ่มเส้นทางไปที่หน้า Login
  },
  {
    path: '/serve',
    name: 'Serve',
    component: ServeView, // เพิ่มเส้นทางไปที่หน้า Serve
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
