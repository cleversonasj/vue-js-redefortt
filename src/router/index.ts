import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/empresa',
    name: 'Empresa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "empresa" */ '../views/EmpresaView.vue')
  },
  {
    path: '/galeria',
    name: 'Galeria',
    component: () => import(/* webpackChunkName: "galeria" */ '../views/GaleriaView.vue')
  },
  {
    path: '/contatos',
    name: 'Contatos',
    component: () => import(/* webpackChunkName: "contato" */ '../views/ContatosView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
