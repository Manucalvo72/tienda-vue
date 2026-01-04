<template>
  <div class="carrito">
    <h2>Carrito</h2>

    <div v-if="items.length === 0">
      Carrito vacío
    </div>

    <div v-for="item in items" :key="item.id">
      <strong>{{ item.nombre }}</strong>
      <p>$ {{ item.precio }}</p>

      <button @click="restar(item.id)">-</button>
      {{ item.cantidad }}
      <button @click="sumar(item)">+</button>

      <button @click="eliminar(item.id)">❌</button>
    </div>

    <hr>

    <h3>Total: $ {{ totalPrecio }}</h3>

    <button disabled>Comprar</button>
  </div>
</template>

<script>
import { useCarritoStore } from '@/stores/carrito'

export default {
  setup() {
    const carrito = useCarritoStore()

    return {
      items: carrito.items,
      totalPrecio: carrito.totalPrecio,
      sumar: carrito.agregarProducto,
      restar: carrito.restarProducto,
      eliminar: carrito.eliminarProducto
    }
  }
}
</script>
