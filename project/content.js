// 安理國際法律事務所 — 雙語內容字典 (shared across all design directions)
// 每個欄位為 { zh, en }；列表為陣列。由各設計方向的 DCLogic 以 dynamic import() 載入。

export const LAW = {
  firm: {
    initials: "ANLI",
    short: { zh: "安理國際", en: "ANLI" },
    full:  { zh: "安理國際法律事務所", en: "ANLI International Law Offices" },
  },

  nav: {
    about:     { zh: "事務所",   en: "Firm" },
    practice:  { zh: "專業領域", en: "Practice" },
    principal: { zh: "主持律師", en: "Principal" },
    contact:   { zh: "聯絡",     en: "Contact" },
  },

  hero: {
    kicker: { zh: "國際法律顧問", en: "International Legal Counsel" },
    line1:  { zh: "跨越疆界的",   en: "Legal foresight" },
    line2:  { zh: "法律遠見",     en: "beyond borders" },
    para: {
      zh: "從柏克萊到台北，安理以跨法域的學術訓練與第一線實務經驗，協助企業與個人在最複雜的跨境難題中，做出最具遠見的決策。",
      en: "From Berkeley to Taipei, ANLI pairs cross-jurisdictional scholarship with frontline practice — helping enterprises and individuals act with foresight on their most complex cross-border matters.",
    },
    cta:  { zh: "預約諮詢",       en: "Request a consultation" },
    cta2: { zh: "認識主持律師",   en: "Meet the principal" },
  },

  creds: [
    { zh: "柏克萊加州大學", en: "UC Berkeley" },
    { zh: "史丹佛大學",     en: "Stanford" },
    { zh: "國立臺灣大學",   en: "NTU" },
  ],

  about: {
    label: { zh: "事務所", en: "The Firm" },
    title: {
      zh: "以國際縱深定義的精品法律事務所",
      en: "A boutique firm defined by international depth",
    },
    para1: {
      zh: "安理國際法律事務所立足台灣、放眼全球。我們深信，真正的國際化不只是語言，而是對不同法域、商業文化與爭端邏輯的深刻理解。",
      en: "ANLI is a boutique law firm rooted in Taiwan with a global outlook. We hold that genuine internationalism is not a matter of language alone, but of deep fluency across jurisdictions, business cultures, and the logic of dispute.",
    },
    para2: {
      zh: "事務所由具備柏克萊、史丹佛與台大三校法學訓練的楊佳陵博士主持，結合學術的嚴謹與實務的敏銳，為客戶在跨境交易、爭端與治理中提供完整且可信賴的法律解決方案。",
      en: "Led by Dr. Chia-Ling Yang — trained at Berkeley, Stanford, and National Taiwan University — the firm unites academic rigor with practical acuity, delivering complete and dependable counsel across cross-border transactions, disputes, and governance.",
    },
  },

  practice_h: {
    label: { zh: "專業領域", en: "Practice Areas" },
    title: { zh: "我們的執業範疇", en: "What we practise" },
  },

  practice: [
    {
      title: { zh: "跨國商務與投資", en: "Cross-Border Commerce & Investment" },
      desc:  { zh: "跨境交易架構、外人投資與國際商務合約的全程法律規劃。", en: "End-to-end counsel on cross-border deal structures, inbound investment, and international commercial contracts." },
    },
    {
      title: { zh: "智慧財產權", en: "Intellectual Property" },
      desc:  { zh: "專利、商標與營業秘密的佈局、授權及全球維權。", en: "Strategy, licensing, and global enforcement of patents, trademarks, and trade secrets." },
    },
    {
      title: { zh: "國際爭端解決與仲裁", en: "Dispute Resolution & Arbitration" },
      desc:  { zh: "跨國訴訟與國際商務仲裁的策略規劃與攻防。", en: "Strategy and advocacy across cross-border litigation and international commercial arbitration." },
    },
    {
      title: { zh: "公司治理與法令遵循", en: "Corporate Governance & Compliance" },
      desc:  { zh: "董事會治理、法令遵循與跨境監理風險之管理。", en: "Board governance, regulatory compliance, and cross-jurisdictional risk management." },
    },
    {
      title: { zh: "併購與企業重組", en: "M&A & Restructuring" },
      desc:  { zh: "併購交易、實地查核與企業重組的法律統籌。", en: "Legal lead on M&A, due diligence, and corporate restructuring." },
    },
    {
      title: { zh: "中美與兩岸法律事務", en: "China–U.S. & Cross-Strait Affairs" },
      desc:  { zh: "橫跨中、美、台法域的商務與監理事務整合。", en: "Integrated counsel spanning the Chinese, U.S., and Taiwanese jurisdictions." },
    },
  ],

  principal: {
    label:    { zh: "主持律師", en: "Principal" },
    name:     { zh: "楊佳陵 博士", en: "Dr. Chia-Ling Yang" },
    title:    { zh: "主持律師・法律科學博士（J.S.D.）", en: "Principal Attorney · Doctor of the Science of Law (J.S.D.)" },
    intro: {
      zh: "楊佳陵博士擁有美國柏克萊加州大學法律科學博士（J.S.D.）學位，並先後取得史丹佛大學法律科學碩士與國立臺灣大學法學士，學術養成橫跨太平洋兩岸。執業生涯歷經理律、萬國等台灣頂尖法律事務所，並於柏克萊從事博士後研究與中國法教學，兼具深厚的學術底蘊與第一線跨境實務經驗。",
      en: "Dr. Chia-Ling Yang holds a Doctor of the Science of Law (J.S.D.) from UC Berkeley, a Master of the Science of Law from Stanford, and a Bachelor of Laws from National Taiwan University — a formation spanning both shores of the Pacific. Her practice runs through Taiwan's leading firms, Lee and Li and Formosa Transnational, alongside postdoctoral research and Chinese-law teaching at Berkeley, uniting scholarly depth with frontline cross-border experience.",
    },
    eduLabel: { zh: "學歷", en: "Education" },
    expLabel: { zh: "主要經歷", en: "Experience" },
    plate:    { zh: "圖版 01 — 主持律師", en: "Plate 01 — Principal" },
  },

  education: [
    {
      school: { zh: "美國柏克萊加州大學法學院", en: "University of California, Berkeley — School of Law" },
      degree: { zh: "法律科學博士・法學碩士（J.S.D., LL.M.）", en: "J.S.D., LL.M." },
    },
    {
      school: { zh: "美國史丹佛大學法學院", en: "Stanford Law School" },
      degree: { zh: "法律科學碩士（J.S.M.）", en: "J.S.M." },
    },
    {
      school: { zh: "國立臺灣大學法律學院法律系", en: "National Taiwan University — College of Law" },
      degree: { zh: "法學士（LL.B.）", en: "LL.B." },
    },
  ],

  experience: [
    {
      org:  { zh: "理律法律事務所", en: "Lee and Li, Attorneys-at-Law" },
      role: { zh: "受僱律師", en: "Associate Attorney" },
    },
    {
      org:  { zh: "萬國法律事務所", en: "Formosa Transnational, Attorneys at Law" },
      role: { zh: "受僱律師", en: "Associate Attorney" },
    },
    {
      org:  { zh: "柏克萊加州大學法學院", en: "UC Berkeley — School of Law" },
      role: { zh: "博士後研究員", en: "Postdoctoral Fellow" },
    },
    {
      org:  { zh: "柏克萊加州大學法學院・中國法課程", en: "UC Berkeley — Chinese Law Program" },
      role: { zh: "兼任助教", en: "Teaching Assistant" },
    },
    {
      org:  { zh: "國立臺北護理健康大學・旅遊健康研究所", en: "Nat'l Taipei Univ. of Nursing & Health Sciences" },
      role: { zh: "兼任助理教授", en: "Adjunct Assistant Professor" },
    },
  ],

  // 團隊成員（姓名均為示意假資料，待正式名單替換）
  team_h: {
    label: { zh: "團隊成員", en: "Team" },
  },

  team: [
    {
      name:  { zh: "陳威宇 律師", en: "Wei-Yu Chen" },
      role:  { zh: "律師", en: "Attorney" },
      focus: { zh: "跨國商務與公司治理", en: "Cross-border commerce & governance" },
    },
    {
      name:  { zh: "林珮瑄 律師", en: "Pei-Hsuan Lin" },
      role:  { zh: "律師", en: "Attorney" },
      focus: { zh: "爭端解決與智慧財產", en: "Disputes & intellectual property" },
    },
    {
      name:  { zh: "張俊凱", en: "Chun-Kai Chang" },
      role:  { zh: "資訊顧問", en: "Information Consultant" },
      focus: { zh: "法律科技與資訊安全", en: "Legal technology & information security" },
    },
  ],

  contact: {
    label: { zh: "聯絡安理", en: "Contact" },
    title: { zh: "讓我們從一次對話開始", en: "Let us begin with a conversation" },
    para: {
      zh: "歡迎來信簡述您所面臨的法律議題，我們將安排一次審慎而保密的初步諮詢。",
      en: "Write to us with a brief outline of your matter, and we will arrange a considered, confidential initial consultation.",
    },
    email:   "contact@anli-law.com",
    phone:   "+886 (0)2 2700 0000",
    address: { zh: "台灣・台北", en: "Taipei · Taiwan" },
    cta:     { zh: "預約諮詢", en: "Request a consultation" },
  },

  footer: {
    note:      { zh: "立足台北・連結世界", en: "Rooted in Taipei. Connected to the world." },
    copyright: { zh: "© 2026 安理國際法律事務所　版權所有", en: "© 2026 ANLI International Law Offices. All rights reserved." },
  },
};
