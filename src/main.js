import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()

// Plugin simple para persistir cada store en localStorage usando la clave: pinia_<storeId>
function piniaPersistPlugin({ store }) {
  const key = `pinia_${store.$id}`

  // Cargar si existe
  const fromStorage = localStorage.getItem(key)
  if (fromStorage) {
    try {
      store.$patch(JSON.parse(fromStorage))
    } catch (e) {
      console.warn(`[piniaPersist] fallo parseando ${key}`, e)
    }
  }

  // Suscribirse a cambios y guardar
  store.$subscribe((mutation, state) => {
    try {
      localStorage.setItem(key, JSON.stringify(state))
    } catch (e) {
      console.warn('[piniaPersist] fallo guardando en localStorage', e)
    }
  })
}

pinia.use(piniaPersistPlugin)

app.use(pinia)
app.use(router)

app.mount('#app')