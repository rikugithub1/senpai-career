import { T } from "../../../components/providers/LanguageProvider";

/* ── mock data ── */

const columns = [
  {
    ja: "OB/OG訪問",
    en: "OB/OG Visit",
    color: "var(--blue)",
    bg: "var(--blue-bg)",
    cards: [
      {
        i: "AN",
        name: "A. Nguyen",
        uniJa: "東京大学 · コンピュータ科学",
        uniEn: "UTokyo · Computer Science",
        tags: [{ ja: "新卒", en: "New grad", cls: "tag-accent" }],
        date: "2026-02-18",
      },
      {
        i: "JP",
        name: "J. Park",
        uniJa: "慶應義塾大学 · 経済学",
        uniEn: "Keio · Economics",
        tags: [
          { ja: "新卒", en: "New grad", cls: "tag-accent" },
          { ja: "有望", en: "Promising", cls: "tag-green" },
        ],
        date: "2026-02-17",
      },
      {
        i: "MS",
        name: "M. Santos",
        uniJa: "早稲田大学 · 商学",
        uniEn: "Waseda · Business",
        tags: [{ ja: "インターン", en: "Intern", cls: "tag-yellow" }],
        date: "2026-02-15",
      },
    ],
  },
  {
    ja: "ES提出",
    en: "Application",
    color: "var(--yellow)",
    bg: "var(--yellow-bg)",
    cards: [
      {
        i: "LC",
        name: "L. Chen",
        uniJa: "一橋大学 · 経済学",
        uniEn: "Hitotsubashi · Economics",
        tags: [{ ja: "選考中", en: "In review", cls: "tag-blue" }],
        date: "2026-02-16",
      },
      {
        i: "RK",
        name: "R. Kumar",
        uniJa: "京都大学 · 法学",
        uniEn: "Kyoto · Law",
        tags: [
          { ja: "選考中", en: "In review", cls: "tag-blue" },
          { ja: "有望", en: "Promising", cls: "tag-green" },
        ],
        date: "2026-02-14",
      },
    ],
  },
  {
    ja: "面接中",
    en: "Interview",
    color: "var(--green)",
    bg: "var(--green-bg)",
    cards: [
      {
        i: "WZ",
        name: "W. Zhang",
        uniJa: "東京工業大学 · 工学",
        uniEn: "Tokyo Tech · Engineering",
        tags: [
          { ja: "2次面接", en: "2nd round", cls: "tag-yellow" },
          { ja: "有望", en: "Promising", cls: "tag-green" },
        ],
        date: "2026-02-20",
      },
      {
        i: "YH",
        name: "Y. Honda",
        uniJa: "大阪大学 · 情報科学",
        uniEn: "Osaka · Info Science",
        tags: [{ ja: "1次面接", en: "1st round", cls: "tag-accent" }],
        date: "2026-02-19",
      },
    ],
  },
  {
    ja: "内定",
    en: "Offer",
    color: "var(--color-accent)",
    bg: "var(--accent-soft)",
    cards: [
      {
        i: "KT",
        name: "K. Tanaka",
        uniJa: "名古屋大学 · 経営学",
        uniEn: "Nagoya · Management",
        tags: [{ ja: "内定承諾", en: "Accepted", cls: "tag-green" }],
        date: "2026-02-10",
      },
    ],
  },
];

/* ── page ── */

export default function PipelinePage() {
  return (
    <>
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1
            className="mb-0.5 text-xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <T ja="採用パイプライン" en="Recruitment Pipeline" />
          </h1>
          <p className="text-[12.5px]" style={{ color: "var(--ink3)" }}>
            <T
              ja="候補者のステージをドラッグ&ドロップで管理"
              en="Manage candidate stages with drag & drop"
            />
          </p>
        </div>
        <button className="btn btn-accent btn-sm">
          <T ja="＋ 候補者を追加" en="+ Add Candidate" />
        </button>
      </div>

      {/* Kanban Board */}
      <div className="overflow-x-auto pb-2">
      <div
        className="grid gap-3"
        style={{ gridTemplateColumns: "repeat(4, minmax(220px, 1fr))", minWidth: 900 }}
      >
        {columns.map((col, ci) => (
          <div key={ci} className="flex flex-col">
            {/* Column header */}
            <div
              className="mb-2.5 flex items-center justify-between rounded-t-lg px-3 py-2.5"
              style={{ background: col.bg }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="h-2 w-2 rounded-full"
                  style={{ background: col.color }}
                />
                <span
                  className="text-[11px] font-semibold uppercase tracking-wider"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: col.color,
                  }}
                >
                  <T ja={col.ja} en={col.en} />
                </span>
              </div>
              <span
                className="rounded-[5px] px-2 py-px text-[10.5px] font-semibold"
                style={{ background: "var(--bg-el)", color: "var(--ink2)" }}
              >
                {col.cards.length}
              </span>
            </div>

            {/* Column body */}
            <div
              className="flex flex-1 flex-col gap-2 rounded-b-lg p-2.5"
              style={{ background: "var(--bg3)", minHeight: 280 }}
            >
              {col.cards.map((card, cardi) => (
                <div
                  key={cardi}
                  className="cursor-grab rounded-lg border p-3 transition-all hover:border-[var(--color-accent)] hover:shadow-sm active:cursor-grabbing"
                  style={{
                    background: "var(--card)",
                    borderColor: "var(--brd)",
                  }}
                >
                  {/* Card header */}
                  <div className="mb-2 flex items-center gap-2">
                    <div
                      className="av av-sm"
                      style={{
                        background: col.bg,
                        color: col.color,
                      }}
                    >
                      {card.i}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[13px] font-semibold">
                        {card.name}
                      </div>
                      <div
                        className="truncate text-[10.5px]"
                        style={{ color: "var(--ink3)" }}
                      >
                        <T ja={card.uniJa} en={card.uniEn} />
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-1.5 flex flex-wrap gap-1">
                    {card.tags.map((tag, ti) => (
                      <span key={ti} className={`tag ${tag.cls}`}>
                        <T ja={tag.ja} en={tag.en} />
                      </span>
                    ))}
                  </div>

                  {/* Date */}
                  <div
                    className="text-[10px]"
                    style={{ color: "var(--ink4)" }}
                  >
                    {card.date}
                  </div>
                </div>
              ))}

              {/* Drop placeholder */}
              <div
                className="mt-auto flex items-center justify-center rounded-lg border-2 border-dashed py-4 text-[11px]"
                style={{
                  borderColor: "var(--brd2)",
                  color: "var(--ink4)",
                }}
              >
                <T ja="ここにドロップ" en="Drop here" />
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

      {/* Summary */}
      <div className="mt-5 grid gap-3 sm:grid-cols-4">
        {columns.map((col, i) => (
          <div
            key={i}
            className="stat"
            style={{ borderLeft: `3px solid ${col.color}` }}
          >
            <div className="stat-lbl">
              <T ja={col.ja} en={col.en} />
            </div>
            <div className="stat-val">{col.cards.length}</div>
            <div className="stat-sub">
              <T
                ja={`${col.cards.length}名の候補者`}
                en={`${col.cards.length} candidate${col.cards.length !== 1 ? "s" : ""}`}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
