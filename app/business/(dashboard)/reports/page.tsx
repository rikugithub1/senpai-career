"use client";

import { T } from "../../../components/providers/LanguageProvider";
import Icon from "../../../components/shared/Icon";

/* ── mock data ── */

const stats = [
  {
    ja: "訪問リクエスト",
    en: "Visit Requests",
    v: "48",
    sub: "↑ 18%",
    border: "var(--blue)",
    bg: "var(--blue-bg)",
    isUp: true,
  },
  {
    ja: "選考通過率",
    en: "Conversion Rate",
    v: "34%",
    sub: "↑ 5%",
    border: "var(--green)",
    bg: "var(--green-bg)",
    isUp: true,
  },
  {
    ja: "平均選考日数",
    en: "Avg. Days in Pipeline",
    v: "21",
    subJa: "日",
    subEn: "days",
    border: "var(--yellow)",
    bg: "var(--yellow-bg)",
    isUp: false,
  },
  {
    ja: "今月の内定",
    en: "Offers This Month",
    v: "3",
    sub: "↑ 2",
    border: "var(--color-accent)",
    bg: "var(--accent-soft)",
    isUp: true,
  },
];

const pipelineBreakdown = [
  { ja: "OB/OG訪問", en: "OB/OG Visit", count: 12, pct: 40, color: "var(--blue)" },
  { ja: "ES提出", en: "Application", count: 8, pct: 27, color: "var(--yellow)" },
  { ja: "面接中", en: "Interview", count: 7, pct: 23, color: "var(--green)" },
  { ja: "内定", en: "Offer", count: 3, pct: 10, color: "var(--color-accent)" },
];

const recentActivity = [
  {
    ja: "W. Zhang が2次面接を完了しました",
    en: "W. Zhang completed 2nd interview",
    date: "2026-02-20",
    tag: "tag-green",
    tagJa: "面接",
    tagEn: "Interview",
  },
  {
    ja: "K. Tanaka に内定を出しました",
    en: "Offer extended to K. Tanaka",
    date: "2026-02-18",
    tag: "tag-accent",
    tagJa: "内定",
    tagEn: "Offer",
  },
  {
    ja: "L. Chen のESを受け付けました",
    en: "Received ES from L. Chen",
    date: "2026-02-16",
    tag: "tag-yellow",
    tagJa: "ES",
    tagEn: "ES",
  },
  {
    ja: "A. Nguyen がOB訪問を完了しました",
    en: "A. Nguyen completed OB visit",
    date: "2026-02-15",
    tag: "tag-blue",
    tagJa: "訪問",
    tagEn: "Visit",
  },
  {
    ja: "メッセージプラン請求書が発行されました",
    en: "Message plan invoice issued",
    date: "2026-02-01",
    tag: "",
    tagJa: "請求",
    tagEn: "Invoice",
  },
];

const invoices = [
  {
    id: "INV-2026-003",
    ja: "メッセージプラン - スタンダード",
    en: "Message Plan - Standard",
    amount: "¥30,000",
    date: "2026-02-01",
    statusJa: "支払済",
    statusEn: "Paid",
    statusTag: "tag-green",
  },
  {
    id: "INV-2026-002",
    ja: "OB/OG枠 - 5スロット",
    en: "OB/OG Slots - 5 slots",
    amount: "¥50,000",
    date: "2026-01-15",
    statusJa: "支払済",
    statusEn: "Paid",
    statusTag: "tag-green",
  },
  {
    id: "INV-2026-001",
    ja: "初期セットアップ費用",
    en: "Initial Setup Fee",
    amount: "¥100,000",
    date: "2026-01-01",
    statusJa: "支払済",
    statusEn: "Paid",
    statusTag: "tag-green",
  },
];

/* ── page ── */

export default function ReportsPage() {
  return (
    <>
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1
            className="mb-0.5 text-xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <T ja="レポート" en="Reports" />
          </h1>
          <p className="text-[12.5px]" style={{ color: "var(--ink3)" }}>
            <T
              ja="採用活動の概要とパフォーマンス"
              en="Recruitment overview and performance"
            />
          </p>
        </div>
        <button
          className="btn btn-ghost btn-sm"
          onClick={() => typeof window !== "undefined" && window.print()}
        >
          <Icon name="download" size={14} className="mr-1" />
          <T ja="印刷 / エクスポート" en="Print / Export" />
        </button>
      </div>

      {/* Stats Summary */}
      <div className="mb-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="stat"
            style={{ borderLeft: `3px solid ${s.border}` }}
          >
            <div className="stat-lbl">
              <T ja={s.ja} en={s.en} />
            </div>
            <div className="stat-val">{s.v}</div>
            <div className="stat-sub">
              {s.sub ? (
                <span className="stat-up" style={{ color: s.isUp ? "var(--green)" : undefined }}>
                  {s.isUp && <Icon name="trending-up" size={12} className="mr-0.5 inline" />}
                  {s.sub}
                </span>
              ) : (
                <T ja={s.subJa!} en={s.subEn!} />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pipeline Chart */}
      <div className="card mb-3.5">
        <div className="card-hd">
          <div className="card-t">
            <Icon name="bar-chart-3" size={16} className="mr-2" style={{ color: "var(--color-accent)" }} />
            <T ja="パイプライン分布" en="Pipeline Distribution" />
          </div>
          <div className="text-[12px]" style={{ color: "var(--ink3)" }}>
            <T ja="全30名" en="30 total" />
          </div>
        </div>
        <div className="card-bd">
          <div className="flex flex-col gap-4">
            {pipelineBreakdown.map((stage, i) => (
              <div key={i}>
                <div className="mb-1.5 flex items-center justify-between">
                  <span
                    className="text-[12px] font-semibold"
                    style={{ color: "var(--ink2)" }}
                  >
                    <T ja={stage.ja} en={stage.en} />
                  </span>
                  <span
                    className="text-[12px] font-semibold"
                    style={{ color: "var(--ink3)" }}
                  >
                    {stage.count}{" "}
                    <span className="text-[10px] font-normal">
                      ({stage.pct}%)
                    </span>
                  </span>
                </div>
                <div
                  className="h-6 w-full overflow-hidden rounded-md"
                  style={{ background: "var(--bg3)" }}
                >
                  <div
                    className="flex h-full items-center rounded-md pl-2 text-[10px] font-semibold text-white transition-all"
                    style={{
                      width: `${stage.pct}%`,
                      background: stage.color,
                      minWidth: stage.pct > 5 ? "auto" : 24,
                    }}
                  >
                    {stage.pct}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom grid: Activity + Invoices */}
      <div className="grid gap-3.5 lg:grid-cols-2">
        {/* Recent Activity */}
        <div className="card">
          <div className="card-hd">
            <div className="card-t">
              <Icon name="clipboard-list" size={16} className="mr-2" style={{ color: "var(--color-accent)" }} />
              <T ja="最近のアクティビティ" en="Recent Activity" />
            </div>
          </div>
          <div className="card-bd">
            {recentActivity.map((a, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-2 border-b py-2.5 last:border-b-0"
                style={{ borderColor: "var(--brd2)" }}
              >
                <div className="min-w-0 flex-1">
                  <div
                    className="text-[12.5px]"
                    style={{ color: "var(--ink2)" }}
                  >
                    <T ja={a.ja} en={a.en} />
                  </div>
                </div>
                <span
                  className={`tag ${a.tag || ""}`}
                  style={
                    !a.tag
                      ? {
                          background: "var(--bg3)",
                          color: "var(--ink3)",
                        }
                      : undefined
                  }
                >
                  <T ja={a.tagJa} en={a.tagEn} />
                </span>
                <div
                  className="shrink-0 text-[11px]"
                  style={{ color: "var(--ink4)" }}
                >
                  {a.date.slice(5).replace("-", "/")}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Invoices */}
        <div className="card">
          <div className="card-hd">
            <div className="card-t">
              <Icon name="credit-card" size={16} className="mr-2" style={{ color: "var(--color-accent)" }} />
              <T ja="請求書" en="Invoices" />
            </div>
          </div>
          <div className="card-bd">
            {invoices.map((inv, i) => (
              <div
                key={i}
                className="flex items-center gap-3 border-b py-2.5 last:border-b-0"
                style={{ borderColor: "var(--brd2)" }}
              >
                <div className="min-w-0 flex-1">
                  <div className="text-[12.5px] font-semibold">
                    {inv.id}
                  </div>
                  <div
                    className="text-[10.5px]"
                    style={{ color: "var(--ink3)" }}
                  >
                    <T ja={inv.ja} en={inv.en} />
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold">{inv.amount}</div>
                  <div
                    className="text-[10px]"
                    style={{ color: "var(--ink4)" }}
                  >
                    {inv.date}
                  </div>
                </div>
                <span className={`tag ${inv.statusTag}`}>
                  <T ja={inv.statusJa} en={inv.statusEn} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
