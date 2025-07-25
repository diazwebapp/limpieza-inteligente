// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    site: process.env.PUBLIC_SITE_URL || 'https://limpiezainteligente.store',
    integrations: [sitemap()],
    image: {
        domains: ['gumtreeau-res.cloudinary.com', 's1.elespanol.com','u-mercari-images.mercdn.net','m.media-amazon.com','www.irobot.es','limpiezainteligente.store','i.blogs.es'],
    },
});