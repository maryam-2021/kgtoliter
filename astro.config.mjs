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
  // Accept extensionless checklist URLs in local/preview environments. Cloudflare's
  // redirect rules below still consolidate them onto the canonical trailing-slash URLs.
  trailingSlash: 'ignore',
});
