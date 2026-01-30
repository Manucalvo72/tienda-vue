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

         <p v-if="productoActual.precioOferta && productoActual.precioOferta > 0" class="precio-oferta">
    $ {{ formatoPrecio(productoActual.precioOferta) }}
    <span class="precio-original">
      $ {{ formatoPrecio(productoActual.precio) }}
    </span>
  </p>

  <!-- Precio normal si no hay oferta -->
  <p v-else class="precio">
    $ {{ formatoPrecio(productoActual.precio) }}
  </p>

  <!-- Precio sin impuestos desde BD -->
  <p v-if="productoActual.precioImpuesto" class="precio-sin-imp">
    Precio sin impuestos: $ {{ formatoPrecio(productoActual.precioImpuesto) }}
  </p>
<div class="badges">

  <span v-if="productoActual.medida" class="badge">
    {{ productoActual.medida }}
  </span>

  <span v-if="productoActual.type" class="badge soft">
    {{ productoActual.type }}
  </span>

  <span v-if="productoActual.sexo" class="badge outline">
    {{ productoActual.sexo }}
  </span>

</div>


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
      formatoPrecio(valor) {
    return valor.toLocaleString('es-AR')
  },
    agregarAlCarrito() {
    const carrito = useCarritoStore()
    if (!this.productoActual) return
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

.precios {
  margin-bottom: 18px;
}

.precio-oferta {
  font-size: 34px;
  font-weight: 700;
  color: #e11d48;
}

.precio-original {
  position: relative;
  margin-left: 14px;
  font-size: 18px;
  color: rgba(255,255,255,0.5);
  font-weight: 400;
  padding: 0 6px;
}

/* Línea diagonal elegante */
.precio-original::after {
  content: "";
  position: absolute;
  left: -5%;
  top: 50%;
  width: 110%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #e11d48, transparent);
  transform: rotate(-10deg);
  opacity: 0.8;
}


.precio {
  font-size: 32px;
  font-weight: 600;
  color: #e11d48;
}

.precio-sin-imp {
  font-size: 13px;
  color: #777;
  margin-top: 6px;
}


.badges {
  display: flex;
  gap: 14px;
  margin: 18px 0 22px;
  align-items: center;
  flex-wrap: wrap;
}

.badge {
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #e5e5e5;
  padding-bottom: 4px;
  border-bottom: 2px solid rgba(255,255,255,0.2);
  font-weight: 500;
  position: relative;
}

/* Medida */
.badge:first-child {
  color: #fff;
  border-color: #e11d48;
}

/* Type */
.badge.soft {
  color: #fca5a5;
  border-color: rgba(225,29,72,0.6);
}

/* Sexo */
.badge.outline {
  color: #cfcfcf;
  border-color: rgba(255,255,255,0.35);
}

/* Micro animación */
.badge::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0%;
  height: 2px;
  background: #e11d48;
  transition: width .3s ease;
}

.badge:hover::after {
  width: 100%;
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