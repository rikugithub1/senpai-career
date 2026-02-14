import { T } from "../providers/LanguageProvider";
import { TestimonialData } from "@/app/data/content";

interface TestimonialCardProps {
  testimonial: TestimonialData;
}

/**
 * Reusable testimonial card component
 *
 * Displays a user testimonial with avatar, name, role, and quote
 */
export default function TestimonialCard({ testimonial: t }: TestimonialCardProps) {
  return (
    <div className="rounded-[14px] border p-5" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
      <div className="mb-3 flex items-center gap-3">
        <div className="av av-md" style={{ background: t.bg, color: t.c }}>
          {t.i}
        </div>
        <div>
          <div className="text-[13px] font-semibold">
            <T ja={t.ja} en={t.ja} />
          </div>
          <div className="text-[11px]" style={{ color: "var(--ink3)" }}>
            <T ja={t.r} en={t.rE} />
          </div>
        </div>
      </div>
      <p className="text-[13px] leading-relaxed" style={{ color: "var(--ink2)" }}>
        &ldquo;<T ja={t.q} en={t.qE} />&rdquo;
      </p>
    </div>
  );
}
