import slugify from "slugify"

const baseMaquillajes = [
  {
    nombre: "Base Líquida Natural",
    marca: "Loreal",
    categoria: "rostro",
    precio: 7200,
    imagen: "/img/maquillajes/base-liquida.png"
  },
  {
    nombre: "Corrector Alta Cobertura",
    marca: "Maybelline",
    categoria: "rostro",
    precio: 4800,
    imagen: "/img/maquillajes/corrector.png"
  },
  {
    nombre: "Rubor Rosa Suave",
    marca: "Revlon",
    categoria: "rubores",
    precio: 3900,
    imagen: "/img/maquillajes/rubor-rosa.png"
  },
  {
    nombre: "Polvo Compacto Matte",
    marca: "MAC",
    categoria: "polvos",
    precio: 6500,
     tipo: "Uñas",
    imagen: "/img/maquillajes/polvo-matte.png"
  },
  {
    nombre: "Paleta de Sombras Nude",
    marca: "Urban Decay",
    categoria: "ojos",
    precio: 9800,
    tipo: "Uñas",
    imagen: "/img/maquillajes/sombras-nude.png"
  },
  {
    nombre: "Labial Matte Rojo",
    marca: "Maybelline",
    categoria: "labios",
    precio: 4500,
    tipo: "Rubores",
    imagen: "/img/maquillajes/labial-rojo.png"
  },
  {
    nombre: "Labsdaial Matsadsdate Rojo",
    marca: "Maybellinedsadsa",
    categoria: "labios",
    precio: 4500,
    imagen: "/img/maquillajes/labial-rojo.png"
  },
  {
    nombre: "Labial Matte Rojo",
    marca: "Maybellineaaaaaa",
    categoria: "labios",
    precio: 4500,
    imagen: "/img/maquillajes/labial-rojo.png"
  },
]

export const maquillajes = baseMaquillajes.map((p, index) => ({
  ...p,
  tipo: "maquillaje",
  id: `maquillaje-${index + 1}`,
  slug: slugify(p.nombre, { lower: true })
}))
