// Variables reutilizables globales
const WEBSITE_URL = import.meta.env.PUBLIC_SITE_URL || "https://limpiezainteligente.store/";
export const AUTHOR = {
  "@type": "Person",
  name: "Diaz Web App",
  url: "https://github.com/diazwebapp/"
};

export const PUBLISHER = {
  "@type": "Organization",
  name: "Robots de limpieza",
  logo: {
    "@type": "ImageObject",
    url: WEBSITE_URL.replace(/\/$/, "") + "/favicon.ico"
  }
};

export const WEBSITE_NAME = "Robots de limpieza";
export const WEBSITE_DESCRIPTION = "Descubre cómo un robot limpiador puede limpiar tu hogar. Guías de los mejores robots para pisos,  Tu solución para automatizar la limpieza.";
export const WEBSITE_LANGUAGE = "es";

// Plantilla reutilizable para WebSite
export const schemaWebSite = ({
  url = WEBSITE_URL,
  name = WEBSITE_NAME,
  description = WEBSITE_DESCRIPTION,
  inLanguage = WEBSITE_LANGUAGE
} = {}) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": url + "#website",
  url,
  name,
  description,
  inLanguage
});

// Plantilla reutilizable para Article/TechArticle
export const schemaArticle = (overrides = {}) =>{
  const defaults ={
    "@context": "https://schema.org",
    "@type": "Article",
    headline:"",
    image:[],
    datePublished:"",
    dateModified:"",
    author : AUTHOR,
    publisher: PUBLISHER,
    description:"",
    url:WEBSITE_URL
  };

  return { ...defaults, ...overrides };
}

// Plantilla reutilizable para FAQPage
export const schemaFAQ = ({
  mainEntity = []
} = {}) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity
});

// Plantilla reutilizable para Product (con rich snippet de reseñas)
/**
 * Genera un schema JSON-LD para Producto con valores por defecto.
 * @param {Object} overrides - Propiedades personalizables (marcadas en rojo).
 * @returns {Object} Schema de Producto válido.
 */
export const schemaProduct = (overrides = {}) =>{
  // Valores por defecto (ajusta según necesites)
  const defaults = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Nombre del producto",  // <- Modificable
    image: [],                   // <- Modificable
    brand: {                     // <- Modificable
      "@type": "Brand",
      name: "Marca del producto"
    },
    url: "https://tusitio.com/producto",  // <- Modificable
    aggregateRating: {           // <- Modificable
      "@type": "AggregateRating",
      ratingValue: 4.7,
      reviewCount: 200,
      bestRating: 5
    },
    offers: {                    // <- Modificable
      "@type": "Offer",
      url: "https://tusitio.com/comprar",
      priceCurrency: "EUR",
      price: "299",
      priceValidUntil: "2025-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock"
    },
    review: []                   // <- Modificable
  };

  // Combina los valores por defecto con los personalizados (overrides)
  return { ...defaults, ...overrides };
}

// Plantilla reutilizable para Review (reseña de producto)
export const schemaReview = ({
  author = AUTHOR,
  datePublished,
  reviewRating = { "@type": "Rating", ratingValue: 5, bestRating: 5 },
  url = WEBSITE_URL
} = {}) => ({
  "@type": "Review",
  author,
  datePublished,
  reviewRating,
  url
});