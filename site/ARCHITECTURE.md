# 技術原理：Markdown 是怎麼變成網頁的

本文件說明這個網站從 `.md` 檔到 `dist/` 靜態網頁的完整流程，給維護者理解系統背後的機制。日常操作步驟請看 [README.md](README.md)，這裡講的是「為什麼那樣做會有效」。

## 總覽

一個 `.md` 檔其實是兩種東西的組合：

```
---
title: 文章標題        ← ① frontmatter：YAML 格式的「資料」
date: 2026-07-01
---
正文從這裡開始……      ← ② Markdown 格式的「正文」
```

執行 `npm run build` 時，Astro 依序做五件事：

```
掃描 .md 檔 → 解析 frontmatter → Zod 驗證資料 → remark 轉換正文 → 展開路由、輸出 HTML
```

以下逐步說明，並標出每一步對應的程式檔案。

## 1. 掃描檔案（Content Collection）

[`src/content.config.ts`](src/content.config.ts) 宣告了一個名為 `insights` 的「內容集合」：

```ts
loader: glob({ pattern: '**/*.md', base: './src/content/insights' })
```

Build 開始時，Astro 掃描 `src/content/insights/` 下所有 `.md`，每個檔案成為一個 **entry**。entry 的 `id` 是去掉副檔名的相對路徑：

| 檔案 | entry id | 語言 | slug |
|---|---|---|---|
| `zh/arbitration-clause.md` | `zh/arbitration-clause` | zh | arbitration-clause |
| `en/arbitration-clause.md` | `en/arbitration-clause` | en | arbitration-clause |

[`src/lib/insights.ts`](src/lib/insights.ts) 就是靠拆這個 id 得到語言與 slug——**這就是「檔名即網址」「中英文靠相同檔名對應」的原理**。

## 2. 解析 frontmatter

檔案開頭兩條 `---` 之間的區塊由 YAML 解析器切出來，變成結構化的 `entry.data`；其餘部分是正文，留到第 4 步處理。

重點：`title`、`lead`、`category` 等欄位**不是** Markdown 渲染的一部分。它們是純資料，由頁面模板決定顯示位置與樣式（例如 `lead` 會以金色大字顯示在文章開頭、也出現在列表頁）。這就是為什麼正文裡不需要再寫一次標題。

## 3. 資料驗證（Zod schema）

`content.config.ts` 裡的 `schema` 是一份 [Zod](https://zod.dev) 規格，每個 entry 的 frontmatter 都要通過它：

- `z.coerce.date()`——把字串 `2026-07-01` 轉成真正的日期物件，之後才能排序（新到舊）與格式化顯示（「2026 年 7 月」／「July 2026」）
- `.default(5)`／`.default(false)`——`readMinutes`、`draft` 不寫時自動補預設值
- 缺少必填欄位或型別錯誤 → **整個 build 直接失敗**，錯誤訊息會指出檔名與欄位

這是刻意設計的安全網：寧可 build 失敗，也不產出缺標題、壞日期的頁面。看到 build 紅字時，找訊息裡的 `.md` 檔名，對照 README 的欄位表修正即可。

## 4. 正文轉換（remark 管線）

文章頁模板呼叫 `render(entry)` 時，Astro 用 [unified/remark](https://unifiedjs.com) 管線把 Markdown 正文轉成 HTML：

```
Markdown 文字
  → remark-parse      解析成 Markdown 語法樹
  → remark-gfm        GitHub 擴充語法（表格、刪除線、自動連結）
  → remark-rehype     轉成 HTML 語法樹
  → rehype-stringify  輸出 HTML 字串
```

轉換結果舉例：

| 你寫的 | 產出的 HTML |
|---|---|
| `## 小標題` | `<h2 id="小標題">小標題</h2>`（自動加錨點 id） |
| `- 項目` | `<ul><li>項目</li></ul>` |
| `> 引文` | `<blockquote>…</blockquote>` |
| `**粗體**` | `<strong>粗體</strong>` |
| `![說明](/assets/x.jpg)` | `<img src="/assets/x.jpg" alt="說明">` |

## 5. 樣式從哪裡來

Markdown 只產出語意標籤，不帶任何外觀。文章頁模板 [`src/components/ArticlePage.astro`](src/components/ArticlePage.astro) 把轉換結果放進 `<div class="article-body">`，[`src/styles/global.css`](src/styles/global.css) 再用後代選擇器統一上樣式：

```css
.article-body p          { /* 內文段落：淺色、行高 2.0 */ }
.article-body h2         { /* 章節標題：亮色、Archivo 字體 */ }
.article-body li::marker { /* 列點符號：金色 */ }
.article-body blockquote { /* 引文：金色左框線 */ }
```

所以寫文章的人完全不用管外觀；要調整全站文章的視覺，改 `global.css` 這一區即可，所有文章同步生效。

## 6. 路由展開：一個檔案產一頁

Astro 採檔案路由，`src/pages/` 的結構就是網址結構。動態路由 [`src/pages/insights/[slug].astro`](src/pages/insights/[slug].astro) 在 build 時執行 `getStaticPaths()`：

```ts
const entries = await getInsights('zh');  // 取 zh/ 開頭、非 draft 的 entry，按日期排序
return entries.map((entry) => ({ params: { slug: slugOf(entry) }, props: { entry } }));
```

回傳幾個 slug，就產生幾條 `/insights/<slug>/` 路由。幾個推論：

- **`draft: true` 的文章連 HTML 都不會產生**——不是隱藏，是根本不存在於輸出中
- 英文版由 `src/pages/en/insights/[slug].astro` 以相同邏輯處理 `en/` 的 entry，產生 `/en/insights/<slug>/`
- 列表頁與首頁「最新 3 篇」只讀取各 entry 的 frontmatter 來排列，不渲染正文
- 文章頁的「中／EN」切換：build 時檢查另一語言是否存在同 slug 的 entry（`findCounterpart`），有就互連，沒有就退回該語言的洞察列表

## 7. 輸出：純靜態 HTML

`.astro` 檔上半部（`---` 之間）的程式碼是 **build 時**在 Node 裡執行的，不會送到瀏覽器。`astro build` 把每條路由渲染成 HTML 字串，寫進 `dist/`：

```
dist/
├── index.html                              ← 首頁（zh）
├── insights/index.html                     ← 洞察列表
├── insights/arbitration-clause/index.html  ← 文章頁（每篇一個資料夾）
├── en/…                                    ← 英文版同構
├── _astro/…                                ← 打包後的 CSS 與 JS（帶 hash 檔名）
└── assets/…                                ← 圖片等靜態素材
```

- 全站 CSS 合併、壓縮成一個檔案
- 整站唯一的 JavaScript 是選單開關與進場動畫（來自 `src/layouts/Base.astro` 的 `<script>`），沒有任何前端框架 runtime
- 瀏覽器拿到的是完整 HTML——不執行 JS 也看得到全部內容，這是搜尋引擎收錄良好、載入快的原因

`dist/` 不需要伺服器程式，任何靜態主機（GitHub Pages、Netlify、一般虛擬主機）都能直接放。

## dev 與 build 的差別

| | `npm run dev` | `npm run build` |
|---|---|---|
| 用途 | 本機邊寫邊看 | 產出正式檔案 |
| 渲染時機 | 瀏覽器請求時即時渲染 | 一次性全部預先渲染 |
| 改 `.md` 後 | 存檔即自動更新畫面 | 需重新執行 |
| 產物 | 無（記憶體中） | `dist/` 資料夾 |

兩者走同一條轉換管線，dev 看到的就是 build 會產出的內容。

## 一句話總結

> `.md` 檔＝「YAML 資料 + Markdown 正文」。build 時：Zod 驗資料、remark 轉正文、`getStaticPaths()` 把每個檔案展開成一條路由，最後全部凍結成 `dist/` 裡的純 HTML。所以「新增一個檔案＝新增一頁」「刪掉檔案＝該頁消失」「欄位寫錯＝build 失敗保護你」。
