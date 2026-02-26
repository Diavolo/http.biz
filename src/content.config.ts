import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const codes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/codes' }),
  schema: z.object({
    set: z.number(),
    code: z.number(),
    title: z.string(),
    references: z.record(z.string(), z.string()).optional().default({}),
  }),
});

export const collections = { codes };
