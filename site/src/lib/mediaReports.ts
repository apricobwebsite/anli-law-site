import { getCollection, type CollectionEntry } from 'astro:content';

export type MediaReport = CollectionEntry<'mediaReports'>;

/** 取得全部已發布媒體報導，依新聞日期新到舊排序。 */
export async function getMediaReports(): Promise<MediaReport[]> {
  const all = await getCollection(
    'mediaReports',
    (entry: MediaReport) => !entry.data.draft,
  );

  return all.sort((a, b) => {
    const byDate = b.data.date.getTime() - a.data.date.getTime();
    return byDate || a.data.title.localeCompare(b.data.title, 'zh-Hant');
  });
}
