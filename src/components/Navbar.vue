<template>
  <nav class="navbar">
    <img src="" alt="logo" class="logo" @click="toHome">

    <ul class="nav-links">
      <li><RouterLink to="/">Inicio</RouterLink></li>
      <li><RouterLink to="/catalogo">Catalogo</RouterLink></li>
      <li><router-link to="/maquillajes">Maquillajes</router-link></li>
      <li><router-link to="/perfumes">Perfumes</router-link></li>
      <li><router-link to="/unlock">Unlock</router-link></li>
      <li><router-link to="/skincare">Skincare</router-link></li>
      <li><router-link to="/esencias">Esencias</router-link></li>
     <div class="carrito-btn" @click="toCarrito">
  <i class="fa-solid fa-cart-shopping"></i>

  <span
    v-if="totalItems"
    class="badge"
    :key="textoBadge"
  >
    {{ textoBadge }}
  </span>
</div>

    </ul>
    <div class="buscador">
  <input
    type="text"
    placeholder="Buscar productos..."
    v-model="query"
    @focus="activo = true"
    @blur="cerrar"
  />

  <ul v-if="activo && sugerencias.length" class="sugerencias">
    <li
  v-for="p in sugerencias"
  :key="p.id"
  @mousedown.prevent="irProducto(p)"
>
  <img :src="p.imagen" class="thumb" />

  <div class="info">
    <span class="nombre">{{ p.nombre }}</span>
    <span class="tipo">{{ p.tipo }}</span>
  </div>
</li>

  </ul>
</div>
  </nav>
</template>

<style scoped>
 .navbar {
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 40px;
  border-bottom: 3px double #a4133c;
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  height: 42px;
  cursor: pointer;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 32px;

  margin-left: 120px; /* AJUSTÁ ESTE VALOR */
}
.nav-links a {
  position: relative;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 17px;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
  font-family: "Inter", sans-serif;
}

/* Hover elegante */
.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0;
  height: 2px;
  background-color: #a4133c;
  transition: width 0.3s ease;
}

.nav-links a:hover {
  color: #c9184a; ;
}

.nav-links a:hover::after {
  width: 100%;
}

.router-link-active {
  color: #a4133c;
}

.router-link-active::after {
  width: 100%;
}


.buscador {
  position: relative;
  width: 260px; /* mismo ancho para input y sugerencias */
}

.buscador input {
  padding: 9px 14px;
  border-radius: 8px;
  background: #141414;
  border: 1px solid rgba(255,255,255,0.15);
  transition: border 0.2s ease;
   width: 100%;
   color: #f5f5f5;
   caret-color: #c9184a;
}
.buscador input::placeholder {
  color: #888;
}

.buscador input:focus {
  outline: none;
  border-color: #a4133c;
}

.sugerencias {
    position: absolute;
  top: 115%;
  left: 0;
  width: 100%;
  background: #1c1c1c;
  border-radius: 10px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
  z-index: 200;
    list-style: none;
  padding: 0;
  margin: 0;
}

/* Item */
.sugerencias li {
  padding: 10px 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transition: background 0.2s ease;
   box-sizing: border-box;
}

.thumb {
  width: 38px;
  height: 38px;
  object-fit: cover;
  border-radius: 6px;
  background: #111;
  flex-shrink: 0;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.nombre {
  font-size: 14px;
  color: #f5f5f5;
}

.tipo {
  font-size: 11px;
  color: #c9184a;
  text-transform: capitalize;
}


.sugerencias li:last-child {
  border-bottom: none;
}

.sugerencias li:hover {
  background: #2a2a2a;
}

/* Nombre producto */
.sugerencias .nombre {
  color: #f5f5f5;
  font-size: 14px;
  font-weight: 500;
}

/* Tipo */
.sugerencias .tipo {
  font-size: 11px;
  color: #c9184a;
  text-transform: capitalize;
}


.carrito-btn {
  position: relative;   /* CLAVE */
  cursor: pointer;
  color: #f5f5f5;
  font-size: 20px;
}

.badge {
  position: absolute;
  top: -6px;
  right: -10px;
  background: #c9184a;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 0 0 2px #1a1a1a;

  animation: pop 0.25s ease;
}

@keyframes pop {
  0% {
    transform: scale(0.6);
  }
  100% {
    transform: scale(1);
  }
}


.tipo {
  color: #888;
  font-size: 12px;
}

</style>

<script>
import { computed } from 'vue'
import { useCarritoStore } from '@/stores/carrito'
import { productos } from "@/data/productos"

export default {
  methods: {
    toHome() {
      this.$router.push('/')
    },
    toCarrito() {
      this.$router.push("/carrito")
    },
     irProducto(p) {
      this.query = ""
      this.activo = false
      this.$router.push(`/producto/${p.tipo}/${p.slug}`)
    },

    cerrar() {
      setTimeout(() => (this.activo = false), 150)
    }
  },
   data() {
    return {
      query: "",
      activo: false
    }
  },

 computed: {
  sugerencias() {
    if (!this.query.trim()) return []

    const q = this.query.toLowerCase()

    return productos
      .filter(p =>
        p.nombre.toLowerCase().includes(q) ||
        p.marca?.toLowerCase().includes(q)
      )
      .slice(0, 6)
  },
   textoBadge() {
    return this.totalItems > 9 ? '9+' : this.totalItems
  }
},
  setup() {
    const carrito = useCarritoStore()
    // Devolver un computed para mantener la reactividad en la plantilla
    const totalItems = computed(() => carrito.totalCantidad)
    return { totalItems }
  }
}
</script>