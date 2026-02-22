import { T } from "../providers/LanguageProvider";
import { FeatureData } from "@/app/data/content";
import Icon from "./Icon";

interface FeatureCardProps {
  feature: FeatureData;
  className?: string;
}

/**
 * Redesigned feature card — left accent border, clean editorial style.
 * Removes the emoji-box format to reduce "AI-generated" look.
 */
export default function FeatureCard({ feature, className }: FeatureCardProps) {
  return (
    <div
      className={`rounded-[14px] border-l-[3px] border p-5 transition-all hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5${className ? ` ${className}` : ""}`}
      style={{
        borderLeftColor: "var(--color-accent)",
        borderColor: "var(--brd)",
        borderLeftWidth: "3px",
        background: "var(--card)",
      }}
    >
      <div className="mb-2 flex items-center gap-2.5">
        <div className="icon-box icon-box-sm"><Icon name={feature.icon} size={16} /></div>
        <span
          className="text-[15px] font-bold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <T ja={feature.ja} en={feature.en} />
        </span>
      </div>
      <div className="text-[13px] leading-relaxed" style={{ color: "var(--ink2)" }}>
        <T ja={feature.jaD} en={feature.enD} />
      </div>
    </div>
  );
}
