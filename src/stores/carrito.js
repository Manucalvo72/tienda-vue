import { defineStore } from 'pinia'

function normalizarPrecio(valor) {
  if (typeof valor === 'string') {
    return Number(valor.replace(/\./g, '').replace(',', '.'))
  }
  return valor
}

function obtenerPrecioReal(item) {
  const base = item.precioOferta && item.precioOferta > 0
    ? item.precioOferta
    : item.precio

  return normalizarPrecio(base)
}

export const useCarritoStore = defineStore('carrito', {
  state: () => ({
    items: []
  }),

  getters: {
    totalPrecio(state) {
      return state.items.reduce(
        (total, item) => total + obtenerPrecioReal(item) * item.cantidad,
        0
      )
    },

    totalCantidad(state) {
      return state.items.reduce(
        (total, item) => total + item.cantidad,
        0
      )
    }
  },

  actions: {
    agregarProducto(producto) {
      const existente = this.items.find(i => i.id === producto.id)

      if (existente) {
        existente.cantidad++
      } else {
        this.items.push({
          id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
          precioOferta: producto.precioOferta,
          imagen: producto.imagen,
          marca: producto.marca,
          cantidad: 1
        })
      }
    },

    restarProducto(id) {
      const item = this.items.find(i => i.id === id)
      if (!item) return
      if (item.cantidad > 0) item.cantidad--
    },

    eliminarProducto(id) {
      this.items = this.items.filter(item => item.id !== id)
    },

    setCantidad(id, cantidad) {
      const item = this.items.find(i => i.id === id)
      if (!item) return
      item.cantidad = Math.max(0, Math.floor(cantidad))
    }
  }
})
