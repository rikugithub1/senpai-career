import Link from "next/link";
import { T } from "./components/providers/LanguageProvider";
import Icon from "./components/shared/Icon";
import Footer from "./components/layout/Footer";

/* ── static data ── */

const features = [
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

const studentFeats = [
  { ja: "OB/OGにワンクリックで訪問申し込み", en: "One-click visit requests to OB/OG" },
  { ja: "日英バイリンガル完全対応", en: "Full JP/EN bilingual support" },
  { ja: "就活ロードマップ＆ESガイド", en: "Job hunting roadmaps & ES guides" },
];

const bizFeats = [
  { ja: "採用パイプラインを一目で把握", en: "Visual recruitment pipeline at a glance" },
  { ja: "全国の優秀な留学生にリーチ", en: "Reach top talent from universities across Japan" },
  { ja: "候補者管理＆メッセージ機能", en: "Candidate management & messaging" },
];

const obogFeats = [
  { ja: "コミュニティユーザーからの訪問リクエストを簡単管理", en: "Easily manage visit requests from community users" },
  { ja: "スケジュールをカレンダーで設定", en: "Set your availability on a calendar" },
  { ja: "キャリアアドバイスで後輩をサポート", en: "Support juniors with career advice" },
];

/* ── helpers ── */

function Dot() {
  return (
    <span
      className="inline-block h-[5px] w-[5px] shrink-0 rounded-full"
      style={{ background: "var(--color-accent)" }}
    />
  );
}

/* ── page ── */

export default function LandingPage() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      {/* ─ HERO ─ */}
      <section className="px-6 py-20 text-center md:py-24">
        <div className="mx-auto max-w-160">
          {/* badge */}
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold"
            style={{ background: "var(--accent-soft)", borderColor: "var(--accent-soft2)", color: "var(--color-accent)", fontFamily: "var(--font-display)" }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-accent)" }} />
            <T ja="留学生のためのOB/OG訪問" en="OB/OG Visits for International Students" />
          </div>

          <h1
            className="mb-4 font-extrabold leading-[1.18] tracking-tight"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px,4.2vw,46px)" }}
          >
            <span className="ja-only">先輩とつながる。<br /><span style={{ color: "var(--color-accent)" }}>キャリア</span>がひらける。</span>
            <span className="en-only">Connect with senpai.<br />Unlock your <span style={{ color: "var(--color-accent)" }}>career</span>.</span>
          </h1>

          <p className="mx-auto mb-8 max-w-120 text-[15px] leading-relaxed" style={{ color: "var(--ink2)" }}>
            <T ja="Senpai Careerは、日本で就職を目指す留学生と日本企業を、OB/OG訪問でつなぐバイリンガルプラットフォームです。" en="Senpai Career is the bilingual platform connecting international students with Japanese companies through OB/OG visits." />
          </p>

          <div className="flex flex-col items-center justify-center gap-2.5 sm:flex-row">
            <Link href="/community" data-section="community" className="btn btn-accent"><T ja="コミュニティの方はこちら" en="For Community" /><span className="arrow">→</span></Link>
            <Link href="/obog" data-section="obog" className="btn btn-ghost"><T ja="OB/OGの方はこちら" en="For OB/OG (Alumni)" /></Link>
            <Link href="/business" data-section="business" className="btn btn-ghost"><T ja="企業の方はこちら" en="For Companies" /></Link>
          </div>
        </div>
      </section>

      {/* ─ WHAT — larger, more appealing bento-style cards ─ */}
      <section className="border-t px-6 py-16 md:py-20" style={{ borderColor: "var(--brd)", background: "var(--bg2)" }}>
        <div className="mx-auto max-w-275">
          <div className="mb-10 text-center">
            <div className="sec-label"><T ja="Senpai Careerとは" en="What is Senpai Career" /></div>
            <h2 className="font-bold tracking-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px,2.5vw,28px)" }}>
              <T ja="なぜSenpai Careerが必要なのか" en="Why Senpai Career matters" />
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[18px] border transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
                style={{ borderColor: "var(--brd)", background: "var(--card)" }}
              >
                {/* Gradient header */}
                <div
                  className="flex items-center justify-center py-8"
                  style={{ background: "var(--accent-soft)" }}
                >
                  <div className="icon-box" style={{ width: 56, height: 56 }}>
                    <Icon name={f.icon} size={28} />
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="mb-2 text-[17px] font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                    <T ja={f.ja} en={f.en} />
                  </div>
                  <div className="text-[13px] leading-relaxed" style={{ color: "var(--ink2)" }}>
                    <T ja={f.jaD} en={f.enD} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* How to use links */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/how-it-works" className="btn btn-ghost btn-sm" style={{ gap: 6 }}>
              <Icon name="book-open" size={14} />
              <T ja="使い方を見る" en="See how it works" />
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─ PLATFORM CARDS ─ */}
      <section className="border-t px-6 py-16" style={{ borderColor: "var(--brd)" }}>
        <div className="mx-auto max-w-275">
          <div className="mb-10 text-center">
            <div className="sec-label"><T ja="プラットフォーム" en="Platform" /></div>
            <h2 className="font-bold tracking-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px,2.5vw,28px)" }}>
              <T ja="あなたに合った入り口から" en="Choose your entry point" />
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Student */}
            <Link href="/community" data-section="community" className="group overflow-hidden rounded-[14px] border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
              <div className="border-b px-6 pb-5 pt-7" style={{ borderColor: "var(--brd)", background: "var(--accent-soft)" }}>
                <div className="text-lg font-bold tracking-tight" style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)" }}><span className="flex items-center gap-1.5"><Icon name="users" size={18} /><T ja="コミュニティ向け" en="For Community" /></span></div>
                <div className="mt-1 text-[12.5px]" style={{ color: "var(--ink3)" }}><T ja="OB/OG検索・予約・就活ガイド" en="Search, book visits, career guides" /></div>
              </div>
              <div className="flex flex-col gap-2.5 px-6 py-5">
                {studentFeats.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-[13px]" style={{ color: "var(--ink2)" }}><Dot /><T ja={f.ja} en={f.en} /></div>
                ))}
              </div>
              <div className="px-6 pb-6 text-[13px] font-semibold" style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)" }}>
                <T ja="詳しく見る →" en="Learn more →" />
              </div>
            </Link>

            {/* OB/OG */}
            <Link href="/obog" data-section="obog" className="group overflow-hidden rounded-[14px] border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
              <div className="border-b px-6 pb-5 pt-7" style={{ borderColor: "var(--brd)", background: "var(--accent-soft)" }}>
                <div className="text-lg font-bold tracking-tight" style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)" }}><span className="flex items-center gap-1.5"><Icon name="graduation-cap" size={18} /><T ja="OB/OG向け" en="For OB/OG (Alumni)" /></span></div>
                <div className="mt-1 text-[12.5px]" style={{ color: "var(--ink3)" }}><T ja="訪問リクエスト管理・スケジュール設定" en="Manage requests, set your schedule" /></div>
              </div>
              <div className="flex flex-col gap-2.5 px-6 py-5">
                {obogFeats.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-[13px]" style={{ color: "var(--ink2)" }}><Dot /><T ja={f.ja} en={f.en} /></div>
                ))}
              </div>
              <div className="px-6 pb-6 text-[13px] font-semibold" style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)" }}>
                <T ja="詳しく見る →" en="Learn more →" />
              </div>
            </Link>

            {/* Biz */}
            <Link href="/business" data-section="business" className="group overflow-hidden rounded-[14px] border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
              <div className="border-b px-6 pb-5 pt-7" style={{ borderColor: "var(--brd)", background: "var(--accent-soft)" }}>
                <div className="text-lg font-bold tracking-tight" style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)" }}><span className="flex items-center gap-1.5"><Icon name="building-2" size={18} /><T ja="企業向け" en="For Companies" /></span></div>
                <div className="mt-1 text-[12.5px]" style={{ color: "var(--ink3)" }}><T ja="採用管理・OB社員管理・分析" en="Recruitment, OB management, analytics" /></div>
              </div>
              <div className="flex flex-col gap-2.5 px-6 py-5">
                {bizFeats.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-[13px]" style={{ color: "var(--ink2)" }}><Dot /><T ja={f.ja} en={f.en} /></div>
                ))}
              </div>
              <div className="px-6 pb-6 text-[13px] font-semibold" style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)" }}>
                <T ja="詳しく見る →" en="Learn more →" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ─ BOTTOM CTA ─ */}
      <section className="border-t px-6 py-16 text-center" style={{ borderColor: "var(--brd)" }}>
        <div className="mx-auto max-w-160">
          <h2 className="mb-3 font-extrabold tracking-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px,3vw,32px)" }}>
            <T ja="今すぐSenpai Careerを始めよう" en="Get started with Senpai Career today" />
          </h2>
          <p className="mx-auto mb-6 max-w-120 text-sm leading-relaxed" style={{ color: "var(--ink3)" }}>
            <T ja="登録は無料。あなたのキャリアの第一歩を、先輩と一緒に。" en="Sign up for free. Take your first career step with senpai by your side." />
          </p>
          <div className="flex flex-col items-center justify-center gap-2.5 sm:flex-row">
            <Link href="/community" data-section="community" className="btn btn-accent"><T ja="コミュニティの方" en="For Community" /><span className="arrow">→</span></Link>
            <Link href="/obog" data-section="obog" className="btn btn-ghost"><T ja="OB/OGの方" en="For OB/OG (Alumni)" /></Link>
            <Link href="/business" data-section="business" className="btn btn-ghost"><T ja="企業の方" en="For Companies" /></Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
