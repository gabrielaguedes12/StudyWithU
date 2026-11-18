import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    {
      path: '/materias',
      name: 'materias',
      component: () => import('../views/MateriasView.vue'),
    },
    {
      path: '/sessoes',
      name: 'sessoes',
      component: () => import('../views/SessoesView.vue'),
    },
    {
      path: '/metas',
      name: 'metas',
      component: () => import('../views/MetasReview.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
    },
  ],
})

export default router