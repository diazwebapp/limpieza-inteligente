export const marcas = [
    {
        id: 1,
        slug: "/cecotec/",
        name:"Cecotec",
        title: "Robots Aspirador Friegasuelos Cecotec | Conga: Limpieza Inteligente",
        image: "/robot-cecotec.webp",
        thubnail: "/robot-cecotec.webp",
        description: "Conga de Cecotec: aspira y friega con tecnología avanzada. Limpieza fácil y eficiente para tu hogar."
    },
    {
        id: 2,
        slug: "/irobot/",
        name:"iRobot",
        title: "iRobot: Dominando la Limpieza del Hogar",
        image: "/robot-roomba.webp",
        thubnail: "/robot-roomba.webp",
        description: "iRobot: la solución definitiva para aspirar y fregar. Limpieza autónoma, eficiente y profunda con la gama Roomba y más.",
        subitems: [
            {
                id: 3,
                slug: "/irobot/roomba/",
                name: "Roomba",
                title: "Roomba Aspirador Friegasuelos | iRobot Roomba Combo: Limpieza Definitiva",
                image: "/robot-roomba.webp",
                thubnail: "/robot-roomba.webp",
                description: "Roomba Combo: aspira y friega en una sola pasada. Ideal para quienes buscan comodidad y resultados."
            },
            {
                id: 4,
                slug: "/irobot/bravaa/",
                name: "Braava",
                title: "Domina la Limpieza con iRobot Braava: La Revolución en Fregado Inteligente",
                image: "/robot-roomba.webp",
                thubnail: "/robot-roomba.webp",
                description: "Descubre la eficiencia y tecnología avanzada de iRobot Braava para un fregado inteligente y resultados profesionales en tu hogar."
            }
        ]
    },
    {
        id: 5,
        slug: "/xiaomi/",
        name:"Xiaomi",
        title: "Robot Aspirador Friegasuelos Xiaomi | Mi Robot Vacuum: Limpieza Inteligente",
        image: "/robot-xiaomi.webp",
        thubnail: "/robot-xiaomi.webp",
        description: "Xiaomi Mi Robot Vacuum: limpia y friega con precisión. Tecnología y buen precio para tu día a día."
    }
    // Puedes añadir más categorías aquí
]

export const tiposSuelo =[
    {
        slug: "/suelo-laminado/",
        title: "Para suelos laminado",
        image: "/para-laminado.webp",
        thubnail: "/para-laminado.webp",
        description: "El suelo laminado requiere limpieza delicada y control de humedad para evitar daños y mantener su brillo."
    },
    {
        slug: "/suelo-madera/",
        title: "Para pisos de madera",
        image: "/para-madera.webp",
        thubnail: "/para-madera.webp",
        description: "La madera necesita cuidado especial: limpieza suave, mínima humedad y protección contra arañazos."
    },
    {
        slug: "/suelo-marmol/",
        title: "Para marmol y piedra",
        image: "/para-marmol.png",
        thubnail: "/para-marmol.png",
        description: "El mármol y la piedra requieren limpieza frecuente, productos neutros y evitar exceso de agua para conservar su elegancia."
    },
    {
        slug: "/para-alfombras/",
        title: "Para Alfombras",
        image: "/para-alfombras.webp",
        thubnail: "/para-alfombras.webp",
        description: "Las alfombras necesitan aspirado profundo y regular para eliminar polvo, pelos y alérgenos incrustados."
    }
]

export const amazonProduts = [
    {
    id: 4,
    title: "Xiaomi Robot Vacuum S20 Robot Aspirador y Fregasuelos",
    slug: "/xiaomi/vacuum-s20/",
    urlAfiliado: "https://amzn.to/3ZzFU4q", // Cambia la URL si tienes la de afiliado
    imageIds: [101,102,103],
    stars: 4.3, // Puedes actualizar si tienes el dato
    ratingCount: 3896, // Puedes actualizar si tienes el dato
    marca: 5, // id de la marca Xiaomi
    modelo: "Xiaomi Vacuum S20",
    precio: 139.99,
    momeda:"eur", // Precio en euros
    feactures: {
        potenciaSuccion: "5000 Pa",
        navegacion:"laser",
        funciones: "Acoplamiento automático, Navegación lógica, Mapeo inteligente, Mapeo y navegación láser de precisión, Aspira y friega simultáneamente",
        autonomia: "150 minutos",
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
  slug: "/cecotec/conga-8490-ultimate-ultra-power/",
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
    cepillo: "Central de silicona",
    app: true,
    roomPlan: true,
    totalSurface: true,
    bateria: "3200 mAh",
    superficies: "Todo tipo de suelos y alfombras",
    deposito: "Autovaciado"
  }
},
{
  id: 6,
  title: "Conga 999 Map X-Treme",
  slug: "/cecotec/conga-999-map-x-treme/",
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
}
]

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
  }
];