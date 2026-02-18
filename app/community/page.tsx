/**
 * ═══════════════════════════════════════════════════════════════
 * COMMUNITY PAGE - Landing Page for Students & OB/OG
 * ═══════════════════════════════════════════════════════════════
 *
 * URL: /community
 *
 * 7-section comprehensive landing page with teal branding:
 * 1. Hero with CTA
 * 2. How It Works (3-step student process)
 * 3. Features Grid (expanded to 9 features)
 * 4. Student Testimonials
 * 5. Platform Screenshots
 * 6. Universities
 * 7. CTA
 */

import Link from "next/link";
import { T } from "../components/providers/LanguageProvider";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/shared/HeroSection";
import SectionHeader from "../components/shared/SectionHeader";
import FeatureCard from "../components/shared/FeatureCard";
import TestimonialCard from "../components/shared/TestimonialCard";
import StepCard from "../components/shared/StepCard";
import ImagePlaceholder from "../components/shared/ImagePlaceholder";
import { communityFeatures, getTestimonialsByAudience, universities } from "../data/content";

// Filter testimonials for students only
const studentTestimonials = getTestimonialsByAudience("student");

// Simple steps data for community landing page
const communitySteps = [
  {
    icon: "📝",
    ja: "無料登録",
    en: "Sign Up Free",
    jaD: "メールアドレスと大学情報を入力するだけ。クレジットカード不要。",
    enD: "Just enter your email and university. No credit card required."
  },
  {
    icon: "🔍",
    ja: "先輩を検索",
    en: "Search for Senpai",
    jaD: "業界・企業でフィルタリングして、話を聞きたい先輩を見つけよう。",
    enD: "Filter by industry and company to find the perfect senpai."
  },
  {
    icon: "📅",
    ja: "訪問を予約",
    en: "Book a Visit",
    jaD: "カレンダーから日程を選んで予約。オンライン・対面どちらも対応。",
    enD: "Pick a date from the calendar. Both online and in-person available."
  },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📄 PAGE COMPONENT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default function CommunityPage() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 1: HERO                                          */}
      {/* ═══════════════════════════════════════════════════════ */}
      <HeroSection
        badge="For Students"
        headingJa={<>先輩の声が、<br />あなたの<span style={{ color: "var(--color-accent)" }}>道しるべ</span>に。</>}
        headingEn={<>Let senpai guide your<br />path to a <span style={{ color: "var(--color-accent)" }}>career in Japan</span>.</>}
        description={{
          ja: "東大・慶應・早稲田の先輩社会人に、業界のリアルを聞こう。OB/OG訪問を通じて、就活を圧倒的に有利に。",
          en: "Talk to senpai from Todai, Keio & Waseda about life inside their companies. OB/OG visits give you a real edge in job hunting.",
        }}
        primaryCta={{ href: "/community/signup", ja: "無料で登録する", en: "Sign Up Free" }}
        secondaryCta={{ href: "/community/login", ja: "ログイン", en: "Log In" }}
        cardTitle={{ ja: "✨ できること", en: "✨ What you can do" }}
        cardFeatures={communityFeatures.slice(0, 4)}
      />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 2: HOW IT WORKS (3-step process)                */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-180">
          <SectionHeader
            title={{ ja: "使い方", en: "How It Works" }}
            subtitle={{ ja: "3ステップで簡単にOB/OG訪問", en: "3 simple steps to connect with senpai" }}
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {communitySteps.map((step, i) => (
              <StepCard key={i} number={i + 1} step={step} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/how-it-works" className="text-sm font-semibold" style={{ color: "var(--color-accent)" }}>
              <T ja="詳しい使い方を見る →" en="See detailed guide →" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 3: FEATURES GRID (6 features)                    */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="px-6 py-16 md:py-20" style={{ background: "var(--bg2)" }}>
        <div className="mx-auto max-w-275">
          <SectionHeader
            title={{ ja: "充実の機能", en: "Powerful Features" }}
            subtitle={{ ja: "就活成功のために必要な機能がすべて揃っています", en: "Everything you need to succeed in your job hunt" }}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {communityFeatures.map((feature, i) => (
              <FeatureCard key={i} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 4: STUDENT TESTIMONIALS                          */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-275">
          <SectionHeader
            title={{ ja: "先輩学生の声", en: "What Students Say" }}
            subtitle={{ ja: "Senpai Careerで就活を成功させた学生たちの体験談", en: "Success stories from students who used Senpai Career" }}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {studentTestimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 5: PLATFORM SCREENSHOTS                          */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="px-6 py-16 md:py-20" style={{ background: "var(--bg2)" }}>
        <div className="mx-auto max-w-275">
          <SectionHeader
            title={{ ja: "使いやすいインターフェース", en: "Intuitive Interface" }}
            subtitle={{ ja: "シンプルで分かりやすい設計", en: "Simple and easy to navigate" }}
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <ImagePlaceholder
              label={{ ja: "先輩検索画面", en: "Senpai Search" }}
              aspectRatio="4/3"
            />
            <ImagePlaceholder
              label={{ ja: "ダッシュボード", en: "Dashboard" }}
              aspectRatio="4/3"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 6: UNIVERSITIES                                  */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-180">
          <SectionHeader
            title={{ ja: "対象大学", en: "Target Universities" }}
            subtitle={{ ja: "日本トップ3大学の留学生が利用しています", en: "Students from Japan's top 3 universities" }}
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {universities.map((uni, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center rounded-[14px] border p-8 transition-all hover:shadow-md"
                style={{ borderColor: "var(--brd)", background: "var(--card)" }}
              >
                <div className="mb-3 text-4xl">🎓</div>
                <div className="text-center">
                  <div className="ja-only font-semibold" style={{ color: "var(--ink)" }}>
                    {uni.name}
                  </div>
                  <div className="en-only font-semibold" style={{ color: "var(--ink)" }}>
                    {uni.nameEn}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 7: FINAL CTA                                     */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="cta-section px-6 py-16 md:py-20">
        <div className="mx-auto max-w-160 text-center">
          <h2
            className="mb-4 font-extrabold leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px,3vw,32px)" }}
          >
            <T
              ja="今すぐ先輩とつながろう"
              en="Connect with senpai today"
            />
          </h2>
          <p className="mb-8 text-[15px] leading-relaxed" style={{ color: "var(--ink2)" }}>
            <T
              ja="完全無料。クレジットカード不要。2分で登録完了。"
              en="Completely free. No credit card required. Sign up in 2 minutes."
            />
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/community/signup" className="btn btn-accent">
              <T ja="無料で登録する" en="Sign Up Free" />
              <span className="arrow">→</span>
            </Link>
            <Link href="/how-it-works" className="btn btn-ghost">
              <T ja="詳しく見る" en="Learn more" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* FOOTER                                                   */}
      {/* ═══════════════════════════════════════════════════════ */}
      <Footer />
    </div>
  );
}
