"use client";

import { useState } from "react";
import Link from "next/link";
import { T } from "../../../components/providers/LanguageProvider";
import Icon from "../../../components/shared/Icon";

/* ── helpers ── */

function getTodayLabel(): string {
  const now = new Date();
  const m = now.getMonth() + 1;
  const d = now.getDate();
  const dayNames = ["日", "月", "火", "水", "木", "金", "土"];
  const dayName = dayNames[now.getDay()];
  return `${m}月${d}日（${dayName}）`;
}

function getTodayDayIndex(): number {
  // 0=Sun,1=Mon...6=Sat -> map to our week array index (Mon=0..Sat=5)
  const jsDay = new Date().getDay();
  return jsDay === 0 ? -1 : jsDay - 1; // Sun returns -1 (not in our array)
}

/* ── data ── */

const stats = [
  { ja: "訪問リクエスト", en: "Visit Requests", v: "8", sub: { ja: "↑ 3 今週", en: "↑ 3 this week" }, border: "var(--yellow)", bg: "var(--yellow-bg)", trend: "up" },
  { ja: "今月の面談", en: "This Month", v: "12", sub: { ja: "↑ 25%", en: "↑ 25%" }, border: "var(--green)", bg: "var(--green-bg)", trend: "up" },
  { ja: "完了した面談", en: "Completed", v: "47", sub: { ja: "累計", en: "total" }, border: "var(--blue)", bg: "var(--blue-bg)", trend: null },
  { ja: "未読メッセージ", en: "Unread", v: "3", sub: { ja: "要対応", en: "action needed" }, border: "var(--red)", bg: "var(--red-bg)", trend: null },
];

const requests = [
  { id: 1, i: "JP", n: "J. Park", ja: "経済学部 3年 · 金融業界について", en: "Econ Y3 · About finance", tag: "tag-yellow", tJa: "新規", tEn: "New" },
  { id: 2, i: "MS", n: "M. Santos", ja: "商学部 3年 · コンサル就活", en: "Biz Y3 · Consulting", tag: "tag-yellow", tJa: "新規", tEn: "New" },
  { id: 3, i: "RK", n: "R. Kumar", ja: "法学部 4年 · キャリアパス", en: "Law Y4 · Career path", tag: "tag-green", tJa: "承認済", tEn: "Approved" },
  { id: 4, i: "AN", n: "A. Nguyen", ja: "CS学部 3年 · テック業界", en: "CS Y3 · Tech industry", tag: "tag-yellow", tJa: "新規", tEn: "New" },
];

const week = [
  { ja: "月", en: "Mon", d: 10, ev: null },
  { ja: "火", en: "Tue", d: 11, ev: "14:00 A. Nguyen" },
  { ja: "水", en: "Wed", d: 12, ev: null },
  { ja: "木", en: "Thu", d: 13, ev: "16:00 L. Chen" },
  { ja: "金", en: "Fri", d: 14, ev: null },
  { ja: "土", en: "Sat", d: 15, ev: null },
];

const activityIcons: Record<string, string> = {
  "var(--yellow)": "inbox",
  "var(--green)": "check-circle",
  "var(--blue)": "message-square",
  "var(--color-accent)": "trending-up",
};

const initialActivities = [
  { id: 1, c: "var(--yellow)", ja: <><b>J. Park</b>さんから新しい訪問リクエスト</>, en: <>New visit request from <b>J. Park</b></>, jt: "30分前", et: "30m ago" },
  { id: 2, c: "var(--green)", ja: <><b>A. Nguyen</b>さんとの面談が完了しました</>, en: <>Meeting with <b>A. Nguyen</b> completed</>, jt: "2時間前", et: "2h ago" },
  { id: 3, c: "var(--blue)", ja: <><b>L. Chen</b>さんからメッセージ</>, en: <>Message from <b>L. Chen</b></>, jt: "5時間前", et: "5h ago" },
  { id: 4, c: "var(--color-accent)", ja: <>プロフィール閲覧数が<b>先週比20%増加</b></>, en: <>Profile views <b>increased 20%</b> vs last week</>, jt: "昨日", et: "Yesterday" },
];

/* ── page ── */

export default function ObogDashboardPage() {
  const [activities, setActivities] = useState(initialActivities);
  const todayIdx = getTodayDayIndex();

  const dismissActivity = (id: number) => {
    setActivities((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <>
      {/* Header */}
      <div className="mb-6">
        <h1 className="mb-0.5 text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          <T ja="おかえりなさい、Yamadaさん" en="Welcome back, Yamada" />
        </h1>
        <p className="text-[12.5px]" style={{ color: "var(--ink3)" }}>{getTodayLabel()}</p>
      </div>

      {/* Stats -- color-coded borders */}
      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="stat"
            style={{ borderLeft: `3px solid ${s.border}` }}
          >
            <div className="stat-lbl"><T ja={s.ja} en={s.en} /></div>
            <div className="stat-val">{s.v}</div>
            <div className="stat-sub" style={s.trend === "up" ? { color: "var(--green)" } : undefined}>
              {s.trend === "up" && <Icon name="trending-up" size={12} style={{ display: "inline", verticalAlign: "middle", marginRight: 3 }} />}
              <T ja={s.sub.ja} en={s.sub.en} />
            </div>
          </div>
        ))}
      </div>

      {/* Visit Requests -- Full width, prominent */}
      <div className="card mb-3.5">
        <div className="card-hd">
          <div className="card-t">
            <span className="mr-2 inline-flex"><Icon name="inbox" size={16} /></span>
            <T ja="訪問リクエスト" en="Visit Requests" />
            <span className="ml-2 text-[11px] font-normal" style={{ color: "var(--ink4)" }}>
              <T ja="最新4件表示" en="Showing latest 4" />
            </span>
          </div>
          <Link href="/obog/visit-requests" className="card-act" style={{ color: "var(--ink3)" }}><T ja="全て見る" en="View all" /></Link>
        </div>
        <div className="card-bd">
          {requests.map((r) => (
            <div
              key={r.id}
              className="flex flex-wrap items-center gap-2.5 border-b py-3 last:border-b-0 transition-colors"
              style={{ borderColor: "var(--brd2)", cursor: "pointer" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <div className="av av-md" style={{ background: "var(--accent-soft)", color: "var(--color-accent)" }}>{r.i}</div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 text-[13px]">
                  <span className="font-semibold">{r.n}</span>
                  <span className={`tag ${r.tag}`}><T ja={r.tJa} en={r.tEn} /></span>
                </div>
                <div className="mt-0.5 truncate text-[11px]" style={{ color: "var(--ink3)" }}><T ja={r.ja} en={r.en} /></div>
              </div>
              {r.tag === "tag-yellow" && (
                <div className="flex gap-1.5 shrink-0">
                  <button className="btn btn-sm btn-accent"><T ja="承認" en="Accept" /></button>
                </div>
              )}
              <Icon name="chevron-right" size={14} style={{ color: "var(--ink4)", flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </div>

      {/* Schedule */}
      <div className="card mb-3.5">
        <div className="card-hd">
          <div className="card-t">
            <span className="mr-2 inline-flex"><Icon name="calendar" size={16} /></span>
            <T ja="今週のスケジュール" en="This Week" />
          </div>
          <Link href="/obog/schedule" className="card-act" style={{ color: "var(--ink3)" }}><T ja="全て見る" en="View all" /></Link>
        </div>
        <div className="card-bd">
          <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
          <div className="flex gap-1.5" style={{ minWidth: 540 }}>
            {week.map((d, i) => {
              const isToday = i === todayIdx;
              return (
                <div
                  key={i}
                  className="min-w-18 flex-1 rounded-lg border p-2.5 text-xs"
                  style={{
                    borderColor: isToday ? "var(--color-accent)" : d.ev ? "var(--color-accent)" : "var(--brd)",
                    background: isToday ? "var(--accent-soft)" : d.ev ? "var(--accent-soft)" : "transparent",
                    borderWidth: isToday ? 2 : 1,
                  }}
                >
                  <div
                    className="mb-0.5 flex items-center gap-1 text-[13px] font-semibold"
                    style={{ fontFamily: "var(--font-display)", color: isToday || d.ev ? "var(--color-accent)" : "var(--ink)" }}
                  >
                    <T ja={d.ja} en={d.en} /> {d.d}
                    {isToday && (
                      <span
                        className="ml-1 inline-flex rounded px-1 py-0.5 text-[9px] font-bold"
                        style={{ background: "var(--color-accent)", color: "#fff" }}
                      >
                        <T ja="今日" en="Today" />
                      </span>
                    )}
                  </div>
                  <div className="text-[11px]" style={{ color: "var(--ink3)" }}>{d.ev || "---"}</div>
                </div>
              );
            })}
          </div>
          </div>
        </div>
      </div>

      {/* Activity -- dismissable */}
      <div className="card">
        <div className="card-hd"><div className="card-t"><T ja="アクティビティ" en="Activity" /></div></div>
        <div className="card-bd">
          {activities.length === 0 ? (
            <div className="py-6 text-center text-[13px]" style={{ color: "var(--ink4)" }}>
              <T ja="新しいアクティビティはありません" en="No new activity" />
            </div>
          ) : (
            <>
              {activities.map((a) => (
                <div key={a.id} className="group flex gap-2.5 border-b py-3 last:border-b-0" style={{ borderColor: "var(--brd2)" }}>
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: a.c, opacity: 0.15 }}>
                    <Icon name={activityIcons[a.c] || "bell"} size={12} style={{ color: a.c, opacity: 1 }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[13px] leading-snug" style={{ color: "var(--ink2)" }}>
                      <span className="ja-only">{a.ja}</span><span className="en-only">{a.en}</span>
                    </div>
                    <div className="mt-0.5 text-[10.5px]" style={{ color: "var(--ink4)" }}><T ja={a.jt} en={a.et} /></div>
                  </div>
                  <button
                    onClick={() => dismissActivity(a.id)}
                    className="shrink-0 rounded-md px-1.5 py-0.5 text-[11px] opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100"
                    style={{ color: "var(--ink4)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-hover)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    aria-label="Dismiss"
                  >
                    <Icon name="x" size={12} />
                  </button>
                </div>
              ))}
              <div className="pt-3 text-center">
                <Link href="#" className="text-[12px] font-medium" style={{ color: "var(--ink3)" }}>
                  <T ja="もっと見る" en="See more" />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
