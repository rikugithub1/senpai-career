"use client";

import { useState } from "react";
import { T, useLang } from "../providers/LanguageProvider";
import { TestimonialData } from "@/app/data/content";
import Icon from "./Icon";

function formatDate(dateStr: string, lang: "ja" | "en"): string {
  const [year, month] = dateStr.split("-").map(Number);
  if (lang === "ja") {
    return `${year}年${month}月`;
  }
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[month - 1]} ${year}`;
}

interface TestimonialCardProps {
  testimonial: TestimonialData;
}

/**
 * Testimonial card — compact by default, click to expand.
 * Shows truncated quote normally, reveals full quote on toggle.
 */
export default function TestimonialCard({ testimonial: t }: TestimonialCardProps) {
  const [expanded, setExpanded] = useState(false);
  const { lang } = useLang();

  return (
    <div
      className="cursor-default rounded-[14px] border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
      style={{ borderColor: "var(--brd)", background: "var(--card)" }}
    >
      {/* Header: avatar + name */}
      <div className="mb-3 flex items-center gap-3">
        <div
          className="av"
          style={{
            background: "var(--accent-soft)",
            color: "var(--color-accent)",
            width: "30px",
            height: "30px",
            fontSize: "11px",
          }}
        >
          {t.i}
        </div>
        <div>
          <div className="text-[13px] font-semibold">
            <T ja={t.ja} en={t.ja} />
          </div>
          <div className="text-[11px]" style={{ color: "var(--ink3)" }}>
            <T ja={t.r} en={t.rE} />
          </div>
          {t.date && (
            <div className="text-[10px]" style={{ color: "var(--ink4)" }}>
              {formatDate(t.date, lang)}
            </div>
          )}
        </div>
      </div>

      {/* Star rating */}
      {t.rating && (
        <div className="mb-2 flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon
              key={i}
              name="star"
              size={13}
              style={{
                color: i < t.rating! ? "var(--color-accent)" : "var(--ink4)",
              }}
              fill={i < t.rating! ? "var(--color-accent)" : "none"}
            />
          ))}
        </div>
      )}

      {/* Quote: truncated by default, expanded on toggle */}
      <div
        className={`relative overflow-hidden transition-all duration-300 ease-in-out ${expanded ? "max-h-[20em]" : "max-h-[3.2em]"}`}
      >
        <p className="text-[13px] leading-relaxed" style={{ color: "var(--ink2)" }}>
          &ldquo;<T ja={t.q} en={t.qE} />&rdquo;
        </p>
      </div>

      {/* Read more toggle */}
      <button
        className="mt-1.5 cursor-pointer text-[11px] font-medium"
        style={{ color: "var(--color-accent)" }}
        onClick={() => setExpanded(!expanded)}
      >
        <T ja={expanded ? "閉じる" : "続きを読む"} en={expanded ? "Show less" : "Read more"} />
      </button>
    </div>
  );
}
