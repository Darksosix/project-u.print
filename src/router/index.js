import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import LoginView from '../views/Login.vue';
import ServeView from '../views/Serve.vue';
import AboutView from '../views/About.vue';
import ContactView from '../views/Contact.vue';
import TemplateView from '../views/Template.vue';
import OnboardingPageView from '../views/OnboardingPage.vue'; // นำเข้า OnboardingPageView

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/serve',
    name: 'Serve',
    component: ServeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
  },
  {
    path: '/template',
    name: 'Template',
    component: TemplateView,
  },
  {
    path: '/onboarding',
    name: 'OnboardingPage',
    component: OnboardingPageView, // เพิ่มเส้นทางไปที่หน้า OnboardingPage
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;