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
- 主持律師照片：`public/assets/yang-mono.jpg`

## 部署

`npm run build` 產出的 `dist/` 是純靜態檔，任何靜態主機（GitHub Pages、Netlify、Vercel、Cloudflare Pages、一般虛擬主機）都能放。

**GitHub Pages（已附設定）**：repo 推上 GitHub 後，到 Settings → Pages 將 Source 設為「GitHub Actions」，之後每次 push 到 `main`，`.github/workflows/deploy.yml` 會自動 build 並發佈——**也就是說，直接在 GitHub 網頁上編輯 `.md` 檔存檔，網站就會自動更新**。

注意：

- 若網站部署在子路徑（如 `https://帳號.github.io/repo名/`），需在 `astro.config.mjs` 加 `base: '/repo名/'`。
- 有正式網域後，請把 `astro.config.mjs` 的 `site` 改成實際網址。
