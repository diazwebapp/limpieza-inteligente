export type Product = {
    name: string;
    price: number;
    currency: "EUR" | "USD";
    recommended_price?: number; // Optional, as not all products have it
    rating: number;
    num_reviews: number;
    delivery_cost?: number;
    imagen : string
    marca:"Xiaomi" | "cecotec" | "Irobot"
    caracteristicas:{
        potenciaSuccion:string
        modos: "aspirado" | "fregado" | "aspira y friega" | "aspira, firega y lava"
    }
    urlAffiliado : string
  };
  export const products:Product[] = [
    {
        "name": "Xiaomi Robot Vacuum S20 - Sistema Inteligente de navegación láser (LDS), succión de 5000",
        "price": 116.00,
        "currency": "EUR",
        "recommended_price": 139.99,
        "rating": 4.47,
        "num_reviews": 7000,
        "delivery_cost": 69.44,
        "imagen": "https://m.media-amazon.com/images/I/51ipYfoZovL._AC_UL320_.jpg",
        "caracteristicas": {
            "modos": "aspira y friega",
            "potenciaSuccion": "5000 pa"
        },
        marca: "Xiaomi",
        urlAffiliado: "https://amzn.to/4kDuPXs"
    },
    {
        "name": "Xiaomi Robot Vacuum E5 - succión de 2000 Pa",
        "price": 74.99,
        "currency": "EUR",
        "recommended_price": 99.99,
        "rating": 4.2,
        "num_reviews": 500,
        "delivery_cost": 56.67,
        "imagen": "https://m.media-amazon.com/images/I/61xgzFVpiUL._AC_UL320_.jpg",
        "caracteristicas": {
            "modos": "aspira y friega",
            "potenciaSuccion": "2000 pa"
        },
        marca: "Xiaomi",
        urlAffiliado: "https://amzn.to/3IuSFr3"
    },
    {
        "name": "Xiaomi Robot Vacuum S20 EU Black",
        "price": 153.00,
        "currency": "EUR",
        "recommended_price": 169.99,
        "rating": 4.3,
        "num_reviews": 291,
        "delivery_cost": 69.35,
        "imagen": "https://m.media-amazon.com/images/I/61sivVKAXEL._AC_UL320_.jpg",
        "caracteristicas": {
            "modos": "aspira y friega",
            "potenciaSuccion": "5000 pa"
        },
        marca: "Xiaomi",
        urlAffiliado: "https://amzn.to/3IuSKLn"
    },
    {
        "name": "Xiaomi Mi Robot Vacuum-Mop 2 Ultra Auto-Empty - Estación de aspiración con función de Carga",
        "price": 70.26,
        "currency": "EUR",
        "rating": 3.8,
        "num_reviews": 12,
        "delivery_cost": 142.63,
        "imagen": "https://m.media-amazon.com/images/I/51XqPAV3h2L._AC_UL320_.jpg",
        "caracteristicas": {
            "modos": "aspira y friega",
            "potenciaSuccion": "7000 pa"
        },
        marca: "Xiaomi",
        urlAffiliado: "https://amzn.to/3IuSUCt"
    },
    {
        "name": "Xiaomi Mi Robot Aspiradora Mop Pro, potencia de succión 2100Pa autonomía 110min 180m²",
        "price": 332.00,
        "currency": "EUR",
        "recommended_price": 349.00,
        "rating": 4.6,
        "num_reviews": 6321,
        "delivery_cost": 79.89,
        "imagen": "https://m.media-amazon.com/images/I/514QqQrO+sL._AC_UL320_.jpg",
        "caracteristicas": {
            "modos": "aspira y friega",
            "potenciaSuccion": "2100 pa"
        },
        marca: "Xiaomi",
        urlAffiliado: "https://amzn.to/4lSojxd"
    },
    {
        name: "Xiaomi Robot Vacuum Cleaner XCLEA H30 Plus White 2C601EUW Blanco",
        price: 483.54,
        currency: "EUR",
        rating: 2,
        num_reviews: 1,
        imagen: "https://m.media-amazon.com/images/I/51ZTv98L0NS._AC_SX679_.jpg",
        "caracteristicas": {
            "modos": "aspira y friega",
            "potenciaSuccion": "5000 pa"
        },
        marca: "Xiaomi",
        urlAffiliado: "https://amzn.to/3IqmsBj"
    },
      {
          name: "Xiaomi Robot Vacuum E12, Succión Potente hasta 4000 Pa, Control a través de la aplicación, Ruta de Limpieza eficiente",
          price: 87.96,
          currency: "EUR",
          rating: 4,
          num_reviews: 34,
          imagen: "https://m.media-amazon.com/images/I/41DWEjHQUYL.__AC_SX300_SY300_QL70_ML2_.jpg",
          "caracteristicas": {
              "modos": "aspira y friega",
              "potenciaSuccion": "4000 pa"
          },
          marca: "Xiaomi",
          urlAffiliado: "https://amzn.to/4nOeGkN"
      }
  ]
