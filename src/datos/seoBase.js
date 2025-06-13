// Variables reutilizables globales
export const AUTHOR = {
  "@type": "Person",
  name: "Diaz Web App",
  url: "https://github.com/diazwebapp"
};

export const PUBLISHER = {
  "@type": "Organization",
  name: "Limpieza Inteligente Store",
  logo: {
    "@type": "ImageObject",
    url: "http://limpiezainteligente.store/favicon.ico"
  }
};

export const WEBSITE_URL = "https://limpiezainteligente.store/";
export const WEBSITE_NAME = "Limpieza Inteligente";
export const WEBSITE_DESCRIPTION = "Guía de robots aspiradores y limpieza inteligente para el hogar.";
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