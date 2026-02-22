import { ReactNode } from "react";
import Link from "next/link";
import { T } from "../providers/LanguageProvider";
import Icon from "./Icon";

interface HeroFeature {
  icon: string;
  ja: string;
  en: string;
  jaD: string;
  enD: string;
}

interface HeroSectionProps {
  badge: string;
  headingJa: ReactNode;
  headingEn: ReactNode;
  description: { ja: string; en: string };
  primaryCta: { href: string; ja: string; en: string };
  secondaryCta: { href: string; ja: string; en: string };
  cardTitle: { ja: string; en: string };
  cardFeatures: HeroFeature[];
}

export default function HeroSection({
  badge,
  headingJa,
  headingEn,
  description,
  primaryCta,
  secondaryCta,
  cardTitle,
  cardFeatures,
}: HeroSectionProps) {
  return (
    <section
      className="px-6 pt-20 pb-8 md:pt-24 md:pb-10"
      style={{
        background: "linear-gradient(180deg, var(--accent-soft) 0%, var(--bg) 100%)"
      }}
    >
      <div className="mx-auto max-w-275">
        <div className="grid items-start gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
          {/* Left: Main Content */}
          <div>
            <div
              className="mb-5 flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-widest"
              style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)" }}
            >
              <span className="tag tag-accent">{badge}</span>
            </div>

            <h1
              className="font-extrabold leading-[1.18] tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px,3.5vw,38px)" }}
            >
              <span className="ja-only">{headingJa}</span>
              <span className="en-only">{headingEn}</span>
            </h1>

            <p className="mt-5 mb-8 max-w-xl text-[14.5px] leading-relaxed" style={{ color: "var(--ink2)", textWrap: "balance" }}>
              <T ja={description.ja} en={description.en} />
            </p>

            <div className="flex flex-col gap-2.5 sm:flex-row">
              <Link href={primaryCta.href} className="btn btn-accent">
                <T ja={primaryCta.ja} en={primaryCta.en} />
                <span className="arrow">→</span>
              </Link>
              <Link href={secondaryCta.href} className="btn btn-ghost">
                <T ja={secondaryCta.ja} en={secondaryCta.en} />
              </Link>
            </div>
          </div>

          {/* Right: Quick Features Card */}
          <div className="flex flex-col gap-4 rounded-[14px] border p-7" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
            <div className="text-[15px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
              <T ja={cardTitle.ja} en={cardTitle.en} />
            </div>

            {cardFeatures.map((f, i) => (
              <div key={i} className="flex items-start gap-2.5 text-[13px]">
                <div className="icon-box icon-box-sm shrink-0"><Icon name={f.icon} size={16} /></div>
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
  );
}
