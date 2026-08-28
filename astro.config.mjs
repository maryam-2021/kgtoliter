import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { featuredSubstances } from './src/data/substances.js';

export default defineConfig({
  site: 'https://kgtoliter.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        ...featuredSubstances.map((s) => `https://kgtoliter.com/substances/${s.id}/`),
        'https://kgtoliter.com/kg-to-l/',
        'https://kgtoliter.com/kg-to-litres/',
        'https://kgtoliter.com/kg-to-litres-guide/',
      ],
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
