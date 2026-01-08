<template>
  <div v-if="productoActual" class="producto-view">

    <button class="volver" @click="$router.back()">
      <i class="fa-solid fa-arrow-left"></i>
      Volver
    </button>

    <div class="producto-card">
      <div class="imagen">
        <img :src="productoActual.imagen" />
      </div>

      <div class="info">
        <h1>{{ productoActual.nombre }}</h1>
        <p class="marca">{{ productoActual.marca }}</p>

        <p class="precio">$ {{ productoActual.precio }}</p>

        <p class="precio-sin-imp">
          Precio sin impuestos: $ {{ precioSinImpuestos }}
        </p>

        <p class="descripcion">
          {{ productoActual.descripcion }}
        </p>

        <button class="agregar" @click="agregarAlCarrito">
           <i class="fa-solid fa-bag-shopping"></i> Agregar al carrito
        </button>
      </div>
    </div>

  </div>
</template>


<script>
import { perfumes } from '@/data/perfumes'
import { maquillajes } from "../data/maquillajes"
import { skincare } from "@/data/skincare"
import { esencias } from "@/data/esencias"
import { unlock } from "@/data/unlock"
import { useCarritoStore } from '@/stores/carrito'

const todos = [...perfumes, ...maquillajes, ...skincare, ...esencias, ...unlock]

export default {
  name: 'ProductoView',

  computed: {
   productoActual() {
  const { tipo, slug } = this.$route.params

  return todos.find(p =>
    p.slug === slug && (
      p.tipo === tipo || !p.tipo
    )
  )
},

    precioSinImpuestos() {
      if (!this.productoActual) return 0
      return Math.round(this.productoActual.precio / 1.21)
    }
  },

  methods: {
    agregarAlCarrito() {
      const carrito = useCarritoStore()
      if (!this.productoActual) {
        console.warn('[ProductoView] Producto actual no definido')
        return
      }
      carrito.agregarProducto(this.productoActual)
    }
  }
}


</script>

<style scoped>
/* (estilos sin cambios) */
.producto-view {
  min-height: 100vh;
  background: radial-gradient(circle at top, #1b1b1b, #0b0b0b);
  display: flex;
  justify-content: center; /* Centrado horizontal */
  align-items: flex-start; /* Centrado vertical */
  padding: 48px 20px;
  position: relative;
  
  
}

.producto-card {
  display: flex;
  gap: 48px;
  max-width: 1000px;
  width: 100%;
  background: #121212;
  border-radius: 18px;
  padding: 48px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
  margin-top: 5vh; /* Ajusta según lo necesites */
  align-items: center;
  justify-content: space-between; /* Esto asegura que la imagen y la info estén separados pero alineados */
  flex-wrap: wrap; /* Para que se acomode en pantallas pequeñas */
}

/* IMAGEN */
.imagen {
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 300px; /* Hace que la imagen ocupe un tamaño adecuado */
}

.imagen img {
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform .4s ease;
}

.imagen:hover img {
  transform: scale(1.04);
}

/* Aplicamos la animación al contenedor */
.producto-view {
  min-height: 100vh;
  background: radial-gradient(circle at top, #1b1b1b, #0b0b0b);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 48px 20px;
  position: relative;

  animation: slideUp 0.8s ease-out; /* Aplicamos la animación de deslizamiento */
  animation-delay: 0.3s; /* Retraso para una transición más suave */
}


/* INFO */
.info {
  color: #fff;
  flex: 1 1 400px; /* Hace que la info ocupe el espacio necesario sin sobresaturar */
}

.info h1 {
  font-size: 30px;
  margin-bottom: 6px;
}

.marca {
  color: #999;
  font-size: 14px;
  margin-bottom: 24px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.precio {
  font-size: 32px;
  font-weight: 600;
  color: #e11d48;
  margin-bottom: 4px;
}

.precio-sin-imp {
  font-size: 13px;
  color: #777;
  margin-bottom: 26px;
}

.descripcion {
  color: #ccc;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 32px;
}

/* BOTÓN */
/* BOTÓN */
/* Asegurándote de usar la fuente Poppins */
/* BOTÓN */
.agregar {
  padding: 12px 24px; /* Tamaño más pequeño */
  font-size: 15px;
  font-weight: 600; /* Texto más grueso para más impacto */
  letter-spacing: 1px;
  text-transform: uppercase; /* Todo en mayúsculas para mayor énfasis */
  font-family: 'Poppins', sans-serif; /* Usamos la nueva fuente */
  border-radius: 30px; /* Bordes redondeados */
  border: 2px solid transparent;
  background: #8B2A3F; /* Color de fondo */
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(225, 29, 72, 0.25); /* Sombra suave */
  display: flex; /* Usamos flexbox para alinear el texto y el icono */
  justify-content: center;
  align-items: center;
  gap: 10px; /* Espacio entre el icono y el texto */
}

/* Icono */
.agregar i {
  font-size: 18px; /* Tamaño del icono */
}

/* Hover */
.agregar:hover {
  background: #e11d48; /* Cambio de color en hover */
  border-color: #e11d48; /* Sombra más pronunciada */
  transform: translateY(-3px); /* Efecto de elevación */
  box-shadow: 0 8px 20px rgba(225, 29, 72, 0.3); /* Sombra sutil */
}

/* Click */
.agregar:active {
  transform: translateY(0);
  box-shadow: 0 4px 10px rgba(225, 29, 72, 0.2); /* Menos sombra al hacer clic */
  background: #a41f3a; /* Color más oscuro */
  border-color: #a41f3a;
}

/* Focus (accesibilidad) */
.agregar:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(225, 29, 72, 0.5); /* Efecto al enfocar */
}



/* VOLVER */
.volver {
  position: absolute;
  top: 28px;
  left: 28px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.12);
  color: #ddd;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: all 0.25s ease;
}

.volver:hover {
  background: rgba(225,29,72,0.15);
  border-color: #e11d48;
  transform: translateX(-3px);
}

/* MOBILE */
@media (max-width: 768px) {
  .producto-card {
    grid-template-columns: 1fr;
    padding: 28px;
    gap: 32px;
  }

  .info h1 {
    font-size: 24px;
  }

  .precio {
    font-size: 26px;
  }
}

</style>