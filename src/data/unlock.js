import slugify from "slugify"

const baseUnlock = [
  {
    nombre: "Chanel Nº5 Extrait",
    marca: "Chanel",
    precio: 220000,
    categoria: "unlock",
    imagen: "",
    descripcion: "Edición premium concentrada, elegancia absoluta"
  },
  {
    nombre: "Dior Sauvage Elixir",
    marca: "Dior",
    precio: 195000,
    categoria: "unlock",
    imagen: "",
    descripcion: "Versión intensa y exclusiva de Sauvage"
  }
]

export const unlock = baseUnlock.map((p, index) => ({
  ...p,
  tipo: "unlock",
  id: `unlock-${index + 1}`,
  slug: slugify(p.nombre)
}))
