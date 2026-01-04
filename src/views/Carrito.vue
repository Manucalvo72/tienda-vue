<template>
  <div class="carrito">
    <h2 class="title">Tu carrito</h2>

    <div v-if="items.length === 0" class="empty">
      Tu carrito está vacío
    </div>

    <div v-else class="content">
      <div class="items">
        <div v-for="item in items" :key="item.id" class="item-card">
          <img v-if="item.imagen" :src="item.imagen" alt="" class="item-img" />

          <div class="item-main">
            <div class="item-top">
              <h3 class="item-name" :title="item.nombre">{{ item.nombre }}</h3>
              <button class="remove" @click="carrito.eliminarProducto(item.id)" aria-label="Eliminar producto">✕</button>
            </div>

            <p class="item-brand" v-if="item.marca">{{ item.marca }}</p>

            <div class="item-row">
              <div class="price">
                <span class="label">Precio</span>
                <span class="value">{{ formatCurrency(item.precio) }}</span>
              </div>

              <div class="qty-controls" role="group" aria-label="Controles de cantidad">
                <button class="btn-decr" @click="carrito.restarProducto(item.id)">−</button>
                <input class="qty-input" type="number" min="0" :value="item.cantidad" @input="onQtyInput($event, item.id)" />
                <button class="btn-incr" @click="carrito.agregarProducto(item)">+</button>
              </div>

              <div class="subtotal">
                <span class="label">Subtotal</span>
                <span class="value">{{ formatCurrency(item.precio * item.cantidad) }}</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <aside class="summary">
        <div class="summary-card">
          <h3>Resumen de compra</h3>
          <div class="summary-row">
            <span>Items:</span>
            <span>{{ totalCantidad }}</span>
          </div>
          <div class="summary-row total">
            <span>Total:</span>
            <span class="total-value">{{ formatCurrency(totalPrecio) }}</span>
          </div>

          <button class="checkout" :disabled="totalPrecio === 0">Proceder al pago</button>

          <button class="clear" v-if="items.length" @click="clearAll">Vaciar carrito</button>
        </div>
      </aside>
    </div>

    <!-- Debug opcional: quitar en producción -->
    <pre class="debug" v-if="showDebug">{{ JSON.stringify(items, null, 2) }}</pre>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useCarritoStore } from '@/stores/carrito'

const carrito = useCarritoStore()
const items = computed(() => carrito.items)
const totalPrecio = computed(() => carrito.totalPrecio)
const totalCantidad = computed(() => carrito.totalCantidad)

const showDebug = ref(false)

function formatCurrency(value) {
  try {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      maximumFractionDigits: 0
    }).format(value)
  } catch {
    return `$ ${value}`
  }
}

function onQtyInput(event, id) {
  const val = Number(event.target.value)
  if (Number.isNaN(val)) return
  carrito.setCantidad(id, val)
}

function clearAll() {
  const ids = carrito.items.map(i => i.id)
  ids.forEach(id => carrito.eliminarProducto(id))
}
</script>

<style scoped>
/* Container */
.carrito {
  max-width: 1100px;
  margin: 40px auto;
  padding: 22px;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  color: #071035;
}

/* Title */
.title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 18px;
  color: #071035;
}

/* Empty state */
.empty {
  padding: 36px;
  text-align: center;
  border: 1px dashed #e6e9ef;
  border-radius: 12px;
  color: #6b7280;
  background: linear-gradient(180deg,#fbfdff,#f7fbff);
}

/* Layout */
.content {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 22px;
  align-items: start;
}

/* Items list */
.items {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

/* Item card: single-line layout with distinct shadow and colors */
.item-card {
  display: flex;
  align-items: center;
  gap: 18px;
  background: linear-gradient(180deg,#ffffff,#fbfdff);
  border-radius: 12px;
  padding: 14px;
  border: 1px solid rgba(11,18,32,0.06);
  box-shadow: 0 8px 30px rgba(11,18,32,0.06);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  overflow: hidden;
}
.item-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 40px rgba(11,18,32,0.10);
}

/* Image */
.item-img {
  width: 96px;
  height: 96px;
  object-fit: contain;
  border-radius: 10px;
  background: #f8fafc;
  border: 1px solid #eef2f7;
  flex-shrink: 0;
}

/* Main content (left-to-right inline) */
.item-main {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-width: 0; /* allow truncation */
}

/* Top row: title + remove */
.item-top {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 12px;
}
.item-name {
  font-size: 16px;
  margin: 0;
  color: #071035;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.remove {
  background: transparent;
  border: none;
  color: #9ca3af;
  font-size: 16px;
  cursor: pointer;
  padding: 6px;
  border-radius: 8px;
}
.remove:hover { color: #ef4444 }

/* Brand */
.item-brand {
  font-size: 13px;
  color: #6b7280;
  margin: 0;
}

/* Inline row with price, qty and subtotal */
.item-row {
  display: flex;
  gap: 18px;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
}

/* Price / labels */
.price .label,
.subtotal .label {
  display: block;
  font-size: 11px;
  color: #94a3b8;
}
.price .value,
.subtotal .value {
  font-weight: 800;
  color: #0b1220;
  display: block;
}

/* Quantity controls inline */
.qty-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 160px;
  justify-content: center;
}
.qty-input {
  width: 64px;
  padding: 6px 8px;
  border: 1px solid #e6eef7;
  border-radius: 8px;
  text-align: center;
  font-weight: 700;
  color: #0b1220;
  background: #fff;
}

/* Buttons */
.btn-decr,
.btn-incr {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid #e6eef7;
  background: linear-gradient(180deg,#fff,#f8fafc);
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #0b1220;
  transition: transform .12s ease, box-shadow .12s ease;
}
.btn-decr:hover,
.btn-incr:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(11,18,32,0.06);
}

/* Subtotal */
.subtotal {
  margin-left: auto;
  text-align: right;
  min-width: 120px;
}

/* Zero note */
.zero-note {
  font-size: 13px;
  color: #ef4444;
  margin-top: 6px;
}

/* Summary aside */
.summary {
  position: sticky;
  top: 28px;
}
.summary-card {
  background: linear-gradient(180deg,#ffffff,#fbfdff);
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 10px 30px rgba(11,18,32,0.06);
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: stretch;
  border: 1px solid rgba(11,18,32,0.04);
}
.summary-card h3 {
  margin: 0;
  font-size: 16px;
  color: #071035;
}
.summary-row {
  display: flex;
  justify-content: space-between;
  color: #475569;
  font-weight: 700;
}
.summary-row.total {
  font-size: 18px;
  color: #071035;
}
.total-value {
  color: #0b1220;
  font-weight: 900;
}

/* CTA */
.checkout {
  margin-top: 6px;
  background: linear-gradient(90deg,#a4133c,#c9184a);
  border: none;
  color: #fff;
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 800;
  transition: opacity .12s;
}
.checkout[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}
.clear {
  margin-top: 6px;
  background: transparent;
  border: 1px solid #e6eef7;
  color: #475569;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
}

/* Debug */
.debug {
  margin-top: 18px;
  background: #f8fafc;
  padding: 12px;
  border-radius: 8px;
  font-size: 12px;
  color: #0b1220;
  max-height: 160px;
  overflow: auto;
}

/* Responsive: keep things readable on mobile */
@media (max-width: 880px) {
  .content {
    grid-template-columns: 1fr;
  }
  .item-row {
    flex-wrap: wrap;
    gap: 10px;
  }
  .subtotal {
    margin-left: 0;
    text-align: left;
  }
  .qty-controls {
    min-width: auto;
  }
}
</style>
