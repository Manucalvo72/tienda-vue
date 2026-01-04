<template>
  <div v-if="productoActual" class="producto-view">

    <div class="producto-card">
      <div class="imagen">
        <img :src="productoActual.imagen" />
      </div>

      <div class="info">
        <h1>{{ productoActual.nombre }}</h1>
        <p class="marca">{{ productoActual.marca }}</p>

        <p class="precio">$ {{ productoActual.precio }}</p>

        <p class="precio-sin-imp">
          Precio sin impuestos: $ {{ precioSinImpuestos }}
        </p>

        <p class="descripcion">
          {{ productoActual.descripcion }}
        </p>

        <button class="agregar" @click="agregarAlCarrito">
          Agregar al carrito
        </button>
      </div>
    </div>

  </div>
</template>

<script>
import { perfumes } from '@/data/perfumes'
import { maquillaje } from '@/data/maquillaje'
import { useCarritoStore } from '@/stores/carrito'

const todos = [...perfumes, ...maquillaje]

export default {
  name: 'ProductoView',

  props: ['tipo', 'slug'],

  computed: {
    productoActual() {
      return todos.find(
        p => p.tipo === this.tipo && p.slug === this.slug
      )
    },

    precioSinImpuestos() {
      if (!this.productoActual) return 0
      return Math.round(this.productoActual.precio / 1.21)
    }
  },

  methods: {
    agregarAlCarrito() {
      const carrito = useCarritoStore()
      if (!this.productoActual) {
        console.warn('[ProductoView] Producto actual no definido')
        return
      }
      // Log para comprobar que el click llega al store
      console.log('[ProductoView] agregando producto:', this.productoActual)
      carrito.agregarProducto(this.productoActual)
    }
  }
}
</script>

<style scoped>
/* (estilos sin cambios) */
.producto-view {
  min-height: 100vh;
  background-color: #0f0f0f;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.producto-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 900px;
  width: 100%;
  background-color: #141414;
  border: 1px solid rgba(255,255,255,0.06);
  padding: 40px;
}

.imagen img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info h1 {
  color: #f5f5f5;
  font-size: 26px;
}

.marca {
  color: #888;
  margin-bottom: 14px;
}

.precio {
  font-size: 24px;
  color: #a4133c;
  margin-bottom: 8px;
}

.precio-sin-imp {
  font-size: 13px;
  color: #777;
  margin-bottom: 18px;
}

.descripcion {
  color: #ccc;
  font-size: 14px;
  margin-bottom: 18px;
}

.datos {
  list-style: none;
  padding: 0;
  color: #aaa;
  font-size: 13px;
  margin-bottom: 22px;
}

.agregar {
  border: 1px solid #a4133c;
  background: none;
  color: #a4133c;
  padding: 14px;
  cursor: pointer;
  transition: 0.3s;
}

.agregar:hover {
  background-color: #a4133c;
  color: #fff;
}

/* mobile */
@media (max-width: 768px) {
  .producto-card {
    grid-template-columns: 1fr;
  }
}
</style>