import slugify from "slugify"

const baseSkincare = [
 
  {
    nombre: "Crema Exfoliante facial Patagonia",
    medida: "150ml",
    precio: 20999,
    precioOferta: 14999,
    precioImpuesto: 12395,
    imagen: require("@/assets/maquillaje/exf.png"),
    descripcion: "Exfoliá suavemente tu rostro, eliminando impurezas y células muertas. Nutre, revitaliza y deja la piel suave, radiante y renovada."
  },
  {
    nombre: "Crema Facial de Día Patagonia",
    medida: "50ml",
    precio: 18999,
    precioOferta: 27999,
    precioImpuesto: 15701,
    imagen: require("@/assets/maquillaje/facpat.png"),
    descripcion: "Protegé tu piel durante el día frente a la polución y los rayos UV con esta crema hidratante que combate los signos del envejecimiento. Enriquecida con Hydraskin™, rosa mosqueta y grosella. Para todo tipo de piel."
  },
  {
    nombre: "Crema Facial de Noche",
    medida: "50ml",
    precio: 18999,
    precioOferta: 27999,
    precioImpuesto: 15701,
    imagen: require("@/assets/maquillaje/facnoc.png"),
    descripcion: "Regenerá tu piel mientras dormís. Su fórmula con Hydraskin™, rosa mosqueta y cereza trabaja durante el ciclo nocturno reparando los daños acumulados y nutriendo intensamente. Para todo tipo de piel"
  },
  {
    nombre: "Emulsión de Limpieza Facial",
    medida: "150ml",
    precio: 20999,
    precioOferta: 14999,
    precioImpuesto: 12395,
    imagen: require("@/assets/maquillaje/emu.png"),
    descripcion: "Limpia profundamente y ayuda a restaurar la barrera natural de la piel, eliminando oleosidad y dejando el rostro suave y saludable."
  },
   {
    nombre: "Repuesto sérum facial Patagonia",
    medida: "17ml", 
    precio: 16699,
    precioOferta: 7999,
    precioImpuesto: 6610,
    imagen: require("@/assets/maquillaje/repser.png"),
    descripcion: "Hidratá, revitalizá y protegé tu piel con este sérum con Hydraskin™, rosa mosqueta y arándanos, ahora en versión recarga."
  },
  {
    nombre: "Repuesto Emulsión de Limpieza Facial",
    medida: "150ml",
      precio: 15999,
    precioOferta: 10999,
    precioImpuesto: 9090,
    imagen: require("@/assets/maquillaje/repemu.png"),
    descripcion: "El mismo poder de limpieza y nutrición, ahora en formato recarga, para mantener tu piel suave y protegida de agentes externos."
  },
  {
    nombre: "Leche desmaquillante con Grosella y Rosa Mosqueta",
    medida: "150ml",
    precio: 20999,
    precioOferta: 14999,
    precioImpuesto: 12935,
    imagen: require("@/assets/maquillaje/leche.png"),
    descripcion: "Liviana y refrescante, limpia rostro, párpados, cejas y pestañas mientras nutre la piel. Con ácido salicílico, grosella y rosa mosqueta para una limpieza suave y completa."
  },
  {
    nombre: "Serum Facial Patagonia",
    medida: "17ml",
    precio: 22999,
    precioOferta: 13999,
    precioImpuesto: 11569,
    imagen: require("@/assets/maquillaje/serum.png"),
    descripcion: "Biotecnología al servicio de tu piel. Con Hydraskin™, rosa mosqueta y arándanos para combatir arrugas, hidratar y proteger del daño ambienta"
  }, 
  {
    nombre: "Repuesto Crema Facial de Noche",
    medida: "50ml",
    precio: 17999,
    precioOferta: 11999,
    precioImpuesto: 13395,
    imagen: require("@/assets/maquillaje/repcrem.png"),
    descripcion: "Regenerá tu piel durante la noche con esta crema nutritiva de Hydraskin™, rosa mosqueta y cereza. Para todo tipo de piel."
  }, 
  {
    nombre: "Crema facial revitalizante piel mixta a grasa",
    medida: "60ml",
    precio: 11999,
    precioOferta: 9999,
    precioImpuesto: 8263,
    imagen: require("@/assets/maquillaje/crem.png"),
    descripcion: "Hidrata, purifica y controla la oleosidad con aloe vera, pepino y té verde. Ideal para piel mixta o grasa."
  }, 
  {
    nombre: "Crema de Manos Revitalizante",
    medida: "10ml",
    precio: 7999,
    precioOferta: 5999,
    precioImpuesto: 4957,
    imagen: require("@/assets/maquillaje/cremman.png"),
    descripcion: "Hidrata, protege y controla el exceso de grasa con aloe vera, pepino y té verde, revitalizando tus manos."
  }, 
  {
    nombre: "Crema facial antioxidante piel madura",
    medida: "60ml",
    precio: 11999,
    precioOferta: 9999,
    precioImpuesto: 8263,
    imagen: require("@/assets/maquillaje/cremanti1.png"),
    descripcion: "Rejuvenece y da vitalidad al cutis con palta, jojoba y caléndula, protegiendo frente a los daños del tiempo."
  }, 
  {
    nombre: "Crema de Manos Antioxidante",
    medida: "10ml",
    precio: 7999,
    precioOferta: 5999,
    precioImpuesto: 4957,
    imagen: require("@/assets/maquillaje/cremanti.png"),
    descripcion: "Vitaliza y protege las manos maduras con palta, jojoba y caléndula, frente a los daños del tiempo."
  }, 
  {
    nombre: "Crema Facial Humectante",
    medida: "60ml",
    precio: 11999,
    precioOferta: 9999,
    precioImpuesto: 8263,
    imagen: require("@/assets/maquillaje/cremhum.png"),
    descripcion: "Nutre, humecta y mejora la elasticidad del rostro con argán, oliva y almendras, ideal para piel seca."
  }, 
  {
    nombre: "Crema de Manos Humectante",
    medida: "10ml",
    precio: 7999,
    precioOferta: 5999,
    precioImpuesto: 4957,
    imagen: require("@/assets/maquillaje/cremhum1.png"),
    descripcion: "Nutre y suaviza las manos con argán, oliva y almendras, cuidando esta zona tan expuesta."
  }, 
  
  {
    nombre: "Repuesto Crema Facial Antioxidante",
    medida: "60ml",
    precio: 6999,
    precioOferta: 3999,
    precioImpuesto: 3304,
    imagen: require("@/assets/maquillaje/repanti.png"),
    descripcion: "Recarga antioxidante con palta, jojoba y caléndula para vitalizar y rejuvenecer la piel madura."
  }, 
  {
    nombre: "Repuesto Crema Facial Humectante",
    medida: "60ml",
    precio: 6999,
    precioOferta: 3999,
    precioImpuesto: 3304,
    imagen: require("@/assets/maquillaje/rephum.png"),
    descripcion: "Recarga para tu crema humectante con argán, oliva y almendras. Nutre, hidrata y mejora la elasticidad del cutis."
  }, 
  {
    nombre: "Repuesto Crema Facial Revitalizante",
    medida: "60ml",
    precio: 6999,
    precioOferta: 3999,
    precioImpuesto: 3304,
    imagen: require("@/assets/maquillaje/reprev.png"),
    descripcion: "Recarga revitalizante con aloe vera, pepino y té verde para hidratar y purificar la piel mixta o grasa."
  }, 
  {
    nombre: "Lápiz Secativo",
    medida: "4g",
    precio: 7999,
    precioOferta: 7499,
    precioImpuesto: 6197,
    imagen: require("@/assets/maquillaje/lapiz.png"),
    descripcion: "Gracias a una combinación de aceites vegetales y óxido de zinc, te ayuda a mejorar la apariencia del cutis con tendencia a la formación de granitos. Viene en color piel para disimular las imperfecciones localizadas. • Tiene propiedades calmantes y antiinflamatorias. • Podés usarlo durante el día sin afectar la apariencia de la piel. • Es un formato práctico para llevar y usar en cualquier momento."
  }, 
  {
    nombre: "Gel Aséptico con Ácido Salicílico",
    medida: "100ml",
    precio: 7999,
    precioOferta: 6999,
    precioImpuesto: 5784,
    imagen: require("@/assets/maquillaje/gel.png"),
    descripcion: "Descongestiona y previene el acné. Entre sus beneficios también se destacan los siguientes: • Combate granitos y puntos negros. • Minimiza los poros y reduce la oleosidad. • No irrita la piel."
  }, 
  {
    nombre: "Jabón Detox",
    medida: "50ml",
    precio: 7999,
    precioOferta: 6999,
    precioImpuesto: 5784,
    imagen: require("@/assets/maquillaje/jabon.png"),
    descripcion: "Limpieza profunda, efecto detox, piel purificada. También se destacan los siguientes beneficios: • Acción astringente, elimina toxinas • Reduce el exceso de oleosidad • No reseca la piel."
  }, 
  {
    nombre: "Bruma facial con Agua de Rosas y Sandía",
    medida: "150ml",
    precio: 13999,
    precioOferta: 10999,
    precioImpuesto: 9090,
    imagen: require("@/assets/maquillaje/brumasan.png"),
    descripcion: "Es el gesto de hidratación instantánea que tu piel necesita para lucir fresca, suave y luminosa todos los días. Su fórmula combina el poder calmante del agua de rosas con la frescura jugosa de la sandía, aportando humectación ligera y un glow natural que realza tu belleza en cualquier momento del día. Ideal para usar antes del maquillaje, después de la limpieza o cada vez que quieras renovar tu piel con un toque de frescura y confort."
  }, 
  {
    nombre: "Loción Micelar",
    medida: "250ml",
    precio: 8999,
    precioOferta: 7999,
    precioImpuesto: 6610,
    imagen: require("@/assets/maquillaje/loc.png"),
    descripcion: "Limpia y desmaquilla con suavidad, dejando la piel hidratada y tonificada. Enriquecida con antioxidantes de sandía para una sensación fresca y confortable."
  }, 
  {
    nombre: "Gel Exfoliante Facial",
    medida: "50ml",
    precio: 8999,
    precioOferta: 7999,
    precioImpuesto: 6610,
    imagen: require("@/assets/maquillaje/gelfac.png"),
    descripcion: "Formulado con micro partículas naturales de semillas de sandía que eliminan impurezas y células muertas sin irritar la piel. Favorece la renovación celular, dejando el rostro más suave, luminoso y limpio. Enriquecido con Agua de Rosas, que hidrata y calma, aportando una sensación fresca y delicada. Ideal para incorporar en tu rutina semanal de cuidado facial."
  }, 
  {
    nombre: "Jabón Líquido Original",
    medida: "300ml",
    precio: 17999,
    precioOferta: 10999,
    precioImpuesto: 9090,
    imagen: require("@/assets/maquillaje/jabliq.png"),
    descripcion: "Limpia profundamente y protege todo tipo de piel, convirtiendo tu ducha en un momento de belleza y frescura."
  }, 
  {
    nombre: "Jabón Líquido Blush",
    medida: "300ml",
    precio: 17999,
    precioOferta: 10999,
    precioImpuesto: 9090,
    imagen: require("@/assets/maquillaje/blush.png"),
    descripcion: "Limpieza delicada con glicerina y microespuma cremosa, dejando tu piel suave y con tu fragancia favorita."
  }, 
  {
    nombre: "Shampoo Sémplice Original",
    medida: "300ml",
    precio: 14999,
    precioOferta: 9999,
    precioImpuesto: 13395,
    imagen: require("@/assets/maquillaje/shamp.png"),
    descripcion: "Un shampoo equilibrado que limpia suavemente sin resecar. Su fórmula recupera la hidratación del cabello mientras lo deja liviano, brillante y fácil de manejar. Es ideal para el uso diario, ya que mantiene el pelo saludable y resistente, incluso en jornadas intensas."
  }, 
  {
    nombre: "Jabón Intimo",
    medida: "60ml",
    precio: 10899,
    precioOferta: 9999,
    precioImpuesto: 8263,
    imagen: require("@/assets/maquillaje/jabint.png"),
    descripcion: "Con pH balanceado para proteger la zona íntima, previene irritaciones y olores para brindarte confianza y frescura diaria."
  }, 
  {
    nombre: "Acondicionador Sémplice Original",
    medida: "300ml",
    precio: 14999,
    precioOferta: 9999,
    precioImpuesto: 8263,
    imagen: require("@/assets/maquillaje/acon.png"),
    descripcion: "Formulado para devolver la suavidad y restaurar el cabello dañado, este acondicionador fortalece la fibra capilar desde el interior, ayudando a prevenir el quiebre y a mantener el cabello saludable y nutrido."
  }, 
  {
    nombre: "Crema para peinar",
    medida: "150ml",
    precio: 9999,
    precioOferta: 6999,
    precioImpuesto: 5784,
    imagen: require("@/assets/maquillaje/peinar.png"),
    descripcion: "¡Es el momento de proteger tu pelo! El sol, la sal, el agua y la arena resecan y dañan la fibra capilar. Cuidá tu pelo en verano y lucilo sano y brillante todo el año. La crema de peinar contiene: Pantenol: ayuda a retener la hidratación Keratina Hidrolizada: mejora la fuerza y suavidad de la fibra capilar Extracto de Maracuyá: aporta un acabado sedoso y liviano"
  }, 
  {
    nombre: "Crema Corporal Blush",
    medida: "300ml",
    precio: 19999,
    precioOferta: 15999,
    precioImpuesto: 13222,
    imagen: require("@/assets/maquillaje/ccb.png"),
    descripcion: "Cuidado e hidratación las 24 hs con ingredientes naturales que estimulan la regeneración. Tu crema para una piel suave y tersa, con un delicado aroma."
  }, 
  {
    nombre: "Crema Corporal Exotic",
    medida: "300ml",
    precio: 19999,
    precioOferta: 15999,
    precioImpuesto: 13222,
    imagen: require("@/assets/maquillaje/cce.png"),
    descripcion: "Hidratación y renovación con aceite de jojoba, dejando la piel radiante y perfumada con un toque cítrico y fresco."
  }, 
  {
    nombre: "Crema Corporal Glow",
    medida: "300ml",
    precio: 19999,
    precioOferta: 15999,
    precioImpuesto: 13222,
    imagen: require("@/assets/maquillaje/ccg.png"),
    descripcion: "Hidrata y alivia la piel seca al instante, gracias a su fórmula con hidromanyl, un activo hidratante vegetal con efecto inmediato y acumulativo que mejora su aspecto dejándola suave y luminosa."
  }, 
  {
    nombre: "Crema Corporal Hidratante",
    medida: "300ml",
    precio: 19999,
    precioOferta: 15999,
    precioImpuesto: 13222,
    imagen: require("@/assets/maquillaje/cch.png"),
    descripcion: "Hidrata y regenera tu piel las 24 hs con ingredientes naturales. Una crema indispensable para mantenerla suave y saludable."
  }, 
  {
    nombre: "Emulsión Corporal Cream",
    medida: "300ml",
    precio: 19999,
    precioOferta: 15999,
    precioImpuesto: 13222,
    imagen: require("@/assets/maquillaje/ccc.png"),
    descripcion: "Textura ligera y notas dulces que penetran con facilidad, dejando tu piel fresca, hidratada y perfumada con una fragancia exquisita."
  }, 
  {
    nombre: "Crema Corporal Exfoliante",
    medida: "300ml",
    precio: 21999,
    precioOferta: 16999,
    precioImpuesto: 14048,
    imagen: require("@/assets/maquillaje/exo.png"),
    descripcion: "Formulada con ingredientes naturales que cuidan y estimulan la regeneración de la piel las 24 horas, esta crema exfoliante se convierte en tu aliada para lucir una piel suave, tersa y radiante. Sus suaves partículas ayudan a eliminar las células muertas. Tu piel queda limpia y preparada para una profunda hidratación."
  }, 
  {
    nombre: "Exfoliante Corporal Blush",
    medida: "300ml",
   precio: 21999,
    precioOferta: 16999,
    precioImpuesto: 14048,
    imagen: require("@/assets/maquillaje/exob.png"),
    descripcion: "Su fórmula exclusiva con microperlas de jojoba ofrece una exfoliación suave pero efectiva, eliminando impurezas y células muertas sin agredir la piel. Al mismo tiempo, hidrata en profundidad y deja la piel visiblemente más suave, luminosa y renovada. Su delicado aroma Blush envuelve los sentidos, dejando un sutil perfume en la piel incluso después del enjuague."
  }, 
  {
    nombre: "Crema de Manos Blush",
    medida: "60ml",
    precio: 7999,
    precioOferta: 5999,
    precioImpuesto: 4957,
    imagen: require("@/assets/maquillaje/manob.png"),
    descripcion: "Textura liviana y aroma fresco para el cuidado diario de tus manos."
  }, 
  {
    nombre: "Crema de Manos Original",
    medida: "60ml",
    precio: 7999,
    precioOferta: 5999,
    precioImpuesto: 4957,
    imagen: require("@/assets/maquillaje/manoe.png"),
    descripcion: "Promueve una hidratación inmediata y prolongada en tus manos. De textura cremosa y absorción rápida, aplicala para dejar la piel suave y delicadamente perfumada."
  }, 
  {
    nombre: "Espuma Facial de Limpieza",
    medida: "150ml",
    precio: 14999,
    precioOferta: 11999,
    precioImpuesto: 9916,
    imagen: require("@/assets/maquillaje/espuma.png"),
    descripcion: "El poder limpiador de una espuma ligera con la humectación avanzada de Hydraskin y la calma del Aloe Vera. Hydraskin: complejo humectante de acción prolongada que mantiene la piel hidratada y flexible. Aloe Vera: aporta frescura, calma y suavidad, reduciendo la sensación de tirantez. -Limpieza eficaz que elimina impurezas y restos de maquillaje. -Hidratación profunda gracias a la tecnología Hydraskin. -Propiedades calmantes y suavizantes del Aloe Vera. -Textura en espuma ligera, fácil  de aplicar y de enjuagar. -Fórmula delicada, apta para piel seca o sensible."
  }, 
  {
    nombre: "Serum Facial Con Golden Milk",
    medida: "30ml",
    precio: 23999,
    precioOferta: 13999,
    precioImpuesto: 11569,
    imagen: require("@/assets/maquillaje/sf.png"),
    descripcion: "Un aliado nocturno para una piel más firme y elástica. Disminuye las bolsas bajo los ojos, mejora la elasticidad y atenúa los signos de envejecimiento, mientras tu piel descansa. Golden Milk es un activo 100% vegetal que actúa como protector celular frente a la inflamación crónica de la piel."
  }, 
  {
    nombre: "Serum Facial con Hymagic e Hialubot",
    medida: "30ml",
    precio: 23999,
    precioOferta: 13999,
    precioImpuesto: 11569,
    imagen: require("@/assets/maquillaje/sh.png"),
    descripcion: "Hidrata en profundidad y combate los signos del envejecimiento con una fórmula avanzada rica en aminoácidos y extracto de Camellia Sinensis. Refuerza la barrera de la piel, nutre y la deja suave, elástica y protegida. Hymagic 4D, una combinación de cuatro tipos de hialuronato de sodio con diferentes propiedades, actúa formando una red tridimensional que se dirige con precisión a las distintas capas de la piel. Así, repone el agua desde el exterior y retiene la humedad desde el interior, logrando una hidratación completa y mejorando la elasticidad directamente desde dentro. El Hialubot ayuda a proteger del fotoenvejecimiento, hidrata profundamente y energiza la piel."
  }, 
  {
    nombre: "Serum Facial Con LumiGlow",
    medida: "30ml",
    precio: 23999,
    precioOferta: 13999,
    precioImpuesto: 11569,
    imagen: require("@/assets/maquillaje/sl.png"),
    descripcion: "Iluminá tu rostro con el poder antioxidante del maqui, un berry patagónico excepcional. Reduce la irritación, unifica el tono, ilumina la piel y potencia hasta las pieles más sensibles con un efecto glowing."
  }, 
  {
    nombre: "Serum Facial con Oleobiota ",
    medida: "30ml",
    precio: 23999,
    precioOferta: 13999,
    precioImpuesto: 11569,
    imagen: require("@/assets/maquillaje/so.png"),
    descripcion: "Equilibra y matifica las pieles mixtas y grasas. Su activo de la selva misionera modula la microbiota cutánea, reduce la oleosidad y deja la piel limpia y saludable."
  }, 
  {
    nombre: "Serum Facial con Bakuchiol",
    medida: "30ml",
    precio: 23999,
    precioOferta: 13999,
    precioImpuesto: 11569,
    imagen: require("@/assets/maquillaje/sb.png"),
    descripcion: "Descubrí el poder del Bakuchiol, la alternativa vegetal del retinol, un aliado esencial para una piel más firme, luminosa y saludable. Principales beneficios: - Antiarrugas y líneas de expresión: atenúa los signos de envejecimiento. - Un tono más uniforme: reduce manchas y mejora la luminosidad. - Suavidad y textura: mejora la firmeza y la elasticidad de la piel."
  },
   {
     nombre: "Repuesto - Serum Facial con Lumiglow ",
    medida: "30ml",
    precio: 16999,
    precioOferta: 7999,
    precioImpuesto: 6610,
    imagen: require("@/assets/maquillaje/rs.png"),
    descripcion: "Reavivá la luminosidad de tu piel con este activo natural. Su potente efecto antioxidante reduce la irritación, ilumina y unifica el tono mientras protege hasta las pieles más delicadas."
  }, 
   {
     nombre: "Repuesto - Serum Facial con Oleobiota ",
    medida: "30ml",
    precio: 16999,
    precioOferta: 7999,
    precioImpuesto: 6610,
    imagen: require("@/assets/maquillaje/ro.png"),
    descripcion: "Para una piel más equilibrada y limpia, este activo natural matifica, reduce la oleosidad y mejora visiblemente la textura de las pieles mixtas y grasas."
  }, 
   {
     nombre: "Repuesto - Serum Facial con Golden Milk",
    medida: "30ml",
    precio: 16999,
    precioOferta: 7999,
    precioImpuesto: 6610,
    imagen: require("@/assets/maquillaje/rg.png"),
    descripcion: "Concentrado 100% vegetal que disminuye bolsas y ojeras, favorece la elasticidad y combate los signos de envejecimiento gracias a la sinergia de cúrcuma, pimienta negra y azafrán. Golden Milk es un activo 100% vegetal que actúa como protector celular frente a la inflamación crónica de la piel."
  }, 
   {
     nombre: "Repuesto - Serum Facial con Hymagic e Hialubot",
    medida: "30ml",
    precio: 16999,
    precioOferta: 7999,
    precioImpuesto: 6610,
    imagen: require("@/assets/maquillaje/rh.png"),
    descripcion: "Hidrata en profundidad y combate los signos del envejecimiento con una fórmula avanzada rica en aminoácidos y extracto de Camellia Sinensis. Refuerza la barrera de la piel, nutre y la deja suave, elástica y protegida. Hymagic 4D, una combinación de cuatro tipos de hialuronato de sodio con diferentes propiedades, actúa formando una red tridimensional que se dirige con precisión a las distintas capas de la piel. Así, repone el agua desde el exterior y retiene la humedad desde el interior, logrando una hidratación completa y mejorando la elasticidad directamente desde dentro. El Hialubot ayuda a proteger del fotoenvejecimiento, hidrata profundamente y energiza la piel."
  }, 
  {
    nombre: "Protector Solar Facial",
    medida: "50g",
    precio: 22999,
    precioOferta: 17999,
    precioImpuesto: 14875,
    imagen: require("@/assets/maquillaje/ps.png"),
    descripcion: "Protegé tu piel todos los días con este protector solar facial de amplio espectro. Su alto factor de protección FPS 50 ayuda a prevenir los daños causados por los rayos UVB y UVA, principales responsables del envejecimiento prematuro, las manchas y las quemaduras solares. Además, está enriquecido con ácido hialurónico, que aporta hidratación para mantener la piel suave y saludable. Su fórmula liviana lo hace ideal para todo tipo de piel."
  },  
  {
    nombre: "Autobronceante",
    medida: "95g",
    precio: 15999,
    precioOferta: 12999,
    precioImpuesto: 10742,
    imagen: require("@/assets/maquillaje/ab.png"),
    descripcion: "Lográ un bronceado uniforme y natural sin necesidad de exponerte al sol. Esta emulsión hidratante deja tu piel con un tono dorado, parejo y duradero, mientras la cuida y mantiene suave. Ideal para lucir un color veraniego todo el año, sin dañar la piel con los rayos solares."
  },  
  {
    nombre: "Crema Facial con Golden Milk y Niacinamida",
    medida: "50ml",
    precio: 23999,
    precioOferta: 16999,
    precioImpuesto: 14048,
    imagen: require("@/assets/maquillaje/cg.png"),
    descripcion: "Crema facial con efecto antiage que favorece la elasticidad de la piel y disminuye los signos de envejecimiento. Golden Milk: activo vegetal obtenido de la cúrcuma, la pimienta negra y las flores de azafrán, disminuye las causas del envejecimiento prematuro. Niacinamida: beneficia la disminución de manchas y da más luminosidad y un tono uniforme más visible."
  },  
  {
    nombre: "Crema Facial con Hymagic e Hialubot",
    medida: "50ml",
    precio: 23999,
    precioOferta: 16999,
    precioImpuesto: 14048,
    imagen: require("@/assets/maquillaje/ch.png"),
    descripcion: "Devuelve los niveles de agua en las diferentes capas de la piel de manera instantánea. Mejora la función barrera frente a los daños externos. Tiene propiedades nutritivas y protectoras, dejando la piel suave, elástica y saludable. Hymagic 4D, una combinación de cuatro tipos de hialuronato de sodio con diferentes propiedades, actúa formando una red tridimensional que se dirige con precisión a las distintas capas de la piel. Así, repone el agua desde el exterior y retiene la humedad desde el interior, logrando una hidratación completa y mejorando la elasticidad directamente desde dentro. El Hialubot ayuda a proteger del fotoenvejecimiento, hidrata profundamente y energiza la piel."
  },  
  {
    nombre: "Crema Facial con Bakuchiol",
    medida: "50ml",
    precio: 23999,
    precioOferta: 16999,
    precioImpuesto: 14048,
    imagen: require("@/assets/maquillaje/cb.png"),
    descripcion: "BAKUCHIOL, EL SECRETO PARA UNA PIEL RADIANTE. Descubrí el poder del Bakuchiol, la alternativa vegetal del retinol, un aliado esencial para una piel más firme, luminosa y saludable. - Mejora la elasticidad y la firmeza. - Ilumina y unifica el tono de la piel. - Atenúa arrugas y líneas de expresión, sin irritar. - Clínica y dermatológicamente testeada. Sometida a pruebas de hipoalergenicidad."
  },  
  {
    nombre: "Crema Facial con Lumiglow y Linfaven",
    medida: "50ml",
    precio: 23999,
    precioOferta: 16999,
    precioImpuesto: 14048,
    imagen: require("@/assets/maquillaje/cl.png"),
    descripcion: "Crema facial con efecto glowing, ayuda a lograr un tono uniforme y aumenta la luminosidad natural de la piel. Lumiglow: es un activo que se obtiene del maqui, fruto de origen patagónico cuyo principal beneficio es el gran poder antioxidante. Linfaven: brinda efecto descongestivo, estimula la eliminación de impurezas y da más firmeza a la piel."
  },  
  {
    nombre: " ",
    medida: "30ml",
    precio: 20999,
    precioOferta: 14999,
    precioImpuesto: 13395,
    imagen: require("@/assets/maquillaje/.png"),
    descripcion: ""
  },  
]

export const skincare = baseSkincare.map((p, index) => ({
  ...p,
  tipo: "skincare",
  id: `skincare-${index + 1}`,
  slug: slugify(p.nombre, { lower: true })
}))
