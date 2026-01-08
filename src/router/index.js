import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductoView from "@/views/ProductoView.vue"
import Carrito from '@/views/Carrito.vue'
import MaquillajesView from "@/views/MaquillajesView.vue"


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { titulo: "Inicio" }
  },
  {
    path: '/perfumes',
    name: 'perfumes',
    component: () => import(/* webpackChunkName: "productos" */ '../views/Catalogo.vue'),
    meta: { titulo: "Perfumes" }
  },
  {
  path: "/producto/:tipo/:slug",
  name: "producto",
  component: ProductoView,
  props: true,
    meta: { titulo: "Producto" }
},
{
  path: "/carrito",
  name: 'carrito',
  component: Carrito,
    meta: { titulo: "Carrito" }
   
},
{
  path: "/maquillajes",
  name: "maquillajes",
  component: MaquillajesView,
  meta: { titulo: "Maquillajes" }
},
{
  path: "/skincare",
  name: "Skincare",
  component: () => import("@/views/SkincareView.vue"),
    meta: { titulo: "Skincare" }
},
{
  path: "/esencias",
  name: "esencias",
  component: () => import("@/views/EsenciasView.vue"),
    meta: { titulo: "Esencias" }
},
{
  path: "/unlock",
  name: "unlock",
  component: () => import("@/views/UnlockView.vue"),
    meta: { titulo: "Unlock" }
},
{
  path: "/catalogo",
  name: "catalogo",
  component: () => import("@/views/TodosView.vue"),
    meta: { titulo: "Catalogo" }
},

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to) => {
  document.title = to.meta.titulo
    ? `${to.meta.titulo} | Titulo`
    : "Tu Tienda"
})

export default router
