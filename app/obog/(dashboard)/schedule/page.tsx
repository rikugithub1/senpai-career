"use client";

import { T } from "../../../components/providers/LanguageProvider";
import Icon from "../../../components/shared/Icon";

/* ── helpers ── */

function getTodayDayIndex(): number {
  // 0=Sun,1=Mon...6=Sat -> map to our week array index (Mon=0..Sat=5)
  const jsDay = new Date().getDay();
  return jsDay === 0 ? -1 : jsDay - 1; // Sun returns -1 (not in our array)
}

/* ── mock data ── */

const weekDays = [
  { ja: "月", en: "Mon", d: 24, slots: [{ time: "14:00--15:00", name: "J. Park", type: "online" }] },
  { ja: "火", en: "Tue", d: 25, slots: [] },
  { ja: "水", en: "Wed", d: 26, slots: [{ time: "10:00--11:00", name: "R. Kumar", type: "in-person" }] },
  { ja: "木", en: "Thu", d: 27, slots: [] },
  { ja: "金", en: "Fri", d: 28, slots: [{ time: "16:00--17:00", name: "A. Nguyen", type: "online" }, { time: "18:00--19:00", name: "L. Chen", type: "online" }] },
  { ja: "土", en: "Sat", d: 1, slots: [] },
];

const availability = [
  { id: 1, day: { ja: "月曜日", en: "Monday" }, time: "14:00 -- 17:00", type: "online" as const },
  { id: 2, day: { ja: "水曜日", en: "Wednesday" }, time: "10:00 -- 12:00", type: "in-person" as const },
  { id: 3, day: { ja: "金曜日", en: "Friday" }, time: "15:00 -- 19:00", type: "online" as const },
  { id: 4, day: { ja: "土曜日", en: "Saturday" }, time: "13:00 -- 16:00", type: "in-person" as const },
];

const typeConfig = {
  online: { ja: "オンライン", en: "Online", tag: "tag-green" },
  "in-person": { ja: "対面", en: "In-person", tag: "tag-blue" },
} as const;

/* ── page ── */

export default function SchedulePage() {
  const todayIdx = getTodayDayIndex();

  return (
    <>
      {/* Header */}
      <div className="mb-6">
        <h1 className="mb-0.5 text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          <T ja="スケジュール" en="Schedule" />
        </h1>
        <p className="text-[12.5px]" style={{ color: "var(--ink3)" }}>
          <T ja="今週の予定と空き時間を管理" en="Manage your weekly schedule and availability" />
        </p>
      </div>

      {/* Weekly Calendar */}
      <div className="card mb-5">
        <div className="card-hd">
          <div className="card-t">
            <span className="mr-2 inline-flex"><Icon name="calendar" size={16} /></span>
            <T ja="今週のスケジュール" en="This Week" />
          </div>
        </div>
        <div className="mb-1 px-5 text-[12px]" style={{ color: "var(--ink3)" }}>
          <T ja="2月24日 -- 3月1日" en="Feb 24 -- Mar 1" />
        </div>
        <div className="card-bd">
          <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
          <div className="flex gap-2" style={{ minWidth: 600 }}>
            {weekDays.map((d, i) => {
              const isToday = i === todayIdx;
              return (
                <div
                  key={i}
                  className="min-w-25 flex-1 rounded-lg border p-3"
                  style={{
                    borderColor: isToday ? "var(--color-accent)" : d.slots.length > 0 ? "var(--color-accent)" : "var(--brd)",
                    background: isToday ? "var(--accent-soft)" : d.slots.length > 0 ? "var(--accent-soft)" : "transparent",
                    borderWidth: isToday ? 2 : 1,
                  }}
                >
                  <div
                    className="mb-1.5 flex items-center gap-1 text-[13px] font-semibold"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: isToday || d.slots.length > 0 ? "var(--color-accent)" : "var(--ink)",
                    }}
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
                  {d.slots.length === 0 ? (
                    <button
                      className="flex w-full items-center justify-center rounded-md border border-dashed p-1.5 text-[11px] transition-colors"
                      style={{ borderColor: "var(--brd)", color: "var(--ink4)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-hover)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      <Icon name="plus" size={12} className="mr-0.5" />
                      <T ja="追加" en="Add" />
                    </button>
                  ) : (
                    d.slots.map((s, j) => (
                      <div
                        key={j}
                        className="mb-1.5 last:mb-0 rounded-md border px-2 py-1.5"
                        style={{ borderColor: "var(--brd2)", background: "var(--card)" }}
                      >
                        <div className="text-[11px] font-medium">{s.time}</div>
                        <div className="flex items-center gap-1.5 text-[10.5px]" style={{ color: "var(--ink3)" }}>
                          <span>{s.name}</span>
                          <span className={`tag ${typeConfig[s.type as keyof typeof typeConfig].tag}`} style={{ fontSize: "9px", padding: "1px 5px" }}>
                            <T
                              ja={typeConfig[s.type as keyof typeof typeConfig].ja}
                              en={typeConfig[s.type as keyof typeof typeConfig].en}
                            />
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              );
            })}
          </div>
          </div>
        </div>
      </div>

      {/* Registered Availability */}
      <div className="card mb-5">
        <div className="card-hd">
          <div className="card-t">
            <span className="mr-2 inline-flex"><Icon name="clock" size={16} /></span>
            <T ja="登録済みの空き時間" en="Registered Availability" />
          </div>
          <div
            className="rounded-md px-2 py-0.5 text-[13px] font-bold"
            style={{ color: "var(--color-accent)", background: "var(--accent-soft)" }}
          >
            <T ja={`${availability.length}件`} en={`${availability.length} slots`} />
          </div>
        </div>
        <div className="card-bd">
          {availability.map((slot) => {
            const tc = typeConfig[slot.type];
            return (
              <div
                key={slot.id}
                className="flex flex-wrap items-center gap-3 border-b py-3.5 last:border-b-0"
                style={{ borderColor: "var(--brd2)" }}
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[12px] font-semibold"
                  style={{ background: "var(--accent-soft)", color: "var(--color-accent)" }}
                >
                  <T ja={slot.day.ja.charAt(0)} en={slot.day.en.slice(0, 2)} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[13px] font-medium">
                    <T ja={slot.day.ja} en={slot.day.en} />
                  </div>
                  <div className="mt-0.5 text-[12px]" style={{ color: "var(--ink3)" }}>
                    {slot.time}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`tag ${tc.tag}`}>
                    <T ja={tc.ja} en={tc.en} />
                  </span>
                  <button
                    className="btn btn-sm btn-ghost"
                    style={{ color: "var(--ink4)" }}
                  >
                    <T ja="編集" en="Edit" />
                  </button>
                  <button
                    className="btn btn-sm btn-ghost"
                    style={{ color: "var(--red)" }}
                    aria-label="Delete"
                  >
                    <Icon name="trash-2" size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA: Add Availability */}
      <div
        className="rounded-xl border p-5"
        style={{ borderColor: "var(--color-accent)", background: "var(--accent-soft)" }}
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-1 text-[15px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
              <T ja="新しい空き時間を追加" en="Add New Availability" />
            </div>
            <div className="text-[13px]" style={{ color: "var(--ink2)" }}>
              <T
                ja="空き時間を登録して、学生からの訪問リクエストを受け付けましょう。"
                en="Register your availability to start receiving visit requests from students."
              />
            </div>
          </div>
          <button className="btn btn-accent shrink-0">
            <T ja="空き時間を追加" en="Add Slot" />
            <span className="arrow">+</span>
          </button>
        </div>
      </div>
    </>
  );
}
