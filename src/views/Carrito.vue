<template>
  <div class="carrito">
    <h2 class="title">Carrito</h2>

    <div v-if="items.length === 0" class="empty">
      Tu carrito está vacío
    </div>

    <div v-else class="content">
      <div class="items">
        <div v-for="item in items" :key="item.id" class="item-card">
          <img :src="item.imagen" class="item-img" />

          <div class="item-main">
            <div class="item-top">
              <h3 class="item-name">{{ item.nombre }}</h3>
              <button class="remove" @click="carrito.eliminarProducto(item.id)">✕</button>
            </div>

            <p class="item-brand" v-if="item.marca">{{ item.marca }}</p>

            <div class="item-row">
              <div class="price">
                <span class="label">Precio</span>
                <span class="value">
                  {{ formatCurrency(obtenerPrecioReal(item)) }}
                </span>
              </div>

              <div class="qty-controls">
                <button class="btn-decr" @click="carrito.restarProducto(item.id)">−</button>
                <input
                  class="qty-input"
                  type="number"
                  min="0"
                  :value="item.cantidad"
                  @input="onQtyInput($event, item.id)"
                />
                <button class="btn-incr" @click="carrito.agregarProducto(item)">+</button>
              </div>

              <div class="subtotal">
                <span class="label">Subtotal</span>
                <span class="value">
                  {{ formatCurrency(obtenerPrecioReal(item) * item.cantidad) }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <aside class="summary">
        <div class="summary-card">
          <h3>Resumen de compra</h3>

          <div class="summary-row">
            <span>Productos a comprar:</span>
            <span>{{ totalCantidad }}</span>
          </div>

          <div class="summary-row total">
            <span>Total:</span>
            <span class="total-value">
              {{ formatCurrency(totalPrecio) }}
            </span>
          </div>

          <button class="checkout" :disabled="totalPrecio === 0">
            Realizar el Encargo
          </button>

          <button class="clear" v-if="items.length" @click="clearAll">
            Vaciar carrito
          </button>
        </div>
      </aside>
    </div>
  </div>
</template>



<script setup>
import { computed } from 'vue'
import { useCarritoStore } from '@/stores/carrito'

const carrito = useCarritoStore()

const items = computed(() => carrito.items)

const totalCantidad = computed(() => carrito.totalCantidad)

const totalPrecio = computed(() => carrito.totalPrecio)

/**
 * Convierte precios tipo:
 * 17.999 -> 17999
 * "17.999" -> 17999
 */
function normalizarPrecio(valor) {
  if (valor === null || valor === undefined) return 0

  if (typeof valor === 'string') {
    return Number(valor.replace(/\./g, '').replace(',', '.'))
  }

  if (typeof valor === 'number' && valor < 1000) {
    return Math.round(valor * 1000)
  }

  return valor
}


/**
 * Usa precioOferta si es válido (> 0)
 * Caso contrario usa precio base
 */
function obtenerPrecioReal(item) {
  const oferta = Number(item.precioOferta)

  const precioFinal = oferta > 0
    ? oferta
    : Number(item.precio)

  return normalizarPrecio(precioFinal)
}


function formatCurrency(value) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0
  }).format(value)
}

function onQtyInput(event, id) {
  const val = Number(event.target.value)
  if (!Number.isNaN(val)) {
    carrito.setCantidad(id, val)
  }
}

function clearAll() {
  carrito.items.forEach(item => carrito.eliminarProducto(item.id))
}
</script>



<style scoped>
/* Container */
/* CONTENEDOR */
.carrito {
  max-width: 1100px;
  margin: 50px auto;
  padding: 24px;
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: #1f2937;
  background: #fff;
}

/* TÍTULO */
.title {
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 28px;
  letter-spacing: 0.3px;
}

/* CARRITO VACÍO */
.empty {
  padding: 50px;
  text-align: center;
  border-radius: 18px;
  background: #fafafa;
  color: #9ca3af;
  font-size: 15px;
}

/* LAYOUT */
.content {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 28px;
  align-items: start;
}

/* LISTA */
.items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* TARJETA DE PRODUCTO */
.item-card {
  display: flex;
  gap: 20px;
  padding: 18px;
  border-radius: 18px;
  background: #ffffff;
  border: 1px solid #f0f0f0;
  transition: all 0.25s ease;
}

.item-card:hover {
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}

/* IMAGEN */
.item-img {
  width: 110px;
  height: 110px;
  object-fit: contain;
  border-radius: 14px;
  background: #f9fafb;
  border: 1px solid #f1f5f9;
}

/* INFO */
.item-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* NOMBRE + ELIMINAR */
.item-top {
  display: flex;
  justify-content: space-between;
  align-items: start;
}

.item-name {
  font-size: 16px;
  font-weight: 500;
  max-width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* BOTÓN ELIMINAR */
.remove {
  border: none;
  background: transparent;
  font-size: 18px;
  color: #d1d5db;
  cursor: pointer;
  transition: color 0.2s;
}

.remove:hover {
  color: #ef4444;
}

/* MARCA */
.item-brand {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.7px;
  color: #9ca3af;
}

/* FILA INFERIOR */
.item-row {
  display: flex;
  align-items: center;
  gap: 22px;
  margin-top: 8px;
}

/* PRECIO / SUBTOTAL */
.price,
.subtotal {
  font-size: 14px;
}

.label {
  display: block;
  font-size: 11px;
  color: #9ca3af;
}

.value {
  font-weight: 600;
  color: #111827;
}

.subtotal {
  margin-left: auto;
  text-align: right;
}

.subtotal .value {
  font-size: 16px;
  color: #b91c1c;
}

/* CANTIDAD */
.qty-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.qty-input {
  width: 56px;
  height: 36px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  text-align: center;
  font-weight: 500;
  background: #fafafa;
}

/* BOTONES + - */
.btn-decr,
.btn-incr {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #e5e7eb;
  background: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-decr:hover,
.btn-incr:hover {
  background: #f3f4f6;
}

/* RESUMEN */
.summary {
  position: sticky;
  top: 30px;
}

.summary-card {
  background: #ffffff;
  border-radius: 22px;
  padding: 26px;
  border: 1px solid #f0f0f0;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.06);
}

/* RESUMEN TEXTO */
.summary-card h3 {
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 18px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 10px;
  color: #374151;
}

.summary-row.total {
  font-size: 20px;
  font-weight: 600;
  margin-top: 12px;
}

/* BOTÓN PAGAR */
.checkout {
  width: 100%;
  margin-top: 20px;
  padding: 14px;
  border-radius: 16px;
  border: none;
  background: #111827;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s;
}

.checkout:hover {
  opacity: 0.9;
}

.checkout:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* VACIAR */
.clear {
  margin-top: 14px;
  width: 100%;
  padding: 12px;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  background: transparent;
  font-size: 13px;
  color: #6b7280;
  cursor: pointer;
}

.clear:hover {
  background: #f9fafb;
}

/* MOBILE */
@media (max-width: 880px) {
  .content {
    grid-template-columns: 1fr;
  }

  .item-row {
    flex-wrap: wrap;
    gap: 12px;
  }

  .subtotal {
    margin-left: 0;
    text-align: left;
  }
}

</style>
