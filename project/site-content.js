// 安理國際法律事務所 — 官方網站補充內容（雙語）
// 與 content.js 的 LAW 併用：LAW 提供既有區塊，SITE 提供網站化後新增的內容。
// 洞察文章正文為示意假文（Lorem Ipsum / 中文假文），待正式稿件替換。

const ZH_FILLER = [
  "永和有永和路，中和有中和路，兩條路又在中永和交界，所以，中和有永和路，永和也有中和路。",
  "永和的中正路，接到中和的中正路，但是永和的中正路不接永和的中山路，永和的中山路要接中和的中山路。",
  "永和有中和路，中和也有永和路，中和的中山路有接永和的中正路，但永和的中正路不接永和的中山路。",
];

const EN_FILLER = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.",
];

const body = () => [
  { zh: ZH_FILLER[0], en: EN_FILLER[0] },
  { zh: ZH_FILLER[1], en: EN_FILLER[1] },
  { zh: ZH_FILLER[2], en: EN_FILLER[2] },
];

export const SITE = {
  ui: {
    menu:        { zh: "選單", en: "Menu" },
    close:       { zh: "關閉", en: "Close" },
    insightsNav: { zh: "法律洞察", en: "Insights" },
    lineNav:     { zh: "LINE 諮詢", en: "LINE" },
    readMore:    { zh: "閱讀全文", en: "Read" },
    viewAll:     { zh: "瀏覽全部文章", en: "View all articles" },
    back:        { zh: "返回首頁", en: "Back to home" },
    backList:    { zh: "返回洞察列表", en: "Back to insights" },
    more:        { zh: "延伸閱讀", en: "Further reading" },
    placeholder: { zh: "※ 本文為版面示意假文，待正式稿件替換。", en: "※ Placeholder copy for layout purposes. Final text to follow." },
    minRead:     { zh: "分鐘閱讀", en: "min read" },
  },

  values_h: {
    label: { zh: "執業理念", en: "Our Approach" },
    title: { zh: "三項不妥協的原則", en: "Three principles we do not compromise" },
  },

  values: [
    {
      title: { zh: "先於問題的判斷", en: "Judgment ahead of the problem" },
      desc: {
        zh: "法律工作真正的價值，往往在爭端發生之前。我們把時間花在預先識別風險、設計架構，讓客戶不必在最壞的時刻做最急的決定。",
        en: "The real value of legal work usually lies before the dispute. We invest in identifying risk early and designing structures, so that clients never have to make urgent decisions at the worst moment.",
      },
    },
    {
      title: { zh: "跨法域的同一標準", en: "One standard across jurisdictions" },
      desc: {
        zh: "台北、加州或北京，程序不同、邏輯不同，但客戶所應得到的縝密程度不應該有差別。我們以同一套嚴謹標準處理每一個法域的文件與策略。",
        en: "Taipei, California, or Beijing — procedure and logic differ, but the rigour a client receives should not. We apply a single exacting standard to documents and strategy in every jurisdiction.",
      },
    },
    {
      title: { zh: "由主持律師親自負責", en: "The principal stays on the file" },
      desc: {
        zh: "安理是精品事務所，不以人數取勝。每一件委任案由主持律師親自掌握關鍵判斷，客戶不會在案件中途面對一張陌生的臉。",
        en: "ANLI is a boutique practice; we do not compete on headcount. On every engagement the principal holds the key judgments — clients never meet an unfamiliar face midway through a matter.",
      },
    },
  ],

  // 專業領域的細項（對應 content.js 的 practice 陣列順序）
  practiceDetail: [
    { zh: ["跨境交易架構設計", "外人投資申報與許可", "國際商務合約談判", "跨國供應鏈法律風險"], en: ["Cross-border deal structuring", "Inbound investment filings", "International contract negotiation", "Supply-chain legal risk"] },
    { zh: ["專利與商標佈局", "授權與技術移轉", "營業秘密保護", "跨境侵權維權"], en: ["Patent & trademark strategy", "Licensing & technology transfer", "Trade-secret protection", "Cross-border enforcement"] },
    { zh: ["國際商務仲裁", "跨國訴訟策略", "調解與和解談判", "外國判決承認執行"], en: ["International arbitration", "Cross-border litigation strategy", "Mediation & settlement", "Recognition of foreign judgments"] },
    { zh: ["董事會治理架構", "法令遵循制度建置", "內部調查", "跨境監理應對"], en: ["Board governance", "Compliance programmes", "Internal investigations", "Cross-border regulatory response"] },
    { zh: ["併購交易統籌", "法律實地查核", "股權重組", "交易後整合"], en: ["M&A execution", "Legal due diligence", "Equity restructuring", "Post-closing integration"] },
    { zh: ["兩岸投資架構", "美國市場進入", "出口管制與制裁", "跨法域爭端整合"], en: ["Cross-Strait structures", "U.S. market entry", "Export controls & sanctions", "Multi-jurisdiction disputes"] },
  ],

  insights_h: {
    label: { zh: "法律洞察", en: "Insights" },
    title: { zh: "我們對法律的思考", en: "How we think about the law" },
    para: {
      zh: "關於跨境交易、爭端與治理的觀察筆記。內容僅供一般參考，不構成針對個案的法律意見。",
      en: "Notes on cross-border transactions, disputes, and governance. General information only — not legal advice on any specific matter.",
    },
  },

  insights: [
    {
      slug: "cross-border-structure",
      cat:  { zh: "跨國投資", en: "Investment" },
      date: { zh: "2026 年 6 月", en: "June 2026" },
      read: 6,
      title: { zh: "跨境投資架構的三個常見誤判", en: "Three common misjudgements in cross-border structures" },
      lead: {
        zh: "多數跨境投資的爭議，並非發生在談判桌上，而是在架構設定的那一刻就已經埋下。",
        en: "Most cross-border disputes are not created at the negotiating table; they are seeded the moment the structure is set.",
      },
      body: body(),
    },
    {
      slug: "arbitration-clause",
      cat:  { zh: "爭端解決", en: "Disputes" },
      date: { zh: "2026 年 5 月", en: "May 2026" },
      read: 8,
      title: { zh: "仲裁條款：合約裡最被低估的一句話", en: "The arbitration clause: the most underrated sentence in your contract" },
      lead: {
        zh: "一份合約若只剩一句話值得逐字校對，那就是仲裁條款。它決定了未來所有攻防的地點、語言與成本。",
        en: "If only one sentence in a contract deserves word-by-word review, it is the arbitration clause. It fixes the venue, language, and cost of every future move.",
      },
      body: body(),
    },
    {
      slug: "trade-secret",
      cat:  { zh: "智慧財產", en: "IP" },
      date: { zh: "2026 年 4 月", en: "April 2026" },
      read: 5,
      title: { zh: "營業秘密的保護，從人事制度開始", en: "Trade-secret protection begins with your HR process" },
      lead: {
        zh: "營業秘密訴訟的勝負，經常取決於三年前那份聘僱契約與門禁紀錄。",
        en: "Trade-secret cases are frequently decided by an employment contract and an access log written three years earlier.",
      },
      body: body(),
    },
    {
      slug: "board-governance",
      cat:  { zh: "公司治理", en: "Governance" },
      date: { zh: "2026 年 3 月", en: "March 2026" },
      read: 7,
      title: { zh: "獨立董事的義務邊界在哪裡", en: "Where the independent director's duty actually ends" },
      lead: {
        zh: "治理制度的意義不在文件齊備，而在真正發生問題時，責任的分配是否清楚可循。",
        en: "Governance is not a matter of complete paperwork; it is whether responsibility remains traceable when something actually goes wrong.",
      },
      body: body(),
    },
    {
      slug: "cross-strait",
      cat:  { zh: "兩岸法務", en: "Cross-Strait" },
      date: { zh: "2026 年 2 月", en: "February 2026" },
      read: 9,
      title: { zh: "兩岸投資架構重整的時機判斷", en: "Timing the restructuring of a cross-Strait holding" },
      lead: {
        zh: "架構重整的難處不在技術，而在時機。太早失去彈性，太晚則失去選擇。",
        en: "Restructuring is rarely a technical problem — it is a timing problem. Too early costs flexibility; too late costs options.",
      },
      body: body(),
    },
    {
      slug: "ma-due-diligence",
      cat:  { zh: "併購", en: "M&A" },
      date: { zh: "2026 年 1 月", en: "January 2026" },
      read: 6,
      title: { zh: "實地查核該問的，往往不是清單上的問題", en: "Due diligence: the questions that are not on the checklist" },
      lead: {
        zh: "查核清單能發現已經寫下來的風險；真正昂貴的風險，通常從未被寫下來。",
        en: "A checklist finds the risks someone wrote down. The expensive ones were never written down at all.",
      },
      body: body(),
    },
  ],

  line: {
    label: { zh: "LINE 諮詢", en: "LINE" },
    title: { zh: "也可以用 LINE 與我們聯繫", en: "You may also reach us on LINE" },
    para: {
      zh: "掃描 QR Code 或搜尋官方帳號，簡述您的法律議題，我們會安排適當的諮詢方式。LINE 訊息僅作初步聯繫之用，請勿傳送機密或急迫性文件。",
      en: "Scan the QR code or search for our official account and outline your matter briefly. LINE is for initial contact only — please do not send confidential or time-critical documents there.",
    },
    account: "@anli-law",
    accountLabel: { zh: "官方帳號", en: "Official account" },
    qrNote: { zh: "QR CODE 圖檔待提供", en: "QR CODE IMAGE PENDING" },
  },

  legal: {
    navPrivacy:    { zh: "隱私權政策", en: "Privacy Policy" },
    navDisclaimer: { zh: "免責聲明", en: "Disclaimer" },
    updated:       { zh: "最後更新：2026 年 8 月", en: "Last updated: August 2026" },
    privacy: {
      title: { zh: "隱私權政策", en: "Privacy Policy" },
      lead: {
        zh: "安理國際法律事務所（以下稱「本所」）尊重並保護您的個人資料。本政策說明本所於本網站蒐集、處理及利用個人資料之方式。",
        en: "ANLI International Law Offices (\"the Firm\") respects and protects your personal data. This policy explains how the Firm collects, processes, and uses personal data through this website.",
      },
      sections: [
        {
          h: { zh: "一、蒐集之個人資料項目", en: "1. Categories of data collected" },
          p: {
            zh: "當您透過電子郵件、電話或 LINE 官方帳號與本所聯繫時，本所可能蒐集您的姓名、聯絡方式及您所主動提供之案件相關資訊。本網站不使用行為追蹤或廣告投放用之第三方 Cookie。",
            en: "When you contact the Firm by email, telephone, or our LINE official account, we may collect your name, contact details, and any matter-related information you volunteer. This website does not use third-party cookies for behavioural tracking or advertising.",
          },
        },
        {
          h: { zh: "二、利用目的與期間", en: "2. Purpose and retention" },
          p: {
            zh: "本所僅為回覆您的詢問、評估是否受理委任、以及履行法定義務之目的利用您的個人資料。除法令另有規定或委任關係所必要外，本所於目的消失後即刪除或匿名化相關資料。",
            en: "Personal data is used solely to respond to your enquiry, assess whether the Firm may accept an engagement, and comply with statutory obligations. Unless the law or an engagement requires otherwise, data is deleted or anonymised once that purpose ends.",
          },
        },
        {
          h: { zh: "三、資料之提供與保密", en: "3. Disclosure and confidentiality" },
          p: {
            zh: "本所人員均受律師倫理規範及保密義務拘束。除經您同意、法院或主管機關依法要求，或為執行委任事務所必要外，本所不會將您的個人資料提供給第三人。",
            en: "All personnel are bound by professional ethics rules and duties of confidentiality. The Firm does not disclose your personal data to third parties except with your consent, upon lawful request by a court or competent authority, or where necessary to carry out an engagement.",
          },
        },
        {
          h: { zh: "四、您的權利", en: "4. Your rights" },
          p: {
            zh: "依個人資料保護法，您得就本所保有之個人資料請求查詢、閱覽、製給複製本、補充或更正、停止蒐集處理利用或刪除。請以本網站所載電子郵件與本所聯繫，本所將於合理期間內回覆。",
            en: "Under applicable data protection law you may request access to, copies of, correction or supplementation of, cessation of processing of, or deletion of the personal data we hold. Please write to the email address shown on this site; we will respond within a reasonable period.",
          },
        },
      ],
    },
    disclaimer: {
      title: { zh: "免責聲明", en: "Disclaimer" },
      lead: {
        zh: "本網站所載內容僅供一般資訊參考，不構成法律意見，亦不因您瀏覽本網站或與本所聯繫而成立律師與客戶關係。",
        en: "The contents of this website are provided for general information only. They do not constitute legal advice, and no attorney–client relationship arises from your browsing this site or contacting the Firm.",
      },
      sections: [
        {
          h: { zh: "一、非法律意見", en: "1. Not legal advice" },
          p: {
            zh: "法律之適用高度依賴具體事實與時點。本網站文章、洞察與說明性內容均為一般性論述，不得作為個案處理之依據。任何具體事務請先取得針對個案之專業意見。",
            en: "The application of law depends heavily on specific facts and timing. Articles, insights, and explanatory material on this site are general in nature and must not be relied upon in handling any particular matter. Please obtain advice specific to your circumstances.",
          },
        },
        {
          h: { zh: "二、委任關係之成立", en: "2. Formation of an engagement" },
          p: {
            zh: "律師與客戶關係僅於雙方簽署書面委任契約後成立。在此之前所傳送之資訊不受律師與客戶特權保護，亦請勿傳送機密或具時效性之文件。",
            en: "An attorney–client relationship is established only upon execution of a written engagement letter by both parties. Information transmitted before then is not protected by attorney–client privilege; please do not send confidential or time-sensitive documents.",
          },
        },
        {
          h: { zh: "三、內容之時效與外部連結", en: "3. Currency of content and external links" },
          p: {
            zh: "本所盡力維持內容之正確性，但不保證其為最新或完整。本網站可能包含第三方網站連結，其內容非本所所控制，本所不就其正確性或安全性負責。",
            en: "The Firm endeavours to keep content accurate but does not warrant that it is current or complete. This site may contain links to third-party websites, whose content is outside the Firm's control and for whose accuracy or security the Firm accepts no responsibility.",
          },
        },
        {
          h: { zh: "四、著作權", en: "4. Copyright" },
          p: {
            zh: "本網站之文字、編排與視覺設計著作權均屬本所所有。除法律允許之合理使用外，未經本所書面同意，不得重製、公開傳輸或改作。",
            en: "Copyright in the text, arrangement, and visual design of this website belongs to the Firm. Save for fair use permitted by law, no reproduction, public transmission, or adaptation is permitted without the Firm's written consent.",
          },
        },
      ],
    },
  },

  footer: {
    navLabel:  { zh: "網站導覽", en: "Navigate" },
    legalLabel:{ zh: "法律資訊", en: "Legal" },
    contactLabel: { zh: "聯絡", en: "Contact" },
  },
};
