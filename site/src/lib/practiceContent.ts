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
      zh: '安理國際法律事務所位於台北市中正區，主持律師楊佳陵曾任第 13 屆中華民國醫師公會全國聯合會法律顧問，承辦醫療糾紛、醫事行政爭訟、健保費用核減與停約救濟、臨床試驗與細胞治療契約、藥品醫材與特殊營養食品標示廣告等案件。諮詢採預約制。',
      en: 'Yang & Associates Law Firm (ANLI), Taipei: medical malpractice defence, healthcare administrative litigation, NHI reimbursement disputes, clinical trial and cell-therapy agreements, and labelling and advertising compliance for pharmaceuticals, medical devices and special-nutrition foods. Consultations by appointment.',
    },
    intro: [
      {
        zh: '醫療與生技的法律問題，很少只有一個戰場。醫師收到刑事傳票，多半同時面對民事求償與衛生局的行政調查，有時還有媒體。醫院和護理之家要處理的，是醫糾之外的機構責任與評鑑。藥廠、醫材商和營養品業者的一支廣告、一張標示，可能同時牽動藥事法、食品安全衛生管理法與公平交易法。',
        en: 'Legal trouble in healthcare rarely stays on one front. A physician served with a criminal summons is usually facing a civil claim and a health-bureau investigation at the same time, sometimes with the press watching. Hospitals and nursing homes carry institutional liability and accreditation issues beyond the dispute itself. For pharmaceutical companies, device makers and nutrition brands, a single advertisement or label can engage the Pharmaceutical Affairs Act, the Food Safety and Sanitation Act, and the Fair Trade Act all at once.',
      },
      {
        zh: '本所主持律師楊佳陵長期站在全國醫界的法律第一線。她曾任第 13 屆中華民國醫師公會全國聯合會法律顧問，參與醫師權益、醫事法規與重大醫療政策議題，該全國性醫師團體代表逾五萬名醫師；現任全國律師聯合會醫藥與健保委員會委員，曾出席憲法法庭醫療費用收取標準案不公開說明會，且連續多屆擔任台灣醫法論壇場次主持人／座長，主持醫療機構責任、醫院雇主保護義務、護理人員執業安全、醫療個資與 AI 法律責任等議題。她也曾任國立臺北護理健康大學兼任助理教授，是《生醫法律面面觀：生醫業必備的法律錦囊》共同作者，並發表 CAR-T 細胞療法臨床試驗責任、細胞與基因治療產品法規等專論。',
        en: "The firm's principal, Dr. Chia-Ling Yang, has long worked on the legal front line of Taiwan's medical profession. She served as legal advisor to the Taiwan Medical Association for its 13th term — the national body representing more than fifty thousand physicians — sits on the Taiwan Bar Association's Medicine, Pharmaceuticals and NHI Committee, and took part in the Constitutional Court's closed-door session on the medical-fee standards case. Across successive editions of Taiwan's medical-law forums she has chaired sessions on institutional liability, the hospital employer's duty of protection, workplace safety for nurses, and health-data and AI liability. A former adjunct assistant professor at the National Taipei University of Nursing and Health Sciences, she co-authored a practitioner's handbook on biomedical law and has published on CAR-T clinical-trial liability and the regulation of cell and gene therapy products.",
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
          zh: '先記錄送達日期、文號、要求事項與期限，依院內流程通知主管及醫務、法務或風險管理單位；如可能涉及責任保險，也應依保單約定通知保險人。同步以院方授權方式保全通知送達時已存在的病歷、護理紀錄、同意書、醫囑、檢驗與影像、排班資料、相關公務通訊，以及電子系統的存取與增刪軌跡；只匯出一份 PDF 並不足夠，也不要擅自將病人資料攜出院方系統。不得刪除、覆寫、塗燬或倒填原始紀錄。確有必要更正或補充時，紙本病歷須在增刪處簽名或蓋章並註明年月日，刪改部分以畫線去除而保留原記載；電子病歷須使增刪前後明顯可辨，並保留使用者、日期與完整操作紀錄。事後補充宜明確標示、使用實際補充日期並說明理由，不得做成像原診療時已記載。接著確認屬民事、刑事或行政程序。符合醫療事故預防及爭議處理法的民事醫療爭議，起訴前應先向地方醫療爭議調解會申請調解；逕行起訴者，第一審法院應移付調解並於調解期間停止訴訟。刑事醫療爭議在偵查或審理中，除法定例外外，檢察官或法院應移付調解並停止程序。主管機關調查則依函文法源、程序身分、要求與期限回覆。調解委員的勸導，以及當事人在調解中的遺憾、道歉、不利陳述或讓步，未經全體醫療爭議當事人同意，不得作為本案訴訟證據、裁判或相關行政處分的基礎；原本已存在的病歷、影像，不會只因在調解中提出就取得同樣保護。應訊、回函或出席前，先與院方窗口及律師共同確認身分、資料與回應。',
          en: 'First record the service date, reference number, requested action and deadline. Notify the appropriate supervisor and medical-affairs, legal or risk-management unit, and notify any liability insurer as the policy requires. Using institution-authorised methods, preserve the record as it existed when notice arrived: charts, nursing records, consent forms, orders, tests and imaging, rosters, relevant work communications, and electronic access and amendment trails. A PDF export alone is not enough, and patient data should not be removed from authorised systems. Do not delete, overwrite, obliterate or back-date an original entry. A paper-record correction must be signed or sealed and dated at the amendment, with deleted text struck through but still legible; an electronic record must keep the old and new entries distinguishable and retain the user, date and complete audit history. A later addition should be identified as such, use its real entry date and explain why it was added. Next identify whether the matter is civil, criminal or administrative. A qualifying civil medical dispute must first go to the local medical-dispute mediation committee; if suit is filed first, the court must refer it and stay the action during mediation. In a criminal medical-dispute case, the prosecutor or court must, subject to statutory exceptions, refer the case and suspend the investigation or trial. A regulatory inquiry follows the legal basis, capacity, request and deadline in its notice. Without all parties\' consent, a mediator\'s exhortations and a party\'s regret, apology, adverse statement or concession in mediation may not support evidence or judgment in the case or a related administrative disposition. Pre-existing charts and imaging do not gain that protection merely because they were submitted in mediation. Before responding or appearing, review your procedural capacity, the material and the proposed response with the institution and counsel.',
        },
      },
      {
        q: {
          zh: '健保費用被核減，或收到停約處分，還有救濟機會嗎？',
          en: 'My NHI reimbursement was cut, or my contract suspended. Is there any remedy?',
        },
        a: {
          zh: '有，但要按函文的每一項主文區分「醫療費用審查核減」、「特約管理處置」或「已核付費用追扣」，同一函文可能分走不同途徑。單純醫療費用核減，應自通知到達日起 60 日內向健保署申復；仍不服者，自申復核定通知送達次日起 60 日內申請爭議審議；審定仍不服，向行政法院提起公法上給付訴訟，不經訴願。停約、終止特約、十倍扣減等特約管理處置，可在收到通知後 30 日內書面申請一次複核；複核是選擇性的，若不申請，仍須自原核定通知送達次日起 60 日內申請爭議審議。申請複核者，則自核復通知送達次日起 60 日內申請爭議審議；審定仍不服，應自審定書送達次日起 30 日內向衛福部提起訴願，訴願不利後再於決定書送達後 2 個月的不變期間內提起撤銷訴訟。「追扣」須看法律性質：追回原核付醫療費用通常走給付訴訟，停約、終約或十倍扣減則走訴願及撤銷訴訟。救濟原則上不自動停止執行，必要時應另行申請暫緩或停止執行。收到函文後立即保存函文、信封及送達證明，逐項核對法源、救濟教示與最短期限，再整理病歷、醫令、申報、訪查資料及抽樣回推計算。',
          en: 'Yes, but classify each operative part of the NHIA letter as a medical-fee review reduction, a contract-management measure, or recovery of an amount already paid; one letter may require different remedy routes. For an ordinary fee reduction, seek NHIA re-examination within 60 days after receipt. If unsuccessful, apply for dispute adjudication within 60 days beginning the day after service of the re-examination decision. A further challenge is a public-law action for payment in the administrative court, without an administrative appeal. For suspension, termination, a tenfold deduction or another contract-management measure, one optional written reconsideration may be requested within 30 days. If it is skipped, dispute adjudication must still be sought within 60 days beginning the day after service of the original decision; if it is used, that 60-day period runs from service of the reconsideration decision. After an adverse dispute decision, file an administrative appeal with the MOHW within 30 days, then any revocation action within the non-extendable two-month period after service of the appeal decision. A clawback of the original medical fees generally proceeds through an action for payment, while suspension, termination or a tenfold deduction proceeds through administrative appeal and revocation litigation. Review does not ordinarily stay enforcement automatically, so a separate stay may be needed. Preserve the letter, envelope and proof of service; match each operative paragraph to its legal basis and shortest deadline before reviewing charts, orders, claims, inspection data and sampling calculations.',
        },
      },
      {
        q: {
          zh: '我們是營養品業者，產品文案怎樣會踩到「醫療效能」的紅線？',
          en: 'We sell nutrition products. When does our marketing copy cross the "medical efficacy" line?',
        },
        a: {
          zh: '食品標示、宣傳或廣告不得不實、誇張、易生誤解，也不得宣稱醫療效能。主管機關會綜合品名、文字、圖案、影像、聲音、前後文、案例分享、暗示、連結與投放情境判斷，不是只看一句話。直接或間接使消費者認為產品能預防、改善、減輕、診斷或治療疾病、症候群或症狀，能降低與致病有關的體內成分，或具有中藥材效能，都有踩線風險。「改善」本身不當然違法，仍要看改善對象與整體訊息；一般食品的營養或生理功能詞句須符合認定準則並與產品本質相符，健康食品則不得超出核准保健功效。代言、前後對照、社群貼文、留言、見證、衛教內容或導購連結，也可能構成廣告。特定疾病配方食品須完成查驗登記，依規定標示適用對象、使用方法、用量及警語，廣告不得超出法定標示內容；嬰兒與較大嬰兒配方食品原則上不得向消費者廣告，且禁止樣品、贈品、折價券等法定促銷方式。違反第 28 條第 1 項可罰 4 萬至 400 萬元，宣稱醫療效能可罰 60 萬至 500 萬元；違法廣告可按次處罰至停止刊播，重大者還可能被命停止販賣、供應或陳列並刊播更正廣告。產品標示違規或違反醫療效能禁令時，依第 52 條另可能涉及限期回收改正或沒入銷毀。上檔前應把素材、落地頁、連結與投放情境一起審查。',
          en: 'Food labels, promotions and advertisements must not be false, exaggerated or misleading, and foods may not claim medical efficacy. Regulators assess the overall message conveyed by names, copy, graphics, images, audio, context, stories, implications, links and placement—not one sentence in isolation. A direct or indirect suggestion that a product can prevent, improve, alleviate, diagnose or treat a disease, syndrome or symptom, reduce a bodily constituent associated with disease, or provide the efficacy attributed to a Chinese medicinal material creates risk. The word "improves" is not decisive by itself; the object and overall message matter. Claims for ordinary foods must fit the permitted nutritional or physiological statements and the product itself, while approved health foods may not exceed their approved health-care effects. Endorsements, before-and-after comparisons, posts, comments, testimonials, educational content and shopping links may all be advertising. Foods for special medical purposes require registration and prescribed labelling of intended users, directions, dosage and warnings; their advertising may not exceed the legally required label content. Consumer advertising of infant and follow-up formula is generally prohibited, as are specified promotions such as samples, gifts and discount vouchers. Article 28(1) violations carry fines of NT$40,000 to NT$4 million, and medical-efficacy claims NT$600,000 to NT$5 million. Advertising fines may repeat until publication stops, with additional orders in serious cases. Label or medical-efficacy violations may also trigger recall and correction or confiscation and destruction under Article 52. Review the creative, landing page, links and placement together before launch.',
        },
      },
      {
        q: {
          zh: '臨床試驗發生不良事件，廠商與醫院的責任怎麼分？',
          en: 'An adverse event occurred in our clinical trial. How is liability divided between sponsor and site?',
        },
        a: {
          zh: '先確認廠商是試驗委託者（sponsor）還是受託研究機構（CRO），並區分「不良事件」與「試驗相關傷害」。GCP 所稱不良事件不要求與試驗藥品有因果關係，所以事件發生會啟動評估、紀錄及必要通報，卻不當然成立賠償責任。若廠商是委託者，GCP 第 47 條要求其就主持人或試驗機構因試驗所生的賠償責任負責，或投保責任保險；主持人或機構的醫療疏失所致者除外。這項除外不是醫院免責：醫療機構仍負醫療注意義務，主持人與機構也須依核准計畫安全執行並為試驗相關不良反應提供充分照護。通報依角色及事件類型分工：主持人對嚴重不良事件原則上應立即通知委託者，並就未預期嚴重藥品不良反應通知人體試驗委員會；委託者再依法向主管機關通報及持續評估安全性。受試者同意書須說明損害補償或保險機制，不得要求受試者放棄法定權利，或免除主持人、機構、委託者及其代理商責任；試驗契約與保單雖可分配各方內部的抗辯、追償、費用及承保範圍，不能對抗受試者的法定權利。個案仍須依因果關係、醫療疏失、各方義務、契約及保單判斷，不能只因出現不良事件就定責。',
          en: 'First identify whether the company is the sponsor or a contract research organization (CRO), and separate an adverse event from a trial-related injury. Under Taiwan GCP, an adverse event need not be causally related to the investigational product. It triggers assessment, documentation and applicable reporting, but does not itself establish liability. Article 47 requires a sponsor to indemnify the investigator or institution against claims arising from the trial or provide liability insurance, except to the extent a claim arises from the investigator\'s or institution\'s medical negligence. That exception does not release the hospital: it still owes the required standard of medical care, and the investigator and institution must safely follow the approved protocol and provide adequate care for trial-related adverse events. Reporting depends on actor and event type. The investigator generally reports a serious adverse event immediately to the sponsor and an unexpected serious adverse drug reaction to the IRB; the sponsor then reports qualifying reactions to the authority and continues safety evaluation. The consent form must explain compensation or insurance and may not waive the subject\'s legal rights or release the investigator, institution, sponsor or their agents. Trial agreements and policies may allocate defence, recovery, costs and coverage internally, but cannot prejudice the subject\'s statutory rights. Allocation ultimately depends on causation, medical negligence, each party\'s duties, the agreement and the policy—not merely on the occurrence of an adverse event.',
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
          en: 'Do all divorces in Taiwan require mediation, or can I file a divorce lawsuit directly?',
        },
        a: {
          zh: '不一定。雙方同意時可以辦理兩願離婚，不必先進法院調解；但須作成書面、由二人以上證人簽名，並向戶政機關辦理登記。一方不同意而請求裁判離婚時，原則上須先經法院調解。可以直接遞交起訴狀，但法律上通常視為調解聲請；需公示送達或向外國送達者例外。調解不成立後，法院即進入裁判程序，並保留自原起訴時起的程序效力。離婚、財產、扶養及親權事項可視關聯一併處理，但未成年子女的安排不得損害其利益。法院調解離婚須由雙方本人表示同意；調解成立並記載於筆錄後，與確定裁判有同一效力。如有人身、子女或財產的急迫風險，不必等調解結束：家暴保護令可另行聲請；已提出親權、扶養等家事非訟本案者，可聲請暫時處分；財產保全則可依民事訴訟法聲請假扣押或假處分。',
          en: 'Not always. If both spouses agree, they may divorce by mutual consent without court mediation, but the agreement must be in writing, signed by at least two witnesses, and registered with the household registration authority. If one spouse seeks a judicial divorce, court mediation is generally required first. A divorce complaint may be filed immediately, but it will ordinarily be treated by law as a mediation application; service by public notice or abroad is an exception. If mediation fails, adjudication follows with procedural effect preserved from the original filing. Related property, support and custody issues may be handled together, but arrangements affecting a minor must protect the child\'s interests. A mediated divorce requires both spouses\' personal consent and, once recorded, has the same effect as a final decision. Urgent protection need not await mediation: a domestic-violence protection order may be sought separately; temporary measures may be requested once a custody, support or other family non-contentious case is pending; and provisional attachment or injunction may preserve assets.',
        },
      },
      {
        q: {
          zh: '對方把小孩帶出國不讓我見，怎麼辦？',
          en: 'The other parent took our child abroad and will not let me see them. What can I do?',
        },
        a: {
          zh: '要立即處理。孩子仍在台灣且有被帶離的急迫風險時，可併同親權、交付子女或其他親子非訟本案，聲請法院暫時處分，禁止關係人或特定人攜帶孩子出境；急迫時可向孩子所在地法院聲請。孩子已在國外時，應立即評估台灣法院是否有管轄，以及是否聲請交付子女、酌定或改定親權及會面交往；同時由孩子所在地的合格律師依當地法處理返還、親權、會面交往，或承認及執行台灣裁判。若孩子原慣居台灣，因台灣不是 1980 年海牙國際兒童誘拐公約的締約方，不能透過台灣的公約中央機關啟動快速返還程序。可採途徑取決於孩子原慣居地、帶離或滯留是否侵害親權、既有裁判及所在地法律。駐外館處可提供當地律師等聯絡資訊，但不能介入外國司法或代為起訴。請儘快保存護照與出入境資料、親權或會面交往裁判、同意或反對出國的訊息，以及孩子所在地等證據。',
          en: 'Act immediately. If the child is still in Taiwan and removal is imminent, a provisional order may be sought—together with a parental-responsibility, child-delivery or other parent-child non-contentious case—to prohibit a party or specified person from taking the child abroad; in an emergency, apply where the child is located. If the child is already abroad, counsel should assess Taiwan jurisdiction and possible delivery, parental-responsibility or contact orders, while qualified local counsel pursues the remedy available there, including return, custody, contact, or recognition and enforcement of a Taiwan order. If the child was habitually resident in Taiwan, the 1980 Hague Child Abduction Convention provides no Taiwan Central Authority fast-return process because Taiwan is not a Contracting Party. The route depends on habitual residence, whether removal or retention breached custody rights, existing orders and local law. Taiwan overseas missions may provide local-lawyer contacts but cannot intervene in foreign courts. Preserve passports and travel records, custody or contact orders, consent or objection messages, and evidence of the child\'s location.',
        },
      },
      {
        q: {
          zh: '夫妻剩餘財產分配可以拿多少？多久內要提出？',
          en: 'How much can I claim in marital property division, and is there a deadline?',
        },
        a: {
          zh: '以下以夫妻適用法定財產制為前提；若另有夫妻財產制契約，算法可能不同。法定財產制關係消滅時，先以雙方各自現存的婚後財產扣除婚姻關係存續中所負債務；扣除後再比較剩餘差額，原則上由較少的一方請求差額的一半。婚前財產本身原則不列入，但婚姻中所生孳息視為婚後財產；繼承、其他無償取得的財產及慰撫金也不列入。若一方對婚姻生活無貢獻或協力，或有其他情事致平均分配有失公平，法院可依家事勞動、子女照顧、家庭付出、共同生活與分居期間、財產取得時間及經濟能力等因素調整或免除分配額。請求權須自知道有剩餘財產差額起二年內行使，且最遲不得超過法定財產制關係消滅後五年。若懷疑脫產，應儘速依個案評估撤銷處分、追加計算、聲請改用分別財產制或假扣押等措施。',
          en: 'This assumes Taiwan\'s statutory matrimonial property regime; a marital property agreement may produce a different result. When the regime ends, each spouse\'s existing property acquired during marriage is reduced by debts incurred during marriage. The spouse with less may generally claim half the difference between the remainders. Premarital property is generally excluded, although fruits produced during marriage are marital property; inheritances, other gratuitous acquisitions and compensation for non-pecuniary harm are also excluded. If one spouse did not contribute or cooperate in married life, or other circumstances make equal division unfair, the court may adjust or eliminate the share after considering housework, childcare, family contributions, periods together and apart, timing of acquisition and economic capacity. The claim must be exercised within two years after learning of the difference and, in all events, within five years after the regime ends. Suspected dissipation calls for prompt advice on setting aside transfers, adding disposed assets back, changing to separation of property or seeking provisional attachment.',
        },
      },
      {
        q: {
          zh: '被家暴了，聲請保護令要準備什麼？',
          en: 'What do I need to apply for a domestic violence protection order?',
        },
        a: {
          zh: '若有立即危險，先撥 110 或 113 並離開現場。被害人可自行向其住居所地、相對人住居所地或家暴發生地的地方法院（設有少年及家事法院者為該法院）書面聲請通常或暫時保護令，初次聲請不必委任律師；被害人為未成年人、身心障礙者或因故難以委任代理人時，法定代理人或三親等內血親、姻親也可聲請。依個案準備聲請狀、雙方戶籍謄本，以及驗傷診斷、照片、錄音及譯文、錄影、訊息、報案資料、證人聯絡方式等；請求遷出或交付物品時，再附租約、權狀、行照等文件。有受家暴的急迫危險時，緊急保護令只能由檢察官、警察機關或地方主管機關聲請，被害人可報警或請家暴防治中心協助。聲請、撤銷、變更、延長及抗告免徵裁判費，但影印、鑑定、證人日費及旅費等未必免費。法院可命相對人遷出、遠離，禁止暴力、騷擾、接觸、跟蹤或其他非必要聯絡，也可暫定未成年子女權利義務並命交付子女。',
          en: 'If you are in immediate danger, call 110 or 113 and move to safety. A victim may file a written petition for an ordinary or temporary order with the court for the victim\'s residence, the respondent\'s residence or the place of abuse; no lawyer is required for the initial application. For a minor, a person with a disability or someone unable to appoint an agent, a legal representative or a relative within the third degree may also apply. Depending on the case, prepare the petition, household-registration transcripts, medical or injury certificates, photographs, recordings with transcripts, video, messages, police records, witness details, and any lease, title or registration documents relevant to the requested relief. An emergency order may be sought only by a prosecutor, the police or a local competent authority, so contact police or the domestic-violence prevention centre. These protection-order proceedings are exempt from court fees, but copying, expert and witness expenses may remain. An order may require move-out or stay-away measures; prohibit violence, harassment, contact, stalking or unnecessary communication; and temporarily allocate parental rights and duties or require delivery of a child.',
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
        zh: '本所主持律師楊佳陵現任勞動部第 5 屆勞資爭議仲裁委員，並兼任靜宜大學法律學系助理教授。憑藉擔任仲裁委員之裁判者視角，楊律師能精準洞悉勞資雙方於程序中之攻防優劣；在代理案件時，此一經驗使其能跳脫單方盲點，準確評估訴訟爭點並完善舉證結構，為當事人擬定最有利的訴訟策略。',
        en: "The firm's principal, Dr. Chia-Ling Yang, currently serves as a labor dispute arbitrator appointed by the Ministry of Labor for its fifth term, and holds a concurrent appointment as assistant professor in the Department of Law at Providence University. Sitting as an arbitrator affords her the adjudicator's vantage point: she sees precisely which arguments and which evidence carry weight as a matter proceeds, and which do not. Acting for a client, that experience allows her to step outside a single party's blind spots, assess the points genuinely in issue, complete the evidentiary structure, and set the litigation strategy that best serves the client.",
      },
      {
        zh: '此外，楊律師亦為台北律師職業工會創會理事長。從工會之發起、籌備、登記至實務運作，均親力親為。這份從無到有的實戰經驗，使其對勞方於爭議中所面臨的實務困境，有著超越卷證的深刻體悟，從而能提供最具實效之法律解方。',
        en: "Dr. Yang is also the founding chairperson of the Taipei Lawyers' Professional Union, having taken personal charge of its founding, organisation, registration and day-to-day operation. Building a union from nothing has given her an understanding of the practical difficulties employees face in a dispute that goes well beyond the case file, and with it the ability to offer remedies that work in practice.",
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
          zh: '有可能。關鍵是公司的終止是否無效，例如沒有勞動基準法第 11、12 條等法定事由；單純未給足預告期，通常只產生預告工資請求，不會使原本合法的終止無效。終止無效時，僱傭關係仍存在，可以提起確認僱傭關係存在之訴，並請求雇主就拒絕受領勞務期間給付工資。但工資不是當然全額補發：宜立即書面表明不接受解僱、願意繼續工作並要求返工，以證明雇主受領遲延；在他處所得、節省費用及故意不取得的收入可能扣除，各期工資原則上另有五年時效。訴訟中如能釋明有相當勝訴可能，且雇主繼續僱用非顯有重大困難，可依勞動事件法第 49 條聲請暫時繼續僱用並給付工資。若不想回任，另一條路是依勞基法第 14 條第 1 項第 6 款自行終止並請求資遣費；原則上須在知悉解僱事實或損害結果後 30 日內終止。兩條路的法律前提不同。決定前不要簽自願離職或和解文件，並保留解僱通知及願意繼續工作的書面證據。',
          en: 'Possibly. The key is whether the termination was legally ineffective—for example, because no statutory ground under Articles 11 or 12 of the Labor Standards Act applied. A notice-period violation alone generally creates a claim for pay in lieu of notice; it does not invalidate an otherwise lawful termination. If termination was ineffective, the employment relationship continued, and you may seek a declaration and wages for the period in which the employer refused your services. Back pay is not automatic: promptly state in writing that you reject the dismissal, remain ready to work and request reinstatement. Earnings elsewhere, saved expenses and income deliberately forgone may be deducted, and each wage instalment generally has a five-year limitation period. During suit, Article 49 of the Labor Incident Act permits an interim order for continued employment and wages if there is a reasonable prospect of success and no obvious serious difficulty for the employer. If you do not want to return, a different route may be termination under Article 14(1)(6) with severance, generally exercised within 30 days after learning of the dismissal facts or resulting harm. These routes rest on different legal positions. Do not sign a voluntary-resignation or settlement document before deciding.',
        },
      },
      {
        q: {
          zh: '加班費可以追討幾年？需要什麼證據？',
          en: 'How many years of overtime pay can I claim, and what evidence do I need?',
        },
        a: {
          zh: '原則上是五年，而且每一期加班費都從該期約定或法定給付日起分別起算；時效完成後，雇主可以拒絕給付，所以不要等到離職才處理。出勤紀錄是核心證據之一：雇主依法須置備、逐日記載到分鐘並保存五年，勞工申請副本或影本時不得拒絕。訴訟中，雇主對依法應備置的文書有提出義務；無正當理由不提出時，法院得處罰鍰、命強制處分，並可認定該文書應證明的事實為真實。出勤紀錄所載時間推定為勞工經雇主同意執行職務，但雇主仍可反證。另請保存薪資單、加班申請、班表，以及主管交辦或要求下班後工作的電子郵件、LINE 或其他通訊、工作成果交付紀錄，用來證明實際工時、雇主知情或交辦及未付金額。',
          en: 'In principle, five years. Each overtime instalment has its own period running from its agreed or legally required payday; once it expires, the employer may refuse payment. Attendance records are a key form of evidence: employers must record attendance to the minute each day, retain records for five years and provide a requested copy. In court, an employer must produce documents it is legally required to keep; unjustified non-production may lead to a fine, compulsory measures and the relevant fact being treated as true. Recorded attendance is presumed to be time spent performing duties with the employer\'s consent, although the employer may rebut it. Also keep payslips, overtime requests, rosters, emails or LINE/other messages assigning or requiring after-hours work, and records of completed or delivered work. These help prove actual hours, the employer\'s knowledge or direction and the unpaid amount.',
        },
      },
      {
        q: {
          zh: '和公司有勞資糾紛，要先去勞動局調解嗎？',
          en: 'Do I have to go through labor bureau mediation before suing my employer?',
        },
        a: {
          zh: '不一定。向勞務提供地的地方勞工行政主管機關申請行政勞資爭議調解，不是一般民事勞動訴訟的強制前置程序，而且申請免費；調解期間，雇主不得因該爭議終止勞動契約或為其他不利行為。若直接向法院起訴，依勞動事件法原則上須先經法院勞動調解，法院會把起訴視為調解聲請；但事件已經其他法定調解機關調解不成立、屬反訴、通知須公示送達或向國外送達，或因性別平等工作法第 12 條所生爭議者，不強制再經法院勞動調解。法院勞動調解也非一律免費：非財產權事件及標的未滿 10 萬元者免徵，其餘依標的徵收 1,000 至 5,000 元。另須留意時效：聲請調解原則上可中斷時效，但撤回、駁回或調解不成立時，原則上視為不中斷；法院勞動調解不成立而依法續行訴訟者，則視為自聲請調解時已起訴。接近期限時，不要只靠行政調解延後起訴。',
          en: 'Not necessarily. Administrative labor-dispute mediation before the local labor authority where the employee worked is not a mandatory prerequisite to an ordinary civil labor claim, and it is free. While it is pending, the employer may not terminate or otherwise disadvantage the worker because of that dispute. If you file directly in court, the Labor Incident Act generally requires court labor mediation first and treats the complaint as a mediation motion. Court mediation is not mandatory where another statutory mediation body has already tried and failed, for a counterclaim, where notice must be served publicly or abroad, or for a dispute under Article 12 of the Act of Gender Equality in Employment. Court labor mediation is not always free: non-property claims and property claims below NT$100,000 are exempt, while others carry a NT$1,000–5,000 fee. Limitation also matters: mediation generally interrupts prescription, but a withdrawn, rejected or unsuccessful mediation is generally treated as no interruption. If failed court labor mediation lawfully continues into litigation, the action is deemed filed on the mediation date. Do not rely on administrative mediation alone when a deadline is close.',
        },
      },
      {
        q: {
          zh: '簽了競業禁止條款，離職真的不能去同業嗎？',
          en: 'I signed a non-compete — am I really barred from joining a competitor?',
        },
        a: {
          zh: '不一定。施行細則要求以書面詳載限制範圍及補償，由勞雇雙方簽章並各執一份；條款有效還須同時符合四項要件：雇主有應受保護的正當營業利益；你的職位能接觸或使用其營業秘密；期間、區域、職業活動及就業對象未逾合理範圍；雇主對不競業造成的損失給予合理補償。期間不得超過受保護秘密或技術資訊的生命週期，最長二年；約定超過二年者縮短為二年。區域限於原雇主實際營業範圍，職業活動及就業對象須具體且與原工作、原雇主業務相同或類似並有競爭關係。補償不得以在職工資或其他給付充抵；每月不得低於離職時一個月平均工資的 50%，並須足以維持生活、與限制所生損失相當，離職後一次預付或按月給付。四個法定要件少一項，條款無效；即使有效，違約金過高時法院仍可酌減。收到存證信函或求償時，先以契約及補償紀錄讓律師評估。',
          en: 'Not necessarily. The Enforcement Rules call for a written agreement stating the restrictions and compensation in detail, signed and retained by both sides. Validity also requires all four statutory conditions: a legitimate business interest; a position enabling access to or use of trade secrets; reasonable limits on duration, territory, occupational activity and prospective employers; and reasonable compensation for the restriction. The term cannot exceed the protected secret or technology\'s life cycle and is capped at two years; an excess term is reduced to two. Territory is limited to the employer\'s actual business area, and activities and prospective employers must be specific, similar to the former work or business and competitive. Pay received during employment cannot count as compensation. Monthly compensation must be at least 50% of one month\'s average wage at departure, sufficient for living needs and proportionate to the loss, paid after departure in advance or monthly. If any statutory condition is missing, the clause is void. Even a valid clause\'s excessive penalty may be reduced by the court. Have counsel review the agreement and payment record before conceding liability.',
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
          zh: '不一定。先整理借據、契約、匯款及對話，確認到期日與消滅時效。存證信函可催告並保存證據，但不是執行名義；若以催告中斷時效，原則上仍須在六個月內起訴，或聲請支付命令、調解等與起訴有同一效力的程序。對一定金額的請求，能提出釋明資料且可在國內送達時，可考慮支付命令；債務人於送達後二十日內不必附理由即可異議，異議範圍內命令即失效，案件轉為調解或訴訟。未合法異議時，債權人才可持支付命令及確定證明書聲請執行；它只有執行名義效力，不等同確定判決。法院調解成立，或公所調解成立並經法院核定，也可強制執行。一般金錢請求十萬元以下通常走小額程序，財產權訴訟五十萬元以下走簡易程序，較高額原則上走通常程序，但仍須看債權性質。有具體脫產風險時可聲請假扣押，但須釋明債權及日後不能或甚難執行之虞，法院也可能命供擔保。時效依債權而異：一般原則十五年，利息與定期給付等可能五年，部分貨款或報酬可能二年。持有效本票原本者，另可評估向發票人聲請本票裁定。取得執行名義後可請法院調查財產；目前無財產時也可能取得債權憑證，日後再執行。',
          en: 'Not necessarily. First collect the IOU, contract, transfer records and messages, and check maturity and limitation. A content-certified demand preserves evidence but is not an enforcement title; if relying on it to interrupt limitation, follow within six months with a suit or an equivalent payment-order or mediation application. For a fixed sum supported by prima facie material and capable of domestic service, consider a payment order. The debtor may object within twenty days without reasons; the order then loses effect to that extent and the matter proceeds as mediation or litigation. Without a valid objection, enforcement requires the order plus a certificate of finality. It is an enforcement title, not the equivalent of a final judgment. Court mediation, or local-committee mediation approved by the court, is also enforceable. Monetary claims up to NT$100,000 normally use small claims; property claims up to NT$500,000 use summary procedure; higher claims generally use ordinary procedure, subject to claim type. Provisional attachment requires a showing of the claim and risk that later enforcement will be impossible or seriously difficult, and security may be ordered. Limitation varies: the general period is fifteen years, but some interest or periodic payments use five years and some prices or fees two. A valid original promissory note may support a separate ruling against its maker. Even if no assets exist now, an enforcement title may lead to court asset inquiries and a creditor\'s certificate for later enforcement.',
        },
      },
      {
        q: {
          zh: '父母過世沒有留遺囑，遺產怎麼分？',
          en: 'My parents died without a will — how is the estate divided?',
        },
        a: {
          zh: '每一位父母的遺產都要依其死亡時點分開計算；先死亡一方的配偶若仍在世，也是繼承人。沒有遺囑時，配偶與最先存在的一個順位共同繼承：一、直系血親卑親屬（親等近者優先）；二、父母；三、兄弟姊妹；四、祖父母。同順位原則平均。配偶與第一順位共同繼承時，與其他繼承人平均；與父母或兄弟姊妹共同繼承時取得二分之一；與祖父母共同繼承時取得三分之二；上述親屬都沒有時取得全部。第一順位繼承人在被繼承人死亡前已死亡或喪失繼承權時，其直系血親卑親屬代位承受應繼分。多人繼承時，分割前對遺產全部為公同共有；應繼分只是分配基準，不表示各人已分別擁有每項遺產。全體可協議不同分法，談不成則調解或訴請裁判分割。繼承債務原則上只以所得遺產為限清償，但隱匿遺產、重大虛偽清冊或詐害債權人處分可能喪失保護；債務不明時，宜在知悉得繼承起三個月內陳報遺產清冊。可分遺產還要先確認債務及生存配偶的剩餘財產差額請求。遺產稅原則上在死亡日起六個月內申報；未繳清且未取得適用證明前，不得分割或移轉。生前贈與是否歸扣、代墊款能否由遺產支付，須依個別法定要件及證據判斷。',
          en: 'Each parent\'s estate is calculated separately at that parent\'s death; a surviving spouse of the first parent is also an heir. Without a will, the spouse inherits with the first available class: (1) lineal descendants, nearest degree first; (2) parents; (3) siblings; or (4) grandparents. Members of a class generally share equally. With descendants, the spouse takes the same share as each other heir; with parents or siblings, one-half; with grandparents, two-thirds; and if none exists, the whole estate. If a first-class heir died or lost inheritance rights before the decedent, that heir\'s descendants take by representation. Multiple heirs hold the entire estate in common until partition; a statutory share is a distribution measure, not separate title to every asset. All may agree on another allocation, or seek mediation or an estate-partition judgment. Debts are generally payable only up to the inherited estate, but concealment, a materially false inventory or disposal to prejudice creditors can forfeit that protection. If debts are uncertain, consider filing an inventory within three months after learning of the inheritance. The distributable estate may also depend on debts and a surviving spouse\'s marital-property claim. Estate tax is generally filed within six months after death; partition or transfer awaits payment or an applicable certificate. Lifetime-gift adjustment and advanced expenses require case-specific legal grounds and evidence.',
        },
      },
      {
        q: {
          zh: '拋棄繼承要在多久之內辦？要準備什麼文件？',
          en: 'What is the deadline for renouncing an inheritance, and what documents are needed?',
        },
        a: {
          zh: '應自知悉自己「得繼承」時起三個月內，以書面向繼承開始時被繼承人住所地法院聲明；因前順位繼承人均拋棄才輪到自己時，期間可能從知悉自己因此取得繼承資格時起算。常見附件包括聲請狀、被繼承人的除戶戶籍謄本或死亡證明、拋棄人的戶籍謄本、繼承系統表，以及已書面通知因拋棄而應為繼承者的證明；不能通知者除外。印鑑證明、印鑑章或其他資料是否需要，應依受理法院要求確認。未成年人通常由父母共同以法定代理人身分辦理；若代理人與孩子利益相反，須處理法院選任特別代理人的程序。未拋棄時，繼承人原則上僅以所得遺產清償被繼承人的債務；拋棄則溯及繼承開始失去繼承人地位，但已在管理遺產者，在他人接手前仍有暫時管理義務。',
          en: 'File a written declaration within three months after learning that you are entitled to inherit, with the court for the deceased\'s domicile when succession opened. If you become an heir only because all prior-ranking heirs renounced, the period may begin when you learn the succession has passed to you. Common attachments include the declaration, the deceased\'s deregistered household-registration transcript or death certificate, your transcript, an heirship chart and proof of written notice to anyone who becomes an heir because of the renunciation; notice is excused if impossible. Registered-seal or other requirements vary by court. A minor\'s parents generally act jointly; a conflict of interest may require a court-appointed special representative. An heir who does not renounce is generally liable for debts only up to the inherited estate. Renunciation operates retroactively from the opening of succession, although anyone already managing estate property must safeguard it until another heir or an estate administrator takes over.',
        },
      },
      {
        q: {
          zh: '車禍可以求償哪些項目？多久之內要提出？',
          en: 'What can I claim after a traffic accident, and is there a time limit?',
        },
        a: {
          zh: '依傷勢及證據，可請求必要的醫療、復健、看護及就醫交通費，不能工作期間的實際收入損失、勞動能力減損、增加生活需要及精神慰撫金；財物損害可請求必要修復費或減少價值，但以新零件換舊零件時實務上通常計算折舊。死亡案件另可能包括醫療、殯葬、扶養利益及父母、子女、配偶的慰撫金。各項都須證明與事故有因果關係；被害人與有過失時，賠償可能減輕。對肇事者的侵權請求，原則上自知悉損害及賠償義務人起二年，且自侵權行為起逾十年亦罹於時效。符合資格者另可不問肇責向保險人請求強制險的人身給付，但不含車損；其期限也是知悉損害及保險人起二年、事故起十年。兩者雖是不同請求權，部分時效效果在保險金額內連動，已領強制險原則上也從損害賠償扣除，不能假定申請一項就保全全部權利。初判表於事故三十日後可申請；當事人自行申請事故鑑定原則上須在六個月內。兩者都不是求償前提，不要因等待而錯過期限。和解書應寫清付款人、金額、期限、是否包含強制險及權利保留或拋棄範圍；傷勢未明時，不宜概括拋棄其餘請求。過失傷害告訴另須自知悉犯人起六個月內明確提出。',
          en: 'Depending on injury and proof, claims may include necessary medical, rehabilitation, nursing and treatment travel costs; actual lost income, reduced earning capacity, increased living needs and pain and suffering. Property claims include necessary repair or diminished value, with depreciation commonly applied to new parts fitted to an older vehicle. Fatal cases may add medical and funeral expenses, lost support and consolation damages for parents, children and spouse. Every item needs causation and proof, and contributory fault may reduce recovery. A tort claim generally has a two-year period from knowledge of the damage and liable person, with a ten-year outside limit from the tort. An eligible victim may separately claim no-fault compulsory-insurance benefits for personal injury, disability or death, but not vehicle damage; that claim has a two-year knowledge period and ten-year outside limit. Some limitation effects are linked within the insured amount, and benefits received are generally deducted from damages, so filing one claim should not be assumed to preserve all rights. The preliminary police report is available after 30 days; a party-initiated assessment generally must be requested within six months. Neither is a prerequisite, so do not wait past a deadline. A settlement should specify payer, amount, timing, whether insurance is included and what rights are retained or waived. A negligent-injury criminal complaint has a separate six-month period from learning the offender\'s identity.',
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
          zh: '有機會，但先看註冊公告日。自公告日次日起三個月內，任何人都可以向經濟部智慧財產局提出異議；逾期後，利害關係人仍可依具體的不得註冊事由申請評定。商標法第 58 條所列事由原則上須在公告後五年內提出；只有違反第 30 條第 1 項第 9 款或第 11 款且註冊屬惡意時，才不受五年限制。常見的仿襲搶註依第 30 條第 1 項第 12 款，須證明對方申請的商標與你先使用於同一或類似商品或服務的商標相同或近似，且對方因契約、地緣、業務往來或其他關係知悉其存在，仍意圖仿襲申請並未取得同意；此款在公告滿五年後即不得再申請評定。應儘快保全出貨、廣告、網頁存檔等先使用資料，以及能證明關係、知悉與仿襲意圖的契約和往來信件。異議或評定成立，智慧財產局會撤銷其註冊。',
          en: 'There may be, but first check the publication date. Any person may file an opposition with TIPO within three months beginning the day after publication. After that, an interested party may seek invalidation on an applicable statutory ground. Article 58 grounds generally must be raised before five years have elapsed; only a bad-faith registration under Article 30(1)(9) or (11) escapes that bar. A typical imitation filing under Article 30(1)(12) requires proof that the registered mark is identical or similar to your earlier-used mark for identical or similar goods or services, and that the applicant learned of it through a contractual, geographic, business or other relationship and applied with intent to imitate it without consent. That ground is barred after five years. Preserve dated sales, advertising and web archives proving earlier use, together with contracts and correspondence showing the relationship, knowledge and intent. If opposition or invalidation succeeds, TIPO sets aside the registration.',
        },
      },
      {
        q: {
          zh: '發現離職員工把公司機密帶去競爭對手，可以告嗎？',
          en: 'A former employee took our confidential files to a competitor. Can we sue?',
        },
        a: {
          zh: '可以，但「公司機密」不當然是法律上的營業秘密。公司須指出具體資訊，證明它非同業一般知悉、因秘密性具有實際或潛在經濟價值，並已依資料性質與公司規模落實合理保密措施；保密協議、機密分級、權限與密碼、存取紀錄及離職交還程序都是重要證據。員工未經授權重製、使用、洩漏或受命後拒不刪除時，公司可請求停止、防止侵害、銷燬及賠償；明知來源不法仍收受或使用的競爭對手也可能負責。刑責另須證明不法獲利或損害公司的意圖。一般第 13 條之 1 犯罪須告訴乃論，應自知悉犯人起六個月內提出；意圖在外國、中國大陸、香港或澳門使用者屬第 13 條之 2 加重罪，不在上述告訴乃論範圍。發現異常時，先停止自動刪除並依法保全公司有權控制的設備、備份及雲端日誌，由鑑識人員製作映像、雜湊值及保管紀錄。不要自行登入私人帳號、扣取私人設備或監聽；需要對方控制的證據，可聲請民事證據保全或提出刑事告訴。蒐證仍須遵守個資、隱私、授權及必要範圍；不當蒐證可能另生責任或證據爭議，但不代表所有瑕疵證據一律排除。',
          en: 'Potentially, but information labelled confidential is not automatically a trade secret. The company must identify it and show that it is not generally known in the field, has actual or potential economic value because it is secret, and was protected by reasonable measures actually implemented. NDAs, classification, access controls, logs and exit-return procedures are relevant. Unauthorised reproduction, use, disclosure or refusal to delete may support prevention, destruction and damages; a competitor knowingly receiving or using unlawfully sourced material may also be liable. Criminal liability additionally requires a purpose of illicit gain or harm. An ordinary Article 13-1 offence requires a complaint within six months after learning the offender\'s identity; intended use abroad, in mainland China, Hong Kong or Macao triggers the aggravated Article 13-2 offence outside that complaint-only rule. Suspend automatic deletion and lawfully preserve company-controlled devices, backups and cloud logs, with images, hashes and chain of custody. Do not access private accounts, seize personal devices or intercept communications through self-help. Evidence controlled by the other side may require civil preservation or a criminal complaint. Collection must respect data, privacy, authority and necessity limits; defects can create liability or evidentiary disputes, but do not automatically exclude every item.',
        },
      },
      {
        q: {
          zh: '網路上的圖和文章被盜用，可以要求賠償嗎？',
          en: 'My images and articles were stolen online. Can I claim damages?',
        },
        a: {
          zh: '可以，但不是內容相同就一定侵權。圖片或文章須具獨立創作與最低程度的創意；他人未經同意重製或上傳公開傳輸，且不屬授權或合理使用，才可能構成侵害。著作權人可請求排除或防止侵害，也可通知平台移除；損害賠償須證明行為人有故意或過失。賠償可按實際損害或侵害人所得利益計算；實際損害額不易證明時，可請法院依情節酌定一萬元至一百萬元，故意且情節重大者最高五百萬元。故意侵權還可能涉及刑責；一般網路盜圖、盜文屬告訴乃論，應自有告訴權人知悉犯人時起六個月內提出。先保存原始檔、創作與發布紀錄，以及侵權頁面的完整截圖或下載資料、網址與時間；如擔心頁面被刪除，可請法院公證處或民間公證人公證網頁內容。公證只是固定當時所見頁面，不等於已證明著作權歸屬或侵權成立。',
          en: 'Yes, but identical content does not automatically establish infringement. The image or article must be independently created and possess at least minimal creativity; unauthorised reproduction or uploading by public transmission is potentially infringing only if no licence or fair-use exception applies. An owner may seek removal or prevention and notify the platform. Damages require intent or negligence and may use actual loss or the infringer\'s profit. If actual loss is difficult to prove, the court may award NT$10,000 to NT$1 million, up to NT$5 million where conduct was intentional and serious. Intentional infringement may also attract criminal liability. This kind of online copying is generally prosecuted only upon complaint, filed within six months after the complainant learns the offender\'s identity. Preserve source files, creation and publication records, and a complete capture or download with URL and time. If deletion is likely, consider webpage notarisation by a court or private notary. Notarisation records what appeared then; it does not itself prove ownership or infringement.',
        },
      },
      {
        q: {
          zh: '專利侵權訴訟要在哪個法院打？會不會拖很久？',
          en: 'Which court hears patent infringement cases in Taiwan, and how long do they take?',
        },
        a: {
          zh: '在台灣，新提起的專利侵權民事訴訟，法定原則是由新北市板橋的智慧財產及商業法院專屬管轄；只有書面合意管轄或被告未抗辯管轄而就本案應訴等法定例外，其他法院才可能受理。智商法院的智慧財產法庭審理第一審及第二審：第一審原則由一名法官獨任，第二審由三名法官合議；得上訴第三審者才到最高法院。被告若主張專利有應撤銷原因，民事法院會在該案中自行判斷，不必等待智慧財產局的舉發結果，但不是每案都一定爭執有效性。審理時間無法保證，會受技術複雜度、證據調查、有效性抗辯及上訴影響；完整走過多個審級可能以年計。起訴前應先做侵權比對、有效性及證據評估，跨境爭議再按涉及法域規劃策略。',
          en: 'In Taiwan, a newly filed civil patent infringement action is, as a rule, within the exclusive jurisdiction of the Intellectual Property and Commercial Court in Banqiao, New Taipei City. Another first-instance court may hear it only under statutory exceptions, such as a written jurisdiction agreement or the defendant arguing the merits without objecting. The IPCC hears both first and second instances: ordinarily one judge at first instance and a three-judge panel on second appeal, with any permitted third-instance appeal going to the Supreme Court. A defendant may challenge validity in the infringement action, and the civil court decides that defence without waiting for separate invalidation proceedings, but validity is not disputed in every case. There is no fixed timetable: technical complexity, evidence, validity issues and appeals can extend proceedings, and multiple instances may take years. Assess infringement, validity and evidence before filing, then plan by jurisdiction if the dispute is cross-border.',
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
          zh: '原則上不能直接執行。外國法院的民事確定判決，只要沒有民事訴訟法第 402 條所列事由，原則上不必另經承認裁判，即可在台灣發生效力；但要查封、扣押或拍賣在台財產，仍須依強制執行法第 4 條之 1 向台灣法院提起許可執行之訴，取得判決後再聲請強制執行。法院主要審查：依台灣法判斷外國法院是否有間接國際管轄權；敗訴被告若未應訴，開始訴訟的通知或命令是否在相當期間內合法送達，或依台灣法協助送達；判決內容或訴訟程序是否違反台灣公共秩序或善良風俗；以及有無相互承認。法院原則上不重審案件實體。文件通常包括外國判決正本或正式謄本、證明已確定的資料、送達或應訴資料及中文譯本；是否須經駐外館處驗證或以其他方式證明真實，應依文件來源及法院要求確認。',
          en: 'As a general rule, no. A foreign civil judgment that is final and binding is recognized in Taiwan without a separate recognition judgment if none of Article 402\'s grounds applies. Enforcement is different: to attach, seize or sell assets in Taiwan, the creditor must obtain a Taiwan judgment permitting enforcement under Article 4-1 of the Compulsory Enforcement Act, then apply for execution. The court examines indirect international jurisdiction under Taiwan law; if the losing defendant did not appear, timely lawful service of the notice or summons in that country or through Taiwan judicial assistance; whether the judgment or proceedings violate Taiwan public policy or morals; and mutual recognition. The merits are generally not retried. Usually prepare an original or official judgment copy, proof it is final, service or appearance records and a Chinese translation. Authentication by a Taiwan overseas mission or other proof depends on the documents and court directions.',
        },
      },
      {
        q: {
          zh: '合約寫要去新加坡仲裁，我可以改在台灣打官司嗎？',
          en: 'Our contract says disputes go to arbitration in Singapore. Can I sue in Taiwan instead?',
        },
        a: {
          zh: '通常不能直接改在台灣打本案訴訟。若爭議落在有效且可實行的仲裁條款範圍內，你仍在台灣起訴，對方可在為本案言詞辯論前，依仲裁法第 4 條聲請停止訴訟；符合法定要件時，法院應裁定停止程序，並命你在一定期間內提付仲裁，逾期未提付才會駁回起訴。若仲裁條款明顯不成立或無效、已失效或不能實行，爭議不在條款範圍內，或對方未及時聲請而已為本案言詞辯論，結果可能不同；但除明顯無效外，仲裁管轄爭議原則上由仲裁庭優先判斷。即使本案須在新加坡仲裁，如台灣法院有管轄且符合保全要件，仍可聲請假扣押或假處分。實際處理前應核對仲裁機構、仲裁地、仲裁協議準據法、語言、爭議範圍、時效、保全方式及成本。',
          en: 'Usually not for the merits. If the claim falls within a valid and workable arbitration agreement and you sue in Taiwan, the defendant may apply under Article 4 of the Arbitration Act before oral argument on the merits. If the requirements are met, the court must stay the action and order arbitration within a set period; dismissal follows only if that deadline is missed. The result may differ if the agreement is manifestly nonexistent or invalid, inoperative or incapable of performance, outside the dispute\'s scope, or the defendant has already argued the merits without timely invoking it. Except for manifest invalidity, the tribunal generally has priority to decide jurisdiction. Arbitration does not bar interim court protection: where a Taiwan court has jurisdiction and requirements are met, provisional attachment or an injunction may still be sought. Check the institution, seat, law governing the arbitration agreement, language, scope, limitation, interim relief and costs before acting.',
        },
      },
      {
        q: {
          zh: '國外客戶一直拖欠貨款，跨境要怎麼追？',
          en: 'A foreign customer keeps defaulting on payments. How do I recover the debt across borders?',
        },
        a: {
          zh: '不要先只問「在哪裡告」。應先核對合約的準據法、法院管轄或仲裁條款，再查明正確債務人、可執行資產及所在地、時效期限與脫產風險。資產所在地可能是管轄連結點，也是保全與執行的重要地點，但不是一律可選為本案法院；有效的專屬管轄或仲裁條款，可能要求先在約定地取得判決或仲裁判斷，再到資產地辦理承認與執行。提起程序前，應由當地律師確認管轄、結果能否在資產地執行，以及是否要先凍結資產。先保存合約、訂單、交貨或驗收、發票及催款紀錄；沒有急迫保全需要時，再發函談判，並可爭取債務承認、付款計畫或擔保。各國時效及中斷、停止規則不同，催款或談判未必停止時效，應儘早採取有效程序。',
          en: 'Do not begin by asking only where to sue. First check the governing-law, jurisdiction and arbitration clauses, then identify the correct debtor, enforceable assets and locations, limitation deadline and dissipation risk. Asset location may connect jurisdiction and matters for interim relief and enforcement, but is not always an available merits forum. A valid exclusive-court or arbitration clause may require proceedings in the agreed forum, followed by recognition and enforcement where assets are. Before filing, local counsel should confirm jurisdiction, enforceability of the resulting judgment or award and whether assets should first be frozen. Preserve the contract, orders, delivery or acceptance records, invoices and payment communications; if urgent relief is unnecessary, a demand and negotiation may follow, ideally securing an acknowledgment, payment plan or security. Limitation and tolling rules vary, and demands or negotiations may not stop time. Act early.',
        },
      },
      {
        q: {
          zh: '簽跨國合約時，仲裁條款要注意什麼？',
          en: 'What should I watch for in an arbitration clause when signing a cross-border contract?',
        },
        a: {
          zh: '不要只看「在哪裡開庭」。至少應確認爭議範圍、採機構或臨時仲裁、仲裁機構與規則、法律上的仲裁地（城市及國家或地區）、仲裁員人數、仲裁語言、契約實體準據法，以及必要時仲裁協議本身的準據法。仲裁地決定程序法與監督法院，實際聽證仍可在別處或線上；仲裁員人數、規則、金額及複雜度也影響成本。這些事項未必都是仲裁協議成立的法定必備要件，法律與機構規則常有補缺機制，但留白可能增加前置爭議與費用。建議以選定機構的現行示範條款為骨架，補齊交易選項，並檢查仲裁地及預計執行地的強制規定，不要任意拼接不同機構與規則。也不宜把涵蓋同一爭議的概括法院管轄與仲裁條款並列而不說明範圍或優先順序；但法院保全、協助仲裁、撤銷、承認或執行通常可與仲裁並存，明確的分階段、例外或選擇性條款在部分法域也可能有效。簽署前應由熟悉仲裁地及執行地法律的律師審閱。',
          en: 'Do not treat the seat as merely where a hearing occurs. Confirm the dispute scope; institutional or ad hoc form; institution and rules; juridical seat by city and jurisdiction; number of arbitrators; language; substantive governing law; and, where appropriate, the law governing the arbitration agreement itself. The seat determines procedural law and supervisory courts, although hearings may occur elsewhere or remotely. Arbitrator number, rules, amount and complexity also affect cost. These are not invariably statutory validity requirements and defaults may fill gaps, but omissions create threshold disputes and expense. Start with the chosen institution\'s current model clause, complete transaction-specific options and check mandatory rules at the seat and likely enforcement locations; do not splice institutions and rules without confirming the arrangement works. A broad court clause covering the same disputes should not sit beside arbitration without clear scope or priority. But interim relief, judicial assistance, set-aside, recognition and enforcement commonly coexist with arbitration, and clear tiered, carve-out or elective clauses may work in some jurisdictions. Have counsel familiar with the seat and enforcement locations review the clause.',
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
          zh: '通常不能只靠多數決把對方「除名」。有限公司沒有一般退股或股東除名制度；出資額轉讓須依公司法第 111 條處理其他股東同意及優先受讓。股份有限公司的股份原則上可自由轉讓，公司也只能在法律明定情形收回或收買股份；減資原則上須按持股比例，不能專挑某一股東。若對方同時是董事，可以依法解任或改選，但失去董事職務不等於失去股東資格。實務上通常先談由其他股東或第三人受讓，並檢查章程、股東協議、股份種類及既有的買賣權、違約／離職轉讓或僵局條款；條款能否強制履行仍須個案判斷。若公司經營已達「顯著困難或重大損害」，可依公司法第 11 條聲請法院裁定解散；有限公司股東沒有另設持股比例或期間門檻，股份有限公司則須連續六個月持有已發行股份百分之十以上。單純關係惡化或偶有虧損通常不夠。',
          en: 'Usually not by a simple majority vote. A limited company has no general statutory withdrawal or expulsion mechanism; a transfer of a capital contribution follows Article 111 consent and pre-emption rules. In a company limited by shares, shares are generally freely transferable, the company may redeem or repurchase only where legislation allows, and capital reduction is generally pro rata, not targeted. A shareholder-director may be removed or replaced, but loss of office does not end the shareholding. The usual first step is a negotiated transfer to another shareholder or third party and review of the articles, shareholder agreement, class rights and any call, leaver/default-transfer or deadlock clause; enforceability is case-specific. A court may dissolve the company under Article 11 only for significant operational difficulty or material damage. A limited-company shareholder has no separate percentage or holding-period threshold; an applicant in a company limited by shares must continuously hold at least 10% for six months. Personal hostility or an occasional loss is usually insufficient.',
        },
      },
      {
        q: {
          zh: '股東會決議有問題，多久內要提告？',
          en: 'How long do I have to challenge a shareholders\' meeting resolution?',
        },
        a: {
          zh: '看瑕疵類型。召集程序或決議方法違反法令或章程時，股東原則上須自決議日起三十日內提起撤銷之訴；這是除斥期間，不是從收到議事錄或發現問題時起算。出席股東通常還要在會中就召集或表決瑕疵當場表示異議；未出席者不受這項限制。即使有瑕疵，若情節不重大且不影響決議，法院仍可駁回。若決議內容本身違反法令或章程，則屬無效，不適用三十日期限；若根本欠缺決議成立要件，例如一般決議未達法定出席數，則可能屬決議不成立，也不同於撤銷。應立即保全開會通知、委託書、出席紀錄、議事錄、表決資料及錄音，並儘速判斷訴訟類型。',
          en: 'It depends on the defect. If the convening procedure or voting method violated law or the articles, a shareholder generally must bring an annulment action within 30 days after adoption. This strict extinguishing period runs from the resolution date, not receipt of minutes or discovery. A shareholder who attended normally must also have objected at the meeting; a non-attendee is not barred on that basis. Even with a defect, the court may dismiss if it was insignificant and could not affect the resolution. If the resolution\'s substance violates law or the articles, it is void and the 30-day limit does not apply. If an essential formation requirement was absent—for example, the statutory attendance quorum—the resolution may never have legally existed, which also differs from annulment. Preserve notices, proxies, attendance records, minutes, voting materials and recordings, and classify the claim promptly.',
        },
      },
      {
        q: {
          zh: '公司收到員工檢舉高層掏空，該怎麼處理？',
          en: 'An employee has reported senior management for embezzlement — what should we do?',
        },
        a: {
          zh: '先不要驚動可能刪改帳證或控制系統權限的人；立即下達保存通知、暫停例行刪除，並以可稽核方式保存公司掌控的帳簿、郵件、日誌與設備。調閱須有適當權限、範圍合比例並符合個資與隱私規範，保留原始檔、雜湊值及交接紀錄，不要擅入私人帳號或違法竊錄。依公司型態，由無利害衝突的監察人、審計委員會、獨立董事或其他有權單位督導，排除被檢舉人及其他利害衝突者；重大案件宜及早委請外部律師、會計師或數位鑑識。檢舉人身分只限必要人員知悉並禁止報復，但法定保障依公司所有權、產業及檢舉內容而異，不能承諾絕對匿名。適時讓被檢舉人陳述後，由有權的公司機關決定停職或解任、求償及刑事告訴；並應從收案時即檢查重大訊息、金融監理或其他通報期限，不能等調查結束。取證程序有瑕疵不當然使證據失效，但違法或紀錄不全可能降低證明力，並引發個資、隱私或刑民事責任。',
          en: 'Do not tip off anyone who could alter records or control system access until preservation is in place. Issue a legal hold, suspend routine deletion and make auditable copies of company-controlled ledgers, email, logs and devices, preserving originals, hashes and chain of custody. Collection must be authorised, proportionate and lawful; do not enter personal accounts or make covert recordings without a basis. An unconflicted body—supervisors, audit committee, independent directors or another authorised unit, depending on the company—should oversee the investigation, excluding the subject and conflicted persons. Serious cases warrant early outside legal, accounting or forensic help. Restrict the reporter\'s identity and prohibit retaliation, but statutory protection varies by ownership, sector and report; do not promise absolute anonymity. After a fair opportunity to respond, the competent body should decide suspension or removal, recovery and any criminal complaint. Assess market-disclosure, regulatory and other reporting deadlines from the outset. Procedural defects do not automatically invalidate evidence, but unlawful or poorly documented collection can reduce its weight and create privacy, civil or criminal exposure.',
        },
      },
      {
        q: {
          zh: '合夥做生意要拆夥，錢怎麼算？',
          en: 'We\'re splitting up a business partnership — how is the money divided?',
        },
        a: {
          zh: '先看合夥契約；但「一人退夥、其餘人繼續」和「合夥解散」算法不同。退夥以生效時的合夥財產狀況結算，退夥人的股份可用金錢抵還；尚未了結的事務完成後再計算損益。合夥解散則要清算：先以合夥財產清償債務，並為未到期或訴訟中債務保留必要金額，再返還金錢或其他財產權出資；財產不足返還全部出資時按出資額比例返還，仍有餘額才按利益分配成數分配。未約定損益成數時，原則上按出資額比例；非金錢出資未估價者，以其他合夥人的平均出資額計，但只以勞務出資者除非另有約定，不分擔損失。合夥財產不夠清償債務時，各合夥人對不足額負連帶責任，退夥人對退夥前的合夥債務也仍須負責。動手前先保全帳冊、銀行往來、合約與商標權屬資料，由律師確認是退夥或解散並擬定結算或清算協議。',
          en: 'Start with the partnership agreement, but distinguish one partner\'s withdrawal while the others continue from dissolution. Withdrawal is settled by the partnership\'s position when it takes effect; the departing share may be repaid in money, and unfinished business is accounted for when completed. Dissolution requires liquidation: assets first pay debts and reserve for unmatured or litigated debts, then return money or property-right contributions; if assets cannot return all contributions, repayment is pro rata, and only the surplus follows profit-sharing percentages. Without agreed percentages, profits and losses generally follow contribution amounts; an unvalued non-cash contribution equals the others\' average, but a service-only partner does not share losses unless agreed. Partners are jointly and severally liable for any debt shortfall, and a departing partner remains liable for pre-withdrawal debts. Preserve books, bank records, contracts and trademark ownership before counsel determines whether this is withdrawal or dissolution and documents the settlement or liquidation.',
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
          zh: '外國人在台灣新設公司或入股未上市櫃公司，需要先申請投資核准嗎？',
          en: 'Does a foreign investor need prior approval to form or buy into a private Taiwanese company?',
        },
        a: {
          zh: '原則上要。外國人新設台灣公司，或取得未上市、未上櫃、未興櫃公司的股份或出資額，不論金額大小，都應在匯入或交付出資、完成股權移轉前，依外國人投資條例申請核准。案件通常向經濟部投資審議司申請；園區案件由受委任或委託的園區管理機關受理，並非每案都由投資審議會開會審查。核准後再依核准內容匯款或出資；外幣結售時持核准函向銀行辦理，並於出資實行後二個月內申請審定投資額，再依案件類型辦理公司資本額查核及設立或變更登記。外國公司在台設分公司、上市櫃或興櫃證券投資，以及陸資，各有不同規則與受理機關；簽約前宜先確認所需核准，並把核准列為交割先決條件。',
          en: 'As a rule, yes. A foreign national or entity forming a Taiwan-incorporated company, or acquiring shares or an equity interest in a company that is not listed, OTC-listed or emerging-stock, must obtain approval under the Statute for Investment by Foreign Nationals before remitting or contributing the investment or completing the transfer, regardless of amount. Applications normally go to the MOEA Department of Investment Review; designated park authorities handle park cases, and not every application goes before the Investment Review Council. After approval, remit or contribute in accordance with it, present the approval letter for foreign-currency conversion, and apply to verify the investment amount within two months after contribution, followed where applicable by CPA capital verification and corporate registration. Taiwan branches of foreign companies, listed/OTC/emerging-stock investments and mainland-Chinese investment follow different routes. Identify required approval before signing and make it a condition to closing.',
        },
      },
      {
        q: {
          zh: '英文合約看不太懂，可以先簽再說嗎？',
          en: 'Can I just sign an English contract and sort out the details later?',
        },
        a: {
          zh: '不建議。一般商務契約不會只因以英文書寫，或簽署人沒有逐條讀懂，就當然失效；契約成立且條款有效時，簽署後原則上會受其拘束。若台灣法適用，主張錯誤撤銷仍須符合民法第 88 條，包括錯誤並非因自己過失所致；詐欺撤銷也須證明詐欺及其對意思表示形成的影響，單憑「英文看不懂」並不當然取得撤銷權。簽署前除價格、數量及履約規格外，應逐項確認準據法、法院管轄或仲裁安排、責任限制與賠償、終止條件，以及智慧財產權的歸屬和授權範圍；先取得可靠翻譯，並視涉及的國家取得適用法域的法律意見。',
          en: 'We advise against it. A commercial contract does not become invalid merely because it is in English or the signer did not understand every provision; once validly formed, the parties are generally bound. If Taiwan law applies, setting aside for mistake must satisfy Civil Code Article 88, including that the mistake was not caused by the declarant\'s own negligence. Fraud likewise requires proof of fraud and its effect on consent. Not understanding English alone does not create a right to set the contract aside. Before signing, confirm price, quantity and performance terms, governing law, court jurisdiction or arbitration, liability limits and indemnities, termination rights, and IP ownership and licence scope. Obtain a reliable translation and, where appropriate, advice in the relevant jurisdiction.',
        },
      },
      {
        q: {
          zh: '跟外國公司談合作，什麼時候該簽保密協議（NDA）？',
          en: 'When should I sign an NDA with a foreign business partner?',
        },
        a: {
          zh: '原則上，在揭露任何非公開技術、商務或價格資料前就要簽；第一次只談公開或高層次資訊可以，但不要先交資料再補簽。只有一方揭露時用單向 NDA，雙方交換資訊則用雙向 NDA。應定義保密資訊，包括口頭揭露、樣品及衍生資料，並排除非因違約而公開、接收方先前合法持有且無保密義務、從有權揭露的第三人合法取得或獨立開發的資訊。條款還應限制只能為評估合作等特定目的使用，只向確有知悉必要且受同等義務拘束者揭露，並規範依法必須揭露時的通知與最小揭露、保密義務存續期間及終止後返還或銷燬。跨境案應一併決定準據法、法院或仲裁機構與仲裁地、語言、暫時救濟及執行成本；適用台灣法時，過高違約金仍可能被法院酌減。NDA 不能取代合理保密措施：資料仍要分級標示、限於必要知悉、控管權限並保留揭露紀錄。',
          en: 'As a rule, sign before disclosing non-public technical, commercial or pricing information. A first discussion may stay public or high-level, but do not disclose first and paper it later. Use a one-way NDA for one discloser and a mutual NDA for exchange. Define Confidential Information, including oral disclosures, samples and derived material, and exclude information made public without breach, previously lawfully held without a duty, lawfully received from an entitled third party or independently developed. Limit use to a stated purpose and disclosure to need-to-know representatives under equivalent duties; address compelled disclosure, notice where lawful, minimum disclosure, survival and return or destruction. For a cross-border deal, choose governing law, courts or arbitral institution and seat, language, interim relief and an enforceable forum. Under Taiwan law, an excessive agreed penalty may still be reduced. An NDA does not replace reasonable secrecy measures: classify and mark information, restrict access and keep disclosure records.',
        },
      },
      {
        q: {
          zh: '產品要出口，怎麼知道有沒有出口管制問題？',
          en: 'How do I know whether my products are subject to export controls?',
        },
        a: {
          zh: '不能只看產品名稱或報關號列。應先依技術規格比對台灣戰略性高科技貨品（SHTC）清單，再查目的地、買主、收貨人、最終使用人、最終用途及實體管理名單；未列管貨品若涉及核、生化、飛彈等軍事武器用途或有異常交易風險，也可能受管制。SHTC 原則上須在輸出前取得貿易署許可，免證情形依個案規定判斷。美國規則要另外分析，不能只因「含有美國技術」就認定適用。美國來源的貨品、軟體或技術通常持續受 EAR 管制；台灣製產品則要檢查受管制美國內容是否超過適用的 de minimis 門檻，以及是否符合外國直接產品（FDP）規則。即使受 EAR 管制，也仍須依 ECCN 或 EAR99、最終目的地、用途、使用人、BIS 名單及許可例外，判斷是否需要許可。OFAC 制裁則須按個別方案、交易的美國連結、名單及 50% 所有權規則判斷；非美國人也可能因造成美國人違規、規避制裁、特定再出口或次級制裁而受影響。出口前應完成分類、名單與交易篩查、許可分析，並保留審查紀錄。',
          en: 'Product names and customs codes are not enough. Classify the item, software or technology against Taiwan\'s SHTC lists using technical specifications, then screen destination, purchaser, consignee, ultimate user, end use and Taiwan\'s entity list. An unlisted item may still be controlled for nuclear, chemical/biological, missile or other military-weapon uses or transaction red flags. SHTC items generally require an International Trade Administration licence before export, subject to exemptions. Analyse US rules separately; merely containing US technology does not answer applicability. US-origin items, software and technology generally remain subject to the EAR, while Taiwan-made items require de minimis and foreign-direct product rule analysis. Even if subject to the EAR, licence need depends on ECCN/EAR99, destination, use, user, BIS lists and exceptions. OFAC sanctions require program-specific analysis of US nexus, lists and the 50 Percent Rule; non-US persons may face exposure for causing US violations, evasion, specified reexports or secondary sanctions. Complete classification, restricted-party and transaction screening, licence analysis and recordkeeping before export.',
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
          zh: '被繼承人死亡時遺有財產，原則上不論總額是否低於免稅額，都要在死亡日起六個月內申報。經常居住台灣的中華民國國民，境內外遺產都應列入；居住境外的國民或外國人，則只申報台灣境內遺產。有正當理由不能如期申報，須在期限屆滿前書面申請，通常最多延長三個月；遇不可抗力或其他特殊事由，國稅局可按實際情形另行核定。逾期未申報，可按核定應納稅額處二倍以下罰鍰；已申報但漏報或短報，可按所漏稅額處二倍以下罰鍰，詐欺等不正方法逃漏稅者可處所漏稅額一至三倍。不過，在未經檢舉、也未被國稅局或財政部指定人員開始調查前主動補報，可免罰，但仍須補稅並加計利息。盤點時還要列入死亡前二年內贈與配偶、民法所定各順序繼承人及這些繼承人配偶的財產，依法視為遺產併計。',
          en: 'If a decedent leaves any property, a return is generally due within six months from death even if the estate is below the exemption. An ROC national habitually resident in Taiwan reports worldwide assets; a national habitually resident abroad or a foreign national reports only Taiwan-situs assets. A legitimate-reason extension must be requested in writing before the deadline; ordinarily it is up to three months, with longer relief possible for force majeure or another special circumstance. Failure to file may be fined up to twice the tax assessed; omission or understatement after filing may be fined up to twice the tax evaded, and fraud or other improper means one to three times. A voluntary late or supplemental return before any third-party report or tax-authority investigation may qualify for penalty relief, but tax and interest remain due. Include gifts made within two years before death to the spouse, statutory heirs under Civil Code Articles 1138 and 1140, or those heirs\' spouses; they are treated as part of the estate.',
        },
      },
      {
        q: {
          zh: '每年贈與子女現金，需要申報贈與稅嗎？',
          en: 'Do annual cash gifts to my children need to be reported?',
        },
        a: {
          zh: '以 2026 年（民國 115 年）為例，免稅額是每位贈與人每一曆年 244 萬元，不是每名子女各 244 萬元；父、母各自以自己的財產贈與時，各有一個額度。同一贈與人在 1 月 1 日至 12 月 31 日給所有人的一般贈與合計未超過 244 萬元，原則上免稅且可免申報；一旦某次贈與使年度累計超過免稅額，應自該次贈與發生次日起 30 日內申報。即使未超額，若財產移轉登記需要免稅或不計入贈與總額證明書，仍須申報；現金贈與也宜保留贈與契約、匯款及資金來源紀錄。夫妻相互贈與不計入贈與總額，但辦理登記過戶仍須申報取得證明。父母於子女婚嫁時，各自另有 100 萬元以內不計入贈與總額；稽徵實務通常要求在結婚登記日前後六個月內贈與，並提出戶籍及金流證明。分年贈與可運用不同曆年額度，但每年仍須合併計算同一贈與人的全部一般贈與。',
          en: 'For 2026, the exemption is NT$2.44 million per donor per calendar year, not per child. Each parent gifting their own property has a separate exemption. If one donor\'s ordinary gifts to all recipients from January 1 through December 31 do not exceed it, no tax is due and a return is generally unnecessary. Once a gift pushes the annual total above the exemption, file within thirty days beginning the next day. A return may still be required below the exemption when a tax-exemption or exclusion certificate is needed to register title. Keep gift agreements, transfers and source-of-funds records for cash. Spousal gifts are excluded, although registered transfers still require filing and a certificate. Each parent may also exclude up to NT$1 million given to a child upon marriage; current practice generally requires the gift within six months before or after registration, supported by household and funds-flow records. Gifts across years may use separate annual exemptions, but all ordinary gifts by one donor within each year are aggregated.',
        },
      },
      {
        q: {
          zh: '收到國稅局補稅通知不服，可以不繳嗎？要怎麼救濟？',
          en: 'I received a back-tax assessment I disagree with. Must I pay before challenging it, and how do I seek relief?',
        },
        a: {
          zh: '不要擺著不理，但申請復查不以先繳稅為要件。一般載有應納或補徵稅額的核定，應在繳款書送達後，自繳納期間屆滿次日起三十日內申請復查；無應納或補徵稅額、公告送達等案件的起算點不同，須按處分書及送達情形核算。對復查決定不服，自送達次日起三十日內提訴願；對訴願決定不服，於送達後二個月的不變期間內提行政訴訟。依法按時申請復查後，稽徵機關應暫緩「移送」強制執行，且復查階段無須先繳三分之一；復查後續提訴願，要繼續暫緩移送，原則上須依法提訴願並繳復查決定應納稅額三分之一。確有困難且經核准者，得提供相當擔保；繳款及擔保都有困難時，另有財產禁止處分方案。訴願或行政訴訟本身不當然停止執行，必要時須另聲請停止；暫緩移送也不是免繳，最後仍應補稅時會加計利息。罰鍰不同：依法救濟時，在程序終結前無須先繳三分之一，即免依稅捐稽徵法第 39 條強制執行。逾期通常使處分確定，只有回復原狀、溢繳退稅或再審等有限例外，應立即個案評估。',
          en: 'Do not ignore the notice, but a recheck does not require advance payment. For an ordinary assessment showing tax due, file within thirty days beginning the day after the payment period expires, provided the payment slip was served. Zero-tax, public-notice and certain other cases use different starting points, so service matters. Appeal within thirty days after service of the recheck decision, then commence administrative litigation within the two-month peremptory period after the appeal decision. A timely recheck requires deferral of referral for compulsory execution, with no one-third payment then. To continue deferral after an adverse recheck while appealing, generally file timely and pay one third of the tax determined. If payment is genuinely difficult and approved, equivalent collateral may be furnished; a property-restraint route exists where both are difficult. An appeal or suit alone does not automatically stay execution, and deferral does not forgive tax or interest. A tax penalty differs: during a proper remedy, no one-third payment is required and the penalty is not executed under Article 39. Missing a deadline normally finalises the assessment; reinstatement, overpayment refund or extraordinary review is limited.',
        },
      },
      {
        q: {
          zh: '用境外公司持有資產，現在還需要申報嗎？CFC是什麼？',
          en: 'I hold assets through an offshore company. Do Taiwan\'s CFC rules affect me?',
        },
        a: {
          zh: '不一定，不能只看資產或盈餘有沒有匯回台灣。自 2023 年起，境外關係企業若位於低稅負地區（目前通常指法定稅率不高於 14%，或採境內來源／匯回課稅制度），且個人與關係人在年底直接、間接持股合計達 50% 以上，或能控制人事、財務或營運，即屬 CFC。個人另須本人、配偶及二親等內親屬於年底合計直接持股達 10%，且 CFC 不符合豁免，才按調整後盈餘、本人直接持股比例及持有期間計算營利所得，計入個人基本所得額；法律上不是把盈餘「視同分配」，日後實際分配時，已計入部分不重複計入。一申報戶的 CFC 營利所得與其他海外所得全年合計未達 100 萬元者，免計入基本所得額。CFC 在登記地有固定營業場所、僱用當地員工實際經營且被動收入低於 10%，或年度盈餘原則上不逾 700 萬元者，可適用豁免，但 700 萬元有防拆分合併計算規則。達 50% 或控制測試者，個人申報時應附持股明細及關係結構圖；達 10% 或欲保留 CFC 虧損者，另須填營利所得計算表並附財務報表等文件。台灣營利事業適用相同的 50%／控制及豁免測試，但沒有個人的 10% 門檻，並按直接持股比例及期間認列投資收益。是否申報及課稅須逐一檢查每家公司及持股層級。',
          en: 'Not necessarily; remittance is not the test. Since 2023, a foreign related enterprise is a CFC if it is in a low-tax jurisdiction—generally a statutory rate of 14% or less, or a territorial/remittance regime—and, at year-end, the individual and related persons own at least 50% directly or indirectly, or control personnel, finances or operations. For an individual, income recognition further requires the individual, spouse and relatives within the second degree to own at least 10% directly at year-end, with neither exemption applying. Adjusted earnings are multiplied by direct ownership and holding period and included as business income in individual basic income; this is not a deemed distribution, and amounts already included are not taxed again on actual distribution. CFC and other foreign-source income below NT$1 million per filing household is excluded from basic income. Exemptions cover substantive local operations—fixed premises, local employees actually operating the business and passive income below 10%—or generally earnings no more than NT$7 million, subject to anti-splitting aggregation. Meeting the 50% or control test requires ownership and structure disclosure; meeting 10%, or preserving CFC losses, adds income schedules and financial statements. A Taiwan business uses the same 50%/control and exemption tests without the individual 10% threshold and recognises investment income by direct ownership and holding period. Review every entity and ownership tier.',
        },
      },
    ],
  },
};
