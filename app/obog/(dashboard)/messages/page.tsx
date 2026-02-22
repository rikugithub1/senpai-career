"use client";

import { useState } from "react";
import { T } from "../../../components/providers/LanguageProvider";
import Icon from "../../../components/shared/Icon";

/* ── mock data ── */

interface Conversation {
  id: number;
  initials: string;
  name: string;
  university: { ja: string; en: string };
  lastMessage: { ja: string; en: string };
  time: { ja: string; en: string };
  unread: number;
  online: boolean;
}

const conversations: Conversation[] = [
  {
    id: 1, initials: "JP", name: "J. Park",
    university: { ja: "慶應義塾大学 経済学部", en: "Keio Univ. · Economics" },
    lastMessage: { ja: "ありがとうございます！来週の火曜日でお願いします。", en: "Thank you! Tuesday next week works for me." },
    time: { ja: "10分前", en: "10m ago" },
    unread: 2,
    online: true,
  },
  {
    id: 2, initials: "RK", name: "R. Kumar",
    university: { ja: "東京大学 法学部", en: "UTokyo · Law" },
    lastMessage: { ja: "面談の日程について相談させてください。", en: "I'd like to discuss the meeting schedule." },
    time: { ja: "1時間前", en: "1h ago" },
    unread: 1,
    online: true,
  },
  {
    id: 3, initials: "AN", name: "A. Nguyen",
    university: { ja: "東京工業大学 情報工学科", en: "Tokyo Tech · CS" },
    lastMessage: { ja: "先日はありがとうございました。大変参考になりました。", en: "Thank you for the other day. It was very helpful." },
    time: { ja: "昨日", en: "Yesterday" },
    unread: 0,
    online: false,
  },
  {
    id: 4, initials: "LC", name: "L. Chen",
    university: { ja: "一橋大学 社会学部", en: "Hitotsubashi · Sociology" },
    lastMessage: { ja: "OB訪問のお礼メールをお送りします。", en: "I'll send a thank-you email for the visit." },
    time: { ja: "2日前", en: "2 days ago" },
    unread: 0,
    online: false,
  },
  {
    id: 5, initials: "YT", name: "Y. Tanaka",
    university: { ja: "京都大学 経営学部", en: "Kyoto Univ. · Management" },
    lastMessage: { ja: "インターンについてもう少し詳しく教えていただけますか？", en: "Could you tell me more about internships?" },
    time: { ja: "3日前", en: "3 days ago" },
    unread: 0,
    online: false,
  },
];

const mockMessages = [
  { id: 1, from: "them", ja: "はじめまして。J. Parkと申します。金融業界でのキャリアについてお話を伺いたいです。", en: "Hello. My name is J. Park. I'd like to hear about careers in finance.", time: "14:00", dateGroup: "today" },
  { id: 2, from: "me", ja: "はじめまして、J. Parkさん。もちろんです。具体的にどのような点が気になりますか？", en: "Hello J. Park. Of course. What specifically would you like to know?", time: "14:15", dateGroup: "today" },
  { id: 3, from: "them", ja: "投資銀行とコンサルで迷っていまして、それぞれの働き方の違いを知りたいです。", en: "I'm torn between IB and consulting, and want to know the differences in work style.", time: "14:20", dateGroup: "today" },
  { id: 4, from: "me", ja: "いい質問ですね。来週お時間があれば、詳しくお話しできますよ。", en: "Great question. If you have time next week, I can explain in detail.", time: "14:32", dateGroup: "today" },
  { id: 5, from: "them", ja: "ありがとうございます！来週の火曜日でお願いします。", en: "Thank you! Tuesday next week works for me.", time: "14:45", dateGroup: "today" },
];

/* ── page ── */

export default function MessagesPage() {
  const [selected, setSelected] = useState<number>(1);

  const activeConvo = conversations.find((c) => c.id === selected);

  /* Group messages by date for separators */
  let lastGroup = "";

  return (
    <>
      {/* Header */}
      <div className="mb-6">
        <h1 className="mb-0.5 text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          <T ja="メッセージ" en="Messages" />
        </h1>
        <p className="text-[12.5px]" style={{ color: "var(--ink3)" }}>
          <T ja="学生とのメッセージのやりとり" en="Conversations with students" />
        </p>
      </div>

      {/* Split Layout */}
      <div className="flex gap-0 overflow-hidden rounded-xl border md:gap-0" style={{ borderColor: "var(--brd)", background: "var(--card)", minHeight: 520 }}>
        {/* Conversation List */}
        <div className="w-full shrink-0 md:w-72 md:border-r" style={{ borderColor: "var(--brd)" }}>
          {/* Search */}
          <div className="border-b p-3" style={{ borderColor: "var(--brd)" }}>
            <div className="sbox">
              <Icon name="search" size={14} style={{ color: "var(--ink4)", flexShrink: 0 }} />
              <input className="ja-only" placeholder="検索..." readOnly />
              <input className="en-only" placeholder="Search..." readOnly />
            </div>
          </div>

          {/* List */}
          <div>
            {conversations.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelected(c.id)}
                className="flex w-full items-start gap-2.5 border-b px-3 py-3 text-left transition-all"
                style={{
                  borderColor: "var(--brd2)",
                  background: selected === c.id ? "var(--accent-soft)" : "transparent",
                }}
              >
                {/* Avatar with unread badge top-right */}
                <div className="relative shrink-0">
                  <div
                    className="av av-sm"
                    style={{
                      background: selected === c.id ? "var(--color-accent)" : "var(--accent-soft)",
                      color: selected === c.id ? "#fff" : "var(--color-accent)",
                    }}
                  >
                    {c.initials}
                  </div>
                  {c.unread > 0 && (
                    <span
                      className="absolute flex items-center justify-center rounded-full text-[9px] font-bold text-white"
                      style={{
                        background: "var(--red)",
                        minWidth: 16,
                        height: 16,
                        top: -4,
                        right: -4,
                        padding: "0 4px",
                      }}
                    >
                      {c.unread}
                    </span>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className={`text-[13px] ${c.unread > 0 ? "font-bold" : "font-semibold"}`}>{c.name}</span>
                    <span className="text-[10px]" style={{ color: "var(--ink4)" }}>
                      <T ja={c.time.ja} en={c.time.en} />
                    </span>
                  </div>
                  <div className="mt-0.5 truncate text-[11px]" style={{ color: "var(--ink3)" }}>
                    <T ja={c.university.ja} en={c.university.en} />
                  </div>
                  <div className="mt-0.5 truncate text-[11px]" style={{ color: c.unread > 0 ? "var(--ink2)" : "var(--ink4)", fontWeight: c.unread > 0 ? 500 : 400 }}>
                    <T ja={c.lastMessage.ja} en={c.lastMessage.en} />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Mobile hint */}
          <div className="border-t p-3 text-center md:hidden" style={{ borderColor: "var(--brd)", color: "var(--ink4)" }}>
            <div className="flex items-center justify-center gap-1.5 text-[11px]">
              <Icon name="monitor" size={12} />
              <T ja="チャットの全画面表示はデスクトップで利用可能です" en="Full chat view is available on desktop" />
            </div>
          </div>
        </div>

        {/* Message Area */}
        <div className="hidden min-w-0 flex-1 flex-col md:flex">
          {activeConvo ? (
            <>
              {/* Chat Header with avatar + online status */}
              <div className="flex items-center gap-3 border-b px-5 py-3.5" style={{ borderColor: "var(--brd)" }}>
                <div className="relative">
                  <div
                    className="av av-sm"
                    style={{ background: "var(--accent-soft)", color: "var(--color-accent)" }}
                  >
                    {activeConvo.initials}
                  </div>
                  {activeConvo.online && (
                    <span
                      className="absolute bottom-0 right-0 block rounded-full border-2"
                      style={{
                        width: 10,
                        height: 10,
                        background: "var(--green)",
                        borderColor: "var(--card)",
                      }}
                    />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[13.5px] font-semibold">
                    {activeConvo.name}
                    {activeConvo.online && (
                      <span className="text-[10px] font-normal" style={{ color: "var(--green)" }}>
                        <T ja="オンライン" en="Online" />
                      </span>
                    )}
                  </div>
                  <div className="text-[11px]" style={{ color: "var(--ink3)" }}>
                    <T ja={activeConvo.university.ja} en={activeConvo.university.en} />
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-5">
                <div className="flex flex-col gap-3">
                  {mockMessages.map((m) => {
                    let showSeparator = false;
                    if (m.dateGroup !== lastGroup) {
                      showSeparator = true;
                      lastGroup = m.dateGroup;
                    }
                    return (
                      <div key={m.id}>
                        {showSeparator && (
                          <div className="my-3 flex items-center gap-3">
                            <div className="h-px flex-1" style={{ background: "var(--brd)" }} />
                            <span className="text-[10.5px] font-medium" style={{ color: "var(--ink4)" }}>
                              <T ja="今日" en="Today" />
                            </span>
                            <div className="h-px flex-1" style={{ background: "var(--brd)" }} />
                          </div>
                        )}
                        <div className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
                          <div
                            className="max-w-[75%] rounded-xl px-3.5 py-2.5"
                            style={{
                              background: m.from === "me" ? "var(--accent-soft2, var(--accent-soft))" : "var(--bg2)",
                              color: m.from === "me" ? "var(--color-accent)" : "var(--ink)",
                            }}
                          >
                            <div className="text-[12.5px] leading-relaxed">
                              <span className="ja-only">{m.ja}</span>
                              <span className="en-only">{m.en}</span>
                            </div>
                            <div
                              className="mt-1 text-right text-[10px]"
                              style={{ color: m.from === "me" ? "var(--ink3)" : "var(--ink4)" }}
                            >
                              {m.time}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Input */}
              <div className="border-t p-4" style={{ borderColor: "var(--brd)" }}>
                <div className="flex items-center gap-2">
                  <button
                    className="flex shrink-0 items-center justify-center rounded-md p-1.5 transition-colors"
                    style={{ color: "var(--ink4)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-hover)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    aria-label="Attach file"
                  >
                    <Icon name="paperclip" size={16} />
                  </button>
                  <button
                    className="flex shrink-0 items-center justify-center rounded-md p-1.5 transition-colors"
                    style={{ color: "var(--ink4)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-hover)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    aria-label="Emoji"
                  >
                    <Icon name="smile" size={16} />
                  </button>
                  <div className="sbox flex-1">
                    <input className="ja-only" placeholder="メッセージを入力..." readOnly />
                    <input className="en-only" placeholder="Type a message..." readOnly />
                  </div>
                  <button className="btn btn-accent">
                    <Icon name="send" size={14} className="mr-1" />
                    <T ja="送信" en="Send" />
                  </button>
                </div>
                <div className="mt-1.5 text-right text-[10px]" style={{ color: "var(--ink4)" }}>
                  <T ja="Enterキーで送信" en="Enter to send" />
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-1 items-center justify-center">
              <div className="text-center" style={{ color: "var(--ink4)" }}>
                <div className="mb-2 flex justify-center">
                  <Icon name="message-square" size={32} style={{ color: "var(--ink4)" }} />
                </div>
                <div className="text-[13px]">
                  <T ja="会話を選択してください" en="Select a conversation" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
