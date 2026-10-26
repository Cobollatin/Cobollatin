import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: z.object({
    authors: z.array(z.string().min(1)).min(1),
    description: z.string(),
    heroImage: z.string().optional(),
    keywords: z.array(z.string()).default([]),
    lang: z.enum(['en', 'es', 'zh', 'ja', 'ru']).default('en'),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    title: z.string(),
    updatedDate: z.coerce.date().optional(),
  }),
});

const authors = defineCollection({
  schema: z.object({
    avatar: z.string().optional(),
    links: z
      .array(
        z.object({
          href: z.string().min(1),
          label: z.string().min(1),
        }),
      )
      .default([]),
    name: z.string(),
    role: z.string().optional(),
    summary: z.string(),
  }),
});

export const collections = { authors, blog };
