import Link from "next/link";
import { T } from "../providers/LanguageProvider";
import { PricingTier } from "@/app/data/content";
import Icon from "./Icon";

interface PricingCardProps {
  tier: PricingTier;
}

/**
 * Pricing tier card component
 *
 * Displays pricing information with features and CTA
 */
export default function PricingCard({ tier }: PricingCardProps) {
  const cardClass = tier.highlight
    ? "rounded-[14px] border-2 p-6 relative"
    : "rounded-[14px] border p-6";

  const borderColor = tier.highlight
    ? "var(--color-accent)"
    : "var(--brd)";

  return (
    <div className={cardClass} style={{ borderColor, background: "var(--card)" }}>
      {tier.badge && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold"
          style={{ background: "var(--color-accent)", color: "white" }}
        >
          <T ja={tier.badge.ja} en={tier.badge.en} />
        </div>
      )}

      <div className="mb-4 text-center">
        <h3 className="mb-1 text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
          <T ja={tier.name.ja} en={tier.name.en} />
        </h3>
        <div className="mb-1 text-3xl font-extrabold" style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)" }}>
          <T ja={tier.price.ja} en={tier.price.en} />
        </div>
        <div className="text-xs" style={{ color: "var(--ink3)" }}>
          <T ja={tier.period.ja} en={tier.period.en} />
        </div>
      </div>

      <p className="mb-4 text-center text-sm" style={{ color: "var(--ink2)" }}>
        <T ja={tier.description.ja} en={tier.description.en} />
      </p>

      <div className="mb-5 flex flex-col gap-2.5">
        {tier.features.map((feature, i) => (
          <div key={i} className="flex items-start gap-2 text-[13px]">
            <span style={{ color: feature.included ? "var(--green)" : "var(--ink4)" }}>
              <Icon name={feature.included ? "check" : "minus"} size={14} />
            </span>
            <span style={{ color: feature.included ? "var(--ink)" : "var(--ink3)" }}>
              <T ja={feature.ja} en={feature.en} />
            </span>
          </div>
        ))}
      </div>

      <Link
        href={tier.cta.href}
        className={`btn w-full ${tier.cta.variant === "accent" ? "btn-accent" : "btn-ghost"}`}
      >
        <T ja={tier.cta.label.ja} en={tier.cta.label.en} />
        {tier.cta.variant === "accent" && <span className="arrow">→</span>}
      </Link>
    </div>
  );
}
