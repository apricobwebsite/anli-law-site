// @ts-check
import { defineConfig } from 'astro/config';

// 部署正式網域後請將 site 改為實際網址（影響 sitemap / og 等絕對網址）。
// 若部署在子路徑（例如 GitHub Pages 的 https://<帳號>.github.io/<repo>/），
// 需另外加上 base: '/<repo>/'。
export default defineConfig({
  site: 'https://www.anli-law.com',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
  },
});
