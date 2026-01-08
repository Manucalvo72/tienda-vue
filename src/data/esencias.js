import slugify from "slugify"

const baseEsencias = [
  {
    nombre: "Esencia Floral Suave",
    marca: "Aromanza",
    precio: 8500,
    imagen: "/img/esencias/floral-suave.png"
  },
  {
    nombre: "Esencia Vainilla Intensa",
    marca: "Essentia",
    precio: 9200,
    imagen: "/img/esencias/vainilla-intensa.png"
  },
  {
    nombre: "Esencia Cítrica Fresca",
    marca: "Aromanza",
    precio: 7800,
    imagen: "/img/esencias/citrica-fresca.png"
  },
  {
    nombre: "Esencia Amaderada Profunda",
    marca: "Natural Scents",
    precio: 9900,
    imagen: "/img/esencias/amaderada-profunda.png"
  }
]

export const esencias = baseEsencias.map((e, index) => ({
  ...e,
  tipo: "esencia",
  id: `esencia-${index + 1}`,
  slug: slugify(e.nombre, { lower: true })
}))
