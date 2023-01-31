import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from "@/views/LoginForm.vue";
import RegisterForm from "@/views/RegisterForm.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'LoginView', component: LoginForm },
    { path: '/register', name: 'RegisterView', component: RegisterForm },
    { path: '/:notFound(.*)', redirect: '/' },
  ],
});

export default router;