// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://http.biz',
  integrations: [sitemap()],
  redirects: {
    '/status-codes': '/status',
    '/status-codes/': '/status/',
  },
});
