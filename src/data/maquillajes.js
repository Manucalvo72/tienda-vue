import slugify from "slugify"

const baseMaquillajes = [
  {
    nombre: "Esmalte Gel Lavender",
    medida: "8ml",
    categoria: "Uñas",
    precio: 7999,
    precioOferta: 6999,
    precioImpuesto: 5784,
    imagen: require("@/assets/maquillaje/esmalte.png"),
    descripcion: "Lucí tonos vibrantes que potencian tu look. Son brillantes y dan una cobertura pareja. Con pincel ergonómico Flat Brush que trabaja con la forma de la uña y reduce las pinceladas necesarias. Punta redondeada para facilitar la llegada a las cutículas. Plano y fino para favorecer la cobertura perfecta en una sola pasada. Usalo junto al Top Coat de secado super rápido para darle un acabado brillante a tus uñas."
  },
  {
    nombre: "Esmalte Glow Green",
    medida: "8ml",
    categoria: "Uñas",
    precio: 7999,
    precioOferta: 6999,
    precioImpuesto: 5784,
    imagen: require("@/assets/maquillaje/esmaltegr.png"),
    descripcion: "Lucí tonos vibrantes que potencian tu look. Son brillantes y dan una cobertura pareja. Con pincel ergonómico Flat Brush que trabaja con la forma de la uña y reduce las pinceladas necesarias. Punta redondeada para facilitar la llegada a las cutículas. Plano y fino para favorecer la cobertura perfecta en una sola pasada. Usalo junto al Top Coat de secado super rápido para darle un acabado brillante a tus uñas."
  },
  {
    nombre: "Esmalte Glow Blue ",
    medida: "8ml",
    categoria: "Uñas",
    precio: 7999,
    precioOferta: 6999,
    precioImpuesto: 5784,
    imagen: require("@/assets/maquillaje/esmaltebl.png"),
    descripcion: "Lucí tonos vibrantes que potencian tu look. Son brillantes y dan una cobertura pareja. Con pincel ergonómico Flat Brush que trabaja con la forma de la uña y reduce las pinceladas necesarias. Punta redondeada para facilitar la llegada a las cutículas. Plano y fino para favorecer la cobertura perfecta en una sola pasada. Usalo junto al Top Coat de secado super rápido para darle un acabado brillante a tus uñas."
  },
  {
    nombre: "Esmalte Glow Red ",
    medida: "8ml",
    categoria: "Uñas",
    precio: 7999,
    precioOferta: 6999,
    precioImpuesto: 5784,
    imagen: require("@/assets/maquillaje/esmaltered.png"),
    descripcion: "Lucí tonos vibrantes que potencian tu look. Son brillantes y dan una cobertura pareja. Con pincel ergonómico Flat Brush que trabaja con la forma de la uña y reduce las pinceladas necesarias. Punta redondeada para facilitar la llegada a las cutículas. Plano y fino para favorecer la cobertura perfecta en una sola pasada. Usalo junto al Top Coat de secado super rápido para darle un acabado brillante a tus uñas."
  },
  {
    nombre: "Esmalte Candy Bubble Gum ",
    medida: "8ml",
    categoria: "Uñas",
    precio: 7999,
    precioOferta: 6999,
    precioImpuesto: 5784,
    imagen: require("@/assets/maquillaje/esmaltecan.png"),
    descripcion: "Lucí tonos vibrantes que potencian tu look. Son brillantes y dan una cobertura pareja. Con pincel ergonómico Flat Brush que trabaja con la forma de la uña y reduce las pinceladas necesarias. Punta redondeada para facilitar la llegada a las cutículas. Plano y fino para favorecer la cobertura perfecta en una sola pasada. Usalo junto al Top Coat de secado super rápido para darle un acabado brillante a tus uñas."
  },
  {
    nombre: "Esmalte Candy Cotton ",
    medida: "8ml",
    categoria: "Uñas",
    precio: 7999,
    precioOferta: 6999,
    precioImpuesto: 5784,
    imagen: require("@/assets/maquillaje/esmaltecot.png"),
    descripcion: "Lucí tonos vibrantes que potencian tu look. Son brillantes y dan una cobertura pareja. Con pincel ergonómico Flat Brush que trabaja con la forma de la uña y reduce las pinceladas necesarias. Punta redondeada para facilitar la llegada a las cutículas. Plano y fino para favorecer la cobertura perfecta en una sola pasada. Usalo junto al Top Coat de secado super rápido para darle un acabado brillante a tus uñas."
  },
  {
    nombre: "Esmalte Glow Violet ",
    medida: "8ml",
    categoria: "Uñas",
    precio: 7999,
    precioOferta: 6999,
    precioImpuesto: 5784,
    imagen: require("@/assets/maquillaje/esmaltevio.png"),
    descripcion: "Lucí tonos vibrantes que potencian tu look. Son brillantes y dan una cobertura pareja. Con pincel ergonómico Flat Brush que trabaja con la forma de la uña y reduce las pinceladas necesarias. Punta redondeada para facilitar la llegada a las cutículas. Plano y fino para favorecer la cobertura perfecta en una sola pasada. Usalo junto al Top Coat de secado super rápido para darle un acabado brillante a tus uñas."
  },
  {
    nombre: "Esmalte Lotus Aquatic ",
    medida: "8ml",
    categoria: "Uñas",
    precio: 7999,
    precioOferta: 6999,
    precioImpuesto: 5784,
    imagen: require("@/assets/maquillaje/esmaltelotus.png"),
    descripcion: "Lucí tonos vibrantes que potencian tu look. Son brillantes y dan una cobertura pareja. Con pincel ergonómico Flat Brush que trabaja con la forma de la uña y reduce las pinceladas necesarias. Punta redondeada para facilitar la llegada a las cutículas. Plano y fino para favorecer la cobertura perfecta en una sola pasada. Usalo junto al Top Coat de secado super rápido para darle un acabado brillante a tus uñas."
  },
  {
    nombre: "Esmalte Gel Dahlia Sunny",
    medida: "8ml",
    categoria: "Uñas",
    precio: 7999,
    precioOferta: 6999,
    precioImpuesto: 5784,
    imagen: require("@/assets/maquillaje/esmaltedah.png"),
    descripcion: "Lucí tonos vibrantes que potencian tu look. Son brillantes y dan una cobertura pareja. Con pincel ergonómico Flat Brush que trabaja con la forma de la uña y reduce las pinceladas necesarias. Punta redondeada para facilitar la llegada a las cutículas. Plano y fino para favorecer la cobertura perfecta en una sola pasada. Usalo junto al Top Coat de secado super rápido para darle un acabado brillante a tus uñas."
  },
  {
    nombre: "Esmalte Candy Confetti ",
    medida: "8ml",
    categoria: "Uñas",
    precio: 7999,
    precioOferta: 6999,
    precioImpuesto: 5784,
    imagen: require("@/assets/maquillaje/esmaltecon.png"),
    descripcion: "Lucí tonos vibrantes que potencian tu look. Son brillantes y dan una cobertura pareja. Con pincel ergonómico Flat Brush que trabaja con la forma de la uña y reduce las pinceladas necesarias. Punta redondeada para facilitar la llegada a las cutículas. Plano y fino para favorecer la cobertura perfecta en una sola pasada. Usalo junto al Top Coat de secado super rápido para darle un acabado brillante a tus uñas."
  },
  {
    nombre: "Esmalte Candy Frosted Fantasy",
    medida: "8ml",
    categoria: "Uñas",
    precio: 7999,
    precioOferta: 6999,
    precioImpuesto: 5784,
    imagen: require("@/assets/maquillaje/esmaltrefros.png"),
    descripcion: "Lucí tonos vibrantes que potencian tu look. Son brillantes y dan una cobertura pareja. Con pincel ergonómico Flat Brush que trabaja con la forma de la uña y reduce las pinceladas necesarias. Punta redondeada para facilitar la llegada a las cutículas. Plano y fino para favorecer la cobertura perfecta en una sola pasada. Usalo junto al Top Coat de secado super rápido para darle un acabado brillante a tus uñas."
  },
  {
    nombre: "Esmalte Gel Orchide Magic",
    medida: "8ml",
    categoria: "Uñas",
    precio: 7999,
    precioOferta: 6999,
    precioImpuesto: 5784,
    imagen: require("@/assets/maquillaje/esmalteor.png"),
    descripcion: "Lucí tonos vibrantes que potencian tu look. Son brillantes y dan una cobertura pareja. Con pincel ergonómico Flat Brush que trabaja con la forma de la uña y reduce las pinceladas necesarias. Punta redondeada para facilitar la llegada a las cutículas. Plano y fino para favorecer la cobertura perfecta en una sola pasada. Usalo junto al Top Coat de secado super rápido para darle un acabado brillante a tus uñas."
  },
  {
    nombre: "Esmalte Candy Mashmellow",
    medida: "8ml",
    categoria: "Uñas",
    precio: 7999,
    precioOferta: 6999,
    precioImpuesto: 5784,
    imagen: require("@/assets/maquillaje/esmaltemar.png"),
    descripcion: "Lucí tonos vibrantes que potencian tu look. Son brillantes y dan una cobertura pareja. Con pincel ergonómico Flat Brush que trabaja con la forma de la uña y reduce las pinceladas necesarias. Punta redondeada para facilitar la llegada a las cutículas. Plano y fino para favorecer la cobertura perfecta en una sola pasada. Usalo junto al Top Coat de secado super rápido para darle un acabado brillante a tus uñas."
  },
  {
    nombre: "Esmalte Rose Dreamer",
    medida: "8ml",
    categoria: "Uñas",
    precio: 7999,
    precioOferta: 6999,
    precioImpuesto: 5784,
    imagen: require("@/assets/maquillaje/esmalterose.png"),
    descripcion: "Lucí tonos vibrantes que potencian tu look. Son brillantes y dan una cobertura pareja. Con pincel ergonómico Flat Brush que trabaja con la forma de la uña y reduce las pinceladas necesarias. Punta redondeada para facilitar la llegada a las cutículas. Plano y fino para favorecer la cobertura perfecta en una sola pasada. Usalo junto al Top Coat de secado super rápido para darle un acabado brillante a tus uñas."
  },
  {
    nombre: "Tratamiento Primer Porcelana",
    medida: "8ml",
    categoria: "Uñas",
    precio: 8999,
    precioOferta: 6999,
    precioImpuesto: 5784,
    imagen: require("@/assets/maquillaje/trat.png"),
    descripcion: "Suaviza y nivela imperfecciones. Ideal como base pre esmaltado. Favorece la adhesión del esmalte y sus pigmentos."
  },
  {
    nombre: "Tratamiento Fuerza y Crecimiento",
    medida: "8ml",
    categoria: "Uñas",
    precio: 8999,
    precioOferta: 6999,
    precioImpuesto: 5784,
    imagen: require("@/assets/maquillaje/tratfuer.png"),
    descripcion: "Con tecnología de encapsulamiento, permite incluir en los esmaltes ingredientes activos que cuidan tus uñas con eficacia, como proteínas vegetales hidrolizadas. Este producto actúa rápido, fortalece y mejora visiblemente su apariencia y fragilidad, evita el descascarado y la descamación y por último protege y mejora el brillo."
  },
   {
    nombre: "Tratamiento Extra Calcio Rosa",
    medida: "8ml",
    categoria: "Uñas",
    precio: 8999,
    precioOferta: 6999,
    precioImpuesto: 5784,
    imagen: require("@/assets/maquillaje/tratcal.png"),
    descripcion: "Con tecnología de encapsulamiento, permite incluir en los esmaltes ingredientes activos que cuidan tus uñas con eficacia, como proteínas vegetales hidrolizadas. "
  },
   {
    nombre: "Tratamiento Extra Calcio Nude",
    medida: "8ml",
    categoria: "Uñas",
    precio: 8999,
    precioOferta: 6999,
    precioImpuesto: 5784,
    imagen: require("@/assets/maquillaje/tratnud.png"),
    descripcion: "Con tecnología de encapsulamiento, permite incluir en los esmaltes ingredientes activos que cuidan tus uñas con eficacia, como proteínas vegetales hidrolizadas.."
  },
   {
    nombre: "Top Coat Secado Rápido Brillante",
    medida: "8ml",
    categoria: "Uñas",
    precio: 8999,
    precioOferta: 6999,
    precioImpuesto: 5784,
    imagen: require("@/assets/maquillaje/trattop.png"),
    descripcion: "Da un acabado brillante a tus uñas, con secado superrápido. ¡Tu esmaltado siempre impecable!"
  },
   {
    nombre: "Tratamiento Extra Calcio Marfil",
    medida: "8ml",
    categoria: "Uñas",
    precio: 8999,
    precioOferta: 6999,
    precioImpuesto: 5784,
    imagen: require("@/assets/maquillaje/tratmarfil.png"),
    descripcion: "Con tecnología de encapsulamiento, permite incluir en los esmaltes ingredientes activos que cuidan tus uñas con eficacia, como proteínas vegetales hidrolizadas."
  },
   {
    nombre: "Primer Pre Base Ultrahidratante",
    medida: "35ml",
    categoria: "Rostro",
    precio: 11999,
    precioOferta: 9999,
    precioImpuesto: 8263,
    imagen: require("@/assets/maquillaje/basehid.png"),
    descripcion: "Aplica antes del maquillaje para preparar la piel. Funciona como capa protectora y ayuda a que el maquillaje se adhiera mejor y dure más."
  },
   {
    nombre: "Corrector Contouring Caramelo",
    medida: "4g",
    categoria: "Rostro",
    precio: 9999,
    precioOferta: 8999,
    precioImpuesto: 7437,
    imagen: require("@/assets/maquillaje/corrector.png"),
    descripcion: "Marcá y afiná las facciones y las líneas del rostro para un contorno perfectamente definido. Destacá tus rasgos suavizando algunas zonas y dando fuerza a otras. Apto para todo tipo de cutis."
  },
   {
    nombre: "Corrector Contouring Vainilla",
    medida: "4g",
    categoria: "Rostro",
    precio: 9999,
    precioOferta: 8999,
    precioImpuesto: 7437,
    imagen: require("@/assets/maquillaje/correctorvai.png"),
    descripcion: "Marcá y afiná las facciones y las líneas del rostro para un contorno perfectamente definido. Destacá tus rasgos suavizando algunas zonas y dando fuerza a otras. Apto para todo tipo de cutis."
  },
   {
    nombre: "Corrector Contouring Marfil",
    medida: "4g",
    categoria: "Rostro",
    precio: 9999,
    precioOferta: 8999,
    precioImpuesto: 7437,
    imagen: require("@/assets/maquillaje/correctormar.png"),
    descripcion: "Marcá y afiná las facciones y las líneas del rostro para un contorno perfectamente definido. Destacá tus rasgos suavizando algunas zonas y dando fuerza a otras. Apto para todo tipo de cutis."
  },
   {
    nombre: "Corrector Contouring Dark Coffee",
    medida: "4g",
    categoria: "Rostro",
    precio: 9999,
    precioOferta: 8999,
    precioImpuesto: 7437,
    imagen: require("@/assets/maquillaje/correctordark.png"),
    descripcion: "Marcá y afiná las facciones y las líneas del rostro para un contorno perfectamente definido. Destacá tus rasgos suavizando algunas zonas y dando fuerza a otras. Apto para todo tipo de cutis."
  },
   {
    nombre: "Bruma Fijadora de Maquillaje",
    medida: "30ml",
    categoria: "Rostro",
    precio: 13599,
    precioOferta: 10999 ,
    precioImpuesto: 9090,
    imagen: require("@/assets/maquillaje/bruma.png"),
    descripcion: "Ayuda a mantener el maquillaje en su lugar durante un tiempo más prolongado. Aplicá desde 15 a 20 centímetros después de tu rutina de maquillaje para proteger su apariencia y durabilidad y evitar que se corra o desvanezca."
  },
   {
    nombre: "Base Hydra Cover Bronce",
    medida: "30g",
    categoria: "Rostro",
    precio: 19799,
    precioOferta:15999 ,
    precioImpuesto: 13222,
    imagen: require("@/assets/maquillaje/hidrabro.png"),
    descripcion: "La mejor opción para lograr un aspecto natural y radiante. El ácido hialurónico retiene la humedad y ayuda a mantener la piel humectada y suave durante todo el día."
  },
   {
    nombre: "Base Hydra Cover Medio",
    medida: "30g",
    categoria: "Rostro",
    precio: 19799,
    precioOferta:15999 ,
    precioImpuesto: 13222,
    imagen: require("@/assets/maquillaje/hidramed.png"),
    descripcion: "La mejor opción para lograr un aspecto natural y radiante. El ácido hialurónico retiene la humedad y ayuda a mantener la piel humectada y suave durante todo el día."
  },
   {
    nombre: "Base Hydra Cover Claro",
    medida: "30g",
    categoria: "Rostro",
    precio: 19799,
    precioOferta:15999 ,
    precioImpuesto: 13222,
    imagen: require("@/assets/maquillaje/hidracla.png"),
    descripcion: "La mejor opción para lograr un aspecto natural y radiante. El ácido hialurónico retiene la humedad y ayuda a mantener la piel humectada y suave durante todo el día."
  },
   {
    nombre: "Primer Pre Base Ultrahidratante",
    medida: "35ml",
    categoria: "Rostro",
    precio: 11999,
    precioOferta: 9999,
    precioImpuesto: 8263,
    imagen: require("@/assets/maquillaje/primer.png"),
    descripcion: "Aplica antes del maquillaje para preparar la piel. Funciona como capa protectora y ayuda a que el maquillaje se adhiera mejor y dure más."
  },
   {
    nombre: "Labial Capsula Summer Rojo",
    medida: "4g",
    categoria: "Labios",
    precio: 10999,
    precioOferta: 7999,
    precioImpuesto: 6610,
    imagen: require("@/assets/maquillaje/labroj.png"),
    descripcion: "Dale un toque final a tu look con un labial que humecta, protege y aporta un color intenso y duradero."
  },
   {
    nombre: "Labial Capsula Summer Coral",
    medida: "4g",
    categoria: "Labios",
    precio: 10999,
    precioOferta: 7999,
    precioImpuesto: 6610,
    imagen: require("@/assets/maquillaje/labcor.png"),
    descripcion: "Dale un toque final a tu look con un labial que humecta, protege y aporta un color intenso y duradero."
  },
   {
    nombre: "Labial Cremoso Marron Terra",
    medida: "4g",
    categoria: "Labios",
    precio: 10999,
    precioOferta: 7999,
    precioImpuesto: 6610,
    imagen: require("@/assets/maquillaje/labmar.png"),
    descripcion: "Dale un toque final a tu look con un labial que humecta, protege y aporta un color intenso y duradero."
  },
   {
    nombre: "Labial Capsula Summer Nude",
    medida: "4g",
    categoria: "Labios",
    precio: 10999,
    precioOferta: 7999,
    precioImpuesto: 6610,
    imagen: require("@/assets/maquillaje/labnud.png"),
    descripcion: "Dale un toque final a tu look con un labial que humecta, protege y aporta un color intenso y duradero."
  },
   {
    nombre: "Labial Cremoso Rojo Vino",
    medida: "4g",
    categoria: "Labios",
    precio: 10999,
    precioOferta: 7999,
    precioImpuesto: 6610,
    imagen: require("@/assets/maquillaje/labvin.png"),
    descripcion: "Descubrí el poder de un labial que combina color intenso y cuidado para tus labios. Su fórmula cremosa humecta y protege, evitando la resequedad, mientras su textura suave se desliza fácilmente, cubriendo con un tono uniforme y vibrante que dura por horas. Ideal para darle un toque elegante y sofisticado a cualquier look."
  },
   {
    nombre: "Labial Capsula Summer Rosa",
    medida: "4g",
    categoria: "Labios",
    precio: 10999,
    precioOferta: 7999,
    precioImpuesto: 6610,
    imagen: require("@/assets/maquillaje/labros.png"),
    descripcion: "Dale un toque final a tu look con un labial que humecta, protege y aporta un color intenso y duradero."
  },
   {
    nombre: "Labial Escarlata Fitz Roy",
    medida: "4g",
    categoria: "Labios",
    precio: 10999,
    precioOferta: 7999,
    precioImpuesto: 6610,
    imagen: require("@/assets/maquillaje/labroj.png"),
    descripcion: "Dale un toque final a tu look con un labial que humecta, protege y aporta un color intenso y duradero."
  },
   {
    nombre: "Labial Gloss Pithaya",
    medida: "2.2g",
    categoria: "Labios",
    precio: 10999,
    precioOferta: 7999,
    precioImpuesto: 6610,
    imagen: require("@/assets/maquillaje/labpit.png"),
    descripcion: "Su fórmula ultra ligera y no pegajosa hidrata profundamente, aportando un brillo natural que realza el tono de tus labios con un sutil color nuez, perfecto para cualquier ocasión."
  },
   {
    nombre: "Labial Gloss Nuez ",
    medida: "2.2g",
    categoria: "Labios",
    precio: 10999,
    precioOferta: 7999,
    precioImpuesto: 6610,
    imagen: require("@/assets/maquillaje/labnuez.png"),
    descripcion: "Su fórmula ultra ligera y no pegajosa hidrata profundamente, aportando un brillo natural que realza el tono de tus labios con un sutil color nuez, perfecto para cualquier ocasión."
  },
   {
    nombre: "Labial Intransferible Nude",
    medida: "2.2g",
    categoria: "Labios",
    precio: 14999,
    precioOferta: 10999,
    precioImpuesto: 9090,
    imagen: require("@/assets/maquillaje/labnud2.png"),
    descripcion: "Lográ un color intenso que se fija al instante y dura por horas sin transferirse. Su fórmula liviana y de alta cobertura resiste al roce y al paso del tiempo, mientras mantiene tus labios suaves y cómodos."
  },
   {
    nombre: "Labial Intransferible Sirah",
    medida: "2.2g",
    categoria: "Labios",
    precio: 14999,
    precioOferta: 10999,
    precioImpuesto: 9090,
    imagen: require("@/assets/maquillaje/labsir.png"),
    descripcion: "Lográ un color intenso que se fija al instante y dura por horas sin transferirse. Su fórmula liviana y de alta cobertura resiste al roce y al paso del tiempo, mientras mantiene tus labios suaves y cómodos."
  },
   {
    nombre: "Labial Intransferible Siena Mate",
    medida: "2.2g",
    categoria: "Labios",
    precio: 14999,
    precioOferta: 10999,
    precioImpuesto: 9090,
    imagen: require("@/assets/maquillaje/labsie.png"),
    descripcion: "Lográ un color intenso que se fija al instante y dura por horas sin transferirse. Su fórmula liviana y de alta cobertura resiste al roce y al paso del tiempo, mientras mantiene tus labios suaves y cómodos."
  },
   {
    nombre: "Labial Intransferible Rubi Mate",
    medida: "2.2g",
    categoria: "Labios",
    precio: 14999,
    precioOferta: 10999,
    precioImpuesto: 9090,
    imagen: require("@/assets/maquillaje/labrub.png"),
    descripcion: "Lográ un color intenso que se fija al instante y dura por horas sin transferirse. Su fórmula liviana y de alta cobertura resiste al roce y al paso del tiempo, mientras mantiene tus labios suaves y cómodos."
  },
   {
    nombre: "Labial Intransferible Hot Pink Mate ",
    medida: "2.2g",
    categoria: "Labios",
    precio: 14999,
    precioOferta: 10999,
    precioImpuesto: 9090,
    imagen: require("@/assets/maquillaje/labhot.png"),
    descripcion: "Lográ un color intenso que se fija al instante y dura por horas sin transferirse. Su fórmula liviana y de alta cobertura resiste al roce y al paso del tiempo, mientras mantiene tus labios suaves y cómodos."
  },
   {
    nombre: "Labial Intransferible Rosa Mate",
    medida: "2.2g",
    categoria: "Labios",
    precio: 14999,
    precioOferta: 10999,
    precioImpuesto: 9090,
    imagen: require("@/assets/maquillaje/labrosm.png"),
    descripcion: "Lográ un color intenso que se fija al instante y dura por horas sin transferirse. Su fórmula liviana y de alta cobertura resiste al roce y al paso del tiempo, mientras mantiene tus labios suaves y cómodos."
  },
   {
    nombre: "Labial Intransferible Morado Perlado",
    medida: "2.2g",
    categoria: "Labios",
    precio: 14999,
    precioOferta: 10999,
    precioImpuesto: 9090,
    imagen: require("@/assets/maquillaje/labmor.png"),
    descripcion: "Lográ un color intenso que se fija al instante y dura por horas sin transferirse. Su fórmula liviana y de alta cobertura resiste al roce y al paso del tiempo, mientras mantiene tus labios suaves y cómodos."
  },
   {
    nombre: "Labial Intransferible Pupura Mate",
    medida: "2.2g",
    categoria: "Labios",
    precio: 14999,
    precioOferta: 10999,
    precioImpuesto: 9090,
    imagen: require("@/assets/maquillaje/labpur.png"),
    descripcion: "Lográ un color intenso que se fija al instante y dura por horas sin transferirse. Su fórmula liviana y de alta cobertura resiste al roce y al paso del tiempo, mientras mantiene tus labios suaves y cómodos."
  },
   {
    nombre: "Labial Intransferible Coral",
    medida: "2.2g",
    categoria: "Labios",
    precio: 14999,
    precioOferta: 10999,
    precioImpuesto: 9090,
    imagen: require("@/assets/maquillaje/labcor1.png"),
    descripcion: "Lográ un color intenso que se fija al instante y dura por horas sin transferirse. Su fórmula liviana y de alta cobertura resiste al roce y al paso del tiempo, mientras mantiene tus labios suaves y cómodos."
  },
   {
    nombre: "Labial Intransferible Beige ",
    medida: "2.2g",
    categoria: "Labios",
    precio: 14999,
    precioOferta: 10999,
    precioImpuesto: 9090,
    imagen: require("@/assets/maquillaje/labbei.png"),
    descripcion: "Lográ un color intenso que se fija al instante y dura por horas sin transferirse. Su fórmula liviana y de alta cobertura resiste al roce y al paso del tiempo, mientras mantiene tus labios suaves y cómodos."
  },
   {
    nombre: "Labial Intransferible Fresa Mate ",
    medida: "2.2g",
    categoria: "Labios",
    precio: 14999,
    precioOferta: 10999,
    precioImpuesto: 9090,
    imagen: require("@/assets/maquillaje/labfre.png"),
    descripcion: "Lográ un color intenso que se fija al instante y dura por horas sin transferirse. Su fórmula liviana y de alta cobertura resiste al roce y al paso del tiempo, mientras mantiene tus labios suaves y cómodos."
  },
   {
    nombre: "Delineador Cejas Marrón Oscuro",
    medida: "1.5g",
    categoria: "Ojos",
    precio: 16299,
    precioOferta: 10990,
    precioImpuesto: 9090,
    imagen: require("@/assets/maquillaje/deli.png"),
    descripcion: "Dale una forma precisa y natural a las cejas. La fibra delineadora tiene la concentración de pigmentos. Ideal para reproducir la dirección del bello, de forma duradera y sin dejar manchas. "
  },
 
   {
    nombre: "Delineador Retractil Ojos y Cejas Negro",
    medida: "0.2g",
    categoria: "Ojos",
    precio: 11999,
    precioOferta: 10990,
    precioImpuesto: 9090,
    imagen: require("@/assets/maquillaje/deli1.png"),
    descripcion: "Dale definición e intensidad a tu mirada. Su aplicación es supersimple y podés lograr un trazo impecable."
  },
   {
    nombre: "Delineador Retractil Ojos Marron Dark",
    medida: "0.2g",
    categoria: "Ojos",
    precio: 11999,
    precioOferta: 10990,
    precioImpuesto: 9090,
    imagen: require("@/assets/maquillaje/deli2.png"),
    descripcion: "Define y realza la intensidad de tu mirada Su fórmula de alta pigmentación ofrece un color profundo y duradero que se desliza suavemente para lograr un trazo preciso y uniforme. Perfecto para delineados finos o estilos más marcados, este delineador garantiza una fijación prolongada sin irritar tus ojos."
  },
   {
    nombre: "Delineador Liquido Negro",
    medida: "3g",
    categoria: "Ojos",
    precio: 15299,
    precioOferta: 12990,
    precioImpuesto: 10742,
    imagen: require("@/assets/maquillaje/delliq.png"),
    descripcion: "Con su pincel de precisión podés contornear perfectamente la línea de los párpados y lograr una mirada más profunda y definida. Ideal para un look creativo y llamativo."
  },
   {
    nombre: "Duo Sombra Clear Sky ",
    medida: "3g",
    categoria: "Ojos",
    precio: 12999,
    precioOferta: 0,
    precioImpuesto: 10742,
    imagen: require("@/assets/maquillaje/som.png"),
    descripcion: "Diseñados para transformar tu mirada con combinaciones perfectas que resaltan tu estilo único. Cada dúo ofrece tonos cuidadosamente seleccionados para crear desde looks sutiles y naturales hasta acabados intensos y sofisticados, ideales para cualquier ocasión."
  },
   {
    nombre: "Duo Sombra Intense Night",
    medida: "3g",
    categoria: "Ojos",
    precio: 12999,
    precioOferta: 0,
    precioImpuesto: 10742,
    imagen: require("@/assets/maquillaje/somnig.png"),
    descripcion: "Diseñados para transformar tu mirada con combinaciones perfectas que resaltan tu estilo único. Cada dúo ofrece tonos cuidadosamente seleccionados para crear desde looks sutiles y naturales hasta acabados intensos y sofisticados, ideales para cualquier ocasión."
  },
   {
    nombre: "Duo Sombra Smokey Grey",
    medida: "3g",
    categoria: "Ojos",
    precio: 12999,
    precioOferta: 0,
    precioImpuesto: 10742,
    imagen: require("@/assets/maquillaje/somgrey.png"),
    descripcion: "Diseñados para transformar tu mirada con combinaciones perfectas que resaltan tu estilo único. Cada dúo ofrece tonos cuidadosamente seleccionados para crear desde looks sutiles y naturales hasta acabados intensos y sofisticados, ideales para cualquier ocasión."
  },
   {
    nombre: "Duo Sombra Copper Sand",
    medida: "3g",
    categoria: "Ojos",
    precio: 12999,
    precioOferta: 0,
    precioImpuesto: 10742,
    imagen: require("@/assets/maquillaje/somcop.png"),
    descripcion: "Diseñados para transformar tu mirada con combinaciones perfectas que resaltan tu estilo único. Cada dúo ofrece tonos cuidadosamente seleccionados para crear desde looks sutiles y naturales hasta acabados intensos y sofisticados, ideales para cualquier ocasión."
  },

   {
    nombre: "Delineador Retractil Labios Rojo Classic",
    medida: "0.2g",
    categoria: "Labios",
    precio: 11999,
    precioOferta: 7999,
    precioImpuesto: 6610,
    imagen: require("@/assets/maquillaje/dellab.png"),
    descripcion: "Definí y realzá la forma natural de tus labios con un color intenso y sofisticado. Este delineador retráctil, en un tono rojo clásico, te permite lograr un contorno perfecto y evitar que tu labial se corra, prolongando la duración del color. Ideal para usar solo, como protagonista, o combinado con tu labial favorito para un look impecable y profesional en pocos minutos."
  },
   {
    nombre: "Delineador Retractil Nude",
    medida: "0.2g",
    categoria: "Labios",
    precio: 11999,
    precioOferta: 7999,
    precioImpuesto: 6610,
    imagen: require("@/assets/maquillaje/dellab.png"),
    descripcion: "Definí y realzá la forma natural de tus labios con un color intenso y sofisticado. Este delineador retráctil, en un tono rojo clásico, te permite lograr un contorno perfecto y evitar que tu labial se corra, prolongando la duración del color. Ideal para usar solo, como protagonista, o combinado con tu labial favorito para un look impecable y profesional en pocos minutos."
  },
  
   {
    nombre: "Polvo Compacto Claro",
    medida: "10g",
    categoria: "Rostro",
    precio: 18799,
    precioOferta: 15999,
    precioImpuesto: 13222,
    imagen: require("@/assets/maquillaje/polvo.png"),
    descripcion: "Emparejá el tono de tu rostro y cubrí las imperfecciones eliminando el brillo. Perfecto para un look fresco y natural."
  },
   {
    nombre: "Polvo Compacto Medio",
    medida: "10g",
    categoria: "Rostro",
    precio: 18799,
    precioOferta: 15999,
    precioImpuesto: 13222,
    imagen: require("@/assets/maquillaje/polvomed.png"),
    descripcion: "Emparejá el tono de tu rostro y cubrí las imperfecciones eliminando el brillo. Perfecto para un look fresco y natural."
  },
   {
    nombre: "Polvo Compacto Oscuro",
    medida: "10g",
    categoria: "Rostro",
    precio: 18799,
    precioOferta: 15999,
    precioImpuesto: 13222,
    imagen: require("@/assets/maquillaje/polvoosc.png"),
    descripcion: "Emparejá el tono de tu rostro y cubrí las imperfecciones eliminando el brillo. Perfecto para un look fresco y natural."
  },
   {
    nombre: "Rubor Compacto Malva",
    medida: "3g",
    categoria: "Rostro",
    precio: 11999,
    precioOferta: 0,
    precioImpuesto: 9916,
    imagen: require("@/assets/maquillaje/rubor.png"),
    descripcion: "Lográ un acabado fresco y natural. Su fórmula ligera y de fácil aplicación se desliza suavemente sobre la piel, aportando un color intenso y duradero que realza tus mejillas con un tono cálido y radiante."
  },
   {
    nombre: "Rubor Compacto Ambar",
    medida: "3g",
    categoria: "Rostro",
    precio: 11999,
    precioOferta: 0,
    precioImpuesto: 9916,
    imagen: require("@/assets/maquillaje/ruboramby.png"),
    descripcion: "Lográ un acabado fresco y natural. Su fórmula ligera y de fácil aplicación se desliza suavemente sobre la piel, aportando un color intenso y duradero que realza tus mejillas con un tono cálido y radiante."
  },
   {
    nombre: "Rubor Compacto Sunset",
    medida: "3g",
    categoria: "Rostro",
    precio: 11999,
    precioOferta: 0,
    precioImpuesto: 9916,
    imagen: require("@/assets/maquillaje/ruborsun.png"),
    descripcion: "Lográ un acabado fresco y natural. Su fórmula ligera y de fácil aplicación se desliza suavemente sobre la piel, aportando un color intenso y duradero que realza tus mejillas con un tono cálido y radiante."
  },
   {
    nombre: "Rubor Compacto Ocre",
    medida: "3g",
    categoria: "Rostro",
    precio: 11999,
    precioOferta: 0,
    precioImpuesto: 9916,
    imagen: require("@/assets/maquillaje/ruborocr.png"),
    descripcion: "Lográ un acabado fresco y natural. Su fórmula ligera y de fácil aplicación se desliza suavemente sobre la piel, aportando un color intenso y duradero que realza tus mejillas con un tono cálido y radiante."
  },
   {
    nombre: "Iluminador Compacto Rosa Suave",
    medida: "3g",
    categoria: "Rostro",
    precio: 11999,
    precioOferta: 8999,
    precioImpuesto: 7437,
    imagen: require("@/assets/maquillaje/ilu.png"),
    descripcion: "Vas a lograr un increíble efecto glow up gracias a sus microcápsulas perladas. Podés combinarlos o usarlos solos para resaltar, afinar e iluminar tus rasgos. Su textura suave y ligera garantiza que no deje rastros de oleosidad, solo un acabado radiante y natural."
  },
   {
    nombre: "Iluminador Compacto Champagne",
    medida: "3g",
    categoria: "Rostro",
    precio: 11999,
    precioOferta: 8999,
    precioImpuesto: 7437,
    imagen: require("@/assets/maquillaje/ilucha.png"),
    descripcion: "Vas a lograr un increíble efecto glow up gracias a sus microcápsulas perladas. Podés combinarlos o usarlos solos para resaltar, afinar e iluminar tus rasgos. Su textura suave y ligera garantiza que no deje rastros de oleosidad, solo un acabado radiante y natural."
  },
   {
    nombre: "Iluminador Compacto Bronce Suave",
    medida: "3g",
    categoria: "Rostro",
    precio: 11999,
    precioOferta: 8999,
    precioImpuesto: 7437,
    imagen: require("@/assets/maquillaje/ilubro.png"),
    descripcion: "Vas a lograr un increíble efecto glow up gracias a sus microcápsulas perladas. Podés combinarlos o usarlos solos para resaltar, afinar e iluminar tus rasgos. Su textura suave y ligera garantiza que no deje rastros de oleosidad, solo un acabado radiante y natural."
  },
 
  
 
]

export const maquillajes = baseMaquillajes.map((p, index) => ({
  ...p,
  tipo: "maquillaje",
  id: `maquillaje-${index + 1}`,
  slug: slugify(p.nombre, { lower: true })
}))
