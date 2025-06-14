export const marcas = [
    {
        id: 1,
        slug: "cecotec",
        title: "Robots Aspirador Friegasuelos Cecotec | Conga: Limpieza Inteligente",
        image: "/robot-cecotec.webp",
        thubnail: "/robot-cecotec.webp",
        link: "/cecotec",
        description: "Conga de Cecotec: aspira y friega con tecnología avanzada. Limpieza fácil y eficiente para tu hogar."
    },
    {
        id: 2,
        slug: "irobot",
        title: "iRobot: Dominando la Limpieza del Hogar",
        image: "/robot-roomba.webp",
        thubnail: "/robot-roomba.webp",
        link: "/irobot",
        description: "iRobot: la solución definitiva para aspirar y fregar. Limpieza autónoma, eficiente y profunda con la gama Roomba y más.",
        subitems: [
            {
                id: 3,
                slug: "roomba",
                title: "Roomba Aspirador Friegasuelos | iRobot Roomba Combo: Limpieza Definitiva",
                image: "/robot-roomba.webp",
                thubnail: "/robot-roomba.webp",
                link: "/irobot/roomba",
                description: "Roomba Combo: aspira y friega en una sola pasada. Ideal para quienes buscan comodidad y resultados."
            },
            {
                id: 4,
                slug: "bravaa",
                title: "Domina la Limpieza con iRobot Braava: La Revolución en Fregado Inteligente",
                image: "/robot-roomba.webp",
                thubnail: "/robot-roomba.webp",
                link: "/irobot/bravaa",
                description: "Descubre la eficiencia y tecnología avanzada de iRobot Braava para un fregado inteligente y resultados profesionales en tu hogar."
            }
        ]
    },
    {
        id: 5,
        slug: "xiaomi",
        title: "Robot Aspirador Friegasuelos Xiaomi | Mi Robot Vacuum: Limpieza Inteligente",
        image: "/robot-xiaomi.webp",
        thubnail: "/robot-xiaomi.webp",
        link: "/xiaomi",
        description: "Xiaomi Mi Robot Vacuum: limpia y friega con precisión. Tecnología y buen precio para tu día a día."
    }
    // Puedes añadir más categorías aquí
]

export const tiposSuelo =[
    {
        name: "suelo-laminado",
        title: "Para suelos laminado",
        image: "/para-laminado.webp",
        thubnail: "/para-laminado.webp",
        link: "/suelo-laminado",
        description: "El suelo laminado requiere limpieza delicada y control de humedad para evitar daños y mantener su brillo."
    },
    {
        name: "suelo-madera",
        title: "Para pisos de madera",
        image: "/para-madera.webp",
        thubnail: "/para-madera.webp",
        link: "/suelo-madera",
        description: "La madera necesita cuidado especial: limpieza suave, mínima humedad y protección contra arañazos."
    },
    {
        name: "suelo-marmol",
        title: "Para marmol y piedra",
        image: "/para-marmol.png",
        thubnail: "/para-marmol.png",
        link: "/suelo-marmol",
        description: "El mármol y la piedra requieren limpieza frecuente, productos neutros y evitar exceso de agua para conservar su elegancia."
    },
    {
        name: "para-alfombras",
        title: "Para Alfombras",
        image: "/para-alfombras.webp",
        thubnail: "/para-alfombras.webp",
        link: "/para-alfombras",
        description: "Las alfombras necesitan aspirado profundo y regular para eliminar polvo, pelos y alérgenos incrustados."
    }
]

export const amazonProduts = [
    {
    id: 4,
    title: "Xiaomi Robot Vacuum S20 Robot Aspirador y Fregasuelos",
    slug: "/xiaomi/vacuum-s20",
    urlAfiliado: "https://amzn.to/3ZzFU4q", // Cambia la URL si tienes la de afiliado
    imageIds: [101,102,103],
    stars: 4.3, // Puedes actualizar si tienes el dato
    ratingCount: 3896, // Puedes actualizar si tienes el dato
    marca: 5, // id de la marca Xiaomi
    modelo: "BHR8629EU",
    precio: 139.99,
    momeda:"eur", // Precio en euros
    feactures: {
        color: "Blanco",
        dimensiones: "47 x 38,7 x 15,3 cm; 3,3 kg",
        capacidad: "400 Mililitros",
        voltaje: "20 Voltios",
        apagadoAutomatico: true,
        dispositivosCompatibles: "Smartphones",
        caracteristicasEspeciales: "Acoplamiento automático, Navegación lógica, Mapeo inteligente, Mapeo y navegación láser de precisión, Aspira y friega simultáneamente",
        peso: "3,3 kg",
        potenciaSuccion: "5000Pa",
        depositoPolvo: "400 ml",
        depositoAgua: "270 ml"
    }
},
{
  id: 5,
  title: "Cecotec Conga 8490 Ultimate Ultra Power",
  slug: "/cecotec/conga-8490-ultimate-ultra-power",
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
    autonomia: "170 min",
    navegacion: "Láser",
    cepillo: "Central de silicona",
    funciones: "Barre, aspira, friega y pasa la mopa",
    app: true,
    roomPlan: true,
    totalSurface: true,
    bateria: "3200 mAh",
    superficies: "Todo tipo de suelos y alfombras",
    deposito: "Autovaciado"
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
  }
];