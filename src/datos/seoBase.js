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
export const schemaArticle = ({
  headline,
  image = [],
  datePublished,
  dateModified,
  author = AUTHOR,
  publisher = PUBLISHER,
  description,
  articleBody,
  mainEntityOfPage,
  url
} = {}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline,
  image,
  datePublished,
  dateModified,
  author,
  publisher,
  description,
  articleBody,
  mainEntityOfPage,
  url
});

// Plantilla reutilizable para FAQPage
export const schemaFAQ = ({
  mainEntity = []
} = {}) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity
});

// Plantilla reutilizable para Product (con rich snippet de reseñas)
export const schemaProduct = ({
  name,
  image = [],
  description = "",
  brand = {},
  sku = "",
  mpn = "",
  url = WEBSITE_URL,
  offers = {},
  aggregateRating = {},
  review = [],
} = {}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name,
  image,
  description,
  brand,
  sku,
  mpn,
  url,
  offers,
  aggregateRating,
  review
});

// Plantilla reutilizable para Review (reseña de producto)
export const schemaReview = ({
  author = AUTHOR,
  datePublished,
  reviewBody,
  reviewRating = { "@type": "Rating", ratingValue: 5, bestRating: 5 },
  name = "Opinión de usuario",
  url = WEBSITE_URL
} = {}) => ({
  "@type": "Review",
  author,
  datePublished,
  reviewBody,
  reviewRating,
  name,
  url
});