import { LAW } from './site';

export type Lang = 'zh' | 'en';

export interface Bi {
  zh: string;
  en?: string;
}

export interface BiList {
  zh: string[];
  en?: string[];
}

/** 取出雙語字串；缺英文時回退中文。 */
export const t = (lang: Lang, node: Bi): string =>
  lang === 'en' && node.en != null ? node.en : node.zh;

/** 取出雙語字串陣列；缺英文時回退中文。 */
export const tl = (lang: Lang, node: BiList): string[] =>
  lang === 'en' && node.en != null ? node.en : node.zh;

export const otherLang = (lang: Lang): Lang => (lang === 'zh' ? 'en' : 'zh');

export const prefix = (lang: Lang): string => (lang === 'en' ? '/en' : '');
export const homePath = (lang: Lang): string => (lang === 'en' ? '/en/' : '/');
export const insightsPath = (lang: Lang): string => `${prefix(lang)}/insights/`;
export const articlePath = (lang: Lang, slug: string): string =>
  `${prefix(lang)}/insights/${slug}/`;
export const legalPath = (lang: Lang, doc: 'privacy' | 'disclaimer'): string =>
  `${prefix(lang)}/${doc}/`;

export const pageTitle = (lang: Lang, name: string): string =>
  lang === 'zh' ? `${name}｜${LAW.firm.full.zh}` : `${name} — ${LAW.firm.full.en}`;

const EN_MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/** 文章日期顯示：zh「2026 年 6 月」／en「June 2026」 */
export function fmtDate(lang: Lang, d: Date): string {
  const y = d.getUTCFullYear();
  const m = d.getUTCMonth();
  return lang === 'zh' ? `${y} 年 ${m + 1} 月` : `${EN_MONTHS[m]} ${y}`;
}
