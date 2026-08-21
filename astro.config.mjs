import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://kgtolitre.com',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        return !pathname.startsWith('/substances/') && !/^\/kg-to-litres-/.test(pathname);
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  trailingSlash: 'always',
});
