// @ts-check
import { defineConfig } from 'astro/config';

// 部署於 Cloudflare Pages（根路徑服務，毋需 base）。
// 取得正式網域後，將 site 改為實際網址（影響 sitemap / og 等絕對網址），
// 並同步修改 public/admin/config.yml 的 site_url。
export default defineConfig({
  site: 'https://anli-law-site.pages.dev',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
  },
});
