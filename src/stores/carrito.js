import { defineStore } from 'pinia'

export const useCarritoStore = defineStore('carrito', {
  state: () => ({
    items: []
  }),

  getters: {
    totalPrecio(state) {
      return state.items.reduce(
        (total, item) => total + item.precio * item.cantidad,
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
      if (!producto || !producto.id) return

      const existente = this.items.find(
        item => item.id === producto.id
      )

      if (existente) {
        existente.cantidad++
      } else {
        this.items.push({
          id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
          imagen: producto.imagen,
          cantidad: 1
        })
      }
    },

    restarProducto(id) {
      const item = this.items.find(i => i.id === id)
      if (!item) return

      if (item.cantidad > 1) {
        item.cantidad--
      } else {
        this.eliminarProducto(id)
      }
    },

    eliminarProducto(id) {
      this.items = this.items.filter(
        item => item.id !== id
      )
    }
  }
})


