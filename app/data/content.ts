/**
 * ═══════════════════════════════════════════════════════════════
 * CENTRALIZED CONTENT DATA
 * ═══════════════════════════════════════════════════════════════
 *
 * All static content and data structures for the Senpai Career site.
 * This file ensures consistency and makes content updates easier.
 */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   TYPE DEFINITIONS
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export interface FeatureData {
  icon: string;
  ja: string;
  en: string;
  jaD: string;
  enD: string;
}

export interface StepData {
  ja: string;
  en: string;
  jaD: string;
  enD: string;
}

export interface DetailedStepData extends StepData {
  jaLong: string;
  enLong: string;
  screenshot?: string;
  tips?: Array<{ ja: string; en: string }>;
}

export interface TestimonialData {
  i: string;           // Initials
  ja: string;          // Japanese name
  r: string;           // Japanese role
  rE: string;          // English role
  q: string;           // Japanese quote
  qE: string;          // English quote
  c: string;           // Color
  bg: string;          // Background color
  audience: "student" | "company" | "obog" | "both";  // Audience filter
  rating?: number;     // Star rating (1-5)
  date?: string;       // Date string
}

export interface FAQData {
  q: string;           // Japanese question
  qE: string;          // English question
  a: string;           // Japanese answer
  aE: string;          // English answer
  category: "students" | "companies" | "obog" | "platform";
}

export interface PricingTier {
  name: { ja: string; en: string };
  price: { ja: string; en: string };
  period: { ja: string; en: string };
  description: { ja: string; en: string };
  features: Array<{ ja: string; en: string; included: boolean }>;
  cta: {
    href: string;
    label: { ja: string; en: string };
    variant: "accent" | "ghost";
  };
  badge?: { ja: string; en: string };
  highlight?: boolean;
}

export interface OBSlotData {
  id: number;
  obog: { initials: string; name: string; ja: string; en: string } | null;
  status: "active" | "vacant" | "pending";
  assignedAt: string | null;
  rotationEnd: string | null;
}

export interface UniversityData {
  name: string;
  nameEn: string;
  logo?: string;
}

export interface TeamMember {
  name: string;
  role: { ja: string; en: string };
  photo?: string;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   HOMEPAGE DATA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export const features: FeatureData[] = [
  {
    icon: "graduation-cap",
    ja: "留学生の87%が知らない文化",
    en: "87% of students don't know",
    jaD: "OB/OG訪問は日本の就活の重要な文化ですが、留学生のほとんどがその存在を知りません。Senpaiがその壁を取り払います。",
    enD: "OB/OG visits are critical in Japanese job hunting, but most international students don't know they exist. Senpai breaks that barrier.",
  },
  {
    icon: "globe",
    ja: "日本語・英語バイリンガル",
    en: "Fully bilingual JP/EN",
    jaD: "既存のOB訪問アプリは日本語のみ。Senpai Careerは完全バイリンガル対応で、言語の壁を超えた就活を実現します。",
    enD: "Existing OB visit apps are Japanese-only. Senpai Career is fully bilingual, enabling job hunting beyond language barriers.",
  },
  {
    icon: "handshake",
    ja: "企業と留学生の架け橋",
    en: "Bridge between companies & students",
    jaD: "多様な人材を求める企業と、日本で活躍したい留学生。Senpaiが両者をつなぎ、自然な出会いを生みます。",
    enD: "Companies seeking diverse talent meet international students eager to work in Japan. Senpai creates natural connections.",
  },
];

export const steps: StepData[] = [
  { ja: "無料登録", en: "Sign Up Free", jaD: "コミュニティユーザーまたは企業として登録。プロフィールを入力するだけ。", enD: "Register as a community user or company. Just fill in your profile." },
  { ja: "OB/OGを検索", en: "Find OB/OG", jaD: "業界・企業でOB/OGを検索。興味のあるOB/OGに訪問を申し込み。", enD: "Search OB/OG by industry and company. Request a visit with the right OB/OG." },
  { ja: "キャリアを切り拓く", en: "Launch Your Career", jaD: "OB/OG訪問で企業のリアルを知り、就活を有利に進めよう。", enD: "Learn the real story through OB visits and get ahead in your job hunt." },
];

export const studentFeats = [
  { ja: "OB/OGにワンクリックで訪問申し込み", en: "One-click visit requests to OB/OG" },
  { ja: "日英バイリンガル完全対応", en: "Full JP/EN bilingual support" },
  { ja: "就活ロードマップ＆ESガイド", en: "Job hunting roadmaps & ES guides" },
];

export const bizFeats = [
  { ja: "採用パイプラインを一目で把握", en: "Visual recruitment pipeline at a glance" },
  { ja: "全国の優秀な留学生にリーチ", en: "Reach top talent from universities across Japan" },
  { ja: "候補者管理＆メッセージ機能", en: "Candidate management & messaging" },
];

export const obogFeats = [
  { ja: "コミュニティユーザーからの訪問リクエストを簡単管理", en: "Easily manage visit requests from community users" },
  { ja: "スケジュールをカレンダーで設定", en: "Set your availability on a calendar" },
  { ja: "キャリアアドバイスで後輩をサポート", en: "Support juniors with career advice" },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   TESTIMONIALS (with audience filtering)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export const testimonials: TestimonialData[] = [
  {
    i: "AN",
    ja: "A. Nguyen",
    r: "東京大学 工学部 3年",
    rE: "UTokyo Engineering, Year 3",
    q: "Senpaiのおかげで日本の就活文化を理解し、外銀のOB訪問ができました。一人では絶対に無理でした。",
    qE: "Thanks to Senpai, I understood Japanese job hunting culture and got OB visits at a top investment bank.",
    c: "var(--green)",
    bg: "var(--green-bg)",
    audience: "student",
    rating: 5,
    date: "2026-01"
  },
  {
    i: "JP",
    ja: "J. Park",
    r: "慶應義塾大学 経済学部 4年",
    rE: "Keio Economics, Year 4",
    q: "バイリンガル対応なので、日本語が完璧でなくても安心して使えます。ESの書き方も先輩に教えてもらえました。",
    qE: "The bilingual support means I can use it comfortably even though my Japanese isn't perfect.",
    c: "var(--blue)",
    bg: "var(--blue-bg)",
    audience: "student",
    rating: 5,
    date: "2025-12"
  },
  {
    i: "TS",
    ja: "佐藤 太郎",
    r: "大手メーカー 人事部",
    rE: "HR, Major Manufacturer",
    q: "優秀な留学生にリーチする手段として非常に効果的。パイプラインの可視化で採用プロセスも改善されました。",
    qE: "Extremely effective for reaching talented international students. Pipeline visualization improved our hiring process.",
    c: "var(--color-accent)",
    bg: "var(--accent-soft)",
    audience: "company",
    rating: 5,
    date: "2025-11"
  },
  {
    i: "LW",
    ja: "L. Wang",
    r: "早稲田大学 商学部 3年",
    rE: "Waseda Commerce, Year 3",
    q: "先輩からのアドバイスで面接の準備が劇的に改善しました。日本企業の文化を深く理解できた。",
    qE: "Senpai's advice dramatically improved my interview prep. I gained deep understanding of Japanese corporate culture.",
    c: "var(--yellow)",
    bg: "var(--yellow-bg)",
    audience: "student",
    rating: 5,
    date: "2026-01"
  },
  {
    i: "KY",
    ja: "山田 花子",
    r: "ITスタートアップ CEO",
    rE: "CEO, IT Startup",
    q: "多様性のある採用を実現したかった私たちにとって、Senpaiは理想的なプラットフォームです。",
    qE: "For us seeking diverse hiring, Senpai is the ideal platform. We've connected with amazing international talent.",
    c: "var(--red)",
    bg: "var(--red-bg)",
    audience: "company",
    rating: 4,
    date: "2025-10"
  },
  {
    i: "HS",
    ja: "佐藤 大輔",
    r: "外資コンサル 採用マネージャー",
    rE: "Hiring Manager, Global Consulting Firm",
    q: "OB訪問を通じて候補者の人柄やカルチャーフィットを早期に見極められます。採用のミスマッチが大幅に減りました。",
    qE: "OB visits let us assess cultural fit and personality early. Hiring mismatches have dropped significantly.",
    c: "var(--green)",
    bg: "var(--green-bg)",
    audience: "company",
    rating: 5,
    date: "2025-12"
  },
  {
    i: "KY",
    ja: "K. Yamada",
    r: "McKinsey · 慶應卒",
    rE: "McKinsey · Keio grad",
    q: "後輩の相談に乗ることで、自分のキャリアも見つめ直すきっかけになりました。プラットフォームが使いやすく、スケジュール管理も簡単です。",
    qE: "Helping juniors made me reflect on my own career too. The platform is intuitive and schedule management is easy.",
    c: "var(--yellow)",
    bg: "var(--yellow-bg)",
    audience: "obog",
    rating: 5,
    date: "2026-02"
  },
  {
    i: "MT",
    ja: "M. Tanaka",
    r: "Google · 東大卒",
    rE: "Google · UTokyo grad",
    q: "留学生の就活をサポートできるのは嬉しいです。バイリンガル対応なので、英語でも日本語でも気軽に面談できます。",
    qE: "It's rewarding to support international students. Being bilingual, I can chat comfortably in both languages.",
    c: "var(--color-accent)",
    bg: "var(--accent-soft)",
    audience: "obog",
    rating: 5,
    date: "2026-01"
  },
  {
    i: "RS",
    ja: "R. Suzuki",
    r: "三井物産 · 早稲田卒",
    rE: "Mitsui & Co. · Waseda grad",
    q: "商社の実態を後輩に伝えられる良い機会。ESサンプルの共有機能も便利で、具体的なアドバイスができます。",
    qE: "A great opportunity to share what trading companies are really like. The ES sample sharing feature lets me give concrete advice.",
    c: "var(--green)",
    bg: "var(--green-bg)",
    audience: "obog",
    rating: 4,
    date: "2025-11"
  },
];

// Utility function to filter testimonials by audience
export const getTestimonialsByAudience = (audience: "student" | "company" | "obog" | "all"): TestimonialData[] => {
  if (audience === "all") return testimonials;
  return testimonials.filter(t => t.audience === audience || t.audience === "both");
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FAQ (with categories)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export const faqs: FAQData[] = [
  // Students category
  {
    q: "コミュニティユーザーは本当に無料ですか？",
    qE: "Is it really free for community users and OB/OG?",
    a: "はい、コミュニティユーザーの基本プランは完全無料です。OB/OG検索、訪問予約、1日5通までのメッセージ機能を無料でお使いいただけます。",
    aE: "Yes, the basic plan for community users is completely free. Search, booking, and up to 5 messages per day are available at no cost.",
    category: "students"
  },
  {
    q: "どの大学のユーザーが対象ですか？",
    qE: "Which universities are supported?",
    a: "全国の大学の留学生が対象です。大学を問わずご登録いただけます。",
    aE: "International students from universities across Japan are welcome. You can register regardless of your university.",
    category: "students"
  },
  {
    q: "OB/OG訪問はオンラインでもできますか？",
    qE: "Can OB/OG visits be done online?",
    a: "はい、オンライン・対面どちらも対応しています。OB/OGのプロフィールで対応形式を確認できます。",
    aE: "Yes, both online and in-person visits are supported. You can check each OB/OG's profile for their preferred format.",
    category: "students"
  },
  {
    q: "どのような企業のOB/OGがいますか？",
    qE: "What companies do the OB/OG work for?",
    a: "外資系コンサル、投資銀行、IT企業、メーカー、商社など、幅広い業界の先輩が登録しています。",
    aE: "We have senpai from various industries including consulting, investment banking, IT, manufacturing, and trading companies.",
    category: "students"
  },
  {
    q: "英語だけでも利用できますか？",
    qE: "Can I use the platform in English only?",
    a: "はい、プラットフォーム全体が日英バイリンガル対応です。英語のみでも問題なくご利用いただけます。",
    aE: "Yes, the entire platform is bilingual JP/EN. You can use it comfortably in English only.",
    category: "students"
  },
  {
    q: "訪問申し込みが承認されない場合もありますか？",
    qE: "Can my visit request be declined?",
    a: "はい、OB/OGの都合により承認されない場合もあります。その場合は別のOB/OGに申し込むことができます。",
    aE: "Yes, requests may be declined due to the OB/OG's availability. In that case, you can request visits with other OB/OG.",
    category: "students"
  },

  // OB/OG category
  {
    q: "OB/OGとして登録するのに費用はかかりますか？",
    qE: "Does it cost anything to register as OB/OG?",
    a: "いいえ、OB/OGとしてのご登録・ご利用は完全無料です。",
    aE: "No, registering and using the platform as OB/OG is completely free.",
    category: "obog"
  },
  {
    q: "公式OB/OGとは何ですか？",
    qE: "What is an official OB/OG?",
    a: "企業から公式に認定されたOB/OGです。プロフィールに公式バッジが表示され、コミュニティユーザーからの信頼度が高まります。複数企業からの認定も可能です。",
    aE: "An OB/OG officially certified by a company. An official badge appears on your profile, boosting trust with community users. You can be certified by multiple companies.",
    category: "obog"
  },
  {
    q: "複数の企業から公式OB/OG認定を受けることはできますか？",
    qE: "Can I be certified as official OB/OG by multiple companies?",
    a: "はい、複数の企業から公式認定を受けることが可能です。表示する認定企業は任意で選択できます。",
    aE: "Yes, you can receive official certification from multiple companies. You can choose which certifications to display.",
    category: "obog"
  },

  // Companies category
  {
    q: "企業の導入費用はどれくらいですか？",
    qE: "How much does it cost for companies?",
    a: "まずはお問い合わせください。企業規模やご利用プランに応じて、最適なプランをご提案いたします。",
    aE: "Please contact us for pricing. We'll propose an optimal plan based on your company size and needs.",
    category: "companies"
  },
  {
    q: "どのような企業が導入していますか？",
    qE: "What types of companies use Senpai Career?",
    a: "外資系企業、IT企業、メーカー、コンサルティングファームなど、多様な人材を求める企業様にご利用いただいています。",
    aE: "Companies seeking diverse talent including foreign firms, IT companies, manufacturers, and consulting firms.",
    category: "companies"
  },
  {
    q: "社員をOB/OGとして登録するにはどうすればいいですか？",
    qE: "How do we register employees as OB/OG?",
    a: "企業アカウントから社員を招待することができます。社員は自身のプロフィールを作成し、対応可能な日時を設定します。",
    aE: "You can invite employees from your company account. They create their profile and set their available time slots.",
    category: "companies"
  },

  // Technical category
  {
    q: "セキュリティ対策はどうなっていますか？",
    qE: "What security measures are in place?",
    a: "SSL暗号化、個人情報保護法準拠、定期的なセキュリティ監査を実施しています。詳しくはプライバシーポリシーをご覧ください。",
    aE: "We implement SSL encryption, comply with privacy laws, and conduct regular security audits. See our privacy policy for details.",
    category: "platform"
  },
  {
    q: "アカウントを削除することはできますか？",
    qE: "Can I delete my account?",
    a: "はい、設定ページからいつでもアカウントを削除できます。削除後、すべてのデータは完全に消去されます。",
    aE: "Yes, you can delete your account anytime from settings. All your data will be permanently erased.",
    category: "platform"
  },
  {
    q: "モバイルアプリはありますか？",
    qE: "Is there a mobile app?",
    a: "現在はWebアプリのみですが、モバイルブラウザで快適にご利用いただけます。ネイティブアプリは開発中です。",
    aE: "Currently web-only, but fully optimized for mobile browsers. Native apps are in development.",
    category: "platform"
  },
];

// Utility function to filter FAQs by category
export const getFAQsByCategory = (category?: string): FAQData[] => {
  if (!category || category === "all") return faqs;
  return faqs.filter(f => f.category === category);
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   EXPANDED FEATURES (for landing pages)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export const communityFeatures: FeatureData[] = [
  { icon: "search", ja: "OB/OGを検索", en: "Find OB/OG", jaD: "業界・企業・大学でフィルタリング", enD: "Filter by industry, company, university" },
  { icon: "calendar", ja: "訪問を予約", en: "Book visits", jaD: "カレンダーから日程を選ぶだけ", enD: "Just pick a date from the calendar" },
  { icon: "message-square", ja: "直接やりとり", en: "Direct messaging", jaD: "OB/OGとメッセージで事前に相談", enD: "Chat with OB/OG before your visit" },
  { icon: "book-open", ja: "就活ガイド", en: "Career guides", jaD: "ES・面接対策をステップバイステップで", enD: "ES & interview prep step by step" },
  { icon: "target", ja: "業界研究", en: "Industry research", jaD: "各業界の特徴と求められるスキル", enD: "Industry insights and required skills" },
  { icon: "pen-line", ja: "ES添削サポート", en: "ES review support", jaD: "先輩からのフィードバックを受けられる", enD: "Get feedback from senpai on your ES" },
];

export const businessFeatures: FeatureData[] = [
  { icon: "clipboard-list", ja: "採用パイプライン", en: "Recruitment Pipeline", jaD: "OB訪問→ES→面接→内定を一目で管理", enD: "Track OB visit → Application → Interview → Offer" },
  { icon: "users", ja: "候補者管理", en: "Candidate Management", jaD: "留学生の情報を一元管理", enD: "Centralized international student profiles" },
  { icon: "message-square", ja: "メッセージ", en: "Messaging", jaD: "候補者と直接やりとり", enD: "Direct communication with candidates" },
  { icon: "bar-chart-3", ja: "分析レポート", en: "Analytics", jaD: "エンゲージメントと採用効果を分析", enD: "Track engagement and hiring effectiveness" },
  { icon: "building-2", ja: "公式OB/OG枠管理", en: "Official OB/OG Management", jaD: "公式OB/OG枠の登録・管理", enD: "Register and manage official OB/OG slots" },
  { icon: "graduation-cap", ja: "大学別フィルター", en: "Filter by university", jaD: "全国の大学から候補者を検索", enD: "Search candidates from universities across Japan" },
  { icon: "globe", ja: "バイリンガル対応", en: "Bilingual ready", jaD: "日英両言語で候補者とコミュニケーション", enD: "Communicate in both JP and EN" },
  { icon: "layout-dashboard", ja: "ダッシュボード", en: "Dashboard", jaD: "採用状況を視覚的に把握", enD: "Visual overview of recruitment status" },
];

export const obogFeatures: FeatureData[] = [
  { icon: "badge-check", ja: "公式OB/OG認証", en: "Official Verification", jaD: "企業から公式OB/OGとして認証されると、コミュニティユーザーからの信頼度がアップ", enD: "Get verified by your company to boost trust with community users" },
  { icon: "inbox", ja: "訪問リクエスト管理", en: "Manage Visit Requests", jaD: "コミュニティユーザーからの訪問リクエストを一覧で確認・承認", enD: "View and approve incoming visit requests from community users" },
  { icon: "calendar", ja: "可用時間の登録", en: "Set Availability", jaD: "曜日・時間帯で受付可能枠を登録、コミュニティユーザーへ通知・上位表示", enD: "Register available day/time slots — community users get notified and you rank higher" },
  { icon: "message-square", ja: "メッセージ・チャット", en: "Messaging & Chat", jaD: "コミュニティユーザーからのメッセージに返信・リアルタイムチャット", enD: "Reply to community user messages and chat in real time" },
  { icon: "user", ja: "プロフィール編集", en: "Edit Profile", jaD: "経歴・業界・話せるトピックを自由に更新", enD: "Update your career history, industry, and topics freely" },
  { icon: "pen-line", ja: "ES・体験記の共有", en: "Share ES & Stories", jaD: "ESサンプルや就活体験記を追加して後輩をサポート", enD: "Add ES samples and career stories to support juniors" },
  { icon: "bar-chart-3", ja: "面談履歴", en: "Visit History", jaD: "過去の面談記録と学生のフィードバックを確認", enD: "Review past visit records and student feedback" },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   DETAILED STEPS (for How It Works page)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export const studentDetailedSteps: DetailedStepData[] = [
  {
    ja: "無料登録",
    en: "Sign Up Free",
    jaD: "コミュニティユーザーとして登録。プロフィールを入力するだけ。",
    enD: "Register as a community user. Just fill in your profile.",
    jaLong: "メールアドレスと大学情報を入力して、無料アカウントを作成します。所要時間はわずか2分。プロフィールには興味のある業界や企業、希望する職種などを記入します。この情報をもとに、あなたにぴったりのOB/OGをマッチングします。\n\n登録後すぐに、全国の大学出身のOB/OGデータベースにアクセスできます。完全無料、クレジットカード不要です。",
    enLong: "Create your free account by entering your email and university information. It takes just 2 minutes. Fill in your profile with your interests, target industries, companies, and desired roles. We'll use this to match you with the right OB/OG.\n\nOnce registered, you'll immediately get access to our database of OB/OG from universities across Japan. Completely free, no credit card required.",
    screenshot: "student-signup",
    tips: [
      { ja: "大学のメールアドレスを使うと認証が早い", en: "Use your university email for faster verification" },
      { ja: "プロフィールを充実させるとマッチング精度が上がる", en: "Complete profile improves matching accuracy" }
    ]
  },
  {
    ja: "OB/OGを検索",
    en: "Search for OB/OG",
    jaD: "業界・企業でOB/OGを検索。",
    enD: "Search OB/OG by industry and company.",
    jaLong: "業界、企業、職種などの条件でOB/OGを検索します。各OB/OGのプロフィールには、現在の仕事内容、経歴、対応可能な訪問形式（オンライン/対面）、得意分野などが詳しく記載されています。\n\n検索結果は関連度順に表示され、あなたの興味に合ったOB/OGを簡単に見つけることができます。気になるOB/OGを見つけたら、プロフィールを確認して訪問を申し込みましょう。",
    enLong: "Search for OB/OG by industry, company, job function, and more. Each profile includes details about their current role, career path, visit format preferences (online/in-person), and areas of expertise.\n\nResults are sorted by relevance to help you find the most suitable OB/OG. When you find someone interesting, review their profile and request a visit.",
    screenshot: "senpai-search",
    tips: [
      { ja: "複数の先輩に申し込むと承認率が上がる", en: "Requesting multiple senpai increases approval rate" },
      { ja: "プロフィールをよく読んで、質問を準備しよう", en: "Read profiles carefully and prepare questions" }
    ]
  },
  {
    ja: "訪問を実施",
    en: "Complete Your Visit",
    jaD: "OB/OG訪問で企業のリアルを知る。",
    enD: "Learn the real story through OB visits.",
    jaLong: "先輩から訪問が承認されたら、日時を確定して訪問を実施します。オンラインの場合はZoomやGoogle Meetのリンクが共有され、対面の場合は場所の詳細が送られます。\n\n訪問では、業界や企業の実態、仕事のやりがいや大変さ、就活のアドバイスなど、リアルな情報を聞くことができます。訪問後は、お礼のメッセージを送ることをお勧めします。",
    enLong: "Once your visit is approved, confirm the date and time. For online visits, you'll receive a Zoom or Google Meet link. For in-person visits, location details will be shared.\n\nDuring the visit, you can ask about industry insights, company culture, job satisfaction, challenges, and job hunting advice. After the visit, it's recommended to send a thank-you message.",
    screenshot: "ob-visit",
    tips: [
      { ja: "事前に質問リストを作成しておくと効果的", en: "Prepare a list of questions in advance" },
      { ja: "訪問後のお礼メッセージで関係を継続", en: "Follow-up message helps maintain the relationship" }
    ]
  },
];

export const businessDetailedSteps: DetailedStepData[] = [
  {
    ja: "企業登録",
    en: "Company Registration",
    jaD: "企業アカウントを作成。",
    enD: "Create your company account.",
    jaLong: "企業情報を入力して、アカウントを作成します。企業名、業界、規模、採用ニーズなどの基本情報を登録。管理者権限を持つユーザーを設定し、チームメンバーを招待できます。\n\n登録後は、企業専用のダッシュボードにアクセスでき、採用パイプライン、候補者管理、分析レポートなどの機能をご利用いただけます。",
    enLong: "Enter your company information to create an account. Register basic details like company name, industry, size, and hiring needs. Set up admin users and invite team members.\n\nAfter registration, access your company dashboard with features for recruitment pipeline, candidate management, and analytics reports.",
    screenshot: "business-signup",
  },
  {
    ja: "OB社員を登録",
    en: "Register OB Employees",
    jaD: "社内のOB/OGをプラットフォームに登録。",
    enD: "Register your company's OB/OG on the platform.",
    jaLong: "社内の社員をOB/OGとしてプラットフォームに招待します。各社員は自身のプロフィールを作成し、対応可能な日時、訪問形式（オンライン/対面）、話せるトピックなどを設定します。\n\nOB社員の情報は一元管理され、スケジュール調整やメッセージのやり取りもプラットフォーム上で完結します。",
    enLong: "Invite employees to join as OB/OG on the platform. Each employee creates their profile, sets available time slots, visit format preferences, and topics they can discuss.\n\nAll OB information is centrally managed, and scheduling and messaging are handled within the platform.",
    screenshot: "ob-registration",
  },
  {
    ja: "学生とマッチング",
    en: "Match with Students",
    jaD: "興味のある学生からOB訪問の申し込みが届く。",
    enD: "Receive visit requests from interested students.",
    jaLong: "学生があなたの会社のOB/OGに訪問を申し込むと、通知が届きます。学生のプロフィール、大学、専攻、興味分野などを確認し、承認または別の日時を提案できます。\n\n訪問を通じて学生と自然な接点を持ち、企業への興味を高めることができます。優秀な学生は候補者として採用パイプラインに追加しましょう。",
    enLong: "When students request visits with your company's OB/OG, you'll receive notifications. Review student profiles including university, major, and interests, then approve or suggest alternative times.\n\nThrough visits, create natural connections with students and increase their interest in your company. Add promising students to your recruitment pipeline.",
    screenshot: "student-matching",
  },
  {
    ja: "採用プロセス管理",
    en: "Manage Recruitment",
    jaD: "パイプラインで採用状況を可視化。",
    enD: "Visualize recruitment status in your pipeline.",
    jaLong: "OB訪問から内定までの各ステージを一目で管理できます。候補者を「OB訪問」「ES提出」「面接」「内定」などのステージに分類し、進捗を追跡します。\n\n各候補者の履歴、メッセージ、評価コメントを一元管理。チーム内で情報を共有し、効率的な採用活動を実現します。分析レポートで、OB訪問の効果や採用率を可視化できます。",
    enLong: "Manage all stages from OB visit to job offer at a glance. Categorize candidates into stages like 'OB Visit', 'ES Submitted', 'Interview', 'Offer', and track progress.\n\nCentrally manage each candidate's history, messages, and evaluation comments. Share information within your team for efficient recruitment. Analytics reports visualize OB visit effectiveness and hiring rates.",
    screenshot: "pipeline-management",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   UNIVERSITIES & OTHER DATA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export const universities: UniversityData[] = [
  { name: "東京大学", nameEn: "University of Tokyo" },
  { name: "慶應義塾大学", nameEn: "Keio University" },
  { name: "早稲田大学", nameEn: "Waseda University" },
  { name: "上智大学", nameEn: "Sophia University" },
  { name: "明治大学", nameEn: "Meiji University" },
  { name: "立教大学", nameEn: "Rikkyo University" },
  { name: "その他全国の大学", nameEn: "And more universities across Japan" },
];

export const teamMembers: TeamMember[] = [
  { name: "TBD", role: { ja: "CEO・創業者", en: "CEO & Founder" } },
  { name: "TBD", role: { ja: "CTO", en: "CTO" } },
  { name: "TBD", role: { ja: "Head of Product", en: "Head of Product" } },
  { name: "TBD", role: { ja: "Head of Growth", en: "Head of Growth" } },
];

export const companyValues = [
  {
    icon: "globe",
    ja: "多様性を力に",
    en: "Diversity as Strength",
    jaD: "異なる背景を持つ人々が出会い、新しい価値を生み出す場を創ります。",
    enD: "We create spaces where people from diverse backgrounds meet and create new value.",
  },
  {
    icon: "handshake",
    ja: "信頼関係を第一に",
    en: "Trust First",
    jaD: "学生、企業、OB/OG、すべての人が安心して使えるプラットフォームを目指します。",
    enD: "We build a platform where students, companies, and OB/OG can all feel secure.",
  },
  {
    icon: "rocket",
    ja: "挑戦を応援",
    en: "Support Challenges",
    jaD: "日本で働きたい留学生の挑戦を、テクノロジーの力で支えます。",
    enD: "We support international students' challenges with the power of technology.",
  },
];


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   OFFICIAL OB SLOTS (公式OB枠)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export const obSlotBenefits: FeatureData[] = [
  {
    icon: "badge-check",
    ja: "公式認証バッジ",
    en: "Official Verified Badge",
    jaD: "コミュニティユーザーのOB/OG検索結果で「公式OB/OG」バッジが表示され、信頼度が大幅にアップします。",
    enD: "A 'Verified OB/OG' badge appears in community user search results, significantly boosting trust.",
  },
  {
    icon: "refresh-cw",
    ja: "2カ月ごとの入替",
    en: "Bi-Monthly Rotation",
    jaD: "2カ月ごとに担当OB/OGを入替可能。柔軟にスロットを運用できます。",
    enD: "Swap assigned OB/OG every 2 months. Operate slots with full flexibility.",
  },
  {
    icon: "bar-chart-3",
    ja: "枠の一括管理",
    en: "Centralized Management",
    jaD: "購入した枠の割り当て・入替・履歴をダッシュボードで一元管理。",
    enD: "Manage slot assignments, swaps, and history from a single dashboard.",
  },
];

export const obSlotTiers = [
  {
    name: { ja: "スターター", en: "Starter" },
    slots: 3,
    features: [
      { ja: "公式OBバッジ × 3名分", en: "Verified OB badge for 3 members" },
      { ja: "2カ月ごとの入替", en: "Bi-monthly rotation" },
      { ja: "基本レポート", en: "Basic reports" },
    ],
  },
  {
    name: { ja: "スタンダード", en: "Standard" },
    slots: 5,
    popular: true,
    features: [
      { ja: "公式OBバッジ × 5名分", en: "Verified OB badge for 5 members" },
      { ja: "2カ月ごとの入替", en: "Bi-monthly rotation" },
      { ja: "詳細レポート＆分析", en: "Detailed reports & analytics" },
      { ja: "優先サポート", en: "Priority support" },
    ],
  },
  {
    name: { ja: "エンタープライズ", en: "Enterprise" },
    slots: 10,
    features: [
      { ja: "公式OBバッジ × 10名分", en: "Verified OB badge for 10 members" },
      { ja: "2カ月ごとの入替", en: "Bi-monthly rotation" },
      { ja: "カスタムレポート＆API連携", en: "Custom reports & API integration" },
      { ja: "専任CSマネージャー", en: "Dedicated CS manager" },
    ],
  },
];

export const mockOBSlots: OBSlotData[] = [
  { id: 1, obog: { initials: "KY", name: "K. Yamada", ja: "McKinsey · 慶應卒", en: "McKinsey · Keio grad" }, status: "active", assignedAt: "2026-01-15", rotationEnd: "2026-03-15" },
  { id: 2, obog: { initials: "MT", name: "M. Tanaka", ja: "Google · 東大卒", en: "Google · UTokyo grad" }, status: "active", assignedAt: "2026-02-01", rotationEnd: "2026-04-01" },
  { id: 3, obog: { initials: "RS", name: "R. Suzuki", ja: "三井物産 · 早稲田卒", en: "Mitsui & Co. · Waseda grad" }, status: "active", assignedAt: "2025-12-10", rotationEnd: "2026-02-10" },
  { id: 4, obog: null, status: "vacant", assignedAt: null, rotationEnd: null },
  { id: 5, obog: null, status: "vacant", assignedAt: null, rotationEnd: null },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PARTICIPATING COMPANIES (参加企業)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export interface CompanyData {
  name: string;
  nameEn: string;
}

export const participatingCompanies: CompanyData[] = [
  { name: "マッキンゼー", nameEn: "McKinsey & Company" },
  { name: "ゴールドマン・サックス", nameEn: "Goldman Sachs" },
  { name: "Google", nameEn: "Google" },
  { name: "三井物産", nameEn: "Mitsui & Co." },
  { name: "ソニー", nameEn: "Sony" },
  { name: "トヨタ自動車", nameEn: "Toyota" },
  { name: "ボストン コンサルティング", nameEn: "BCG" },
  { name: "JPモルガン", nameEn: "JP Morgan" },
  { name: "三菱商事", nameEn: "Mitsubishi Corporation" },
  { name: "Amazon", nameEn: "Amazon" },
  { name: "アクセンチュア", nameEn: "Accenture" },
  { name: "野村証券", nameEn: "Nomura Securities" },
  { name: "デロイト", nameEn: "Deloitte" },
  { name: "パナソニック", nameEn: "Panasonic" },
  { name: "楽天", nameEn: "Rakuten" },
  { name: "メルカリ", nameEn: "Mercari" },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   CAREER GUIDE ARTICLES (就活ガイド記事)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export interface ArticleData {
  slug: string;
  title: { ja: string; en: string };
  excerpt: { ja: string; en: string };
  category: string;
  icon: string;
  readTime: number;
}

export const careerArticles: ArticleData[] = [
  {
    slug: "what-is-obog",
    title: { ja: "OB/OGとは？", en: "What is OB/OG?" },
    excerpt: { ja: "日本の就活文化における「OB/OG訪問」の重要性と、留学生がOB/OG訪問を活用するためのガイド。", en: "A guide to understanding 'OB/OG visits' in Japanese job hunting culture and how international students can leverage them." },
    category: "basics",
    icon: "book-open",
    readTime: 5,
  },
  {
    slug: "shukatsu-skills",
    title: { ja: "就活に有利なスキル", en: "Skills That Give You an Edge" },
    excerpt: { ja: "日本の就活で評価されるスキルと、留学生がアピールすべきポイントを解説します。", en: "Learn which skills are valued in Japanese job hunting and what international students should highlight." },
    category: "skills",
    icon: "lightbulb",
    readTime: 7,
  },
  {
    slug: "es-writing-guide",
    title: { ja: "落ちないESの書き方", en: "How to Write a Winning ES" },
    excerpt: { ja: "エントリーシート（ES）の基本構成、書き方のコツ、よくあるNG例を解説。", en: "Master the basics of Entry Sheet (ES) writing: structure, tips, and common mistakes to avoid." },
    category: "es",
    icon: "pen-line",
    readTime: 10,
  },
  {
    slug: "interview-preparation",
    title: { ja: "面接対策ガイド", en: "Interview Preparation Guide" },
    excerpt: { ja: "日本企業の面接形式、よく聞かれる質問、留学生向けの準備方法をまとめました。", en: "Japanese company interview formats, common questions, and preparation tips for international students." },
    category: "interview",
    icon: "mic",
    readTime: 8,
  },
  {
    slug: "industry-guide",
    title: { ja: "業界研究ガイド", en: "Industry Research Guide" },
    excerpt: { ja: "コンサル・金融・商社・IT・メーカーなど、主要業界の特徴と求められるスキルを解説。", en: "Overview of major industries including consulting, finance, trading, IT, and manufacturing." },
    category: "research",
    icon: "search",
    readTime: 12,
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   OB/OG DETAILED STEPS (for OB/OG How It Works page)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export const obogDetailedSteps: DetailedStepData[] = [
  {
    ja: "無料登録",
    en: "Sign Up Free",
    jaD: "OB/OGとしてアカウントを作成。",
    enD: "Create your account as an OB/OG.",
    jaLong: "会社のメールアドレスを使って、無料アカウントを作成します。所要時間はわずか2分。プロフィールには現在の会社・役職、卒業大学、話せるトピック（業界、就活、キャリアパスなど）を記入します。\n\n企業から公式OB/OGとして認定されると、プロフィールに公式バッジが表示され、コミュニティユーザーからの信頼度がアップします。",
    enLong: "Create your free account using your company email. It takes just 2 minutes. Fill in your profile with your current company and role, alma mater, and topics you can discuss (industry, job hunting, career paths, etc.).\n\nIf certified as an official OB/OG by your company, an official badge will appear on your profile, boosting trust with community users.",
    screenshot: "obog-signup",
    tips: [
      { ja: "会社のメールアドレスを使うと認証が早い", en: "Use your company email for faster verification" },
      { ja: "プロフィールを充実させると訪問リクエストが増える", en: "A detailed profile increases visit requests" }
    ]
  },
  {
    ja: "スケジュール設定",
    en: "Set Your Availability",
    jaD: "対応可能な日時を登録。",
    enD: "Register your available time slots.",
    jaLong: "カレンダーで対応可能な曜日・時間帯を登録します。オンライン・対面のどちらで対応するかも設定できます。\n\nスケジュールを登録すると、コミュニティユーザーの検索結果で上位表示されるため、より多くの訪問リクエストを受けやすくなります。",
    enLong: "Register your available days and time slots on the calendar. You can also set whether you prefer online or in-person visits.\n\nSetting your schedule boosts your ranking in community user search results, making it easier to receive more visit requests.",
    screenshot: "obog-schedule",
    tips: [
      { ja: "定期的にスケジュールを更新しましょう", en: "Update your schedule regularly" },
      { ja: "オンラインと対面の両方に対応すると訪問が増える", en: "Offering both online and in-person options increases visits" }
    ]
  },
  {
    ja: "訪問リクエスト対応",
    en: "Handle Visit Requests",
    jaD: "コミュニティユーザーからのリクエストを承認・管理。",
    enD: "Approve and manage requests from community users.",
    jaLong: "コミュニティユーザーからの訪問リクエストが届くと通知が届きます。リクエストには、ユーザーの大学・専攻・興味分野が記載されています。\n\n承認・拒否・別日程の提案が簡単に行えます。承認すると、ユーザーにオンラインミーティングリンクや場所の詳細が自動送信されます。",
    enLong: "You'll receive notifications when community users send visit requests. Each request includes the user's university, major, and areas of interest.\n\nYou can easily approve, decline, or suggest alternative dates. Upon approval, meeting links or location details are automatically sent to the user.",
    screenshot: "obog-requests",
    tips: [
      { ja: "できるだけ早くリクエストに回答しましょう", en: "Respond to requests as quickly as possible" },
      { ja: "リクエスターのプロフィールを確認してから回答", en: "Review the requester's profile before responding" }
    ]
  },
];
