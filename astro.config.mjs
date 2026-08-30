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
        'https://kgtoliter.com/what-is-density/',
        'https://kgtoliter.com/density-reference/',
        'https://kgtoliter.com/litre-to-kg/',
        'https://kgtoliter.com/physics/temperature-and-density/',
        'https://kgtoliter.com/physics/density-vs-specific-gravity/',
        'https://kgtoliter.com/physics/density-units-conversion/',
        'https://kgtoliter.com/physics/density-formula/',
        'https://kgtoliter.com/physics/how-to-measure-density/',
        'https://kgtoliter.com/industry/kg-to-litres-logistics/',
        'https://kgtoliter.com/industry/kg-to-litres-cooking/',
        'https://kgtoliter.com/industry/kg-to-litres-fuel-management/',
        'https://kgtoliter.com/industry/kg-to-litres-chemical-manufacturing/',
        'https://kgtoliter.com/industry/kg-to-litres-agriculture/',
        'https://kgtoliter.com/compare/water-vs-milk-density/',
        'https://kgtoliter.com/compare/cooking-oils-density/',
        'https://kgtoliter.com/compare/diesel-vs-petrol-density/',
        'https://kgtoliter.com/compare/acids-density-comparison/',
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
