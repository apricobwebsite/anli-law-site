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
  'family-custody': {
    metaDesc: {
      zh: '安理國際法律事務所位於台北市中正區，處理離婚、子女監護權（親權酌定）、扶養費、夫妻剩餘財產分配、家暴保護令、會面交往與跨國親權爭議，並協助收養認可與監護宣告。初次諮詢採預約制，歡迎來電或來信預約。',
      en: 'Yang & Associates Law Firm (ANLI) in Taipei handles divorce, child custody and support, marital property division, protection orders, adoption, guardianship, and cross-border custody disputes. Consultations by appointment.',
    },
    intro: [
      {
        zh: '婚姻走到盡頭，最難的往往不是離婚本身，而是孩子歸誰照顧、扶養費怎麼算、財產怎麼分。有人面對家暴，需要保護令；有人則是孩子被對方帶走，甚至被擅自帶出國，連見一面都難。這些是家事案件中最常見、也最急迫的問題。',
        en: 'When a marriage ends, the hardest questions are rarely the divorce itself: who will care for the children, how child support should be set, and how marital property is divided. Some clients face domestic violence and need a protection order; others find that the other parent has taken the child away — sometimes out of the country. These are the most common and most urgent issues in family cases.',
      },
      {
        zh: '先提醒兩件事。第一，離婚、親權、扶養費這類案件，依法原則上要先經法院調解，調解不成才進入審判。第二，證據要及早保存，例如對話紀錄、驗傷單、帳戶金流；涉及家暴時，可以先聲請保護令，不必等離婚程序開始。',
        en: 'Two practical points. First, divorce, custody, and support cases in Taiwan must generally go through court mediation before trial. Second, preserve evidence early — messages, medical records, bank statements. Where domestic violence is involved, a protection order can be sought right away, without waiting for divorce proceedings.',
      },
      {
        zh: '本所處理離婚、親權酌定與改定親權、會面交往、扶養費、交付子女、收養認可及監護宣告等事件。跨國案件中，本所與美國、英國執業律師長期協作，處理一方擅帶子女出境後的兩地程序；必要時並結合數位鑑識與金流追蹤顧問，協助清查財產。初次諮詢採預約制，請先來電或來信說明狀況。',
        en: 'Our firm handles divorce, custody determination and modification, visitation, child support, child return proceedings, adoption, and adult guardianship matters. In cross-border cases we work with practising lawyers in the United States and the United Kingdom on proceedings in both jurisdictions, and where hidden assets are suspected we can draw on digital forensics and fund-tracing consultants. Initial consultations are by appointment — please call or email to outline your situation.',
      },
    ],
    cases: [
      {
        term: {
          zh: '協議離婚',
          en: 'Divorce by Agreement',
        },
        desc: {
          zh: '雙方有意離婚但條件談不攏，律師協助擬定離婚協議，把親權、扶養費與財產分配一次談清楚。',
          en: 'When both spouses want a divorce but disagree on terms, we draft the agreement and settle custody, support, and property in one document.',
        },
      },
      {
        term: {
          zh: '裁判離婚',
          en: 'Contested Divorce',
        },
        desc: {
          zh: '一方不同意離婚或協議破局時，律師評估離婚事由與證據，代理進行調解與訴訟。',
          en: 'Where one spouse refuses to divorce or negotiations break down, we assess the statutory grounds and evidence and represent you in mediation and litigation.',
        },
      },
      {
        term: {
          zh: '子女監護權',
          en: 'Child Custody',
        },
        desc: {
          zh: '離婚時無法就孩子歸誰達成共識，律師依子女最佳利益聲請親權酌定，爭取單獨或共同親權。',
          en: 'When parents cannot agree on custody, we petition the court to determine parental rights based on the child\'s best interests, whether sole or joint.',
        },
      },
      {
        term: {
          zh: '改定親權',
          en: 'Custody Modification',
        },
        desc: {
          zh: '行使親權的一方未盡照顧義務或不利於子女時，律師代理聲請改由他方行使親權。',
          en: 'If the custodial parent fails in their duties or acts against the child\'s interests, we petition the court to transfer parental rights to the other parent.',
        },
      },
      {
        term: {
          zh: '扶養費請求',
          en: 'Child Support',
        },
        desc: {
          zh: '對方不付或短付子女扶養費，律師協助計算合理金額、請求給付並聲請強制執行。',
          en: 'When child support goes unpaid or underpaid, we calculate a reasonable amount, claim payment, and enforce it through the courts where necessary.',
        },
      },
      {
        term: {
          zh: '夫妻剩餘財產分配',
          en: 'Marital Property Division',
        },
        desc: {
          zh: '離婚時就婚後財產差額請求分配，律師協助清查財產、防止脫產，並在時效內提出請求。',
          en: 'On divorce, we help claim the statutory distribution of remaining marital property, trace and secure assets, and act within the limitation periods.',
        },
      },
      {
        term: {
          zh: '家暴保護令',
          en: 'Domestic Violence Protection Order',
        },
        desc: {
          zh: '遭受家庭成員肢體或精神暴力時，律師協助聲請暫時或通常保護令，並規劃後續離婚與親權程序。',
          en: 'For victims of physical or psychological abuse by a family member, we apply for temporary or ordinary protection orders and plan the divorce and custody steps that follow.',
        },
      },
      {
        term: {
          zh: '會面交往',
          en: 'Visitation Rights',
        },
        desc: {
          zh: '離婚後探視孩子被阻撓，或探視安排一直起衝突，律師協助酌定或改定會面交往方式。',
          en: 'When access to your child is blocked or arrangements keep breaking down, we ask the court to set or modify visitation terms.',
        },
      },
      {
        term: {
          zh: '跨國親權爭議',
          en: 'Cross-Border Custody Disputes',
        },
        desc: {
          zh: '一方擅帶子女出境或滯留國外，律師協助在台聲請暫時處分，並與外國律師協作處理返還程序。',
          en: 'When a parent wrongfully removes or retains a child abroad, we seek provisional measures in Taiwan and coordinate return proceedings with foreign counsel.',
        },
      },
      {
        term: {
          zh: '交付子女',
          en: 'Child Return Proceedings',
        },
        desc: {
          zh: '對方拒不交還孩子時，律師代理聲請交付子女與暫時處分，必要時聲請強制執行。',
          en: 'When the other parent refuses to hand over the child, we petition for return of the child and provisional measures, with compulsory enforcement if needed.',
        },
      },
      {
        term: {
          zh: '收養認可',
          en: 'Adoption',
        },
        desc: {
          zh: '收養須經法院認可才生效，律師協助評估要件、準備文件，並處理繼親與跨國收養。',
          en: 'Adoption in Taiwan requires court approval; we assess the requirements, prepare the filings, and handle stepparent and cross-border adoptions.',
        },
      },
      {
        term: {
          zh: '監護宣告',
          en: 'Adult Guardianship',
        },
        desc: {
          zh: '家人因失智或精神障礙無法自理事務，律師協助聲請監護或輔助宣告及監護人選任。',
          en: 'When a family member can no longer manage their affairs due to dementia or mental incapacity, we petition for a guardianship or assistance declaration and the appointment of a guardian.',
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
          zh: '原則上要。離婚訴訟依家事事件法屬於調解前置的事件，起訴前應先經法院調解；就算直接起訴，法院也會先將案件移付調解。若能在調解中就親權、扶養費與財產達成共識，調解成立與確定裁判有同一效力。律師可以陪同調解，協助把條件寫清楚。',
          en: 'Generally yes. Divorce suits in Taiwan must go through court mediation before trial; even if you file directly, the court will refer the case to mediation first. If agreement is reached in mediation on custody, support, and property, the settlement has the same effect as a final judgment. We can attend mediation with you and make sure the terms are properly recorded.',
        },
      },
      {
        q: {
          zh: '對方把小孩帶出國不讓我見，怎麼辦？',
          en: 'My ex took our child abroad without my consent. What can I do?',
        },
        a: {
          zh: '請儘快行動。若孩子還在台灣，可以聲請暫時處分，防止被帶出境；已被帶出國的話，除了在台灣進行交付子女與親權程序，通常還須在孩子所在國另行聲請返還。台灣不是海牙兒童誘拐公約的締約國，各國處理方式不同。本所與美國、英國執業律師協作，可協助評估兩地程序怎麼走。',
          en: 'Act quickly. If the child is still in Taiwan, provisional measures can be sought to prevent removal. If the child is already abroad, you will usually need proceedings both in Taiwan and in the country where the child is located. Taiwan is not a party to the Hague Abduction Convention, so the approach varies by country; we coordinate with U.S. and U.K. counsel to map out both tracks.',
        },
      },
      {
        q: {
          zh: '夫妻剩餘財產分配可以拿多少？多久內要提出？',
          en: 'How much can I claim in marital property division, and is there a deadline?',
        },
        a: {
          zh: '原則上，是就雙方婚後財產（不含繼承或其他無償取得的財產）各自扣除債務後，由較少的一方請求差額的一半；平均分配顯失公平時，法院可以調整或免除。要注意時效：自知道有剩餘財產差額時起兩年內，且自離婚等法定財產制關係消滅時起五年內要提出。若擔心對方脫產，可以及早聲請假扣押等保全程序。',
          en: 'As a rule, each spouse\'s post-marital property (excluding inheritances and other gratuitous acquisitions) is netted against debts, and the spouse with less may claim half the difference; the court may adjust or deny the claim where equal division would be clearly unfair. Deadlines apply: two years from learning of the difference, and no later than five years after the marital property regime ends, typically on divorce. If you suspect assets are being moved, consider provisional attachment early.',
        },
      },
      {
        q: {
          zh: '被家暴了，聲請保護令要準備什麼？',
          en: 'What do I need to apply for a domestic violence protection order?',
        },
        a: {
          zh: '先確保人身安全，再保存證據：驗傷單、照片、錄音、對話紀錄與報案紀錄都有幫助。您可以向法院聲請通常或暫時保護令；情況急迫時，檢察官、警察機關或主管機關可代為聲請緊急保護令。保護令內容可包括命對方遷出、遠離、禁止聯絡，也可以暫定未成年子女由誰照顧。',
          en: 'Safety first, then evidence: medical reports, photos, recordings, messages, and police records all help. You may apply to the court for an ordinary or temporary protection order; in urgent situations, a prosecutor, the police, or the local authority can apply for an emergency order on your behalf. A protection order can require the abuser to move out, stay away, and cease contact, and can provisionally determine who cares for the children.',
        },
      },
    ],
  },
  'labor-disputes': {
    metaDesc: {
      zh: '遭遇非法解僱、資遣費或加班費爭議？安理國際法律事務所位於台北市中正區，處理確認僱傭關係、復職、競業禁止條款與職場性騷擾等勞資爭議，從勞動局調解到勞動事件法訴訟全程協助。初次諮詢採預約制，歡迎來電或來信預約。',
      en: 'Yang & Associates Law Firm (ANLI) in Taipei handles wrongful termination, severance, overtime, and other employment disputes for professionals — from labor bureau mediation to litigation under Taiwan\'s Labor Incident Act. Consultations by appointment.',
    },
    intro: [
      {
        zh: '被公司突然資遣，資遣費卻算得比預期少；或被以「不能勝任」為由解僱，要求當天走人；加班多年沒領過加班費；在公司遭遇性騷擾或職場霸凌，申訴後反而被調職、減薪。如果這些情境讓您覺得熟悉，第一步是把自己的權利算清楚。',
        en: 'A sudden layoff with severance that seems too low. A dismissal for "poor performance" with orders to leave the same day. Years of unpaid overtime. Harassment or bullying at work, followed by a transfer or pay cut after you complained. If any of this sounds familiar, the first step is knowing exactly what you are owed.',
      },
      {
        zh: '兩件事先記住。第一，多數爭議可以先向勞動局申請勞資爭議調解，不收費，而且調解期間雇主不得因該爭議解僱您或做其他不利處分。第二，進了法院，勞動事件法對勞工較有利：出勤紀錄上的時間原則上推定為工作時間，請求工資、資遣費或確認僱傭關係的訴訟，起訴時可暫免徵收三分之二的裁判費。',
        en: 'Two things are worth knowing. Most disputes can first go to free mediation at the local labor bureau, and while mediation is pending your employer may not dismiss you or take other adverse action over the dispute. In court, the Labor Incident Act works in employees\' favor: hours shown in attendance records are presumed to be working time, and in claims for wages, severance pay, or confirmation of employment, two-thirds of the court filing fee is provisionally waived.',
      },
      {
        zh: '證據要趁在職時保存：出勤紀錄、薪資單、獎金辦法、勞退專戶明細、往來訊息，離職後常常拿不到。安理國際法律事務所位於台北市中正區，為主管與專業人士處理白領勞資爭議，從發函、調解陪同到訴訟，由律師替您核算金額、擬定策略。初次諮詢採預約制，歡迎來電或來信預約。',
        en: 'Preserve evidence while you are still employed — attendance records, payslips, bonus plans, pension account statements, and work messages are hard to obtain after you leave. ANLI, based in Taipei\'s Zhongzheng District, handles white-collar employment disputes for managers and professionals, from demand letters and accompanied mediation through litigation — calculating what you are owed and planning the strategy. Initial consultations are by appointment.',
      },
    ],
    cases: [
      {
        term: {
          zh: '非法解僱',
          en: 'Wrongful Termination',
        },
        desc: {
          zh: '解僱不符勞基法法定事由即屬違法，律師協助提起確認僱傭關係之訴，請求復職與補發工資。',
          en: 'A dismissal without statutory grounds under the Labor Standards Act is unlawful. We sue to confirm the employment relationship and seek reinstatement and back pay.',
        },
      },
      {
        term: {
          zh: '資遣費爭議',
          en: 'Severance Pay Disputes',
        },
        desc: {
          zh: '遭資遣但公司短算年資或平均工資，律師重新核算資遣費與預告工資，透過調解或訴訟請求補足。',
          en: 'When an employer miscalculates seniority or average wages, we recompute severance and notice-period pay and recover the shortfall through mediation or litigation.',
        },
      },
      {
        term: {
          zh: '加班費請求',
          en: 'Overtime Pay Claims',
        },
        desc: {
          zh: '長期加班未領加班費，律師依出勤紀錄與通訊紀錄舉證工時，替您追討五年內的加班費。',
          en: 'We establish actual working hours through attendance records and messaging logs and claim up to five years of unpaid overtime.',
        },
      },
      {
        term: {
          zh: '職業災害補償',
          en: 'Occupational Injury Compensation',
        },
        desc: {
          zh: '因工作受傷或罹病，協助請求醫療費、工資補償與職災保險給付，醫療期間雇主原則上不得解僱。',
          en: 'For work-related injury or illness, we claim medical costs, wage compensation, and occupational accident insurance benefits; dismissal during the treatment period is generally barred.',
        },
      },
      {
        term: {
          zh: '競業禁止條款',
          en: 'Non-Compete Clauses',
        },
        desc: {
          zh: '前公司以競業禁止條款求償或阻止轉職，律師檢視有無合理補償與範圍限制，主張條款無效。',
          en: 'When a former employer sues you or tries to block your next job, we test the clause against the statutory requirements — legitimate business interest, reasonable scope, and compensation — and argue that it is void or that liability should be reduced.',
        },
      },
      {
        term: {
          zh: '職場性騷擾',
          en: 'Workplace Sexual Harassment',
        },
        desc: {
          zh: '遭遇職場性騷擾，律師協助內部申訴、向勞動局申訴並請求賠償，雇主未盡防治義務亦須負責。',
          en: 'We assist with internal complaints, complaints to the local labor authority, and damages claims; an employer that fails its prevention duties is also liable.',
        },
      },
      {
        term: {
          zh: '職場霸凌',
          en: 'Workplace Bullying',
        },
        desc: {
          zh: '遭主管或同事長期霸凌，律師協助保全證據、提出申訴，並向雇主與行為人請求損害賠償。',
          en: 'For sustained bullying by supervisors or colleagues, we preserve evidence, file complaints, and pursue damages against both the employer and the individual responsible.',
        },
      },
      {
        term: {
          zh: '未足額提繳勞退',
          en: 'Underpaid Pension Contributions',
        },
        desc: {
          zh: '雇主未依實際薪資足額提繳6%勞退金，律師協助核對勞退專戶明細，請求補繳差額或損害賠償。',
          en: 'When an employer underreports wages to reduce the 6% labor pension contribution, we audit your pension account records and claim the shortfall or damages.',
        },
      },
      {
        term: {
          zh: '業績獎金爭議',
          en: 'Performance Bonus Disputes',
        },
        desc: {
          zh: '公司拒發已達標的業績獎金或片面修改獎金制度，律師依契約與慣例請求給付並主張工資性質。',
          en: 'When a company withholds bonuses you have earned or changes the bonus plan unilaterally, we claim payment under the contract and established practice and argue that the bonuses count as wages.',
        },
      },
      {
        term: {
          zh: '勞資調解',
          en: 'Labor Dispute Mediation',
        },
        desc: {
          zh: '律師代理或陪同出席勞動局勞資爭議調解，事先核算請求金額與整理證據，談判並把關和解條款。',
          en: 'We represent or accompany you in labor bureau mediation — quantifying claims and organizing evidence beforehand, negotiating, and vetting the settlement terms.',
        },
      },
      {
        term: {
          zh: '違法調職減薪',
          en: 'Unlawful Transfers and Pay Cuts',
        },
        desc: {
          zh: '遭片面調職、減薪或變相逼退，律師檢視是否符合調動五原則，協助異議並請求回復原職原薪。',
          en: 'For unilateral transfers, pay cuts, or constructive-dismissal tactics, we test the measure against the statutory transfer principles and seek restoration of your original position and pay.',
        },
      },
      {
        term: {
          zh: '非自願離職證明',
          en: 'Involuntary Separation Certificates',
        },
        desc: {
          zh: '被迫簽自願離職或拿不到非自願離職證明會影響失業給付，律師協助應對並爭取正確記載。',
          en: 'Being pressured to "resign voluntarily" or denied a separation certificate can cost you unemployment benefits; we help you respond and secure an accurate record.',
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
          zh: '可以。公司解僱勞工必須符合勞基法的法定事由，不是想解僱就能解僱。若解僱違法，您可以提起確認僱傭關係存在的訴訟，請求復職並補發解僱期間的工資；符合一定要件時，還可以依勞動事件法聲請法院裁定，命公司在訴訟期間繼續僱用並給付工資。提醒您：不要簽任何自願離職文件，並盡早保存解僱通知與相關證據。',
          en: 'Yes, if the dismissal was unlawful. An employer may dismiss only on statutory grounds under the Labor Standards Act. If yours lacked them, you can sue to confirm the employment relationship and seek reinstatement and back pay, and under the Labor Incident Act you may — subject to certain requirements — ask the court to order continued employment and wage payments while the case is pending. Do not sign anything framed as a voluntary resignation, and preserve the dismissal notice and related evidence early.',
        },
      },
      {
        q: {
          zh: '加班費可以追討幾年？需要什麼證據？',
          en: 'How many years of overtime pay can I claim, and what evidence do I need?',
        },
        a: {
          zh: '加班費屬於工資，請求權時效是五年，超過五年的部分原則上要不回來。證據以出勤紀錄最重要：雇主依法必須置備並保存出勤紀錄，勞工可以要求提供副本，訴訟中法院也可命雇主提出，紀錄上的時間原則上推定為工作時間。另外，交辦工作的訊息、電子郵件、班表都能佐證，建議在職時就先備份。',
          en: 'You can claim up to five years of overtime pay; anything older is generally time-barred. Attendance records are the key evidence: employers must keep them by law, you are entitled to request copies, courts can order their production, and the hours recorded are presumed to be working time. Work-assignment messages, emails, and shift schedules also help. Back everything up while you are still employed.',
        },
      },
      {
        q: {
          zh: '和公司有勞資糾紛，要先去勞動局調解嗎？',
          en: 'Do I have to go through labor bureau mediation before suing my employer?',
        },
        a: {
          zh: '不是強制，但通常建議先申請。向勞動局申請勞資爭議調解不收費，調解期間雇主不得因該爭議解僱您或做其他不利處分。調解不成再走法院；進了法院，依勞動事件法原則上也會先進行法官主持的勞動調解。許多案件在調解階段就能解決，律師可以代理出席，事先把請求項目與金額算清楚。',
          en: 'No, mediation is not mandatory, but it is usually worth trying first. Labor bureau mediation is free, and while it is pending your employer may not dismiss you or take other adverse action over the dispute. If mediation fails you can sue — and under the Labor Incident Act, court proceedings themselves generally begin with judge-led labor mediation. Many disputes settle at this stage; a lawyer can represent you and quantify your claims beforehand.',
        },
      },
      {
        q: {
          zh: '簽了競業禁止條款，離職真的不能去同業嗎？',
          en: 'I signed a non-compete — am I really barred from joining a competitor?',
        },
        a: {
          zh: '不一定。依勞基法，離職後競業禁止約定必須同時符合幾個要件才有效：公司有應受保護的正當營業利益、您的職務接觸得到營業秘密、限制的期間（最長兩年）、區域與職業範圍合理、公司對您離職後不從事競業的損失有給合理補償。缺少任何一項，約定無效。收到存證信函或被求償時，先別急著認賠，帶著契約讓律師評估。',
          en: 'Not necessarily. Under the Labor Standards Act, a post-employment non-compete is valid only if every statutory requirement is met: the employer has a legitimate interest worth protecting, your role gave you access to trade secrets, the restriction is reasonable in duration (two years at most), territory, and scope, and the employer pays reasonable compensation for the restricted period after you leave. If any element is missing, the clause is void. Before conceding to a demand letter, have a lawyer review the agreement.',
        },
      },
    ],
  },
  'civil-litigation': {
    metaDesc: {
      zh: '安理國際法律事務所位於台北市中正區，處理遺產分割、特留分、遺囑、拋棄繼承、借名登記、共有物分割、債務糾紛、返還房屋、租賃押金與車禍損害賠償，並協助支付命令、本票裁定與強制執行。初次諮詢採預約制。',
      en: 'Yang & Associates Law Firm (ANLI) in Taipei handles estate division, reserved portion claims, wills, co-ownership partition, nominee registration disputes, debt recovery, traffic accident damages, and enforcement proceedings. Consultations by appointment.',
    },
    intro: [
      {
        zh: '家人過世後，遺產怎麼分談不攏；登記在親友名下的房子，對方不認帳；共有土地想處理，其他共有人不點頭；借出去的錢要不回來；出了車禍，不知道能求償哪些項目。這些都是財產與一般民事糾紛最常見的樣子。多數人不是不想解決，而是不知道第一步怎麼走。',
        en: 'A parent passes away and the heirs cannot agree on dividing the estate. A house registered under a relative\'s name is not being returned. A co-owner blocks any dealing with shared land. A loan goes unpaid, or a traffic accident leaves you unsure what you can claim. These are the most common property and civil disputes we see — and most people are stuck not because they refuse to act, but because they do not know where to start.',
      },
      {
        zh: '先記住兩件事。第一，權利有時效：車禍這類侵權行為的損害賠償，原則上要在知悉損害及賠償義務人時起兩年內請求。第二，打官司不是唯一選項：在法院成立的調解，或在公所調解委員會成立並經法院核定的調解，與確定判決有同一效力，對方不履行時可以聲請強制執行。',
        en: 'Two things are worth knowing early. First, claims expire: damages for torts such as traffic accidents must generally be claimed within two years of learning of the injury and the person liable. Second, a lawsuit is not the only route: a settlement mediated in court, or reached before a township mediation committee and ratified by the court, has the same effect as a final judgment and can be enforced if the other side fails to comply.',
      },
      {
        zh: '安理國際法律事務所位於台北市中正區，主持律師為美國柏克萊加州大學法律科學博士。從遺囑規劃、拋棄繼承、支付命令到強制執行，我們會依個案情況分析各種途徑的時間與費用，協助您選擇合適的作法。初次諮詢採預約制，請以電話或 email 與我們聯繫。',
        en: 'Yang & Associates Law Firm (ANLI) is based in Taipei\'s Zhongzheng District, and its principal attorney holds a J.S.D. from UC Berkeley. From will planning and renunciation of inheritance to payment orders and enforcement, we lay out the available routes with their likely time and cost so you can choose a sensible path. Initial consultations are by appointment — contact us by phone or email.',
      },
    ],
    cases: [
      {
        term: {
          zh: '遺產分割',
          en: 'Estate Division',
        },
        desc: {
          zh: '繼承人對怎麼分談不攏時，協助協商、調解或訴請法院分割遺產，並處理後續繼承登記。',
          en: 'When heirs cannot agree on dividing the estate, we negotiate, mediate, or petition the court for partition, and handle inheritance registration.',
        },
      },
      {
        term: {
          zh: '特留分扣減',
          en: 'Reserved Portion Claims',
        },
        desc: {
          zh: '遺囑把財產全給特定人而侵害特留分時，協助計算應得比例，行使扣減權追回不足部分。',
          en: 'Where a will leaves nearly everything to one person, we calculate the reserved portion and claim back the shortfall through abatement.',
        },
      },
      {
        term: {
          zh: '遺囑規劃',
          en: 'Will Drafting',
        },
        desc: {
          zh: '協助訂立自書遺囑、代筆遺囑或公證遺囑，把關法定要件，降低日後無效或爭產的風險。',
          en: 'We help you execute holographic, dictated, or notarized wills that meet statutory formalities, reducing the risk of invalidity or later disputes.',
        },
      },
      {
        term: {
          zh: '拋棄繼承',
          en: 'Renunciation of Inheritance',
        },
        desc: {
          zh: '被繼承人負債多於遺產時，協助在知悉得繼承時起三個月內，以書面向法院辦理拋棄繼承。',
          en: 'When the deceased leaves more debts than assets, we file the written renunciation with the court within the three-month statutory period.',
        },
      },
      {
        term: {
          zh: '借名登記',
          en: 'Nominee Registration Disputes',
        },
        desc: {
          zh: '不動產借名登記在他人名下、對方拒不返還時，協助蒐集出資證據，終止契約並訴請移轉登記。',
          en: 'When property registered in another\'s name is not returned, we gather evidence of who paid, terminate the arrangement, and sue to recover title.',
        },
      },
      {
        term: {
          zh: '共有物分割',
          en: 'Partition of Co-Owned Property',
        },
        desc: {
          zh: '共有土地或房屋無法協議分割時，協助協商分割方案，或訴請法院判決原物分割或變價分割。',
          en: 'When co-owners are deadlocked, we negotiate a division plan or ask the court to order partition in kind or sale by auction.',
        },
      },
      {
        term: {
          zh: '債務糾紛',
          en: 'Debt Recovery',
        },
        desc: {
          zh: '欠錢不還、借款或貨款收不回時，協助催告、聲請支付命令或起訴，並視情況聲請假扣押保全。',
          en: 'For unpaid loans and receivables, we send formal demands, seek payment orders or sue, and apply for provisional attachment where needed.',
        },
      },
      {
        term: {
          zh: '返還房屋',
          en: 'Recovery of Real Property',
        },
        desc: {
          zh: '房屋被無權占用或租約到期不搬遷時，協助訴請返還房屋，並請求相當於租金的不當得利。',
          en: 'Against unlawful occupants or holdover tenants, we sue to recover the premises and claim rent-equivalent unjust enrichment.',
        },
      },
      {
        term: {
          zh: '租賃押金糾紛',
          en: 'Rental Deposit Disputes',
        },
        desc: {
          zh: '房東扣住押金不還，或就屋況損害各說各話時，協助釐清責任，透過調解或訴訟取回押金。',
          en: 'When a landlord withholds a deposit or damage is disputed, we clarify liability and recover the deposit through mediation or litigation.',
        },
      },
      {
        term: {
          zh: '車禍求償',
          en: 'Traffic Accident Claims',
        },
        desc: {
          zh: '車禍受傷或車輛受損時，協助申請鑑定釐清肇責，計算醫療費、薪資損失與慰撫金後求償。',
          en: 'After an accident, we obtain fault assessments and pursue claims for medical costs, lost income, vehicle repairs, and pain and suffering.',
        },
      },
      {
        term: {
          zh: '本票裁定',
          en: 'Promissory Note Rulings',
        },
        desc: {
          zh: '持有本票對方卻不付款時，協助向法院聲請本票裁定，不必經過訴訟即可取得執行名義。',
          en: 'When a promissory note goes unpaid, we apply for a court ruling permitting enforcement — an enforcement title obtained without full litigation.',
        },
      },
      {
        term: {
          zh: '強制執行',
          en: 'Compulsory Enforcement',
        },
        desc: {
          zh: '取得執行名義後對方仍不給付時，協助查調財產，聲請扣押薪資、查封拍賣不動產受償。',
          en: 'When a debtor ignores an enforcement title, we trace assets and move to garnish wages or seize and auction real property.',
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
          zh: '不一定。事實與金額明確時，可先聲請支付命令：對方收到後二十日內沒有提出異議，確定的支付命令就可以作為執行名義聲請強制執行。若對方有簽本票，也可以聲請本票裁定，程序比訴訟簡便。對方提出異議或有爭執時，才需要進入訴訟。起步前建議先了解對方名下財產，避免贏了官司卻拿不到錢。',
          en: 'Not necessarily. If the debt is clear, a payment order is often the fastest route: if the debtor does not object within twenty days of service, the final order serves as an enforcement title. If the debtor signed a promissory note, a court enforcement ruling is available through a simpler procedure. Litigation is only needed if the debtor contests the claim — and before starting, it is worth checking whether the debtor has assets to enforce against.',
        },
      },
      {
        q: {
          zh: '父母過世沒有留遺囑，遺產怎麼分？',
          en: 'My parents died without a will — how is the estate divided?',
        },
        a: {
          zh: '先由全體繼承人協商，依應繼分或大家同意的方式簽遺產分割協議，再辦理繼承登記；談不成時，可聲請調解或向法院訴請分割遺產。提醒：不動產辦理繼承登記前，須先完成遺產稅申報並取得繳清或免稅證明；若有人主張生前贈與或代墊費用，也建議在分割時一併釐清，避免日後再起爭執。',
          en: 'The heirs first try to agree on a division based on statutory shares or mutual consent, sign a written partition agreement, and register the inheritance. If no agreement is reached, the matter can go to mediation or a court petition for estate partition. Note that before real property can be registered to the heirs, the estate tax return must be filed and a tax clearance or exemption certificate obtained; any claims of lifetime gifts or advanced expenses are best resolved at the same time.',
        },
      },
      {
        q: {
          zh: '拋棄繼承要在多久之內辦？要準備什麼文件？',
          en: 'What is the deadline for renouncing an inheritance, and what documents are needed?',
        },
        a: {
          zh: '要在知悉自己得繼承之時起三個月內，以書面向法院辦理，並檢附死亡證明、繼承系統表與戶籍資料等文件。補充一點：依現行法，就算不拋棄，繼承人原則上也只以繼承所得的遺產為限清償被繼承人債務；辦理拋棄的好處是完全退出繼承，不必參與後續清算或相關訴訟。',
          en: 'Three months from learning that you are an heir, by written filing with the court, typically with the death certificate, a family tree showing all heirs, and household registration records. Note that under current law, even without renouncing, heirs are in principle liable for the deceased\'s debts only up to the value of the inherited estate — but renunciation removes you from the succession entirely, sparing you the ensuing settlement and any related litigation.',
        },
      },
      {
        q: {
          zh: '車禍可以求償哪些項目？多久之內要提出？',
          en: 'What can I claim after a traffic accident, and is there a time limit?',
        },
        a: {
          zh: '可以請求醫療費、看護費、交通費、不能工作的薪資損失、車輛修復費用，以及精神慰撫金。要注意時效：侵權行為損害賠償原則上須在知悉損害及賠償義務人時起兩年內行使。建議先申請道路交通事故初步分析研判表，必要時再送車輛行車事故鑑定釐清肇責，之後決定和解、調解或起訴。',
          en: 'Recoverable items include medical and nursing costs, transportation, lost income, vehicle repairs, and compensation for pain and suffering. Mind the limitation period: tort claims must generally be brought within two years of learning of the damage and the person liable. Obtain the police accident analysis report first and, where needed, a formal fault assessment, before deciding between settlement, mediation, or suit.',
        },
      },
    ],
  },
  'intellectual-property': {
    metaDesc: {
      zh: '安理國際法律事務所提供商標註冊、專利申請、專利侵權訴訟、著作權與營業秘密案件的法律服務，並與資訊安全顧問協作進行數位鑑識與電子證據保全，處理智慧財產及商業法院訴訟及跨境維權。',
      en: 'Yang & Associates Law Firm (ANLI) in Taipei advises on trademark registration, patent filing and infringement litigation, copyright and trade secret matters, and cross-border IP enforcement, supported by digital forensics and electronic evidence preservation.',
    },
    intro: [
      {
        zh: '商標被人搶先註冊、產品在電商平台出現仿冒品、離職員工帶走客戶名單與技術文件，或網路上的圖文被整篇盜用——這些是智慧財產權糾紛最常見的樣子。很多當事人是收到警告函，或發現損害已經擴大，才開始找律師。',
        en: 'A competitor registers your brand name first. Counterfeits of your product appear on e-commerce platforms. A departing employee walks out with client lists and technical files. Your photos and articles are lifted wholesale online. These are the most common forms IP disputes take — and many clients only call a lawyer after a demand letter arrives or the damage has already spread.',
      },
      {
        zh: '先提醒兩件事。第一，專利、商標、著作權被侵害的損害賠償請求權有時效，原則上自知道損害及行為人時起二年內就要行使，最長不超過侵權行為時起十年。第二，電子證據很容易被刪除或修改，發現營業秘密外洩或網路侵權時，第一步是保全證據，不是先發函打草驚蛇。',
        en: 'Two things to keep in mind. Damages claims for patent, trademark, and copyright infringement are subject to limitation periods — generally two years from when you learn of the harm and the infringer, and no more than ten years from the infringing act. And electronic evidence is easily deleted or altered: if you suspect a trade secret leak or online infringement, preserve the evidence first, before alerting the other side.',
      },
      {
        zh: '本所處理從商標註冊、專利申請到侵權訴訟的完整流程，並與資訊安全顧問長期協作，能在營業秘密與網路侵權案件中執行數位鑑識與電子證據保全。進入智慧財產及商業法院之前，我們會先評估證據強度，再決定要談判、起訴，還是先聲請保全。',
        en: 'ANLI handles the full cycle from trademark registration and patent filing through infringement litigation before the Intellectual Property and Commercial Court. Working with information security consultants, we conduct digital forensics and preserve electronic evidence in trade secret and online infringement matters — and we assess the strength of your evidence before deciding whether to negotiate, litigate, or seek a preservation order first.',
      },
    ],
    cases: [
      {
        term: {
          zh: '商標註冊',
          en: 'Trademark Registration',
        },
        desc: {
          zh: '品牌名稱要在台灣或海外註冊時，律師協助事前檢索、規劃類別，並處理核駁與異議。',
          en: 'Clearance searches, class strategy, and prosecution of applications in Taiwan and abroad, including office actions and oppositions.',
        },
      },
      {
        term: {
          zh: '商標侵權',
          en: 'Trademark Infringement',
        },
        desc: {
          zh: '發現他人使用近似商標或被指控侵權時，律師評估混淆可能性，發函、談判或提起訴訟。',
          en: 'Assessing likelihood of confusion, then enforcing or defending through demand letters, negotiation, or litigation.',
        },
      },
      {
        term: {
          zh: '專利申請',
          en: 'Patent Filing & Portfolio Strategy',
        },
        desc: {
          zh: '研發成果要申請專利時，律師協助評估可專利性，規劃申請時點與國內外佈局。',
          en: 'Patentability assessments, filing strategy, and domestic and international portfolio planning for R&D results.',
        },
      },
      {
        term: {
          zh: '專利侵權訴訟',
          en: 'Patent Infringement Litigation',
        },
        desc: {
          zh: '產品被控侵害專利或發現對手抄襲技術時，律師分析侵權比對與專利有效性，進行訴訟攻防。',
          en: 'Claim analysis, invalidity defenses, and litigation strategy — whether you are accused of infringement or a competitor has copied your technology.',
        },
      },
      {
        term: {
          zh: '著作權侵害',
          en: 'Copyright Infringement',
        },
        desc: {
          zh: '程式、影音、出版品被重製或改作時，律師協助蒐證與求償；被控侵權時評估合理使用抗辯。',
          en: 'Evidence gathering and damages claims when software, audiovisual works, or publications are copied — and fair use defenses when you are the one accused.',
        },
      },
      {
        term: {
          zh: '營業秘密外洩',
          en: 'Trade Secret Misappropriation',
        },
        desc: {
          zh: '機密資料疑似外流時，律師與資安顧問進行數位鑑識，保全證據後提起民事求償或刑事告訴。',
          en: 'Digital forensics with security consultants to trace suspected leaks, preserve evidence, and pursue civil damages or criminal complaints.',
        },
      },
      {
        term: {
          zh: '離職員工帶走機密',
          en: 'Departing Employee Data Theft',
        },
        desc: {
          zh: '員工離職前大量下載檔案或跳槽帶走客戶資料，律師協助鑑識調查，並依保密與競業條款追究。',
          en: 'Forensic investigation of mass downloads and data taken to a competitor, with enforcement of confidentiality and non-compete obligations.',
        },
      },
      {
        term: {
          zh: '仿冒品處理',
          en: 'Counterfeit Goods',
        },
        desc: {
          zh: '市場或電商平台出現仿冒品時，律師協助蒐證、下架、向海關申請查扣並追究責任。',
          en: 'Evidence collection, platform takedowns, customs seizure applications, and enforcement against counterfeiters.',
        },
      },
      {
        term: {
          zh: '授權合約',
          en: 'Licensing Agreements',
        },
        desc: {
          zh: '技術或品牌要授權他人使用時，律師起草與審閱合約，明訂範圍、權利金與違約處理。',
          en: 'Drafting and reviewing licensing and technology transfer agreements — scope, royalties, and breach remedies.',
        },
      },
      {
        term: {
          zh: '網路盜圖盜文',
          en: 'Online Content Piracy',
        },
        desc: {
          zh: '網站圖片、文章被整批盜用時，律師協助保全網頁證據、通知平台下架並求償。',
          en: 'Preserving web evidence, issuing platform takedown notices, and claiming compensation when images or articles are lifted wholesale.',
        },
      },
      {
        term: {
          zh: '跨境侵權維權',
          en: 'Cross-Border IP Enforcement',
        },
        desc: {
          zh: '侵權發生在海外或橫跨多國時，本所與美國、英國律師協作，規劃各地蒐證與維權策略。',
          en: 'Coordinated evidence gathering and enforcement strategy across jurisdictions, working with US and UK counsel.',
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
          zh: '還有機會，但要把握時間。商標註冊公告後三個月內，可以向經濟部智慧財產局提出異議；之後原則上五年內可以申請評定，撤銷其註冊。若對方是知道你先使用仍惡意搶註，商標法有撤銷的依據，但你必須拿得出先使用的證據，例如出貨紀錄、廣告、網頁存檔。越早處理，選項越多，建議先讓律師評估證據再決定怎麼走。',
          en: 'Yes, but timing matters. An opposition can be filed with the Taiwan Intellectual Property Office within three months of the registration\'s publication; after that, an invalidation action is generally available within five years. If the registrant knew of your prior use and filed in bad faith, the Trademark Act provides grounds for cancellation — but you must produce evidence of prior use, such as sales records, advertising, and archived web pages. The earlier you act, the more options remain open.',
        },
      },
      {
        q: {
          zh: '發現離職員工把公司機密帶去競爭對手，可以告嗎？',
          en: 'A former employee took our confidential files to a competitor. Can we sue?',
        },
        a: {
          zh: '可以，營業秘密外洩依營業秘密法有民事求償與刑事責任。但有兩個前提：公司平時要有合理保密措施，例如權限分級、保密協議；而且要能證明資料確實被帶走。發現當下不要先質問對方，第一步是保全電腦與雲端紀錄。本所與資訊安全顧問協作進行數位鑑識，把下載、外傳檔案的軌跡固定成證據，再決定提告或談判。',
          en: 'Yes — under Taiwan\'s Trade Secrets Act, misappropriation carries both civil and criminal liability. Two prerequisites: your company must have taken reasonable confidentiality measures (access controls, NDAs), and you must be able to prove the data was actually taken. Do not confront the employee first — preserve the computers and cloud logs. We work with information security consultants to forensically document download and transfer trails before deciding whether to sue or negotiate.',
        },
      },
      {
        q: {
          zh: '網路上的圖和文章被盜用，可以要求賠償嗎？',
          en: 'My images and articles were stolen online. Can I claim damages?',
        },
        a: {
          zh: '可以。盜圖、盜文屬於著作權侵害，可以要求下架和損害賠償；情節明確的也可以提刑事告訴，但告訴原則上要在知道行為人後六個月內提出。能求償多少，取決於你能證明的損害，所以發現時先完整保全證據：頁面截圖、網址、時間，必要時辦理公證，不要只留一張截圖就發文開戰。',
          en: 'Yes. Unauthorized copying of images or articles is copyright infringement — you can demand takedown and claim damages, and clear-cut cases may support a criminal complaint, which generally must be filed within six months of identifying the infringer. Recovery depends on the loss you can prove, so preserve complete evidence first — full-page captures, URLs, timestamps, notarized if necessary — before going public.',
        },
      },
      {
        q: {
          zh: '專利侵權訴訟要在哪個法院打？會不會拖很久？',
          en: 'Which court hears patent infringement cases in Taiwan, and how long do they take?',
        },
        a: {
          zh: '專利、商標、著作權與營業秘密的民事訴訟，原則上由智慧財產及商業法院審理，法院位於新北市板橋。專利侵權訴訟通常伴隨專利有效性的攻防，時間常以年計，起訴前的侵權比對和證據準備往往影響成敗。值不值得打、要在台灣還是海外打，本所會先做完整評估，必要時協同美國、英國律師規劃跨境策略。',
          en: 'Civil IP cases — patent, trademark, copyright, and trade secret — are generally heard by the Intellectual Property and Commercial Court, located in Banqiao, New Taipei City. Patent litigation typically involves validity challenges alongside infringement, so timelines are often measured in years, and pre-suit claim analysis and evidence preparation carry significant weight. We assess whether and where litigation makes sense, coordinating with US and UK counsel on cross-border strategy where needed.',
        },
      },
    ],
  },
  'dispute-resolution': {
    metaDesc: {
      zh: '安理國際法律事務所（台北）處理國際商務仲裁、跨國訴訟、涉外契約爭議、國際貿易糾紛、外國判決承認與執行及跨境債權回收，與美國、英國執業律師長期協作，以中英文處理跨境爭議。初次諮詢採預約制。',
      en: 'ANLI, a Taipei-based law firm, handles international commercial arbitration, cross-border litigation, contract and trade disputes, recognition and enforcement of foreign judgments, and cross-border debt recovery, working with US and UK counsel across jurisdictions. Consultations by appointment.',
    },
    intro: [
      {
        zh: '跟國外客戶簽了約，對方不付款；海外供應商交貨有問題，合約卻約定在外國仲裁；或者您拿到一份外國法院判決，想在台灣執行。這類涉外契約爭議和國際貿易糾紛，第一個問題往往不是輸贏，而是：該在哪裡打、用哪一國的法律打。',
        en: 'A foreign customer refuses to pay. An overseas supplier delivers defective goods, but the contract points to arbitration abroad. Or you hold a foreign judgment and need to enforce it in Taiwan. In cross-border disputes, the first question is rarely who wins — it is where to fight, and under which law.',
      },
      {
        zh: '管轄權和準據法，通常在簽約時就由合約裡的仲裁條款和準據法條款決定了。條款寫得不利，事後很難翻盤。所以糾紛發生時，第一步是把合約翻出來，確認爭端解決條款怎麼寫，再決定要仲裁、跨國訴訟，還是先透過調解與和解處理。',
        en: 'Jurisdiction and governing law are usually settled the day you sign, by the arbitration and governing-law clauses in the contract — and a badly drafted clause is hard to undo later. So when a dispute arises, start with the contract: confirm what the dispute-resolution clause actually says, then decide between arbitration, litigation, and mediation or a negotiated settlement.',
      },
      {
        zh: '安理的主持律師楊佳陵博士在美國柏克萊取得法律科學博士，事務所並與美國、英國執業律師長期協作。無論是國際商務仲裁、跨國訴訟、外國判決在台灣的承認與執行，或跨境債權回收，我們都能用中英文直接處理，並協調各地律師分工。',
        en: 'Our principal attorney, Dr. Chia-Ling Yang, holds a J.S.D. from UC Berkeley, and the firm works closely with practicing US and UK lawyers. From international arbitration and cross-border litigation to enforcing foreign judgments in Taiwan and recovering debts abroad, we work directly in Chinese and English and coordinate counsel across jurisdictions.',
      },
    ],
    cases: [
      {
        term: {
          zh: '國際商務仲裁',
          en: 'International Commercial Arbitration',
        },
        desc: {
          zh: '與外國企業約定以仲裁解決爭議時，律師代理仲裁程序攻防，並先評估仲裁地與規則的利弊。',
          en: 'When your contract calls for arbitration, we act as counsel throughout the proceedings and assess the seat and rules before you commit to a strategy.',
        },
      },
      {
        term: {
          zh: '跨國訴訟',
          en: 'Cross-Border Litigation',
        },
        desc: {
          zh: '糾紛牽涉多國法院時，律師協助評估在哪裡起訴較有利，並協調各國律師同步進行程序。',
          en: 'Where a dispute spans several court systems, we advise on the choice of forum and coordinate parallel proceedings with local counsel.',
        },
      },
      {
        term: {
          zh: '外國判決執行',
          en: 'Enforcement of Foreign Judgments',
        },
        desc: {
          zh: '在國外拿到勝訴判決後，須經台灣法院許可才能執行，律師代理訴請許可與後續強制執行。',
          en: 'A foreign judgment cannot be enforced in Taiwan until a court grants leave in a separate action; we bring that action and handle the ensuing execution.',
        },
      },
      {
        term: {
          zh: '國際貿易糾紛',
          en: 'International Trade Disputes',
        },
        desc: {
          zh: '進出口貨物瑕疵、遲延交貨或拒付貨款，律師整理單據與證據，以談判、仲裁或訴訟求償。',
          en: 'Defective goods, late delivery, or unpaid invoices in import-export deals — we organize the documentary evidence and pursue claims through negotiation, arbitration, or litigation.',
        },
      },
      {
        term: {
          zh: '涉外契約爭議',
          en: 'Cross-Border Contract Disputes',
        },
        desc: {
          zh: '與外國公司的合約發生違約，律師先釐清準據法與管轄權，再擬定求償或防禦策略。',
          en: 'When a contract with a foreign party is breached, we first pin down governing law and jurisdiction, then build the claim or the defense.',
        },
      },
      {
        term: {
          zh: '跨境債權回收',
          en: 'Cross-Border Debt Recovery',
        },
        desc: {
          zh: '外國客戶欠款不還，律師查明對方資產所在地，選擇可行程序跨境追討，控制求償成本。',
          en: 'For unpaid foreign debtors, we locate assets, choose the most workable route to recovery, and keep collection costs proportionate.',
        },
      },
      {
        term: {
          zh: '仲裁條款審閱',
          en: 'Arbitration Clause Review',
        },
        desc: {
          zh: '簽約前審閱仲裁條款的仲裁地、機構、語言與規則，避免日後被迫在不利條件下仲裁。',
          en: 'Before you sign, we review the seat, institution, language, and rules in the arbitration clause so you are not locked into an unfavorable forum later.',
        },
      },
      {
        term: {
          zh: '跨國和解談判',
          en: 'Settlement Negotiation & Mediation',
        },
        desc: {
          zh: '不是每個案子都值得打到底，律師評估勝算與執行可能性後，代理談判爭取合理和解條件。',
          en: 'Not every case is worth fighting to the end; after weighing the merits and enforceability, we negotiate settlement terms that protect your position.',
        },
      },
      {
        term: {
          zh: '外國仲裁判斷執行',
          en: 'Enforcement of Foreign Arbitral Awards',
        },
        desc: {
          zh: '在境外取得仲裁判斷後，可聲請台灣法院裁定承認後執行，律師代理聲請與執行程序。',
          en: 'A foreign arbitral award can be recognized by a Taiwan court order and then enforced; we handle the recognition application and execution.',
        },
      },
      {
        term: {
          zh: '跨國合資爭議',
          en: 'Joint Venture Disputes',
        },
        desc: {
          zh: '與外國夥伴合資經營生變，律師處理股東協議解釋、出場機制與仲裁或訴訟的整體布局。',
          en: 'When a venture with a foreign partner breaks down, we work through the shareholders\' agreement, exit mechanics, and the overall arbitration or litigation strategy.',
        },
      },
      {
        term: {
          zh: '國際授權糾紛',
          en: 'International Licensing Disputes',
        },
        desc: {
          zh: '技術或品牌授權橫跨多國，發生權利金或違約爭議時，律師釐清管轄與準據法並代理求償。',
          en: 'In multi-jurisdictional technology or brand licensing, we resolve royalty and breach disputes, clarifying forum and governing law before pressing the claim.',
        },
      },
      {
        term: {
          zh: '跨境詐欺求償',
          en: 'Cross-Border Fraud & Asset Tracing',
        },
        desc: {
          zh: '款項遭境外詐騙或轉走，律師與資安顧問合作追蹤金流與加密貨幣，評估凍結及求償途徑。',
          en: 'Where funds have been diverted abroad, we work with forensic and crypto-tracing consultants to follow the money and assess freezing and recovery options.',
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
          zh: '不行，要先經台灣法院許可才能執行。外國確定判決在台灣原則上受承認，但要強制執行，須另外向法院起訴請求許可執行。法院會審查：外國法院有無管轄權、敗訴一方是否受合法通知、內容有無違反台灣公序良俗、該國是否也承認台灣的判決。建議先備妥判決正本、確定證明與中文譯本再行動。',
          en: 'No — you first need a Taiwan court\'s leave to enforce. Foreign final judgments are generally recognized, but enforcement requires a separate court action for a judgment permitting execution. The court examines whether the foreign court had jurisdiction, whether the losing party was properly served, whether the judgment offends Taiwan\'s public policy, and whether that country reciprocally recognizes Taiwanese judgments. Prepare the original judgment, proof of finality, and a Chinese translation before you start.',
        },
      },
      {
        q: {
          zh: '合約寫要去新加坡仲裁，我可以改在台灣打官司嗎？',
          en: 'Our contract says disputes go to arbitration in Singapore. Can I sue in Taiwan instead?',
        },
        a: {
          zh: '原則上不行。有效的仲裁條款會排除法院訴訟；你若直接在台灣起訴，對方可以提出妨訴抗辯，法院通常會裁定停止訴訟，命先提付仲裁。所以第一步是檢視條款是否有效、涵蓋範圍多大。如果條款有效，就要評估在新加坡仲裁的成本與勝算，或透過談判與和解在程序外解決。安理可與當地及英美律師協作處理。',
          en: 'Generally no. A valid arbitration clause excludes court litigation; if you sue anyway, the other side can invoke the clause and the court will typically stay the case and direct the parties to arbitrate. The first step is to examine whether the clause is valid and what it covers. If it holds, we assess the cost and merits of arbitrating at the designated seat — or pursue a negotiated settlement outside the proceedings, coordinating with local, US, and UK counsel as needed.',
        },
      },
      {
        q: {
          zh: '國外客戶一直拖欠貨款，跨境要怎麼追？',
          en: 'A foreign customer keeps defaulting on payments. How do I recover the debt across borders?',
        },
        a: {
          zh: '可以追，但先確認三件事：合約的準據法與管轄權約定、對方與資產在哪個國家、債權時效還剩多久。跨境債權回收通常先發函與談判，談不成再依合約走仲裁或跨國訴訟；起訴地點盡量選在對方資產所在地，執行才有實益。各國時效長短不同，拖越久選項越少，建議及早處理。安理可用中英文直接與對方及外國律師交涉。',
          en: 'Yes, but check three things first: the governing-law and jurisdiction clauses, where the debtor and its assets are located, and how much of the limitation period remains. Cross-border debt recovery usually starts with a demand letter and negotiation, then arbitration or litigation under the contract — ideally in a forum where the debtor holds assets, so a win can actually be enforced. Limitation periods vary by country and options narrow over time, so act early. We deal with the debtor and foreign counsel directly in English.',
        },
      },
      {
        q: {
          zh: '簽跨國合約時，仲裁條款要注意什麼？',
          en: 'What should I watch for in an arbitration clause when signing a cross-border contract?',
        },
        a: {
          zh: '至少寫清楚四件事：仲裁地、仲裁機構與適用規則、仲裁語言、契約準據法。這些會直接決定日後糾紛在哪裡解決、用哪國法律、成本多高。建議以仲裁機構公布的示範條款為底稿，不要自創混合條款，也避免同時約定仲裁又約定法院管轄造成矛盾。簽約前請律師審一次條款，比出事後補救省得多。',
          en: 'Spell out at least four things: the seat of arbitration, the institution and its rules, the language of the proceedings, and the governing law. These determine where a future dispute is fought, under which law, and at what cost. Start from the institution\'s model clause rather than drafting a hybrid from scratch, and avoid contradictory terms that provide for both arbitration and court jurisdiction. A short review before signing is far cheaper than fixing the clause after a dispute has begun.',
        },
      },
    ],
  },
  'corporate-governance': {
    metaDesc: {
      zh: '股東糾紛、經營權爭奪、合夥拆夥怎麼處理？安理國際法律事務所位於台北，提供公司法諮詢、法令遵循制度建置、內部調查、個資法與洗錢防制合規服務，協助中小企業與新創經營者處理股東會與董事會爭議。初次諮詢採預約制。',
      en: 'ANLI, a Taipei law firm, advises on shareholder disputes, corporate control contests, and shareholder and board meeting governance, and builds compliance programs covering internal investigations, data protection, and anti-money laundering. Initial consultations by appointment.',
    },
    intro: [
      {
        zh: '公司做起來了，股東卻開始吵：有人不出錢也不做事、有人私下另起爐灶、有人想把你踢出經營層。中小企業和新創最常見的就是股東糾紛、合夥拆夥、經營權爭奪，往往在股東會或董事會上一次爆發，拖越久對公司傷害越大。',
        en: 'The company finally takes off — and the shareholders start fighting. One stops contributing, another quietly starts a competing business, a third wants you out of management. For SMEs and startups, shareholder disputes, partnership break-ups, and fights for corporate control often erupt at a shareholders\' or board meeting, and the longer they drag on, the more the company suffers.',
      },
      {
        zh: '提醒一件事：股東會決議若召集程序或決議方法有瑕疵，依公司法要自決議之日起三十日內訴請法院撤銷，逾期就不能再以程序瑕疵爭執。開會通知、委託書、表決、議事錄，每一步都要留下紀錄。安理能在開會前幫你把程序做對，爭議發生後協助保全證據、進行訴訟。',
        en: 'One point worth knowing early: under Taiwan\'s Company Act, a resolution tainted by defects in the convening procedure or voting method can only be set aside if an action is filed within 30 days of the resolution; after that, the procedural defect can no longer be raised. Every step — meeting notices, proxies, voting, minutes — should leave a record. ANLI helps clients get the procedure right before the meeting, and preserves evidence and litigates once a dispute breaks out.',
      },
      {
        zh: '另一塊是法令遵循：個資法、洗錢防制、公司治理的要求越來越多，出事後才補救成本最高。我們協助企業建置法遵制度與吹哨者機制，遇到檢舉或掏空疑慮時進行內部調查，並與資安顧問合作做數位鑑識，必要時代表公司因應主管機關調查與跨境監理事務。',
        en: 'The other half of this practice is compliance. Data protection, anti-money laundering, and corporate governance requirements keep expanding, and fixing things after an incident is always the most expensive option. We help companies build compliance programs and whistleblowing channels, run internal investigations — working with digital forensics specialists where needed — and represent them before regulators, including on cross-border regulatory matters.',
      },
    ],
    cases: [
      {
        term: {
          zh: '股東糾紛',
          en: 'Shareholder Disputes',
        },
        desc: {
          zh: '股東間為出資、分紅或經營方向翻臉，律師協助談判、擬定股東協議或代理訴訟，避免僵局拖垮公司。',
          en: 'When shareholders fall out over contributions, dividends, or direction, we negotiate, draft shareholder agreements, and litigate before deadlock damages the company.',
        },
      },
      {
        term: {
          zh: '經營權爭奪',
          en: 'Corporate Control Contests',
        },
        desc: {
          zh: '股東會改選、委託書徵求或解任董事的攻防，律師規劃合法程序，並即時聲請假處分等保全措施。',
          en: 'Board elections, proxy solicitation, and director removal battles: we plan lawful procedures and move quickly on injunctions and other interim relief.',
        },
      },
      {
        term: {
          zh: '股東會爭議',
          en: 'Shareholders\' Meeting Disputes',
        },
        desc: {
          zh: '召集程序或決議方法有瑕疵，律師評估提起撤銷或確認無效訴訟，也協助公司把會開得合法。',
          en: 'Where the convening procedure or voting method is defective, we assess actions to set aside the resolution or confirm its nullity — and help companies run their meetings correctly in the first place.',
        },
      },
      {
        term: {
          zh: '董事會運作',
          en: 'Board Governance',
        },
        desc: {
          zh: '董事會召集、利益迴避與議事程序常出爭議，律師協助設計治理規則，重大會議前先把關。',
          en: 'Convening rules, conflicts of interest, and meeting procedure are frequent flashpoints; we design governance rules and vet critical meetings in advance.',
        },
      },
      {
        term: {
          zh: '合夥拆夥',
          en: 'Partnership Dissolution',
        },
        desc: {
          zh: '拆夥時的帳目結算、客戶與商標歸屬最容易吵，律師協助清算、簽妥拆夥協議，避免事後互告。',
          en: 'When partners split, accounts, clients, and trademarks are the usual battlegrounds; we handle the settlement and document the break-up to prevent later claims.',
        },
      },
      {
        term: {
          zh: '公司法諮詢',
          en: 'Company Act Advisory',
        },
        desc: {
          zh: '增資、股權規劃、章程修訂或閉鎖性公司設計，律師依公司實際狀況給可以執行的意見。',
          en: 'Capital increases, equity structuring, amendments to the articles, and close-company planning — practical advice tailored to how your company actually operates.',
        },
      },
      {
        term: {
          zh: '法令遵循制度',
          en: 'Compliance Program Design',
        },
        desc: {
          zh: '協助企業盤點法規風險，建置法遵制度、內規與教育訓練，降低裁罰與負責人的法律責任風險。',
          en: 'We map regulatory risks and build compliance systems, internal rules, and training that reduce the exposure of both the company and its responsible persons.',
        },
      },
      {
        term: {
          zh: '內部調查',
          en: 'Internal Investigations',
        },
        desc: {
          zh: '接獲檢舉或發現異常金流時，由律師主導調查與訪談，搭配數位鑑識，讓程序合法、證據可用。',
          en: 'On a whistleblower report or suspicious cash flow, counsel leads the interviews and coordinates digital forensics so the process stays lawful and the evidence usable.',
        },
      },
      {
        term: {
          zh: '個資法遵循',
          en: 'Personal Data Compliance',
        },
        desc: {
          zh: '個資蒐集、外洩通報與跨境傳輸都有法定要求，律師協助建立制度並因應主管機關調查。',
          en: 'Data collection, breach notification, and cross-border transfers all carry statutory duties; we build compliant systems and handle regulator inquiries.',
        },
      },
      {
        term: {
          zh: '洗錢防制',
          en: 'Anti-Money Laundering',
        },
        desc: {
          zh: '金融機構、虛擬資產業者與指定行業都有洗錢防制義務，律師協助建置內控並因應檢查與裁罰。',
          en: 'Financial institutions, virtual-asset service providers, and designated businesses all carry AML obligations; we build internal controls and respond to examinations and sanctions.',
        },
      },
      {
        term: {
          zh: '背信掏空',
          en: 'Breach of Trust and Asset Stripping',
        },
        desc: {
          zh: '負責人或經理人涉嫌掏空公司資產，律師協助蒐證、提起刑事告訴，或為被告進行答辯。',
          en: 'Where management is suspected of siphoning company assets, we gather evidence and file criminal complaints — or defend those accused.',
        },
      },
      {
        term: {
          zh: '吹哨者處理',
          en: 'Whistleblower Programs & Response',
        },
        desc: {
          zh: '建置保密檢舉管道，收到吹哨後由律師規劃調查與處置，降低報復與洩密爭議的風險。',
          en: 'We design confidential reporting channels and, when a report comes in, structure the investigation and follow-up to manage retaliation and confidentiality risks.',
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
          zh: '先講結論：不能直接把股東踢走。股份是股東的財產，除非他同意轉讓或符合法定的特殊情形，否則無法強制排除。實務上多半是協商收購股份、透過股東會改組經營層；僵局嚴重時，符合持股要件的股東也可以聲請法院裁定解散。建議先盤點雙方持股比例和章程規定，再決定談判或訴訟策略，越早處理籌碼越多。',
          en: 'Generally, no — shares are the shareholder\'s property, and a shareholder cannot simply be expelled without their agreement or a specific statutory basis. In practice the realistic options are a negotiated buy-out, replacing management through the shareholders\' meeting, or, in a severe deadlock, a petition for court-ordered dissolution by shareholders who meet the statutory thresholds. Start by reviewing the shareholding structure and the articles of incorporation — the earlier you act, the more leverage you keep.',
        },
      },
      {
        q: {
          zh: '股東會決議有問題，多久內要提告？',
          en: 'How long do I have to challenge a shareholders\' meeting resolution?',
        },
        a: {
          zh: '結論：召集程序或決議方法違法的，要自決議之日起三十日內向法院訴請撤銷，逾期就不能再以程序瑕疵爭執。如果是決議內容本身違反法令或章程，則決議無效，不受三十日限制。時間很短，發現開會有問題，請立刻保存開會通知、議事錄、錄音等證據並諮詢律師。',
          en: 'If the defect lies in the convening procedure or the voting method, you must bring an action to set aside the resolution within 30 days of its adoption; after that, the procedural defect can no longer be raised. If the content of the resolution itself violates the law or the articles, the resolution is void, with no such deadline. The window is short — preserve the meeting notice, minutes, and any recordings immediately and seek advice.',
        },
      },
      {
        q: {
          zh: '公司收到員工檢舉高層掏空，該怎麼處理？',
          en: 'An employee has reported senior management for embezzlement — what should we do?',
        },
        a: {
          zh: '結論：先保全證據，再啟動內部調查，不要急著攤牌。第一步保護檢舉人身分，避免打草驚蛇；第二步由律師主導調查，必要時搭配數位鑑識，固定電腦與帳務紀錄；查證屬實再評估解任、民事求償或刑事告訴。程序做錯可能讓證據不能用，也可能被主張對吹哨者報復，建議及早讓外部律師介入。',
          en: 'Preserve evidence first, then investigate — do not confront anyone prematurely. Protect the reporter\'s identity, have counsel lead the investigation with digital forensics where needed to secure computers and accounting records, and only then decide on removal, civil claims, or criminal complaints. A flawed process can render evidence unusable and invite retaliation claims, so bring in outside counsel early.',
        },
      },
      {
        q: {
          zh: '合夥做生意要拆夥，錢怎麼算？',
          en: 'We\'re splitting up a business partnership — how is the money divided?',
        },
        a: {
          zh: '結論：有簽合夥契約就照契約；沒有就依民法，退夥或解散時結算合夥財產，原則上按出資比例分配損益。實務上最常吵的是帳目不清、客戶和商標歸誰。拆夥前先把帳冊和對話紀錄保存好，由律師協助結算、簽好拆夥協議，才不會拆完還被追債或互告。',
          en: 'If there is a written partnership agreement, it governs. Without one, the Civil Code applies: on withdrawal or dissolution the partnership assets are settled, with profits and losses shared in proportion to contributions as the default. The usual fights are over unclear accounts and who keeps the clients and trademarks — preserve the books and correspondence, have counsel run the settlement, and sign a dissolution agreement.',
        },
      },
    ],
  },
  'cross-border-business': {
    metaDesc: {
      zh: '安理國際法律事務所提供跨境併購、外人投資申請（投審會）、合資協議與國際商務合約談判等法律服務，並與美英律師共同辦案，協助英文契約審閱與台商海外布局。台北市中正區，初次諮詢採預約制。',
      en: 'Yang & Associates Law Firm (ANLI) in Taipei advises on cross-border M&A, Taiwan foreign investment approvals, joint ventures, and international commercial contracts, working as co-counsel with US and UK attorneys. Initial consultations by appointment.',
    },
    intro: [
      {
        zh: '跟外國客戶簽了英文合約，出事才發現管轄權約定在國外；合資談好了出資，股權和退場機制卻沒寫進協議；原廠一紙通知就終止經銷代理，庫存和客戶不知道怎麼辦。跨國生意的糾紛，多半在簽約那一刻就已經埋下。',
        en: 'Cross-border disputes are usually built into the deal itself: an English contract signed without review, a joint venture with no exit mechanism, a distributorship terminated by a single notice. By the time something goes wrong, the terms are already set.',
      },
      {
        zh: '先提醒兩件常被忽略的事。外國人來台投資，多數情況要先取得經濟部投資審議司（原投審會）核准，程序沒走完，股權登記和後續增資都會卡住。另外，合約的準據法與管轄條款，決定將來在哪個國家、用哪國法律解決爭議，簽約前務必確認。',
        en: 'Two points are often overlooked. Most foreign investment into Taiwan requires prior approval from the Department of Investment Review, MOEA (formerly the Investment Commission) before share registration can proceed. And the governing-law and jurisdiction clauses in your contract decide where, and under which law, any dispute will be resolved. Check them before you sign.',
      },
      {
        zh: '安理的主持律師在美國柏克萊取得法學博士，英文契約審閱與跨境談判是我們的日常業務。案件涉及美國、英國時，我們與當地執業律師共同辦案（co-counsel），由台北統籌進度，您不必自己面對外國律師。',
        en: 'Our managing attorney holds a J.S.D. from UC Berkeley, and English contract review and cross-border negotiation are our daily work. Where a matter touches the US or UK, we act as co-counsel with local attorneys, coordinating everything from Taipei so you deal with one team.',
      },
    ],
    cases: [
      {
        term: {
          zh: '外人投資申請',
          en: 'Foreign Investment Approval',
        },
        desc: {
          zh: '外國股東要來台設公司或入股，律師協助向投資審議司（原投審會）申請核准並辦理登記。',
          en: 'Approval filings with Taiwan\'s Department of Investment Review (formerly the Investment Commission) for foreign shareholders establishing or investing in Taiwanese companies.',
        },
      },
      {
        term: {
          zh: '跨境併購',
          en: 'Cross-Border M&A',
        },
        desc: {
          zh: '收購外國公司或把股權賣給外資，律師規劃交易架構、執行盡職調查並審閱併購契約。',
          en: 'Deal structuring, due diligence, and transaction documents for acquiring foreign targets or selling Taiwanese equity to overseas buyers.',
        },
      },
      {
        term: {
          zh: '合資協議',
          en: 'Joint Venture Agreements',
        },
        desc: {
          zh: '與外國夥伴合資設公司或設廠，律師協助談判出資、股權比例、經營控制與退場機制。',
          en: 'Negotiating capital contributions, control, deadlock, and exit terms for joint ventures with foreign partners.',
        },
      },
      {
        term: {
          zh: '英文契約審閱',
          en: 'English Contract Review',
        },
        desc: {
          zh: '收到外國客戶的英文合約，律師逐條審閱、用中文說明風險，並直接提供英文修改文字。',
          en: 'Clause-by-clause review of English-language agreements, with risks explained in plain Chinese and revisions drafted in English.',
        },
      },
      {
        term: {
          zh: '國際商務合約談判',
          en: 'International Contract Negotiation',
        },
        desc: {
          zh: '跨國買賣、服務或授權合約，律師陪同談判，把付款、違約與爭議解決條款談清楚。',
          en: 'Negotiating payment, liability, and dispute-resolution terms in cross-border sales, services, and licensing deals.',
        },
      },
      {
        term: {
          zh: '經銷代理合約',
          en: 'Distribution & Agency Agreements',
        },
        desc: {
          zh: '取得或授予國外品牌經銷代理權，律師審閱獨家條款、業績門檻與終止後的庫存處理。',
          en: 'Reviewing exclusivity, sales targets, and termination and post-termination inventory terms in cross-border distribution and agency arrangements.',
        },
      },
      {
        term: {
          zh: '保密協議NDA',
          en: 'NDAs & Confidentiality',
        },
        desc: {
          zh: '與外國廠商洽談合作前，律師草擬或審閱NDA，界定保密範圍、期間與違約責任。',
          en: 'Drafting and reviewing NDAs before cross-border talks: scope, term, permitted use, and remedies for breach.',
        },
      },
      {
        term: {
          zh: '出口管制合規',
          en: 'Export Controls & Trade Compliance',
        },
        desc: {
          zh: '產品或技術涉及貿易管制，律師協助判斷是否屬管制貨品、申請輸出許可並建立內控。',
          en: 'Assessing whether products or technology are controlled items, obtaining export permits, and building internal compliance programs.',
        },
      },
      {
        term: {
          zh: '台商海外布局',
          en: 'Outbound Investment',
        },
        desc: {
          zh: '赴美國或東南亞設子公司、投資設廠，律師與當地律師合作規劃控股架構與投資契約。',
          en: 'Working with local counsel to structure holding companies and investment agreements for Taiwanese businesses expanding abroad.',
        },
      },
      {
        term: {
          zh: '跨國供應鏈合約',
          en: 'Supply Chain Contracts',
        },
        desc: {
          zh: '供應商斷貨、品質瑕疵或交期延誤，律師檢視合約責任分配，協助求償或重新談判。',
          en: 'Reviewing liability allocation in supply agreements and pursuing claims over supply failures, defects, or delays.',
        },
      },
      {
        term: {
          zh: '國際貿易糾紛',
          en: 'Cross-Border Trade Disputes',
        },
        desc: {
          zh: '跨境買賣收不到貨款或貨物有爭議，律師評估管轄與準據法，協助催收、仲裁或訴訟。',
          en: 'Assessing jurisdiction and governing law, then pursuing recovery through negotiation, arbitration, or litigation.',
        },
      },
      {
        term: {
          zh: '跨境技術授權',
          en: 'Technology Licensing',
        },
        desc: {
          zh: '將技術或商標授權外國廠商使用，律師草擬授權契約，處理權利金、地域與侵權條款。',
          en: 'Drafting license agreements covering royalties, territory, and infringement for technology and trademark licensing abroad.',
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
          zh: '多數情況要。外國人來台投資，原則上須先經經濟部投資審議司（原投審會）核准，才能辦理公司設立登記或股權變更。投資金額與產業不同，文件和審查程序也不同；陸資另有較嚴格的限制。建議在匯款、簽約前先確認程序，避免資金進來卻無法完成登記。',
          en: 'In most cases, yes. Foreign investment into Taiwan generally requires prior approval from the Department of Investment Review, MOEA (formerly the Investment Commission) before company registration or a share transfer can be completed. Requirements vary by investment amount and industry, and investment from mainland China is subject to much stricter rules. Confirm the procedure before wiring funds or signing anything.',
        },
      },
      {
        q: {
          zh: '英文合約看不太懂，可以先簽再說嗎？',
          en: 'Can I just sign an English contract and sort out the details later?',
        },
        a: {
          zh: '不建議。英文合約最會出問題的通常不是價格數量，而是準據法、管轄、賠償上限、智財歸屬這些放在後面的條款，出事時全靠它們。先簽再說，等於把談判籌碼交出去。英文契約審閱是我們的日常業務：逐條標出風險、用中文說明，並直接提供英文修改文字，讓您帶回談判桌。',
          en: 'We advise against it. The clauses that cause the most damage are rarely price and quantity—they are governing law, jurisdiction, liability caps, and IP ownership, buried near the end. Signing first means giving up your leverage. English contract review is our daily work: we flag risks clause by clause, explain them in plain terms, and draft the English revisions you can take back to the table.',
        },
      },
      {
        q: {
          zh: '跟外國公司談合作，什麼時候該簽保密協議（NDA）？',
          en: 'When should I sign an NDA with a foreign business partner?',
        },
        a: {
          zh: '在交出任何技術資料、客戶名單或報價之前就要簽。NDA要寫清楚保密範圍、使用目的、期間和違約責任，也要注意準據法與管轄——若約定只能在國外求償，將來成本會很高。對方提出的版本通常對它自己有利，簽名前值得花一點時間請律師看過。',
          en: 'Before you hand over any technical data, customer lists, or pricing. An NDA should clearly define scope, permitted use, duration, and remedies for breach—and watch the governing-law and jurisdiction clauses, since being forced to sue abroad can be prohibitively expensive. The other side\'s template usually favors them; have a lawyer review it before you sign.',
        },
      },
      {
        q: {
          zh: '產品要出口，怎麼知道有沒有出口管制問題？',
          en: 'How do I know whether my products are subject to export controls?',
        },
        a: {
          zh: '先確認產品或技術是否列入戰略性高科技貨品清單；若屬管制貨品，輸出前要取得許可，出口到受管制或受制裁地區另有限制。要留意的是，美國出口管制規定可能因產品含美國技術而適用到台灣公司。我們可協助判斷是否受管制、申請許可，並建立內部審查流程。',
          en: 'Start by checking whether the product or technology appears on Taiwan\'s Strategic High-Tech Commodities list; controlled items require an export permit, and shipments to restricted or sanctioned destinations face additional limits. Note that US export controls can also reach Taiwanese companies when products incorporate US technology. We help determine whether controls apply, obtain permits, and set up internal screening procedures.',
        },
      },
    ],
  },
  'tax-wealth': {
    metaDesc: {
      zh: '安理國際法律事務所提供遺產稅、贈與稅與生前贈與規劃，運用信託與閉鎖性股份有限公司安排家族傳承，並代理復查、訴願、行政訴訟等稅務行政救濟，處理海外資產與CFC申報。初次諮詢採預約制。',
      en: 'Yang & Associates Law Firm (ANLI) in Taipei advises on estate and gift tax planning, trusts, family business succession, CFC compliance, and tax dispute resolution.',
    },
    intro: [
      {
        zh: '很多人是在收到國稅局的補稅通知後，才第一次認真面對稅的問題：長輩過世才發現名下財產比想像複雜、幾年前的一筆匯款被認定是贈與、海外帳戶從來沒有申報過。到了這一步，能做的往往只剩下補稅、繳罰鍰，和有限的救濟程序。',
        en: 'For many families, tax planning begins only after a deficiency notice arrives: a parent passes away leaving a more complicated estate than expected, a transfer made years ago is recharacterized as a taxable gift, or an offshore account was never reported. By that point, the options are usually limited to back taxes, penalties, and formal remedies.',
      },
      {
        zh: '稅務行政救濟有嚴格期限：對國稅局的核定不服，要先在法定期限內申請復查，之後才能提起訴願、再進入行政訴訟；任何一個階段逾期，處分就告確定。遺產稅則原則上應在被繼承人死亡之日起六個月內申報。期限一過，再有道理也很難補救。',
        en: 'Taiwan\'s tax remedies run on strict deadlines. A taxpayer must first apply to the tax authority for a recheck of the assessment, then file an administrative appeal, and only then bring the case before the administrative courts; missing any deadline makes the assessment final. Estate tax returns are generally due within six months of the date of death. Once a deadline passes, even a strong case is hard to save.',
      },
      {
        zh: '更重要的是，多數稅務風險其實可以事先避開。生前贈與怎麼分年安排、要不要用信託或閉鎖性股份有限公司持有家族資產、境外公司是否落入CFC申報範圍，都是能提前規劃的事。安理協助您在事情發生前把架構想清楚，也在爭議發生後陪您走完每一個救濟程序。',
        en: 'Most tax exposure, however, can be managed before it arises. Structuring lifetime gifts, holding family assets through trusts or a closely held company, and assessing whether offshore entities fall within Taiwan\'s CFC rules are all matters best addressed in advance. ANLI helps clients think through these structures early—and stands with them through every stage of a dispute when one occurs.',
      },
    ],
    cases: [
      {
        term: {
          zh: '生前贈與規劃',
          en: 'Lifetime Gift Planning',
        },
        desc: {
          zh: '想分年把財產移轉給子女，律師協助規劃贈與方式、時點與申報，降低日後被補稅的風險。',
          en: 'Structuring gifts to children across multiple years, advising on timing, form, and reporting to reduce the risk of later reassessment.',
        },
      },
      {
        term: {
          zh: '遺產稅申報',
          en: 'Estate Tax Filing',
        },
        desc: {
          zh: '親人過世後原則上須在六個月內申報遺產稅，律師協助盤點財產、確認扣除額並如期申報。',
          en: 'Helping heirs inventory the estate, apply available deductions, and file the estate tax return within the statutory deadline.',
        },
      },
      {
        term: {
          zh: '贈與稅爭議',
          en: 'Gift Tax Disputes',
        },
        desc: {
          zh: '親屬間資金往來被國稅局認定為贈與而補稅，律師協助說明資金性質並提出救濟。',
          en: 'Responding when family fund transfers are recharacterized as taxable gifts, presenting evidence and pursuing remedies.',
        },
      },
      {
        term: {
          zh: '遺囑信託',
          en: 'Testamentary Trusts',
        },
        desc: {
          zh: '擔心繼承人年幼或不擅理財，律師協助以遺囑設立信託，由受託人依約管理並分期給付。',
          en: 'Establishing a trust by will so that assets are managed by a trustee and distributed to young or vulnerable heirs over time.',
        },
      },
      {
        term: {
          zh: '他益信託',
          en: 'Lifetime Trusts',
        },
        desc: {
          zh: '想在生前透過信託照顧家人，律師協助設計信託架構並評估他益信託的贈與稅課稅問題。',
          en: 'Designing lifetime trust structures to provide for family members, including the gift tax treatment of trusts with third-party beneficiaries.',
        },
      },
      {
        term: {
          zh: '家族企業傳承',
          en: 'Family Business Succession',
        },
        desc: {
          zh: '家族公司要交棒，擔心股權分散或經營權旁落，律師協助設計持股架構與接班安排。',
          en: 'Planning the handover of a family company while keeping ownership consolidated and control within the family.',
        },
      },
      {
        term: {
          zh: '閉鎖性公司',
          en: 'Closely Held Companies',
        },
        desc: {
          zh: '想用閉鎖性股份有限公司集中家族持股，律師協助設計章程、股份轉讓限制與特別股。',
          en: 'Using Taiwan\'s close company regime to consolidate family shareholding through tailored articles, transfer restrictions, and special shares.',
        },
      },
      {
        term: {
          zh: '稅務復查訴願',
          en: 'Tax Recheck & Appeals',
        },
        desc: {
          zh: '收到補稅或罰鍰處分不服，律師協助在法定期限內申請復查、提起訴願，爭取撤銷或減輕。',
          en: 'Challenging assessments and penalties through recheck and administrative appeal within the statutory deadlines.',
        },
      },
      {
        term: {
          zh: '稅務行政訴訟',
          en: 'Tax Litigation',
        },
        desc: {
          zh: '訴願遭駁回後，律師協助向行政法院提起行政訴訟，整理帳證資料並建構法律主張。',
          en: 'Pursuing tax cases in the administrative courts after an unsuccessful appeal, marshaling accounting records, evidence, and legal arguments.',
        },
      },
      {
        term: {
          zh: '海外資產申報',
          en: 'Offshore Asset Reporting',
        },
        desc: {
          zh: '持有海外存款、股票或不動產，律師協助釐清海外所得申報義務，降低漏報受罰風險。',
          en: 'Clarifying reporting obligations for overseas deposits, securities, and real property to reduce penalty exposure.',
        },
      },
      {
        term: {
          zh: 'CFC申報',
          en: 'CFC Compliance',
        },
        desc: {
          zh: '透過境外公司投資或持有資產，律師協助評估CFC制度的影響，規劃申報或調整架構。',
          en: 'Assessing how Taiwan\'s controlled foreign company rules apply to offshore entities and advising on reporting or restructuring.',
        },
      },
      {
        term: {
          zh: '遺囑特留分',
          en: 'Wills & Reserved Portions',
        },
        desc: {
          zh: '想預立遺囑安排財產，律師協助確認遺囑法定方式與特留分規定，減少日後繼承糾紛。',
          en: 'Drafting wills that satisfy statutory formalities and respect reserved portion rules, reducing the risk of inheritance disputes.',
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
          zh: '原則上應在被繼承人死亡之日起六個月內申報，有正當理由可以在期限屆滿前以書面申請延長。逾期申報或漏報財產，可能被加徵罰鍰。要注意的是，遺產範圍常比想像中大：被繼承人死亡前二年內贈與配偶或特定近親的財產，依法仍會被視為遺產課稅。建議儘早盤點財產、儘早尋求協助，避免漏報。',
          en: 'The return is generally due within six months of the date of death, with an extension available on written application for legitimate reasons before the deadline. Late filing or omitted assets can trigger penalties. Note that the taxable estate is often larger than expected: gifts made to the spouse or certain close relatives within two years before death are brought back into the taxable estate by law. Start the inventory early and get advice before filing.',
        },
      },
      {
        q: {
          zh: '每年贈與子女現金，需要申報贈與稅嗎？',
          en: 'Do annual cash gifts to my children need to be reported?',
        },
        a: {
          zh: '同一年度內，贈與人的贈與總額在免稅額以內，原則上不必繳稅也不必申報；超過免稅額，就要在贈與行為後三十日內申報贈與稅。免稅額金額會隨主管機關公告調整，規劃前應先確認當年度數字。另外，即使金額在免稅額內，匯款憑證與資金用途最好留存，多年後國稅局仍可能要求說明。分年贈與是常見做法，但時點與財產種類都會影響稅負，建議整體規劃。',
          en: 'If a donor\'s total gifts within a calendar year stay within the annual exemption, no tax or filing is generally required; gifts exceeding the exemption must be reported within thirty days of the gift. The exemption amount is adjusted periodically by official announcement, so confirm the current figure before planning. Even for exempt gifts, keep transfer records and documentation of purpose—the tax authority may ask about them years later. Annual gifting is common, but timing and asset type both affect the tax outcome, so plan the whole picture rather than year by year.',
        },
      },
      {
        q: {
          zh: '收到國稅局補稅通知不服，可以不繳嗎？要怎麼救濟？',
          en: 'I received a tax assessment I disagree with. What can I do?',
        },
        a: {
          zh: '不能置之不理。第一步是在法定期限內申請復查；對復查決定仍不服，再提起訴願；訴願被駁回後，才能向行政法院提起行政訴訟。每個階段都有期限，逾期處分就確定。另外，已依法申請復查者，原則上暫緩移送強制執行；進入訴願階段，則可依規定繳納部分稅款或提供相當擔保，暫緩移送強制執行。建議收到處分書就儘早請律師評估，不要等期限快到才處理。',
          en: 'Do not ignore it. The first step is to apply for a recheck within the statutory period; if the recheck decision is still unfavorable, file an administrative appeal, and only after that can you bring the case before the administrative courts. Each stage has its own deadline, and missing one makes the assessment final. A pending recheck application generally defers referral for compulsory enforcement; at the appeal stage, paying part of the assessed tax or providing adequate security can defer enforcement. Have a lawyer assess the case as soon as the notice arrives, not when the deadline is closing in.',
        },
      },
      {
        q: {
          zh: '用境外公司持有資產，現在還需要申報嗎？CFC是什麼？',
          en: 'I hold assets through an offshore company. Do Taiwan\'s CFC rules affect me?',
        },
        a: {
          zh: '會受影響。台灣已施行受控外國企業（CFC）制度：個人與關係人對低稅負地區的境外公司合計持股達一定比率或具重大影響力時，即使盈餘沒有匯回台灣，也可能要視同分配課稅並辦理申報。過去把資產放在境外公司就「放著不動」的做法，現在可能產生申報義務與補稅、罰鍰風險。建議重新檢視持股架構，評估是否落入CFC範圍，再決定調整或申報方式。',
          en: 'Quite possibly. Under Taiwan\'s controlled foreign company regime, where an individual and related parties together hold a sufficient stake in—or exercise significant influence over—a company in a low-tax jurisdiction, its earnings may be taxed as deemed distributions even if nothing is remitted to Taiwan. Simply parking assets in an offshore company is no longer a passive arrangement: it can create filing obligations and exposure to back taxes and penalties. Review the structure, assess whether the CFC rules apply, and decide whether to restructure or report.',
        },
      },
    ],
  },
};
