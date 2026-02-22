"use client";

import { useState } from "react";
import { T } from "../../../components/providers/LanguageProvider";
import Icon from "../../../components/shared/Icon";

/* ── Mock Data ── */

interface Conversation {
  id: number;
  initials: string;
  name: string;
  company: { ja: string; en: string };
  lastMessage: { ja: string; en: string };
  time: { ja: string; en: string };
  unread: boolean;
}

const conversations: Conversation[] = [
  {
    id: 1, initials: "KY", name: "K. Yamada",
    company: { ja: "McKinsey & Company", en: "McKinsey & Company" },
    lastMessage: { ja: "はい、水曜日の14時で大丈夫です！", en: "Yes, Wednesday at 2pm works!" },
    time: { ja: "10分前", en: "10m ago" },
    unread: true,
  },
  {
    id: 2, initials: "MS", name: "M. Suzuki",
    company: { ja: "Goldman Sachs", en: "Goldman Sachs" },
    lastMessage: { ja: "面接対策のアドバイスをお送りします。", en: "I'll send you interview prep tips." },
    time: { ja: "1時間前", en: "1h ago" },
    unread: true,
  },
  {
    id: 3, initials: "HK", name: "H. Kim",
    company: { ja: "Morgan Stanley", en: "Morgan Stanley" },
    lastMessage: { ja: "ありがとうございました！とても参考になりました。", en: "Thank you so much! That was very helpful." },
    time: { ja: "昨日", en: "Yesterday" },
    unread: false,
  },
  {
    id: 4, initials: "TN", name: "T. Nakamura",
    company: { ja: "Google", en: "Google" },
    lastMessage: { ja: "エンジニア採用について質問があります。", en: "I have a question about engineering hiring." },
    time: { ja: "2日前", en: "2 days ago" },
    unread: false,
  },
  {
    id: 5, initials: "YL", name: "Y. Li",
    company: { ja: "三井物産", en: "Mitsui & Co." },
    lastMessage: { ja: "商社でのキャリアについてお話しましょう。", en: "Let's talk about careers in trading." },
    time: { ja: "3日前", en: "3 days ago" },
    unread: false,
  },
];

/* ── Page ── */

export default function MessagesPage() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = conversations.filter((c) => {
    if (!search) return true;
    return c.name.toLowerCase().includes(search.toLowerCase());
  });

  const selectedConvo = conversations.find((c) => c.id === selected);
  const unreadCount = conversations.filter((c) => c.unread).length;

  return (
    <>
      {/* Header */}
      <div className="mb-6">
        <h1 className="mb-0.5 text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          <Icon name="message-square" size={16} className="mr-2" style={{ color: "var(--color-accent)" }} />
          <T ja="メッセージ" en="Messages" />
          {unreadCount > 0 && (
            <span
              className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full text-[10.5px] font-bold text-white"
              style={{ background: "var(--color-accent)" }}
            >
              {unreadCount}
            </span>
          )}
        </h1>
        <p className="text-[12.5px]" style={{ color: "var(--ink3)" }}>
          <T ja="OB/OGとのメッセージを確認しましょう" en="Check your messages with OB/OG alumni" />
        </p>
      </div>

      {/* Split Layout */}
      <div
        className="flex overflow-hidden rounded-xl border"
        style={{ borderColor: "var(--brd)", background: "var(--card)", minHeight: 480 }}
      >
        {/* Left: Conversation List */}
        <div
          className="flex w-full flex-col border-r sm:w-72 md:w-80"
          style={{ borderColor: "var(--brd)" }}
        >
          {/* Search */}
          <div className="border-b p-3" style={{ borderColor: "var(--brd)" }}>
            <div className="sbox">
              <Icon name="search" size={14} className="shrink-0" style={{ color: "var(--ink4)" }} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="ja-only"
                placeholder="名前で検索..."
              />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="en-only"
                placeholder="Search by name..."
              />
            </div>
          </div>

          {/* Conversation Items */}
          <div className="flex-1 overflow-y-auto">
            {filtered.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelected(c.id)}
                className="flex w-full items-start gap-2.5 border-b px-3.5 py-3 text-left transition-colors"
                style={{
                  borderColor: "var(--brd)",
                  background: selected === c.id ? "var(--accent-soft)" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (selected !== c.id) e.currentTarget.style.background = "var(--bg-hover, var(--bg2))";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = selected === c.id ? "var(--accent-soft)" : "transparent";
                }}
              >
                <div
                  className="av av-sm shrink-0"
                  style={{
                    background: selected === c.id ? "var(--color-accent)" : "var(--accent-soft)",
                    color: selected === c.id ? "#fff" : "var(--color-accent)",
                  }}
                >
                  {c.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate text-[13px] font-semibold">{c.name}</span>
                    <span className="shrink-0 text-[10px]" style={{ color: "var(--ink4)" }}>
                      <T ja={c.time.ja} en={c.time.en} />
                    </span>
                  </div>
                  <div className="truncate text-[11px]" style={{ color: "var(--ink3)" }}>
                    <T ja={c.company.ja} en={c.company.en} />
                  </div>
                  <div className="mt-0.5 flex items-center gap-1.5">
                    <span
                      className="flex-1 truncate text-[11.5px]"
                      style={{ color: c.unread ? "var(--ink)" : "var(--ink4)" }}
                    >
                      <T ja={c.lastMessage.ja} en={c.lastMessage.en} />
                    </span>
                    {c.unread && (
                      <span
                        className="h-2 w-2 shrink-0 rounded-full"
                        style={{ background: "var(--color-accent)" }}
                      />
                    )}
                  </div>
                </div>
              </button>
            ))}

            {filtered.length === 0 && (
              <div className="p-6 text-center text-[12px]" style={{ color: "var(--ink4)" }}>
                <T ja="該当するメッセージがありません" en="No conversations found" />
              </div>
            )}
          </div>
        </div>

        {/* Right: Chat Area */}
        <div className="hidden flex-1 flex-col sm:flex">
          {selectedConvo ? (
            <>
              {/* Chat Header */}
              <div
                className="flex items-center gap-3 border-b px-5 py-3.5"
                style={{ borderColor: "var(--brd)" }}
              >
                <div
                  className="av av-sm"
                  style={{ background: "var(--accent-soft)", color: "var(--color-accent)" }}
                >
                  {selectedConvo.initials}
                </div>
                <div>
                  <div className="text-[13px] font-semibold">{selectedConvo.name}</div>
                  <div className="text-[11px]" style={{ color: "var(--ink3)" }}>
                    <T ja={selectedConvo.company.ja} en={selectedConvo.company.en} />
                  </div>
                </div>
              </div>

              {/* Chat Body Placeholder */}
              <div className="flex flex-1 flex-col items-center justify-center p-8">
                <div
                  className="rounded-xl border p-6 text-center"
                  style={{ borderColor: "var(--brd)", background: "var(--bg2)" }}
                >
                  <div className="mb-2"><Icon name="info" size={28} style={{ color: "var(--ink4)" }} /></div>
                  <div className="mb-1 text-[14px] font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                    <T ja="メッセージ機能は近日公開" en="Messaging Coming Soon" />
                  </div>
                  <div className="text-[12px]" style={{ color: "var(--ink3)" }}>
                    <T
                      ja="リアルタイムチャットは現在開発中です。もう少々お待ちください。"
                      en="Real-time chat is currently under development. Stay tuned!"
                    />
                  </div>
                </div>
              </div>

              {/* Chat Input (disabled) */}
              <div className="border-t px-4 py-3" style={{ borderColor: "var(--brd)" }}>
                <div className="flex gap-2">
                  <input
                    className="input flex-1"
                    disabled
                    placeholder=""
                  />
                  <button className="btn btn-accent" disabled>
                    <T ja="送信" en="Send" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center p-8">
              <div className="text-center">
                <div className="mb-3"><Icon name="message-square" size={32} style={{ color: "var(--ink4)" }} /></div>
                <div
                  className="mb-1 text-[15px] font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <T ja="会話を選択してください" en="Select a Conversation" />
                </div>
                <div className="text-[12.5px]" style={{ color: "var(--ink3)" }}>
                  <T
                    ja="左のリストから会話を選んでメッセージを確認しましょう"
                    en="Choose a conversation from the list to view messages"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
