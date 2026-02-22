"use client";

import { useState } from "react";
import { T } from "../../../components/providers/LanguageProvider";
import Icon from "../../../components/shared/Icon";

/* ── Mock Data ── */

const week = [
  { ja: "月", en: "Mon", d: 10, events: [] },
  { ja: "火", en: "Tue", d: 11, events: [{ time: "11:00", name: "A. Tanaka" }] },
  { ja: "水", en: "Wed", d: 12, events: [{ time: "14:00", name: "K. Yamada" }] },
  { ja: "木", en: "Thu", d: 13, events: [] },
  { ja: "金", en: "Fri", d: 14, events: [{ time: "10:00", name: "M. Suzuki" }, { time: "15:30", name: "H. Kim" }] },
  { ja: "土", en: "Sat", d: 15, events: [] },
  { ja: "日", en: "Sun", d: 16, events: [] },
];

const timeSlots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];

interface Booking {
  id: number;
  initials: string;
  name: string;
  company: { ja: string; en: string };
  date: { ja: string; en: string };
  time: string;
  status: "confirmed" | "pending" | "completed";
}

const bookings: Booking[] = [
  {
    id: 1, initials: "KY", name: "K. Yamada",
    company: { ja: "McKinsey & Company", en: "McKinsey & Company" },
    date: { ja: "2月12日（水）", en: "Wed, Feb 12" },
    time: "14:00 - 14:30",
    status: "confirmed",
  },
  {
    id: 2, initials: "MS", name: "M. Suzuki",
    company: { ja: "Goldman Sachs", en: "Goldman Sachs" },
    date: { ja: "2月14日（金）", en: "Fri, Feb 14" },
    time: "10:00 - 10:30",
    status: "pending",
  },
  {
    id: 3, initials: "HK", name: "H. Kim",
    company: { ja: "Morgan Stanley", en: "Morgan Stanley" },
    date: { ja: "2月14日（金）", en: "Fri, Feb 14" },
    time: "15:30 - 16:00",
    status: "confirmed",
  },
];

const statusStyles: Record<string, { bg: string; color: string; ja: string; en: string }> = {
  confirmed: { bg: "var(--green-bg, rgba(16,185,129,.12))", color: "var(--green, #10b981)", ja: "確定", en: "Confirmed" },
  pending: { bg: "var(--yellow-bg, rgba(245,158,11,.12))", color: "var(--yellow, #f59e0b)", ja: "保留中", en: "Pending" },
  completed: { bg: "var(--bg3, rgba(0,0,0,.05))", color: "var(--ink4, #999)", ja: "完了", en: "Completed" },
};

/* ── helpers ── */

function getEventsForSlot(dayIndex: number, time: string) {
  return week[dayIndex].events.filter((e) => e.time === time);
}

/* ── Page ── */

export default function BookingsPage() {
  const [view, setView] = useState<"calendar" | "list">("calendar");

  return (
    <>
      {/* Header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="mb-0.5 text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            <Icon name="calendar" size={16} className="mr-2" style={{ color: "var(--color-accent)" }} />
            <T ja="予約管理" en="Bookings" />
          </h1>
          <p className="text-[12.5px]" style={{ color: "var(--ink3)" }}>
            <T ja="OB/OG訪問の予約を管理しましょう" en="Manage your OB/OG visit bookings" />
          </p>
        </div>
        <div className="flex gap-1.5">
          <button
            className={`btn btn-sm ${view === "calendar" ? "btn-accent" : "btn-ghost"}`}
            onClick={() => setView("calendar")}
          >
            <T ja="カレンダー" en="Calendar" />
          </button>
          <button
            className={`btn btn-sm ${view === "list" ? "btn-accent" : "btn-ghost"}`}
            onClick={() => setView("list")}
          >
            <T ja="リスト" en="List" />
          </button>
        </div>
      </div>

      {/* Weekly Calendar */}
      {view === "calendar" && (
        <div className="card mb-3.5">
          <div className="card-hd">
            <div className="card-t">
              <T ja="2月10日 - 2月16日" en="Feb 10 - Feb 16" />
            </div>
            <div className="flex gap-1.5">
              <button className="btn btn-sm btn-ghost">←</button>
              <button className="btn btn-sm btn-ghost">
                <T ja="今週" en="Today" />
              </button>
              <button className="btn btn-sm btn-ghost">→</button>
            </div>
          </div>
          <div className="card-bd overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-[12px]">
              <thead>
                <tr>
                  <th
                    className="w-16 border-b p-2 text-left text-[11px] font-medium"
                    style={{ borderColor: "var(--brd)", color: "var(--ink4)" }}
                  />
                  {week.map((d, i) => (
                    <th
                      key={i}
                      className="border-b p-2 text-center text-[11px] font-semibold"
                      style={{
                        borderColor: "var(--brd)",
                        color: d.events.length > 0 ? "var(--color-accent)" : "var(--ink2)",
                      }}
                    >
                      <T ja={d.ja} en={d.en} />
                      <div
                        className="mt-0.5 text-[13px] font-bold"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {d.d}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeSlots.map((time) => (
                  <tr key={time}>
                    <td
                      className="border-b p-2 text-[10.5px]"
                      style={{ borderColor: "var(--brd)", color: "var(--ink4)" }}
                    >
                      {time}
                    </td>
                    {week.map((_, dayIdx) => {
                      const events = getEventsForSlot(dayIdx, time);
                      return (
                        <td
                          key={dayIdx}
                          className="border-b p-1 text-center"
                          style={{ borderColor: "var(--brd)" }}
                        >
                          {events.map((ev, ei) => (
                            <div
                              key={ei}
                              className="rounded-md px-1.5 py-1 text-[10.5px] font-medium"
                              style={{
                                background: "var(--accent-soft)",
                                color: "var(--color-accent)",
                                border: "1px solid var(--color-accent)",
                              }}
                            >
                              {ev.name}
                            </div>
                          ))}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Upcoming Bookings */}
      <div className="card mb-3.5">
        <div className="card-hd">
          <div className="card-t">
            <Icon name="clipboard-list" size={16} className="mr-2" style={{ color: "var(--color-accent)" }} />
            <T ja="予約一覧" en="Upcoming Bookings" />
          </div>
          <span className="rounded-full px-2 py-0.5 text-[11px] font-semibold" style={{ background: "var(--accent-soft)", color: "var(--color-accent)" }}>
            {bookings.length}
          </span>
        </div>
        <div className="card-bd">
          {bookings.map((b) => {
            const st = statusStyles[b.status];
            return (
              <div
                key={b.id}
                className="flex items-center gap-3 border-b py-3.5 last:border-b-0"
                style={{ borderColor: "var(--brd2, var(--brd))" }}
              >
                <div
                  className="av av-md shrink-0"
                  style={{ background: "var(--accent-soft)", color: "var(--color-accent)" }}
                >
                  {b.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[13px] font-semibold">{b.name}</div>
                  <div className="text-[11.5px]" style={{ color: "var(--ink3)" }}>
                    <T ja={b.company.ja} en={b.company.en} />
                  </div>
                </div>
                <div className="hidden text-right sm:block">
                  <div className="text-[12px] font-medium" style={{ color: "var(--ink2)" }}>
                    <T ja={b.date.ja} en={b.date.en} />
                  </div>
                  <div className="text-[11px]" style={{ color: "var(--ink4)" }}>{b.time}</div>
                </div>
                <span
                  className="shrink-0 rounded-full px-2.5 py-0.5 text-[10.5px] font-semibold"
                  style={{ background: st.bg, color: st.color }}
                >
                  <T ja={st.ja} en={st.en} />
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div
        className="rounded-xl border p-5 text-center"
        style={{ borderColor: "var(--brd)", background: "var(--card)" }}
      >
        <div className="mb-1"><Icon name="calendar-check" size={28} style={{ color: "var(--color-accent)" }} /></div>
        <div className="mb-1 text-[14px] font-semibold" style={{ fontFamily: "var(--font-display)" }}>
          <T ja="新しい訪問を予約" en="Book a New Visit" />
        </div>
        <div className="mb-3 text-[12.5px]" style={{ color: "var(--ink3)" }}>
          <T
            ja="OB/OG検索ページから興味のある先輩を見つけましょう"
            en="Find alumni you're interested in from the OB/OG search page"
          />
        </div>
        <button className="btn btn-accent">
          <T ja="OB/OGを探す" en="Find OB/OG" />
          <span className="arrow">→</span>
        </button>
      </div>
    </>
  );
}
