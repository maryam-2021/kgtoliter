import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://kgtoliter.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en',
      'hi',
      'es',
      'ru',
      'fr',
      'de',
      'it',
      'pt',
      'bn',
      'ja',
      'ko',
      'ms',
      'pl',
      'id',
      'ar',
      'bg',
      'tr',
      'sv',
    ],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
