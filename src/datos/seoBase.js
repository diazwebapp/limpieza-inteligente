// Variables reutilizables globales
export const AUTHOR = {
  "@type": "Person",
  name: "Diaz Web App",
  url: "https://github.com/diazwebapp/"
};

export const PUBLISHER = {
  "@type": "Organization",
  name: "Limpieza Inteligente",
  logo: {
    "@type": "ImageObject",
    url: "http://limpiezainteligente.store/favicon.ico"
  }
};

export const WEBSITE_URL = "https://limpiezainteligente.store/";
export const WEBSITE_NAME = "Limpieza Inteligente";
export const WEBSITE_DESCRIPTION = "Descubre los mejores robots de limpieza, robot aspirador y fregasuelos, aspirador y friegasuelos, y más. Compara modelos, encuentra ofertas y simplifica tu vida con la última tecnología en limpieza automática.";
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
  mainEntityOfPage
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
  mainEntityOfPage
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