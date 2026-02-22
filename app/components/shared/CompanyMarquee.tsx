"use client";

import { T } from "../providers/LanguageProvider";
import { participatingCompanies } from "@/app/data/content";
import Icon from "./Icon";

/**
 * Infinite horizontal scrolling marquee of participating company names.
 * Duplicates content for seamless loop. Pauses on hover.
 * Gradient edge masks for clean fade-in/out effect.
 */
export default function CompanyMarquee() {
  // Double the list for seamless infinite scroll
  const companies = [...participatingCompanies, ...participatingCompanies];

  return (
    <div className="marquee-container overflow-hidden py-2">
      <div className="marquee-track flex items-center gap-10">
        {companies.map((company, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-2 rounded-lg border px-5 py-3 text-[13px] font-semibold whitespace-nowrap"
            style={{
              borderColor: "var(--brd)",
              background: "var(--card)",
              color: "var(--ink2)",
              fontFamily: "var(--font-display)",
            }}
          >
            <Icon name="building-2" size={16} style={{ color: "var(--ink3)" }} />
            <span className="ja-only">{company.name}</span>
            <span className="en-only">{company.nameEn}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
