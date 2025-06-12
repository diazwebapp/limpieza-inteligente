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

## Licencia

Este proyecto es solo para fines educativos y demostrativos.
