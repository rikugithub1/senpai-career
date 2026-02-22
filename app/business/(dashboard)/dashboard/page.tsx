"use client";

import Link from "next/link";
import { T } from "../../../components/providers/LanguageProvider";
import Icon from "../../../components/shared/Icon";
import { mockOBSlots } from "../../../data/content";

/* ── data ── */

const stats = [
  { ja: "訪問リクエスト", en: "Visit Requests", v: "24", sub: "↑ 42%", border: "var(--yellow)", bg: "var(--yellow-bg)", isUp: true },
  { ja: "面談完了", en: "Completed", v: "17", sub: { ja: "今月", en: "this month" }, border: "var(--green)", bg: "var(--green-bg)", isUp: false },
  { ja: "選考中", en: "In Pipeline", v: "6", sub: "↑ 2", border: "var(--blue)", bg: "var(--blue-bg)", isUp: true },
  { ja: "未読メッセージ", en: "Unread Messages", v: "3", sub: { ja: "要対応", en: "action needed" }, border: "var(--red)", bg: "var(--red-bg)", isUp: false },
];

const pipeline = [
  { ja: "OB/OG訪問", en: "OB/OG Visit", n: 3, cards: [
    { n: "A. Nguyen", ja: "CS", en: "CS" },
    { n: "J. Park", ja: "経済", en: "Econ" },
    { n: "M. Santos", ja: "商学", en: "Business" },
  ]},
  { ja: "ES提出", en: "Application", n: 2, cards: [
    { n: "L. Chen", ja: "経済", en: "Econ" },
    { n: "R. Kumar", ja: "法学", en: "Law" },
  ]},
  { ja: "面接中", en: "Interview", n: 1, cards: [
    { n: "W. Zhang", ja: "工学 · 2次", en: "Eng · 2nd" },
  ]},
  { ja: "内定", en: "Offer", n: 0, cards: [] },
];

const candidates = [
  { i: "AN", n: "A. Nguyen", ja: "CS · OB/OG訪問済", en: "CS · OB/OG visited", tag: "tag-green", tJa: "有望", tEn: "Promising", c: "var(--green)", bg: "var(--green-bg)" },
  { i: "LC", n: "L. Chen", ja: "経済 · ES提出済", en: "Econ · ES submitted", tag: "tag-blue", tJa: "選考中", tEn: "In review", c: "var(--blue)", bg: "var(--blue-bg)" },
  { i: "WZ", n: "W. Zhang", ja: "工学 · 2次面接", en: "Eng · 2nd interview", tag: "tag-yellow", tJa: "面接中", tEn: "Interview", c: "var(--yellow)", bg: "var(--yellow-bg)" },
  { i: "JP", n: "J. Park", ja: "経済 · OB/OG訪問予定", en: "Econ · OB/OG visit scheduled", tag: "tag-accent", tJa: "新規", tEn: "New", c: "var(--color-accent)", bg: "var(--accent-soft)" },
];

/* ── page ── */

const today = new Date();
const dateStr = `${today.getFullYear()}/${String(today.getMonth() + 1).padStart(2, "0")}/${String(today.getDate()).padStart(2, "0")}`;

export default function BusinessDashboardPage() {
  return (
    <>
      {/* Header */}
      <div className="mb-6">
        <h1 className="mb-0.5 text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          <T ja="採用ダッシュボード" en="Recruitment Dashboard" />
        </h1>
        <p className="text-[12.5px]" style={{ color: "var(--ink3)" }}>{dateStr}</p>
      </div>

      {/* Stats — color-coded borders */}
      <div className="mb-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="stat"
            style={{ borderLeft: `3px solid ${s.border}` }}
          >
            <div className="stat-lbl"><T ja={s.ja} en={s.en} /></div>
            <div className="stat-val">{s.v}</div>
            <div className="stat-sub">
              {typeof s.sub === "string" ? (
                <span className="stat-up" style={{ color: s.isUp ? "var(--green)" : undefined }}>
                  {s.isUp && <Icon name="trending-up" size={12} className="mr-0.5 inline" />}
                  {s.sub}
                </span>
              ) : (
                <T ja={s.sub.ja} en={s.sub.en} />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pipeline */}
      <div className="card mb-3.5">
        <div className="card-hd">
          <div className="card-t">
            <Icon name="clipboard-list" size={16} className="mr-2" style={{ color: "var(--color-accent)" }} />
            <T ja="採用パイプライン" en="Recruitment Pipeline" />
          </div>
          <Link href="/business/pipeline" className="card-act" style={{ color: "var(--ink3)" }}><T ja="全画面" en="Expand" /></Link>
        </div>
        <div className="card-bd">
          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {pipeline.map((col, ci) => (
              <div key={ci} className="min-h-[160px] rounded-[10px] p-3" style={{ background: "var(--bg3)" }}>
                <div className="mb-2.5 flex items-center justify-between text-[10.5px] font-semibold uppercase tracking-wider" style={{ fontFamily: "var(--font-display)", color: "var(--ink3)" }}>
                  <span><T ja={col.ja} en={col.en} /></span>
                  <span className="rounded-[5px] px-2 py-px text-[10.5px] font-semibold" style={{ background: "var(--bg-el)", color: "var(--ink2)" }}>{col.n}</span>
                </div>
                {col.cards.map((c, ci2) => (
                  <div key={ci2} className="mb-1.5 cursor-pointer rounded-lg border p-2.5 transition-colors hover:border-[var(--color-accent)]" style={{ background: "var(--card)", borderColor: "var(--brd)" }}>
                    <div className="text-[12.5px] font-semibold">{c.n}</div>
                    <div className="text-[10.5px]" style={{ color: "var(--ink3)" }}><T ja={c.ja} en={c.en} /></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* OB/OG Slot Management */}
      <div className="card mb-3.5">
        <div className="card-hd">
          <div className="card-t">
            <Icon name="badge-check" size={16} className="mr-2" style={{ color: "var(--color-accent)" }} />
            <T ja="公式OB/OG枠管理" en="Official OB/OG Slot Management" />
          </div>
          <Link href="/business/obog-slots" className="card-act" style={{ color: "var(--ink3)" }}><T ja="全て管理" en="Manage all" /></Link>
        </div>
        <div className="card-bd">
          {/* Summary */}
          <div className="mb-4 flex items-center gap-3">
            <div className="text-[13px] font-semibold" style={{ color: "var(--ink2)" }}>
              <T ja={`${mockOBSlots.filter(s => s.status === "active").length}/${mockOBSlots.length} 枠使用中`} en={`${mockOBSlots.filter(s => s.status === "active").length}/${mockOBSlots.length} slots in use`} />
            </div>
            <div className="flex-1">
              <div className="prog-track"><div className="prog-fill" style={{ width: `${(mockOBSlots.filter(s => s.status === "active").length / mockOBSlots.length) * 100}%` }} /></div>
            </div>
          </div>
          {/* Slot list */}
          {mockOBSlots.map((slot) => (
            <div key={slot.id} className="flex items-center gap-2.5 border-b py-2.5 last:border-b-0" style={{ borderColor: "var(--brd2)" }}>
              <div className="flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold" style={{ background: "var(--bg3)", color: "var(--ink4)" }}>
                {slot.id}
              </div>
              {slot.obog ? (
                <>
                  <div className="av av-sm" style={{ background: "var(--accent-soft)", color: "var(--color-accent)" }}>{slot.obog.initials}</div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 text-[13px] font-semibold">
                      {slot.obog.name}
                      <span className="badge-verified"><T ja="公式OB/OG" en="Verified" /></span>
                    </div>
                    <div className="text-[10.5px]" style={{ color: "var(--ink3)" }}><T ja={slot.obog.ja} en={slot.obog.en} /></div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10.5px]" style={{ color: "var(--ink4)" }}>
                      <T ja={`〜${slot.rotationEnd}`} en={`until ${slot.rotationEnd}`} />
                    </div>
                    {slot.rotationEnd && new Date(slot.rotationEnd) <= new Date() ? (
                      <span className="tag tag-yellow"><T ja="入替可能" en="Swap ready" /></span>
                    ) : (
                      <span className="tag tag-green"><T ja="アクティブ" en="Active" /></span>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="av av-sm" style={{ background: "var(--bg3)", color: "var(--ink4)" }}>—</div>
                  <div className="min-w-0 flex-1 text-[13px]" style={{ color: "var(--ink4)" }}>
                    <T ja="空き枠" en="Vacant slot" />
                  </div>
                  <button className="btn btn-sm btn-ghost"><T ja="割り当て" en="Assign" /></button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Candidates */}
      <div className="card">
        <div className="card-hd">
          <div className="card-t">
            <Icon name="users" size={16} className="mr-2" style={{ color: "var(--color-accent)" }} />
            <T ja="候補者管理" en="Candidates" />
          </div>
          <Link href="/business/candidates" className="card-act" style={{ color: "var(--ink3)" }}><T ja="全て見る" en="View all" /></Link>
        </div>
        <div className="card-bd">
          {candidates.map((c, i) => (
            <div key={i} className="flex items-center gap-2.5 border-b py-2.5 last:border-b-0 cursor-pointer transition-colors hover:bg-[var(--bg3)]" style={{ borderColor: "var(--brd2)" }}>
              <div className="av av-md" style={{ background: c.bg, color: c.c }}>{c.i}</div>
              <div className="min-w-0 flex-1">
                <div className="text-[13px] font-semibold">{c.n}</div>
                <div className="text-[10.5px]" style={{ color: "var(--ink3)" }}><T ja={c.ja} en={c.en} /></div>
              </div>
              <span className={`tag ${c.tag}`}><T ja={c.tJa} en={c.tEn} /></span>
              <Icon name="chevron-right" size={14} style={{ color: "var(--ink4)" }} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
