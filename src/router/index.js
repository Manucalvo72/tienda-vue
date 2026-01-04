import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductoView from "@/views/ProductoView.vue"
import Carrito from '@/views/Carrito.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/catalogo',
    name: 'catalogo',
    component: () => import(/* webpackChunkName: "productos" */ '../views/Catalogo.vue'),
    meta: { title: 'Catalogo' }
  },
  {
  path: "/producto/:tipo/:slug",
  name: "producto",
  component: ProductoView,
  props: true
},
{
  path: "/carrito",
  name: 'carrito',
  component: Carrito,
   
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
