<template>
    <nav class="navbar">
  <img src="" alt="logo" class="logo" @click="toHome">

  <ul class="nav-links">
    <li><RouterLink to="/">Inicio</RouterLink></li>
    <li><RouterLink to="/catalogo">Catalogo</RouterLink></li>
     <div class="carrito-btn" @click="$emit('abrir-carrito')">
      🛒 <span v-if="totalItems">{{ totalItems }}</span>
    </div>
  </ul>
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



  </style>
  

<script >
 import { useCarritoStore } from '@/stores/carrito'


export default {
  methods: {
    toHome() {
            this.$router.push('/')
        }
  },
  setup() {
    const carrito = useCarritoStore()
    return { totalItems: carrito.totalItems }
  }
}


</script>