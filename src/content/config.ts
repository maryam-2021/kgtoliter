import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    date: z.date(),
    author: z.string(),
    category: z.string(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
    readingTime: z.number().optional(),
  }),
});

export const collections = { blog };
