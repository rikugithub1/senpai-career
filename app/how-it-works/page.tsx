/**
 * HOW IT WORKS - UNIFIED PAGE
 *
 * URL: /how-it-works
 *
 * All three audience guides rendered inline, each colored by section.
 * Sections:
 * 1. Header
 * 2. Section nav (anchor links)
 * 3. Community guide (teal)
 * 4. OB/OG guide (amber)
 * 5. Business guide (navy)
 * 6. CTA
 */

import PageContainer from "../components/shared/PageContainer";
import SectionHeader from "../components/shared/SectionHeader";
import ImagePlaceholder from "../components/shared/ImagePlaceholder";
import Icon from "../components/shared/Icon";
import { T } from "../components/providers/LanguageProvider";
import {
  studentDetailedSteps,
  obogDetailedSteps,
  businessDetailedSteps,
} from "../data/content";
import Link from "next/link";

/* ── guide config ── */

const guides = [
  {
    id: "community",
    section: "community" as const,
    icon: "graduation-cap",
    ja: "コミュニティユーザー向け",
    en: "For Community Users",
    jaD: "OB/OG訪問を通じて就活を成功させる方法",
    enD: "How to succeed in job hunting through OB/OG visits",
    steps: studentDetailedSteps,
    cta: { href: "/community/signup", ja: "無料で登録する", en: "Sign Up Free" },
    ctaGhost: { href: "/community/login", ja: "ログイン", en: "Log In" },
  },
  {
    id: "obog",
    section: "obog" as const,
    icon: "handshake",
    ja: "OB/OG向け",
    en: "For OB/OG (Alumni)",
    jaD: "後輩をサポートするための登録・利用ガイド",
    enD: "Guide to register and support younger students",
    steps: obogDetailedSteps,
    cta: { href: "/obog/signup", ja: "OB/OGとして登録", en: "Register as OB/OG" },
    ctaGhost: { href: "/obog/login", ja: "ログイン", en: "Log In" },
  },
  {
    id: "business",
    section: "business" as const,
    icon: "building-2",
    ja: "企業向け",
    en: "For Companies",
    jaD: "OB/OG訪問を採用戦略に活用する方法",
    enD: "How to leverage OB/OG visits for recruitment",
    steps: businessDetailedSteps,
    cta: { href: "/business/signup", ja: "企業として登録", en: "Register as Company" },
    ctaGhost: { href: "/contact", ja: "お問い合わせ", en: "Contact Sales" },
  },
];

/* ── shared step renderer ── */

function StepList({ steps }: { steps: typeof studentDetailedSteps }) {
  return (
    <div className="flex flex-col gap-12">
      {steps.map((step, i) => (
        <div key={i} className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-center">
          {i % 2 === 0 && (
            <div className="order-1 md:order-none">
              <ImagePlaceholder
                width={400}
                height={300}
                label={step.screenshot || `Step ${i + 1}`}
                variant="screenshot"
              />
            </div>
          )}

          <div className={i % 2 === 0 ? "order-2 md:order-none" : ""}>
            <div
              className="mb-3 text-3xl font-extrabold"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)", opacity: 0.5 }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mb-2 text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              <T ja={step.ja} en={step.en} />
            </h3>
            <p className="mb-3 text-sm font-semibold" style={{ color: "var(--ink2)" }}>
              <T ja={step.jaD} en={step.enD} />
            </p>
            <div className="mb-4 text-sm leading-relaxed whitespace-pre-line" style={{ color: "var(--ink3)" }}>
              <T ja={step.jaLong} en={step.enLong} />
            </div>
            {step.tips && (
              <div
                className="rounded-lg p-4"
                style={{ background: "var(--accent-soft)", borderLeft: "3px solid var(--color-accent)" }}
              >
                <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--color-accent)" }}>
                  <Icon name="lightbulb" size={14} />
                  Tips
                </div>
                <ul className="flex flex-col gap-1.5 text-sm">
                  {step.tips.map((tip, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="mt-0.5 shrink-0" style={{ color: "var(--color-accent)" }}>
                        <Icon name="chevron-right" size={14} />
                      </span>
                      <T ja={tip.ja} en={tip.en} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {i % 2 === 1 && (
            <div>
              <ImagePlaceholder
                width={400}
                height={300}
                label={step.screenshot || `Step ${i + 1}`}
                variant="screenshot"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── page ── */

export default function HowItWorksPage() {
  return (
    <PageContainer maxWidth="275">
      {/* Header */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-275">
          <SectionHeader
            label="HOW IT WORKS"
            title={{ ja: "Senpai Careerの使い方", en: "How Senpai Career Works" }}
            subtitle={{ ja: "あなたに合ったガイドを選んでください", en: "Choose the guide that fits your role" }}
          />

          {/* Section nav cards — anchor links */}
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {guides.map((guide) => (
              <a
                key={guide.id}
                href={`#${guide.id}`}
                data-section={guide.section}
                className="group rounded-[14px] border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
                style={{ borderColor: "var(--brd)", background: "var(--accent-soft)" }}
              >
                <div className="icon-box mb-3">
                  <Icon name={guide.icon} size={22} />
                </div>
                <div className="mb-1 text-[15px] font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  <T ja={guide.ja} en={guide.en} />
                </div>
                <div className="text-[13px] leading-relaxed" style={{ color: "var(--ink2)" }}>
                  <T ja={guide.jaD} en={guide.enD} />
                </div>
                <div className="mt-3 text-[11px] font-semibold" style={{ color: "var(--color-accent)" }}>
                  ▼ <T ja="ジャンプ" en="Jump" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Each guide section, colored by data-section */}
      {guides.map((guide, gi) => (
        <section
          key={guide.id}
          id={guide.id}
          data-section={guide.section}
          className="border-t px-6 py-16 md:py-20"
          style={{
            borderColor: "var(--brd)",
            background: gi % 2 === 0 ? "var(--bg2)" : undefined,
          }}
        >
          <div className="mx-auto max-w-275">
            {/* Section title */}
            <div className="mb-12 flex items-center gap-3">
              <div className="icon-box" style={{ width: 44, height: 44 }}>
                <Icon name={guide.icon} size={22} />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  <T ja={guide.ja} en={guide.en} />
                </h2>
                <div className="text-[13px]" style={{ color: "var(--ink2)" }}>
                  <T ja={guide.jaD} en={guide.enD} />
                </div>
              </div>
            </div>

            {/* Steps */}
            <StepList steps={guide.steps} />

            {/* Section CTA */}
            <div className="mt-12 flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center">
              <Link href={guide.cta.href} className="btn btn-accent">
                <T ja={guide.cta.ja} en={guide.cta.en} />
                <span className="arrow">→</span>
              </Link>
              <Link href={guide.ctaGhost.href} className="btn btn-ghost">
                <T ja={guide.ctaGhost.ja} en={guide.ctaGhost.en} />
              </Link>
            </div>
          </div>
        </section>
      ))}
    </PageContainer>
  );
}
