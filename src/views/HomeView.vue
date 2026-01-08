<template>
  <!-- BANNER -->
  <section class="hero">
  <div class="hero-content">
    <span class="hero-eyebrow">Nueva colección</span>
    <h1 class="hero-title">27:9 Bagues</h1>

    <span class="hero-badge">
     Fragancias, maquillaje y cuidado para vos
    </span>
     <button class="hero-cta">Explorar productos</button>
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
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0.15)
    ),
    url("../assets/img/banner1.jpg") center / cover no-repeat;
  height: 420px;
  display: flex;
  align-items: center;
  padding: 0 60px;
    
}

.hero-content h1 {
  color: #f5f5f5;
 font-size: 48px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.hero-content p {
    color: rgba(255,255,255,0.85);
  font-size: 17px;
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
    .hero {
    height: 360px;
    padding: 0 24px;
  }

  .hero-title {
    font-size: 56px;
  }

  .hero-content {
    margin-left: 0;
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

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-left: 40px;
  max-width: 520px;
  animation: heroFade 0.9s ease forwards;
}

@keyframes heroFade {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* TÍTULO GRANDE */
.hero-title {
  font-family: 'Poppins', sans-serif;
  font-size: 88px;
  font-weight: 800;
  color: #ffffff;
  line-height: 1;
  letter-spacing: -1px;
   text-shadow: 0 10px 30px rgba(0,0,0,0.35);
}

/* CAJITA DE COLOR */
.hero-badge {
  width: fit-content;
  background-color: #a4133c;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding: 6px 18px;
  border-radius: 999px; /* pill */
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.hero-cta {
  margin-top: 12x;
  padding: 14px 38px;

  background: transparent;
  color: #ffffff;

  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;

  border: 1px solid rgba(255, 255, 255);
  border-radius: 2px; /* casi cuadrado */
  text-shadow: 0 2px 10px rgba(0,0,0,0.45);
  cursor: pointer;
  transition: all 0.3s ease;
}


.hero-cta:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: #ffffff;
}

.hero-eyebrow {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  width: fit-content;

  background: linear-gradient(
    90deg,
    #ff8fab,
    #f72585,
    #c9184a
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-shadow: 0 0 18px rgba(247, 37, 133, 0.35);
}
</style>
