// 執業領域詳細頁內容（SEO 長文）。
// key 為 LAW.practice[].slug；UI 標籤在 site.ts 的 practiceUi，版面在 components/PracticePage.astro。
// 文風：直白、台灣用語、自然涵蓋常見搜尋關鍵字；不得保證結果或誇大。

import type { Bi } from './i18n';

export interface PracticeCase {
  /** 4–8 字的搜尋關鍵字，如「非法解僱」「遺產分割」 */
  term: Bi;
  /** 一句話：什麼情況＋律師能做什麼 */
  desc: Bi;
}

export interface PracticeFaq {
  q: Bi;
  a: Bi;
}

export interface PracticeDetailContent {
  /** SEO meta description（zh 約 80–110 字） */
  metaDesc: Bi;
  /** 開頭段落（2–3 段） */
  intro: Bi[];
  /** 常見案件類型 */
  cases: PracticeCase[];
  /** 常見問題 */
  faq: PracticeFaq[];
}

export const PRACTICE_CONTENT: Record<string, PracticeDetailContent> = {
  'medical-life-sciences': {
    metaDesc: {
      zh: '安理國際法律事務所位於台北市中正區，主持律師楊佳陵現任中華民國醫師公會全國聯合會律師顧問，承辦醫療糾紛、醫事行政爭訟、健保費用核減與停約救濟、臨床試驗與細胞治療契約、藥品醫材與特殊營養食品標示廣告等案件。諮詢採預約制。',
      en: 'Yang & Associates Law Firm (ANLI), Taipei: medical malpractice defence, healthcare administrative litigation, NHI reimbursement disputes, clinical trial and cell-therapy agreements, and labelling and advertising compliance for pharmaceuticals, medical devices and special-nutrition foods. Consultations by appointment.',
    },
    intro: [
      {
        zh: '醫療與生技的法律問題，很少只有一個戰場。醫師收到刑事傳票，多半同時面對民事求償與衛生局的行政調查，有時還有媒體。醫院和護理之家要處理的，是醫糾之外的機構責任與評鑑。藥廠、醫材商和營養品業者的一支廣告、一張標示，可能同時牽動藥事法、食品安全衛生管理法與公平交易法。',
        en: 'Legal trouble in healthcare rarely stays on one front. A physician served with a criminal summons is usually facing a civil claim and a health-bureau investigation at the same time, sometimes with the press watching. Hospitals and nursing homes carry institutional liability and accreditation issues beyond the dispute itself. For pharmaceutical companies, device makers and nutrition brands, a single advertisement or label can engage the Pharmaceutical Affairs Act, the Food Safety and Sanitation Act, and the Fair Trade Act all at once.',
      },
      {
        zh: '本所主持律師楊佳陵長期站在全國醫界的法律第一線。她現任中華民國醫師公會全國聯合會律師顧問，參與醫師權益、醫事法規與重大醫療政策議題，所服務的全國性醫師團體代表逾五萬名醫師；並擔任全國律師聯合會醫藥與健保委員會委員，曾出席憲法法庭醫療費用收取標準案不公開說明會，且連續多屆擔任台灣醫法論壇場次主持人／座長，主持醫療機構責任、醫院雇主保護義務、護理人員執業安全、醫療個資與 AI 法律責任等議題。她也曾任國立臺北護理健康大學兼任助理教授，是《生醫法律面面觀：生醫業必備的法律錦囊》共同作者，並發表 CAR-T 細胞療法臨床試驗責任、細胞與基因治療產品法規等專論。',
        en: "The firm's principal, Dr. Chia-Ling Yang, has long worked on the legal front line of Taiwan's medical profession. She serves as legal advisor to the Taiwan Medical Association — the national body representing more than fifty thousand physicians — sits on the Taiwan Bar Association's Medicine, Pharmaceuticals and NHI Committee, and took part in the Constitutional Court's closed-door session on the medical-fee standards case. Across successive editions of Taiwan's medical-law forums she has chaired sessions on institutional liability, the hospital employer's duty of protection, workplace safety for nurses, and health-data and AI liability. A former adjunct assistant professor at the National Taipei University of Nursing and Health Sciences, she co-authored a practitioner's handbook on biomedical law and has published on CAR-T clinical-trial liability and the regulation of cell and gene therapy products.",
      },
      {
        zh: '本所為醫師、護理人員與醫療機構處理醫療糾紛的民事、刑事與行政程序，包括醫療鑑定與調解；為醫院、診所與護理機構規劃內部風險管理；也為生技醫藥與食品業者處理臨床試驗契約、查驗登記、標示與廣告合規。諮詢採預約制。',
        en: 'We act for physicians, nurses and healthcare institutions through the civil, criminal and administrative phases of medical disputes, including expert appraisal and mediation; design risk-management frameworks for hospitals, clinics and nursing facilities; and advise life-sciences and food companies on clinical trial agreements, product registration, and labelling and advertising compliance. Consultations are by appointment.',
      },
    ],
    cases: [
      {
        term: {
          zh: '醫療糾紛民事求償',
          en: 'Medical Malpractice — Civil',
        },
        desc: {
          zh: '病人或家屬求償，爭點多在注意義務、告知義務與因果關係。我們從病歷與護理紀錄著手，代理調解與訴訟。',
          en: 'Claims by patients or families usually turn on the standard of care, informed consent and causation. We start from the medical and nursing records, and act in mediation and at trial.',
        },
      },
      {
        term: {
          zh: '醫療刑事辯護',
          en: 'Medical Criminal Defence',
        },
        desc: {
          zh: '業務過失致死傷的偵查與審判，對醫師的執業與名譽影響最大。我們陪同應訊、擬定辯護策略，並處理醫療鑑定意見。',
          en: "Prosecutions for professional negligence weigh heaviest on a physician's licence and name. We accompany you through questioning, build the defence, and engage with the expert appraisal.",
        },
      },
      {
        term: {
          zh: '醫事行政爭訟',
          en: 'Healthcare Administrative Litigation',
        },
        desc: {
          zh: '衛生局裁罰、停業處分、廢止執照或醫師懲戒，都有救濟期限。我們代理陳述意見、訴願與行政訴訟。',
          en: 'Fines, suspension orders, licence revocations and disciplinary measures all run on strict deadlines. We act in submissions, administrative appeals and litigation.',
        },
      },
      {
        term: {
          zh: '健保爭議',
          en: 'NHI Disputes',
        },
        desc: {
          zh: '健保費用核減、違約記點到停約，金額與影響逐級放大。我們協助申復、爭議審議與後續行政救濟。',
          en: 'Reimbursement cuts, penalty points and contract suspension escalate quickly. We handle re-examinations, dispute reviews, and the administrative remedies that follow.',
        },
      },
      {
        term: {
          zh: '醫療機構與護理之家治理',
          en: 'Hospital & Nursing-Home Governance',
        },
        desc: {
          zh: '從人力配置、紀錄制度到意外事件的通報與究責，機構責任常藏在細節裡。我們協助建立制度，事故發生時代理應對。',
          en: 'From staffing and record-keeping to incident reporting and accountability, institutional liability lives in the details. We build the systems, and act for the institution when something goes wrong.',
        },
      },
      {
        term: {
          zh: '告知同意與病歷爭議',
          en: 'Informed Consent & Medical Records',
        },
        desc: {
          zh: '同意書怎麼簽、病歷怎麼寫，進了法院就是證據。我們協助設計告知流程與文件，爭議發生時分析攻防。',
          en: 'How consent is taken and how the chart is written becomes the evidence. We design the process and the paperwork, and analyse both when a dispute arrives.',
        },
      },
      {
        term: {
          zh: '臨床試驗',
          en: 'Clinical Trials',
        },
        desc: {
          zh: '受試者同意、試驗契約、不良事件的補償與保險，出事前就要談清楚。我們審閱契約，並處理事故後的責任分配。',
          en: 'Subject consent, trial agreements, and compensation and insurance for adverse events need settling before anything happens. We review the contracts and sort out liability after an incident.',
        },
      },
      {
        term: {
          zh: '細胞治療與再生醫療',
          en: 'Cell Therapy & Regenerative Medicine',
        },
        desc: {
          zh: '特管辦法與再生醫療法制下，診所與生技公司的合作模式、收費與廣告都有規範。我們協助設計合規的架構。',
          en: 'Under the Special Regulations and the regenerative-medicine framework, collaboration models, fees and advertising are all regulated. We structure arrangements that comply.',
        },
      },
      {
        term: {
          zh: '藥品與醫療器材法規',
          en: 'Pharmaceuticals & Medical Devices',
        },
        desc: {
          zh: '查驗登記、仿單標示、藥害救濟與回收下架，每一步都對應不同的主管機關程序。我們協助規劃與應對。',
          en: 'Registration, package inserts, drug-injury relief and recalls each follow a different regulatory track. We plan the route and handle the response.',
        },
      },
      {
        term: {
          zh: '特殊營養食品與健康食品',
          en: 'Special-Nutrition & Health Foods',
        },
        desc: {
          zh: '特定疾病配方食品要查驗登記，健康食品的功效宣稱有法定範圍。我們協助申請、審閱標示，並做上市前合規檢視。',
          en: 'Foods for special medical purposes require registration, and health-food efficacy claims have statutory limits. We handle applications, review labels, and run pre-launch compliance checks.',
        },
      },
      {
        term: {
          zh: '食品與醫藥廣告合規',
          en: 'Food & Medical Advertising Compliance',
        },
        desc: {
          zh: '廣告涉及醫療效能，罰鍰可以按次開。文字、圖像與前後文是整體認定，我們在上檔前完整檢視，被開罰時協助陳述意見與救濟。',
          en: 'Advertising that implies medical efficacy draws fines that repeat with every publication, and copy, images and context are judged as a whole. We review the full piece before it runs, and handle submissions and appeals when a penalty lands.',
        },
      },
      {
        term: {
          zh: '醫療個資與智慧醫療',
          en: 'Health Data & Smart Healthcare',
        },
        desc: {
          zh: '病歷數位化、跨機構共享與 AI 工具進入診間，個資法的邊界要先畫清楚。我們協助訂定資料治理與契約條款。',
          en: 'Digitised records, cross-institution sharing and AI tools in the consulting room all press against the Personal Data Protection Act. We draw the boundaries in governance rules and contracts.',
        },
      },
    ],
    faq: [
      {
        q: {
          zh: '收到病人求償、提告或主管機關通知，第一時間該做什麼？',
          en: 'A patient has filed a claim or sued me, or a regulator has sent a notice. What should I do first?',
        },
        a: {
          zh: '先依院內流程通知主管與醫務、法務或風險管理單位，同時保全收到通知當時的完整資料：病歷、護理紀錄、同意書、醫囑與用藥紀錄、檢驗與影像、值班表、系統的存取與修改軌跡，以及與案件直接相關的公務通訊。電子病歷不要只匯出一份 PDF，操作紀錄同樣要留。原始紀錄不得刪除、覆蓋或回填日期；確有遺漏需要補充，醫療法本來就允許增刪，但要簽名或蓋章並註明日期，刪改處畫線保留、不得塗燬，並明確標示為事後補充，寫清楚實際補充的日期與理由。會出事的是看起來像當時就完成的補記。接著確認通知的程序性質與期限：醫療爭議的民事訴訟原則上要先依醫療事故預防及爭議處理法申請調解，刑事案件則是在偵查或審理中由檢察官或法院移付調解，衛生局的行政調查另依函文所載法源、要求事項與期限處理。調解過程中的道歉、讓步與不利於己的陳述，未經全體當事人同意原則上不得作為本案訴訟證據或裁判基礎，但病歷、影像這類客觀資料不在此限。應訊或出席前先確認自己在程序中的身分，再與院方窗口及律師一起把資料看過。',
          en: 'Tell your supervisor and the hospital\'s medical affairs, legal or risk unit through the internal channel, and at the same time preserve the record as it stood when the notice arrived: the chart, nursing records, consent forms, orders and medication records, labs and imaging, duty rosters, the system\'s access and edit trail, and any work correspondence directly about the case. For electronic records, exporting a PDF is not enough — the audit trail matters too. Nothing may be deleted, overwritten or back-dated. If something genuinely needs adding, the Medical Care Act allows amendment: sign or seal it, date it, strike through rather than obliterate what is being changed, and label the entry plainly as a later addition with the real date and the reason. What destroys a case is an addition that looks as though it was written at the time. Then identify what kind of notice it is and what clock it starts. A civil medical claim generally goes to mediation under the Medical Accident Prevention and Dispute Resolution Act before suit; in a criminal case it is the prosecutor or the court that refers the matter to mediation during investigation or trial; a health bureau inquiry runs on the legal basis, scope and deadline stated in its own letter. Apologies, concessions and statements against interest made in mediation cannot generally be used as evidence or as the basis of a ruling without every party\'s consent, though the chart, imaging and other objective material are not covered by that shield. Before you answer questions or attend, confirm what capacity you are in, then go through the material with the hospital\'s contact and a lawyer.',
        },
      },
      {
        q: {
          zh: '健保費用被核減，或收到停約處分，還有救濟機會嗎？',
          en: 'My NHI reimbursement was cut, or my contract suspended. Is there any remedy?',
        },
        a: {
          zh: '有，但程序要看案件性質，而且第一個期限通常只有 30 天或 60 天。醫療費用被核減，一般是在核減通知到達後 60 日內向健保署申復，對申復結果不服再申請爭議審議，之後多半直接向行政法院提起行政訴訟，不必先經訴願。停約這類特約管理處置，通常是收到通知後 30 日內申請複核，再申請爭議審議，對審定結果不服則依審定書所載期限提起訴願。追扣費用的法律性質可能與停約不同，救濟途徑也會分流，不能一概而論。收到通知先確認送達日期，留好函文、信封與送達證明，再把病歷、醫令、申報資料、訪查紀錄與抽樣回推的計算，逐項對回健保署的事實認定與法規依據。',
          en: 'Yes, but the route depends on the type of case, and the first deadline is usually only 30 or 60 days. A reimbursement cut is normally challenged by filing for re-examination with the NHIA within 60 days of the notice arriving; if that fails, dispute review follows within 60 days, and from there the case usually goes straight to the administrative court rather than through an administrative appeal. Contract measures such as suspension normally start with a request for reconsideration within 30 days, then dispute review, with an administrative appeal available within the period stated in the decision. Clawbacks can be legally different from suspension and may take a separate route. Confirm the service date as soon as the notice arrives, keep the letter, envelope and proof of service, then work through the chart, orders, claim data, inspection records and the sampling extrapolation against the findings and legal basis the NHIA relied on.',
        },
      },
      {
        q: {
          zh: '我們是營養品業者，產品文案怎樣會踩到「醫療效能」的紅線？',
          en: 'We sell nutrition products. When does our marketing copy cross the "medical efficacy" line?',
        },
        a: {
          zh: '食品的標示、宣傳與廣告不得不實、誇張或易生誤解，也不得宣稱醫療效能，這是食品安全衛生管理法第 28 條的界線。涉及預防、改善、減輕、診斷或治療疾病、症候群或症狀的說法，原則上會被認定為醫療效能；「改善」兩個字本身不必然違法，關鍵在改善的是疾病症狀，還是法規允許的營養或生理功能。代言見證、使用前後對照圖與社群貼文，只要被用來推廣產品或招徠交易，都可能一併納入廣告判斷。特定疾病配方食品另須查驗登記，並依核定內容標示適用對象、使用方式與必要警語；嬰兒與較大嬰兒配方食品的廣告及促銷限制更嚴。主管機關是就文字、圖像、聲音、連結與前後文的整體表現綜合認定，不是孤立看單一句子，上檔前做完整的法遵審查，能降低按次處罰、停止刊播與回收改正的風險。',
          en: 'Food labelling, promotion and advertising may not be false, exaggerated or misleading, and may not claim medical efficacy — the line drawn by Article 28 of the Food Safety and Sanitation Act. Claims to prevent, improve, alleviate, diagnose or treat a disease, syndrome or symptom will generally be read as medical efficacy. The word "improves" is not unlawful in itself; what matters is whether it points at a disease or at a nutritional or physiological function the rules allow. Endorsements, before-and-after images and social posts can be pulled into the assessment whenever they are used to promote a product or solicit business. Foods for special medical purposes also require registration and must carry the approved indications, directions and warnings, while infant and follow-up formula face tighter advertising and promotion limits. Regulators judge the copy, images, audio, links and surrounding context as a whole rather than sentence by sentence, so a full compliance review before launch reduces the risk of repeat fines, publication bans and forced recall.',
        },
      },
      {
        q: {
          zh: '臨床試驗發生不良事件，廠商與醫院的責任怎麼分？',
          en: 'An adverse event occurred in our clinical trial. How is liability divided between sponsor and site?',
        },
        a: {
          zh: '先分清楚不良事件與試驗相關傷害。GCP 所稱的不良事件不以與試驗藥品有因果關係為前提，發生了不等於誰就要賠。責任歸屬要看原因出在哪裡：屬於試驗產品、方案設計、監測或安全通報的問題，藥品臨床試驗規範原則上要求試驗委託者負擔因試驗所生的賠償責任，或安排責任保險；由主持人或試驗機構醫療疏失所致的部分，則不在委託者承擔的範圍內，主持人與機構本身仍負有安全執行、醫療照護與不良事件通報的義務。試驗契約、受試者同意書與保單會影響補償程序、抗辯與追償、費用負擔，但不能免除各方依法對受試者應負的責任。Juno 的 CAR-T 試驗死亡事件後續引發證券集體訴訟，顯示上市公司除了受試者安全與求償，還要處理資訊揭露與股東訴訟的風險。試驗啟動前把責任條款、補償機制與承保範圍檢視一遍，能減少事後的責任爭議與未獲承保的風險。',
          en: 'Start by separating an adverse event from a trial-related injury: under GCP an adverse event need not be causally linked to the study drug, so one occurring does not by itself mean someone owes compensation. Liability follows the cause. Where the problem lies in the product, the protocol, monitoring or safety reporting, the rules for drug trials generally require the sponsor to answer for damage arising from the trial or to carry liability insurance; harm caused by the investigator\'s or the site\'s own clinical negligence falls outside what the sponsor takes on, and the investigator and institution remain bound to run the trial safely, provide care and report adverse events. The trial agreement, the consent form and the policy shape how compensation, defence, recovery and costs run, but none of them can waive what each party owes the subject by law. The deaths in Juno\'s CAR-T trial went on to trigger securities class actions, so a listed sponsor faces disclosure and shareholder exposure alongside subject safety and claims. Reviewing the liability clauses, the compensation mechanism and the scope of cover before the trial starts reduces both later disputes and the risk of finding the claim uninsured.',
        },
      },
    ],
  },
  'family-custody': {
    metaDesc: {
      zh: '安理國際法律事務所位於台北市中正區，承辦離婚、子女監護權（親權酌定）、扶養費、夫妻剩餘財產分配、家暴保護令、會面交往與跨國親權爭議，也處理收養認可與監護宣告。諮詢採預約制，可來電或來信預約。',
      en: 'Yang & Associates Law Firm (ANLI), Taipei: divorce, child custody and support, marital property division, protection orders, visitation, adoption, guardianship and cross-border custody disputes. Consultations by appointment.',
    },
    intro: [
      {
        zh: '家事案件難的地方，通常不在離婚本身。孩子跟誰住、扶養費怎麼算、婚後財產怎麼分，才是談不下去的部分。也有從一開始就很急的狀況，像是遭受家暴要聲請保護令，或小孩已經被對方帶走、甚至帶出國，連見一面都得先走程序。',
        en: 'The hard part of a family case is rarely the divorce itself. It is where the children will live, how much support gets paid, and how the marital property is divided. Some situations are urgent from day one: abuse that calls for a protection order, or a child taken away by the other parent, sometimes out of the country altogether.',
      },
      {
        zh: '離婚、親權、扶養費這類案件依法要先經法院調解，調解不成才進入審判，所以第一次調解談到哪裡，常常決定後面的走法。證據越早整理越好，對話紀錄、驗傷單、帳戶金流都算。涉及家暴的話，保護令可以立刻聲請，不用等離婚程序開始。',
        en: 'Divorce, custody and child support cases in Taiwan go to court mediation before they reach trial, so how far you go in that first session tends to shape everything after it. Start gathering evidence early: messages, medical records, bank statements. Where there is domestic violence, a protection order can be applied for immediately, without waiting for the divorce to be filed.',
      },
      {
        zh: '本所辦理離婚、親權酌定與改定親權、會面交往、扶養費、交付子女、收養認可與監護宣告。跨國案件常與美國、英國執業律師協作，處理一方擅自帶孩子出境後台灣與當地並行的程序。懷疑脫產的案子，會結合數位鑑識與金流追蹤顧問清查財產。諮詢採預約制。',
        en: 'We handle divorce, custody determination and modification, visitation, child support, return of children, adoption approval and adult guardianship. Cross-border matters are run alongside practising lawyers in the United States and the United Kingdom when proceedings have to move in both places at once. Where assets appear to be disappearing, we bring in digital forensics and fund-tracing consultants. Consultations are by appointment.',
      },
    ],
    cases: [
      {
        term: {
          zh: '協議離婚',
          en: 'Divorce by Agreement',
        },
        desc: {
          zh: '雙方都想離，卡在條件談不攏。我們協助擬離婚協議，把親權、扶養費與財產分配一次寫清楚。',
          en: 'Both spouses want the divorce, just not on the same terms. We draft an agreement that settles custody, support and property in one document.',
        },
      },
      {
        term: {
          zh: '裁判離婚',
          en: 'Contested Divorce',
        },
        desc: {
          zh: '一方不肯離，或協議破局。我們評估法定離婚事由與現有證據，代理調解，必要時提起訴訟。',
          en: 'If your spouse refuses to divorce or negotiations collapse, we assess the statutory grounds and the evidence behind them, then act for you in mediation and at trial.',
        },
      },
      {
        term: {
          zh: '子女監護權',
          en: 'Child Custody',
        },
        desc: {
          zh: '孩子由誰照顧談不攏時，我們依子女最佳利益聲請法院酌定親權，爭取單獨或共同行使。',
          en: 'Parents who cannot agree on care arrangements can ask the court to decide. We build the case around the child\'s best interests, for sole or joint custody.',
        },
      },
      {
        term: {
          zh: '改定親權',
          en: 'Custody Modification',
        },
        desc: {
          zh: '取得親權的一方疏於照顧，或狀況明顯不利於孩子，我們代理聲請改定親權，改由他方行使。',
          en: 'Where the custodial parent is failing the child or the arrangement has become harmful, we petition to transfer parental rights to the other parent.',
        },
      },
      {
        term: {
          zh: '扶養費請求',
          en: 'Child Support',
        },
        desc: {
          zh: '扶養費被拖欠或短付，我們先推算合理金額並提出請求，取得執行名義後可聲請強制執行。',
          en: 'Support unpaid or paid short. We work out a defensible figure, claim it, and enforce through the court when payment still does not arrive.',
        },
      },
      {
        term: {
          zh: '夫妻剩餘財產分配',
          en: 'Marital Property Division',
        },
        desc: {
          zh: '婚後財產較少的一方可請求差額分配，我們協助清查財產、聲請保全防脫產，並在時效內提出。',
          en: 'The spouse with less post-marital property may claim half the difference. We trace assets, seek attachment when they start moving, and file within the limitation periods.',
        },
      },
      {
        term: {
          zh: '家暴保護令',
          en: 'Domestic Violence Protection Order',
        },
        desc: {
          zh: '遭到家庭成員肢體或精神暴力，我們協助聲請暫時或通常保護令，並接著安排離婚與親權程序。',
          en: 'For physical or psychological abuse by a family member, we apply for a temporary or ordinary protection order and plan the divorce and custody steps that follow.',
        },
      },
      {
        term: {
          zh: '會面交往',
          en: 'Visitation Rights',
        },
        desc: {
          zh: '離婚後探視被刻意阻擋，或每次交接都起衝突。我們聲請法院酌定或改定會面交往的方式與時間。',
          en: 'Access blocked, or handovers that turn into an argument every time. We ask the court to set or modify the visitation schedule.',
        },
      },
      {
        term: {
          zh: '跨國親權爭議',
          en: 'Cross-Border Custody Disputes',
        },
        desc: {
          zh: '一方擅自帶孩子出境或滯留國外。我們在台聲請暫時處分，同時與當地律師協作推進返還程序。',
          en: 'A parent removes the child from Taiwan or keeps the child abroad. We seek provisional measures here and work with local counsel on return proceedings.',
        },
      },
      {
        term: {
          zh: '交付子女',
          en: 'Child Return Proceedings',
        },
        desc: {
          zh: '對方拒絕把孩子交回來，我們代理聲請交付子女與暫時處分，對方仍不履行時聲請強制執行。',
          en: 'When the other parent will not hand the child back, we petition for return of the child and provisional measures, with compulsory enforcement if that is ignored.',
        },
      },
      {
        term: {
          zh: '收養認可',
          en: 'Adoption',
        },
        desc: {
          zh: '收養要經法院認可才生效。我們評估收養要件、備齊文件送件，繼親收養與跨國收養都承辦。',
          en: 'Adoption takes effect only on court approval. We check the requirements, prepare the filing, and handle stepparent and cross-border adoptions.',
        },
      },
      {
        term: {
          zh: '監護宣告',
          en: 'Adult Guardianship',
        },
        desc: {
          zh: '家人因失智或精神障礙已無法處理自己的事務，我們協助聲請監護或輔助宣告，並處理監護人選任。',
          en: 'Where dementia or mental incapacity leaves a family member unable to manage their affairs, we petition for a guardianship or assistance declaration and the appointment of a guardian.',
        },
      },
    ],
    faq: [
      {
        q: {
          zh: '離婚一定要先調解嗎？可以直接告嗎？',
          en: 'Do I have to go through mediation before filing for divorce in Taiwan?',
        },
        a: {
          zh: '要。離婚訴訟依家事事件法屬於調解前置事件，起訴前應先經法院調解，就算直接起訴，法院也會先把案件移付調解。調解不是走過場，親權、扶養費與財產都可以在這個階段一次談定，調解成立與確定裁判有同一效力。我們會陪同出席，把談成的條件確實寫進筆錄，不留模糊空間。',
          en: 'Yes, in most cases. Under the Family Act divorce goes to court mediation before trial, and a case filed directly will simply be referred to mediation anyway. Treat it as real negotiation: custody, support and property can all be settled there, and a mediated settlement has the same effect as a final judgment. We attend with you and make sure the recorded terms leave nothing to argue about later.',
        },
      },
      {
        q: {
          zh: '對方把小孩帶出國不讓我見，怎麼辦？',
          en: 'My ex took our child abroad without my consent. What can I do?',
        },
        a: {
          zh: '動作要快。孩子還在台灣，可以先聲請暫時處分，防止被帶出境。已經被帶出國的，除了在台灣進行交付子女與親權程序，通常還得在孩子所在國另行聲請返還。台灣不是海牙兒童誘拐公約的締約國，各國處理方式差很多，實務上要看當地法院的態度。本所與美國、英國執業律師協作，可以先幫您評估兩地程序怎麼銜接。',
          en: 'Move fast. If the child is still in Taiwan, provisional measures can be sought to prevent removal. Once the child is abroad, you generally need two tracks: proceedings in Taiwan for return of the child and parental rights, and an application in the country where the child now is. Taiwan is not a party to the Hague Abduction Convention, so what works varies a great deal by jurisdiction. We coordinate with U.S. and U.K. counsel to work out how the two fit together.',
        },
      },
      {
        q: {
          zh: '夫妻剩餘財產分配可以拿多少？多久內要提出？',
          en: 'How much can I claim in marital property division, and is there a deadline?',
        },
        a: {
          zh: '算法是雙方婚後財產各自扣除債務後比較，較少的一方請求差額的一半，繼承或其他無償取得的財產不列入。平均分配顯失公平時，法院可以調整或免除。時效特別要注意：自知道有剩餘財產差額時起兩年內，且自離婚等法定財產制關係消滅時起五年內要提出。擔心對方脫產，可以及早聲請假扣押等保全程序。',
          en: 'Each spouse\'s post-marital property is netted against debts, and the spouse with less may claim half the difference. Inheritances and other gratuitous acquisitions are excluded, and the court can adjust or deny the claim where equal division would be clearly unfair. Watch the deadlines: two years from learning of the difference, and no later than five years after the statutory property regime ends, usually on divorce. If assets look like they are being moved, apply for provisional attachment early.',
        },
      },
      {
        q: {
          zh: '被家暴了，聲請保護令要準備什麼？',
          en: 'What do I need to apply for a domestic violence protection order?',
        },
        a: {
          zh: '人身安全優先，接著把證據留下來。驗傷單、照片、錄音、對話紀錄與報案紀錄都用得上。通常保護令與暫時保護令由當事人向法院聲請，情況急迫時，檢察官、警察機關或主管機關也可以代為聲請緊急保護令。保護令內容可以命對方遷出住所、遠離特定場所、禁止聯絡，也能暫時定未成年子女由誰照顧。',
          en: 'Safety first, evidence next: medical reports, photos, recordings, messages, police records. You can apply to the court for an ordinary or temporary protection order, and in urgent situations a prosecutor, the police or the competent authority can apply for an emergency order on your behalf. An order can require the other party to move out, stay away and stop all contact, and can provisionally decide who the children live with.',
        },
      },
    ],
  },
  'labor-disputes': {
    metaDesc: {
      zh: '非法解僱、資遣費短少、加班費追討，都是白領常遇到的勞資爭議。安理國際法律事務所位於台北市中正區，處理確認僱傭關係與復職、競業禁止條款、職場性騷擾等案件，從勞動局調解到勞動事件法訴訟。諮詢採預約制。',
      en: 'Yang & Associates Law Firm (ANLI), Taipei: wrongful termination, severance, overtime, non-competes, and workplace harassment for managers and professionals, from labor bureau mediation to litigation under the Labor Incident Act. Consultations by appointment.',
    },
    intro: [
      {
        zh: '公司說要資遣，資遣費卻算得比自己估的少一截。或者以「不能勝任工作」為由，要求當天走人。加班多年，加班費從沒進過帳。申訴性騷擾或職場霸凌之後，換來的是調職、減薪。這幾類爭議的處理順序其實一樣：先把金額算出來，再決定要走哪個程序。',
        en: 'A layoff where the severance figure lands well below what you calculated. A dismissal for "poor performance" with instructions to clear your desk the same day. Years of overtime that never reached a payslip. A transfer or a pay cut arriving shortly after you reported harassment or bullying. The sequence is the same in each case: work out what you are owed, then pick the forum.',
      },
      {
        zh: '多數爭議可以先向勞動局申請勞資爭議調解，不收費，調解期間雇主也不得因該爭議解僱勞工或做其他不利處分。案子真的進了法院，勞動事件法有幾處對勞工有利。出勤紀錄上的時間原則上推定為工作時間。請求工資、資遣費或確認僱傭關係的訴訟，起訴時暫免徵收三分之二的裁判費。',
        en: 'Most disputes can start with free mediation at the local labor bureau, and while it is pending your employer may not dismiss you or take other adverse action over the dispute. In court, the Labor Incident Act tilts several rules toward employees. Hours shown in attendance records are presumed to be working time. In claims for wages, severance pay, or confirmation of employment, two-thirds of the court filing fee is provisionally waived at the outset.',
      },
      {
        zh: '證據要趁在職時拿。出勤紀錄、薪資單、獎金辦法、勞退專戶明細、主管交辦工作的訊息，離職後往往就調不到了。安理國際法律事務所在台北市中正區，處理主管與專業人士的白領勞資爭議，從發函、陪同調解到訴訟，核算金額與擬定策略都由律師負責。諮詢採預約制。',
        en: 'Collect the evidence while you are still employed. Attendance records, payslips, bonus plans, labor pension account statements, and messages assigning work are usually out of reach once you have left. Yang & Associates Law Firm (ANLI) is based in Taipei\'s Zhongzheng District and handles white-collar employment disputes for managers and professionals, from demand letters through accompanied mediation to litigation, with the calculations and the strategy handled by a lawyer. Consultations are by appointment.',
      },
    ],
    cases: [
      {
        term: {
          zh: '非法解僱',
          en: 'Wrongful Termination',
        },
        desc: {
          zh: '解僱要有勞基法的法定事由，沒有就是違法。律師提起確認僱傭關係之訴，請求復職與補發工資。',
          en: 'Dismissal without statutory grounds under the Labor Standards Act is unlawful. We sue to confirm the employment relationship and seek reinstatement with back pay.',
        },
      },
      {
        term: {
          zh: '資遣費爭議',
          en: 'Severance Pay Disputes',
        },
        desc: {
          zh: '年資起算日或平均工資被公司算低，資遣費就會短少。律師重新核算，連同預告工資一併請求。',
          en: 'Employers often shorten your seniority or understate average wages. We recalculate severance and notice pay, then pursue the shortfall in mediation or court.',
        },
      },
      {
        term: {
          zh: '加班費請求',
          en: 'Overtime Pay Claims',
        },
        desc: {
          zh: '加班多年沒領過加班費，關鍵在工時怎麼證明。律師以出勤紀錄、通訊紀錄舉證，追討五年內金額。',
          en: 'The fight is over hours. We prove them from attendance records and work messages, and claim up to five years of unpaid overtime.',
        },
      },
      {
        term: {
          zh: '職業災害補償',
          en: 'Occupational Injury Compensation',
        },
        desc: {
          zh: '因工作受傷或罹病，可請求醫療費、工資補償與職災保險給付。醫療期間雇主原則上不得解僱。',
          en: 'For work-related injury or illness we claim medical costs, wage compensation, and occupational accident insurance benefits. Dismissal during treatment is generally barred.',
        },
      },
      {
        term: {
          zh: '競業禁止條款',
          en: 'Non-Compete Clauses',
        },
        desc: {
          zh: '前公司以競業禁止條款求償或阻止轉職時，律師檢視有無合理補償與範圍限制，據以主張條款無效。',
          en: 'Facing a non-compete claim, or a blocked move to a competitor? We test the clause for compensation and reasonable scope and argue that it is void.',
        },
      },
      {
        term: {
          zh: '職場性騷擾',
          en: 'Workplace Sexual Harassment',
        },
        desc: {
          zh: '律師協助提出內部申訴、向勞動局申訴並請求賠償。雇主未盡防治義務的，也要一起負責。',
          en: 'We handle internal complaints, complaints to the labor authority, and damages claims. An employer that neglects its prevention duties is liable too.',
        },
      },
      {
        term: {
          zh: '職場霸凌',
          en: 'Workplace Bullying',
        },
        desc: {
          zh: '長期被主管或同事霸凌，第一步是保全證據。律師協助提出申訴，並向雇主與行為人請求損害賠償。',
          en: 'Sustained bullying by a supervisor or colleague: we secure the evidence, file the complaint, and claim damages from both the employer and the individual.',
        },
      },
      {
        term: {
          zh: '未足額提繳勞退',
          en: 'Underpaid Pension Contributions',
        },
        desc: {
          zh: '雇主用低於實際薪資的級距提繳6%勞退金，律師核對勞退專戶明細，請求補繳差額或損害賠償。',
          en: 'Reporting wages below the real figure underpays the 6% pension contribution. We audit your pension account records and claim the shortfall or damages.',
        },
      },
      {
        term: {
          zh: '業績獎金爭議',
          en: 'Performance Bonus Disputes',
        },
        desc: {
          zh: '已達標的獎金公司不發，或片面改掉獎金制度。律師依契約與給付慣例請求，並主張獎金具工資性質。',
          en: 'Bonuses earned but withheld, or a plan rewritten overnight. We claim payment under the contract and past practice, arguing the bonus counts as wages.',
        },
      },
      {
        term: {
          zh: '勞資調解',
          en: 'Labor Dispute Mediation',
        },
        desc: {
          zh: '勞動局的勞資爭議調解，律師可代理或陪同出席，事先算好請求金額、整理證據，並把關和解條款。',
          en: 'We attend labor bureau mediation with you or for you, with the claim quantified and the evidence organized beforehand, and we vet any settlement before you sign.',
        },
      },
      {
        term: {
          zh: '違法調職減薪',
          en: 'Unlawful Transfers and Pay Cuts',
        },
        desc: {
          zh: '片面調職、減薪或變相逼退，先看是否符合調動五原則。律師協助提出異議，請求回復原職原薪。',
          en: 'Unilateral transfers, pay cuts, pressure to quit: we test the measure against the statutory transfer principles and seek your original post and pay back.',
        },
      },
      {
        term: {
          zh: '非自願離職證明',
          en: 'Involuntary Separation Certificates',
        },
        desc: {
          zh: '被要求簽自願離職，或拿不到非自願離職證明，會影響失業給付。律師協助應對並爭取正確記載。',
          en: 'Pressure to sign a voluntary resignation, or a withheld separation certificate, can cost you unemployment benefits. We push back and get the record stated correctly.',
        },
      },
    ],
    faq: [
      {
        q: {
          zh: '被公司違法解僱，可以要求回去上班嗎？',
          en: 'I was fired illegally — can I get my job back?',
        },
        a: {
          zh: '可以。解僱必須有勞基法的法定事由，公司不是想解僱就能解僱。解僱違法時，可以提起確認僱傭關係存在的訴訟，請求復職並補發解僱期間的工資。符合一定要件時，還可以依勞動事件法聲請法院裁定，命公司在訴訟期間繼續僱用並給付工資。收到解僱通知後，先別簽任何寫成自願離職的文件，通知本身和相關證據都留著。',
          en: 'Yes, where the dismissal was unlawful. Statutory grounds under the Labor Standards Act are required; without them you can sue to confirm the employment relationship and seek reinstatement plus back pay for the period. Where the requirements are met, the Labor Incident Act also lets you ask the court to order your employer to keep employing you and paying wages while the case runs. Sign nothing that describes your exit as a voluntary resignation, and keep the dismissal notice and the evidence around it.',
        },
      },
      {
        q: {
          zh: '加班費可以追討幾年？需要什麼證據？',
          en: 'How many years of overtime pay can I claim, and what evidence do I need?',
        },
        a: {
          zh: '加班費是工資，請求權時效五年，超過的部分原則上要不回來。證據裡出勤紀錄最重要：雇主依法必須置備並保存出勤紀錄，勞工可以要求提供副本，訴訟中法院也能命雇主提出，紀錄上的時間原則上推定為工作時間。交辦工作的訊息、電子郵件、班表也能佐證。這些在職時就先備份。',
          en: 'Five years. Anything older is generally time-barred. Attendance records carry the most weight: employers must keep them by law, you can request copies, the court can order their production, and the hours recorded are presumed to be working time. Work-assignment messages, emails, and shift schedules fill the gaps. Back all of it up before you leave.',
        },
      },
      {
        q: {
          zh: '和公司有勞資糾紛，要先去勞動局調解嗎？',
          en: 'Do I have to go through labor bureau mediation before suing my employer?',
        },
        a: {
          zh: '不強制，但通常建議先走一趟。向勞動局申請勞資爭議調解不收費，調解期間雇主不得因該爭議解僱勞工或做其他不利處分。調解不成再進法院，依勞動事件法原則上也會先進行法官主持的勞動調解。實務上不少案件在調解階段就解決了。律師可以代理出席，事先把請求項目與金額算清楚。',
          en: 'It is not mandatory, though it is usually the right first step. Labor bureau mediation costs nothing, and while it is pending your employer may not dismiss you or take other adverse action over the dispute. If it fails you can sue, and under the Labor Incident Act the court itself generally begins with judge-led labor mediation. A fair number of cases end there. A lawyer can appear for you and put a figure on each item of the claim first.',
        },
      },
      {
        q: {
          zh: '簽了競業禁止條款，離職真的不能去同業嗎？',
          en: 'I signed a non-compete — am I really barred from joining a competitor?',
        },
        a: {
          zh: '不一定。依勞基法，離職後競業禁止約定要同時具備幾個要件才有效：公司有應受保護的正當營業利益、勞工的職務接觸得到營業秘密、限制的期間（最長兩年）與區域、職業範圍合理，以及公司對勞工離職後不從事競業的損失有給合理補償。少一項，約定就無效。收到存證信函或被求償，先別急著認賠，帶著契約讓律師評估。',
          en: 'Often not. Under the Labor Standards Act, a post-employment non-compete binds you only if every element is present: a legitimate business interest worth protecting, a role that gave you access to trade secrets, reasonable limits on duration (two years at most), territory and scope of work, and reasonable compensation from the employer for the restricted period after you leave. Miss one and the clause is void. If a demand letter arrives, take the agreement to a lawyer before conceding anything.',
        },
      },
    ],
  },
  'civil-litigation': {
    metaDesc: {
      zh: '安理國際法律事務所在台北市中正區執業，承辦遺產分割、特留分扣減、遺囑、拋棄繼承、借名登記、共有物分割、債務糾紛、返還房屋、租賃押金與車禍求償，也代理支付命令、本票裁定及強制執行程序。諮詢請先預約。',
      en: 'Yang & Associates Law Firm (ANLI), Taipei: estate division, reserved portion claims, wills, renunciation of inheritance, co-ownership partition, nominee registration disputes, debt recovery, property recovery, traffic accident claims and enforcement. By appointment.',
    },
    intro: [
      {
        zh: '遺產怎麼分，繼承人各有各的算盤。房子當年登記在親戚名下，現在對方不認帳。共有土地想處理，其他共有人不簽名。借出去的錢拖著不還，車禍後對方只肯賠一部分。這些是我們日常在辦的財產與一般民事案件，卡住的地方通常不是道理講不通，是不知道下一步該做什麼。',
        en: 'Heirs who cannot agree on how to divide an estate. A house put in a relative\'s name years ago that the nominee now refuses to return. A co-owner who will not sign off on shared land. A loan that never comes back, or an insurer offering a fraction of what the accident actually cost. This is the everyday substance of property and general civil work. In most of these matters the law is not the hard part; knowing what to do first is.',
      },
      {
        zh: '時效要先看。車禍這類侵權行為的損害賠償，原則上從知悉損害及賠償義務人時起兩年內要請求，拖過了就算有理也難救。解決途徑也不只有起訴。在法院成立的調解，或在公所調解委員會成立並經法院核定的調解，與確定判決有同一效力，對方不履行，一樣可以聲請強制執行。',
        en: 'Check the clock first. Damages for torts such as a traffic accident must generally be claimed within two years of learning of the injury and of who is liable, and a strong case expires along with the deadline. Litigation is also not the only route. A settlement mediated in court, or reached before a township mediation committee and ratified by the court, has the same effect as a final judgment and can be enforced if the other side does not perform.',
      },
      {
        zh: '安理國際法律事務所在台北市中正區，主持律師取得美國加州大學柏克萊分校法律科學博士（J.S.D.）學位。從遺囑規劃、拋棄繼承、支付命令到強制執行，我們會把可行的幾條路和各自要花的時間、費用講清楚，再一起決定怎麼做。案件諮詢採預約制，電話或 email 都能約時間。',
        en: 'Yang & Associates Law Firm (ANLI) practises in Zhongzheng District, Taipei; our principal attorney holds a J.S.D. from UC Berkeley. Whether the matter is a will, a renunciation of inheritance, a payment order or an enforcement action, we set out the workable routes with the time and cost each carries, and decide with you which to take. Consultations are by appointment, arranged by phone or email.',
      },
    ],
    cases: [
      {
        term: {
          zh: '遺產分割',
          en: 'Estate Division',
        },
        desc: {
          zh: '繼承人對分法各執一詞時，先談協議，談不成就聲請調解或訴請法院分割，之後的繼承登記一併處理。',
          en: 'When heirs are split over how to divide, we negotiate first, then mediate or petition the court for partition, and finish the inheritance registration.',
        },
      },
      {
        term: {
          zh: '特留分扣減',
          en: 'Reserved Portion Claims',
        },
        desc: {
          zh: '遺囑把財產幾乎都給了一個人，其他繼承人仍有特留分。我們算出應得比例，代為行使扣減權追回不足部分。',
          en: 'A will that leaves almost everything to one person still cannot defeat the reserved portion. We calculate the shortfall and pursue abatement.',
        },
      },
      {
        term: {
          zh: '遺囑規劃',
          en: 'Will Drafting',
        },
        desc: {
          zh: '自書、代筆或公證遺囑各有法定要件，一項不合就可能整份無效。由律師把關形式與內容，減少日後爭產。',
          en: 'Holographic, dictated and notarised wills each carry strict formalities, and one defect can void the entire document. We handle drafting and execution so the form holds up.',
        },
      },
      {
        term: {
          zh: '拋棄繼承',
          en: 'Renunciation of Inheritance',
        },
        desc: {
          zh: '被繼承人債務多過遺產時要考慮拋棄，期限是知悉得繼承時起三個月，須以書面向法院提出，由我們代辦。',
          en: 'If the deceased leaves more debt than assets, renouncing is worth considering. The filing is written, goes to the court, and must be made within three months of learning you are an heir.',
        },
      },
      {
        term: {
          zh: '借名登記',
          en: 'Nominee Registration Disputes',
        },
        desc: {
          zh: '房子錢是你出的，登記卻在別人名下，對方不肯還。我們整理出資與使用管理證據，終止借名並訴請移轉登記。',
          en: 'You paid for the property, someone else holds the title, and they will not hand it back. We assemble the evidence of payment and control, terminate the arrangement and sue for transfer.',
        },
      },
      {
        term: {
          zh: '共有物分割',
          en: 'Partition of Co-Owned Property',
        },
        desc: {
          zh: '共有土地或房屋，一人不同意就動不了。我們先談分割方案，談不成則訴請法院判決原物分割或變價分割。',
          en: 'A single holdout co-owner can freeze a property indefinitely. We work out a division plan, or ask the court to order partition in kind or sale by auction.',
        },
      },
      {
        term: {
          zh: '債務糾紛',
          en: 'Debt Recovery',
        },
        desc: {
          zh: '借款或貨款要不回來，我們先發函催告，再依情況聲請支付命令或起訴。對方可能脫產的，同時聲請假扣押保全。',
          en: 'For unpaid loans and invoices, we start with a formal demand, then a payment order or suit. Where the debtor may shift assets, we seek provisional attachment at the same time.',
        },
      },
      {
        term: {
          zh: '返還房屋',
          en: 'Recovery of Real Property',
        },
        desc: {
          zh: '房子被人占著不走，或租約到期還賴著，可以訴請返還房屋，另外請求相當於租金的不當得利。',
          en: 'Squatters and holdover tenants can be removed by suit, with a parallel claim for unjust enrichment equal to the rent they should have paid.',
        },
      },
      {
        term: {
          zh: '租賃押金糾紛',
          en: 'Rental Deposit Disputes',
        },
        desc: {
          zh: '退租時房東扣住押金，屋況損害誰該負責又各說各話。我們釐清責任範圍，走調解或訴訟把押金要回來。',
          en: 'The landlord keeps the deposit, the tenant disputes the damage. We pin down who is responsible and recover the deposit through mediation or, if that fails, court.',
        },
      },
      {
        term: {
          zh: '車禍求償',
          en: 'Traffic Accident Claims',
        },
        desc: {
          zh: '車禍受傷或車輛受損，肇責常有爭議。我們申請鑑定釐清責任，計算醫療費、薪資損失與慰撫金後提出求償。',
          en: 'Where fault is contested, we obtain the official assessment, then quantify medical costs, lost income, repairs and pain and suffering before making the claim.',
        },
      },
      {
        term: {
          zh: '本票裁定',
          en: 'Promissory Note Rulings',
        },
        desc: {
          zh: '手上有本票，對方到期不付，不必先打官司。向法院聲請本票裁定即可取得執行名義，省去訴訟程序。',
          en: 'A signed promissory note that goes unpaid does not require a full lawsuit. A court ruling on the note produces an enforcement title directly.',
        },
      },
      {
        term: {
          zh: '強制執行',
          en: 'Compulsory Enforcement',
        },
        desc: {
          zh: '拿到判決或支付命令，對方還是不給付，就進入強制執行。我們查調財產，聲請扣押薪資或查封拍賣不動產。',
          en: 'With an enforcement title in hand and still no payment, we trace the debtor\'s assets and move to garnish wages or seize and auction real property.',
        },
      },
    ],
    faq: [
      {
        q: {
          zh: '欠錢不還怎麼辦？一定要告他嗎？',
          en: 'Someone owes me money and won\'t pay — do I have to sue?',
        },
        a: {
          zh: '不一定。金額和事實都清楚的話，聲請支付命令通常最快：對方收到後二十日內沒有提出異議，確定的支付命令就是執行名義，可以直接聲請強制執行。對方簽過本票的，聲請本票裁定更簡便。真的有爭執，才有進訴訟的必要。實務上更該先做的是確認對方名下有沒有財產，官司贏了卻執行不到，力氣等於白花。',
          en: 'Often not. Where the amount and the facts are clear, a payment order is usually the fastest route: if the debtor raises no objection within twenty days of service, the finalised order is itself an enforcement title. If a promissory note was signed, a court ruling on the note is simpler still. Litigation is for genuinely contested claims. Either way, check first whether the debtor owns anything worth enforcing against.',
        },
      },
      {
        q: {
          zh: '父母過世沒有留遺囑，遺產怎麼分？',
          en: 'My parents died without a will — how is the estate divided?',
        },
        a: {
          zh: '先由全體繼承人協商，依應繼分或大家同意的方式簽遺產分割協議，再辦理繼承登記。談不成，可以聲請調解，或向法院訴請分割遺產。不動產要辦繼承登記，得先完成遺產稅申報並取得繳清或免稅證明。另外，若有人主張生前受贈或代墊費用，這些帳最好在分割時一次算清，拖到後面常常變成第二場官司。',
          en: 'The heirs first try to agree, either on statutory shares or on terms everyone accepts, sign a written partition agreement, and register the inheritance. If no agreement is reached, the matter goes to mediation or to a court petition for estate partition. Real property cannot be registered to the heirs until the estate tax return has been filed and a tax clearance or exemption certificate obtained. Claims of lifetime gifts or advanced expenses are best settled in the same round, or they become the next dispute.',
        },
      },
      {
        q: {
          zh: '拋棄繼承要在多久之內辦？要準備什麼文件？',
          en: 'What is the deadline for renouncing an inheritance, and what documents are needed?',
        },
        a: {
          zh: '知悉自己得繼承之時起三個月內，以書面向法院辦理，一般要附死亡證明、繼承系統表和戶籍資料。要說明的是，依現行法，就算不拋棄，繼承人原則上也只以繼承所得的遺產為限清償被繼承人的債務。拋棄的實益在於完全退出繼承，不必再參與後續清算，也不會被拉進相關訴訟。',
          en: 'Three months from learning that you are an heir, by written filing with the court, normally with the death certificate, a family tree showing all heirs, and household registration records. Worth knowing: under current law, heirs who do not renounce are in principle still liable for the deceased\'s debts only up to the value of the inherited estate. What renunciation adds is a clean exit from the succession, with no part in the settlement or any litigation that follows.',
        },
      },
      {
        q: {
          zh: '車禍可以求償哪些項目？多久之內要提出？',
          en: 'What can I claim after a traffic accident, and is there a time limit?',
        },
        a: {
          zh: '可請求的項目包括醫療費、看護費、交通費、不能工作的薪資損失、車輛修復費用和精神慰撫金。時效要盯緊：侵權行為損害賠償原則上須在知悉損害及賠償義務人時起兩年內行使。程序上先申請道路交通事故初步分析研判表，肇責有爭議再送車輛行車事故鑑定，等責任比例大致清楚，再決定和解、調解還是起訴。',
          en: 'Medical and nursing costs, transport, lost income, vehicle repairs and compensation for pain and suffering. The limitation period matters: tort claims must generally be brought within two years of learning of the damage and of who is liable. Start with the police accident analysis report, add a formal fault assessment if liability is contested, and decide between settlement, mediation and suit once the apportionment is reasonably clear.',
        },
      },
    ],
  },
  'intellectual-property': {
    metaDesc: {
      zh: '安理國際法律事務所辦理商標註冊與商標侵權、專利申請與專利侵權訴訟、著作權侵害及營業秘密外洩案件，並與資訊安全顧問協作執行數位鑑識與電子證據保全，代理智慧財產及商業法院訴訟與跨境侵權維權。',
      en: 'Yang & Associates Law Firm (ANLI), Taipei: trademark registration and oppositions, patent filing and infringement litigation, copyright and trade secret disputes, counterfeit and online piracy enforcement, with digital forensics support and cross-border coordination.',
    },
    intro: [
      {
        zh: '商標被人搶先註冊、電商平台冒出仿冒品、離職員工把客戶名單和技術文件一併帶走、網站圖文被整篇搬去別人家，智慧財產權糾紛多半是這幾種樣子。實務上很多當事人是收到警告函，或者損害已經擴散了，才想到找律師。',
        en: 'IP disputes tend to arrive in a few recognisable shapes. A competitor registers your brand name first. Counterfeits turn up on e-commerce platforms. A departing employee leaves with client lists and technical files. A whole page of your images and text reappears on someone else\'s site. Most clients call us after a demand letter lands, or after the damage has already spread.',
      },
      {
        zh: '損害賠償請求權有時效。專利、商標、著作權被侵害，原則上要在知道損害及行為人時起二年內行使，且自侵權行為時起最長十年。另一個現實問題是電子證據，刪改都很快，發現營業秘密外洩或網路侵權，先把證據固定下來，不要急著發函打草驚蛇。',
        en: 'Damages claims run out. For patent, trademark and copyright infringement the limitation period is generally two years from the date you learn of the harm and the infringer, and in any event ten years from the infringing act. Electronic evidence is the other problem: it can be deleted or altered in minutes. If you suspect a trade secret leak or online infringement, lock the evidence down before you put the other side on notice.',
      },
      {
        zh: '本所從商標註冊、專利申請一路承辦到侵權訴訟。案件進智慧財產及商業法院之前，會先把證據強度評估清楚，再決定是談判、起訴，還是先聲請證據保全。涉及營業秘密與網路侵權的案子，我們長期與資訊安全顧問協作，由他們執行數位鑑識與電子證據保全。',
        en: 'We handle the whole arc, from trademark registration and patent filing through to infringement litigation in the Intellectual Property and Commercial Court. Before a case is filed we work out how strong the evidence actually is, then decide whether to negotiate, sue, or first apply for a preservation order. In trade secret and online infringement matters we work with information security consultants who carry out the digital forensics and preserve electronic evidence.',
      },
    ],
    cases: [
      {
        term: {
          zh: '商標註冊',
          en: 'Trademark Registration',
        },
        desc: {
          zh: '品牌要在台灣或海外落地前，先做檢索、選定類別，遇到核駁或異議由律師接手答辯。',
          en: 'Clearance searching, class selection, and prosecution in Taiwan and abroad, including responses to office actions and oppositions.',
        },
      },
      {
        term: {
          zh: '商標侵權',
          en: 'Trademark Infringement',
        },
        desc: {
          zh: '市面上出現近似商標，或自己被指控侵權，律師先評估混淆誤認之虞，再決定發函、談判或訴訟。',
          en: 'A similar mark appears on the market, or you are the one accused. We assess likelihood of confusion, then send demand letters, negotiate, or litigate.',
        },
      },
      {
        term: {
          zh: '專利申請',
          en: 'Patent Filing & Portfolio Strategy',
        },
        desc: {
          zh: '研發成果值不值得申請專利、什麼時候申請、要佈局哪些國家，律師會一併評估後給建議。',
          en: 'Whether an invention is worth patenting, when to file, and which jurisdictions the portfolio should cover.',
        },
      },
      {
        term: {
          zh: '專利侵權訴訟',
          en: 'Patent Infringement Litigation',
        },
        desc: {
          zh: '被控侵害專利，或發現對手抄走技術，律師做侵權比對、查專利有效性，並擬定訴訟攻防。',
          en: 'Claim charts, validity analysis, and trial strategy, on either side of the dispute.',
        },
      },
      {
        term: {
          zh: '著作權侵害',
          en: 'Copyright Infringement',
        },
        desc: {
          zh: '程式、影音或出版品被重製、改作時，律師協助蒐證求償，被指控的一方則評估合理使用抗辯。',
          en: 'Evidence and damages where software, audiovisual works, or publications have been copied or adapted. Fair use analysis where you are the accused party.',
        },
      },
      {
        term: {
          zh: '營業秘密外洩',
          en: 'Trade Secret Misappropriation',
        },
        desc: {
          zh: '機密資料疑似外流，先由律師與資安顧問做數位鑑識、固定證據，再談民事求償或刑事告訴。',
          en: 'Digital forensics with security consultants to trace a suspected leak and lock down evidence, before any civil claim or criminal complaint.',
        },
      },
      {
        term: {
          zh: '離職員工帶走機密',
          en: 'Departing Employee Data Theft',
        },
        desc: {
          zh: '員工離職前大量下載檔案，或帶著客戶資料跳槽，律師安排鑑識調查，再依保密與競業條款追究。',
          en: 'Forensic review of bulk downloads and files taken to a competitor, followed by enforcement of confidentiality and non-compete terms.',
        },
      },
      {
        term: {
          zh: '仿冒品處理',
          en: 'Counterfeit Goods',
        },
        desc: {
          zh: '市場或電商平台出現仿冒品，律師蒐證、通知平台下架，並向海關申請查扣、追究製造與販售者。',
          en: 'Evidence collection, platform takedowns, customs seizure applications, and action against manufacturers and sellers.',
        },
      },
      {
        term: {
          zh: '授權合約',
          en: 'Licensing Agreements',
        },
        desc: {
          zh: '技術或品牌授權他人使用，律師起草與審閱合約，把授權範圍、權利金和違約處理寫清楚。',
          en: 'Drafting and reviewing licences and technology transfers, with scope, royalties, and breach remedies spelled out.',
        },
      },
      {
        term: {
          zh: '網路盜圖盜文',
          en: 'Online Content Piracy',
        },
        desc: {
          zh: '網站的圖片、文章被整批搬走，律師先保全網頁證據，再通知平台下架並向盜用者求償。',
          en: 'Preserving web evidence, notifying platforms to take the content down, and claiming compensation from whoever lifted it.',
        },
      },
      {
        term: {
          zh: '跨境侵權維權',
          en: 'Cross-Border IP Enforcement',
        },
        desc: {
          zh: '侵權發生在海外或橫跨數國，本所與美國、英國律師協作，安排各地蒐證與後續維權的順序。',
          en: 'Evidence gathering and enforcement sequenced across jurisdictions, working with US and UK counsel.',
        },
      },
    ],
    faq: [
      {
        q: {
          zh: '商標被別人搶先註冊了，還有救嗎？',
          en: 'Someone registered my trademark first — is there anything I can do?',
        },
        a: {
          zh: '有機會，但時間抓得很緊。商標註冊公告後三個月內可以向經濟部智慧財產局提出異議。錯過這段期間，原則上五年內還可以申請評定，撤銷其註冊。如果對方是知道你先使用、仍惡意搶註，商標法有撤銷的依據，但你要拿得出先使用的證據，像是出貨紀錄、廣告或網頁存檔。這種案子拖越久，可走的程序越少，建議先讓律師看過手上有什麼資料。',
          en: 'There is, but the clock is short. An opposition can be filed with the Taiwan Intellectual Property Office within three months of publication of the registration. Miss that window and an invalidation action is generally still available for five years. If the registrant knew of your prior use and filed in bad faith, the Trademark Act provides grounds for cancellation, but you have to produce proof of that prior use: sales records, advertising, archived web pages. The longer it sits, the fewer routes remain.',
        },
      },
      {
        q: {
          zh: '發現離職員工把公司機密帶去競爭對手，可以告嗎？',
          en: 'A former employee took our confidential files to a competitor. Can we sue?',
        },
        a: {
          zh: '可以。營業秘密法下，外洩同時有民事求償和刑事責任。不過公司平時要做到合理保密措施，例如權限分級、簽保密協議，而且要證明資料確實被帶走，缺一項案子都不好打。發現的當下先不要去質問對方，優先保全電腦和雲端紀錄。本所與資訊安全顧問協作進行數位鑑識，把下載、外傳的軌跡固定成證據，再決定提告還是談判。',
          en: 'Yes. Under the Trade Secrets Act, misappropriation carries both civil and criminal liability. But the company has to have taken reasonable confidentiality measures in the first place, such as access controls and signed NDAs, and it has to be able to show the data was in fact taken. Do not confront the employee straight away. Secure the machines and the cloud logs first. We work with information security consultants on the digital forensics, fixing the download and transfer trail as evidence before choosing between a lawsuit and a negotiation.',
        },
      },
      {
        q: {
          zh: '網路上的圖和文章被盜用，可以要求賠償嗎？',
          en: 'My images and articles were stolen online. Can I claim damages?',
        },
        a: {
          zh: '可以。盜圖、盜文是著作權侵害，可以要求下架並請求損害賠償，情節明確的還能提刑事告訴，但告訴原則上要在知道行為人後六個月內提出。賠得到多少，看你能證明多少損害。所以發現的第一時間就要把證據做完整：頁面截圖、網址、時間都要留，必要時辦理公證。只留一張截圖就上網開戰，後面通常很難收拾。',
          en: 'Yes. Lifting images or text is copyright infringement. You can demand takedown and claim damages, and a clear-cut case can also support a criminal complaint, which generally has to be filed within six months of learning who the infringer is. What you recover depends on the loss you can prove, so capture the evidence properly at the outset: full-page captures, URLs, timestamps, notarised where it matters. Going public with a single screenshot usually makes the case harder, not easier.',
        },
      },
      {
        q: {
          zh: '專利侵權訴訟要在哪個法院打？會不會拖很久？',
          en: 'Which court hears patent infringement cases in Taiwan, and how long do they take?',
        },
        a: {
          zh: '專利、商標、著作權和營業秘密的民事訴訟，原則上由智慧財產及商業法院審理，法院在新北市板橋。專利案幾乎一定會打到專利有效性，時間常以年計。真正決定勝負的，多半是起訴前的侵權比對和證據準備。要不要打、在台灣打還是到海外打，本所會先做完整評估，需要時協同美國、英國律師規劃跨境策略。',
          en: 'Civil cases on patents, trademarks, copyright and trade secrets are generally heard by the Intellectual Property and Commercial Court, which sits in Banqiao, New Taipei City. Patent cases almost always turn into a fight over validity as well as infringement, so timelines run into years. What usually decides them is the claim analysis and evidence work done before filing. We assess whether litigation is worth it and where it should be brought, coordinating with US and UK counsel where the dispute crosses borders.',
        },
      },
    ],
  },
  'dispute-resolution': {
    metaDesc: {
      zh: '安理國際法律事務所位於台北，處理國際商務仲裁、跨國訴訟、涉外契約爭議與國際貿易糾紛，也代理外國判決與仲裁判斷在台灣的承認執行、跨境債權回收。與美國、英國執業律師長期協作，中英文皆可直接處理。諮詢採預約制。',
      en: 'Yang & Associates Law Firm (ANLI), based in Taipei: international commercial arbitration, cross-border litigation, contract and trade disputes, enforcement of foreign judgments and arbitral awards, and cross-border debt recovery, handled in Chinese and English with US and UK counsel. By appointment.',
    },
    intro: [
      {
        zh: '涉外契約爭議和國際貿易糾紛找上門時，多數人先問勝算。實務上更急的其實是另一件事：這個案子該在哪裡處理、適用哪一國法律。國外客戶拖欠貨款、海外供應商交貨有瑕疵，或是手上有一份外國判決想在台灣執行，處理路徑差很多，走錯了得重來。',
        en: 'A customer abroad stops paying. A supplier ships defective goods. You hold a foreign judgment with no obvious way to enforce it in Taiwan. In each case the merits matter less at the outset than two threshold questions: where the dispute belongs, and which law applies to it.',
      },
      {
        zh: '管轄權和準據法多半在簽約當天就定了，靠的是合約裡那幾行仲裁條款和準據法條款。條款寫得對自己不利，事後幾乎救不回來。所以糾紛一發生，先把合約翻出來看爭端解決條款怎麼寫，再判斷該提付仲裁、進跨國訴訟，還是先用調解與和解談。',
        en: 'Those questions are usually answered on the day the contract is signed, by the arbitration and governing-law clauses. A clause drafted against you is hard to undo later. So the first move in any dispute is to read the dispute-resolution clause closely, then choose between arbitration, cross-border litigation, and mediation or a negotiated settlement.',
      },
      {
        zh: '安理的主持律師楊佳陵博士取得美國柏克萊法律科學博士（J.S.D.），事務所也長期與美國、英國執業律師協作。不論是國際商務仲裁、跨國訴訟，或是外國判決在台灣的承認與執行、跨境債權回收，我們中英文都能直接處理，並視案件需要分配各地律師的工作。',
        en: 'Our principal attorney, Dr. Chia-Ling Yang, holds a J.S.D. from UC Berkeley, and the firm works regularly with practicing US and UK lawyers. We handle international arbitration, cross-border litigation, recognition and enforcement of foreign judgments in Taiwan, and cross-border debt recovery directly in Chinese and English, and coordinate counsel in other jurisdictions as a case requires.',
      },
    ],
    cases: [
      {
        term: {
          zh: '國際商務仲裁',
          en: 'International Commercial Arbitration',
        },
        desc: {
          zh: '合約約定以仲裁解決爭議時，先評估仲裁地與規則的利弊，再代理仲裁程序的實體攻防與證據提出。',
          en: 'Where the contract sends disputes to arbitration, we weigh the seat and applicable rules first, then run the case through pleadings, evidence and hearing.',
        },
      },
      {
        term: {
          zh: '跨國訴訟',
          en: 'Cross-Border Litigation',
        },
        desc: {
          zh: '同一件糾紛在好幾個國家都能起訴時，協助判斷在哪裡告較有利，並與各國律師分工推進程序。',
          en: 'When the same dispute could be filed in several countries, we advise on the better forum and divide the work with local counsel.',
        },
      },
      {
        term: {
          zh: '外國判決執行',
          en: 'Enforcement of Foreign Judgments',
        },
        desc: {
          zh: '在國外打贏的判決，要先向台灣法院訴請許可執行才動得了對方財產。我們代理許可之訴與強制執行。',
          en: 'A judgment won abroad reaches no assets in Taiwan until a court grants leave to enforce it. We bring that action and handle the execution that follows.',
        },
      },
      {
        term: {
          zh: '國際貿易糾紛',
          en: 'International Trade Disputes',
        },
        desc: {
          zh: '進出口貨物有瑕疵、遲交或對方拒付貨款時，先把單據和驗貨紀錄整理成證據，再選談判、仲裁或訴訟求償。',
          en: 'Defective shipments, late delivery, unpaid invoices. We build the documentary record from bills of lading and inspection reports, then pursue the claim by negotiation, arbitration or suit.',
        },
      },
      {
        term: {
          zh: '涉外契約爭議',
          en: 'Cross-Border Contract Disputes',
        },
        desc: {
          zh: '與外國公司的合約出了問題，第一步是釐清準據法和管轄權，確認完再擬求償或防禦的策略。',
          en: 'When a contract with a foreign party breaks down, governing law and jurisdiction come first. The claim, or the defence, is built on that footing.',
        },
      },
      {
        term: {
          zh: '跨境債權回收',
          en: 'Cross-Border Debt Recovery',
        },
        desc: {
          zh: '外國客戶欠錢不還，追不追得到要看資產在哪。我們查明資產所在地，挑成本合理的程序跨境追討。',
          en: 'Whether a foreign debt is collectable turns on where the assets sit. We trace them and pick a recovery route proportionate to the sum at stake.',
        },
      },
      {
        term: {
          zh: '仲裁條款審閱',
          en: 'Arbitration Clause Review',
        },
        desc: {
          zh: '簽約前把仲裁條款的仲裁地、機構、語言和適用規則看過一遍，別等出事才發現只能在不利的地方仲裁。',
          en: 'We check the seat, institution, language and rules before you sign, so a dispute does not end up in a forum that suits only the other side.',
        },
      },
      {
        term: {
          zh: '跨國和解談判',
          en: 'Settlement Negotiation & Mediation',
        },
        desc: {
          zh: '不是每個案子都值得打到底。評估勝算和執行的可能性後，也可由律師出面談和解條件。',
          en: 'Not every claim is worth taking to an award. Once the merits and enforceability are clear, we can negotiate terms instead.',
        },
      },
      {
        term: {
          zh: '外國仲裁判斷執行',
          en: 'Enforcement of Foreign Arbitral Awards',
        },
        desc: {
          zh: '境外取得的仲裁判斷要先聲請台灣法院裁定承認，才能拿去執行，承認聲請和執行程序我們都能代理。',
          en: 'An award made abroad needs a Taiwan court order recognizing it before it can be enforced. We file the recognition application and carry through the execution.',
        },
      },
      {
        term: {
          zh: '跨國合資爭議',
          en: 'Joint Venture Disputes',
        },
        desc: {
          zh: '和外國夥伴合資經營談不攏，處理重點通常在股東協議怎麼解釋、能不能出場，以及要走仲裁還是訴訟。',
          en: 'When a venture with a foreign partner falls apart, the fight is usually over the shareholders\' agreement, the exit terms, and whether to arbitrate or sue.',
        },
      },
      {
        term: {
          zh: '國際授權糾紛',
          en: 'International Licensing Disputes',
        },
        desc: {
          zh: '技術或品牌授權跨好幾個國家，權利金算法或違約認定容易起爭執。我們先確定管轄與準據法，再代理求償。',
          en: 'Technology and brand licences spanning several countries breed royalty and breach disputes. We settle forum and governing law, then press the claim.',
        },
      },
      {
        term: {
          zh: '跨境詐欺求償',
          en: 'Cross-Border Fraud & Asset Tracing',
        },
        desc: {
          zh: '款項被騙到境外或遭人轉走，我們與資安顧問合作追蹤金流和加密貨幣去向，評估凍結與求償的可行性。',
          en: 'Where money has been moved offshore, we work with security consultants to follow the funds, crypto included, and assess freezing and recovery options.',
        },
      },
    ],
    faq: [
      {
        q: {
          zh: '外國法院的判決，在台灣可以直接拿去強制執行嗎？',
          en: 'Can a foreign court judgment be enforced directly in Taiwan?',
        },
        a: {
          zh: '不行。外國確定判決在台灣原則上受承認，但要強制執行，必須另外向法院起訴請求許可執行，拿到許可判決才動得了對方財產。法院會審查幾件事：外國法院有沒有管轄權、敗訴一方有沒有受到合法通知、判決內容是否違反台灣的公序良俗、該國是不是也承認台灣法院的判決。實務上文件準備最花時間，判決正本、確定證明和中文譯本要先備齊。',
          en: 'No. A foreign final judgment is generally recognized in Taiwan, but enforcing it takes a separate court action for leave to enforce, and only that judgment lets you reach the debtor\'s assets. The court examines whether the foreign court had jurisdiction, whether the losing party was properly served, whether the judgment offends Taiwan\'s public policy, and whether that country recognizes Taiwanese judgments in return. Gather the original judgment, proof of finality and a Chinese translation early. The paperwork usually takes longer than the filing.',
        },
      },
      {
        q: {
          zh: '合約寫要去新加坡仲裁，我可以改在台灣打官司嗎？',
          en: 'Our contract says disputes go to arbitration in Singapore. Can I sue in Taiwan instead?',
        },
        a: {
          zh: '原則上不行。仲裁條款只要有效，就排除了法院訴訟。若貿然在台灣起訴，對方一提妨訴抗辯，法院通常會裁定停止訴訟，命先提付仲裁。所以要先看條款本身有沒有效、涵蓋的爭議範圍到哪裡。條款站得住腳，接下來就是算在新加坡仲裁的成本和勝算，或者從談判與和解找出路。安理可與新加坡當地及英美律師協作處理。',
          en: 'Generally no. A valid arbitration clause takes the dispute out of the courts. Sue in Taiwan anyway and the other side will invoke the clause; the court will normally stay the case and direct the parties to arbitrate. So start with the clause itself: is it valid, and how broadly is it drafted? If it holds, the real questions are what arbitration at the named seat will cost and whether the claim justifies it, or whether a negotiated settlement is the better route. We coordinate with local, US and UK counsel as the case requires.',
        },
      },
      {
        q: {
          zh: '國外客戶一直拖欠貨款，跨境要怎麼追？',
          en: 'A foreign customer keeps defaulting on payments. How do I recover the debt across borders?',
        },
        a: {
          zh: '追得回來的關鍵在三件事：合約怎麼約定準據法和管轄、對方和它的資產在哪個國家、時效還剩多久。實務上多半先發函催告並談判，談不成再依合約提付仲裁或提起跨國訴訟。起訴地點盡量選在對方有資產的地方，否則贏了也執行不到。各國時效長短不一，拖久了能用的手段就少。安理可用中英文直接和對方與外國律師交涉。',
          en: 'Yes, but three things decide whether it is worth pursuing: what the contract says about governing law and jurisdiction, where the debtor and its assets are located, and how much of the limitation period is left. Recovery normally opens with a demand letter and negotiation, then arbitration or litigation under the contract. Sue where the assets are, since a judgment you cannot enforce is worth little. Limitation periods differ from country to country and the options narrow as time passes, so move early. We deal with the debtor and foreign counsel directly in English.',
        },
      },
      {
        q: {
          zh: '簽跨國合約時，仲裁條款要注意什麼？',
          en: 'What should I watch for in an arbitration clause when signing a cross-border contract?',
        },
        a: {
          zh: '仲裁地、仲裁機構與適用規則、仲裁語言、契約準據法，這四項一定要寫清楚。日後爭議在哪裡解決、用哪一國法律、成本多高，都是它們決定的。條款建議直接採用仲裁機構公布的示範條款，自創的混合條款最容易出事。也不要一邊約定仲裁、一邊又約定法院管轄，兩者打架的條款常常先被拿來爭執效力。簽約前請律師看過一次，成本遠低於事後補救。',
          en: 'Four things must be explicit: the seat, the institution and its rules, the language of the proceedings, and the governing law. Between them they decide where a dispute is heard, under which law, and at what cost. Use the institution\'s model clause rather than drafting a hybrid of your own. And never provide for both arbitration and court jurisdiction in the same contract, or the parties will litigate the clause before anyone reaches the merits. A review before signing costs far less than repairing the drafting afterwards.',
        },
      },
    ],
  },
  'corporate-governance': {
    metaDesc: {
      zh: '股東糾紛、經營權爭奪、合夥拆夥，多半拖越久越難處理。安理國際法律事務所位於台北，處理股東會與董事會爭議、公司法諮詢，並協助企業建置法令遵循制度、進行內部調查，因應個資法與洗錢防制的查核。採預約制。',
      en: 'Yang & Associates Law Firm (ANLI), based in Taipei, acts in shareholder disputes, corporate control contests, partnership break-ups and shareholders\' and board meeting disputes, and builds compliance programs covering internal investigations, personal data protection and anti-money laundering. Consultations by appointment.',
    },
    intro: [
      {
        zh: '公司終於做起來，股東之間反而開始出事。有人只掛名不出力，有人在外面另開一家做同樣的生意。比較麻煩的是幾個股東聯手要換掉經營團隊。中小企業和新創的股東糾紛、合夥拆夥、經營權爭奪，大多在股東會或董事會上正式攤牌，拖越久越難收。',
        en: 'A company finally starts making money, and that is often when the shareholders start fighting. One holds shares but contributes nothing. Another quietly sets up the same business on the side. Harder still is a group of them moving to replace the management team. For SMEs and startups, shareholder disputes, partnership break-ups and control contests usually come to a head at a shareholders\' or board meeting, and delay only makes them costlier.',
      },
      {
        zh: '股東會決議只要召集程序或決議方法有瑕疵，依公司法要自決議之日起三十日內訴請法院撤銷。過了期間，就不能再用程序瑕疵爭執。開會通知、委託書、表決、議事錄，每一步都要留下紀錄。安理多半在開會前就先把程序做對，爭議發生後協助保全證據、進行訴訟。',
        en: 'Where a shareholders\' resolution is defective in its convening procedure or voting method, the Company Act requires an action to set it aside within 30 days of the resolution. Miss that window and the procedural defect can no longer be raised. Meeting notices, proxies, voting, minutes: every step needs a record behind it. ANLI is usually brought in before the meeting to get the procedure right, and preserves evidence and litigates once a dispute breaks out.',
      },
      {
        zh: '另一半是法令遵循。個資法、洗錢防制、公司治理的要求越來越多，出事後才補救，代價最高。我們協助企業建置法遵制度與吹哨者機制，接到檢舉或發現異常金流時進行內部調查，必要時與資安顧問合作做數位鑑識。主管機關調查與跨境監理事務，由律師出面因應。',
        en: 'The other half of this practice is compliance. Personal data protection, anti-money laundering and corporate governance obligations keep expanding, and repairing the damage after an incident is always the expensive route. We build compliance programs and whistleblowing channels, run internal investigations when a report or an unexplained cash flow surfaces, and bring in digital forensics specialists where the facts require it. Counsel also handles regulatory investigations and cross-border regulatory matters.',
      },
    ],
    cases: [
      {
        term: {
          zh: '股東糾紛',
          en: 'Shareholder Disputes',
        },
        desc: {
          zh: '出資、分紅、公司方向談不攏，股東就卡住。律師可以協助談判、擬股東協議，必要時提起訴訟。',
          en: 'Shareholders who cannot agree on funding, dividends or direction can bring a company to a standstill. We negotiate, draft shareholder agreements, and litigate when talks fail.',
        },
      },
      {
        term: {
          zh: '經營權爭奪',
          en: 'Corporate Control Contests',
        },
        desc: {
          zh: '改選董事、徵求委託書、解任現任經營者，攻防很快。律師規劃合法程序，必要時聲請假處分保全。',
          en: 'Board elections, proxy solicitation and the removal of incumbents move fast. We map out a lawful procedure and apply for injunctions when timing demands it.',
        },
      },
      {
        term: {
          zh: '股東會爭議',
          en: 'Shareholders\' Meeting Disputes',
        },
        desc: {
          zh: '召集程序或決議方法有瑕疵，可以提撤銷或確認無效之訴。律師評估與蒐證，也幫公司把會開對。',
          en: 'A defective convening procedure or voting method can support an action to set a resolution aside or declare it void. We assess the case, and we also help companies run meetings properly.',
        },
      },
      {
        term: {
          zh: '董事會運作',
          en: 'Board Governance',
        },
        desc: {
          zh: '董事會的召集、利益迴避和議事程序最常出問題。律師協助訂治理規則，重大會議前先看過一遍。',
          en: 'Convening rules, conflicts of interest and meeting procedure are where boards get into trouble. We draft governance rules and review the agenda before critical meetings.',
        },
      },
      {
        term: {
          zh: '合夥拆夥',
          en: 'Partnership Dissolution',
        },
        desc: {
          zh: '拆夥吵的通常是帳目、客戶名單和商標歸誰。律師協助結算、把拆夥協議簽妥，避免拆完再互告。',
          en: 'Partnership splits turn on the accounts, the client list and the trademarks. We handle the settlement and document the break-up so it does not resurface as litigation.',
        },
      },
      {
        term: {
          zh: '公司法諮詢',
          en: 'Company Act Advisory',
        },
        desc: {
          zh: '增資、股權規劃、章程修訂、閉鎖性公司設計，律師會看公司實際狀況，給做得到的建議。',
          en: 'Capital increases, equity structuring, amendments to the articles, closely held company design. Advice that fits how the company actually runs.',
        },
      },
      {
        term: {
          zh: '法令遵循制度',
          en: 'Compliance Program Design',
        },
        desc: {
          zh: '由律師盤點公司的法規風險，建置法遵制度、內規與教育訓練，降低裁罰與負責人自身的責任風險。',
          en: 'We map the regulatory risks a company is genuinely exposed to, then build the compliance program, internal rules and training that cut both corporate penalties and personal liability.',
        },
      },
      {
        term: {
          zh: '內部調查',
          en: 'Internal Investigations',
        },
        desc: {
          zh: '公司接到檢舉或查到異常金流時，調查該由律師主導，搭配數位鑑識，程序才站得住、證據才用得上。',
          en: 'When a report comes in or the cash flow looks wrong, counsel should lead the investigation, with digital forensics behind it, so the process holds up and the evidence remains usable.',
        },
      },
      {
        term: {
          zh: '個資法遵循',
          en: 'Personal Data Compliance',
        },
        desc: {
          zh: '個資蒐集、外洩通報、跨境傳輸各有法定要求。制度先建起來，主管機關來查時由律師代表公司說明。',
          en: 'Collection, breach notification and cross-border transfer each carry statutory duties. We build the systems first, and speak for the company when the regulator asks.',
        },
      },
      {
        term: {
          zh: '洗錢防制',
          en: 'Anti-Money Laundering',
        },
        desc: {
          zh: '金融機構、虛擬資產業者與指定行業都有洗錢防制義務。內控由律師協助建置，檢查與裁罰一併因應。',
          en: 'Financial institutions, virtual asset service providers and designated businesses all carry AML duties. We build the internal controls and handle examinations and penalties.',
        },
      },
      {
        term: {
          zh: '背信掏空',
          en: 'Breach of Trust and Asset Stripping',
        },
        desc: {
          zh: '負責人或經理人把公司資產搬走，是刑事問題。律師協助蒐證、提出告訴，也承接被指控一方的辯護。',
          en: 'Directors or managers moving company assets out is a criminal matter. We gather evidence and file complaints, and we also defend those on the receiving end.',
        },
      },
      {
        term: {
          zh: '吹哨者處理',
          en: 'Whistleblower Programs & Response',
        },
        desc: {
          zh: '檢舉管道要保密，收到檢舉更要有處理流程。律師協助建置管道並規劃調查，減少報復與洩密爭議。',
          en: 'A reporting channel has to stay confidential, and a report that arrives needs a process behind it. We build the channel and structure what follows, limiting retaliation and confidentiality disputes.',
        },
      },
    ],
    faq: [
      {
        q: {
          zh: '股東吵翻了，可以把對方踢出公司嗎？',
          en: 'Can we force a troublesome shareholder out of the company?',
        },
        a: {
          zh: '不行。股份是股東的財產，沒有他同意轉讓，也沒有法定的特殊情形，就沒辦法強制排除。實務上走的路是協商收購股份，或透過股東會改組經營層。僵局嚴重時，持股符合法定要件的股東也可以聲請法院裁定解散公司。先把雙方持股比例和章程規定看清楚，再決定要談還是要打。動作越早，手上籌碼越多。',
          en: 'No. Shares are the shareholder\'s property, and without their agreement to transfer or a specific statutory basis, nobody can be expelled. The realistic routes are a negotiated buy-out or replacing management through the shareholders\' meeting. Where the deadlock is severe, shareholders meeting the statutory thresholds may petition the court to dissolve the company. Start with the shareholding structure and the articles of incorporation, then decide whether to negotiate or litigate. The earlier you move, the more leverage you keep.',
        },
      },
      {
        q: {
          zh: '股東會決議有問題，多久內要提告？',
          en: 'How long do I have to challenge a shareholders\' meeting resolution?',
        },
        a: {
          zh: '看瑕疵出在哪裡。召集程序或決議方法違法的，要自決議之日起三十日內向法院訴請撤銷，過了就不能再以程序瑕疵爭執。決議內容本身違反法令或章程的，那是無效，不受三十日限制。三十日很短，覺得會開得不對，先把開會通知、議事錄、錄音留下來，再找律師看。',
          en: 'It depends where the defect lies. If it is in the convening procedure or the voting method, an action to set the resolution aside must be filed within 30 days of its adoption; after that the procedural defect can no longer be raised. If the content of the resolution itself breaches the law or the articles, the resolution is void and no such deadline applies. Thirty days goes quickly, so preserve the meeting notice, the minutes and any recordings before you take advice.',
        },
      },
      {
        q: {
          zh: '公司收到員工檢舉高層掏空，該怎麼處理？',
          en: 'An employee has reported senior management for embezzlement — what should we do?',
        },
        a: {
          zh: '不要先去質問當事人。先把證據固定住，同時保護檢舉人身分。調查由律師主導，需要時搭配數位鑑識，把電腦與帳務紀錄保全下來。查證確實有問題，再決定要解任、民事求償，還是提刑事告訴。程序做錯，證據可能不能用，公司也可能被主張對吹哨者報復，所以外部律師越早進來越好。',
          en: 'Do not confront anyone yet. Secure the evidence and protect the reporter\'s identity. Let counsel lead the investigation, with digital forensics where needed to preserve computers and accounting records. Only once the facts are established should you weigh removal, civil claims or a criminal complaint. A flawed process can render the evidence unusable and expose the company to a retaliation claim, which is why outside counsel should come in early.',
        },
      },
      {
        q: {
          zh: '合夥做生意要拆夥，錢怎麼算？',
          en: 'We\'re splitting up a business partnership — how is the money divided?',
        },
        a: {
          zh: '有合夥契約就照契約算。沒有的話依民法，退夥或解散時結算合夥財產，損益原則上按出資比例分配。實際上吵最兇的是帳目不清，還有客戶和商標歸誰。動手拆之前先把帳冊和對話紀錄留好，由律師協助結算並簽妥拆夥協議，才不會拆完還互相追債、互告。',
          en: 'A written partnership agreement governs. Without one, the Civil Code applies: on withdrawal or dissolution the partnership assets are settled, and profits and losses are shared in proportion to contributions by default. The real fights are over unclear accounts and who keeps the clients and the trademarks. Preserve the books and the correspondence before you start unwinding, then have counsel run the settlement and sign a dissolution agreement.',
        },
      },
    ],
  },
  'cross-border-business': {
    metaDesc: {
      zh: '安理國際法律事務所位於台北市中正區，承辦跨境併購、外人投資申請（投審會）、合資協議、英文契約審閱與國際商務合約談判。涉及美國、英國的案件與當地律師共同辦案，也協助台商海外布局。初次諮詢採預約制。',
      en: 'Yang & Associates Law Firm (ANLI) in Taipei handles cross-border M&A, Taiwan foreign investment approvals, joint ventures, English contract review, and international commercial negotiations, acting as co-counsel with US and UK attorneys. Consultations by appointment.',
    },
    intro: [
      {
        zh: '英文合約簽了，出事才發現要到對方的國家打官司。合資的出資談得很細，股權怎麼分、將來想退出怎麼退，協議裡一個字也沒寫。原廠寄一封終止通知，經銷權就沒了，倉庫裡的貨還在。跨國生意的糾紛大多不是突然冒出來的，是簽約那天就留下的。',
        en: 'Most cross-border disputes are written into the deal long before anything goes wrong. An English contract signed without review. A joint venture with no exit terms. A distributorship ended by one letter, with the stock still in the warehouse. By then the terms are fixed.',
      },
      {
        zh: '外國人來台投資，多數情況要先取得經濟部投資審議司（原投審會）核准。程序沒走完，股權登記和後續增資都會卡住，錢匯進來也動不了。合約的準據法與管轄條款同樣容易被跳過，它們決定將來在哪個國家、依哪一國的法律解決爭議，簽名前一定要看清楚。',
        en: 'Foreign investment into Taiwan usually needs approval from the Department of Investment Review, MOEA (formerly the Investment Commission) before shares can be registered or capital increased. Skip the step and the funds sit stranded. The governing-law and jurisdiction clauses deserve the same attention: they decide whose courts, and whose law, will handle any dispute.',
      },
      {
        zh: '安理的主持律師楊佳陵博士在美國柏克萊取得法學博士（J.S.D.），英文契約審閱與跨境談判是事務所的日常業務。案件牽涉美國或英國時，我們與當地執業律師共同辦案（co-counsel），進度由台北這邊統籌，客戶不必自己跟外國律師來回周旋。',
        en: 'Our managing attorney holds a J.S.D. from UC Berkeley, and English-language contracts and cross-border negotiation are routine work at the firm. On US and UK matters we act as co-counsel with attorneys admitted there, running the file from Taipei so clients are not left dealing with foreign lawyers on their own.',
      },
    ],
    cases: [
      {
        term: {
          zh: '外人投資申請',
          en: 'Foreign Investment Approval',
        },
        desc: {
          zh: '外國股東要在台設公司或入股，須先向投資審議司（原投審會）申請核准，我們備件並辦登記。',
          en: 'Approval filings with the Department of Investment Review (formerly the Investment Commission) for foreign shareholders forming or buying into a Taiwanese company, through to registration.',
        },
      },
      {
        term: {
          zh: '跨境併購',
          en: 'Cross-Border M&A',
        },
        desc: {
          zh: '收購外國公司，或把股權賣給外資。我們規劃交易架構、執行盡職調查並審閱併購契約。',
          en: 'Deal structuring, due diligence, and transaction documents for buying a foreign target or selling Taiwanese equity to an overseas buyer.',
        },
      },
      {
        term: {
          zh: '合資協議',
          en: 'Joint Venture Agreements',
        },
        desc: {
          zh: '合資設廠最常漏掉的是退場機制。出資比例、經營控制與退場條件，由我們擬約並參與談判。',
          en: 'Capital contributions, control, deadlock, and exit terms are what a joint venture lives on. We draft the agreement and sit in on the negotiation.',
        },
      },
      {
        term: {
          zh: '英文契約審閱',
          en: 'English Contract Review',
        },
        desc: {
          zh: '外國客戶寄來英文合約，我們逐條審閱，用中文說明風險，並提供英文修改文字。',
          en: 'Clause-by-clause review of English-language agreements, with the risks explained in Chinese and the revisions drafted in English.',
        },
      },
      {
        term: {
          zh: '國際商務合約談判',
          en: 'International Contract Negotiation',
        },
        desc: {
          zh: '跨國買賣、服務或授權合約，我們陪同談判，把付款、違約與爭議解決條款談清楚。',
          en: 'Negotiating payment, liability, and dispute-resolution terms in cross-border sales, services, and licensing deals.',
        },
      },
      {
        term: {
          zh: '經銷代理合約',
          en: 'Distribution & Agency Agreements',
        },
        desc: {
          zh: '獨家範圍、業績門檻、終止後的庫存處理，是經銷代理合約的重點，我們逐項審閱把關。',
          en: 'Exclusivity, sales targets, termination, and what happens to inventory afterwards: the terms that decide how a distribution or agency deal ends.',
        },
      },
      {
        term: {
          zh: '保密協議NDA',
          en: 'NDAs & Confidentiality',
        },
        desc: {
          zh: '洽談合作前先把NDA談好，我們草擬或審閱保密範圍、使用目的、期間與違約責任。',
          en: 'Drafting and reviewing NDAs before talks begin: scope, permitted use, duration, and remedies for breach.',
        },
      },
      {
        term: {
          zh: '出口管制合規',
          en: 'Export Controls & Trade Compliance',
        },
        desc: {
          zh: '產品或技術可能受貿易管制。我們判斷是否屬管制貨品、代辦輸出許可，並建立內部審查。',
          en: 'Assessing whether a product or technology is a controlled item, applying for export permits, and building internal screening procedures.',
        },
      },
      {
        term: {
          zh: '台商海外布局',
          en: 'Outbound Investment',
        },
        desc: {
          zh: '赴美國或東南亞設子公司、投資設廠，我們與當地律師合作規劃控股架構與投資契約。',
          en: 'Holding structures and investment agreements for Taiwanese businesses setting up in the US or Southeast Asia, developed with local counsel.',
        },
      },
      {
        term: {
          zh: '跨國供應鏈合約',
          en: 'Supply Chain Contracts',
        },
        desc: {
          zh: '供應商斷貨、瑕疵或交期延誤，我們檢視合約的責任分配，協助求償或重新談定條件。',
          en: 'Supply failures, defects, and late delivery. We check how the contract allocates liability, then pursue the claim or renegotiate the terms.',
        },
      },
      {
        term: {
          zh: '國際貿易糾紛',
          en: 'Cross-Border Trade Disputes',
        },
        desc: {
          zh: '貨款收不回來，或到貨品質有爭議。我們先釐清管轄與準據法，再決定催收、仲裁或起訴。',
          en: 'Jurisdiction and governing law first, then recovery through demand, arbitration, or litigation.',
        },
      },
      {
        term: {
          zh: '跨境技術授權',
          en: 'Technology Licensing',
        },
        desc: {
          zh: '把技術或商標授權給外國廠商，我們草擬授權契約，處理權利金、地域與侵權條款。',
          en: 'License agreements for technology and trademarks abroad, covering royalties, territory, and infringement.',
        },
      },
    ],
    faq: [
      {
        q: {
          zh: '外國人要在台灣開公司或入股，一定要經過投審會嗎？',
          en: 'Does a foreign investor need government approval to invest in a Taiwanese company?',
        },
        a: {
          zh: '多數情況要。外國人來台投資，原則上須先經經濟部投資審議司（原投審會）核准，才能辦理公司設立登記或股權變更。投資金額和產業別不同，要備的文件與審查方式也不一樣，陸資另有較嚴格的限制。實務上常見的情形是錢先匯進來了，才發現登記卡在核准前面，所以匯款和簽約前先把程序確認清楚。',
          en: 'Usually, yes. Foreign investment into Taiwan generally requires prior approval from the Department of Investment Review, MOEA (formerly the Investment Commission) before company registration or a share transfer can go through. What you file depends on the amount and the industry, and investment from mainland China is subject to much stricter rules. Confirm the route before wiring funds or signing. Money that arrives ahead of approval tends to sit idle.',
        },
      },
      {
        q: {
          zh: '英文合約看不太懂，可以先簽再說嗎？',
          en: 'Can I just sign an English contract and sort out the details later?',
        },
        a: {
          zh: '不建議。價格和數量客戶大多看得懂，真正出事的是準據法、管轄、賠償上限和智財歸屬這幾條，位置通常在合約後段。先簽再說，等於把談判籌碼先交出去。英文契約審閱是我們的日常業務，逐條標出風險、用中文說明，並提供可以直接帶回談判桌的英文修改文字。',
          en: 'We advise against it. Price and quantity are the easy parts. The damage usually comes from governing law, jurisdiction, liability caps, and IP ownership, which sit near the back of the document. Signing first hands over your leverage. English contracts are routine work here: we mark the risks clause by clause, explain them in Chinese, and draft the English revisions you take back to the table.',
        },
      },
      {
        q: {
          zh: '跟外國公司談合作，什麼時候該簽保密協議（NDA）？',
          en: 'When should I sign an NDA with a foreign business partner?',
        },
        a: {
          zh: '在交出任何技術資料、客戶名單或報價之前就要簽。NDA要寫清楚保密範圍、使用目的、期間和違約責任。準據法與管轄同樣要看，如果約定只能到國外求償，將來的成本可能高到不值得走這一趟。對方提出的版本通常對它自己有利，簽名前請律師看過並不會花太久。',
          en: 'Before you hand over technical data, customer lists, or pricing. A workable NDA defines scope, permitted use, duration, and remedies for breach. Check the governing-law and jurisdiction clauses too, because an NDA you can only enforce abroad may cost more to use than it is worth. The counterparty\'s template is written for the counterparty. Have it reviewed first.',
        },
      },
      {
        q: {
          zh: '產品要出口，怎麼知道有沒有出口管制問題？',
          en: 'How do I know whether my products are subject to export controls?',
        },
        a: {
          zh: '先確認產品或技術有沒有列入戰略性高科技貨品清單。屬於管制貨品的，輸出前要取得許可，出口到受管制或受制裁地區還有額外限制。容易被忽略的是，產品含有美國技術時，美國的出口管制規定可能適用到台灣公司。我們協助判斷是否受管制、申請輸出許可，並建立內部審查流程。',
          en: 'Start with Taiwan\'s Strategic High-Tech Commodities list. Controlled items need an export permit before shipment, and restricted or sanctioned destinations carry further limits. The point most exporters miss is that US export controls can reach a Taiwanese company when the product incorporates US technology. We assess whether controls apply, handle permit applications, and set up internal screening.',
        },
      },
    ],
  },
  'tax-wealth': {
    metaDesc: {
      zh: '安理國際法律事務所位於台北市中正區，處理遺產稅與贈與稅申報、生前分年贈與規劃，以信託或閉鎖性股份有限公司安排家族企業傳承，並代理復查、訴願與稅務行政訴訟，也協助海外資產申報與CFC制度評估。採預約制。',
      en: 'Taipei-based Yang & Associates Law Firm (ANLI) handles estate and gift tax filings, lifetime gifting plans, trusts and close-company structures for family succession, offshore and CFC reporting, and tax disputes from recheck through the administrative courts.',
    },
    intro: [
      {
        zh: '多數人真正處理稅務問題，是從收到國稅局的通知開始。長輩過世後才發現名下財產遠比想像複雜，幾年前給子女的一筆匯款被認定成贈與，海外帳戶擺了十幾年從沒申報過。走到這一步，能談的多半只剩補稅金額、罰鍰輕重，以及救濟期限還剩幾天。',
        en: 'Most people confront tax questions only after a notice arrives from the tax authority. A parent dies and the estate turns out to be far more tangled than anyone expected. A transfer made to a child years ago is recharacterized as a gift. An offshore account has sat unreported for a decade. By then the conversation is narrow: how much back tax, how large the penalty, how many days are left to seek relief.',
      },
      {
        zh: '稅務救濟每一關都有期限。對國稅局的核定不服，要先在法定期限內申請復查，復查決定出來還是不服才能提訴願，訴願駁回後才輪到行政訴訟。任何一關逾期，處分就確定了，之後再有道理也難翻。遺產稅原則上也要在被繼承人死亡之日起六個月內申報。',
        en: 'Tax remedies in Taiwan run on fixed deadlines. A taxpayer who disputes an assessment must first apply to the tax authority for a recheck, then file an administrative appeal, and only then take the case to the administrative courts. Miss one deadline and the assessment stands, however good the argument. Estate tax returns are generally due within six months of the date of death.',
      },
      {
        zh: '不過多數稅務風險是可以事先避開的。財產分幾年贈與、家族股權要不要放進信託或閉鎖性股份有限公司、境外公司會不會落入CFC申報範圍，這些都是事前能算清楚的事。安理的作法是先把架構和資金流向確認清楚再動手。真的起了爭議，也從復查陪到行政訴訟。',
        en: 'Most of this exposure is avoidable. How many years to spread gifts over, whether family shares belong in a trust or a closely held company, whether an offshore entity falls within Taiwan\'s CFC rules: all of these have answers before the fact. ANLI works through the structure and the money trail first, and stays with clients from recheck through litigation when a dispute does arrive.',
      },
    ],
    cases: [
      {
        term: {
          zh: '生前贈與規劃',
          en: 'Lifetime Gift Planning',
        },
        desc: {
          zh: '打算分年把財產移轉給子女，我們協助安排贈與的時點與方式並辦理申報，減少日後被追補稅的風險。',
          en: 'For clients moving assets to their children over several years, we plan the timing and form of each gift and handle the filings, reducing the risk of later reassessment.',
        },
      },
      {
        term: {
          zh: '遺產稅申報',
          en: 'Estate Tax Filing',
        },
        desc: {
          zh: '親人過世後遺產稅原則上六個月內要申報。律師協助盤點財產、確認扣除額，並如期送件。',
          en: 'Estate tax is generally due six months after death. We inventory the estate, confirm available deductions, and file on time.',
        },
      },
      {
        term: {
          zh: '贈與稅爭議',
          en: 'Gift Tax Disputes',
        },
        desc: {
          zh: '親屬間資金往來被國稅局認定為贈與而補稅，律師協助整理金流證據、說明款項性質並提起救濟。',
          en: 'When transfers between family members are recharacterized as taxable gifts, we document the source and purpose of the funds and pursue the available remedies.',
        },
      },
      {
        term: {
          zh: '遺囑信託',
          en: 'Testamentary Trusts',
        },
        desc: {
          zh: '繼承人年幼或不擅理財，可以用遺囑設立信託，由律師協助擬定條款，讓受託人依約管理並分期給付。',
          en: 'Where heirs are young or inexperienced with money, a trust created by will lets a trustee hold the assets and release them in stages. We draft the terms.',
        },
      },
      {
        term: {
          zh: '他益信託',
          en: 'Lifetime Trusts',
        },
        desc: {
          zh: '生前就想透過信託照顧家人的，律師協助設計信託架構，並事先評估他益信託的贈與稅負擔。',
          en: 'For clients providing for family during their lifetime, we design the trust structure and assess the gift tax treatment when the beneficiary is someone other than the settlor.',
        },
      },
      {
        term: {
          zh: '家族企業傳承',
          en: 'Family Business Succession',
        },
        desc: {
          zh: '家族公司要交棒，最怕股權分散、經營權旁落。律師協助設計持股架構與接班安排。',
          en: 'Handing a family company to the next generation without fragmenting ownership or losing control. We design the shareholding structure and the succession plan.',
        },
      },
      {
        term: {
          zh: '閉鎖性公司',
          en: 'Closely Held Companies',
        },
        desc: {
          zh: '要把家族持股集中在閉鎖性股份有限公司底下，律師協助處理章程設計、股份轉讓限制與特別股條款。',
          en: 'Consolidating family shareholdings in a close company, with articles, transfer restrictions, and special share rights drafted to fit the family.',
        },
      },
      {
        term: {
          zh: '稅務復查訴願',
          en: 'Tax Recheck & Appeals',
        },
        desc: {
          zh: '收到補稅或罰鍰處分不服，律師在法定期限內協助申請復查、提起訴願，爭取撤銷或減輕。',
          en: 'An assessment or penalty can be challenged by applying for a recheck within the statutory period and appealing from there. We prepare the filings and argue for cancellation or reduction.',
        },
      },
      {
        term: {
          zh: '稅務行政訴訟',
          en: 'Tax Litigation',
        },
        desc: {
          zh: '訴願被駁回不代表結束。律師協助向行政法院提起行政訴訟，重新整理帳證資料，並建構法律主張。',
          en: 'A rejected appeal is not the end of the road. We take the case to the administrative court, rebuild the accounting record, and frame the legal arguments.',
        },
      },
      {
        term: {
          zh: '海外資產申報',
          en: 'Offshore Asset Reporting',
        },
        desc: {
          zh: '手上有海外存款、股票或不動產，律師協助釐清哪些必須列入海外所得申報，降低漏報被罰的風險。',
          en: 'For overseas deposits, securities, and property, we work out what has to be declared as foreign-source income and reduce the exposure to penalties for omission.',
        },
      },
      {
        term: {
          zh: 'CFC申報',
          en: 'CFC Compliance',
        },
        desc: {
          zh: '透過境外公司投資或持有資產的，律師協助評估是否落入CFC制度，再決定辦理申報或調整架構。',
          en: 'For assets held through offshore entities, we assess whether Taiwan\'s CFC rules bite and advise on reporting or restructuring.',
        },
      },
      {
        term: {
          zh: '遺囑特留分',
          en: 'Wills & Reserved Portions',
        },
        desc: {
          zh: '要立遺囑分配身後財產，律師協助確認遺囑的法定方式，並把特留分納入計算，減少日後的繼承糾紛。',
          en: 'For clients making a will, we confirm the statutory formalities and factor in reserved portions, reducing the risk of inheritance disputes later.',
        },
      },
    ],
    faq: [
      {
        q: {
          zh: '遺產稅什麼時候要申報？來不及會怎樣？',
          en: 'When is the estate tax return due in Taiwan, and what if I miss it?',
        },
        a: {
          zh: '原則上是被繼承人死亡之日起六個月內。有正當理由的，可以在期限屆滿前以書面申請延長。逾期申報或漏報財產，都可能被加徵罰鍰。實務上比較容易出事的是遺產範圍：被繼承人死亡前二年內贈與配偶或特定近親的財產，依法仍要視為遺產課稅，盤點時最常漏掉的就是這一塊。財產狀況複雜的話，越早開始清查越好。',
          en: 'Generally within six months of the date of death. If there is good reason, you can apply in writing to extend the deadline before it expires. Filing late or leaving assets out can draw penalties. The usual trap is the scope of the estate: gifts made to a spouse or certain close relatives within two years before death are pulled back into the taxable estate by law, and that is the item people miss when they take inventory. The more complicated the assets, the earlier the work should start.',
        },
      },
      {
        q: {
          zh: '每年贈與子女現金，需要申報贈與稅嗎？',
          en: 'Do annual cash gifts to my children need to be reported?',
        },
        a: {
          zh: '同一年度內贈與總額沒有超過免稅額，原則上不用繳稅，也不用申報。超過免稅額，就要在贈與行為後三十日內申報贈與稅。免稅額金額會隨主管機關公告調整，規劃前先確認當年度的數字。另外，即使金額在免稅額內，匯款憑證和資金用途的說明資料還是留著比較好，國稅局隔幾年才來問的情形並不少見。分年贈與是常見作法，但贈與時點和財產種類都會影響稅負，最好整體算過再動。',
          en: 'If a donor\'s total gifts in a calendar year stay within the annual exemption, no tax is due and no return is required. Anything above the exemption must be reported within thirty days of the gift. The exemption figure is adjusted by official announcement, so check the current year\'s number before planning around it. Keep transfer records and evidence of purpose even for exempt gifts. The tax authority may ask about them years later. Annual gifting is common, but timing and asset type both move the result, so work through the whole plan rather than one year at a time.',
        },
      },
      {
        q: {
          zh: '收到國稅局補稅通知不服，可以不繳嗎？要怎麼救濟？',
          en: 'I received a tax assessment I disagree with. What can I do?',
        },
        a: {
          zh: '擺著不理是最糟的選項。程序上第一步是在法定期限內申請復查，對復查決定仍不服才提起訴願，訴願被駁回後才能向行政法院提起行政訴訟。每個階段都有期限，逾期處分就確定。強制執行的部分，已依法申請復查者原則上暫緩移送強制執行。進入訴願階段，則可依規定繳納部分稅款或提供相當擔保，暫緩移送強制執行。收到處分書就該找律師評估，不要拖到期限剩沒幾天。',
          en: 'Ignoring it is the worst option. The first step is to apply for a recheck within the statutory period. If the recheck decision still goes against you, file an administrative appeal, and only after that can the case go to the administrative courts. Each stage carries its own deadline, and missing one makes the assessment final. On enforcement: a taxpayer who has duly applied for a recheck generally has referral for compulsory enforcement deferred, and at the appeal stage, paying part of the assessed tax or providing adequate security will defer it as well. Bring the notice to a lawyer when it arrives, not when the deadline is days away.',
        },
      },
      {
        q: {
          zh: '用境外公司持有資產，現在還需要申報嗎？CFC是什麼？',
          en: 'I hold assets through an offshore company. Do Taiwan\'s CFC rules affect me?',
        },
        a: {
          zh: '會受影響。台灣已施行受控外國企業（CFC）制度，個人與關係人對低稅負地區的境外公司合計持股達一定比率，或具有重大影響力，即使盈餘沒有匯回台灣，也可能要視同分配課稅並辦理申報。過去把資產放進境外公司就擺著不動的做法，現在會產生申報義務，也有補稅與罰鍰的風險。手上有境外架構的，先重新檢視持股比例與控制關係，確認是否落入CFC範圍，再決定要申報還是調整架構。',
          en: 'They may well. Under Taiwan\'s controlled foreign company regime, where an individual and related parties together hold a set proportion of a company in a low-tax jurisdiction, or exercise significant influence over it, its earnings can be taxed as deemed distributions and reported even if nothing is remitted to Taiwan. An offshore holding company is no longer something you set up and leave alone: it carries filing obligations and exposure to back taxes and penalties. Review the shareholding and control position first, then decide whether to report or restructure.',
        },
      },
    ],
  },
};
