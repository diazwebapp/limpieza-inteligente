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
