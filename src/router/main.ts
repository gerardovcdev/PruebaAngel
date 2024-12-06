import { createRouter, createWebHistory } from 'vue-router';
import Swal from 'sweetalert2'

import profile from '../pages/profile.vue';
import AppLayout from '../layouts/AppLayout.vue';
import login from '../pages/login.vue';
import chat from '../pages/chat.vue';

const routes = [
  { 
    path: '/',
    name: 'Login',
    component: login,
  },
  { 
    path: '/profile',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'Profile',
        component: profile,
      },
    ],
  },
  { 
    path: '/chat',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'Chat',
        component: chat,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (from.path === '/profile' && to.path === '/') {
    Swal.fire({
      icon: 'error',
      title: 'Has cerrado sesión',
    }).then(() => {
      next();
    });
  } else {
    next();
  }
});

export default router;