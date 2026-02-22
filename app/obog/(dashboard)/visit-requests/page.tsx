"use client";

import { useState } from "react";
import { T } from "../../../components/providers/LanguageProvider";
import Icon from "../../../components/shared/Icon";
import EmptyState from "../../../components/shared/EmptyState";

/* ── types ── */

type RequestStatus = "new" | "approved" | "completed" | "declined";

interface VisitRequest {
  id: number;
  initials: string;
  name: string;
  university: { ja: string; en: string };
  major: { ja: string; en: string };
  topic: { ja: string; en: string };
  date: { ja: string; en: string };
  appointmentDate?: { ja: string; en: string };
  status: RequestStatus;
}

/* ── mock data ── */

const initialRequests: VisitRequest[] = [
  {
    id: 1, initials: "JP", name: "J. Park",
    university: { ja: "慶應義塾大学", en: "Keio University" },
    major: { ja: "経済学部 3年", en: "Economics, Y3" },
    topic: { ja: "金融業界のキャリアパスについて", en: "Career paths in finance" },
    date: { ja: "2026年2月20日", en: "Feb 20, 2026" },
    status: "new",
  },
  {
    id: 2, initials: "MS", name: "M. Santos",
    university: { ja: "早稲田大学", en: "Waseda University" },
    major: { ja: "商学部 3年", en: "Business, Y3" },
    topic: { ja: "コンサル業界の就活について", en: "Job hunting in consulting" },
    date: { ja: "2026年2月19日", en: "Feb 19, 2026" },
    status: "new",
  },
  {
    id: 3, initials: "RK", name: "R. Kumar",
    university: { ja: "東京大学", en: "University of Tokyo" },
    major: { ja: "法学部 4年", en: "Law, Y4" },
    topic: { ja: "外資系企業へのキャリアチェンジ", en: "Switching to foreign firms" },
    date: { ja: "2026年2月17日", en: "Feb 17, 2026" },
    appointmentDate: { ja: "2026年2月25日 14:00", en: "Feb 25, 2026 14:00" },
    status: "approved",
  },
  {
    id: 4, initials: "AN", name: "A. Nguyen",
    university: { ja: "東京工業大学", en: "Tokyo Tech" },
    major: { ja: "情報工学科 3年", en: "CS, Y3" },
    topic: { ja: "テック業界のインターン経験", en: "Tech internship experience" },
    date: { ja: "2026年2月15日", en: "Feb 15, 2026" },
    status: "new",
  },
  {
    id: 5, initials: "LC", name: "L. Chen",
    university: { ja: "一橋大学", en: "Hitotsubashi University" },
    major: { ja: "社会学部 3年", en: "Sociology, Y3" },
    topic: { ja: "総合商社の働き方について", en: "Working at trading companies" },
    date: { ja: "2026年2月12日", en: "Feb 12, 2026" },
    status: "completed",
  },
  {
    id: 6, initials: "YT", name: "Y. Tanaka",
    university: { ja: "京都大学", en: "Kyoto University" },
    major: { ja: "経営学部 4年", en: "Management, Y4" },
    topic: { ja: "スタートアップ vs 大手企業", en: "Startup vs large corporation" },
    date: { ja: "2026年2月10日", en: "Feb 10, 2026" },
    status: "completed",
  },
];

const tabs = [
  { key: "all", ja: "すべて", en: "All" },
  { key: "new", ja: "新規", en: "New" },
  { key: "approved", ja: "承認済", en: "Approved" },
  { key: "completed", ja: "完了", en: "Completed" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

const statusConfig: Record<RequestStatus, { tag: string; ja: string; en: string }> = {
  new: { tag: "tag-yellow", ja: "新規", en: "New" },
  approved: { tag: "tag-green", ja: "承認済", en: "Approved" },
  completed: { tag: "tag-accent", ja: "完了", en: "Completed" },
  declined: { tag: "", ja: "辞退", en: "Declined" },
};

/* ── page ── */

export default function VisitRequestsPage() {
  const [tab, setTab] = useState<TabKey>("all");
  const [requests, setRequests] = useState(initialRequests);

  const filtered = tab === "all" ? requests : requests.filter((r) => r.status === tab);

  const counts: Record<string, number> = {
    all: requests.length,
    new: requests.filter((r) => r.status === "new").length,
    approved: requests.filter((r) => r.status === "approved").length,
    completed: requests.filter((r) => r.status === "completed").length,
  };

  const handleApprove = (id: number) => {
    setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status: "approved" as RequestStatus } : r)));
  };

  const handleDecline = (id: number) => {
    setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status: "declined" as RequestStatus } : r)));
  };

  return (
    <>
      {/* Header */}
      <div className="mb-6">
        <h1 className="mb-0.5 text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          <T ja="訪問リクエスト" en="Visit Requests" />
        </h1>
        <p className="text-[12.5px]" style={{ color: "var(--ink3)" }}>
          <T ja="学生からのOB/OG訪問リクエストを管理" en="Manage visit requests from students" />
        </p>
      </div>

      {/* Stats */}
      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <div className="stat" style={{ borderLeft: "3px solid var(--yellow)" }}>
          <div className="stat-lbl"><T ja="新規リクエスト" en="New Requests" /></div>
          <div className="stat-val">{counts.new}</div>
          <div className="stat-sub"><T ja="要対応" en="action needed" /></div>
        </div>
        <div className="stat" style={{ borderLeft: "3px solid var(--green)" }}>
          <div className="stat-lbl"><T ja="承認済" en="Approved" /></div>
          <div className="stat-val">{counts.approved}</div>
          <div className="stat-sub"><T ja="面談予定" en="upcoming" /></div>
        </div>
        <div className="stat" style={{ borderLeft: "3px solid var(--blue)" }}>
          <div className="stat-lbl"><T ja="完了" en="Completed" /></div>
          <div className="stat-val">{counts.completed}</div>
          <div className="stat-sub"><T ja="今月" en="this month" /></div>
        </div>
        <div className="stat" style={{ borderLeft: "3px solid var(--ink4)" }}>
          <div className="stat-lbl"><T ja="合計" en="Total" /></div>
          <div className="stat-val">{counts.all}</div>
          <div className="stat-sub"><T ja="全期間" en="all time" /></div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-4 flex gap-1 overflow-x-auto rounded-lg p-1" style={{ background: "var(--bg3)", WebkitOverflowScrolling: "touch" }}>
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className="shrink-0 whitespace-nowrap rounded-md px-3 py-1.5 text-[12.5px] font-medium transition-all"
            style={{
              background: tab === t.key ? "var(--card)" : "transparent",
              color: tab === t.key ? "var(--ink)" : "var(--ink3)",
              boxShadow: tab === t.key ? "var(--shadow-sm)" : "none",
              borderBottom: tab === t.key ? "2px solid var(--color-accent)" : "2px solid transparent",
            }}
          >
            <T ja={t.ja} en={t.en} />
            <span className="ml-1.5 text-[11px]" style={{ color: "var(--ink4)" }}>{counts[t.key]}</span>
          </button>
        ))}
      </div>

      {/* Request List */}
      <div className="card">
        <div className="card-bd">
          {filtered.length === 0 ? (
            <EmptyState
              icon="inbox"
              title={{ ja: "該当するリクエストはありません", en: "No requests found" }}
              description={{ ja: "フィルターを変更してみてください", en: "Try changing the filter" }}
            />
          ) : (
            filtered.map((r) => {
              const sc = statusConfig[r.status];
              return (
                <div
                  key={r.id}
                  className="flex flex-col gap-3 border-b py-4 last:border-b-0 transition-colors sm:flex-row sm:items-center"
                  style={{ borderColor: "var(--brd2)", cursor: "pointer" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-hover)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  {/* Avatar + Info */}
                  <div className="flex min-w-0 flex-1 items-start gap-3">
                    <div
                      className="av av-md shrink-0"
                      style={{ background: "var(--accent-soft)", color: "var(--color-accent)" }}
                    >
                      {r.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 text-[13px]">
                        <span className="font-semibold">{r.name}</span>
                        <span className={`tag ${sc.tag}`}><T ja={sc.ja} en={sc.en} /></span>
                      </div>
                      <div className="mt-0.5 text-[11.5px]" style={{ color: "var(--ink2)" }}>
                        <T ja={r.university.ja} en={r.university.en} />
                        {" · "}
                        <T ja={r.major.ja} en={r.major.en} />
                      </div>
                      <div className="mt-1 text-[12px]" style={{ color: "var(--ink3)" }}>
                        <T ja={r.topic.ja} en={r.topic.en} />
                      </div>
                      <div className="mt-1 text-[10.5px]" style={{ color: "var(--ink4)" }}>
                        <T ja={`リクエスト日: ${r.date.ja}`} en={`Requested: ${r.date.en}`} />
                      </div>
                      {r.status === "approved" && r.appointmentDate && (
                        <div className="mt-1 flex items-center gap-1 text-[11px] font-medium" style={{ color: "var(--green)" }}>
                          <Icon name="calendar-check" size={12} />
                          <T ja={`面談予定: ${r.appointmentDate.ja}`} en={`Appointment: ${r.appointmentDate.en}`} />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 items-center gap-2 pl-12 sm:pl-0">
                    {r.status === "new" && (
                      <>
                        <button className="btn btn-sm btn-accent" onClick={() => handleApprove(r.id)}>
                          <T ja="承認" en="Approve" />
                        </button>
                        <button
                          className="btn btn-sm btn-ghost"
                          style={{ color: "var(--red)", borderColor: "var(--red)" }}
                          onClick={() => handleDecline(r.id)}
                        >
                          <T ja="辞退" en="Decline" />
                        </button>
                      </>
                    )}
                    {r.status === "approved" && (
                      <button className="btn btn-sm btn-ghost">
                        <T ja="メッセージ" en="Message" />
                      </button>
                    )}
                    {r.status === "completed" && (
                      <button className="btn btn-sm btn-ghost" style={{ color: "var(--color-accent)" }}>
                        <Icon name="pen-line" size={12} className="mr-1" />
                        <T ja="レビューを書く" en="Write Review" />
                      </button>
                    )}
                    <Icon name="chevron-right" size={14} style={{ color: "var(--ink4)", flexShrink: 0 }} />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
