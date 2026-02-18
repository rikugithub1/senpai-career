import { T } from "../../../components/providers/LanguageProvider";

/* ── data ── */

const week = [
  { ja: "月", en: "Mon", d: 10, ev: null },
  { ja: "火", en: "Tue", d: 11, ev: null },
  { ja: "水", en: "Wed", d: 12, ev: "14:00 K. Yamada" },
  { ja: "木", en: "Thu", d: 13, ev: null },
  { ja: "金", en: "Fri", d: 14, ev: "10:00 M. Suzuki" },
];

const activities: { c: string; ja: React.ReactNode; en: React.ReactNode; jt: string; et: string }[] = [
  { c: "var(--color-accent)", ja: <><b>K. Yamada</b>さんへの訪問リクエストが<b>承認</b>されました</>, en: <>Visit request to <b>K. Yamada</b> was <b>approved</b></>, jt: "2時間前", et: "2h ago" },
  { c: "var(--blue)", ja: <><b>M. Suzuki</b>さんから新しいメッセージ</>, en: <>New message from <b>M. Suzuki</b></>, jt: "5時間前", et: "5h ago" },
  { c: "var(--green)", ja: <><b>A. Tanaka</b>さんとのOB訪問が完了しました</>, en: <>OB visit with <b>A. Tanaka</b> completed</>, jt: "昨日", et: "Yesterday" },
  { c: "var(--yellow)", ja: <><b>R. Watanabe</b>（McKinsey）が新しくOBとして登録</>, en: <><b>R. Watanabe</b> (McKinsey) joined as a new OB</>, jt: "2日前", et: "2 days ago" },
];

const senpais = [
  { i: "RW", n: "R. Watanabe", ja: "McKinsey · 慶應卒", en: "McKinsey · Keio grad" },
  { i: "HK", n: "H. Kim", ja: "Morgan Stanley · 東大卒", en: "Morgan Stanley · UTokyo grad" },
  { i: "YL", n: "Y. Li", ja: "三井物産 · 早稲田卒", en: "Mitsui & Co. · Waseda grad" },
];

const msgs = [
  { i: "MS", n: "M. Suzuki", ja: "金曜日の面談の件ですが...", en: "About our Friday meeting...", t: "5h", unread: true },
  { i: "AT", n: "A. Tanaka", ja: "先日はありがとうございました！", en: "Thanks for visiting last time!", t: "1d", unread: false },
];

const tags = [
  { ja: "金融", en: "Finance" },
  { ja: "コンサル", en: "Consulting" },
  { ja: "商社", en: "Trading" },
];

/* ── page ── */

export default function CommunityDashboardPage() {
  return (
    <>
      {/* Header */}
      <div className="mb-6">
        <h1 className="mb-0.5 text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          <T ja="おかえりなさい、Chenさん 👋" en="Welcome back, Chen 👋" />
        </h1>
        <p className="text-[12.5px]" style={{ color: "var(--ink3)" }}>senpaicareer.com</p>
      </div>

      {/* Schedule */}
      <div className="card mb-3.5">
        <div className="card-hd">
          <div className="card-t"><span className="emoji mr-2">📅</span><T ja="今週のスケジュール" en="This Week" /></div>
          <span className="card-act"><T ja="全て見る" en="View all" /></span>
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
                <div className="mb-0.5 text-[13px] font-semibold" style={{ fontFamily: "var(--font-display)", color: d.ev ? "var(--color-accent)" : "var(--ink)" }}>
                  <T ja={d.ja} en={d.en} /> {d.d}
                </div>
                <div className="text-[11px]" style={{ color: "var(--ink3)" }}>{d.ev || "—"}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="grid gap-3.5 lg:grid-cols-[1fr_340px]">
        {/* Left */}
        <div className="flex flex-col gap-3.5">
          {/* Activity */}
          <div className="card">
            <div className="card-hd"><div className="card-t"><T ja="アクティビティ" en="Activity" /></div></div>
            <div className="card-bd">
              {activities.map((a, i) => (
                <div key={i} className="flex gap-2.5 border-b py-3 last:border-b-0" style={{ borderColor: "var(--brd2)" }}>
                  <div className="mt-1.5 h-[7px] w-[7px] shrink-0 rounded-full" style={{ background: a.c }} />
                  <div>
                    <div className="text-[13px] leading-snug" style={{ color: "var(--ink2)" }}>
                      <span className="ja-only">{a.ja}</span><span className="en-only">{a.en}</span>
                    </div>
                    <div className="mt-0.5 text-[10.5px]" style={{ color: "var(--ink4)" }}><T ja={a.jt} en={a.et} /></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended */}
          <div className="card">
            <div className="card-hd">
              <div className="card-t"><T ja="おすすめの先輩" en="Recommended Senpai" /></div>
              <span className="card-act"><T ja="もっと見る" en="See more" /></span>
            </div>
            <div className="card-bd">
              {senpais.map((s, i) => (
                <div key={i} className="flex items-center gap-2.5 border-b py-2.5 last:border-b-0" style={{ borderColor: "var(--brd2)" }}>
                  <div className="av av-md" style={{ background: "var(--bg3)", color: "var(--ink3)" }}>{s.i}</div>
                  <div className="flex-1">
                    <div className="text-[13px] font-semibold">{s.n}</div>
                    <div className="text-[10.5px]" style={{ color: "var(--ink3)" }}><T ja={s.ja} en={s.en} /></div>
                  </div>
                  <button className="btn btn-sm btn-accent"><T ja="予約" en="Book" /></button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-3.5">
          {/* Profile */}
          <div className="card">
            <div className="card-hd">
              <div className="card-t"><T ja="マイプロフィール" en="My Profile" /></div>
              <span className="card-act"><T ja="編集" en="Edit" /></span>
            </div>
            <div className="flex flex-col items-center p-5 text-center">
              <div className="av av-lg mb-3" style={{ background: "var(--accent-soft)", color: "var(--color-accent)" }}>LC</div>
              <div className="text-[17px] font-bold" style={{ fontFamily: "var(--font-display)" }}>L. Chen</div>
              <div className="mb-3 mt-0.5 text-xs leading-relaxed" style={{ color: "var(--ink3)" }}>
                <T ja="東京大学 経済学部 3年" en="UTokyo, Economics, Year 3" /><br />
                <T ja="中国出身 · 日本語N2 · 英語ネイティブ" en="From China · JLPT N2 · Native English" />
              </div>
              <div className="mb-3 flex flex-wrap justify-center gap-1.5">
                {tags.map((tg, i) => <span key={i} className="tag tag-accent"><T ja={tg.ja} en={tg.en} /></span>)}
              </div>
              <div className="flex gap-5">
                {[
                  { n: 3, ja: "OB訪問", en: "OB visits" },
                  { n: 2, ja: "予約中", en: "Upcoming" },
                  { n: 5, ja: "メッセージ", en: "Messages" },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>{s.n}</div>
                    <div className="text-[10.5px]" style={{ color: "var(--ink3)" }}><T ja={s.ja} en={s.en} /></div>
                  </div>
                ))}
              </div>
              <div className="mt-4 w-full">
                <div className="mb-1 flex justify-between text-[11px]" style={{ color: "var(--ink3)" }}>
                  <span><T ja="プロフィール完成度" en="Profile completion" /></span><span>75%</span>
                </div>
                <div className="prog-track"><div className="prog-fill" style={{ width: "75%" }} /></div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="card">
            <div className="card-hd"><div className="card-t"><span className="emoji mr-2">💬</span><T ja="最近のメッセージ" en="Recent Messages" /></div></div>
            <div className="px-4 py-2">
              {msgs.map((m, i) => (
                <div key={i} className="flex cursor-pointer items-start gap-2.5 rounded-lg px-2 py-3 transition-colors" style={{ ["--tw-bg-opacity" as string]: 1 }}>
                  <div className="av av-sm" style={{ background: "var(--accent-soft)", color: "var(--color-accent)" }}>{m.i}</div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 text-[13px] font-semibold">
                      {m.n}
                      {m.unread && <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-accent)" }} />}
                    </div>
                    <div className="mt-0.5 truncate text-xs" style={{ color: "var(--ink3)" }}><T ja={m.ja} en={m.en} /></div>
                  </div>
                  <span className="shrink-0 text-[10px]" style={{ color: "var(--ink4)" }}>{m.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}