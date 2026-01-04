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

    // Ahora restarProducto deja la cantidad en 0 en vez de eliminar el objeto.
    restarProducto(id) {
      const item = this.items.find(i => i.id === id)
      if (!item) return

      if (item.cantidad > 0) {
        item.cantidad--
      }
      // NO eliminamos el objeto cuando llega a 0 (el usuario podrá ver
      // el producto con cantidad 0 y eliminarlo explícitamente si quiere)
    },

    eliminarProducto(id) {
      this.items = this.items.filter(
        item => item.id !== id
      )
    },

    // Utilidad: permite fijar cantidad arbitraria (p. ej. para un input)
    setCantidad(id, cantidad) {
      const item = this.items.find(i => i.id === id)
      if (!item) return
      item.cantidad = Math.max(0, Math.floor(cantidad))
    }
  }
})