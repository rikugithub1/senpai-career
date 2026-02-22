"use client";

import { useState } from "react";
import Link from "next/link";
import { T } from "../../../components/providers/LanguageProvider";
import Icon from "../../../components/shared/Icon";

/* ── data ── */

const week = [
  { ja: "月", en: "Mon", d: 10, ev: null },
  { ja: "火", en: "Tue", d: 11, ev: null },
  { ja: "水", en: "Wed", d: 12, ev: "14:00 K. Yamada" },
  { ja: "木", en: "Thu", d: 13, ev: null },
  { ja: "金", en: "Fri", d: 14, ev: "10:00 M. Suzuki" },
];

const initialActivities = [
  { id: 1, c: "var(--color-accent)", ja: <><b>K. Yamada</b>さんへの訪問リクエストが<b>承認</b>されました</>, en: <>Visit request to <b>K. Yamada</b> was <b>approved</b></>, jt: "2時間前", et: "2h ago" },
  { id: 2, c: "var(--blue)", ja: <><b>M. Suzuki</b>さんから新しいメッセージ</>, en: <>New message from <b>M. Suzuki</b></>, jt: "5時間前", et: "5h ago" },
  { id: 3, c: "var(--green)", ja: <><b>A. Tanaka</b>さんとのOB/OG訪問が完了しました</>, en: <>OB/OG visit with <b>A. Tanaka</b> completed</>, jt: "昨日", et: "Yesterday" },
  { id: 4, c: "var(--yellow)", ja: <><b>R. Watanabe</b>（McKinsey）が新しくOB/OGとして登録</>, en: <><b>R. Watanabe</b> (McKinsey) joined as a new OB/OG</>, jt: "2日前", et: "2 days ago" },
];

const senpais = [
  { i: "RW", n: "R. Watanabe", ja: "McKinsey", en: "McKinsey", topics: { ja: "コンサル・金融", en: "Consulting · Finance" }, verified: true },
  { i: "HK", n: "H. Kim", ja: "Morgan Stanley", en: "Morgan Stanley", topics: { ja: "外資金融・投資", en: "IB · Investment" }, verified: true },
  { i: "YL", n: "Y. Li", ja: "三井物産", en: "Mitsui & Co.", topics: { ja: "商社・グローバル", en: "Trading · Global" }, verified: false },
  { i: "TN", n: "T. Nakamura", ja: "Google", en: "Google", topics: { ja: "エンジニア・テック", en: "Engineering · Tech" }, verified: true },
];

/* ── page ── */

export default function CommunityDashboardPage() {
  const [activities, setActivities] = useState(initialActivities);

  const dismissActivity = (id: number) => {
    setActivities((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <>
      {/* Header */}
      <div className="mb-6">
        <h1 className="mb-0.5 text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          <T ja="おかえりなさい、Chenさん" en="Welcome back, Chen" />
        </h1>
        <p className="text-[12.5px]" style={{ color: "var(--ink3)" }}>
          {new Date().toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>

      {/* Recommended OB/OG — Full width, top position, prominent */}
      <div className="card mb-3.5">
        <div className="card-hd">
          <div className="card-t"><Icon name="star" size={16} className="mr-2" style={{ color: "var(--color-accent)" }} /><T ja="おすすめのOB/OG" en="Recommended OB/OG" /></div>
          <Link href="/community/search-obog" className="card-act"><T ja="もっと見る" en="See more" /></Link>
        </div>
        <div className="card-bd">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {senpais.map((s, i) => (
              <div
                key={i}
                className="rounded-xl border p-4 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
                style={{ borderColor: "var(--brd)", background: "var(--bg-el)" }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className="av av-md"
                    style={{ background: "var(--accent-soft)", color: "var(--color-accent)" }}
                  >
                    {s.i}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-[13px] font-semibold">
                      {s.n}
                      {s.verified && <span className="badge-verified"><Icon name="check" size={10} /></span>}
                    </div>
                    <div className="text-[11px]" style={{ color: "var(--ink3)" }}>
                      <T ja={s.ja} en={s.en} />
                    </div>
                  </div>
                </div>
                <div className="mb-3 text-[11px]" style={{ color: "var(--ink4)" }}>
                  <T ja={s.topics.ja} en={s.topics.en} />
                </div>
                <button className="btn btn-sm btn-accent w-full">
                  <T ja="訪問を予約" en="Book Visit" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Schedule */}
      <div className="card mb-3.5">
        <div className="card-hd">
          <div className="card-t"><Icon name="calendar" size={16} className="mr-2" style={{ color: "var(--color-accent)" }} /><T ja="今週のスケジュール" en="This Week" /></div>
          <Link href="/community/bookings" className="card-act"><T ja="全て見る" en="View all" /></Link>
        </div>
        <div className="card-bd">
          <div className="flex flex-wrap gap-1.5">
            {week.map((d, i) => (
              <div
                key={i}
                className="min-w-[80px] flex-1 rounded-lg border p-2.5 text-xs"
                style={{
                  borderColor: d.ev ? "var(--color-accent)" : "var(--brd)",
                  background: d.ev ? "var(--accent-soft)" : "transparent",
                }}
              >
                <div
                  className="mb-0.5 text-[13px] font-semibold"
                  style={{ fontFamily: "var(--font-display)", color: d.ev ? "var(--color-accent)" : "var(--ink)" }}
                >
                  <T ja={d.ja} en={d.en} /> {d.d}
                </div>
                <div className="text-[11px]" style={{ color: "var(--ink3)" }}>{d.ev || "—"}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activity — dismissable items */}
      <div className="card mb-3.5">
        <div className="card-hd"><div className="card-t"><T ja="アクティビティ" en="Activity" /></div></div>
        <div className="card-bd">
          {activities.length === 0 ? (
            <div className="py-6 text-center text-[13px]" style={{ color: "var(--ink4)" }}>
              <T ja="新しいアクティビティはありません" en="No new activity" />
            </div>
          ) : (
            activities.map((a) => (
              <div key={a.id} className="group flex gap-2.5 border-b py-3 last:border-b-0" style={{ borderColor: "var(--brd2)" }}>
                <div className="mt-1.5 h-[7px] w-[7px] shrink-0 rounded-full" style={{ background: a.c }} />
                <div className="min-w-0 flex-1">
                  <div className="text-[13px] leading-snug" style={{ color: "var(--ink2)" }}>
                    <span className="ja-only">{a.ja}</span><span className="en-only">{a.en}</span>
                  </div>
                  <div className="mt-0.5 text-[10.5px]" style={{ color: "var(--ink4)" }}><T ja={a.jt} en={a.et} /></div>
                </div>
                <button
                  onClick={() => dismissActivity(a.id)}
                  className="shrink-0 rounded-md px-1.5 py-0.5 text-[11px] opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ color: "var(--ink4)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-hover)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  aria-label="Dismiss"
                >
                  <Icon name="x" size={12} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Premium Upsell */}
      <div
        className="rounded-xl border p-5"
        style={{ borderColor: "var(--color-accent)", background: "var(--accent-soft)" }}
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-1 text-[15px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
              <span className="flex items-center gap-1.5"><Icon name="sparkles" size={16} style={{ color: "var(--color-accent)" }} /><T ja="Premiumにアップグレード" en="Upgrade to Premium" /></span>
            </div>
            <div className="text-[13px]" style={{ color: "var(--ink2)" }}>
              <T
                ja="1日100通のメッセージ送信、優先表示、高度なフィルターなどの機能が使えます。"
                en="Send up to 100 messages/day, get priority visibility, advanced filters, and more."
              />
            </div>
          </div>
          <button className="btn btn-accent shrink-0">
            <T ja="¥5,000/月でアップグレード" en="Upgrade for ¥5,000/mo" />
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </>
  );
}
