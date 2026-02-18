import { T } from "../../../components/providers/LanguageProvider";
import { mockOBSlots } from "../../../data/content";

/* ── mock data ── */

const activeCount = mockOBSlots.filter((s) => s.status === "active").length;
const vacantCount = mockOBSlots.filter((s) => s.status === "vacant").length;

const slotStats = [
  { ja: "合計枠数", en: "Total Slots", v: String(mockOBSlots.length) },
  { ja: "使用中", en: "Active", v: String(activeCount) },
  { ja: "空き枠", en: "Vacant", v: String(vacantCount) },
];

const availableEmployees = [
  { initials: "YT", name: "Y. Takahashi", ja: "営業部 · 東大卒", en: "Sales · UTokyo grad" },
  { initials: "HN", name: "H. Nakamura", ja: "マーケティング · 慶應卒", en: "Marketing · Keio grad" },
  { initials: "AW", name: "A. Watanabe", ja: "エンジニア · 早稲田卒", en: "Engineering · Waseda grad" },
];

const activityLog = [
  { ja: "K. Yamada → スロット #1 に割り当て", en: "K. Yamada → assigned to Slot #1", date: "2026-01-15" },
  { ja: "M. Tanaka → スロット #2 に割り当て", en: "M. Tanaka → assigned to Slot #2", date: "2026-02-01" },
  { ja: "R. Suzuki → スロット #3 に割り当て", en: "R. Suzuki → assigned to Slot #3", date: "2025-12-10" },
  { ja: "S. Ito → スロット #3 から解除", en: "S. Ito → removed from Slot #3", date: "2025-12-10" },
];

/* ── helpers ── */

function daysUntil(dateStr: string) {
  const diff = Math.ceil((new Date(dateStr).getTime() - new Date("2026-02-16").getTime()) / 86400000);
  return diff > 0 ? diff : 0;
}

/* ── page ── */

export default function OBSlotsPage() {
  return (
    <>
      {/* Header */}
      <div className="mb-6">
        <h1
          className="mb-0.5 text-xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <T ja="公式OB枠管理" en="Official OB Slot Management" />
        </h1>
        <p className="text-[12.5px]" style={{ color: "var(--ink3)" }}>
          <T
            ja="自社のOB/OGを公式認証し、学生からの信頼度を高めましょう"
            en="Verify your OB/OG to boost credibility with students"
          />
        </p>
      </div>

      {/* Stats */}
      <div className="mb-5 grid gap-3 sm:grid-cols-3">
        {slotStats.map((s, i) => (
          <div key={i} className="stat">
            <div className="stat-lbl">
              <T ja={s.ja} en={s.en} />
            </div>
            <div className="stat-val">{s.v}</div>
          </div>
        ))}
      </div>

      {/* Slot Table */}
      <div className="card mb-3.5">
        <div className="card-hd">
          <div className="card-t">
            <span className="emoji mr-2">🏅</span>
            <T ja="スロット一覧" en="Slot List" />
          </div>
          <div className="text-[12px]" style={{ color: "var(--ink3)" }}>
            <T
              ja={`${activeCount}/${mockOBSlots.length} 使用中`}
              en={`${activeCount}/${mockOBSlots.length} in use`}
            />
          </div>
        </div>
        <div className="card-bd">
          {/* Column headers */}
          <div
            className="mb-2 grid items-center gap-3 text-[10.5px] font-semibold uppercase tracking-wider"
            style={{
              gridTemplateColumns: "36px 1fr 90px 100px 100px",
              fontFamily: "var(--font-display)",
              color: "var(--ink4)",
            }}
          >
            <span>#</span>
            <span>OB/OG</span>
            <span><T ja="ステータス" en="Status" /></span>
            <span><T ja="ローテーション" en="Rotation" /></span>
            <span className="text-right"><T ja="アクション" en="Action" /></span>
          </div>

          {mockOBSlots.map((slot) => {
            const isSwappable = slot.rotationEnd && new Date(slot.rotationEnd) <= new Date("2026-02-16");
            const remaining = slot.rotationEnd ? daysUntil(slot.rotationEnd) : 0;

            return (
              <div
                key={slot.id}
                className="grid items-center gap-3 border-b py-3 last:border-b-0"
                style={{
                  gridTemplateColumns: "36px 1fr 90px 100px 100px",
                  borderColor: "var(--brd2)",
                }}
              >
                {/* Slot number */}
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-[11px] font-bold"
                  style={{ background: "var(--bg3)", color: "var(--ink3)" }}
                >
                  {slot.id}
                </div>

                {/* OB/OG info */}
                {slot.obog ? (
                  <div className="flex items-center gap-2.5">
                    <div
                      className="av av-sm"
                      style={{
                        background: "var(--accent-soft)",
                        color: "var(--color-accent)",
                      }}
                    >
                      {slot.obog.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 text-[13px] font-semibold">
                        {slot.obog.name}
                        <span className="badge-verified">
                          <T ja="公式OB" en="Verified" />
                        </span>
                      </div>
                      <div className="text-[10.5px]" style={{ color: "var(--ink3)" }}>
                        <T ja={slot.obog.ja} en={slot.obog.en} />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-[13px]" style={{ color: "var(--ink4)" }}>
                    <T ja="未割り当て" en="Unassigned" />
                  </div>
                )}

                {/* Status */}
                {slot.obog ? (
                  isSwappable ? (
                    <span className="tag tag-yellow">
                      <T ja="入替可能" en="Swap ready" />
                    </span>
                  ) : (
                    <span className="tag tag-green">
                      <T ja="アクティブ" en="Active" />
                    </span>
                  )
                ) : (
                  <span className="tag" style={{ background: "var(--bg3)", color: "var(--ink4)" }}>
                    <T ja="空き" en="Vacant" />
                  </span>
                )}

                {/* Rotation */}
                {slot.rotationEnd ? (
                  <div className="text-[11px]" style={{ color: isSwappable ? "var(--yellow)" : "var(--ink3)" }}>
                    {isSwappable ? (
                      <T ja="入替可能" en="Ready" />
                    ) : (
                      <T ja={`残り ${remaining}日`} en={`${remaining} days left`} />
                    )}
                  </div>
                ) : (
                  <div className="text-[11px]" style={{ color: "var(--ink4)" }}>—</div>
                )}

                {/* Action */}
                <div className="text-right">
                  {slot.obog ? (
                    isSwappable ? (
                      <button className="btn btn-sm btn-accent">
                        <T ja="入替" en="Swap" />
                      </button>
                    ) : (
                      <button className="btn btn-sm btn-ghost" disabled style={{ opacity: 0.4, cursor: "not-allowed" }}>
                        <T ja="ロック中" en="Locked" />
                      </button>
                    )
                  ) : (
                    <button className="btn btn-sm btn-accent">
                      <T ja="割り当て" en="Assign" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom grid: Assign panel + Activity log */}
      <div className="grid gap-3.5 lg:grid-cols-2">
        {/* Assign panel (static mock) */}
        <div className="card">
          <div className="card-hd">
            <div className="card-t">
              <span className="emoji mr-2">👤</span>
              <T ja="OB/OGを割り当て" en="Assign OB/OG" />
            </div>
          </div>
          <div className="card-bd">
            <div className="sbox">
              <span className="shrink-0 text-sm" style={{ color: "var(--ink4)" }}>⌕</span>
              <input
                placeholder="社員名を検索..."
                style={{ border: "none", outline: "none", background: "transparent", width: "100%", fontSize: "13px" }}
              />
            </div>
            {availableEmployees.map((emp, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 border-b py-2.5 last:border-b-0"
                style={{ borderColor: "var(--brd2)" }}
              >
                <div
                  className="av av-sm"
                  style={{ background: "var(--accent-soft)", color: "var(--color-accent)" }}
                >
                  {emp.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[13px] font-semibold">{emp.name}</div>
                  <div className="text-[10.5px]" style={{ color: "var(--ink3)" }}>
                    <T ja={emp.ja} en={emp.en} />
                  </div>
                </div>
                <button className="btn btn-sm btn-ghost">
                  <T ja="選択" en="Select" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Activity log */}
        <div className="card">
          <div className="card-hd">
            <div className="card-t">
              <span className="emoji mr-2">📋</span>
              <T ja="変更履歴" en="Activity Log" />
            </div>
          </div>
          <div className="card-bd">
            {activityLog.map((log, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b py-2.5 last:border-b-0"
                style={{ borderColor: "var(--brd2)" }}
              >
                <div className="text-[13px]" style={{ color: "var(--ink2)" }}>
                  <T ja={log.ja} en={log.en} />
                </div>
                <div className="shrink-0 text-[11px]" style={{ color: "var(--ink4)" }}>
                  {log.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
