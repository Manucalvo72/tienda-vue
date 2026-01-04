<template>
  <div class="carrito">
    <h2>Carrito</h2>

    <div v-if="carrito.items.length === 0">
      Carrito vacío
    </div>

    <div v-for="item in carrito.items" :key="item.id">
      <strong>{{ item.nombre }}</strong>
      <p>$ {{ item.precio }}</p>

      <button @click="carrito.restarProducto(item.id)">-</button>
      {{ item.cantidad }}
      <button @click="carrito.agregarProducto(item)">+</button>

      <button @click="carrito.eliminarProducto(item.id)">❌</button>
    </div>

    <hr>

    <h3>Total: $ {{ carrito.totalPrecio }}</h3>

    <button disabled>Comprar</button>
  </div>
</template>

<script>
import { useCarritoStore } from '@/stores/carrito'

export default {
  name: 'CarritoView',

  computed: {
    carrito() {
      return useCarritoStore()
    }
  }
}
</script>




<style scoped>
    .carrito {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

.carrito-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f9f9f9;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 8px;
}

.carrito-item button {
  padding: 6px 10px;
}
.producto {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
}

.producto img {
  width: 100%;
  max-height: 180px;
  object-fit: contain;
}

.producto button {
  background: black;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
}

</style>