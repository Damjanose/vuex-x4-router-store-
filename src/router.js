import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from "@/pages/LoginForm.vue";
import RegisterForm from "@/pages/RegisterForm.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'login', component: LoginForm },
    { path: '/register', name: 'register', component: RegisterForm },
    { path: '/:notFound(.*)', redirect: '/' },
  ],
});

export default router;