import { T } from "../../../components/providers/LanguageProvider";

/* ── data ── */

const stats = [
  { ja: "訪問リクエスト", en: "Visit Requests", v: "8", sub: { ja: "↑ 3 今週", en: "↑ 3 this week" } },
  { ja: "今月の面談", en: "This Month", v: "12", sub: { ja: "↑ 25%", en: "↑ 25%", up: true } },
  { ja: "完了した面談", en: "Completed", v: "47", sub: { ja: "累計", en: "total" } },
  { ja: "未読メッセージ", en: "Unread", v: "3", sub: { ja: "要対応", en: "action needed" } },
];

const week = [
  { ja: "月", en: "Mon", d: 10, ev: null },
  { ja: "火", en: "Tue", d: 11, ev: "14:00 A. Nguyen" },
  { ja: "水", en: "Wed", d: 12, ev: null },
  { ja: "木", en: "Thu", d: 13, ev: "16:00 L. Chen" },
  { ja: "金", en: "Fri", d: 14, ev: null },
];

const requests = [
  { i: "JP", n: "J. Park", ja: "慶應 経済 3年 · 金融業界について", en: "Keio Econ Y3 · About finance", tag: "tag-yellow", tJa: "新規", tEn: "New" },
  { i: "MS", n: "M. Santos", ja: "早稲田 商 3年 · コンサル就活", en: "Waseda Biz Y3 · Consulting", tag: "tag-yellow", tJa: "新規", tEn: "New" },
  { i: "RK", n: "R. Kumar", ja: "東大 法 4年 · キャリアパス", en: "UTokyo Law Y4 · Career path", tag: "tag-green", tJa: "承認済", tEn: "Approved" },
];

const availability = [
  { ja: "火曜 14:00–17:00", en: "Tue 14:00–17:00", mode: "online" },
  { ja: "木曜 16:00–19:00", en: "Thu 16:00–19:00", mode: "online" },
  { ja: "土曜 10:00–12:00", en: "Sat 10:00–12:00", mode: "in-person" },
];

const msgs = [
  { i: "AN", n: "A. Nguyen", ja: "火曜日の面談楽しみにしています！", en: "Looking forward to Tuesday!", t: "2h", unread: true },
  { i: "LC", n: "L. Chen", ja: "先日はありがとうございました", en: "Thanks for the visit!", t: "1d", unread: false },
  { i: "JP", n: "J. Park", ja: "金融業界について質問があります", en: "I have questions about finance", t: "3h", unread: true },
];

const esItems = [
  { ja: "McKinsey志望動機（ES）", en: "McKinsey motivation (ES)", views: 23 },
  { ja: "外銀インターン体験記", en: "IB internship story", views: 45 },
];

const verifications = [
  { company: "McKinsey & Company", initials: "Mc", c: "var(--blue)", bg: "var(--blue-bg)" },
  { company: "Goldman Sachs", initials: "GS", c: "var(--yellow)", bg: "var(--yellow-bg)" },
];

/* ── page ── */

export default function ObogDashboardPage() {
  return (
    <>
      {/* Header */}
      <div className="mb-6">
        <h1 className="mb-0.5 text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          <T ja="おかえりなさい、Yamadaさん 👋" en="Welcome back, Yamada 👋" />
        </h1>
        <p className="text-[12.5px]" style={{ color: "var(--ink3)" }}>senpaicareer.com</p>
      </div>

      {/* Stats */}
      <div className="mb-3.5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} className="stat">
            <div className="stat-lbl"><T ja={s.ja} en={s.en} /></div>
            <div className="stat-val">{s.v}</div>
            <div className="stat-sub">
              {s.sub.up && <span className="stat-up"></span>}
              <T ja={s.sub.ja} en={s.sub.en} />
            </div>
          </div>
        ))}
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
          {/* Visit Requests */}
          <div className="card">
            <div className="card-hd">
              <div className="card-t"><span className="emoji mr-2">📩</span><T ja="訪問リクエスト" en="Visit Requests" /></div>
              <span className="card-act"><T ja="全て見る" en="View all" /></span>
            </div>
            <div className="card-bd">
              {requests.map((r, i) => (
                <div key={i} className="flex items-center gap-2.5 border-b py-3 last:border-b-0" style={{ borderColor: "var(--brd2)" }}>
                  <div className="av av-md" style={{ background: "var(--accent-soft)", color: "var(--color-accent)" }}>{r.i}</div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 text-[13px]">
                      <span className="font-semibold">{r.n}</span>
                      <span className={`tag ${r.tag}`}><T ja={r.tJa} en={r.tEn} /></span>
                    </div>
                    <div className="mt-0.5 truncate text-[11px]" style={{ color: "var(--ink3)" }}><T ja={r.ja} en={r.en} /></div>
                  </div>
                  {r.tag === "tag-yellow" && (
                    <div className="flex gap-1.5">
                      <button className="btn btn-sm btn-accent"><T ja="承認" en="Accept" /></button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="card">
            <div className="card-hd"><div className="card-t"><span className="emoji mr-2">💬</span><T ja="メッセージ" en="Messages" /></div></div>
            <div className="px-4 py-2">
              {msgs.map((m, i) => (
                <div key={i} className="flex cursor-pointer items-start gap-2.5 rounded-lg px-2 py-3 transition-colors">
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

        {/* Right */}
        <div className="flex flex-col gap-3.5">
          {/* Profile */}
          <div className="card">
            <div className="card-hd">
              <div className="card-t"><T ja="マイプロフィール" en="My Profile" /></div>
              <span className="card-act"><T ja="編集" en="Edit" /></span>
            </div>
            <div className="flex flex-col items-center p-5 text-center">
              <div className="av av-lg mb-3" style={{ background: "var(--accent-soft)", color: "var(--color-accent)" }}>KY</div>
              <div className="text-[17px] font-bold" style={{ fontFamily: "var(--font-display)" }}>K. Yamada <span className="badge-verified">公式OB</span></div>
              <div className="mb-3 mt-0.5 text-xs leading-relaxed" style={{ color: "var(--ink3)" }}>
                <T ja="McKinsey · 慶應義塾大学卒" en="McKinsey · Keio University grad" /><br />
                <T ja="コンサル · 金融 · キャリアパス" en="Consulting · Finance · Career paths" />
              </div>
              <div className="mb-3 flex flex-wrap justify-center gap-1.5">
                {[
                  { ja: "コンサル", en: "Consulting" },
                  { ja: "金融", en: "Finance" },
                  { ja: "キャリア", en: "Career" },
                ].map((tg, i) => <span key={i} className="tag tag-accent"><T ja={tg.ja} en={tg.en} /></span>)}
              </div>
              <div className="flex gap-5">
                {[
                  { n: 47, ja: "面談完了", en: "Completed" },
                  { n: 8, ja: "リクエスト", en: "Requests" },
                  { n: 3, ja: "メッセージ", en: "Messages" },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>{s.n}</div>
                    <div className="text-[10.5px]" style={{ color: "var(--ink3)" }}><T ja={s.ja} en={s.en} /></div>
                  </div>
                ))}
              </div>
              <div className="mt-4 w-full">
                <div className="mb-1 flex justify-between text-[11px]" style={{ color: "var(--ink3)" }}>
                  <span><T ja="プロフィール完成度" en="Profile completion" /></span><span>85%</span>
                </div>
                <div className="prog-track"><div className="prog-fill" style={{ width: "85%" }} /></div>
              </div>
            </div>
          </div>

          {/* Verification Status */}
          <div className="card">
            <div className="card-hd">
              <div className="card-t"><span className="emoji mr-2">🏅</span><T ja="認証ステータス" en="Verification Status" /></div>
            </div>
            <div className="card-bd">
              {verifications.map((v, i) => (
                <div key={i} className="flex items-center gap-2.5 border-b py-2.5 last:border-b-0" style={{ borderColor: "var(--brd2)" }}>
                  <div className="av av-sm" style={{ background: v.bg, color: v.c }}>{v.initials}</div>
                  <div className="min-w-0 flex-1 text-[13px] font-medium" style={{ color: "var(--ink2)" }}>
                    {v.company}
                  </div>
                  <span className="tag tag-verified"><T ja="公式OB" en="Verified" /></span>
                </div>
              ))}
              <div className="mt-3 text-[11px] leading-relaxed" style={{ color: "var(--ink4)" }}>
                <T
                  ja="企業があなたを公式OBとして認証しています。学生の検索結果で公式バッジが表示されます。"
                  en="Companies have verified you as an official OB. A verified badge appears in student search results."
                />
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="card">
            <div className="card-hd">
              <div className="card-t"><span className="emoji mr-2">🕐</span><T ja="可用時間" en="Availability" /></div>
              <span className="card-act"><T ja="編集" en="Edit" /></span>
            </div>
            <div className="card-bd">
              {availability.map((a, i) => (
                <div key={i} className="flex items-center justify-between border-b py-2.5 last:border-b-0" style={{ borderColor: "var(--brd2)" }}>
                  <div className="text-[13px]" style={{ color: "var(--ink2)" }}><T ja={a.ja} en={a.en} /></div>
                  <span className="tag tag-accent">{a.mode === "online" ? "Online" : "In-person"}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ES & Stories */}
          <div className="card">
            <div className="card-hd">
              <div className="card-t"><span className="emoji mr-2">✍️</span><T ja="ES・体験記" en="ES & Stories" /></div>
              <span className="card-act"><T ja="追加" en="Add" /></span>
            </div>
            <div className="card-bd">
              {esItems.map((e, i) => (
                <div key={i} className="flex items-center justify-between border-b py-2.5 last:border-b-0" style={{ borderColor: "var(--brd2)" }}>
                  <div className="text-[13px] font-medium" style={{ color: "var(--ink2)" }}><T ja={e.ja} en={e.en} /></div>
                  <div className="text-[11px]" style={{ color: "var(--ink4)" }}>{e.views} <T ja="閲覧" en="views" /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
