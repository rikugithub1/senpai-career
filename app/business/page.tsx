/**
 * ═══════════════════════════════════════════════════════════════
 * BUSINESS PAGE - Landing Page for Companies
 * ═══════════════════════════════════════════════════════════════
 *
 * URL: /business
 *
 * 9-section comprehensive landing page with navy branding:
 * 1. Hero with CTA
 * 2. Value Proposition
 * 3. How It Works (4-step company process)
 * 4. Features Grid (8 features)
 * 5. Company Testimonials
 * 6. Platform Screenshots
 * 7. Talent Pool Stats
 * 8. Pricing Preview
 * 9. Final CTA
 */

import Link from "next/link";
import { T } from "../components/providers/LanguageProvider";
import Footer from "../components/layout/Footer";
import SectionHeader from "../components/shared/SectionHeader";
import FeatureCard from "../components/shared/FeatureCard";
import TestimonialCard from "../components/shared/TestimonialCard";
import StepCard from "../components/shared/StepCard";
import ImagePlaceholder from "../components/shared/ImagePlaceholder";
import { businessFeatures, getTestimonialsByAudience, talentPoolStats } from "../data/content";

// Filter testimonials for companies only
const companyTestimonials = getTestimonialsByAudience("company");

// Simple steps data for business landing page
const businessSteps = [
  {
    ja: "企業登録",
    en: "Company Registration",
    jaD: "企業情報を登録し、管理者アカウントを作成します。",
    enD: "Register your company and create an admin account."
  },
  {
    ja: "OB社員を招待",
    en: "Invite OB Employees",
    jaD: "社内のOB/OGをプラットフォームに招待します。",
    enD: "Invite your employees to join as OB/OG."
  },
  {
    ja: "学生とマッチング",
    en: "Match with Students",
    jaD: "興味のある学生からOB訪問の申し込みが届きます。",
    enD: "Receive visit requests from interested students."
  },
  {
    ja: "採用を管理",
    en: "Manage Recruitment",
    jaD: "パイプラインで採用状況を一元管理します。",
    enD: "Track all recruitment stages in one place."
  },
];

export default function BusinessPage() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      {/* Navy branding applied by business layout */}

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 1: HERO                                          */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section
        className="px-6 py-16 md:py-20"
        style={{
          background: "linear-gradient(180deg, var(--accent-soft) 0%, var(--bg) 100%)"
        }}
      >
        <div className="mx-auto max-w-275">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_380px] md:gap-14">
            {/* Left: Main Content */}
            <div>
              <div
                className="mb-4 flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-widest"
                style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)" }}
              >
                <span className="inline-block h-[1.5px] w-4" style={{ background: "var(--color-accent)" }} />
                business.senpaicareer.com
              </div>

              <h1
                className="mb-3 font-extrabold leading-[1.18] tracking-tight"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px,3.5vw,38px)" }}
              >
                <span className="ja-only">
                  優秀な<span style={{ color: "var(--color-accent)" }}>留学生</span>に<br />自然にリーチする。
                </span>
                <span className="en-only">
                  Reach top <span style={{ color: "var(--color-accent)" }}>global talent</span><br />naturally.
                </span>
              </h1>

              <p className="mb-6 text-[14.5px] leading-relaxed" style={{ color: "var(--ink2)" }}>
                <T
                  ja="OB/OG訪問を通じて、東大・慶應・早稲田の意欲ある留学生と自然な接点を。採用パイプラインの構築から候補者管理まで。"
                  en="Connect naturally with motivated international students from top universities through OB/OG visits. From pipeline building to candidate management."
                />
              </p>

              <div className="flex flex-col gap-2.5 sm:flex-row">
                <Link href="/business/signup" className="btn btn-accent">
                  <T ja="企業として登録" en="Register as Company" />
                  <span className="arrow">→</span>
                </Link>
                <Link href="/business/login" className="btn btn-ghost">
                  <T ja="ログイン" en="Log In" />
                </Link>
              </div>
            </div>

            {/* Right: Quick Features Card */}
            <div className="flex flex-col gap-3.5 rounded-[14px] border p-6" style={{ borderColor: "var(--brd)", background: "var(--card)", minHeight: "400px" }}>
              <div className="text-[15px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
                <T ja="📊 管理機能" en="📊 Management Tools" />
              </div>

              {businessFeatures.slice(0, 4).map((f, i) => (
                <div key={i} className="flex items-start gap-2.5 text-[13px]">
                  <div className="emoji shrink-0">{f.icon}</div>
                  <div style={{ color: "var(--ink2)" }}>
                    <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                      <T ja={f.ja} en={f.en} />
                    </strong>
                    <br />
                    <T ja={f.jaD} en={f.enD} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 2: VALUE PROPOSITION                             */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-180">
          <SectionHeader
            title={{ ja: "なぜOB/OG訪問が採用に効くのか", en: "Why OB Visits Work for Recruitment" }}
            subtitle={{ ja: "自然な接点が、質の高い採用につながります", en: "Natural connections lead to quality hires" }}
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-[14px] border p-6" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
              <div className="emoji mb-3">🤝</div>
              <div className="mb-2 text-[15px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
                <T ja="信頼関係の構築" en="Build Trust" />
              </div>
              <div className="text-[13px] leading-relaxed" style={{ color: "var(--ink3)" }}>
                <T
                  ja="OB訪問を通じて、学生は企業の文化を深く理解し、親近感を持ちます。採用プロセスに進む前に信頼関係を築けます。"
                  en="Through OB visits, students deeply understand your culture and feel connected. Trust is built before the formal recruitment process."
                />
              </div>
            </div>

            <div className="rounded-[14px] border p-6" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
              <div className="emoji mb-3">🎯</div>
              <div className="mb-2 text-[15px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
                <T ja="ターゲット採用" en="Targeted Hiring" />
              </div>
              <div className="text-[13px] leading-relaxed" style={{ color: "var(--ink3)" }}>
                <T
                  ja="東大・慶應・早稲田の優秀な留学生に直接リーチ。本気で日本で働きたい学生だけが集まります。"
                  en="Directly reach top international students from Todai, Keio, and Waseda. Only seriously motivated students apply."
                />
              </div>
            </div>

            <div className="rounded-[14px] border p-6" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
              <div className="emoji mb-3">📊</div>
              <div className="mb-2 text-[15px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
                <T ja="効率的な採用" en="Efficient Process" />
              </div>
              <div className="text-[13px] leading-relaxed" style={{ color: "var(--ink3)" }}>
                <T
                  ja="OB訪問から内定までを一元管理。候補者の情報、やりとり、評価を一箇所で管理し、採用効率を大幅に改善。"
                  en="Manage from OB visit to offer in one place. Track candidates, messages, and evaluations to dramatically improve hiring efficiency."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 3: HOW IT WORKS (4-step process)                */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="px-6 py-16 md:py-20" style={{ background: "var(--bg2)" }}>
        <div className="mx-auto max-w-180">
          <SectionHeader
            title={{ ja: "使い方", en: "How It Works" }}
            subtitle={{ ja: "4ステップで採用プロセスを効率化", en: "Streamline your hiring in 4 steps" }}
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {businessSteps.map((step, i) => (
              <StepCard key={i} number={i + 1} step={step} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/business/how-it-works" className="text-sm font-semibold" style={{ color: "var(--color-accent)" }}>
              <T ja="詳しい使い方を見る →" en="See detailed guide →" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 4: FEATURES GRID (8 features)                    */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-275">
          <SectionHeader
            title={{ ja: "充実の管理機能", en: "Powerful Management Features" }}
            subtitle={{ ja: "採用を成功に導くための機能がすべて揃っています", en: "Everything you need for successful recruitment" }}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {businessFeatures.map((feature, i) => (
              <FeatureCard key={i} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 5: COMPANY TESTIMONIALS                          */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="px-6 py-16 md:py-20" style={{ background: "var(--bg2)" }}>
        <div className="mx-auto max-w-275">
          <SectionHeader
            title={{ ja: "導入企業の声", en: "What Companies Say" }}
            subtitle={{ ja: "Senpai Careerで採用成功した企業の体験談", en: "Success stories from companies using Senpai Career" }}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {companyTestimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 6: PLATFORM SCREENSHOTS                          */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-275">
          <SectionHeader
            title={{ ja: "直感的な管理画面", en: "Intuitive Dashboard" }}
            subtitle={{ ja: "採用プロセス全体を一目で把握", en: "Visualize your entire hiring process at a glance" }}
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <ImagePlaceholder
              label={{ ja: "採用パイプライン", en: "Recruitment Pipeline" }}
              aspectRatio="4/3"
            />
            <ImagePlaceholder
              label={{ ja: "候補者管理画面", en: "Candidate Management" }}
              aspectRatio="4/3"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 7: TALENT POOL STATS                             */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="px-6 py-16 md:py-20" style={{ background: "var(--bg2)" }}>
        <div className="mx-auto max-w-180">
          <SectionHeader
            title={{ ja: "質の高い人材プール", en: "High-Quality Talent Pool" }}
            subtitle={{ ja: "日本トップクラスの大学から優秀な留学生が集まっています", en: "Top international students from Japan's leading universities" }}
          />

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {talentPoolStats.map((stat, i) => (
              <div key={i} className="rounded-[14px] border p-6 text-center" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
                <div
                  className="mb-2 text-[32px] font-extrabold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)" }}
                >
                  {stat.value}
                </div>
                <div className="text-[13px] font-medium" style={{ color: "var(--ink2)" }}>
                  <T ja={stat.label.ja} en={stat.label.en} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 8: PRICING PREVIEW                               */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-160">
          <SectionHeader
            title={{ ja: "料金プラン", en: "Pricing" }}
            subtitle={{ ja: "企業規模に合わせた柔軟なプラン", en: "Flexible plans for companies of all sizes" }}
          />

          <div className="mt-12 rounded-[14px] border p-8 text-center" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
            <div className="mb-3 text-[18px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
              <T ja="企業プラン" en="Business Plan" />
            </div>
            <div className="mb-4 text-[14px]" style={{ color: "var(--ink2)" }}>
              <T
                ja="企業規模やご利用プランに応じて、最適なプランをご提案いたします。"
                en="We'll propose an optimal plan based on your company size and needs."
              />
            </div>
            <div className="mb-6 flex flex-col gap-2 text-left text-[13px]" style={{ color: "var(--ink3)" }}>
              <div>✓ <T ja="採用パイプライン管理" en="Recruitment pipeline management" /></div>
              <div>✓ <T ja="候補者データベースアクセス" en="Candidate database access" /></div>
              <div>✓ <T ja="分析レポート" en="Analytics reports" /></div>
              <div>✓ <T ja="専任サポート" en="Dedicated support" /></div>
            </div>
            <Link href="/business/pricing" className="btn btn-accent">
              <T ja="料金プランを見る" en="View Pricing" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 9: FINAL CTA                                     */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section
        className="px-6 py-16 md:py-20"
        style={{
          background: "linear-gradient(135deg, var(--accent-soft2) 0%, var(--accent-soft) 100%)"
        }}
      >
        <div className="mx-auto max-w-160 text-center">
          <h2
            className="mb-4 font-extrabold leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px,3vw,32px)" }}
          >
            <T
              ja="優秀な留学生との出会いを始めましょう"
              en="Start connecting with top international talent"
            />
          </h2>
          <p className="mb-8 text-[15px] leading-relaxed" style={{ color: "var(--ink2)" }}>
            <T
              ja="まずはお気軽にお問い合わせください。導入をサポートいたします。"
              en="Contact us to get started. We'll support you through the onboarding process."
            />
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/contact" className="btn btn-accent">
              <T ja="お問い合わせ" en="Contact Sales" />
              <span className="arrow">→</span>
            </Link>
            <Link href="/business/signup" className="btn btn-ghost">
              <T ja="企業として登録" en="Register Company" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* FOOTER                                                   */}
      {/* ═══════════════════════════════════════════════════════ */}
      <Footer subdomain="business.senpaicareer.com" />
    </div>
  );
}