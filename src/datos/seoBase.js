export const seoBase = {
  website: {
    "@type": "WebSite",
    "@id": "https://limpiezainteligente.store/#website",
    "url": "https://limpiezainteligente.store/",
    "name": "Limpieza Inteligente",
    "description": "Guía de robots aspiradores y limpieza inteligente para el hogar.",
    "inLanguage": "es"
  },
  author: {
    "@type": "Person",
    "name": "diaz web app",
    "url": "https://github.com/diazwebapp"
  },
  publisher: {
    "@type": "Person",
    "name": "diaz web app",
    "logo": {
      "@type": "ImageObject",
      "url": "https://avatars.githubusercontent.com/u/90859089?v=4"
    }
  }
};

export function buildSeoArticle({
  title,
  description,
  canonicalURL,
  socialImageURL,
  pubDatetime,
  modDatetime
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      seoBase.website,
      {
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalURL
        },
        "headline": title,
        "description": description,
        "image": socialImageURL,
        "author": seoBase.author,
        "publisher": seoBase.publisher,
        "datePublished": pubDatetime,
        "dateModified": modDatetime,
        "inLanguage": "es"
      }
    ]
  };
}
