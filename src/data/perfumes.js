
import { slugify } from "@/data/slugify"


const basePerfumes = [
  {
    nombre: "La Vie Est Belle",
    marca: "Lancôme",
    precio: 85000,
    categoria: "perfume",
    aroma: ["dulce", "vainilla"],
    sexo: "femenino",
    imagen: require("@/assets/img/perfumes/file.png"),
    descripcion: "Fragancia dulce y elegante"
  },
  {
    nombre: "Sauvage",
    marca: "Dior",
    precio: 92000,
    categoria: "perfume",
    aroma: ["fuerte", "picante"],
    sexo: "masculino",
    imagen: "",
    descripcion: "Aroma intenso y moderno"
  },
]

// EXPORT FINAL (con id + slug)
export const perfumes = basePerfumes.map((p, index) => ({
  ...p,
  tipo: "perfume",
  id: `perfume-${index + 1}`,
  slug: slugify(p.nombre)
}))