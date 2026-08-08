// @ts-check
import { defineConfig } from 'astro/config';

// 部署於 Cloudflare Pages（根路徑服務，毋需 base）。
// site 是正式網域，影響 sitemap / og 等絕對網址；
// 變更時請同步修改 public/admin/config.yml 的 site_url。
export default defineConfig({
  site: 'https://ayanglaw.com',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
  },
});
