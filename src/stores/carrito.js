import { defineStore } from 'pinia'

export const useCarritoStore = defineStore('carrito', {
  state: () => ({
    items: []
  }),

  getters: {
    totalItems(state) {
      return state.items.reduce((acc, item) => acc + item.cantidad, 0)
    },
    totalPrecio(state) {
      return state.items.reduce(
        (acc, item) => acc + item.precio * item.cantidad,
        0
      )
    }
  },

  actions: {
    agregarProducto(producto) {
      const existente = this.items.find(p => p.id === producto.id)

      if (existente) {
        existente.cantidad++
      } else {
        this.items.push({ ...producto, cantidad: 1 })
      }
    },

    restarProducto(id) {
      const item = this.items.find(p => p.id === id)
      if (!item) return

      if (item.cantidad > 1) {
        item.cantidad--
      } else {
        this.eliminarProducto(id)
      }
    },

    eliminarProducto(id) {
      this.items = this.items.filter(p => p.id !== id)
    },

    vaciarCarrito() {
      this.items = []
    }
  }
})
