// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: import.meta.env.PUBLIC_SITE_URL,
    integrations: [sitemap()]
});