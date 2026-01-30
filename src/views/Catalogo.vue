<template>
  <section class="catalogo">
    <!-- 🔎 BUSCADOR + BOTÓN FILTROS -->
       <h2 class="titulo">Perfumes</h2>
       <p class="subtitulo">Las mejores fragancias seleccionadas para vos</p>
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

     <div class="grupo aromas">
  <h4>Aroma</h4>
  <label v-for="a in aromasDisponibles" :key="a" class="chip">
  <input type="checkbox" :value="a" v-model="filtros.aroma" />
  <span>{{ a }}</span>
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

<p class="sub-medida">{{ p.medida }}</p>
<p class="sub-type">{{ p.type }}</p>



<template v-if="p.precioOferta && p.precioOferta > 0">
  <p class="precio-oferta">$ {{ precioConPuntos(p.precioOferta) }}</p>
  <p class="precio-tachado">$ {{ precioConPuntos(p.precio) }}</p>
</template>

<!-- Si NO hay oferta -->
<template v-else>
  <p class="precio-oferta">$ {{ precioConPuntos(p.precio) }}</p>
</template>

<p class="precio-impuesto">
  Precio sin impuestos: $ {{ precioConPuntos(p.precioImpuesto) }}
</p>



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
import { perfumes} from "@/data/perfumes"
import { useCarritoStore } from "@/stores/carrito"

export default {
  name: "CatalogoView",

  data() {
    return {
      busqueda: "",
      mostrarFiltros: false,

      filtros: {
        sexo: [],
        aroma: [],
        
      },

      sexos: ["Masculino", "Femenino", "Unisex"],
      
      
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
    p.aroma.some(a => this.filtros.aroma.includes(a.toUpperCase()))
  )
}

     

      return lista
    },
    aromasDisponibles() {
  const set = new Set()

  perfumes.forEach(p => {
    p.aroma.forEach(a => {
      set.add(a.trim().toUpperCase())
    })
  })

  return Array.from(set)
},

    hayFiltrosActivos() {
      return (
        this.filtros.sexo.length ||
        this.filtros.aroma.length 
        
      )
    },
    
  },

  methods: {
    limpiarFiltros() {
      this.filtros.sexo = []
      this.filtros.aroma = []
      
      this.busqueda = ""
    },
      agregarAlCarrito(producto) {
    const carrito = useCarritoStore()
    carrito.agregarProducto(producto)
  },
   precioConPuntos(valor) {
      if (!valor) return '0'
      return valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
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
  position: relative;
  padding: 12px 26px;
  background: linear-gradient(135deg, rgba(201,24,74,0.15), rgba(201,24,74,0.05));
  border: 1px solid rgba(201,24,74,0.6);
  color: #f3a5b7;
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  overflow: hidden;
  transition: all 0.35s ease;
  backdrop-filter: blur(6px);
}

/* brillo deslizante */
.top-bar button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255,255,255,0.25), transparent);
  transition: left 0.6s ease;
}

.top-bar button:hover::before {
  left: 100%;
}

.top-bar button:hover {
  background: linear-gradient(135deg, rgba(201,24,74,0.35), rgba(201,24,74,0.15));
  color: #fff;
  box-shadow: 0 8px 24px rgba(201,24,74,0.35);
  transform: translateY(-2px);
}

.top-bar .limpiar {
  border-color: rgba(255,255,255,0.3);
  color: #ccc;
  background: rgba(255,255,255,0.04);
}

.top-bar .limpiar:hover {
  background: rgba(255,255,255,0.12);
  color: #fff;
  box-shadow: 0 6px 16px rgba(0,0,0,0.4);
}


/* ===== FILTROS ===== */
/* ===== FILTROS PREMIUM ===== */
.filtros {
  background: linear-gradient(145deg, #151515, #0d0d0d);
  border: 1px solid rgba(255,255,255,0.08);
  padding: 28px;
  margin-bottom: 40px;
  border-radius: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 32px;
 
  position: relative;
  overflow: hidden;
    border-radius: 12px;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.04),
              0 10px 30px rgba(0,0,0,0.6);
  animation: aparecer 0.8s ease;
}
@keyframes aparecer {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.filtros::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top right, rgba(201,24,74,0.08), transparent 60%);
  pointer-events: none;
}

.grupo h4 {
  position: relative;
  padding-bottom: 6px;
}

.grupo h4::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 30px;
  height: 2px;
  background: #a4133c;
}

/* Checkboxes elegantes */
.grupo label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: #ddd;
  cursor: pointer;
  padding: 6px 10px;
  border-radius: 8px;
  transition: 0.25s;
}

.grupo label:hover {
  background: rgba(201,24,74,0.08);
}

.grupo input {
  accent-color: #c9184a;
}

/* ===== AROMAS EN CHIPS ===== */
.grupo.aromas {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 14px;
}

.grupo.aromas h4 {
  grid-column: span 2;
}

.chip {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 11px;
  letter-spacing: 0.4px;
  transition: 0.3s;
}

.chip:hover {
  background: rgba(201,24,74,0.18);
  border-color: #c9184a;
  color: #fff;
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
  position: relative;
  overflow: hidden;
  background: none;
  border: 1px solid #a4133c;
  color: #a4133c;
  padding: 10px;
  cursor: pointer;
  transition: color 0.3s ease;
  z-index: 1;
}

/* Barra animada */
.card .ver::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: #a4133c;
  transition: left 0.35s ease;
  z-index: -1;
}

.card .ver:hover::before {
  left: 0;
}

.card .ver:hover {
  color: white;
}

.card .ver::before {
  background: linear-gradient(90deg, #a4133c, #c9184a);
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

.agregar {
  margin-top: 12px;
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
.acciones {
  margin-top: auto; /* 🔥 empuja los botones al fondo */
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.titulo {
  font-size: 30px;
  margin-bottom: 24px;
  color: #c9184a;
  letter-spacing: 1px;
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


.sub-medida {
  font-size: 12px;
  color: #fff;
  font-weight: 500;
  margin-bottom: 2px;
}

.sub-type {
  font-size: 11px;
  color: #ccc;
  margin-bottom: 6px;
}

.precio-oferta {
  font-size: 17px;
  font-weight: 700;
  color: #c9184a;
  margin-top: 8px;
}

.precio-tachado {
  font-size: 13px;
  color: #888;
  text-decoration: line-through;
  margin-top: 2px;
}

.precio-impuesto {
  font-size: 10px;
  color: #666;
  margin-top: 4px;
}

/* ===== MOBILE ===== */
@media (max-width: 768px) {
  .catalogo {
    padding: 30px 20px;
  }
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr); /* 2 productos por fila */
    gap: 16px;
  }

  .card {
    padding: 14px;
    min-height: 380px;
  }

  .img-card {
    height: 140px; /* más protagonista en mobile */
    object-fit: contain; /* no se recortan */
    margin-bottom: 10px;
  }

  .card h3 {
    font-size: 14px;
  }

  .precio-oferta {
    font-size: 15px;
  }

  .acciones button {
    font-size: 12px;
    padding: 8px;
  }
}

@media (max-width: 420px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .img-card {
    height: 120px;
  }
}

</style>