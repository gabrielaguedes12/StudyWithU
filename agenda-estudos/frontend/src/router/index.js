import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MateriasView from '../views/MateriasView.vue'
//import SessoesView from '../views/SessoesView'
//import MetasView from '../views/MetasView'
//import DashboardView from '../views/DashboardView'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/materias', component: MateriasView }
  ]
})

export default router