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

const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    locale: z.enum(['en', 'es']),
    authors: z.array(reference('authors')).min(1),
    draft: z.boolean().default(false),
    translationKey: z.string().optional(),
  }),
});

export const collections = { authors, posts };
