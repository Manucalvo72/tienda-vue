<template>
  <section class="catalogo">
    <!-- 🔎 BUSCADOR -->
    <div class="top-bar">
      <input
        type="text"
        placeholder="Buscar esencia..."
        v-model="busqueda"
      />
    </div>

    <!-- GRID -->
    <div class="grid">
      <RouterLink
        v-for="p in productosFiltrados"
        :key="p.slug"
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
import { esencias } from "@/data/esencias"
import { useCarritoStore } from "@/stores/carrito"

export default {
  name: "EsenciasView",

  data() {
    return {
      busqueda: ""
    }
  },

  computed: {
    productosFiltrados() {
      if (!this.busqueda.trim()) return esencias

      return esencias.filter(p =>
        p.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
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
.catalogo {
  background-color: #0f0f0f;
  min-height: 100vh;
  padding: 60px;
  color: #f5f5f5;
  font-family: system-ui;
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
  border-color: #a4133c;
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
  color: #888;
}

.precio {
  color: #a4133c;
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
  border: 1px solid #a4133c;
  background: none;
  color: #a4133c;
  padding: 10px;
  cursor: pointer;
}

.ver:hover {
  background-color: #a4133c;
  color: #fff;
}

.vacio {
  text-align: center;
  margin-top: 60px;
  color: #777;
}
</style>
