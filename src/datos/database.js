export const marcas = [
    {
        id: 1,
        name: "cecotec",
        title: "Robots Aspirador Friegasuelos Cecotec | Conga: Limpieza Inteligente",
        image: "/robot-cecotec.webp",
        thubnail: "/robot-cecotec.webp",
        link: "/cecotec",
        description: "Conga de Cecotec: aspira y friega con tecnología avanzada. Limpieza fácil y eficiente para tu hogar."
    },
    {
        id: 2,
        name: "irobot",
        title: "iRobot: Dominando la Limpieza del Hogar",
        image: "/robot-roomba.webp",
        thubnail: "/robot-roomba.webp",
        link: "/irobot",
        description: "iRobot: la solución definitiva para aspirar y fregar. Limpieza autónoma, eficiente y profunda con la gama Roomba y más.",
        subitems: [
            {
                id: 3,
                name: "roomba",
                title: "Roomba Aspirador Friegasuelos | iRobot Roomba Combo: Limpieza Definitiva",
                image: "/robot-roomba.webp",
                thubnail: "/robot-roomba.webp",
                link: "/irobot/roomba",
                description: "Roomba Combo: aspira y friega en una sola pasada. Ideal para quienes buscan comodidad y resultados."
            },
            {
                id: 4,
                name: "bravaa",
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
        name: "xiaomi",
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
       id: 1,
       title:"iRobot Roomba Combo Essential, Robot Aspirador y friegasuelos",
       slug: "",
       urlAfiliado:"https://amzn.to/3FBUnWJ",
       imageUrl:"https://m.media-amazon.com/images/I/81y+6dYOxTL._AC_SL1500_.jpg",
       stars:3.9,
       ratingCount: 11669,
       precio: 0
    },
    {
       id: 2,
       title:"Ultenic T10 Lite Robot Aspirador con Base Autovaciado 18000Pa, 60Días Manos Libres, Limpieza Matricial, Auto-Ajuste Potencia para Alfombra, Robot Aspirador y Fregasuelos con LIDAR para Mascota Niños",
       slug: "",
       urlAfiliado:"https://amzn.to/3TeNMEE",
       imageUrl:"https://m.media-amazon.com/images/I/81-6nim6TML._AC_SL1500_.jpg",
       stars:4.4,
       ratingCount: 902,
       precio: 0
    },
    {
       id: 3,
       title:"DREAME L10s Ultra Gen 2 Robot Aspirador y Fregasuelos con RoboSwing MopExtend, 10000 Pa, Modo para Mascotas, Estación Base Automática, 32 Ajustes de Nivel de Agua, Limpieza de Alfombras Versátil",
       slug: "",
       urlAfiliado:"https://amzn.to/43Mb5dW",
       imageUrl:"https://m.media-amazon.com/images/I/61ijFwUV-wL._AC_SL1500_.jpg",
       stars:4.3,
       ratingCount: 1899,
       precio: 0
    },
    {
    id: 4,
    title: "Xiaomi Robot Vacuum S20 Robot Aspirador y Fregasuelos",
    slug: "/xiaomi/vacuum-s20",
    urlAfiliado: "https://amzn.to/3ZzFU4q", // Cambia la URL si tienes la de afiliado
    imageUrl: "https://m.media-amazon.com/images/I/51xaJeszmPL._AC_SX679_.jpg",
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
}
]