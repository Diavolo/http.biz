// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://http.biz',
  integrations: [sitemap()],
  // Single entry: both `/status-codes` and `/status-codes/` mapped to the same redirect route (Astro 6+).
  redirects: {
    '/status-codes': '/status/',
  },
});
