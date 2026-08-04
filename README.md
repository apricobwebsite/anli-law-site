# 安理國際法律事務所 — 網站

| 目錄 | 內容 |
|---|---|
| **[`site/`](site/)** | **正式網站**（Astro 靜態網站，中英雙語）。「法律洞察」文章以 Markdown 維護，說明見 [site/README.md](site/README.md)。 |
| [`project/`](project/) | Claude Design（claude.ai/design）匯出的原始設計原型，僅供設計參考，非正式程式碼。 |

## 常用指令

```bash
cd site
npm install     # 第一次使用
npm run dev     # 本機預覽
npm run build   # 產出靜態檔到 site/dist/
```

新增／修改文章：編輯 `site/src/content/insights/zh/*.md`（英文版放 `en/`）。推上 GitHub 後，`.github/workflows/deploy.yml` 會自動 build 並部署到 GitHub Pages（需在 repo Settings → Pages 啟用「GitHub Actions」來源）。
