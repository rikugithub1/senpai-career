import { T } from "../providers/LanguageProvider";
import Icon from "./Icon";

export interface StatItem {
  icon: string;
  value: string;
  ja: string;
  en: string;
}

interface StatBarProps {
  stats: StatItem[];
}

/**
 * Compact social-proof stat bar — consistent across all landing pages.
 * Each stat has an icon + bold value + label, laid out horizontally.
 */
export default function StatBar({ stats }: StatBarProps) {
  return (
    <section className="border-t px-6 py-10" style={{ borderColor: "var(--brd)", background: "var(--bg2)" }}>
      <div className="mx-auto grid max-w-220 grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px]"
              style={{ background: "var(--accent-soft)" }}
            >
              <Icon name={s.icon} size={18} style={{ color: "var(--color-accent)" }} />
            </div>
            <div>
              <div
                className="text-xl font-extrabold leading-none tracking-tight"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)" }}
              >
                {s.value}
              </div>
              <div className="mt-0.5 text-[11px] font-medium leading-tight" style={{ color: "var(--ink3)" }}>
                <T ja={s.ja} en={s.en} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
