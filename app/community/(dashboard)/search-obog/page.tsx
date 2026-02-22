"use client";

import { useState } from "react";
import { T } from "../../../components/providers/LanguageProvider";
import Icon from "../../../components/shared/Icon";

/* ── Mock OB/OG Data ── */

interface OBOGProfile {
  id: number;
  initials: string;
  name: string;
  company: { ja: string; en: string };
  role: { ja: string; en: string };
  topics: { ja: string; en: string }[];
  industry: string;
  verified: boolean;
  available: boolean;
  rating: number;
  visits: number;
}

const mockProfiles: OBOGProfile[] = [
  {
    id: 1, initials: "KY", name: "K. Yamada",
    company: { ja: "McKinsey & Company", en: "McKinsey & Company" },
    role: { ja: "コンサルタント", en: "Consultant" },
    topics: [{ ja: "コンサル", en: "Consulting" }, { ja: "金融", en: "Finance" }, { ja: "キャリアパス", en: "Career Path" }],
    industry: "consulting", verified: true, available: true, rating: 4.9, visits: 47,
  },
  {
    id: 2, initials: "RW", name: "R. Watanabe",
    company: { ja: "Goldman Sachs", en: "Goldman Sachs" },
    role: { ja: "アナリスト", en: "Analyst" },
    topics: [{ ja: "外資金融", en: "IB" }, { ja: "投資", en: "Investment" }],
    industry: "finance", verified: true, available: true, rating: 4.8, visits: 32,
  },
  {
    id: 3, initials: "HK", name: "H. Kim",
    company: { ja: "Morgan Stanley", en: "Morgan Stanley" },
    role: { ja: "VP", en: "VP" },
    topics: [{ ja: "外資金融", en: "Foreign Finance" }, { ja: "キャリアアップ", en: "Career Growth" }],
    industry: "finance", verified: true, available: false, rating: 4.7, visits: 28,
  },
  {
    id: 4, initials: "YL", name: "Y. Li",
    company: { ja: "三井物産", en: "Mitsui & Co." },
    role: { ja: "総合職", en: "General Position" },
    topics: [{ ja: "商社", en: "Trading" }, { ja: "グローバル", en: "Global" }],
    industry: "trading", verified: false, available: true, rating: 4.6, visits: 15,
  },
  {
    id: 5, initials: "TN", name: "T. Nakamura",
    company: { ja: "Google", en: "Google" },
    role: { ja: "ソフトウェアエンジニア", en: "Software Engineer" },
    topics: [{ ja: "テック", en: "Tech" }, { ja: "エンジニア", en: "Engineering" }],
    industry: "tech", verified: true, available: true, rating: 4.9, visits: 21,
  },
  {
    id: 6, initials: "AS", name: "A. Suzuki",
    company: { ja: "トヨタ自動車", en: "Toyota Motor" },
    role: { ja: "プロダクトマネージャー", en: "Product Manager" },
    topics: [{ ja: "メーカー", en: "Manufacturing" }, { ja: "PM", en: "PM" }],
    industry: "manufacturing", verified: false, available: true, rating: 4.5, visits: 12,
  },
];

const industries = [
  { value: "", ja: "すべての業界", en: "All Industries" },
  { value: "consulting", ja: "コンサル", en: "Consulting" },
  { value: "finance", ja: "金融", en: "Finance" },
  { value: "trading", ja: "商社", en: "Trading" },
  { value: "tech", ja: "テック", en: "Tech" },
  { value: "manufacturing", ja: "メーカー", en: "Manufacturing" },
];

/* ── Page ── */

export default function SearchOBOGPage() {
  const [search, setSearch] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [availableOnly, setAvailableOnly] = useState(false);

  const filtered = mockProfiles.filter((p) => {
    if (search && !p.name.toLowerCase().includes(search.toLowerCase()) && !p.company.en.toLowerCase().includes(search.toLowerCase())) return false;
    if (industryFilter && p.industry !== industryFilter) return false;
    if (verifiedOnly && !p.verified) return false;
    if (availableOnly && !p.available) return false;
    return true;
  });

  const recommended = mockProfiles.filter((p) => p.verified && p.available).slice(0, 3);

  return (
    <>
      {/* Header */}
      <div className="mb-6">
        <h1 className="mb-0.5 text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          <T ja="OB/OG検索" en="Find OB/OG" />
        </h1>
        <p className="text-[12.5px]" style={{ color: "var(--ink3)" }}>
          <T ja="興味のある業界や企業のOB/OGを見つけよう" en="Find OB/OG from industries and companies you're interested in" />
        </p>
      </div>

      {/* Recommended */}
      <div className="mb-5">
        <div className="mb-3 text-[13px] font-semibold" style={{ fontFamily: "var(--font-display)" }}>
          <span className="flex items-center gap-1"><Icon name="star" size={14} style={{ color: "var(--color-accent)" }} /><T ja="おすすめ" en="Recommended" /></span>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {recommended.map((p) => (
            <div
              key={p.id}
              className="rounded-xl border p-4 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
              style={{ borderColor: "var(--color-accent)", background: "var(--accent-soft)" }}
            >
              <div className="mb-2 flex items-center gap-2.5">
                <div className="av av-sm" style={{ background: "var(--card)", color: "var(--color-accent)" }}>{p.initials}</div>
                <div>
                  <div className="flex items-center gap-1.5 text-[13px] font-semibold">
                    {p.name}
                    {p.verified && <span className="badge-verified">✓</span>}
                  </div>
                  <div className="text-[11px]" style={{ color: "var(--ink3)" }}>
                    <T ja={p.company.ja} en={p.company.en} />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-1">
                {p.topics.map((t, i) => (
                  <span key={i} className="tag tag-accent text-[10px]"><T ja={t.ja} en={t.en} /></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search & Filters */}
      <div className="card mb-5">
        <div className="card-bd">
          <div className="flex flex-col gap-3 md:flex-row md:items-end">
            {/* Search */}
            <div className="flex-1">
              <div className="sbox">
                <Icon name="search" size={14} className="shrink-0" style={{ color: "var(--ink4)" }} />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="ja-only"
                  placeholder="名前・企業名で検索..."
                />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="en-only"
                  placeholder="Search by name or company..."
                />
              </div>
            </div>

            {/* Industry */}
            <div className="w-full md:w-48">
              <select
                className="input"
                value={industryFilter}
                onChange={(e) => setIndustryFilter(e.target.value)}
              >
                {industries.map((ind) => (
                  <option key={ind.value} value={ind.value}>
                    <T ja={ind.ja} en={ind.en} />
                  </option>
                ))}
              </select>
            </div>

            {/* Toggles */}
            <div className="flex gap-3">
              <label className="flex cursor-pointer items-center gap-2 text-[12px]" style={{ color: "var(--ink2)" }}>
                <input
                  type="checkbox"
                  checked={verifiedOnly}
                  onChange={(e) => setVerifiedOnly(e.target.checked)}
                  className="accent-[var(--color-accent)]"
                />
                <T ja="公式OB/OGのみ" en="Verified only" />
              </label>
              <label className="flex cursor-pointer items-center gap-2 text-[12px]" style={{ color: "var(--ink2)" }}>
                <input
                  type="checkbox"
                  checked={availableOnly}
                  onChange={(e) => setAvailableOnly(e.target.checked)}
                  className="accent-[var(--color-accent)]"
                />
                <T ja="予約可能のみ" en="Available only" />
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mb-3 text-[12px] font-medium" style={{ color: "var(--ink3)" }}>
        <T ja={`${filtered.length}件の結果`} en={`${filtered.length} results`} />
      </div>

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="card p-5 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
          >
            {/* Top row */}
            <div className="mb-3 flex items-start gap-3">
              <div
                className="av av-md shrink-0"
                style={{ background: "var(--accent-soft)", color: "var(--color-accent)" }}
              >
                {p.initials}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 text-[14px] font-semibold">
                  {p.name}
                  {p.verified && <span className="badge-verified">✓</span>}
                </div>
                <div className="text-[12px]" style={{ color: "var(--ink2)" }}>
                  <T ja={p.company.ja} en={p.company.en} />
                </div>
                <div className="text-[11px]" style={{ color: "var(--ink3)" }}>
                  <T ja={p.role.ja} en={p.role.en} />
                </div>
              </div>
            </div>

            {/* Topics */}
            <div className="mb-3 flex flex-wrap gap-1">
              {p.topics.map((t, i) => (
                <span key={i} className="tag tag-accent text-[10px]"><T ja={t.ja} en={t.en} /></span>
              ))}
            </div>

            {/* Stats */}
            <div className="mb-4 flex items-center gap-4 text-[11px]" style={{ color: "var(--ink4)" }}>
              <span className="flex items-center gap-0.5"><Icon name="star" size={12} style={{ color: "var(--yellow)" }} /> {p.rating}</span>
              <span><T ja={`${p.visits}回の面談`} en={`${p.visits} visits`} /></span>
              <span
                className="ml-auto rounded-full px-2 py-0.5 text-[10px] font-semibold"
                style={{
                  background: p.available ? "var(--green-bg)" : "var(--bg3)",
                  color: p.available ? "var(--green)" : "var(--ink4)",
                }}
              >
                {p.available ? <T ja="予約可能" en="Available" /> : <T ja="予約不可" en="Unavailable" />}
              </span>
            </div>

            {/* Action */}
            <button
              className={`btn w-full justify-center ${p.available ? "btn-accent" : "btn-ghost"}`}
              disabled={!p.available}
            >
              <T ja={p.available ? "訪問を予約" : "予約不可"} en={p.available ? "Book Visit" : "Unavailable"} />
            </button>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-8 rounded-xl border p-10 text-center" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
          <div className="mb-2"><Icon name="search" size={28} style={{ color: "var(--ink4)" }} /></div>
          <div className="text-[14px] font-semibold" style={{ fontFamily: "var(--font-display)" }}>
            <T ja="条件に合うOB/OGが見つかりませんでした" en="No OB/OG found matching your criteria" />
          </div>
          <div className="mt-1 text-[13px]" style={{ color: "var(--ink3)" }}>
            <T ja="フィルターを変更してお試しください" en="Try changing your filters" />
          </div>
        </div>
      )}
    </>
  );
}
