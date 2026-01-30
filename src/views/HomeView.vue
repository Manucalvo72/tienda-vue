<template>
  <!-- BANNER -->
  <section class="hero">
    <div class="hero-content">
      <span class="hero-eyebrow">Nueva colección</span>
      <h1 class="hero-title">27:9 Bagués - Unlock </h1>

      <span class="hero-badge">
        Fragancias, maquillaje y cuidado para vos
      </span>
      <button class="hero-cta" @click="$router.push({ name: 'catalogo' })" >Explorar el catalogo</button>
    </div>
  </section>

  <!-- PRODUCTOS DESTACADOS -->
   <section class="productos-home">
    <h2 class="titulo">Productos destacados</h2>

    <!-- Flechas -->
    <button class="flecha izquierda" @click="anterior">‹</button>
    <button class="flecha derecha" @click="siguiente">›</button>

    <!-- Grid de productos -->
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
        <!-- Imagen clickeable -->
        <div class="img-wrapper"
     @click="$router.push({ name: 'producto', params: { tipo: p.tipo, slug: p.slug } })"
     style="cursor: pointer;">
  <img :src="p.imagen" class="img-producto" />
</div>

        <!-- Info del producto -->
        <div class="producto-info">
          <h3>{{ p.nombre }}</h3>
          <p class="sub-medida">{{ p.medida }}</p>
          <p class="sub-type">{{ p.type }}</p>

          <!-- Precios -->
          <template v-if="p.precioOferta && p.precioOferta > 0">
            <p class="precio-oferta">$ {{ p.precioOferta.toLocaleString('es-AR') }}</p>
            <p class="precio-tachado">$ {{ p.precio.toLocaleString('es-AR') }}</p>
          </template>
          <template v-else>
            <p class="precio-oferta">$ {{ p.precio.toLocaleString('es-AR') }}</p>
          </template>

          <p class="precio-impuesto">
            Precio sin impuestos: $ {{ p.precioImpuesto.toLocaleString('es-AR') }}
          </p>

          <!-- Botón clickeable -->
          <button class="btn-ver-producto"
        @click="$router.push({ name: 'producto', params: { tipo: p.tipo, slug: p.slug } })">
  Ver producto
</button>
        </div>
      </div>
    </TransitionGroup>

    <!-- Ver más productos -->
    <button class="ver-mas" @click="$router.push({ name: 'catalogo' })">
  Ver más productos
</button>
  </section>
</template>

<script>
import { perfumes } from "@/data/perfumes"

export default {
  name: "HomeView",
  data() {
    return {
      pagina: 0,
      porPagina: 3,
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

.hero-title {
  font-size: 88px;
  font-weight: 800;
  color: #ffffff;
  line-height: 1;
  text-shadow: 0 10px 30px rgba(0,0,0,0.35);
}

.hero-badge {
  width: fit-content;
  padding: 10px 26px;
  border-radius: 20px 6px 20px 6px;
  font-size: 12px;
  letter-spacing: 1.2px;
  color: #fff;
  text-transform: uppercase;

  background: linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.05));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.35);

  box-shadow:
    0 8px 20px rgba(0,0,0,0.35),
    inset 0 0 12px rgba(255,255,255,0.15);

  position: relative;
  overflow: hidden;
}

/* Efecto shine sutil */
.hero-badge::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255,255,255,0.35),
    transparent
  );
  transform: translateX(-100%);
  animation: shine-badge 3s infinite;
}

@keyframes shine-badge {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
  100% { transform: translateX(100%); }
}



.hero-cta {
  position: relative;
  padding: 15px 48px;
  border-radius: 15px;
  border: none;
  cursor: pointer;

  background: linear-gradient(135deg, #a4133c, #ff4d6d);
  color: #fff;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 600;

  box-shadow:
    0 10px 25px rgba(255,77,109,0.45),
    inset 0 -2px 8px rgba(0,0,0,0.25);

  overflow: hidden;
  transition: all 0.35s ease;
}

.hero-cta::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255,255,255,0.45),
    transparent
  );
  transform: translateX(-120%);
  transition: 0.6s;
}

.hero-cta:hover::after {
  transform: translateX(120%);
}

.hero-cta:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow:
    0 16px 40px rgba(255,77,109,0.65),
    inset 0 -2px 10px rgba(0,0,0,0.3);
}

.hero-cta:active {
  transform: scale(0.96);
}


.hero-eyebrow {
  font-size: 13px;
  letter-spacing: 3px;
  text-transform: uppercase;
  background: linear-gradient(90deg, #ff8fab, #f72585, #c9184a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
}

.titulo::after {
  content: "";
  display: block;
  width: 60px;
  height: 2px;
  margin: 14px auto 0;
  background: #a4133c;
}

/* ===== GRID ===== */
.productos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 42px;
  margin: 56px 0;
}

/* ===== CARD MEJORADA ===== */
.producto-card {
  background: linear-gradient(to bottom, #181818, #0e0e0e);
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.4s ease;
  border: 1px solid rgba(255,255,255,0.06);
}

.producto-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 30px 60px rgba(0,0,0,0.55);
}

/* Imagen */
.img-wrapper {
  background: #0c0c0c;
  padding: 26px;
}

.img-producto {
  width: 100%;
  height: 220px;
  object-fit: contain;
  transition: transform 0.6s ease;
}

.producto-card:hover .img-producto {
  transform: scale(1.08);
}

/* Info */
/* ===== INFO DEL PRODUCTO BONITA ===== */
.producto-info {
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  background: transparent; /* no tocamos la forma */
}

/* Nombre del producto */
.producto-info h3 {
  font-size: 18px;
  font-weight: 600;
  color: #f5f5f5;
  margin-bottom: 6px;
}

/* Medida y tipo */
.sub-medida,
.sub-type {
  font-size: 12px;
  color: #ccc;
  text-transform: uppercase;
  letter-spacing: 0.8px;
}

/* Precios */
.precio-oferta {
  font-size: 16px;
  font-weight: 700;
  color: #ff4d6d;
}

.precio-tachado {
  font-size: 14px;
  color: #aaa;
  text-decoration: line-through;
}

.precio-impuesto {
  font-size: 12px;
  color: #888;
  font-style: italic;
}

/* Botón centrado y elegante */
.btn-ver-producto {
  margin-top: 12px;
  align-self: center;
  background: linear-gradient(135deg, #ff4d6d, #a4133c);
  color: #fff;
  border: none;
  padding: 10px 24px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-ver-producto:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 18px rgba(255, 77, 109, 0.5);
}

/* Ajuste de subtítulos para más claridad */
.sub-medida {
  color: #ff6f91;
}

.sub-type {
  color: #a0a0a0;
}

/* Separadores sutiles entre secciones */
.precio-oferta,
.precio-tachado,
.precio-impuesto {
  margin-top: 2px;
}


/* ===== FLECHAS ===== */
.flecha {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: rgba(0,0,0,0.55);
  border: 1px solid rgba(255,255,255,0.2);
  color: #ffffff;
  cursor: pointer;
}

.flecha:hover {
  background: #a4133c;
}

.flecha.izquierda { left: 10px; }
.flecha.derecha { right: 10px; }

/* ===== VER MÁS ===== */
.ver-mas {
  background: none;
  border: 1px solid #a4133c;
  transition: 0.3s;
  background: #a4133c;
  color: #fff;
  padding: 12px 32px;
  cursor: pointer;
}

.ver-mas:hover {
  color: #a4133c;
  background: transparent;
}

/* ===== TRANSICIÓN ===== */
.slide-left-enter-from { transform: translateX(80px); opacity: 0; }
.slide-left-leave-to { transform: translateX(-80px); opacity: 0; }
.slide-right-enter-from { transform: translateX(-80px); opacity: 0; }
.slide-right-leave-to { transform: translateX(80px); opacity: 0; }

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.45s ease;
}


/* ===== RESPONSIVE ===== */

/* Tablets */
@media (max-width: 1024px) {
  .hero {
    height: 360px;
    padding: 0 30px;
  }

  .hero-title {
    font-size: 64px;
  }

  .productos-home {
    padding: 60px 30px;
  }

  .productos-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
  }
}

/* Celulares */
@media (max-width: 640px) {
  .hero {
    height: 320px;
    padding: 0 20px;
    justify-content: center;
    text-align: center;
  }

  .hero-content {
    margin-left: 0;
    align-items: center;
  }

  .hero-title {
    font-size: 44px;
    line-height: 1.1;
  }

  .hero-badge {
    font-size: 12px;
    padding: 5px 14px;
  }

  .hero-cta {
    padding: 12px 28px;
    font-size: 13px;
  }

  .productos-home {
    padding: 50px 20px;
  }

  .productos-grid {
    grid-template-columns: 1fr;
    gap: 26px;
  }

  .producto-info {
    text-align: center;
    align-items: center;
  }

  .btn-ver-producto {
    align-self: center;
  }

   .flecha {
    display: none;
  }

  .flecha.izquierda { left: 4px; }
  .flecha.derecha { right: 4px; }

  .ver-mas {
    width: 100%;
    max-width: 280px;
  }
}
@media (max-width: 640px) {
  .hero-content {
    margin-left: 0;
    align-items: center;
    opacity: 1; /* FORZAR visibilidad */
    transform: translateY(0); /* resetear transformación */
    animation: none; /* opcional: desactivar animación si molesta */
  }
}



</style>
