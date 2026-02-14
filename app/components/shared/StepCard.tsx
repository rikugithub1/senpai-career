import { T } from "../providers/LanguageProvider";
import { StepData } from "@/app/data/content";

interface StepCardProps {
  step: StepData;
  number: number;
  showArrow?: boolean;
}

/**
 * Step card component for "How It Works" sections
 *
 * Displays a numbered step with title and description
 */
export default function StepCard({ step, number, showArrow = false }: StepCardProps) {
  return (
    <div className="relative rounded-[14px] border p-7 text-center" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
      <div
        className="mb-2 text-[32px] font-extrabold"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)", opacity: 0.3 }}
      >
        {String(number).padStart(2, "0")}
      </div>
      <div className="mb-1.5 text-[15px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
        <T ja={step.ja} en={step.en} />
      </div>
      <div className="text-[13px] leading-relaxed" style={{ color: "var(--ink3)" }}>
        <T ja={step.jaD} en={step.enD} />
      </div>
      {showArrow && (
        <span
          className="absolute right-[-18px] top-1/2 z-10 hidden -translate-y-1/2 text-lg md:block"
          style={{ color: "var(--ink4)" }}
        >
          →
        </span>
      )}
    </div>
  );
}
