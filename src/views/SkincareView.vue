<template>
  <section class="catalogo">
    <h2 class="titulo">Skincares</h2>
    <p class="subtitulo">Las mejores productos para tu cuidado personal</p>

    <!-- 🔎 BUSCADOR -->
    <div class="top-bar">
      <input
        type="text"
        placeholder="Buscar producto de skincare..."
        v-model="busqueda"
      />
    </div>

    <!-- GRID -->
    <div class="grid">
      <RouterLink
        v-for="p in productosFiltrados"
        :key="`${p.tipo}-${p.slug}`"
        :to="`/producto/${p.tipo || 'skincare'}/${p.slug}`"
        class="card-link"
      >
        <div class="card">
          <img class="img-card" :src="p.imagen" />

          <h3>{{ p.nombre }}</h3>
          <p class="sub-medida">{{ p.marca }}</p>

          <template v-if="p.precioOferta && p.precioOferta > 0">
            <p class="precio-oferta">$ {{ precioConPuntos(p.precioOferta) }}</p>
            <p class="precio-tachado">$ {{ precioConPuntos(p.precio) }}</p>
          </template>

          <template v-else>
            <p class="precio-oferta">$ {{ precioConPuntos(p.precio) }}</p>
          </template>

          <p class="precio-impuesto" v-if="p.precioImpuesto">
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
import { skincare } from "@/data/skincare"
import { useCarritoStore } from "@/stores/carrito"

export default {
  name: "SkincareView",

  data() {
    return {
      busqueda: ""
    }
  },

  computed: {
    productosFiltrados() {
      let lista = [...skincare]

      if (this.busqueda.trim()) {
        lista = lista.filter(p =>
          p.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
        )
      }

      return lista
    }
  },

  methods: {
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
/* === MISMO CSS QUE MAQUILLAJES (sin filtros) === */

.catalogo {
  background-color: #0f0f0f;
  min-height: 100vh;
  padding: 60px;
  color: #f5f5f5;
  font-family: system-ui, -apple-system, BlinkMacSystemFont;
}

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
  justify-content: space-between;
  transition: 0.35s ease;
  min-height: 420px;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-6px);
  border-color: #a4133c;
}

.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.img-card {
  width: 100%;
  height: 160px;
  object-fit: cover;
  margin-bottom: 12px;
  background-color: #0f0f0f;
}

.sub-medida {
  font-size: 12px;
  color: #fff;
  font-weight: 500;
  margin-bottom: 2px;
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

.ver::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #a4133c, #c9184a);
  transition: left 0.35s ease;
  z-index: -1;
}

.ver:hover::before {
  left: 0;
}

.ver:hover {
  color: white;
}

.vacio {
  text-align: center;
  margin-top: 60px;
  color: #777;
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

/* Responsive igual al de Maquillajes */
@media (max-width: 768px) {
  .catalogo {
    padding: 30px 20px;
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .card {
    padding: 14px;
    min-height: 380px;
  }

  .img-card {
    height: 140px;
    object-fit: contain;
  }
}
</style>
