"use client";

import { useState } from "react";
import type { Metadata } from "next";
import PageContainer from "../components/shared/PageContainer";
import SectionHeader from "../components/shared/SectionHeader";
import FAQAccordion from "../components/shared/FAQAccordion";
import { T } from "../components/providers/LanguageProvider";
import { faqs, getFAQsByCategory } from "../data/content";
import Link from "next/link";

/**
 * FAQ Page - Frequently Asked Questions
 *
 * Features:
 * - Category filtering (Students, Companies, General, Technical)
 * - Expandable accordion items
 * - Search box (placeholder for future)
 * - Link to contact page for more help
 */
export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", ja: "すべて", en: "All" },
    { id: "students", ja: "学生向け", en: "Students" },
    { id: "companies", ja: "企業向け", en: "Companies" },
    { id: "general", ja: "一般", en: "General" },
    { id: "technical", ja: "技術的", en: "Technical" },
  ];

  const filteredFAQs = getFAQsByCategory(activeCategory);

  return (
    <PageContainer maxWidth="180">
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-180">
          {/* Header */}
          <SectionHeader
            label="FAQ"
            title={{ ja: "よくある質問", en: "Frequently Asked Questions" }}
            subtitle={{ ja: "ご質問への回答をカテゴリ別にご覧いただけます", en: "Find answers organized by category" }}
          />

          {/* Search Box (Placeholder) */}
          <div className="mb-6">
            <div className="sbox">
              <span style={{ color: "var(--ink3)" }}>🔍</span>
              <input
                type="text"
                placeholder="検索... / Search..."
                className="flex-1 bg-transparent outline-none"
                style={{ color: "var(--ink)" }}
                disabled
              />
            </div>
            <div className="mt-2 text-xs text-center" style={{ color: "var(--ink4)" }}>
              <T ja="検索機能は近日公開予定です" en="Search coming soon" />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="mb-6 flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? "text-white"
                    : ""
                }`}
                style={{
                  background: activeCategory === cat.id ? "var(--color-accent)" : "var(--bg2)",
                  color: activeCategory === cat.id ? "white" : "var(--ink2)",
                }}
              >
                <T ja={cat.ja} en={cat.en} />
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="flex flex-col gap-3">
            {filteredFAQs.map((faq, i) => (
              <FAQAccordion key={i} faq={faq} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-[14px] border p-8 text-center" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
            <h3 className="mb-2 text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
              <T ja="まだ質問がありますか？" en="Still have questions?" />
            </h3>
            <p className="mb-4 text-sm" style={{ color: "var(--ink3)" }}>
              <T
                ja="お気軽にお問い合わせください。チームが迅速に対応いたします。"
                en="Feel free to contact us. Our team will respond promptly."
              />
            </p>
            <Link href="/contact" className="btn btn-accent">
              <T ja="お問い合わせ" en="Contact Us" />
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
