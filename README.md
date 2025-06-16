# Limpieza Inteligente

Sitio web informativo y comparador de robots de limpieza: robots aspirador y fregasuelos, robots friegasuelos, robots limpiacristales, limpiapiscinas y más.

## Características

- Catálogo de robots aspirador y fregasuelos de marcas como Cecotec, Roomba (iRobot) y Xiaomi.
- Secciones informativas y comparativas para ayudar a elegir el mejor robot de limpieza.
- Diseño moderno, responsivo y optimizado para SEO.
- Navegación por categorías y preguntas frecuentes.

## Tecnologías

- [Astro](https://astro.build/) (v5)
- HTML, CSS, JavaScript

## Scripts

```bash
npm run dev       # Inicia el servidor de desarrollo
npm run build     # Genera la versión de producción
npm run preview   # Previsualiza la versión de producción
```

## Instalación

1. Clona el repositorio.
2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

## Estructura de carpetas

- `src/pages/` — Páginas principales del sitio (home, categorías, etc.)
- `src/components/` — Componentes reutilizables (catálogo, clusters, etc.)
- `src/layouts/` — Layouts base para las páginas

## SEO automatizado y plantilla JSON-LD reutilizable

El proyecto implementa un sistema centralizado para la generación de rich snippets (SEO avanzado) usando JSON-LD en formato BlogPosting, reutilizable en todas las páginas.

- **Archivo base:**
  - `src/datos/seoBase.js` contiene los datos comunes de SEO (sitio, autor, publisher, logo, etc.) y exporta la función `buildSeoArticle`.
- **Uso en páginas:**
  - Cada página importa `buildSeoArticle` y le pasa solo los datos únicos (título, descripción, canonical, imagen, fechas).
  - Así, el bloque JSON-LD se genera automáticamente y se pasa como prop al layout, asegurando consistencia y fácil mantenimiento.
- **Ventajas:**
  - Si cambias el autor, logo, o datos del sitio, solo editas un archivo.
  - Todas las páginas mantienen el mismo formato SEO y se actualizan automáticamente.

**Ejemplo de uso en una página:**

```js
import { buildSeoArticle } from "../datos/seoBase.js";

const title = "Título único de la página";
const description = "Descripción única de la página";
const canonicalURL = "https://limpiezainteligente.store/ejemplo";
const socialImageURL = "https://limpiezainteligente.store/ejemplo.webp";
const pubDatetime = new Date("2025-06-06T00:00:00+00:00").toISOString();
const modDatetime = new Date("2025-06-12T00:00:00+00:00").toISOString();

const seoArticle = buildSeoArticle({
  title,
  description,
  canonicalURL,
  socialImageURL,
  pubDatetime,
  modDatetime
});
```

Esto permite que cada página solo defina lo que la hace única, manteniendo el SEO técnico centralizado y profesional.

## Componentes Destacados

### AmazonCluster

Componente para mostrar un grid de productos de Amazon filtrados y ordenados.

**Props:**
- `idProducto` (number, opcional): Si se pasa, muestra solo ese producto e ignora los demás filtros.
- `idMarca` (number, opcional): Filtra los productos por el id de la marca.
- `slugMarca` (string, opcional): Filtra los productos por el slug único de la marca (por ejemplo, "xiaomi", "cecotec"). Si se pasa, tiene prioridad sobre idMarca.
- `orderBy` (string, opcional): Ordena los productos por "precio" o "rating".
- `orderDir` (string, opcional): Dirección de orden, "asc" o "desc". Por defecto "desc".
- `limit` (number, opcional): Límite de productos a mostrar. Por defecto 3.
- `products` (array, opcional): Puedes pasar un array personalizado de productos si lo deseas.

**Ejemplo de uso:**
```astro
<AmazonCluster slugMarca="xiaomi" orderBy="precio" orderDir="asc" limit={4} />
<AmazonCluster idMarca={5} orderBy="precio" />
```

### StoreCluster

Componente duplicado de AmazonCluster, pero con estilos propios del sitio y botón destacado (clase `cta`).

**Props:**
- `idProducto` (number, opcional): Si se pasa, muestra solo ese producto e ignora los demás filtros.
- `idMarca` (number, opcional): Filtra los productos por el id de la marca.
- `slugMarca` (string, opcional): Filtra los productos por el slug único de la marca (por ejemplo, "xiaomi", "cecotec"). Si se pasa, tiene prioridad sobre idMarca.
- `orderBy` (string, opcional): Ordena los productos por "precio" o "rating".
- `orderDir` (string, opcional): Dirección de orden, "asc" o "desc". Por defecto "desc".
- `limit` (number, opcional): Límite de productos a mostrar. Por defecto 3.
- `products` (array, opcional): Puedes pasar un array personalizado de productos si lo deseas.

**Ejemplo de uso:**
```astro
<StoreCluster slugMarca="cecotec" orderBy="rating" />
<StoreCluster idMarca={1} />
```

### SingleProductHeader

Componente para mostrar la cabecera de un producto individual, con galería, detalles técnicos, rating y botón de compra.

**Props:**
- `images` (array de ids): Array de ids de imágenes del producto (se usan para la galería y miniaturas).
- `feactures` (object): Objeto JSON con las características técnicas del producto.
- `stars` (number): Valor de rating (0-5).
- `ratingCount` (number): Número de valoraciones.
- `urlAfiliado` (string): URL de compra en Amazon.
- `title` (string): Título del producto.
- `marca` (string|number): Marca o id de marca.
- `modelo` (string): Modelo del producto.

**Ejemplo de uso:**
```astro
<SingleProductHeader images={[101,102,103]} feactures={...} stars={4.3} ratingCount={3896} urlAfiliado="https://amzn.to/3ZzFU4q" title="Xiaomi S20" marca={5} modelo="BHR8629EU" />
```

### GaleryProduct

Componente de galería de imágenes tipo Amazon, con miniaturas y cambio de imagen principal.

**Props:**
- `images` (array de ids): Array de ids de imágenes (se buscan en `productImages` y se muestran en 3 tamaños: 60x60, 250x250, 1280x720).

**Comportamiento:**
- Al hacer click en un thumb, se muestra la versión 250x250 en la imagen principal.
- Al hacer click en la imagen principal, se abre un modal fullscreen con la versión 1280x720 (o 250x250 si no existe).

**Ejemplo de uso:**
```astro
<GaleryProduct images={[101,102,103]} />
```

### CategoryHeader

Componente para mostrar el encabezado de una categoría, con título, descripción y opcionalmente imagen.

**Props:**
- `title` (string): Título de la categoría.
- `description` (string): Descripción de la categoría.
- `image` (string, opcional): URL de la imagen de la categoría.

**Ejemplo de uso:**
```astro
<CategoryHeader title="Robots Xiaomi" description="Descubre los mejores robots de Xiaomi para tu hogar." image="/robot-xiaomi.webp" />
```

### CategoryCluester

Componente para mostrar un clúster de categorías o tipos de productos en formato de lista visual.

**Props:**
- `cats` (array): Array de objetos con las propiedades `link`, `image`, `title`, `description`.

**Ejemplo de uso:**
```astro
<CategoryCluester cats={marcas} />
<CategoryCluester cats={tiposSuelo} />
```

### buildProductCard

Función utilitaria para construir una ficha de producto personalizada a partir de un objeto de producto y una lista de campos extra.

**Uso:**
```js
import { buildProductCard } from "src/utils/productCardBuilder.js";
const ficha = buildProductCard(product, ["feactures", "slug", "precio", "marca", "modelo", "imageIds"]);
```

**Campos permitidos:**
- Siempre incluye: `title`, `stars`, `ratingCount`.
- Opcionales: `slug`, `feactures`, `precio`, `marca`, `modelo`, `imageIds`, `urlAfiliado`, `momeda`, `id`, `sku`, `mpn`, `brand`, `description`, `offers`, `aggregateRating`, `review`.

## Licencia

Este proyecto es solo para fines educativos y demostrativos.
