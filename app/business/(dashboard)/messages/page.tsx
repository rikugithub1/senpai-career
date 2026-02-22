"use client";

import { useState } from "react";
import { T } from "../../../components/providers/LanguageProvider";
import Icon from "../../../components/shared/Icon";

/* ── mock data ── */

const plan = { used: 5, total: 30 };

const contacts = [
  {
    i: "AN",
    name: "A. Nguyen",
    previewJa: "OB訪問の日程ですが、来週の水曜日は...",
    previewEn: "Regarding the OB visit schedule, next Wednesday...",
    time: "14:30",
    unread: 2,
    c: "var(--blue)",
    bg: "var(--blue-bg)",
    online: true,
  },
  {
    i: "LC",
    name: "L. Chen",
    previewJa: "エントリーシートを提出いたしました。ご確認...",
    previewEn: "I have submitted my entry sheet. Please review...",
    time: "11:20",
    unread: 1,
    c: "var(--yellow)",
    bg: "var(--yellow-bg)",
    online: false,
  },
  {
    i: "WZ",
    name: "W. Zhang",
    previewJa: "2次面接のフィードバックありがとうございました。",
    previewEn: "Thank you for the 2nd interview feedback.",
    time: "昨日",
    unread: 0,
    c: "var(--green)",
    bg: "var(--green-bg)",
    online: true,
  },
  {
    i: "JP",
    name: "J. Park",
    previewJa: "ありがとうございます。確認いたします。",
    previewEn: "Thank you. I will confirm.",
    time: "2/18",
    unread: 0,
    c: "var(--color-accent)",
    bg: "var(--accent-soft)",
    online: false,
  },
  {
    i: "RK",
    name: "R. Kumar",
    previewJa: "選考プロセスについてお伺いしたいのですが...",
    previewEn: "I would like to ask about the selection process...",
    time: "2/16",
    unread: 0,
    c: "var(--yellow)",
    bg: "var(--yellow-bg)",
    online: false,
  },
];

const allMessages: Record<number, { from: string; time: string; ja: string; en: string; isSelf: boolean }[]> = {
  0: [
    {
      from: "A. Nguyen",
      time: "14:30",
      ja: "佐藤様、OB訪問の日程ですが、来週の水曜日（2/25）の午後はご都合いかがでしょうか？よろしくお願いいたします。",
      en: "Sato-san, regarding the OB visit schedule, would next Wednesday afternoon (2/25) work for you? Thank you.",
      isSelf: false,
    },
    {
      from: "A. Nguyen",
      time: "14:32",
      ja: "また、事前に質問リストをお送りした方がよろしいでしょうか？",
      en: "Also, should I send a list of questions in advance?",
      isSelf: false,
    },
  ],
};

/* ── page ── */

export default function MessagesPage() {
  const remaining = plan.total - plan.used;
  const pct = (remaining / plan.total) * 100;
  const [activeIdx, setActiveIdx] = useState(0);
  const activeContact = contacts[activeIdx];
  const messages = allMessages[activeIdx] || [];

  return (
    <>
      {/* Header */}
      <div className="mb-6">
        <h1
          className="mb-0.5 text-xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <T ja="メッセージ" en="Messages" />
        </h1>
        <p className="text-[12.5px]" style={{ color: "var(--ink3)" }}>
          <T
            ja="候補者とのメッセージを管理"
            en="Manage messages with candidates"
          />
        </p>
      </div>

      {/* Message Credit Info */}
      <div className="card mb-3.5">
        <div className="card-bd">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="mail" size={16} style={{ color: "var(--color-accent)" }} />
              <span className="text-[13px] font-semibold">
                <T ja="メッセージ送信枠" en="Message Credits" />
              </span>
            </div>
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <div className="flex-1">
                <div
                  className="h-2 w-full overflow-hidden rounded-full"
                  style={{ background: "var(--bg3)" }}
                >
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${pct}%`,
                      background:
                        pct > 30
                          ? "var(--color-accent)"
                          : pct > 10
                            ? "var(--yellow)"
                            : "var(--red)",
                    }}
                  />
                </div>
              </div>
              <span
                className="shrink-0 text-[13px] font-semibold"
                style={{ color: "var(--ink2)" }}
              >
                <T
                  ja={`残り${remaining}通 / ${plan.total}通`}
                  en={`${remaining} / ${plan.total} remaining`}
                />
              </span>
            </div>
            <button className="btn btn-sm btn-ghost">
              <T ja="プラン変更" en="Upgrade" />
            </button>
          </div>
        </div>
      </div>

      {/* Split Layout — responsive: stacked on mobile, side-by-side on md+ */}
      <div className="grid gap-3.5 md:grid-cols-[320px_1fr]">
        {/* Conversation List */}
        <div className="card" style={{ maxHeight: 540, overflow: "auto" }}>
          <div className="card-hd">
            <div className="card-t">
              <T ja="会話一覧" en="Conversations" />
            </div>
          </div>
          <div className="card-bd" style={{ padding: 0 }}>
            {contacts.map((c, i) => (
              <div
                key={i}
                className="flex cursor-pointer items-start gap-2.5 border-b px-4 py-3 transition-colors"
                style={{
                  borderColor: "var(--brd2)",
                  background: i === activeIdx ? "var(--bg3)" : "transparent",
                }}
                onClick={() => setActiveIdx(i)}
              >
                <div className="relative shrink-0">
                  <div
                    className="av av-md"
                    style={{ background: c.bg, color: c.c }}
                  >
                    {c.i}
                  </div>
                  {c.online && (
                    <span
                      className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2"
                      style={{ background: "var(--green)", borderColor: "var(--card)" }}
                    />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-0.5 flex items-center justify-between">
                    <span className={`text-[13px] ${c.unread > 0 ? "font-bold" : "font-semibold"}`}>{c.name}</span>
                    <span
                      className="shrink-0 text-[10px]"
                      style={{ color: "var(--ink4)" }}
                    >
                      {c.time}
                    </span>
                  </div>
                  <div
                    className="truncate text-[11.5px] leading-snug"
                    style={{ color: "var(--ink3)" }}
                  >
                    <T ja={c.previewJa} en={c.previewEn} />
                  </div>
                </div>
                {c.unread > 0 && (
                  <span
                    className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white"
                    style={{ background: "var(--color-accent)" }}
                  >
                    {c.unread}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Message Detail */}
        <div className="card flex flex-col" style={{ maxHeight: 540 }}>
          <div className="card-hd">
            <div className="card-t">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div
                    className="av av-sm"
                    style={{
                      background: activeContact.bg,
                      color: activeContact.c,
                    }}
                  >
                    {activeContact.i}
                  </div>
                  {activeContact.online && (
                    <span
                      className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border"
                      style={{ background: "var(--green)", borderColor: "var(--card)" }}
                    />
                  )}
                </div>
                <div>
                  <div className="text-[13px] font-semibold">{activeContact.name}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Messages area */}
          <div className="flex-1 overflow-auto p-4" style={{ background: "var(--bg3)" }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-3 flex ${msg.isSelf ? "justify-end" : "justify-start"}`}
              >
                <div
                  className="max-w-[80%] rounded-xl px-3.5 py-2.5 text-[12.5px] leading-relaxed"
                  style={{
                    background: msg.isSelf
                      ? "var(--accent-soft)"
                      : "var(--card)",
                    color: msg.isSelf ? "var(--color-accent)" : "var(--ink)",
                    border: msg.isSelf ? "1px solid var(--color-accent)" : "1px solid var(--brd)",
                  }}
                >
                  <T ja={msg.ja} en={msg.en} />
                  <div
                    className="mt-1 text-right text-[9px]"
                    style={{ color: "var(--ink4)" }}
                  >
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Reply box */}
          <div
            className="border-t px-4 py-3"
            style={{ borderColor: "var(--brd)" }}
          >
            <div className="flex items-center gap-2">
              <button className="shrink-0 cursor-pointer" style={{ color: "var(--ink4)" }}>
                <Icon name="paperclip" size={16} />
              </button>
              <button className="shrink-0 cursor-pointer" style={{ color: "var(--ink4)" }}>
                <Icon name="smile" size={16} />
              </button>
              <input
                className="input"
                placeholder="メッセージを入力... / Type a message..."
                style={{ flex: 1 }}
              />
              <button className="btn btn-accent btn-sm">
                <Icon name="send" size={14} />
              </button>
            </div>
            <div className="mt-1 text-right text-[10px]" style={{ color: "var(--ink4)" }}>
              <T ja="Enterで送信" en="Press Enter to send" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
