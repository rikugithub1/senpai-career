/**
 * COMMUNITY PAGE - Landing Page for Community Users
 *
 * URL: /community
 *
 * Sections:
 * 1. Hero with CTA
 * 2. Social Proof Stats
 * 3. How It Works (3-step process)
 * 4. Features Grid
 * 5. Testimonials (hover to expand)
 * 6. Career Guide Articles
 * 7. Participating Companies (marquee)
 * 8. CTA
 */

import Link from "next/link";
import { T } from "../components/providers/LanguageProvider";
import Icon from "../components/shared/Icon";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/shared/HeroSection";
import SectionHeader from "../components/shared/SectionHeader";
import FeatureCard from "../components/shared/FeatureCard";
import TestimonialCard from "../components/shared/TestimonialCard";
import StepCard from "../components/shared/StepCard";
import CompanyMarquee from "../components/shared/CompanyMarquee";
import StatBar from "../components/shared/StatBar";
import { communityFeatures, getTestimonialsByAudience, careerArticles } from "../data/content";

const studentTestimonials = getTestimonialsByAudience("student");

const communitySteps = [
  {
    icon: "pen-line",
    ja: "無料登録",
    en: "Sign Up Free",
    jaD: "メールアドレスと大学情報を入力するだけ。クレジットカード不要。",
    enD: "Just enter your email and university. No credit card required."
  },
  {
    icon: "search",
    ja: "OB/OGを検索",
    en: "Search for OB/OG",
    jaD: "業界・企業でフィルタリングして、話を聞きたいOB/OGを見つけよう。",
    enD: "Filter by industry and company to find the perfect OB/OG."
  },
  {
    icon: "calendar",
    ja: "訪問を予約",
    en: "Book a Visit",
    jaD: "カレンダーから日程を選んで予約。オンライン・対面どちらも対応。",
    enD: "Pick a date from the calendar. Both online and in-person available."
  },
];

export default function CommunityPage() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      {/* SECTION 1: HERO */}
      <HeroSection
        badge="For Community"
        headingJa={<>OB/OGの声が、<br />あなたの<span style={{ color: "var(--color-accent)" }}>道しるべ</span>に。</>}
        headingEn={<>Let OB/OG guide your<br />path to a <span style={{ color: "var(--color-accent)" }}>career in Japan</span>.</>}
        description={{
          ja: "全国の大学出身のOB/OGに、業界のリアルを聞こう。OB/OG訪問を通じて、就活を圧倒的に有利に。",
          en: "Talk to OB/OG from universities across Japan about life inside their companies. OB/OG visits give you a real edge in job hunting.",
        }}
        primaryCta={{ href: "/community/signup", ja: "無料で登録する", en: "Sign Up Free" }}
        secondaryCta={{ href: "/community/login", ja: "ログイン", en: "Log In" }}
        cardTitle={{ ja: "できること", en: "What you can do" }}
        cardFeatures={communityFeatures.slice(0, 4)}
      />

      {/* SECTION 2: SOCIAL PROOF STATS */}
      <StatBar stats={[
        { icon: "graduation-cap", value: "500+", ja: "登録OB/OG数", en: "OB/OG registered" },
        { icon: "building-2", value: "50+", ja: "参加企業", en: "Participating companies" },
        { icon: "handshake", value: "1,200+", ja: "OB訪問の実施回数", en: "Visits completed" },
        { icon: "heart", value: "¥0", ja: "登録・利用すべて無料", en: "Free to register & use" },
      ]} />

      {/* SECTION 3: HOW IT WORKS */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-180">
          <SectionHeader
            title={{ ja: "使い方", en: "How It Works" }}
            subtitle={{ ja: "3ステップで簡単にOB/OG訪問", en: "3 simple steps to connect with OB/OG" }}
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {communitySteps.map((step, i) => (
              <StepCard key={i} number={i + 1} step={step} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/how-it-works" className="btn btn-ghost btn-sm" style={{ gap: 6 }}>
              <Icon name="arrow-right" size={14} />
              <T ja="詳しい使い方を見る" en="See detailed guide" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURES */}
      <section className="px-6 py-16 md:py-20" style={{ background: "var(--bg2)" }}>
        <div className="mx-auto max-w-275">
          <SectionHeader
            title={{ ja: "Senpai Careerでできること", en: "What You Can Do" }}
            subtitle={{ ja: "就活成功のために必要な機能がすべて揃っています", en: "Everything you need to succeed in your job hunt" }}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {communityFeatures.map((feature, i) => (
              <FeatureCard key={i} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: TESTIMONIALS */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-275">
          <SectionHeader
            title={{ ja: "コミュニティユーザーの声", en: "What Users Say" }}
            subtitle={{ ja: "Senpai Careerで就活を成功させたユーザーたちの体験談", en: "Success stories from users who leveraged Senpai Career" }}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {studentTestimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CAREER GUIDE ARTICLES */}
      <section className="px-6 py-16 md:py-20" style={{ background: "var(--bg2)" }}>
        <div className="mx-auto max-w-275">
          <SectionHeader
            title={{ ja: "就活ガイド", en: "Career Guide" }}
            subtitle={{ ja: "就活に役立つ記事を読もう", en: "Read helpful career articles" }}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {careerArticles.slice(0, 3).map((article, i) => (
              <Link
                key={i}
                href={`/community/articles/${article.slug}`}
                className="group rounded-[14px] border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
                style={{ borderColor: "var(--brd)", background: "var(--card)" }}
              >
                <div className="icon-box mb-3">
                  <Icon name={article.icon} size={20} />
                </div>
                <div className="mb-2 text-[15px] font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  <T ja={article.title.ja} en={article.title.en} />
                </div>
                <div className="mb-3 text-[13px] leading-relaxed" style={{ color: "var(--ink2)" }}>
                  <T ja={article.excerpt.ja} en={article.excerpt.en} />
                </div>
                <div className="text-[12px] font-medium" style={{ color: "var(--ink4)" }}>
                  <T ja={`${article.readTime}分で読める`} en={`${article.readTime} min read`} />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/community/articles" className="text-sm font-semibold" style={{ color: "var(--color-accent)" }}>
              <T ja="すべての記事を見る →" en="View all articles →" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: PARTICIPATING COMPANIES */}
      <section className="px-6 py-16 md:py-20">
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

      {/* SECTION 8: FINAL CTA */}
      <section className="cta-section px-6 py-16 md:py-20">
        <div className="mx-auto max-w-160 text-center">
          <h2
            className="mb-4 font-extrabold leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px,3vw,32px)" }}
          >
            <T ja="今すぐOB/OGとつながろう" en="Connect with OB/OG today" />
          </h2>
          <p className="mb-8 text-[15px] leading-relaxed" style={{ color: "var(--ink2)" }}>
            <T ja="基本無料。クレジットカード不要。2分で登録完了。" en="Free basic plan. No credit card required. Sign up in 2 minutes." />
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/community/signup" className="btn btn-accent">
              <T ja="無料で登録する" en="Sign Up Free" />
              <span className="arrow">→</span>
            </Link>
            <Link href="/community/login" className="btn btn-ghost">
              <T ja="ログイン" en="Log In" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
