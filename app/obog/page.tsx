/**
 * OB/OG PAGE - Landing Page for Alumni (OB/OG)
 *
 * URL: /obog
 *
 * 7-section landing page with amber/gold branding:
 * 1. Hero with CTA
 * 2. How It Works (3-step OB/OG process)
 * 3. Features Grid (6 features)
 * 4. OB/OG Testimonials
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
import { obogFeatures, getTestimonialsByAudience, universities } from "../data/content";

const obogTestimonials = getTestimonialsByAudience("obog");

const obogSteps = [
  {
    icon: "📝",
    ja: "無料登録",
    en: "Sign Up Free",
    jaD: "会社のメールアドレスでアカウントを作成するだけ。2分で完了。",
    enD: "Just create an account with your company email. Done in 2 minutes.",
  },
  {
    icon: "📅",
    ja: "スケジュール設定",
    en: "Set Availability",
    jaD: "対応可能な曜日・時間帯を登録。学生側に通知され、検索で上位表示。",
    enD: "Register your available days and time slots. Students get notified and you rank higher.",
  },
  {
    icon: "🤝",
    ja: "後輩と面談",
    en: "Meet Students",
    jaD: "学生からの訪問リクエストを承認し、キャリアのアドバイスを共有。",
    enD: "Approve visit requests from students and share your career insights.",
  },
];

export default function ObogPage() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 1: HERO                                          */}
      {/* ═══════════════════════════════════════════════════════ */}
      <HeroSection
        badge="For Alumni"
        headingJa={<>後輩の未来を、あなたの<br /><span style={{ color: "var(--color-accent)" }}>経験</span>で照らす。</>}
        headingEn={<>Light the way for future<br />generations with your <span style={{ color: "var(--color-accent)" }}>experience</span>.</>}
        description={{
          ja: "東大・慶應・早稲田の留学生が、あなたの経験を求めています。OB/OG訪問を通じて、後輩のキャリアを応援しませんか。",
          en: "International students from Todai, Keio & Waseda want to learn from your experience. Support their careers through OB/OG visits.",
        }}
        primaryCta={{ href: "/obog/signup", ja: "OB/OGとして登録", en: "Register as Alumni" }}
        secondaryCta={{ href: "/obog/login", ja: "ログイン", en: "Log In" }}
        cardTitle={{ ja: "🎓 OB/OGとしてできること", en: "🎓 What you can do as Alumni" }}
        cardFeatures={obogFeatures.slice(0, 4)}
      />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 2: HOW IT WORKS (3-step process)                */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-180">
          <SectionHeader
            title={{ ja: "使い方", en: "How It Works" }}
            subtitle={{ ja: "3ステップで簡単にOB/OG訪問を始められます", en: "Start receiving OB/OG visits in 3 simple steps" }}
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {obogSteps.map((step, i) => (
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
            title={{ ja: "OB/OG向け機能", en: "Alumni Features" }}
            subtitle={{ ja: "後輩をサポートするために必要な機能がすべて揃っています", en: "Everything you need to support the next generation" }}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {obogFeatures.map((feature, i) => (
              <FeatureCard key={i} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 4: OB/OG TESTIMONIALS                            */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-275">
          <SectionHeader
            title={{ ja: "先輩OB/OGの声", en: "What Alumni Say" }}
            subtitle={{ ja: "Senpai Careerで後輩をサポートしているOB/OGの体験談", en: "Stories from alumni supporting the next generation through Senpai Career" }}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {obogTestimonials.map((t, i) => (
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
              label={{ ja: "訪問リクエスト管理", en: "Visit Request Management" }}
              aspectRatio="4/3"
            />
            <ImagePlaceholder
              label={{ ja: "スケジュール管理", en: "Schedule Management" }}
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
            subtitle={{ ja: "以下の大学の出身者がOB/OGとして登録できます", en: "Graduates from these universities can register as OB/OG" }}
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
              ja="あなたの経験が、誰かの未来を変える"
              en="Your experience can change someone's future"
            />
          </h2>
          <p className="mb-8 text-[15px] leading-relaxed" style={{ color: "var(--ink2)" }}>
            <T
              ja="完全無料。2分で登録完了。後輩の就活を、あなたの力で応援しよう。"
              en="Completely free. Sign up in 2 minutes. Support the next generation with your experience."
            />
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/obog/signup" className="btn btn-accent">
              <T ja="OB/OGとして登録" en="Register as Alumni" />
              <span className="arrow">→</span>
            </Link>
            <Link href="/how-it-works" className="btn btn-ghost">
              <T ja="詳しく見る" en="Learn more" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
