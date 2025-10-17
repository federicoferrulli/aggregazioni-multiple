import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/views/dashboard.vue'),
    meta: { 
      requiresAuth: true,
      layout: 'DefaultLayout'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    redirect: () => {
        return { path: '/'}
    },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;