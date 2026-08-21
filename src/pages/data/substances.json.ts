import type { APIRoute } from 'astro';
import { catalogItems } from '../../data/catalog';

export const prerender = true;

export const GET: APIRoute = () =>
  new Response(JSON.stringify(catalogItems), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
