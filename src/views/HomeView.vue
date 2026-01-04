<template>
  <!-- BANNER -->
  <section class="hero">
    <div class="hero-content">
      <h1>Perfumes que dejan huella</h1>
      <p>Fragancias exclusivas para cada estilo</p>
    </div>
  </section>

  <!-- PRODUCTOS DESTACADOS -->
  <section class="productos-home">
    <h2 class="titulo">Productos destacados</h2>

    <!-- Flechas -->
    <button class="flecha izquierda" @click="anterior">‹</button>
    <button class="flecha derecha" @click="siguiente">›</button>

    <!-- Grid -->
    <TransitionGroup
  :name="direccion === 'next' ? 'slide-left' : 'slide-right'"
  tag="div"
  class="productos-grid"
>
  <div
    class="producto-card"
    v-for="p in productosVisibles"
    :key="p.id"
  >
    <img :src="p.imagen" class="img-producto" />
    <div class="producto-info">
      <h3>{{ p.nombre }}</h3>
      <p>${{ p.precio }}</p>
    </div>
  </div>
</TransitionGroup>

    <button class="ver-mas">Ver más productos</button>
  </section>
</template>

<script>
import { perfumes} from "@/data/perfumes"

export default {
  name: "HomeView",
  data() {
    return {
      pagina: 0,
      porPagina: 6,
      direccion: "next"
    }
  },
  computed: {
    productosVisibles() {
      const inicio = this.pagina * this.porPagina
      return perfumes.slice(inicio, inicio + this.porPagina)
    }
  },
  methods: {
  siguiente() {
  if ((this.pagina + 1) * this.porPagina < perfumes.length) {
    this.direccion = "next"
    this.pagina++
  }
},
anterior() {
  if (this.pagina > 0) {
    this.direccion = "prev"
    this.pagina--
  }
}
  }
}
</script>

<style scoped>
/* ===== BANNER ===== */
.hero {
  background: linear-gradient(
      rgba(0, 0, 0, 0.65),
      rgba(0, 0, 0, 0.65)
    ),
    url("") center / cover no-repeat;
  height: 380px;
  display: flex;
  align-items: center;
  padding: 0 60px;
}

.hero-content h1 {
  color: #f5f5f5;
  font-size: 42px;
  font-weight: 500;
  margin-bottom: 12px;
}

.hero-content p {
  color: #9a9a9a;
  font-size: 16px;
  max-width: 420px;
}

/* ===== PRODUCTOS ===== */
.productos-home {
  position: relative;
  background-color: #1a1a1a;
  padding: 70px 60px;
  text-align: center;
}

.titulo {
  color: #f5f5f5;
  font-size: 26px;
  font-weight: 500;
}

/* ===== GRID ===== */
.productos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin: 40px 0;
    position: relative;
}

/* Mobile */
@media (max-width: 768px) {
  .productos-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* ===== CARD ===== */
.producto-card {
  background-color: #111;
  border: 1px solid rgba(255,255,255,0.06);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 380px;     
      /* 👈 más alta */
  transition: transform 0.3s ease;
}

.producto-card:hover {
  transform: translateY(-6px);
}

/* Imagen */
.img-producto {
  width: 100%;
  height: 260px;            /* 👈 imagen dominante */
  object-fit: cover;
  
}

/* Info */
.producto-info {
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.producto-info h3 {
  color: #f5f5f5;
  font-size: 15px;
  font-weight: 500;
}

.producto-info p {
  color: #a4133c;
  font-weight: 600;
}


/* ===== FLECHAS ===== */
.flecha {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: 1px solid #a4133c;
  color: #a4133c;
  width: 44px;
  height: 44px;
  font-size: 22px;
  cursor: pointer;
  transition: 0.3s;
}

.flecha:hover {
  background-color: #a4133c;
  color: #f5f5f5;
}

.flecha.izquierda {
  left: 15px;
}

.flecha.derecha {
  right: 15px;
}

/* ===== VER MÁS ===== */
.ver-mas {
  background: none;
  border: 1px solid #a4133c;
  color: #a4133c;
  padding: 12px 32px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;
}

.ver-mas:hover {
  background-color: #a4133c;
  color: #f5f5f5;
}


/* ===== TRANSICIÓN CARRUSEL ===== */
.slide-left-enter-from {
  transform: translateX(80px);
  opacity: 0;
}
.slide-left-leave-to {
  transform: translateX(-80px);
  opacity: 0;
}

.slide-right-enter-from {
  transform: translateX(-80px);
  opacity: 0;
}
.slide-right-leave-to {
  transform: translateX(80px);
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.45s ease;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.45s ease;
}

/* ENTRADA */
.slide-enter-from {
  opacity: 0;
  transform: translateX(80px);
}

/* SALIDA */
.slide-leave-to {
  opacity: 0;
  transform: translateX(-80px);
}

/* CLAVE DEL FIX */
.slide-leave-active {
  position: absolute;
  width: 100%;
}

</style>
