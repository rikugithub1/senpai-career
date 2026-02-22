/**
 * OB/OG PAGE - Landing Page for OB/OG (Alumni)
 *
 * URL: /obog
 *
 * Sections:
 * 1. Hero with CTA
 * 2. Social Proof Stats
 * 3. How It Works (3-step process)
 * 4. Features Grid
 * 5. OB/OG Testimonials (hover to expand)
 * 6. Participating Companies (marquee)
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
import StatBar from "../components/shared/StatBar";
import CompanyMarquee from "../components/shared/CompanyMarquee";
import { obogFeatures, getTestimonialsByAudience } from "../data/content";

const obogTestimonials = getTestimonialsByAudience("obog");

const obogSteps = [
  {
    icon: "user-plus",
    ja: "無料登録",
    en: "Sign Up Free",
    jaD: "会社のメールアドレスでアカウントを作成するだけ。2分で完了。",
    enD: "Just create an account with your company email. Done in 2 minutes.",
  },
  {
    icon: "calendar-check",
    ja: "スケジュール設定",
    en: "Set Availability",
    jaD: "対応可能な曜日・時間帯を登録。コミュニティユーザーに通知され、検索で上位表示。",
    enD: "Register your available days and time slots. Community users get notified and you rank higher.",
  },
  {
    icon: "users",
    ja: "後輩と面談",
    en: "Meet Community Users",
    jaD: "コミュニティユーザーからの訪問リクエストを承認し、キャリアのアドバイスを共有。",
    enD: "Approve visit requests from community users and share your career insights.",
  },
];


export default function ObogPage() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>

      {/* SECTION 1: HERO */}
      <HeroSection
        badge="For OB/OG (Alumni)"
        headingJa={<>後輩の未来を、あなたの<br /><span style={{ color: "var(--color-accent)" }}>経験</span>で照らす。</>}
        headingEn={<>Light the way for future<br />generations with your <span style={{ color: "var(--color-accent)" }}>experience</span>.</>}
        description={{
          ja: "全国の大学の留学生が、あなたの経験を求めています。OB/OG訪問を通じて、後輩のキャリアを応援しませんか。",
          en: "International students from universities across Japan want to learn from your experience. Support their careers through OB/OG visits.",
        }}
        primaryCta={{ href: "/obog/signup", ja: "OB/OGとして登録", en: "Register as OB/OG" }}
        secondaryCta={{ href: "/obog/login", ja: "ログイン", en: "Log In" }}
        cardTitle={{ ja: "OB/OGとしてできること", en: "What you can do as OB/OG" }}
        cardFeatures={obogFeatures.slice(0, 3)}
      />

      {/* SECTION 2: SOCIAL PROOF STATS */}
      <StatBar stats={[
        { icon: "users", value: "500+", ja: "OB訪問を希望する学生", en: "Students seeking OB/OG" },
        { icon: "star", value: "4.9", ja: "学生からの平均評価", en: "Avg. rating from students" },
        { icon: "handshake", value: "1,200+", ja: "OB訪問の実施回数", en: "Visits completed" },
        { icon: "heart", value: "¥0", ja: "登録・利用すべて無料", en: "Free to register & use" },
      ]} />

      {/* SECTION 3: HOW IT WORKS */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-180">
          <SectionHeader
            title={{ ja: "使い方", en: "How It Works" }}
            subtitle={{ ja: "3ステップで簡単にOB/OG訪問を始められます", en: "Start receiving OB/OG visits in 3 simple steps" }}
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {obogSteps.map((step, i) => (
              <StepCard key={i} number={i + 1} step={step} icon={step.icon} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/obog/how-it-works" className="btn btn-ghost btn-sm">
              <T ja="詳しい使い方を見る →" en="See detailed guide →" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURES */}
      <section className="px-6 py-16 md:py-20" style={{ background: "var(--bg2)" }}>
        <div className="mx-auto max-w-275">
          <SectionHeader
            title={{ ja: "OB/OGとしてできること", en: "OB/OG Features" }}
            subtitle={{ ja: "後輩をサポートするために必要な機能がすべて揃っています", en: "Everything you need to support the next generation" }}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 [&>*:last-child:nth-child(3n+1)]:col-span-full [&>*:last-child:nth-child(3n+1)]:max-w-sm [&>*:last-child:nth-child(3n+1)]:mx-auto">
            {obogFeatures.map((feature, i) => (
              <FeatureCard key={i} feature={feature} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/obog/signup" className="btn btn-accent">
              <T ja="OB/OGとして登録" en="Register as OB/OG" />
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: OB/OG TESTIMONIALS */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-275">
          <SectionHeader
            title={{ ja: "他のOB/OGの声", en: "What Other OB/OG Say" }}
            subtitle={{ ja: "Senpai Careerで後輩をサポートしているOB/OGの体験談", en: "Stories from OB/OG supporting the next generation through Senpai Career" }}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {obogTestimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: PARTICIPATING COMPANIES */}
      <section className="px-6 py-16 md:py-20" style={{ background: "var(--bg2)" }}>
        <div className="mx-auto max-w-275">
          <SectionHeader
            title={{ ja: "参加企業", en: "Participating Companies" }}
            subtitle={{ ja: "OB/OGが所属する企業の一部をご紹介", en: "Some of the companies our OB/OG work at" }}
          />
          <div className="mt-12">
            <CompanyMarquee />
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section className="cta-section px-6 py-16 md:py-20">
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
              <T ja="OB/OGとして登録" en="Register as OB/OG" />
              <span className="arrow">→</span>
            </Link>
            <Link href="/obog/login" className="btn btn-ghost">
              <T ja="ログイン" en="Log In" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
