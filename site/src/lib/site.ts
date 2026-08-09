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
    practice: { zh: '專業領域', en: 'Practice' },
    principal: { zh: '主持律師', en: 'Principal' },
    contact: { zh: '聯絡', en: 'Contact' },
  },

  hero: {
    kicker: { zh: '國際觀點 · 在地實踐', en: 'Global perspective · Local practice' },
    line1: { zh: '跨越疆界的', en: 'Legal foresight' },
    line2: { zh: '法律遠見', en: 'beyond borders' },
    para: {
      zh: '從柏克萊到台北，從醫療現場到憲法法庭。安理以跨法域的學術訓練與第一線實務經驗，協助企業、醫療機構與個人在最複雜的法律難題中，做出最具遠見的決策。',
      en: 'From Berkeley to Taipei, from the hospital ward to the Constitutional Court — ANLI pairs cross-jurisdictional scholarship with frontline practice, helping enterprises, healthcare institutions, and individuals act with foresight on their most complex matters.',
    },
    cta: { zh: '預約諮詢', en: 'Request a consultation' },
    cta2: { zh: '認識楊佳陵博士', en: 'Meet Dr. Chia-Ling Yang' },
    credsLabel: { zh: '事務所核心信念', en: 'Core values' },
  },

  // 首屏底部的信念帶：一個詞的兩種語言，上下疊置。
  // 中文版金色行為英文、灰字為中文；英文版顛倒過來，讓母語成為小字、外語成為標題。
  creds: [
    { en: 'VISION', zh: '遠見' },
    { en: 'INNOVATION', zh: '創新' },
    { en: 'PROFESSION', zh: '專業' },
  ],

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
      slug: 'medical-life-sciences',
      title: { zh: '醫療與生技法律', en: 'Healthcare & Life Sciences' },
      desc: {
        zh: '主持律師曾任全國性醫師團體法律顧問，承辦醫療糾紛、醫事法規、健保爭議、臨床試驗與藥品食品法遵。',
        en: "Led by a former legal advisor to Taiwan's national medical association — medical disputes, healthcare regulation, NHI matters, clinical trials, and pharmaceutical & food compliance.",
      },
    },
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
      zh: '楊佳陵博士擁有美國柏克萊加州大學法律科學博士（J.S.D.）學位，並先後取得史丹佛大學法律科學碩士與國立臺灣大學法學士，執業生涯歷經理律、萬國等台灣頂尖法律事務所，並曾於柏克萊從事博士後研究與中國法教學。她長期深耕醫療與生醫法制，曾任第 13 屆中華民國醫師公會全國聯合會法律顧問，現任全國律師聯合會醫藥與健保委員會委員，於全國層級參與醫師權益、醫事法規與重大醫療政策議題，該全國性醫師團體代表逾五萬名醫師。',
      en: "Dr. Chia-Ling Yang holds a Doctor of the Science of Law (J.S.D.) from UC Berkeley, a Master of the Science of Law from Stanford, and a Bachelor of Laws from National Taiwan University. Her practice runs through Taiwan's leading firms, Lee and Li and Formosa Transnational, alongside postdoctoral research and Chinese-law teaching at Berkeley. Much of her career has been devoted to healthcare and life-sciences law: she served as legal advisor to the Taiwan Medical Association for its 13th term — a body whose membership exceeds fifty thousand physicians nationwide — and sits on the Taiwan Bar Association's Medicine, Pharmaceuticals and National Health Insurance Committee, working at the national level on physicians' rights, healthcare regulation, and major health-policy issues.",
    },
    eduLabel: { zh: '學歷', en: 'Education' },
    expLabel: { zh: '主要經歷', en: 'Experience' },
    specLabel: { zh: '專長領域', en: 'Areas of Expertise' },
    pubLabel: { zh: '醫藥法律著作選錄', en: 'Selected Publications · Healthcare & Life Sciences' },
    plate: { zh: '圖版 01 — 主持律師', en: 'Plate 01 — Principal' },
  },

  // 主持律師區塊內的預約入口（四處：側欄常駐、醫法亮點、專長領域之後、區塊收尾）
  consult: {
    kicker: { zh: '預約諮詢', en: 'Consultation' },
    rail: {
      note: {
        zh: '初步諮詢採預約制，由主持律師親自了解案情，內容保密。',
        en: 'Initial consultations are by appointment, taken by the principal attorney herself, and held in confidence.',
      },
      cta: { zh: '預約諮詢', en: 'Request a consultation' },
      telLabel: { zh: '或直接來電', en: 'Or call the office' },
    },
    medical: {
      note: {
        zh: '醫療糾紛、醫事法規或臨床試驗上的疑問，歡迎先簡述情況。',
        en: 'Medical disputes, healthcare regulation, clinical trials — send us a brief outline of the situation.',
      },
      cta: { zh: '預約醫法諮詢', en: 'Book a consultation' },
    },
    inline: {
      note: {
        zh: '不確定案件屬於哪一類，也可以先來談。',
        en: 'Unsure which area your matter falls under? Talk to us first.',
      },
      cta: { zh: '預約諮詢', en: 'Request a consultation' },
    },
    closer: {
      kicker: { zh: '下一步', en: 'Next step' },
      title: { zh: '立刻預約諮詢', en: 'Talk it through, then decide' },
      para: {
        zh: '來信或來電簡述時間、對象與目前進度，我們會回覆可安排的諮詢時段。',
        en: 'Write or call with the timeline, the parties involved, and where the matter now stands; we will come back with times we can offer.',
      },
      cta: { zh: '預約諮詢', en: 'Request a consultation' },
      alt: { zh: '直接來電', en: 'Call the office' },
    },
  },

  // 主持律師醫法亮點（首頁 callout；資料來源：醫師全聯會理監事會紀錄、全律會委員會名單、憲法法庭 111 年憲民字第 4156 號說明會）
  medical: {
    kicker: { zh: '醫療與生醫法制', en: 'Healthcare & Life Sciences' },
    title: { zh: '從醫療現場到憲法法庭', en: 'From the ward to the Constitutional Court' },
    para: {
      zh: '站在全國醫界的法律第一線。楊佳陵律師曾任第 13 屆中華民國醫師公會全國聯合會法律顧問，參與醫師權益、醫事法規與重大醫療政策議題，曾出席憲法法庭醫療費用收取標準案不公開說明會，並連續多屆擔任台灣醫法論壇場次主持人／座長，長年促成醫療專業、司法實務與公共政策的跨域對話。從醫療糾紛、健保法制、臨床試驗到細胞治療與 AI 醫療，她將訴訟實務、政策法制與生醫科技結合，為醫師、醫療機構與生醫產業提供完整的法律策略。',
      en: "On the legal front line of Taiwan's medical profession. Yang served as legal advisor to the Taiwan Medical Association for its 13th term, engaging in physicians' rights, healthcare regulation, and major health-policy issues; she took part in the Constitutional Court's closed-door session on the medical-fee standards case, and has chaired sessions of Taiwan's medical-law forums across successive years, sustaining a long-running dialogue among medicine, the bar, and public policy. From medical disputes, NHI regulation, and clinical trials to cell therapy and AI in medicine, she brings litigation, policy, and life-science regulation together into complete legal strategies for physicians, healthcare institutions, and the biomedical industry.",
    },
    facts: [
      {
        big: { zh: '50,000+', en: '50,000+' },
        label: { zh: '曾服務之全國性醫師團體代表醫師人數', en: 'Physicians represented by the national medical body she advised' },
      },
      {
        big: { zh: '憲法法庭', en: 'Constitutional Court' },
        label: { zh: '參與醫療費用收取標準案相關程序', en: 'Participation in the medical-fee standards case proceedings' },
      },
      {
        big: { zh: '醫藥與健保委員會', en: 'Medicine & NHI Committee' },
        label: { zh: '全國律師聯合會・現任委員', en: 'Serving member, Taiwan Bar Association' },
      },
    ],
  },

  // 主持律師專長領域（醫療生醫／非訟／訴訟三類；lead 為類別引言，可省略）
  specialties: [
    {
      cat: { zh: '醫療與生醫法制', en: 'Healthcare & Life Sciences' },
      lead: {
        zh: '曾任第 13 屆中華民國醫師公會全國聯合會法律顧問，現任全國律師聯合會醫藥與健保委員會委員：',
        en: "Former legal advisor to the Taiwan Medical Association; member of the Taiwan Bar Association's Medicine, Pharmaceuticals & NHI Committee:",
      },
      items: {
        zh: [
          '醫療糾紛與醫療過失責任',
          '告知同意、病歷與護理紀錄',
          '醫師、護理人員與醫療機構責任',
          '健保法制與醫療費用管制',
          '臨床試驗、細胞治療與再生醫療',
          '藥品、醫材與特殊營養食品法規',
          '智慧醫療、醫療個資與 AI 法律責任',
        ],
        en: [
          'Medical disputes & malpractice liability',
          'Informed consent, medical records & nursing documentation',
          'Liability of physicians, nurses & healthcare institutions',
          'NHI regulation & control of medical fees',
          'Clinical trials, cell therapy & regenerative medicine',
          'Pharmaceuticals, medical devices & special-nutrition foods',
          'Smart healthcare, health data & AI liability',
        ],
      },
    },
    {
      cat: { zh: '非訟類', en: 'Advisory & Non-Contentious' },
      lead: {
        zh: '神經科學法（Neuro Law）、專利法、生物科技之倫理與法律、勞基法、公平交易法等領域：',
        en: 'Across neurolaw, patent law, the ethics and law of biotechnology, labor standards, and fair trade law:',
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
      org: { zh: '中華民國醫師公會全國聯合會', en: 'Taiwan Medical Association' },
      role: { zh: '法律顧問（第 13 屆）', en: 'Legal Advisor (13th term)' },
    },
    {
      org: { zh: '全國律師聯合會・醫藥與健保委員會', en: 'Taiwan Bar Association — Medicine, Pharmaceuticals & NHI Committee' },
      role: { zh: '委員（現任）', en: 'Committee Member (current)' },
    },
    {
      org: { zh: '台灣醫法實務論壇・台灣醫法醫政論壇', en: "Taiwan Medical Law Forum Series" },
      role: { zh: '連續多屆場次主持人／座長（2023–2026）', en: 'Session Chair, successive editions (2023–2026)' },
    },
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

  // 主持律師醫藥法律著作選錄（首頁主持律師區塊）
  publications: [
    {
      title: {
        zh: '《生醫法律面面觀：生醫業必備的法律錦囊》（合著）',
        en: 'Biomedical Law in Every Aspect: A Legal Companion for the Life-Sciences Industry (co-author)',
      },
      venue: {
        zh: '合記圖書出版社・2015｜涵蓋健保、技術移轉、專利、藥物、醫材、醫療資訊、醫療機構經營與醫療糾紛',
        en: 'Ho-Chi Book Publishing, 2015 — NHI, technology transfer, patents, drugs, devices, health information, hospital management & medical disputes',
      },
    },
    {
      title: {
        zh: '〈從美國 Juno 公司 CAR-T 免疫細胞療法之發展與事故看細胞療法臨床試驗之賠償責任與股東集體訴訟〉',
        en: 'CAR-T after Juno: Compensation Liability in Cell-Therapy Clinical Trials and Shareholder Class Actions',
      },
      venue: { zh: '萬國法律雙月刊第 209 期・2016', en: 'FT Law Review No. 209, 2016' },
    },
    {
      title: {
        zh: '〈新聞稿行不行？藥廠應否及如何公布臨床試驗之研究結果〉（合著）',
        en: 'To Publish or Not: Whether and How Pharmaceutical Companies Should Disclose Clinical-Trial Results (co-author)',
      },
      venue: { zh: '萬國法律雙月刊第 206 期・2016', en: 'FT Law Review No. 206, 2016' },
    },
    {
      title: {
        zh: '〈醫美糾紛注意義務之認定標準與辯護新視界〉',
        en: 'Standards of Care in Aesthetic-Medicine Disputes: A New Horizon for the Defence',
      },
      venue: { zh: '台灣醫療法學術研討會論文集・2017', en: 'Taiwan Medical Law Conference Proceedings, 2017' },
    },
    {
      title: {
        zh: '〈美國細胞與基因治療品之法律規制模式評析〉',
        en: 'The U.S. Regulatory Model for Cell and Gene Therapy Products: An Appraisal',
      },
      venue: { zh: '期刊專文', en: 'Journal article' },
    },
    {
      title: {
        zh: '《別讓醫院殺了你：揭開美國醫療體制的共犯結構》（譯作）',
        en: "Don't Let the Hospital Kill You: Inside the U.S. Medical System (translator)",
      },
      venue: { zh: '商周出版・2006', en: 'Business Weekly Publications, 2006' },
    },
    {
      title: {
        zh: '《美國法導論：美國法律與司法制度概述》（譯作）',
        en: 'American Law: An Introduction (translator)',
      },
      venue: { zh: '商周出版・2004', en: 'Business Weekly Publications, 2004' },
    },
  ],

  // 主持律師醫法論壇主持／座長經歷（首頁主持律師區塊；場次名稱依各屆公開議程）
  forums_h: {
    label: { zh: '醫法論壇主持・座長', en: 'Forum Chair — Medical Law' },
    lead: {
      zh: '長年站在醫界、法界與政策界的對話現場，連續多屆擔任台灣醫法論壇場次主持人及座長，促成醫療專業、司法實務與公共政策的跨域交流。',
      en: "A long-standing presence where medicine, the bar, and policy meet — chairing sessions of Taiwan's medical-law forums across successive editions.",
    },
  },
  forums: [
    {
      year: '2026',
      forum: { zh: '台灣醫法醫政論壇', en: 'Taiwan Medical Law & Health Policy Forum' },
      topic: {
        zh: '個資保護與護理人員勞動權益——解析 AI 時代醫療個資保護與法律責任',
        en: 'Data protection and the labor rights of nursing professionals — health-data protection and legal liability in the age of AI',
      },
    },
    {
      year: '2025',
      forum: { zh: '第五屆台灣醫法實務論壇（台北場）', en: '5th Taiwan Medical Law Practice Forum (Taipei)' },
      topic: {
        zh: '論醫院雇主之保護義務——以護理人員執行職務遭受不法侵害為例',
        en: "The hospital employer's duty of protection — unlawful harm to nurses in the course of duty",
      },
    },
    {
      year: '2024',
      forum: { zh: '第四屆台灣醫法實務論壇（台北場）', en: '4th Taiwan Medical Law Practice Forum (Taipei)' },
      topic: {
        zh: '護理機構之法律議題——護理人員、照服員過失責任與機構負責人責任',
        en: 'Legal issues of nursing institutions — negligence liability of nurses and care workers, and the responsibility of institution heads',
      },
    },
    {
      year: '2023',
      forum: { zh: '第三屆台灣醫法實務論壇', en: '3rd Taiwan Medical Law Practice Forum' },
      topic: {
        zh: '護理人員相關勞資法律問題',
        en: 'Labor and employment law issues for nursing professionals',
      },
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
      role: { zh: '實習律師', en: 'Trainee Attorney' },
      expertise: null,
      education: {
        zh: '國立政治大學法律學系',
        en: 'Department of Law, National Chengchi University',
      },
      image: '/assets/team-zhan-placeholder.webp',
      imageAlt: {
        zh: '詹前晟實習律師暫用灰色假人示意圖',
        en: 'Temporary gray mannequin placeholder for trainee attorney 詹前晟',
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
    mediaNav: { zh: '媒體報導', en: 'Media Coverage' },
    readMore: { zh: '閱讀全文', en: 'Read' },
    openReport: { zh: '閱讀報導', en: 'View coverage' },
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

  // 專業領域的細項（對應 LAW.practice 陣列順序）
  practiceDetail: [
    {
      zh: ['醫療糾紛與醫事行政爭訟', '健保費用核減與停約救濟', '臨床試驗、細胞治療與再生醫療', '藥品、醫材與特殊營養食品法遵'],
      en: ['Medical disputes & administrative litigation', 'NHI reimbursement cuts & contract remedies', 'Clinical trials, cell therapy & regenerative medicine', 'Pharma, device & special-nutrition food compliance'],
    },
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
    title: { zh: '新聞案件評析', en: 'How we think about the law' },
    para: {
      zh: '內容僅供一般參考，不構成針對個案的法律意見。',
      en: 'Notes on cross-border transactions, disputes, and governance. General information only — not legal advice on any specific matter.',
    },
  },

  media_h: {
    label: { zh: '媒體報導', en: 'Media Coverage' },
    title: { zh: '媒體報導', en: 'In the news' },
    para: {
      zh: '楊佳陵律師參與重大案件及公共法律議題的媒體報導選錄。',
      en: 'Selected media coverage of matters and public legal issues involving Dr. Chia-Ling Yang.',
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
