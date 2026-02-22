/**
 * BUSINESS PAGE - Landing Page for Companies
 *
 * URL: /business
 *
 * Sections:
 * 1. Hero with CTA
 * 2. Social Proof Stats
 * 3. How It Works (3-step process)
 * 4. Official OB/OG Slots + Paid Messaging
 * 5. Features Grid
 * 6. Company Testimonials (hover to expand)
 * 7. Participating Companies (marquee)
 * 8. CTA
 */

import Link from "next/link";
import { T } from "../components/providers/LanguageProvider";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/shared/HeroSection";
import SectionHeader from "../components/shared/SectionHeader";
import FeatureCard from "../components/shared/FeatureCard";
import TestimonialCard from "../components/shared/TestimonialCard";
import StepCard from "../components/shared/StepCard";
import CompanyMarquee from "../components/shared/CompanyMarquee";
import StatBar from "../components/shared/StatBar";
import Icon from "../components/shared/Icon";
import { businessFeatures, getTestimonialsByAudience, obSlotBenefits } from "../data/content";

const companyTestimonials = getTestimonialsByAudience("company");

const businessSteps = [
  {
    icon: "pen-line",
    ja: "企業登録",
    en: "Register Your Company",
    jaD: "企業情報を登録し、社内のOB/OGをプラットフォームに招待します。",
    enD: "Register your company and invite employees to join as OB/OG."
  },
  {
    icon: "handshake",
    ja: "コミュニティユーザーとマッチング",
    en: "Match with Users",
    jaD: "興味のあるコミュニティユーザーからOB訪問の申し込みが届きます。",
    enD: "Receive visit requests from interested community users."
  },
  {
    icon: "bar-chart-3",
    ja: "採用を管理",
    en: "Manage Recruitment",
    jaD: "パイプラインで採用状況を一元管理します。",
    enD: "Track all recruitment stages in one place."
  },
];

export default function BusinessPage() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }} data-section="business">
      {/* SECTION 1: HERO */}
      <HeroSection
        badge="For Companies"
        headingJa={<>優秀な<span style={{ color: "var(--color-accent)" }}>留学生</span>に、<br />自然にリーチする。</>}
        headingEn={<>Reach top <span style={{ color: "var(--color-accent)" }}>global talent</span><br />through natural connections.</>}
        description={{
          ja: "OB/OG訪問を通じて、全国の大学の意欲ある留学生と自然な接点を。採用パイプラインの構築から候補者管理まで。",
          en: "Connect naturally with motivated international students from universities across Japan through OB/OG visits. From pipeline building to candidate management.",
        }}
        primaryCta={{ href: "/business/signup", ja: "企業として登録", en: "Register as Company" }}
        secondaryCta={{ href: "/business/login", ja: "ログイン", en: "Log In" }}
        cardTitle={{ ja: "管理機能", en: "Management Tools" }}
        cardFeatures={businessFeatures.slice(0, 4)}
      />

      {/* SECTION 2: SOCIAL PROOF STATS */}
      <StatBar stats={[
        { icon: "users", value: "500+", ja: "採用候補の学生数", en: "Student candidates" },
        { icon: "graduation-cap", value: "30+", ja: "対応大学数", en: "Partner universities" },
        { icon: "book-open", value: "20+", ja: "専攻分野", en: "Majors represented" },
        { icon: "building-2", value: "50+", ja: "導入企業数", en: "Companies onboarded" },
      ]} />

      {/* SECTION 3: HOW IT WORKS */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-180">
          <SectionHeader
            title={{ ja: "使い方", en: "How It Works" }}
            subtitle={{ ja: "3ステップで採用プロセスを効率化", en: "Streamline your hiring in 3 steps" }}
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {businessSteps.map((step, i) => (
              <StepCard key={i} number={i + 1} step={step} icon={step.icon} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/business/how-it-works" className="btn btn-ghost btn-sm">
              <T ja="詳しい使い方を見る" en="See detailed guide" />
              <Icon name="arrow-right" size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: OFFICIAL OB/OG SLOTS + MESSAGING */}
      <section className="px-6 py-16 md:py-20" style={{ background: "var(--bg2)" }}>
        <div className="mx-auto max-w-275">
          <SectionHeader
            title={{ ja: "公式OB/OG枠", en: "Official OB/OG Slots" }}
            subtitle={{ ja: "自社のOB/OGを公式認証し、コミュニティユーザーからの信頼度を高めましょう", en: "Verify your company's OB/OG to boost credibility with community users" }}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {obSlotBenefits.map((benefit, i) => (
              <FeatureCard key={i} feature={benefit} />
            ))}
          </div>

          {/* Paid messaging highlight */}
          <div
            className="mt-8 rounded-[14px] border p-6"
            style={{ borderColor: "var(--brd)", background: "var(--accent-soft)" }}
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mb-1 flex items-center gap-2 text-[15px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  <Icon name="message-square" size={18} />
                  <T ja="企業からのダイレクトメッセージ" en="Direct Messages from Companies" />
                </div>
                <div className="text-[13px]" style={{ color: "var(--ink2)" }}>
                  <T
                    ja="気になるコミュニティユーザーにダイレクトメッセージを送信可能。プランに応じて月額固定またはメッセージ単位で利用できます。"
                    en="Send direct messages to promising community users. Available as monthly plans or pay-per-message."
                  />
                </div>
              </div>
              <Link href="/business/pricing" className="btn btn-accent shrink-0">
                <T ja="プランを見る" en="View Plans" />
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURES */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-275">
          <SectionHeader
            title={{ ja: "採用を成功に導く機能", en: "Tools for Successful Hiring" }}
            subtitle={{ ja: "採用を成功に導くための機能がすべて揃っています", en: "Everything you need for successful recruitment" }}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {businessFeatures.slice(0, 6).map((feature, i) => (
              <FeatureCard key={i} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: COMPANY TESTIMONIALS */}
      <section className="px-6 py-16 md:py-20" style={{ background: "var(--bg2)" }}>
        <div className="mx-auto max-w-275">
          <SectionHeader
            title={{ ja: "導入企業の声", en: "What Companies Say" }}
            subtitle={{ ja: "Senpai Careerで採用成功した企業の体験談", en: "Success stories from companies using Senpai Career" }}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {companyTestimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: PARTICIPATING COMPANIES */}
      <section className="px-6 py-16 md:py-20" style={{ background: "var(--bg2)" }}>
        <div className="mx-auto max-w-275">
          <SectionHeader
            title={{ ja: "参加企業", en: "Participating Companies" }}
            subtitle={{ ja: "すでに多くの企業がSenpai Careerを活用しています", en: "Many companies are already leveraging Senpai Career" }}
          />
          <div className="mt-12">
            <CompanyMarquee />
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="cta-section px-6 py-16 md:py-20">
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
              ja="まずは企業として登録。導入をサポートいたします。"
              en="Register as a company to get started. We'll support you through onboarding."
            />
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/business/signup" className="btn btn-accent">
              <T ja="企業として登録" en="Register Company" />
              <span className="arrow">→</span>
            </Link>
            <Link href="/business/login" className="btn btn-ghost">
              <T ja="ログイン" en="Log In" />
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              <T ja="お問い合わせ" en="Contact Us" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
