// Importa la variable de entorno
const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://limpiezainteligente.store';

export function withDomain(slug) {
  if (!slug) return '';
  return SITE_URL.replace(/\/$/, '') + (slug.startsWith('/') ? slug : '/' + slug);
}

export const marcas = [
    {
        id: 1,
        slug: withDomain("/cecotec/"),
        name:"Cecotec",
        title: "Robots Aspirador Friegasuelos Cecotec | Conga: Limpieza Inteligente",
        image: withDomain("/robot-cecotec.webp"),
        thubnail: withDomain("/robot-cecotec.webp"),
        description: "Conga de Cecotec: aspira y friega con tecnología avanzada. Limpieza fácil y eficiente para tu hogar."
    },
    {
        id: 2,
        slug: withDomain("/irobot/"),
        name:"iRobot",
        title: "iRobot: Dominando la Limpieza del Hogar",
        image: withDomain("/robot-roomba.webp"),
        thubnail: withDomain("/robot-roomba.webp"),
        description: "iRobot: la solución definitiva para aspirar y fregar. Limpieza autónoma, eficiente y profunda con la gama Roomba y más.",
        subitems: [
            {
                id: 3,
                slug: withDomain("/irobot/roomba/"),
                name: "Roomba",
                title: "Roomba Aspirador | iRobot Roomba: Limpieza Definitiva",
                image: withDomain("/robot-roomba.webp"),
                thubnail: withDomain("/robot-roomba.webp"),
                description: "Roomba: aspirado profesional ideal para quienes buscan comodidad y resultados."
            },
            {
                id: 4,
                slug: withDomain("/irobot/braava/"),
                name: "Braava",
                title: "Domina la Limpieza con iRobot Braava: La Revolución en Fregado Inteligente",
                image: withDomain("/robot-roomba.webp"),
                thubnail: withDomain("/robot-roomba.webp"),
                description: "Descubre la eficiencia y tecnología avanzada de iRobot Braava para un fregado inteligente y resultados profesionales en tu hogar."
            },
            {
                id: 5,
                slug: withDomain("/irobot/roomba-combo/"),
                name: "Roomba Combo",
                title: "Domina la Limpieza con iRobot Roomba Combo: La Revolución en Apsirado y Fregado Inteligente",
                image: withDomain("/robot-roomba.webp"),
                thubnail: withDomain("/robot-roomba.webp"),
                description: "Descubre la eficiencia y tecnología avanzada de iRobot Roomba Combo para un fregado inteligente y resultados profesionales en tu hogar."
            }
        ]
    },
    {
        id: 6,
        slug: withDomain("/xiaomi/"),
        name:"Xiaomi",
        title: "Robot Aspirador Friegasuelos Xiaomi | Mi Robot Vacuum: Limpieza Inteligente",
        image: withDomain("/robot-xiaomi.webp"),
        thubnail: withDomain("/robot-xiaomi.webp"),
        description: "Xiaomi Mi Robot Vacuum: limpia y friega con precisión. Tecnología y buen precio para tu día a día."
    }
    // Puedes añadir más categorías aquí
];

export const tiposSuelo = [
    {
        slug: withDomain("/suelo-laminado/"),
        title: "Para suelos laminado",
        image: withDomain("/para-laminado.webp"),
        thubnail: withDomain("/para-laminado.webp"),
        description: "El suelo laminado requiere limpieza delicada y control de humedad para evitar daños y mantener su brillo."
    },
    {
        slug: withDomain("/suelo-madera/"),
        title: "Para pisos de madera",
        image: withDomain("/para-madera.webp"),
        thubnail: withDomain("/para-madera.webp"),
        description: "La madera necesita cuidado especial: limpieza suave, mínima humedad y protección contra arañazos."
    },
    {
        slug: withDomain("/suelo-marmol/"),
        title: "Para marmol y piedra",
        image: withDomain("/para-marmol.png"),
        thubnail: withDomain("/para-marmol.png"),
        description: "El mármol y la piedra requieren limpieza frecuente, productos neutros y evitar exceso de agua para conservar su elegancia."
    },
    {
        slug: withDomain("/para-alfombras/"),
        title: "Para Alfombras",
        image: withDomain("/para-alfombras.webp"),
        thubnail: withDomain("/para-alfombras.webp"),
        description: "Las alfombras necesitan aspirado profundo y regular para eliminar polvo, pelos y alérgenos incrustados."
    }
];

export const amazonProduts = [
  {
  "id": 2,
  "title": "Xiaomi Robot Vacuum e12, Robot Aspirador y Fregasuelos",
  "slug": null,
  "urlAfiliado": "https://amzn.to/3GueVAL",
  "imageIds": [],
  "stars": 3.6,
  "ratingCount": 365,
  "marca": 6,
  "modelo": "Xiaomi Vacuum e12",
  "precio": 85,
  "moneda": "eur",
  "feactures": {
    "potenciaSuccion": "4000 Pa",
    "navegacion": "Láser LDS",
    "funciones": "Planificación Inteligente, Aspira y friega simultáneamente, Control por voz, Compatible con Mi Home App, Mapeo Láser LDS",
    "autonomia": "110 minutos",
    "superficies": "Todo tipo de suelos y alfombras",
    "color": "Blanco",
    "dimensiones": "35,0 x 35,0 x 9,45 cm",
    "capacidad": "",
    "voltaje": "14.8V",
    "apagadoAutomatico": true,
    "peso": "4,8 kg",
    "depositoPolvo": "300 ml",
    "depositoAgua": "170 ml"
  }
},
  {
    "id": 3,
    "title": "Xiaomi Robot Vacuum S10, Robot Aspirador y Fregasuelos",
    "slug": null,
    "urlAfiliado": "https://amzn.to/4kmz4GM",
    "imageIds": [101, 102, 103],
    "stars": 4,
    "ratingCount": 146,
    "marca": 6,
    "modelo": "Xiaomi Vacuum S10",
    "precio": 159.99,
    "moneda": "eur",
    "feactures": {
        "potenciaSuccion": "5500 Pa",
        "navegacion": "Láser 3D",
        "funciones": "Planificación Inteligente, Aspira y friega simultáneamente, Control por voz, Compatible con Mi Home App, Mapeo Láser 3D",
        "autonomia": "150 minutos",
        "superficies": "Todo tipo de suelos y alfombras",
        "color": "Blanco",
        "dimensiones": "34,7 x 34,7 x 9,6 cm; 3,4 kg",
        "capacidad": "",
        "voltaje": "",
        "apagadoAutomatico": true,
        "dispositivosCompatibles": "Smartphones, Alexa, Google Assistant",
        "peso": "3,4 kg",
        "depositoPolvo": "400 ml",
        "depositoAgua": "270 ml"
    }
},
    {
    id: 4,
    title: "Xiaomi Robot Vacuum S20 Robot Aspirador y Fregasuelos",
    slug: withDomain("/xiaomi/vacuum-s20/"),
    urlAfiliado: "https://amzn.to/3ZzFU4q", // Cambia la URL si tienes la de afiliado
    imageIds: [101,102,103],
    stars: 4.3, // Puedes actualizar si tienes el dato
    ratingCount: 3896, // Puedes actualizar si tienes el dato
    marca: 6, // id de la marca Xiaomi
    modelo: "Xiaomi Vacuum S20",
    precio: 139.99,
    momeda:"eur", // Precio en euros
    feactures: {
        potenciaSuccion: "5000 Pa",
        navegacion:"laser",
        funciones: "Acoplamiento automático, Navegación lógica, Mapeo inteligente, Mapeo y navegación láser de precisión, Aspira y friega simultáneamente",
        autonomia: "150 minutos",
        superficies:"Todo tipo de suelos y alfombras",
        color: "Blanco",
        dimensiones: "47 x 38,7 x 15,3 cm; 3,3 kg",
        capacidad: "400 Mililitros",
        voltaje: "20 Voltios",
        apagadoAutomatico: true,
        dispositivosCompatibles: "Smartphones",
        peso: "3,3 kg",
        depositoPolvo: "400 ml",
        depositoAgua: "270 ml"
    }
    },
    {
      id: 5,
      title: "Cecotec Conga 8490 Ultimate Ultra Power",
      slug: withDomain("/cecotec/conga-8490-ultimate-ultra-power/"),
      urlAfiliado: "https://amzn.to/3ZxvsKN",
      imageIds: [201,202,203],
      stars: 3.9,
      ratingCount: 950,
      marca: 1, // id de Cecotec
      modelo: "Conga 8490 Ultimate Ultra Power",
      precio: 167.65,
      momeda: "eur",
      feactures: {
        potenciaSuccion: "7000 Pa",
        navegacion: "Láser",
        funciones: "Barre, aspira, friega y pasa la mopa",
        autonomia: "170 min",
        superficies: "Todo tipo de suelos y alfombras",
        cepillo: "Central de silicona",
        app: true,
        roomPlan: true,
        totalSurface: true,
        bateria: "3200 mAh",
        deposito: "Autovaciado"
      }
    },
    {
      id: 6,
      title: "Conga 999 Map X-Treme",
      slug: withDomain("/cecotec/conga-999-map-x-treme/"),
      urlAfiliado: "https://amzn.to/460vsXs", // Añadir URL de afiliado si la tienes
      imageIds: [301, 302, 303],
      stars: 3.9,
      ratingCount: 2920,
      marca: 1, // id de Cecotec
      modelo: "Conga 999 Map X-Treme",
      precio: 99.00, // Añadir precio si lo tienes
      momeda: "eur",
      feactures: {
        potenciaSuccion: "2000 Pa",
        navegacion:"iTech 3.0 giroscópica",
        funciones: "Barre, aspira, pasa la mopa, friega y seca la superficie",
        autonomia: "120 minutos",
        superficies: "Todo tipo de suelos y alfombras",
        color: "Conga 999 Map | 2 Mopas",
        funcionEspecial: "inalámbrico",
        dimensiones: "31,5L x 31,5an. x 7,5al. centímetros",
        componentes: "1 x Robot Aspirador; 2 x Cepillos laterales; 1 x Cepillo de autolimpieza; 1 x Depósito mixto; 1 x Filtro de alta eficiencia; 1 x Mando a distancia; 2 x Mopa de fregado",
        tipoFiltro: "Filtro de alta eficiencia",
        fuenteAlimentacion: "Batería",
        pilasIncluidas: true,
        totalSurface: true,
        autoCharge: true,
        tecnologia: "iTech SmartGyro",
        controlApp: true,
        conectividad: "WiFi 2,4 GHz y Bluetooth",
        mopasCepillos: "2 mopas de fregado y 2 cepillos laterales",
        iWater: "Fregado inteligente con 3 niveles de caudal de agua (High, Medium y Low)"
      }
    },
    {
      id: 7,
      title: "iRobot Roomba Combo Essential",
      slug: withDomain("/irobot/roomba-combo/roomba-combo-essential/"),
      urlAfiliado: "https://amzn.to/4ejQJ0E", // URL de afiliado no proporcionada
      imageIds: [104, 105, 106],
      stars: 3.9,
      ratingCount: 11697,
      marca: 5, // id de la marca iRobot
      modelo: "iRobot Roomba Combo Essentia",
      precio: 149.00, // Precio no proporcionado
      momeda: "eur", // Moneda no proporcionada
      feactures: {
        potenciaSuccion: "4000 Pa", // Potencia de succión no proporcionada
        navegacion: "Smart Navigation", // Navegación no proporcionada
        funciones: "Control de succión variable, Húmedo/Seco, Navegación habitación por habitación, Programable, Aspiración y limpieza simultáneas",
        autonomia: "2 Horas",
        superficies: "Suelo duro, alfombra",
        color: "Blanco",
        dimensiones: "33l. x 33an. x 8al. centímetros",
        componentes: "Filtro, Manual de instrucciones, Cepillos laterales, Almohadilla de mopa, Estación de acoplamiento",
        tipoFiltro: "Cartucho",
        fuenteAlimentacion: "Litio Ion",
        pilasIncluidas: false,
        metodoControl: "Voz, Aplicación, Toque",
        dispositivosCompatibles: "Smartphones, Amazon Echo, Tablets, Google Home",
        factorForma: "Portátil",
        peso: "2,8 Kilogramos"
      }
    },
    {
      id: 8,
      title: "Cecotec Conga 13090 Spin Revolution Home&Wash Essential",
      slug: withDomain("/cecotec/conga-13090-spin-revolution-home-wash-essential/"),
      urlAfiliado: "https://amzn.to/45BmPm6",
      imageIds: [107,108,109],
      stars: 3.9,
      ratingCount: 96,
      marca: 1, // id de la marca Cecotec (no proporcionado)
      modelo: "Conga 13090 Spin Revolution Home&Wash Essential",
      precio: 490, // Precio no proporcionado
      moneda: "eur", // Moneda no proporcionada
      feactures: {
        potenciaSuccion: "7000pa", // Potencia no proporcionada
        navegacion: "Mapeo y navegación láser de precisión",
        funciones: "Control de aplicaciones",
        autonomia: "140 minutos", // Autonomía no proporcionada
        superficies: "alfombra, madera dura, azulejos",
        color: "Conga 13090 | Autovaciado | Mopas",
        dimensiones: "35L x 34an. x 11al. centímetros",
        componentes: "Robot aspirador, Base de autovaciado con 2 tanques (agua limpia y agua sucia), Bolsa de polvo, Cepillo lateral, 2 Mopas giratorias, Cable de alimentación, Cepillo, Manual de instrucciones",
        tipofiltro: "Cartucho",
        fuenteAlimentacion: "Batería (Litio Ion)",
        pilsIncluidas: true,
        metodoControl: "Aplicación",
        dispositivosCompatibles: "Smartphones",
        factorForma: "Robótico",
        peso: "11,2 Kilogramos",
        altura: "47,5 centímetros",
        anchoRutaLimpieza: "34 Centímetros",
        duracionPiezasRecambio: "10 Años"
      }
    },
    {
    "id": 9,
    "title": "iRobot Roomba j7 Robot Aspirador",
    "slug": null,
    "urlAfiliado": "https://amzn.to/44gLvPU",
    "imageIds": [1001, 1002, 1003],
    "stars": 3.4,
    "ratingCount": 70,
    "marca": 4,
    "modelo": "Roomba j7",
    "precio": 200.77,
    "moneda": "usd",
    "feactures": {
      "potenciaSuccion": "Superior (no Pa especificado por iRobot)",
      "navegacion": "Imprint® Smart Mapping con PrecisionVision™",
      "funciones": "Evitación de obstáculos (cables, excrementos), Mapeo inteligente, Limpieza por zonas, Zonas de exclusión, Sugerencias de limpieza, Compatible con voz",
      "autonomia": "Hasta 75 minutos",
      "superficies": "Todo tipo de suelos",
      "color": "Negro",
      "dimensiones": "33.8 cm diámetro x 8.7 cm altura",
      "capacidad": "No especificado (depósito de polvo)",
      "voltaje": "No especificado",
      "apagadoAutomatico": true,
      "dispositivosCompatibles": "Smartphones, Google Assistant, Alexa",
      "peso": "3.4 kg",
      "depositoPolvo": "Estándar (volumen no especificado)",
      "depositoAgua": ""
    }
  },
  {
    "id": 10,
    "title": "iRobot Roomba j7+ Robot Aspirador con Vaciado Automático",
    "slug": null,
    "urlAfiliado": "https://amzn.to/44gLvPU",
    "imageIds": [1004, 1005, 1006],
    "stars": 3.2,
    "ratingCount": 141,
    "marca": 4,
    "modelo": "Roomba j7+",
    "precio": 258.77,
    "moneda": "usd",
    "feactures": {
      "potenciaSuccion": "Superior (no Pa especificado por iRobot)",
      "navegacion": "Imprint® Smart Mapping con PrecisionVision™",
      "funciones": "Vaciado automático Clean Base®, Evitación de obstáculos (cables, excrementos), Mapeo inteligente, Limpieza por zonas, Zonas de exclusión, Sugerencias de limpieza, Compatible con voz",
      "autonomia": "Hasta 75 minutos",
      "superficies": "Todo tipo de suelos",
      "color": "Negro",
      "dimensiones": "Robot: 33.8 cm diámetro x 8.7 cm altura; Clean Base: 48.3 cm alto x 30.5 cm ancho x 38.6 cm profundo",
      "capacidad": "60 días de suciedad en Clean Base",
      "voltaje": "No especificado",
      "apagadoAutomatico": true,
      "dispositivosCompatibles": "Smartphones, Google Assistant, Alexa",
      "peso": "Robot: 3.4 kg; Clean Base: No especificado",
      "depositoPolvo": "Estándar (volumen no especificado)",
      "depositoAgua": ""
    }
  },
  {
    "id": 11,
    "title": "iRobot Roomba Vac 105 Robot Aspirador",
    "slug": null,
    "urlAfiliado": "https://amzn.to/4ky1Rsk",
    "imageIds": [2001, 2002, 2003],
    "stars": 4,
    "ratingCount": 365,
    "marca": 4,
    "modelo": "Roomba Vac 105",
    "precio": 160.55,
    "moneda": "eur",
    "feactures": {
      "potenciaSuccion": "Básica (no Pa especificado)",
      "navegacion": "Adaptable (no mapeo inteligente)",
      "funciones": "Sistema de limpieza de 3 etapas, Dirt Detect™ (primera gen.), Spot Clean, Detección de desniveles",
      "autonomia": "Hasta 60 minutos",
      "superficies": "Todo tipo de suelos",
      "color": "Gris/Negro",
      "dimensiones": "Aproximadamente 34 cm diámetro x 9 cm altura",
      "capacidad": "No especificado (depósito de polvo)",
      "voltaje": "No especificado",
      "apagadoAutomatico": true,
      "dispositivosCompatibles": "No aplica (sin conectividad)",
      "peso": "3 kg",
      "depositoPolvo": "Pequeño",
      "depositoAgua": ""
    }
  },
  {
    "id": 11,
    "title": "iRobot Roomba Vac 505 Robot Aspirador",
    "slug": null,
    "urlAfiliado": "https://amzn.to/3Igq5JX",
    "imageIds": [2004, 2005, 2006],
    "stars": 3.8,
    "ratingCount": 198,
    "marca": 4,
    "modelo": "roomba vac 505",
    "precio": 549.00,
    "moneda": "usd",
    "feactures": {
      "potenciaSuccion": "Básica (no Pa especificado)",
      "navegacion": "Adaptable (no mapeo inteligente)",
      "funciones": "Sistema de limpieza de 3 etapas, Dirt Detect™ (primera gen.), Spot Clean, Detección de desniveles",
      "autonomia": "Hasta 60-75 minutos",
      "superficies": "Todo tipo de suelos",
      "color": "Gris/Negro",
      "dimensiones": "Aproximadamente 34 cm diámetro x 9 cm altura",
      "capacidad": "No especificado (depósito de polvo)",
      "voltaje": "No especificado",
      "apagadoAutomatico": true,
      "dispositivosCompatibles": "No aplica (sin conectividad)",
      "peso": "3 kg",
      "depositoPolvo": "Pequeño",
      "depositoAgua": ""
    }
  },
];

// Imágenes optimizadas por producto (id, 250x250, 60x60, 1280x720)
export const productImages = [
  {
    id: 101,
    "250x250": "https://m.media-amazon.com/images/I/51xaJeszmPL._AC_SX679_.jpg",
    "60x60": "https://m.media-amazon.com/images/I/51xaJeszmPL._AC_US100_.jpg",
    "1280x720": "https://m.media-amazon.com/images/I/51xaJeszmPL._AC_.jpg"
  },
  {
    id: 102,
    "250x250": "https://m.media-amazon.com/images/I/51ipYfoZovL._AC_SX679_.jpg",
    "60x60": "https://m.media-amazon.com/images/I/31tALzIJ51L._AC_US100_.jpg",
    "1280x720": "https://m.media-amazon.com/images/I/51ipYfoZovL._AC_SL1000_.jpg"
  },
  {
    id: 103,
    "250x250": "https://m.media-amazon.com/images/I/51+kbKHpOVL._AC_SX679_.jpg",
    "60x60": "https://m.media-amazon.com/images/I/41Xd082HiNL._AC_US100_.jpg",
    "1280x720": "https://m.media-amazon.com/images/I/51+kbKHpOVL._AC_SL1000_.jpg"
  },
  {
    id: 201,
    "250x250": "https://m.media-amazon.com/images/I/81A+D-OxDiL._AC_SX522_.jpg",
    "60x60": "https://m.media-amazon.com/images/I/51o6RO7BvoL._AC_SR38,50_.jpg",
    "1280x720": "https://m.media-amazon.com/images/I/81A+D-OxDiL._AC_SL1500_.jpg"
  },
  {
    id: 202,
    "250x250": "https://m.media-amazon.com/images/I/61Atw2OsHFL._AC_SX522_.jpg",
    "60x60": "https://m.media-amazon.com/images/I/51lT6DxQecL._AC_SR38,50_.jpg",
    "1280x720": "https://m.media-amazon.com/images/I/61Atw2OsHFL._AC_SL1000_.jpg"
  },
  {
    id: 203,
    "250x250": "https://m.media-amazon.com/images/I/61OEayxvbiL._AC_SX522_.jpg",
    "60x60": "https://m.media-amazon.com/images/I/51TP6nnqMTL._AC_SR38,50_.jpg",
    "1280x720": "https://m.media-amazon.com/images/I/61OEayxvbiL._AC_SL1000_.jpg"
  },
  {
    id: 301,
    "250x250": "https://m.media-amazon.com/images/I/91aX9IcU1aL._AC_SX522_.jpg",
    "60x60": "https://m.media-amazon.com/images/I/51GBuG08aKL._AC_SR38,50_.jpg",
    "1280x720": "https://m.media-amazon.com/images/I/91aX9IcU1aL._AC_SL1500_.jpg"
  },
  {
    id: 302,
    "250x250": "https://m.media-amazon.com/images/I/6112LH9IOFL._AC_SX425_.jpg",
    "60x60": "https://m.media-amazon.com/images/I/51URDQKaRdL._AC_SR38,50_.jpg",
    "1280x720": "https://m.media-amazon.com/images/I/6112LH9IOFL._AC_SL1000_.jpg"
  },
  {
    id: 303,
    "250x250": "https://m.media-amazon.com/images/I/61y-irdlylL._AC_SX425_.jpg",
    "60x60": "https://m.media-amazon.com/images/I/417KJNZ7gXL._AC_SR38,50_.jpg",
    "1280x720": "https://m.media-amazon.com/images/I/61y-irdlylL._AC_SL1000_.jpg"
  },
  {
    id: 104,
    "250x250": "https://m.media-amazon.com/images/I/713AuD2N13L._AC_SX679_.jpg",
    "60x60": "https://m.media-amazon.com/images/I/31u20aOyYIL._AC_US100_.jpg",
    "1280x720": "https://m.media-amazon.com/images/I/713AuD2N13L._AC_SL1500_.jpg"
  },
  {
    id: 105,
    "250x250": "https://m.media-amazon.com/images/I/81YrikQhKSL._AC_SX679_.jpg",
    "60x60": "https://m.media-amazon.com/images/I/51wdXmYq5mL._AC_US100_.jpg",
    "1280x720": "https://m.media-amazon.com/images/I/81YrikQhKSL._AC_SL1500_.jpg"
  },
  {
    id: 106,
    "250x250": "https://m.media-amazon.com/images/I/71yIHpYcUxL._AC_SX679_.jpg",
    "60x60": "https://m.media-amazon.com/images/I/51wD4Z4K76L._AC_US100_.jpg",
    "1280x720": "https://m.media-amazon.com/images/I/71yIHpYcUxL._AC_SL1500_.jpg"
  },
  {
  "id": 107,
  "250x250": "https://m.media-amazon.com/images/I/813EzCgPieL._AC_SX679_.jpg",
  "60x60": "https://m.media-amazon.com/images/I/51fxB8QPQ0L._AC_US100_.jpg",
  "1280x720": "https://m.media-amazon.com/images/I/813EzCgPieL._AC_SL1500_.jpg"
},
{
  "id": 108,
  "250x250": "https://m.media-amazon.com/images/I/81PmlQApA4L._AC_SX679_.jpg",
  "60x60": "https://m.media-amazon.com/images/I/51uqfTQJERL._AC_US100_.jpg",
  "1280x720": "https://m.media-amazon.com/images/I/81PmlQApA4L._AC_SL1500_.jpg"
},
{
  "id": 109,
  "250x250": "https://m.media-amazon.com/images/I/61-hJ1UU0VL._AC_SX679_.jpg",
  "60x60": "https://m.media-amazon.com/images/I/41Zo1O7wbWL._AC_US100_.jpg",
  "1280x720": "https://m.media-amazon.com/images/I/61-hJ1UU0VL._AC_SL1500_.jpg"
},
{
  id:110,
  "250x250":"https://m.media-amazon.com/images/I/41DWEjHQUYL._AC_SL1200_.jpg",
  "60x60":"https://m.media-amazon.com/images/I/41DWEjHQUYL._AC_SL1200_.jpg",
  "1280x720":"https://m.media-amazon.com/images/I/41DWEjHQUYL._AC_SL1200_.jpg"
}
];