

 import { slugify } from "../data/slugify"

const baseMaquillaje = [
  {
    nombre: "Labial Rojo Mate",
    marca: "Maybelline",
    precio: 12000,
    imagen: "/img/labial.jpg"
  }
]

export const maquillaje = baseMaquillaje.map((p, index) => ({
  ...p,
  tipo: "maquillaje",
  id: `maquillaje-${index + 1}`,
  slug: slugify(p.nombre)
}))
