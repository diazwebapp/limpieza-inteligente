// utils/productCardBuilder.js
// Devuelve una ficha de producto con propiedades básicas y opcionales según parámetros

/**
 * Construye una ficha de producto a partir de un objeto producto y una lista de campos extra.
 * Siempre incluye: title, stars, ratingCount
 * Si se solicita, añade: slug, feactures, precio, marca, modelo, etc.
 * @param {Object} product - Objeto producto (de amazonProduts)
 * @param {Array<string>} [fields=[]] - Lista de campos extra a incluir
 * @returns {Object} Ficha de producto personalizada
 */
export function buildProductCard(product, fields = []) {
  if (!product) return {};
  const base = {
    title: product.title,
    stars: product.stars,
    ratingCount: product.ratingCount
  };
  const allowed = [
    'slug', 'feactures', 'precio', 'marca', 'modelo', 'imageIds', 'urlAfiliado', 'momeda', 'id', 'sku', 'mpn', 'brand', 'description', 'offers', 'aggregateRating', 'review'
  ];
  fields.forEach(field => {
    if (allowed.includes(field) && product[field] !== undefined) {
      base[field] = product[field];
    }
  });
  return base;
}
