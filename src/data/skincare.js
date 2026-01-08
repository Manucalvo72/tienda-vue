import slugify from "slugify"

const baseSkincare = [
  {
    nombre: "Gel Limpiador Facial Suave",
    marca: "CeraVe",
    precio: 9800,
    imagen: "/img/skincare/gel-limpiador.png",
    descripcion: "Gel limpiador facial para piel normal a seca."
  },
  {
    nombre: "Crema Hidratante Facial",
    marca: "La Roche-Posay",
    precio: 12400,
    imagen: "/img/skincare/crema-hidratante.png",
    descripcion: "Crema hidratante diaria para piel sensible."
  },
  {
    nombre: "Serum Vitamina C",
    marca: "Vichy",
    precio: 15900,
    imagen: "/img/skincare/serum-vitamina-c.png",
    descripcion: "Serum antioxidante con vitamina C."
  },
  {
    nombre: "Protector Solar FPS 50",
    marca: "Eucerin",
    precio: 13800,
    imagen: "/img/skincare/protector-solar.png",
    descripcion: "Protector solar facial de amplio espectro."
  }
]

export const skincare = baseSkincare.map((p, index) => ({
  ...p,
  tipo: "skincare",
  id: `skincare-${index + 1}`,
  slug: slugify(p.nombre, { lower: true })
}))
