import { T } from "../providers/LanguageProvider";
import { FeatureData } from "@/app/data/content";

interface FeatureCardProps {
  feature: FeatureData;
}

/**
 * Reusable feature card component
 *
 * Displays a feature with icon, title, and description
 */
export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="rounded-[14px] border p-6" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
      <div className="emoji mb-3">{feature.icon}</div>
      <div className="mb-1.5 text-[15px] font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        <T ja={feature.ja} en={feature.en} />
      </div>
      <div className="text-[13px] leading-relaxed" style={{ color: "var(--ink3)" }}>
        <T ja={feature.jaD} en={feature.enD} />
      </div>
    </div>
  );
}
