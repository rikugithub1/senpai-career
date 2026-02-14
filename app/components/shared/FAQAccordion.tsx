"use client";

import { useState } from "react";
import { T } from "../providers/LanguageProvider";
import { FAQData } from "@/app/data/content";

interface FAQAccordionProps {
  faq: FAQData;
}

/**
 * Expandable FAQ accordion component
 *
 * Click to expand/collapse the answer
 */
export default function FAQAccordion({ faq }: FAQAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="rounded-[14px] border p-5 cursor-pointer transition-all hover:shadow-sm"
      style={{ borderColor: "var(--brd)", background: "var(--card)" }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="text-[14px] font-semibold" style={{ fontFamily: "var(--font-display)" }}>
          <T ja={faq.q} en={faq.qE} />
        </div>
        <div
          className="shrink-0 text-lg transition-transform"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ▼
        </div>
      </div>
      {isOpen && (
        <div className="mt-2 text-[13px] leading-relaxed" style={{ color: "var(--ink2)" }}>
          <T ja={faq.a} en={faq.aE} />
        </div>
      )}
    </div>
  );
}
