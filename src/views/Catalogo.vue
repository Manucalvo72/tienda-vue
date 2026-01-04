<template>
  <section class="catalogo">
    <!-- 🔎 BUSCADOR + BOTÓN FILTROS -->
    <div class="top-bar">
      <input
        type="text"
        placeholder="Buscar perfume..."
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
        <h4>Sexo</h4>
        <label v-for="s in sexos" :key="s">
          <input type="checkbox" :value="s" v-model="filtros.sexo" />
          {{ s }}
        </label>
      </div>

      <div class="grupo">
        <h4>Aroma</h4>
        <label v-for="a in aromas" :key="a">
          <input type="checkbox" :value="a" v-model="filtros.aroma" />
          {{ a }}
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
    <p class="precio">${{ p.precio }}</p>
    <button class="ver" >
  Ver producto
</button>
  </div>
</RouterLink>
</div>


    <p v-if="productosFiltrados.length === 0" class="vacio">
      No se encontraron productos
    </p>
  </section>
</template>

<script>
import { perfumes} from "@/data/perfumes"

export default {
  name: "CatalogoView",

  data() {
    return {
      busqueda: "",
      mostrarFiltros: false,

      filtros: {
        sexo: [],
        aroma: [],
        marca: []
      },

      sexos: ["masculino", "femenino", "unisex"],
      aromas: ["fresco", "vainilla", "dulce", "picante"],
      marcas: ["Dior", "Carolina Herrera", "Paco Rabanne"]
    }
  },

  computed: {
    productosFiltrados() {
      let lista = [...perfumes] // Usamos directamente los productos importados

      if (this.busqueda.trim()) {
        lista = lista.filter(p =>
          p.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
        )
      }

      if (this.filtros.sexo.length) {
        lista = lista.filter(p =>
          this.filtros.sexo.includes(p.sexo)
        )
      }

      if (this.filtros.aroma.length) {
        lista = lista.filter(p =>
          p.aroma.some(a => this.filtros.aroma.includes(a))
        )
      }

      if (this.filtros.marca.length) {
        lista = lista.filter(p =>
          this.filtros.marca.includes(p.marca)
        )
      }

      return lista
    },

    hayFiltrosActivos() {
      return (
        this.filtros.sexo.length ||
        this.filtros.aroma.length ||
        this.filtros.marca.length
      )
    }
  },

  methods: {
    limpiarFiltros() {
      this.filtros.sexo = []
      this.filtros.aroma = []
      this.filtros.marca = []
      this.busqueda = ""
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
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
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
  margin-top: auto;
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

/* ===== MOBILE ===== */
@media (max-width: 768px) {
  .catalogo {
    padding: 30px 20px;
  }
}

</style>