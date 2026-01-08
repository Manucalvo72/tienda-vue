<template>
  <section class="catalogo">
    <!-- 🔎 BUSCADOR + BOTÓN FILTROS -->
    <div class="top-bar">
      <input
        type="text"
        placeholder="Buscar maquillaje..."
        v-model="busqueda"
      />
      <button @click="mostrarFiltros = !mostrarFiltros">
        Filtros
      </button>

      <button
        v-if="hayFiltrosActivos"
        class="limpiar"
        @click="limpiarFiltros"
      >
        Limpiar filtros
      </button>
    </div>

    <!-- 🎛 PANEL DE FILTROS -->
    <div v-if="mostrarFiltros" class="filtros">
      <div class="grupo">
        <h4>Categoría</h4>
        <label v-for="c in categorias" :key="c">
          <input type="checkbox" :value="c" v-model="filtros.categoria" />
          {{ c }}
        </label>
      </div>

      <div class="grupo">
  <h4>Tipo</h4>
  <label v-for="t in tipos" :key="t">
    <input type="checkbox" :value="t" v-model="filtros.tipo" />
    {{ t }}
  </label>
</div>

      <div class="grupo">
        <h4>Marca</h4>
        <label v-for="m in marcas" :key="m">
          <input type="checkbox" :value="m" v-model="filtros.marca" />
          {{ m }}
        </label>
      </div>
    </div>

    <!-- GRID DE PRODUCTOS -->
   <div class="grid">
  <RouterLink
    v-for="p in productosFiltrados"
    :key="p.slug"
    :to="`/producto/${p.tipo || 'maquillaje'}/${p.slug}`"

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
import { maquillajes } from "../data/maquillajes"
import { useCarritoStore } from "@/stores/carrito"

export default {
  name: "MaquillajesView",
 data() {
  return {
    busqueda: "",
    mostrarFiltros: false,

    filtros: {
      categoria: [],
      marca: [],
      tipo: []
    },

    categorias: ["rostro", "rubores", "polvos", "ojos", "labios"],
    marcas: Array.from(new Set(maquillajes.map(p => p.marca))),
    tipos: Array.from(
  new Set(maquillajes.map(p => p.tipo).filter(t => t)) // ⚡ filtra los vacíos
)
  }
},

  computed: {
    productosFiltrados() {
      let lista = [...maquillajes]

      // filtro por busqueda
      if (this.busqueda.trim()) {
        lista = lista.filter(p =>
          p.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
        )
      }

      // filtro por categoria
      if (this.filtros.categoria.length) {
        lista = lista.filter(p =>
          this.filtros.categoria.includes(p.categoria)
        )
      }

      // filtro por marca
      if (this.filtros.marca.length) {
        lista = lista.filter(p =>
          this.filtros.marca.includes(p.marca)
        )
      }

      if (this.filtros.tipo.length) {
  lista = lista.filter(p =>
    this.filtros.tipo.includes(p.tipo)
  )
}

      return lista
    },

   hayFiltrosActivos() {
  return (
    this.filtros.categoria.length ||
    this.filtros.marca.length ||
    this.filtros.tipo.length
  )
},
  },

  methods: {
   limpiarFiltros() {
  this.filtros.categoria = []
  this.filtros.marca = []
  this.filtros.tipo = []
  this.busqueda = ""
},
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
  font-family: system-ui, -apple-system, BlinkMacSystemFont;
}

/* ===== TOP BAR ===== */
.top-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 28px;
}

.top-bar input {
  flex: 1;
  min-width: 220px;
  padding: 12px 16px;
  background-color: #141414;
  border: 1px solid rgba(255,255,255,0.08);
  color: #f5f5f5;
  outline: none;
}

.top-bar input::placeholder {
  color: #777;
}

.top-bar button {
  padding: 12px 22px;
  background: none;
  border: 1px solid #a4133c;
  color: #a4133c;
  cursor: pointer;
  transition: 0.3s;
}

.top-bar button:hover {
  background-color: #a4133c;
  color: #fff;
}

.top-bar .limpiar {
  border-color: #555;
  color: #bbb;
}

.top-bar .limpiar:hover {
  background-color: #555;
  color: #fff;
}

/* ===== FILTROS ===== */
.filtros {
  background-color: #141414;
  border: 1px solid rgba(255,255,255,0.06);
  padding: 20px;
  margin-bottom: 36px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 24px;
}


.grupo h4 {
  font-size: 14px;
  margin-bottom: 10px;
  color: #a4133c;
}

.grupo label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #ccc;
  cursor: pointer;
}

.grupo input {
  accent-color: #a4133c;
}

/* ===== GRID ===== */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 28px;
}

/* ===== CARD ===== */
.card {
  background-color: #151515;
  border: 1px solid rgba(255,255,255,0.06);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.35s ease;
  min-height: 420px;
}
.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.card {
  cursor: pointer;
}

.card:hover {
  transform: translateY(-6px);
  border-color: #a4133c;
}

/* INFO */
.card h3 {
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 6px;
}

.card .marca {
  font-size: 12px;
  color: #888;
}

.card .precio {
  font-size: 16px;
  font-weight: 600;
  color: #a4133c;
  margin: 12px 0;
}

/* BOTÓN */
.card .ver {
 
  background: none;
  border: 1px solid #a4133c;
  color: #a4133c;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.card .ver:hover {
  background-color: #a4133c;
  color: #fff;
}

/* ===== VACÍO ===== */
.vacio {
  text-align: center;
  margin-top: 60px;
  color: #777;
}

.img-card {
  width: 100%;
  height: 160px;
  object-fit: cover;
  margin-bottom: 12px;
  background-color: #0f0f0f;
}

.acciones {
  margin-top: auto; /* 🔥 empuja los botones al fondo */
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


/* ===== MOBILE ===== */
@media (max-width: 768px) {
  .catalogo {
    padding: 30px 20px;
  }
}
</style>
