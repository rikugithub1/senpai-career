"use client";

import { useState } from "react";
import { T } from "../../../components/providers/LanguageProvider";
import Icon from "../../../components/shared/Icon";
import EmptyState from "../../../components/shared/EmptyState";

/* ── mock data ── */

type Candidate = {
  i: string;
  name: string;
  uniJa: string;
  uniEn: string;
  stage: "visit" | "application" | "interview" | "offer";
  stageJa: string;
  stageEn: string;
  stageTag: string;
  label: "promising" | "new" | "review" | "follow-up" | "none";
  labelJa: string;
  labelEn: string;
  labelTag: string;
  lastContact: string;
  c: string;
  bg: string;
};

const allCandidates: Candidate[] = [
  {
    i: "AN", name: "A. Nguyen",
    uniJa: "東京大学 · CS", uniEn: "UTokyo · CS",
    stage: "visit", stageJa: "OB/OG訪問", stageEn: "OB/OG Visit", stageTag: "tag-blue",
    label: "promising", labelJa: "有望", labelEn: "Promising", labelTag: "tag-green",
    lastContact: "2026-02-18",
    c: "var(--blue)", bg: "var(--blue-bg)",
  },
  {
    i: "JP", name: "J. Park",
    uniJa: "慶應義塾大学 · 経済", uniEn: "Keio · Economics",
    stage: "visit", stageJa: "OB/OG訪問", stageEn: "OB/OG Visit", stageTag: "tag-blue",
    label: "new", labelJa: "新規", labelEn: "New", labelTag: "tag-accent",
    lastContact: "2026-02-17",
    c: "var(--blue)", bg: "var(--blue-bg)",
  },
  {
    i: "MS", name: "M. Santos",
    uniJa: "早稲田大学 · 商学", uniEn: "Waseda · Business",
    stage: "visit", stageJa: "OB/OG訪問", stageEn: "OB/OG Visit", stageTag: "tag-blue",
    label: "follow-up", labelJa: "フォロー", labelEn: "Follow-up", labelTag: "tag-yellow",
    lastContact: "2026-02-15",
    c: "var(--blue)", bg: "var(--blue-bg)",
  },
  {
    i: "LC", name: "L. Chen",
    uniJa: "一橋大学 · 経済", uniEn: "Hitotsubashi · Economics",
    stage: "application", stageJa: "ES提出", stageEn: "Application", stageTag: "tag-yellow",
    label: "review", labelJa: "選考中", labelEn: "In review", labelTag: "tag-blue",
    lastContact: "2026-02-16",
    c: "var(--yellow)", bg: "var(--yellow-bg)",
  },
  {
    i: "RK", name: "R. Kumar",
    uniJa: "京都大学 · 法学", uniEn: "Kyoto · Law",
    stage: "application", stageJa: "ES提出", stageEn: "Application", stageTag: "tag-yellow",
    label: "promising", labelJa: "有望", labelEn: "Promising", labelTag: "tag-green",
    lastContact: "2026-02-14",
    c: "var(--yellow)", bg: "var(--yellow-bg)",
  },
  {
    i: "WZ", name: "W. Zhang",
    uniJa: "東京工業大学 · 工学", uniEn: "Tokyo Tech · Engineering",
    stage: "interview", stageJa: "面接中", stageEn: "Interview", stageTag: "tag-green",
    label: "promising", labelJa: "有望", labelEn: "Promising", labelTag: "tag-green",
    lastContact: "2026-02-20",
    c: "var(--green)", bg: "var(--green-bg)",
  },
  {
    i: "YH", name: "Y. Honda",
    uniJa: "大阪大学 · 情報科学", uniEn: "Osaka · Info Science",
    stage: "interview", stageJa: "面接中", stageEn: "Interview", stageTag: "tag-green",
    label: "new", labelJa: "新規", labelEn: "New", labelTag: "tag-accent",
    lastContact: "2026-02-19",
    c: "var(--green)", bg: "var(--green-bg)",
  },
  {
    i: "KT", name: "K. Tanaka",
    uniJa: "名古屋大学 · 経営学", uniEn: "Nagoya · Management",
    stage: "offer", stageJa: "内定", stageEn: "Offer", stageTag: "tag-accent",
    label: "none", labelJa: "", labelEn: "", labelTag: "",
    lastContact: "2026-02-10",
    c: "var(--color-accent)", bg: "var(--accent-soft)",
  },
];

const stageOptions = [
  { value: "", ja: "全てのステージ", en: "All stages" },
  { value: "visit", ja: "OB/OG訪問", en: "OB/OG Visit" },
  { value: "application", ja: "ES提出", en: "Application" },
  { value: "interview", ja: "面接中", en: "Interview" },
  { value: "offer", ja: "内定", en: "Offer" },
];

const labelOptions = [
  { value: "", ja: "全てのラベル", en: "All labels" },
  { value: "promising", ja: "有望", en: "Promising" },
  { value: "new", ja: "新規", en: "New" },
  { value: "review", ja: "選考中", en: "In review" },
  { value: "follow-up", ja: "フォロー", en: "Follow-up" },
];

/* ── page ── */

export default function CandidatesPage() {
  const [search, setSearch] = useState("");
  const [stageFilter, setStageFilter] = useState("");
  const [labelFilter, setLabelFilter] = useState("");

  const filtered = allCandidates.filter((c) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      c.name.toLowerCase().includes(q) ||
      c.uniJa.includes(q) ||
      c.uniEn.toLowerCase().includes(q);
    const matchStage = !stageFilter || c.stage === stageFilter;
    const matchLabel = !labelFilter || c.label === labelFilter;
    return matchSearch && matchStage && matchLabel;
  });

  return (
    <>
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1
            className="mb-0.5 text-xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <T ja="候補者管理" en="Candidate Management" />
          </h1>
          <p className="text-[12.5px]" style={{ color: "var(--ink3)" }}>
            <T
              ja={`${allCandidates.length}名の候補者を管理中`}
              en={`Managing ${allCandidates.length} candidates`}
            />
          </p>
        </div>
        <button className="btn btn-accent btn-sm">
          <T ja="＋ 候補者を追加" en="+ Add Candidate" />
        </button>
      </div>

      {/* Search & Filters */}
      <div className="card mb-3.5">
        <div className="card-bd">
          <div className="flex flex-wrap items-center gap-3">
            {/* Search */}
            <div className="sbox" style={{ flex: "1 1 220px" }}>
              <Icon name="search" size={14} className="shrink-0" style={{ color: "var(--ink4)" }} />
              <input
                placeholder="名前・大学で検索..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Stage filter */}
            <select
              className="input"
              style={{ flex: "0 1 180px" }}
              value={stageFilter}
              onChange={(e) => setStageFilter(e.target.value)}
            >
              {stageOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.ja} / {o.en}
                </option>
              ))}
            </select>

            {/* Label filter */}
            <select
              className="input"
              style={{ flex: "0 1 180px" }}
              value={labelFilter}
              onChange={(e) => setLabelFilter(e.target.value)}
            >
              {labelOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.ja} / {o.en}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Candidate Table */}
      <div className="card">
        <div className="card-hd">
          <div className="card-t">
            <Icon name="users" size={16} className="mr-2" style={{ color: "var(--color-accent)" }} />
            <T
              ja={`候補者一覧（${filtered.length}件）`}
              en={`Candidate List (${filtered.length})`}
            />
          </div>
        </div>
        <div className="card-bd">
          {/* Table header */}
          <div
            className="mb-2 hidden items-center gap-3 md:grid"
            style={{
              gridTemplateColumns: "1fr 110px 100px 100px 20px",
              fontFamily: "var(--font-display)",
            }}
          >
            <span
              className="text-[10.5px] font-semibold uppercase tracking-wider"
              style={{ color: "var(--ink4)" }}
            >
              <T ja="候補者" en="Candidate" />
            </span>
            <span
              className="text-[10.5px] font-semibold uppercase tracking-wider"
              style={{ color: "var(--ink4)" }}
            >
              <T ja="ステージ" en="Stage" />
            </span>
            <span
              className="text-[10.5px] font-semibold uppercase tracking-wider"
              style={{ color: "var(--ink4)" }}
            >
              <T ja="ラベル" en="Label" />
            </span>
            <span
              className="text-right text-[10.5px] font-semibold uppercase tracking-wider"
              style={{ color: "var(--ink4)" }}
            >
              <T ja="最終連絡" en="Last Contact" />
            </span>
          </div>

          {/* Rows */}
          {filtered.length === 0 ? (
            <EmptyState
              icon="search"
              title={{ ja: "該当する候補者がいません", en: "No matching candidates" }}
              description={{ ja: "検索条件を変更してみてください", en: "Try adjusting your search or filters" }}
            />
          ) : (
            filtered.map((c, i) => (
              <div
                key={i}
                className="flex cursor-pointer items-center gap-3 border-b py-3 transition-colors last:border-b-0 hover:bg-[var(--bg3)] md:grid"
                style={{
                  gridTemplateColumns: "1fr 110px 100px 100px 20px",
                  borderColor: "var(--brd2)",
                }}
              >
                {/* Name + university + mobile tags */}
                <div className="flex min-w-0 flex-1 items-center gap-2.5">
                  <div
                    className="av av-md shrink-0"
                    style={{ background: c.bg, color: c.c }}
                  >
                    {c.i}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[13px] font-semibold">{c.name}</div>
                    <div
                      className="truncate text-[10.5px]"
                      style={{ color: "var(--ink3)" }}
                    >
                      <T ja={c.uniJa} en={c.uniEn} />
                    </div>
                    {/* Mobile-only: inline tags */}
                    <div className="mt-1 flex items-center gap-1.5 md:hidden">
                      <span className={`tag ${c.stageTag}`}>
                        <T ja={c.stageJa} en={c.stageEn} />
                      </span>
                      {c.labelTag && (
                        <span className={`tag ${c.labelTag}`}>
                          <T ja={c.labelJa} en={c.labelEn} />
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Stage — desktop only */}
                <span className={`tag ${c.stageTag} hidden md:inline-flex`}>
                  <T ja={c.stageJa} en={c.stageEn} />
                </span>

                {/* Label — desktop only */}
                <span className="hidden md:inline-flex">
                  {c.labelTag ? (
                    <span className={`tag ${c.labelTag}`}>
                      <T ja={c.labelJa} en={c.labelEn} />
                    </span>
                  ) : (
                    <span
                      className="text-[11px]"
                      style={{ color: "var(--ink4)" }}
                    >
                      —
                    </span>
                  )}
                </span>

                {/* Last contact — desktop only */}
                <div
                  className="hidden text-right text-[11px] md:block"
                  style={{ color: "var(--ink3)" }}
                >
                  {c.lastContact.slice(5).replace("-", "/")}
                </div>

                {/* Arrow */}
                <Icon name="chevron-right" size={14} className="shrink-0" style={{ color: "var(--ink4)" }} />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
