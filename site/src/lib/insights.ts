import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './i18n';

export type Insight = CollectionEntry<'insights'>;

/** entry id 形如 "zh/cross-border-structure"，slug 為去掉語言前綴的部分。 */
export const slugOf = (e: Insight): string => e.id.split('/').slice(1).join('/');
export const langOf = (e: Insight): Lang => e.id.split('/')[0] as Lang;

/** 取得某語言全部文章（排除草稿），依日期新到舊排序。 */
export async function getInsights(lang: Lang): Promise<Insight[]> {
  const all = await getCollection(
    'insights',
    (e: Insight) => langOf(e) === lang && !e.data.draft,
  );
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** 找同一篇文章的另一語言版本；不存在（或為草稿）時回傳 null。 */
export async function findCounterpart(e: Insight): Promise<Insight | null> {
  const target = langOf(e) === 'zh' ? 'en' : 'zh';
  const id = `${target}/${slugOf(e)}`;
  const all = await getCollection('insights');
  return all.find((x: Insight) => x.id === id && !x.data.draft) ?? null;
}
