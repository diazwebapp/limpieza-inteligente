// @ts-check
import { defineConfig } from 'astro/config';
import vercelAdapter from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    redirects: {
    "/mejores-robots-aspiradores-fregasuelos/": {
        status: 301,
        destination: "/"
    },
    "/mejores-robots-aspiradores-fregasuelos": {
        status: 301,
        destination: "/"
    },
  },
    site: process.env.PUBLIC_SITE_URL || 'https://limpiezainteligente.store',
    integrations: [sitemap()]
});