import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 法律洞察文章：src/content/insights/zh/*.md（中文）與 en/*.md（英文）
// 檔名即網址 slug；中英文以相同檔名互相對應。
const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    lead: z.string(),
    category: z.string(),
    date: z.coerce.date(),
    readMinutes: z.number().int().positive().default(5),
    draft: z.boolean().default(false),
  }),
});

export const collections = { insights };
