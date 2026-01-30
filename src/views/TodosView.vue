<template>
  <section class="catalogo">
    <!-- 🧾 TÍTULO -->
    <h2 class="titulo">Todos los productos</h2>
    

    <!-- 🔎 BUSCADOR -->
    <div class="top-bar">
      <input
        type="text"
        placeholder="Buscar productos..."
        v-model="busqueda"
      />
    </div>

    <!-- GRID -->
    <div class="grid">
      <RouterLink
        v-for="p in productosFiltrados"
        :key="p.id"
        :to="`/producto/${p.tipo}/${p.slug}`"
        class="card-link"
      >
        <div class="card">
          <img class="img-card" :src="p.imagen" />

          <h3>{{ p.nombre }}</h3>
          <p class="marca">{{ p.marca }}</p>
          <p class="precio">${{ p.precio }}</p>

          <div class="acciones">
            <button
              class="agregar"
              @click.stop.prevent="agregarAlCarrito(p)"
            >
              Agregar al carrito
            </button>

            <button class="ver">
              Ver producto
            </button>
          </div>
        </div>
      </RouterLink>
    </div>

    <p v-if="productosFiltrados.length === 0" class="vacio">
      No se encontraron productos
    </p>
  </section>
</template>

<script>
import { productos } from "@/data/productos"
import { useCarritoStore } from "@/stores/carrito"

export default {
  name: "TodosView",

  data() {
    return {
      busqueda: ""
    }
  },

  computed: {
    productosFiltrados() {
      if (!this.busqueda.trim()) return productos

      const q = this.busqueda.toLowerCase()

      return productos.filter(p =>
        p.nombre.toLowerCase().includes(q) ||
        p.marca?.toLowerCase().includes(q)
      )
    }
  },

  methods: {
    agregarAlCarrito(producto) {
      const carrito = useCarritoStore()
      carrito.agregarProducto(producto)
    }
  }
}
</script>

<style scoped>
/* ⚠️ ES EXACTAMENTE EL MISMO CSS DE UNLOCK */

.catalogo {
  background-color: #0f0f0f;
  min-height: 100vh;
  padding: 60px;
  color: #f5f5f5;
  font-family: system-ui;
}

.titulo {
  font-size: 30px;
  margin-bottom: 24px;
  color: #c9184a;
  letter-spacing: 1px;
}

.top-bar {
  margin-bottom: 28px;
}

.top-bar input {
  width: 100%;
  padding: 12px 16px;
  background-color: #141414;
  border: 1px solid rgba(255,255,255,0.08);
  color: #f5f5f5;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 28px;
}

.card {
  background-color: #151515;
  border: 1px solid rgba(255,255,255,0.06);
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 420px;
  transition: 0.35s;
}

.card:hover {
  transform: translateY(-6px);
  border-color: #c9184a;
}

.card-link {
  text-decoration: none;
  color: inherit;
}

.img-card {
  width: 100%;
  height: 160px;
  object-fit: cover;
  margin-bottom: 12px;
}

.marca {
  font-size: 12px;
  color: #aaa;
}

.precio {
  color: #c9184a;
  font-weight: 600;
  margin: 10px 0;
}

.acciones {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.agregar {
  border: 1px solid #555;
  background: none;
  color: #ccc;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.agregar:hover {
  background-color: #555;
  color: #fff;
}

.ver {
  border: 1px solid #c9184a;
  background: none;
  color: #c9184a;
  padding: 10px;
  cursor: pointer;
}

.ver:hover {
  background-color: #c9184a;
  color: #fff;
}

.vacio {
  text-align: center;
  margin-top: 60px;
  color: #777;
}
.subtitulo {
  margin-top: -10px;
  margin-bottom: 36px;
  font-size: 14px;
  color: #999;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  font-weight: 400;
}

</style>
