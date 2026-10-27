import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const authors = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/authors' }),
  schema: z.object({
    name: z.string().min(1),
    bio: z.string().optional(),
    website: z.url().optional(),
  }),
});

const authored = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  locale: z.enum(['en', 'es']),
  authors: z.array(reference('authors')).min(1),
  draft: z.boolean().default(false),
  translationKey: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).optional(),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: authored.extend({
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/pages' }),
  schema: authored,
});

export const collections = { authors, posts, pages };
