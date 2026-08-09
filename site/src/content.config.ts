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
    readMinutes: z.number().int().positive().nullish().transform((v) => v ?? 5),
    draft: z.boolean().default(false),
  }),
});

// 媒體報導：每則只保存標題、新聞日期與外部新聞連結，首頁依日期新到舊排列。
const mediaReports = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/media-reports' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    url: z.string().url(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { insights, mediaReports };
