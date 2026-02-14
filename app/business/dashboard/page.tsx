import { T } from "../../components/providers/LanguageProvider";

/* ── data ── */

const stats = [
  { ja: "訪問リクエスト", en: "Visit Requests", v: "24", sub: <><span className="stat-up">↑ 42%</span></> },
  { ja: "面談完了", en: "Completed", v: "17", sub: <><T ja="今月" en="this month" /></> },
  { ja: "選考中", en: "In Pipeline", v: "6", sub: <><span className="stat-up">↑ 2</span> <T ja="今週" en="this week" /></> },
  { ja: "未読メッセージ", en: "Unread Messages", v: "3", sub: <><T ja="要対応" en="action needed" /></> },
];

const pipeline = [
  { ja: "OB訪問", en: "OB Visit", n: 3, cards: [
    { n: "A. Nguyen", ja: "東大 CS", en: "UTokyo CS" },
    { n: "J. Park", ja: "慶應 経済", en: "Keio Econ" },
    { n: "M. Santos", ja: "早稲田 商", en: "Waseda Biz" },
  ]},
  { ja: "ES提出", en: "Application", n: 2, cards: [
    { n: "L. Chen", ja: "東大 経済", en: "UTokyo Econ" },
    { n: "R. Kumar", ja: "慶應 法", en: "Keio Law" },
  ]},
  { ja: "面接中", en: "Interview", n: 1, cards: [
    { n: "W. Zhang", ja: "東大 工学 · 2次", en: "UTokyo Eng · 2nd" },
  ]},
  { ja: "内定", en: "Offer", n: 0, cards: [] },
];

const candidates = [
  { i: "AN", n: "A. Nguyen", ja: "東大 CS · OB訪問済", en: "UTokyo CS · OB visited", tag: "tag-green", tJa: "有望", tEn: "Promising", c: "var(--green)", bg: "var(--green-bg)" },
  { i: "LC", n: "L. Chen", ja: "東大 経済 · ES提出済", en: "UTokyo Econ · ES submitted", tag: "tag-blue", tJa: "選考中", tEn: "In review", c: "var(--blue)", bg: "var(--blue-bg)" },
  { i: "WZ", n: "W. Zhang", ja: "東大 工学 · 2次面接", en: "UTokyo Eng · 2nd interview", tag: "tag-yellow", tJa: "面接中", tEn: "Interview", c: "var(--yellow)", bg: "var(--yellow-bg)" },
  { i: "JP", n: "J. Park", ja: "慶應 経済 · OB訪問予定", en: "Keio Econ · OB visit scheduled", tag: "tag-accent", tJa: "新規", tEn: "New", c: "var(--color-accent)", bg: "var(--accent-soft)" },
];

const msgs = [
  { i: "AN", n: "A. Nguyen", ja: "OB訪問の日程について相談です", en: "About the OB visit schedule...", t: "1h", unread: true, c: "var(--green)", bg: "var(--green-bg)" },
  { i: "LC", n: "L. Chen", ja: "ESを提出しましたのでご確認...", en: "I've submitted my ES, please review...", t: "3h", unread: true, c: "var(--blue)", bg: "var(--blue-bg)" },
  { i: "WZ", n: "W. Zhang", ja: "2次面接の準備について質問が...", en: "Question about 2nd interview prep...", t: "1d", unread: false, c: "var(--yellow)", bg: "var(--yellow-bg)" },
  { i: "MS", n: "M. Santos", ja: "はじめまして。OB訪問を希望...", en: "Nice to meet you. I'd like to request...", t: "2d", unread: false, c: "var(--color-accent)", bg: "var(--accent-soft)" },
  { i: "RK", n: "R. Kumar", ja: "ご返信ありがとうございます", en: "Thank you for your reply", t: "3d", unread: false, c: "var(--green)", bg: "var(--green-bg)" },
];

/* ── page ── */

export default function BusinessDashboardPage() {
  return (
    <>
      {/* Header */}
      <div className="mb-6">
        <h1 className="mb-0.5 text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          <T ja="採用ダッシュボード" en="Recruitment Dashboard" />
        </h1>
        <p className="text-[12.5px]" style={{ color: "var(--ink3)" }}>business.senpaicareer.com</p>
      </div>

      {/* Stats */}
      <div className="mb-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} className="stat">
            <div className="stat-lbl"><T ja={s.ja} en={s.en} /></div>
            <div className="stat-val">{s.v}</div>
            <div className="stat-sub">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Pipeline */}
      <div className="card mb-3.5">
        <div className="card-hd">
          <div className="card-t"><span className="emoji mr-2">📋</span><T ja="採用パイプライン" en="Recruitment Pipeline" /></div>
          <span className="card-act"><T ja="全画面" en="Expand" /></span>
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

      {/* Bottom grid */}
      <div className="grid gap-3.5 lg:grid-cols-2">
        {/* Candidates */}
        <div className="card">
          <div className="card-hd">
            <div className="card-t"><span className="emoji mr-2">👥</span><T ja="候補者管理" en="Candidates" /></div>
            <span className="card-act"><T ja="全て見る" en="View all" /></span>
          </div>
          <div className="card-bd">
            <div className="sbox">
              <span className="shrink-0 text-sm" style={{ color: "var(--ink4)" }}>⌕</span>
              <input placeholder="候補者を検索..." />
            </div>
            {candidates.map((c, i) => (
              <div key={i} className="flex items-center gap-2.5 border-b py-2.5 last:border-b-0" style={{ borderColor: "var(--brd2)" }}>
                <div className="av av-md" style={{ background: c.bg, color: c.c }}>{c.i}</div>
                <div className="min-w-0 flex-1">
                  <div className="text-[13px] font-semibold">{c.n}</div>
                  <div className="text-[10.5px]" style={{ color: "var(--ink3)" }}><T ja={c.ja} en={c.en} /></div>
                </div>
                <span className={`tag ${c.tag}`}><T ja={c.tJa} en={c.tEn} /></span>
              </div>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="card">
          <div className="card-hd">
            <div className="card-t"><span className="emoji mr-2">💬</span><T ja="メッセージ" en="Messages" /></div>
            <span className="card-act"><T ja="すべて" en="All" /></span>
          </div>
          <div className="px-4 py-2">
            {msgs.map((m, i) => (
              <div key={i} className="flex cursor-pointer items-start gap-2.5 rounded-lg px-2 py-3 transition-colors hover:bg-[var(--bg-hover)]">
                <div className="av av-sm" style={{ background: m.bg, color: m.c }}>{m.i}</div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 text-[13px] font-semibold">
                    {m.n}
                    {m.unread && <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-accent)" }} />}
                  </div>
                  <div className="mt-0.5 max-w-55 truncate text-xs" style={{ color: "var(--ink3)" }}><T ja={m.ja} en={m.en} /></div>
                </div>
                <span className="shrink-0 text-[10px]" style={{ color: "var(--ink4)" }}>{m.t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}