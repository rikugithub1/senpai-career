import { T } from "../providers/LanguageProvider";

interface SectionHeaderProps {
  label?: string;
  title: { ja: string; en: string };
  subtitle?: { ja: string; en: string };
  align?: "left" | "center";
}

/**
 * Reusable section header component
 *
 * Provides consistent styling for section headers across all pages
 */
export default function SectionHeader({ label, title, subtitle, align = "center" }: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-8 ${alignClass}`}>
      {label && <div className="sec-label">{label}</div>}
      <h2
        className="mb-2 font-bold tracking-tight"
        style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px,2.5vw,28px)" }}
      >
        <T ja={title.ja} en={title.en} />
      </h2>
      {subtitle && (
        <p className="text-sm" style={{ color: "var(--ink3)" }}>
          <T ja={subtitle.ja} en={subtitle.en} />
        </p>
      )}
    </div>
  );
}
