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
  audience: "student" | "company" | "both";  // Audience filter
}

export interface FAQData {
  q: string;           // Japanese question
  qE: string;          // English question
  a: string;           // Japanese answer
  aE: string;          // English answer
  category: "students" | "companies" | "general" | "technical";
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
    icon: "🎓",
    ja: "留学生の87%が知らない文化",
    en: "87% of students don't know",
    jaD: "OB/OG訪問は日本の就活の重要な文化ですが、留学生のほとんどがその存在を知りません。Senpaiがその壁を取り払います。",
    enD: "OB/OG visits are critical in Japanese job hunting, but most international students don't know they exist. Senpai breaks that barrier.",
  },
  {
    icon: "🌏",
    ja: "日本語・英語バイリンガル",
    en: "Fully bilingual JP/EN",
    jaD: "既存のOB訪問アプリは日本語のみ。Senpai Careerは完全バイリンガル対応で、言語の壁を超えた就活を実現します。",
    enD: "Existing OB visit apps are Japanese-only. Senpai Career is fully bilingual, enabling job hunting beyond language barriers.",
  },
  {
    icon: "🤝",
    ja: "企業と留学生の架け橋",
    en: "Bridge between companies & students",
    jaD: "多様な人材を求める企業と、日本で活躍したい留学生。Senpaiが両者をつなぎ、自然な出会いを生みます。",
    enD: "Companies seeking diverse talent meet international students eager to work in Japan. Senpai creates natural connections.",
  },
];

export const steps: StepData[] = [
  { ja: "無料登録", en: "Sign Up Free", jaD: "学生または企業として登録。プロフィールを入力するだけ。", enD: "Register as a student or company. Just fill in your profile." },
  { ja: "先輩を見つける", en: "Find Your Senpai", jaD: "業界・企業でOB/OGを検索。興味のある先輩に訪問を申し込み。", enD: "Search OB/OG by industry and company. Request a visit with the right senpai." },
  { ja: "キャリアを切り拓く", en: "Launch Your Career", jaD: "OB/OG訪問で企業のリアルを知り、就活を有利に進めよう。", enD: "Learn the real story through OB visits and get ahead in your job hunt." },
];

export const studentFeats = [
  { ja: "先輩社会人にワンクリックで訪問申し込み", en: "One-click visit requests to senpai" },
  { ja: "日英バイリンガル完全対応", en: "Full JP/EN bilingual support" },
  { ja: "就活ロードマップ＆ESガイド", en: "Job hunting roadmaps & ES guides" },
];

export const bizFeats = [
  { ja: "採用パイプラインを一目で把握", en: "Visual recruitment pipeline at a glance" },
  { ja: "東大・慶應・早稲田の優秀な留学生にリーチ", en: "Reach top talent from Todai, Keio, Waseda" },
  { ja: "候補者管理＆メッセージ機能", en: "Candidate management & messaging" },
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
    audience: "student"
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
    audience: "student"
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
    audience: "company"
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
    audience: "student"
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
    audience: "company"
  },
];

// Utility function to filter testimonials by audience
export const getTestimonialsByAudience = (audience: "student" | "company" | "all"): TestimonialData[] => {
  if (audience === "all") return testimonials;
  return testimonials.filter(t => t.audience === audience || t.audience === "both");
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FAQ (with categories)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export const faqs: FAQData[] = [
  // Students category
  {
    q: "学生は本当に無料ですか？",
    qE: "Is it really free for students and OB/OG (alumni)?",
    a: "はい、学生のご利用は完全無料です。OB/OG検索、訪問予約、メッセージ機能すべて無料でお使いいただけます。",
    aE: "Yes, completely free for students and OB/OG (alumni). Search, booking, and messaging features are all available at no cost.",
    category: "students"
  },
  {
    q: "どの大学の学生が対象ですか？",
    qE: "Which universities are supported?",
    a: "現在は東京大学・慶應義塾大学・早稲田大学の留学生を中心にサービスを展開しています。今後、対象校を順次拡大予定です。",
    aE: "We currently focus on international students from UTokyo, Keio, and Waseda. We plan to expand to more universities soon.",
    category: "students"
  },
  {
    q: "OB/OG訪問はオンラインでもできますか？",
    qE: "Can OB/OG visits be done online?",
    a: "はい、オンライン・対面どちらも対応しています。先輩のプロフィールで対応形式を確認できます。",
    aE: "Yes, both online and in-person visits are supported. You can check each senpai's profile for their preferred format.",
    category: "general"
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
    a: "はい、先輩の都合により承認されない場合もあります。その場合は別の先輩に申し込むことができます。",
    aE: "Yes, requests may be declined due to senpai's availability. In that case, you can request visits with other senpai.",
    category: "students"
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
    category: "technical"
  },
  {
    q: "アカウントを削除することはできますか？",
    qE: "Can I delete my account?",
    a: "はい、設定ページからいつでもアカウントを削除できます。削除後、すべてのデータは完全に消去されます。",
    aE: "Yes, you can delete your account anytime from settings. All your data will be permanently erased.",
    category: "technical"
  },
  {
    q: "モバイルアプリはありますか？",
    qE: "Is there a mobile app?",
    a: "現在はWebアプリのみですが、モバイルブラウザで快適にご利用いただけます。ネイティブアプリは開発中です。",
    aE: "Currently web-only, but fully optimized for mobile browsers. Native apps are in development.",
    category: "technical"
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
  { icon: "🔍", ja: "先輩を検索", en: "Find senpai", jaD: "業界・企業・大学でフィルタリング", enD: "Filter by industry, company, university" },
  { icon: "📅", ja: "訪問を予約", en: "Book visits", jaD: "カレンダーから日程を選ぶだけ", enD: "Just pick a date from the calendar" },
  { icon: "💬", ja: "直接やりとり", en: "Direct messaging", jaD: "先輩とメッセージで事前に相談", enD: "Chat with senpai before your visit" },
  { icon: "📖", ja: "就活ガイド", en: "Career guides", jaD: "ES・面接対策をステップバイステップで", enD: "ES & interview prep step by step" },
  { icon: "🎯", ja: "業界研究", en: "Industry research", jaD: "各業界の特徴と求められるスキル", enD: "Industry insights and required skills" },
  { icon: "✍️", ja: "ES添削サポート", en: "ES review support", jaD: "先輩からのフィードバックを受けられる", enD: "Get feedback from senpai on your ES" },
];

export const businessFeatures: FeatureData[] = [
  { icon: "📋", ja: "採用パイプライン", en: "Recruitment Pipeline", jaD: "OB訪問→ES→面接→内定を一目で管理", enD: "Track OB visit → Application → Interview → Offer" },
  { icon: "👥", ja: "候補者管理", en: "Candidate Management", jaD: "留学生の情報を一元管理", enD: "Centralized international student profiles" },
  { icon: "💬", ja: "メッセージ", en: "Messaging", jaD: "候補者と直接やりとり", enD: "Direct communication with candidates" },
  { icon: "📈", ja: "分析レポート", en: "Analytics", jaD: "エンゲージメントと採用効果を分析", enD: "Track engagement and hiring effectiveness" },
  { icon: "🏢", ja: "OB社員管理", en: "OB Management", jaD: "社内OB/OGのスケジュールを一括管理", enD: "Manage all OB/OG schedules in one place" },
  { icon: "🎓", ja: "大学別フィルター", en: "Filter by university", jaD: "東大・慶應・早稲田など大学別に検索", enD: "Search by Todai, Keio, Waseda, etc." },
  { icon: "🌏", ja: "バイリンガル対応", en: "Bilingual ready", jaD: "日英両言語で候補者とコミュニケーション", enD: "Communicate in both JP and EN" },
  { icon: "📊", ja: "ダッシュボード", en: "Dashboard", jaD: "採用状況を視覚的に把握", enD: "Visual overview of recruitment status" },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   DETAILED STEPS (for How It Works page)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export const studentDetailedSteps: DetailedStepData[] = [
  {
    ja: "無料登録",
    en: "Sign Up Free",
    jaD: "学生として登録。プロフィールを入力するだけ。",
    enD: "Register as a student. Just fill in your profile.",
    jaLong: "メールアドレスと大学情報を入力して、無料アカウントを作成します。所要時間はわずか2分。プロフィールには興味のある業界や企業、希望する職種などを記入します。この情報をもとに、あなたにぴったりの先輩をマッチングします。\n\n登録後すぐに、東大・慶應・早稲田のOB/OGデータベースにアクセスできます。完全無料、クレジットカード不要です。",
    enLong: "Create your free account by entering your email and university information. It takes just 2 minutes. Fill in your profile with your interests, target industries, companies, and desired roles. We'll use this to match you with the right senpai.\n\nOnce registered, you'll immediately get access to our database of OB/OG from UTokyo, Keio, and Waseda. Completely free, no credit card required.",
    screenshot: "student-signup",
    tips: [
      { ja: "大学のメールアドレスを使うと認証が早い", en: "Use your university email for faster verification" },
      { ja: "プロフィールを充実させるとマッチング精度が上がる", en: "Complete profile improves matching accuracy" }
    ]
  },
  {
    ja: "先輩を検索",
    en: "Search for Senpai",
    jaD: "業界・企業でOB/OGを検索。",
    enD: "Search OB/OG by industry and company.",
    jaLong: "業界、企業、職種などの条件で先輩を検索します。各先輩のプロフィールには、現在の仕事内容、経歴、対応可能な訪問形式（オンライン/対面）、得意分野などが詳しく記載されています。\n\n検索結果は関連度順に表示され、あなたの興味に合った先輩を簡単に見つけることができます。気になる先輩を見つけたら、プロフィールを確認して訪問を申し込みましょう。",
    enLong: "Search for senpai by industry, company, job function, and more. Each profile includes details about their current role, career path, visit format preferences (online/in-person), and areas of expertise.\n\nResults are sorted by relevance to help you find the most suitable senpai. When you find someone interesting, review their profile and request a visit.",
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
   PRICING DATA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export const pricingTiers: PricingTier[] = [
  {
    name: { ja: "学生プラン", en: "Student Plan" },
    price: { ja: "¥0", en: "¥0" },
    period: { ja: "永久無料", en: "Free forever" },
    description: { ja: "就活生のためのすべての機能", en: "All features for job seekers" },
    features: [
      { ja: "OB/OG検索・予約", en: "Search & book OB visits", included: true },
      { ja: "メッセージ無制限", en: "Unlimited messaging", included: true },
      { ja: "就活ガイド", en: "Career guides", included: true },
      { ja: "ES添削サポート", en: "ES review support", included: true },
      { ja: "業界研究資料", en: "Industry research materials", included: true },
      { ja: "面接対策", en: "Interview preparation", included: true },
    ],
    cta: {
      href: "/community/signup",
      label: { ja: "無料で始める", en: "Get started free" },
      variant: "accent"
    },
    badge: { ja: "人気", en: "Popular" },
    highlight: true
  },
  {
    name: { ja: "企業プラン", en: "Business Plan" },
    price: { ja: "お問い合わせ", en: "Contact us" },
    period: { ja: "企業規模に応じた料金", en: "Custom pricing" },
    description: { ja: "優秀な留学生にリーチ", en: "Reach top international talent" },
    features: [
      { ja: "採用パイプライン管理", en: "Recruitment pipeline", included: true },
      { ja: "候補者データベース", en: "Candidate database", included: true },
      { ja: "分析レポート", en: "Analytics reports", included: true },
      { ja: "OB社員管理", en: "OB employee management", included: true },
      { ja: "専任サポート", en: "Dedicated support", included: true },
      { ja: "カスタム統合", en: "Custom integrations", included: false },
    ],
    cta: {
      href: "/contact",
      label: { ja: "お問い合わせ", en: "Contact sales" },
      variant: "ghost"
    }
  }
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   UNIVERSITIES & OTHER DATA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export const universities: UniversityData[] = [
  { name: "東京大学", nameEn: "University of Tokyo" },
  { name: "慶應義塾大学", nameEn: "Keio University" },
  { name: "早稲田大学", nameEn: "Waseda University" },
];

export const teamMembers: TeamMember[] = [
  { name: "TBD", role: { ja: "CEO・創業者", en: "CEO & Founder" } },
  { name: "TBD", role: { ja: "CTO", en: "CTO" } },
  { name: "TBD", role: { ja: "Head of Product", en: "Head of Product" } },
  { name: "TBD", role: { ja: "Head of Growth", en: "Head of Growth" } },
];

export const companyValues = [
  {
    icon: "🌏",
    ja: "多様性を力に",
    en: "Diversity as Strength",
    jaD: "異なる背景を持つ人々が出会い、新しい価値を生み出す場を創ります。",
    enD: "We create spaces where people from diverse backgrounds meet and create new value.",
  },
  {
    icon: "🤝",
    ja: "信頼関係を第一に",
    en: "Trust First",
    jaD: "学生、企業、OB/OG、すべての人が安心して使えるプラットフォームを目指します。",
    enD: "We build a platform where students, companies, and OB/OG can all feel secure.",
  },
  {
    icon: "🚀",
    ja: "挑戦を応援",
    en: "Support Challenges",
    jaD: "日本で働きたい留学生の挑戦を、テクノロジーの力で支えます。",
    enD: "We support international students' challenges with the power of technology.",
  },
];

export const talentPoolStats = [
  { label: { ja: "登録学生数", en: "Registered Students" }, value: "500+" },
  { label: { ja: "対応大学", en: "Universities" }, value: "3" },
  { label: { ja: "専攻分野", en: "Majors" }, value: "20+" },
  { label: { ja: "登録企業数", en: "Companies" }, value: "50+" },
];
