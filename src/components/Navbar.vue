<template>
  <nav class="navbar">
    <img src="" alt="logo" class="logo" @click="toHome">

    <!-- Botón hamburguesa (mobile) -->
    <div class="menu-toggle" @click="menuAbierto = !menuAbierto">
      <span :class="{ open: menuAbierto }"></span>
      <span :class="{ open: menuAbierto }"></span>
      <span :class="{ open: menuAbierto }"></span>
    </div>

    <ul class="nav-links" :class="{ mobileOpen: menuAbierto }">
      <li><RouterLink to="/" @click="menuAbierto = false">Inicio</RouterLink></li>
      <li><RouterLink to="/catalogo" @click="menuAbierto = false">Catálogo</RouterLink></li>
      <li><RouterLink to="/maquillajes" @click="menuAbierto = false">Maquillajes</RouterLink></li>
      <li><RouterLink to="/perfumes" @click="menuAbierto = false">Perfumes</RouterLink></li>
      <li><RouterLink to="/unlock" @click="menuAbierto = false">Unlock</RouterLink></li>
      <li><RouterLink to="/skincare" @click="menuAbierto = false">Skincare</RouterLink></li>
      <li><RouterLink to="/esencias" @click="menuAbierto = false">Esencias</RouterLink></li>

      <div class="carrito-btn mobile-carrito" @click="toCarrito">
        <i class="fa-solid fa-cart-shopping"></i>
        <span v-if="totalItems" class="badge">{{ textoBadge }}</span>
      </div>
    </ul>

    <!-- Buscador (solo desktop) -->
    <div class="buscador desktop">
      <input
        type="text"
        placeholder="Buscar productos..."
        v-model="query"
        @focus="activo = true"
        @blur="cerrar"
      />

      <ul v-if="activo && sugerencias.length" class="sugerencias">
        <li v-for="p in sugerencias" :key="p.id" @mousedown.prevent="irProducto(p)">
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

<script>
import { computed } from 'vue'
import { useCarritoStore } from '@/stores/carrito'
import { productos } from "@/data/productos"

export default {
  data() {
    return {
      query: "",
      activo: false,
      menuAbierto: false
    }
  },
  methods: {
    toHome() {
      this.$router.push('/')
      this.menuAbierto = false
    },
    toCarrito() {
      this.$router.push("/carrito")
      this.menuAbierto = false
    },
    irProducto(p) {
      this.query = ""
      this.activo = false
      this.menuAbierto = false
      this.$router.push(`/producto/${p.tipo}/${p.slug}`)
    },
    cerrar() {
      setTimeout(() => (this.activo = false), 150)
    }
  },
  computed: {
    sugerencias() {
      if (!this.query.trim()) return []
      const q = this.query.toLowerCase()
      return productos
        .filter(p =>
          p.nombre.toLowerCase().startsWith(q) ||
          p.marca?.toLowerCase().startsWith(q)
        )
        .slice(0, 6)
    },
    textoBadge() {
      return this.totalItems > 9 ? '9+' : this.totalItems
    }
  },
  setup() {
    const carrito = useCarritoStore()
    const totalItems = computed(() => carrito.totalCantidad)
    return { totalItems }
  }
}
</script>

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
  margin-left: 120px;
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
  color: #c9184a;
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

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
}

.menu-toggle span {
  width: 26px;
  height: 2px;
  background: #f5f5f5;
  transition: all 0.3s ease;
}

.menu-toggle span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.menu-toggle span.open:nth-child(2) {
  opacity: 0;
}
.menu-toggle span.open:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

.buscador {
  position: relative;
  width: 260px;
}

.buscador input {
  padding: 9px 14px;
  border-radius: 8px;
  background: #141414;
  border: 1px solid rgba(255,255,255,0.15);
  width: 100%;
  color: #f5f5f5;
}
.buscador input:focus {
  border-color: #c9184a;
  box-shadow: 0 0 12px rgba(201, 24, 58, 0.45);
  outline: none;
}
.sugerencias {
  position: absolute;
  top: 115%;
  left: 0;
  width: 100%;
  background: #1c1c1c;
  border-radius: 10px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 200;
  
}

.sugerencias li {
  padding: 10px 14px;
  display: flex;
  gap: 12px;
  cursor: pointer;
  border: 1px solid #a4133c;
}

.thumb {
  width: 38px;
  height: 38px;
  border-radius: 6px;
  object-fit: cover;
}

.info {
  display: flex;
  flex-direction: column;
}

.nombre {
  font-size: 14px;
  color: #f5f5f5;
}

.tipo {
  font-size: 12px;
  color: #c9184a;
  background: linear-gradient(90deg, #ff8fab, #f72585, #c9184a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 3px;
}

.tipo::first-letter {
  text-transform: uppercase;
}

.carrito-btn {
  position: relative;
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
  min-width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.desktop {
  display: block;
}

@media (max-width: 900px) {
  .menu-toggle {
    display: flex;
  }

  .desktop {
    display: none;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: calc(100vh - 70px); /* ocupa casi toda la pantalla */
    background: rgba(20,20,20,0.97);
    backdrop-filter: blur(12px);
    flex-direction: column;
    justify-content: center; /* centra verticalmente */
    align-items: center;     /* centra horizontalmente */
    gap: 30px;               /* un poco más de espacio entre items */
    padding: 0;              /* eliminamos padding extra */
    border-bottom: none;
    opacity: 0;
    transform: translateY(-10px);
    pointer-events: none;
    transition: all 0.3s ease;
  }

  .nav-links.mobileOpen {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  .nav-links a {
    font-size: 20px; /* links más grandes para mobile */
    font-weight: 500;
  }

  .mobile-carrito {
    margin-top: 20px;
    font-size: 24px;
  }
}

</style>
