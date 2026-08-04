// 安理國際法律事務所 — 全站雙語內容字典
// 每個欄位為 { zh, en }；列表為陣列。修改網站文字（非文章）請編輯本檔。
// 「法律洞察」文章不在此處：請至 src/content/insights/ 維護 Markdown 檔。

import type { Bi, BiList } from './i18n';

export const LAW = {
  firm: {
    initials: 'ANLI',
    short: { zh: '安理國際', en: 'ANLI' },
    full: { zh: '安理國際法律事務所', en: 'Yang & Associates Law Firm' },
  },

  nav: {
    about: { zh: '事務所', en: 'Firm' },
    practice: { zh: '專業領域', en: 'Practice' },
    principal: { zh: '主持律師', en: 'Principal' },
    contact: { zh: '聯絡', en: 'Contact' },
  },

  hero: {
    kicker: { zh: '國際法律顧問', en: 'International Legal Counsel' },
    line1: { zh: '跨越疆界的', en: 'Legal foresight' },
    line2: { zh: '法律遠見', en: 'beyond borders' },
    para: {
      zh: '從柏克萊到台北，安理以跨法域的學術訓練與第一線實務經驗，協助企業與個人在最複雜的跨境難題中，做出最具遠見的決策。',
      en: 'From Berkeley to Taipei, ANLI pairs cross-jurisdictional scholarship with frontline practice — helping enterprises and individuals act with foresight on their most complex cross-border matters.',
    },
    cta: { zh: '預約諮詢', en: 'Request a consultation' },
    cta2: { zh: '認識主持律師', en: 'Meet the principal' },
  },

  creds: [
    { zh: '柏克萊加州大學', en: 'UC Berkeley' },
    { zh: '史丹佛大學', en: 'Stanford' },
    { zh: '國立臺灣大學', en: 'NTU' },
  ] as Bi[],

  about: {
    label: { zh: '事務所', en: 'The Firm' },
    title: {
      zh: '以國際縱深定義的精品法律事務所',
      en: 'A boutique firm defined by international depth',
    },
    para1: {
      zh: '安理國際法律事務所立足台灣、放眼全球。事務所由兼具柏克萊、史丹佛與台大三校法學訓練的楊佳陵博士主持，融合學術的嚴謹、深厚的法學素養與實務的敏銳。',
      en: 'ANLI is a law firm rooted in Taiwan with a global outlook. The firm is led by Dr. Chia-Ling Yang — trained in law at UC Berkeley, Stanford, and National Taiwan University — uniting academic rigor, deep legal scholarship, and practical acuity.',
    },
    para2: {
      zh: '安理並與英美執業律師及資訊安全科技顧問組成跨國協作團隊，為客戶在法律糾紛、憲法訴訟、跨國爭端與公司治理中，提供完整且可信賴的法律解決方案。',
      en: 'Working alongside practitioners qualified in the United States and the United Kingdom, together with cybersecurity advisors, ANLI assembles cross-border teams that deliver complete and dependable legal solutions in disputes, constitutional litigation, international controversies, and corporate governance.',
    },
  },

  practice_h: {
    label: { zh: '專業領域', en: 'Practice Areas' },
    title: { zh: '我們的執業範疇', en: 'What we practise' },
    hint: {
      zh: '各領域皆可點選，查看常見案件類型與詳細說明',
      en: 'Select any area for common matters and details',
    },
  },

  // 執業領域詳細頁 UI 文字（內容本體在 src/lib/practiceContent.ts）
  practiceUi: {
    more: { zh: '深入了解', en: 'Learn more' },
    breadcrumb: { zh: '返回執業範疇', en: 'Back to practice areas' },
    casesTitle: { zh: '常見案件類型', en: 'Common Matters We Handle' },
    scopeTitle: { zh: '服務內容', en: 'What We Do' },
    faqTitle: { zh: '常見問題', en: 'Frequently Asked Questions' },
    ctaTitle: { zh: '與我們談談您的情況', en: 'Talk to us about your situation' },
    ctaPara: {
      zh: '每個案件的事實與時點都不同，網頁內容無法取代個案評估。歡迎來信或來電簡述您的情況，我們將安排保密的初步諮詢。',
      en: 'Every matter turns on its own facts and timing — nothing on this page substitutes for a case-specific assessment. Write or call us with a brief outline, and we will arrange a confidential initial consultation.',
    },
    otherTitle: { zh: '其他執業領域', en: 'Other Practice Areas' },
    note: {
      zh: '本頁內容僅供一般參考，不構成針對個案的法律意見。',
      en: 'This page is general information only and does not constitute legal advice on any specific matter.',
    },
  },

  practice: [
    {
      slug: 'family-custody',
      title: { zh: '家事、跨境親權與兒童權利', en: "Family, Cross-Border Custody & Children's Rights" },
      desc: {
        zh: '親權、交付子女與跨國親權爭議的代理，並延伸至憲法訴訟層次的權利救濟。',
        en: 'Counsel on custody, child handover, and cross-border parental disputes — extending to constitutional redress.',
      },
    },
    {
      slug: 'labor-disputes',
      title: { zh: '勞資爭議', en: 'Employment & Labor Disputes' },
      desc: {
        zh: '僱傭關係確認、復職與各項勞動給付請求的訴訟攻防。',
        en: 'Advocacy on employment-status confirmation, reinstatement, and labor-payment claims.',
      },
    },
    {
      slug: 'civil-litigation',
      title: { zh: '財產、繼承與一般民事訴訟', en: 'Property, Succession & Civil Litigation' },
      desc: {
        zh: '共有物分割、繼承與損害賠償等財產及侵權民事事件的處理。',
        en: 'Partition of co-owned property, succession, damages, and general tort matters.',
      },
    },
    {
      slug: 'intellectual-property',
      title: { zh: '智慧財產權', en: 'Intellectual Property' },
      desc: {
        zh: '專利、商標與營業秘密的佈局、授權及全球維權。',
        en: 'Strategy, licensing, and global enforcement of patents, trademarks, and trade secrets.',
      },
    },
    {
      slug: 'dispute-resolution',
      title: { zh: '國際爭端解決與仲裁', en: 'Dispute Resolution & Arbitration' },
      desc: {
        zh: '跨國訴訟與國際商務仲裁的策略規劃與攻防。',
        en: 'Strategy and advocacy across cross-border litigation and international commercial arbitration.',
      },
    },
    {
      slug: 'corporate-governance',
      title: { zh: '公司治理與法令遵循', en: 'Corporate Governance & Compliance' },
      desc: {
        zh: '董事會治理、法令遵循與跨境監理風險之管理。',
        en: 'Board governance, regulatory compliance, and cross-jurisdictional risk management.',
      },
    },
    {
      slug: 'cross-border-business',
      title: { zh: '跨國商務與投資', en: 'Cross-Border Business & Investment' },
      desc: {
        zh: '跨境交易架構、外人投資與國際商務合約的全程法律規劃。',
        en: 'End-to-end legal planning for cross-border transaction structures, foreign investment, and international commercial contracts.',
      },
    },
    {
      slug: 'tax-wealth',
      title: { zh: '稅務規劃與財富傳承', en: 'Tax Planning & Wealth Succession' },
      desc: {
        zh: '以事前規劃降低稅務風險，為資產與家族傳承建立長遠布局。',
        en: 'Forward-looking tax planning that manages risk and builds enduring structures for asset and family succession.',
      },
    },
  ],

  principal: {
    label: { zh: '主持律師', en: 'Principal' },
    name: { zh: '楊佳陵 博士', en: 'Dr. Chia-Ling Yang' },
    title: {
      zh: '主持律師・法律科學博士（J.S.D.）',
      en: 'Principal Attorney · Doctor of the Science of Law (J.S.D.)',
    },
    intro: {
      zh: '楊佳陵博士擁有美國柏克萊加州大學法律科學博士（J.S.D.）學位，並先後取得史丹佛大學法律科學碩士與國立臺灣大學法學士，學術養成橫跨太平洋兩岸。執業生涯歷經理律、萬國等台灣頂尖法律事務所，並於柏克萊從事博士後研究與中國法教學，兼具深厚的學術底蘊與第一線跨境實務經驗。',
      en: "Dr. Chia-Ling Yang holds a Doctor of the Science of Law (J.S.D.) from UC Berkeley, a Master of the Science of Law from Stanford, and a Bachelor of Laws from National Taiwan University — a formation spanning both shores of the Pacific. Her practice runs through Taiwan's leading firms, Lee and Li and Formosa Transnational, alongside postdoctoral research and Chinese-law teaching at Berkeley, uniting scholarly depth with frontline cross-border experience.",
    },
    eduLabel: { zh: '學歷', en: 'Education' },
    expLabel: { zh: '主要經歷', en: 'Experience' },
    specLabel: { zh: '專長領域', en: 'Areas of Expertise' },
    plate: { zh: '圖版 01 — 主持律師', en: 'Plate 01 — Principal' },
  },

  // 主持律師專長領域（非訟／訴訟兩類；lead 為類別引言，可省略）
  specialties: [
    {
      cat: { zh: '非訟類', en: 'Advisory & Non-Contentious' },
      lead: {
        zh: '醫療法、藥事法、神經科學法（Neuro Law）、專利法、生物科技之倫理與法律、全民健保法制、勞基法、公平交易法等領域：',
        en: 'Across medical law, pharmaceutical affairs law, neurolaw, patent law, the ethics and law of biotechnology, National Health Insurance regulation, labor standards, and fair trade law:',
      },
      items: {
        zh: [
          '契約審閱與法律諮詢',
          '法律意見書',
          '英文律師函',
          '與美國、英國律師共同辦案（Co-counsel）',
          '法律演說即時口譯',
        ],
        en: [
          'Contract review & legal consultation',
          'Legal opinions',
          'Attorney letters in English',
          'Co-counsel engagements with U.S. and U.K. attorneys',
          'Real-time interpretation for legal addresses',
        ],
      },
    },
    {
      cat: { zh: '訴訟類', en: 'Litigation & Contentious' },
      items: {
        zh: [
          '國內外各類型民事、刑事訴訟',
          '行政爭訟',
          '白領勞資爭議訴訟',
        ],
        en: [
          'Civil and criminal litigation of all types, domestic and international',
          'Administrative litigation & appeals',
          'White-collar employment litigation',
        ],
      },
    },
  ] as { cat: Bi; lead?: Bi; items: BiList }[],

  education: [
    {
      school: { zh: '美國柏克萊加州大學法學院', en: 'University of California, Berkeley — School of Law' },
      degree: { zh: '法律科學博士・法學碩士（J.S.D., LL.M.）', en: 'J.S.D., LL.M.' },
    },
    {
      school: { zh: '美國史丹佛大學法學院', en: 'Stanford Law School' },
      degree: { zh: '法律科學碩士（J.S.M.）', en: 'J.S.M.' },
    },
    {
      school: { zh: '國立臺灣大學法律學院法律系', en: 'National Taiwan University — College of Law' },
      degree: { zh: '法學士（LL.B.）', en: 'LL.B.' },
    },
  ],

  experience: [
    {
      org: { zh: '台北律師職業工會', en: "Taipei Lawyers' Professional Union" },
      role: { zh: '創會理事長', en: 'Founding Chairperson' },
    },
    {
      org: { zh: '理律法律事務所', en: 'Lee and Li, Attorneys-at-Law' },
      role: { zh: '受僱律師', en: 'Associate Attorney' },
    },
    {
      org: { zh: '萬國法律事務所', en: 'Formosa Transnational, Attorneys at Law' },
      role: { zh: '受僱律師', en: 'Associate Attorney' },
    },
    {
      org: { zh: '柏克萊加州大學法學院', en: 'UC Berkeley — School of Law' },
      role: { zh: '博士後研究員', en: 'Postdoctoral Fellow' },
    },
    {
      org: { zh: '柏克萊加州大學法學院・中國法課程', en: "UC Berkeley — Chinese Law Program" },
      role: { zh: '兼任助教', en: 'Teaching Assistant' },
    },
    {
      org: { zh: '國立臺北護理健康大學・旅遊健康研究所', en: "Nat'l Taipei Univ. of Nursing & Health Sciences" },
      role: { zh: '兼任助理教授', en: 'Adjunct Assistant Professor' },
    },
  ],

  // 團隊成員
  team_h: {
    label: { zh: '團隊成員', en: 'Team' },
    expertiseLabel: { zh: '專長', en: 'Expertise' },
    educationLabel: { zh: '學歷', en: 'Education' },
  },

  team: [
    {
      name: { zh: '楊定諺', en: '楊定諺' },
      role: { zh: '律師', en: 'Attorney' },
      expertise: null,
      education: {
        zh: '國立台灣大學法律學系畢業',
        en: 'Department of Law, National Taiwan University',
      },
      image: '/assets/team-yang.png',
      imageAlt: {
        zh: '楊定諺律師照片',
        en: 'Portrait of attorney 楊定諺',
      },
    },
    {
      name: { zh: '詹前晟', en: '詹前晟' },
      role: { zh: '律師', en: 'Attorney' },
      expertise: null,
      education: {
        zh: '國立政治大學法律學系',
        en: 'Department of Law, National Chengchi University',
      },
      image: '/assets/team-zhan-placeholder.webp',
      imageAlt: {
        zh: '詹前晟律師暫用灰色假人示意圖',
        en: 'Temporary gray mannequin placeholder for attorney 詹前晟',
      },
    },
    {
      name: { zh: '黃煜翔', en: '黃煜翔' },
      role: { zh: '資訊顧問', en: 'Information Consultant' },
      expertise: {
        zh: '資訊安全、數位鑑識、加密貨幣金流追蹤、公開來源情報分析',
        en: 'Information Security, Digital Forensics, Cryptocurrency Flow Tracking & Open-Source Intelligence Analysis',
      },
      education: {
        zh: '國立台灣大學資訊工程學系與數學系雙主修畢業',
        en: 'Dual major in Computer Science and Mathematics, National Taiwan University',
      },
      image: '/assets/team-huang.png',
      imageAlt: {
        zh: '黃煜翔資訊顧問照片',
        en: 'Portrait of information consultant 黃煜翔',
      },
    },
  ],

  contact: {
    label: { zh: '聯絡安理', en: 'Contact' },
    title: { zh: '讓我們從一次對話開始', en: 'Let us begin with a conversation' },
    para: {
      zh: '歡迎來信簡述您所面臨的法律議題，我們將安排一次審慎而保密的初步諮詢。',
      en: 'Write to us with a brief outline of your matter, and we will arrange a considered, confidential initial consultation.',
    },
    email: 'contact@anli-law.com',
    // 顯示用電話與撥號用連結（tel: 需為連續數字）
    phone: '+886 2 2393 6003',
    phoneHref: '+886223936003',
    office: { zh: '台北所', en: 'Taipei Office' },
    zip: '10049',
    // 街道地址（不含郵遞區號，郵遞區號另行排版）
    street: {
      zh: '台北市中正區仁愛路二段 68 號 6 樓',
      en: "6F, No. 68, Sec. 2, Ren'ai Rd., Zhongzheng Dist., Taipei",
    },
    // 單行完整地址（用於頁尾、地圖連結等窄版位）
    address: {
      zh: '10049 台北市中正區仁愛路二段 68 號 6 樓',
      en: "6F, No. 68, Sec. 2, Ren'ai Rd., Zhongzheng Dist., Taipei 10049, Taiwan",
    },
    map: {
      query: '台北市中正區仁愛路二段68號',
      district: { zh: '台北・中正區', en: 'Taipei · Zhongzheng' },
      title: { zh: '安理國際法律事務所台北所位置', en: 'Location of Yang & Associates Law Firm, Taipei Office' },
      directions: { zh: '在 Google Maps 規劃路線', en: 'Plan your route on Google Maps' },
      contactLabel: { zh: '直接聯繫', en: 'Direct line' },
      note: {
        zh: '所有初步聯繫均由本所審慎處理，並以保密為原則。',
        en: 'Every initial enquiry is handled with care and in confidence.',
      },
    },
    cta: { zh: '預約諮詢', en: 'Request a consultation' },
  },

  footer: {
    note: { zh: '立足台北・連結世界', en: 'Rooted in Taipei. Connected to the world.' },
    copyright: {
      zh: '© 2026 安理國際法律事務所　版權所有',
      en: '© 2026 Yang & Associates Law Firm. All rights reserved.',
    },
  },
};

export const SITE = {
  social: {
    facebook: {
      url: 'https://www.facebook.com/p/%E5%AE%89%E7%90%86%E5%9C%8B%E9%9A%9B%E6%B3%95%E5%BE%8B%E4%BA%8B%E5%8B%99%E6%89%80-Yang-Associates-Law-Firm-100063850968087',
      label: { zh: 'Facebook 粉絲專頁', en: 'Facebook' },
    },
  },

  ui: {
    insightsNav: { zh: '法律洞察', en: 'Insights' },
    readMore: { zh: '閱讀全文', en: 'Read' },
    viewAll: { zh: '瀏覽全部文章', en: 'View all articles' },
    back: { zh: '返回首頁', en: 'Back to home' },
    backList: { zh: '返回洞察列表', en: 'Back to insights' },
    more: { zh: '延伸閱讀', en: 'Further reading' },
    minRead: { zh: '分鐘閱讀', en: 'min read' },
    notFoundTitle: { zh: '找不到頁面', en: 'Page not found' },
    notFoundPara: {
      zh: '您所尋找的頁面不存在或已移動。',
      en: 'The page you are looking for does not exist or has moved.',
    },
  },

  values_h: {
    label: { zh: '執業理念', en: 'Our Approach' },
    title: { zh: '三項不妥協的原則', en: 'Three principles we do not compromise' },
  },

  values: [
    {
      title: { zh: '量身定制策略', en: 'Tailored strategy' },
      desc: {
        zh: '法律工作真正的價值，往往在爭端發生之前。我們把時間花在預先識別風險、設計架構，讓客戶不必在最壞的時刻做最急的決定，並針對您的目標與風險承受度，打造專屬的法律解決方案。',
        en: 'The real value of legal work usually lies before the dispute. We invest in identifying risk early and designing structures, so that clients never have to make urgent decisions at the worst moment — and we craft bespoke legal solutions around your goals and risk tolerance.',
      },
    },
    {
      title: { zh: '全球視野', en: 'A global perspective' },
      desc: {
        zh: '跨越司法管轄區，為客戶提供無縫接軌的跨國法律諮詢與執行方案。',
        en: 'Across jurisdictions, we deliver seamless cross-border legal counsel and execution.',
      },
    },
    {
      title: { zh: '法律與科技並進', en: 'Law and technology in step' },
      desc: {
        zh: '現代爭端不只發生在法庭。安理與英美執業律師及資訊安全科技顧問長期協作，從跨境法律攻防到數位鑑識與加密貨幣金流追蹤，為客戶提供證據到策略的完整戰力。',
        en: 'Modern disputes are not confined to the courtroom. ANLI works in long-standing collaboration with UK- and US-qualified lawyers and information-security consultants — from cross-border legal strategy to digital forensics and cryptocurrency tracing — delivering full capability from evidence to strategy.',
      },
    },
  ],

  // 專業領域的細項（對應 LAW.practice 陣列順序）
  practiceDetail: [
    {
      zh: ['親權改定與停止親權', '交付子女與跨國親權爭議', '兒童表意權與程序保障', '憲法訴訟（111 年憲判字第 8 號）'],
      en: ['Custody modification & termination', 'Child handover & cross-border disputes', "Children's right to be heard & due process", 'Constitutional litigation (TCC Judgment No. 8 of 2022)'],
    },
    {
      zh: ['確認僱傭關係與復職', '薪資與業績獎金請求', '加班費爭議', '勞工退休金提繳'],
      en: ['Employment confirmation & reinstatement', 'Wage & performance-bonus claims', 'Overtime pay disputes', 'Pension contributions'],
    },
    {
      zh: ['共有物分割', '繼承登記與遺產分配', '損害賠償請求', '一般侵權民事訴訟'],
      en: ['Partition of co-owned property', 'Succession registration & estate division', 'Damages claims', 'General tort litigation'],
    },
    {
      zh: ['專利與商標佈局', '授權與技術移轉', '營業秘密保護', '跨境侵權維權'],
      en: ['Patent & trademark strategy', 'Licensing & technology transfer', 'Trade-secret protection', 'Cross-border enforcement'],
    },
    {
      zh: ['國際商務仲裁', '跨國訴訟策略', '調解與和解談判', '外國判決承認執行'],
      en: ['International arbitration', 'Cross-border litigation strategy', 'Mediation & settlement', 'Recognition of foreign judgments'],
    },
    {
      zh: ['董事會治理架構', '法令遵循制度建置', '內部調查', '跨境監理應對'],
      en: ['Board governance', 'Compliance programmes', 'Internal investigations', 'Cross-border regulatory response'],
    },
    {
      zh: ['跨境交易架構設計', '外人投資申報與許可', '國際商務合約談判', '跨國供應鏈法律風險'],
      en: ['Cross-border transaction structuring', 'Foreign investment filings & approvals', 'International contract negotiation', 'Supply-chain legal risk management'],
    },
    {
      zh: ['事前稅務規劃', '資產與家族傳承', '稅務行政救濟'],
      en: ['Advance tax planning', 'Asset & family succession', 'Tax administrative remedies'],
    },
  ] as BiList[],

  insights_h: {
    label: { zh: '法律洞察', en: 'Insights' },
    title: { zh: '我們對法律的思考', en: 'How we think about the law' },
    para: {
      zh: '內容僅供一般參考，不構成針對個案的法律意見。',
      en: 'Notes on cross-border transactions, disputes, and governance. General information only — not legal advice on any specific matter.',
    },
  },

  line: {
    label: { zh: 'LINE 諮詢', en: 'LINE' },
    title: { zh: '也可以用 LINE 與我們聯繫', en: 'You may also reach us on LINE' },
    para: {
      zh: '掃描 QR Code 或搜尋官方帳號，簡述您的法律議題，我們會安排適當的諮詢方式。LINE 訊息僅作初步聯繫之用，請勿傳送機密或急迫性文件。',
      en: 'Scan the QR code or search for our official account and outline your matter briefly. LINE is for initial contact only — please do not send confidential or time-critical documents there.',
    },
    account: '@anli-law',
    accountLabel: { zh: '官方帳號', en: 'Official account' },
    qrNote: { zh: 'QR CODE 圖檔待提供', en: 'QR CODE IMAGE PENDING' },
  },

  legal: {
    navPrivacy: { zh: '隱私權政策', en: 'Privacy Policy' },
    navDisclaimer: { zh: '免責聲明', en: 'Disclaimer' },
    updated: { zh: '最後更新：2026 年 8 月', en: 'Last updated: August 2026' },
    privacy: {
      title: { zh: '隱私權政策', en: 'Privacy Policy' },
      lead: {
        zh: '安理國際法律事務所（以下稱「本所」）尊重並保護您的個人資料。本政策說明本所於本網站蒐集、處理及利用個人資料之方式。',
        en: 'Yang & Associates Law Firm ("the Firm") respects and protects your personal data. This policy explains how the Firm collects, processes, and uses personal data through this website.',
      },
      sections: [
        {
          h: { zh: '一、蒐集之個人資料項目', en: '1. Categories of data collected' },
          p: {
            zh: '當您透過電子郵件、電話或 LINE 官方帳號與本所聯繫時，本所可能蒐集您的姓名、聯絡方式及您所主動提供之案件相關資訊。本網站不使用行為追蹤或廣告投放用之第三方 Cookie。',
            en: 'When you contact the Firm by email, telephone, or our LINE official account, we may collect your name, contact details, and any matter-related information you volunteer. This website does not use third-party cookies for behavioural tracking or advertising.',
          },
        },
        {
          h: { zh: '二、利用目的與期間', en: '2. Purpose and retention' },
          p: {
            zh: '本所僅為回覆您的詢問、評估是否受理委任、以及履行法定義務之目的利用您的個人資料。除法令另有規定或委任關係所必要外，本所於目的消失後即刪除或匿名化相關資料。',
            en: 'Personal data is used solely to respond to your enquiry, assess whether the Firm may accept an engagement, and comply with statutory obligations. Unless the law or an engagement requires otherwise, data is deleted or anonymised once that purpose ends.',
          },
        },
        {
          h: { zh: '三、資料之提供與保密', en: '3. Disclosure and confidentiality' },
          p: {
            zh: '本所人員均受律師倫理規範及保密義務拘束。除經您同意、法院或主管機關依法要求，或為執行委任事務所必要外，本所不會將您的個人資料提供給第三人。',
            en: 'All personnel are bound by professional ethics rules and duties of confidentiality. The Firm does not disclose your personal data to third parties except with your consent, upon lawful request by a court or competent authority, or where necessary to carry out an engagement.',
          },
        },
        {
          h: { zh: '四、您的權利', en: '4. Your rights' },
          p: {
            zh: '依個人資料保護法，您得就本所保有之個人資料請求查詢、閱覽、製給複製本、補充或更正、停止蒐集處理利用或刪除。請以本網站所載電子郵件與本所聯繫，本所將於合理期間內回覆。',
            en: 'Under applicable data protection law you may request access to, copies of, correction or supplementation of, cessation of processing of, or deletion of the personal data we hold. Please write to the email address shown on this site; we will respond within a reasonable period.',
          },
        },
      ],
    },
    disclaimer: {
      title: { zh: '免責聲明', en: 'Disclaimer' },
      lead: {
        zh: '本網站所載內容僅供一般資訊參考，不構成法律意見，亦不因您瀏覽本網站或與本所聯繫而成立律師與客戶關係。',
        en: 'The contents of this website are provided for general information only. They do not constitute legal advice, and no attorney–client relationship arises from your browsing this site or contacting the Firm.',
      },
      sections: [
        {
          h: { zh: '一、非法律意見', en: '1. Not legal advice' },
          p: {
            zh: '法律之適用高度依賴具體事實與時點。本網站文章、洞察與說明性內容均為一般性論述，不得作為個案處理之依據。任何具體事務請先取得針對個案之專業意見。',
            en: 'The application of law depends heavily on specific facts and timing. Articles, insights, and explanatory material on this site are general in nature and must not be relied upon in handling any particular matter. Please obtain advice specific to your circumstances.',
          },
        },
        {
          h: { zh: '二、委任關係之成立', en: '2. Formation of an engagement' },
          p: {
            zh: '律師與客戶關係僅於雙方簽署書面委任契約後成立。在此之前所傳送之資訊不受律師與客戶特權保護，亦請勿傳送機密或具時效性之文件。',
            en: 'An attorney–client relationship is established only upon execution of a written engagement letter by both parties. Information transmitted before then is not protected by attorney–client privilege; please do not send confidential or time-sensitive documents.',
          },
        },
        {
          h: { zh: '三、內容之時效與外部連結', en: '3. Currency of content and external links' },
          p: {
            zh: '本所盡力維持內容之正確性，但不保證其為最新或完整。本網站可能包含第三方網站連結，其內容非本所所控制，本所不就其正確性或安全性負責。',
            en: "The Firm endeavours to keep content accurate but does not warrant that it is current or complete. This site may contain links to third-party websites, whose content is outside the Firm's control and for whose accuracy or security the Firm accepts no responsibility.",
          },
        },
        {
          h: { zh: '四、著作權', en: '4. Copyright' },
          p: {
            zh: '本網站之文字、編排與視覺設計著作權均屬本所所有。除法律允許之合理使用外，未經本所書面同意，不得重製、公開傳輸或改作。',
            en: "Copyright in the text, arrangement, and visual design of this website belongs to the Firm. Save for fair use permitted by law, no reproduction, public transmission, or adaptation is permitted without the Firm's written consent.",
          },
        },
      ],
    },
  },

  footer: {
    navLabel: { zh: '網站導覽', en: 'Navigate' },
    legalLabel: { zh: '法律資訊', en: 'Legal' },
    contactLabel: { zh: '聯絡', en: 'Contact' },
  },
};
