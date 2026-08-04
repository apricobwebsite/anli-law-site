# 安理國際法律事務所 — 官方網站

以 [Astro](https://astro.build) 建置的雙語（中／英）靜態網站。「法律洞察」文章以 Markdown 檔維護——**新增、修改、刪除 `.md` 檔即可增減文章**，不需要動任何程式碼。

想了解 Markdown 變成網頁的背後機制（frontmatter 解析、Zod 驗證、remark 轉換、路由展開、靜態輸出），請看 **[ARCHITECTURE.md](ARCHITECTURE.md)**。

## 快速開始

```bash
cd site
npm install     # 第一次使用先安裝
npm run dev     # 開發預覽（http://localhost:4321）
npm run build   # 產出正式靜態檔到 dist/
```

## 圖形化後台（Sveltia CMS）

本站內建 [Sveltia CMS](https://sveltiacms.app) 圖形化後台，位於 `/admin/`（設定檔在 `public/admin/`）。它是 Git-based CMS——**沒有資料庫、沒有後端伺服器**，後台只是一層編輯介面，存檔時直接寫入 repo 裡的 `.md` 檔（線上使用時即是幫你 commit，並自動觸發部署）。

兩種使用方式：

1. **本機編輯**：`npm run dev` 後，用 Chromium 系瀏覽器（Chrome / Edge）開 `http://localhost:4321/admin/index.html`，點「Work with Local Repository」並選取 **repo 根目錄**。存檔會直接改動本機檔案，之後照常用 git 提交。
2. **線上編輯**：部署後開 `https://<網站>/admin/`，點「Sign In Using Access Token」，依對話框連結建立 GitHub fine-grained Personal Access Token（只需該 repo 的 Contents 讀寫權限）並貼上。存檔即 commit 到 `main`，GitHub Actions 會自動重新 build 網站。

後台編輯文章時，中英文在同一個編輯畫面以左右欄並列；新文章預設只開中文，英文版可從右上「⋯」選單啟用。**新增文章時請在表單最上方的「網址代稱（Slug）」欄位填英文小寫連字號**（會成為檔名與網址；已存文章日後可由「⋯」選單的 Edit Slug 改名，但會改變網址）。

以下手動維護方式依然完全有效——後台與手改 `.md` 檔是同一份資料。

## 維護「法律洞察」文章

文章放在 `src/content/insights/`：

```
src/content/insights/
├── zh/            ← 中文文章（必要）
│   └── 檔名.md    ← 檔名就是網址 slug，例如 arbitration-clause.md → /insights/arbitration-clause/
└── en/            ← 英文文章（選擇性；檔名須與中文版相同才會互相連結）
    └── 檔名.md
```

### 新增一篇文章

在 `src/content/insights/zh/` 建立一個 `.md` 檔（檔名用英文小寫與連字號，會成為網址）：

```markdown
---
title: 文章標題
lead: 首段導言，會顯示在列表與文章開頭。
category: 跨國投資
date: 2026-07-01
readMinutes: 6
---

正文從這裡開始，使用一般 Markdown 語法。

## 小標題

支援 **粗體**、*斜體*、[連結](https://example.com)、條列、引文（>）、表格與圖片。
```

存檔後重新 `npm run build`（開發中 `npm run dev` 會即時顯示）。

### 欄位說明

| 欄位 | 必填 | 說明 |
|---|---|---|
| `title` | ✔ | 文章標題（含 `:` 等符號時請加引號） |
| `lead` | ✔ | 導言，顯示於列表與文章頁開頭 |
| `category` | ✔ | 分類標籤（自由文字，如「跨國投資」） |
| `date` | ✔ | 日期 `YYYY-MM-DD`，決定排序（新到舊），頁面顯示為「2026 年 7 月」 |
| `readMinutes` | ─ | 閱讀分鐘數，預設 5 |
| `draft` | ─ | 設 `draft: true` 則不會出現在網站上（草稿） |

欄位寫錯或缺漏時 build 會直接報錯並指出檔案，不會產出壞頁面。

### 修改、刪除、下架

- **修改**：直接編輯 `.md` 檔。
- **刪除**：刪掉 `.md` 檔（中英文都要刪）。
- **暫時下架**：在 frontmatter 加 `draft: true`。

### 英文版（選擇性）

在 `src/content/insights/en/` 放**相同檔名**的 `.md`（frontmatter 與正文用英文）。有英文版時，文章頁右上角的「中 / EN」會在兩個版本間切換；沒有英文版時，EN 會連到英文的洞察列表。

### 文章附圖

圖片放到 `public/assets/`，文中以絕對路徑引用：

```markdown
![圖片說明](/assets/圖檔名.jpg)
```

## 修改網站其他文字

文章以外的所有文案（導覽、首頁各區塊、主持律師介紹、隱私權政策、免責聲明等）集中在 **`src/lib/site.ts`**，每個欄位都是 `{ zh, en }` 一組，直接改字串即可。

- 版面與樣式：`src/styles/global.css`、`src/components/*.astro`
- 主持律師照片：`public/assets/yang-color.jpg`

## 部署

`npm run build` 產出的 `dist/` 是純靜態檔，任何靜態主機（GitHub Pages、Netlify、Vercel、Cloudflare Pages、一般虛擬主機）都能放。

**Cloudflare Pages（現行方案）**：正式站在 https://anli-law-site.pages.dev （專案 `anli-law-site`）。每次 push 到 `main`（包含 Sveltia 後台的存檔 commit），`.github/workflows/deploy.yml` 會自動 build 並部署——**也就是說，在 `/admin/` 後台或 GitHub 網頁上編輯文章存檔，網站就會自動更新**。

- 自動部署需要 repo secrets `CLOUDFLARE_ACCOUNT_ID` 與 `CLOUDFLARE_API_TOKEN`（Account → Cloudflare Pages → Edit 權限）。
- 手動部署：`npm run build` 後 `npx wrangler pages deploy dist --project-name anli-law-site --branch main`。
- 有正式網域後：在 Cloudflare Pages 綁定自訂網域，並把 `astro.config.mjs` 的 `site` 與 `public/admin/config.yml` 的 `site_url` 改成實際網址。
