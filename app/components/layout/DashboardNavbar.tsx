"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "../providers/ThemeProvider";
import { useLang, T } from "../providers/LanguageProvider";
import Logo from "./Logo";
import Icon from "../shared/Icon";

interface DashboardUser {
  readonly initials: string;
  readonly ja: string;
  readonly en: string;
  readonly jaRole: string;
  readonly enRole: string;
  readonly verified?: boolean;
}

interface DashboardNavbarProps {
  section: "community" | "obog" | "business";
  user: DashboardUser;
  onMobileMenuToggle?: () => void;
}

export default function DashboardNavbar({ section, user, onMobileMenuToggle }: DashboardNavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang } = useLang();
  const [notifOpen, setNotifOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  const dashboardHref = `/${section}/dashboard`;
  const settingsHref = `/${section}/settings`;

  // Mock notification data
  const unreadCount = section === "community" ? 3 : section === "obog" ? 5 : 2;

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) setNotifOpen(false);
      if (userRef.current && !userRef.current.contains(e.target as Node)) setUserOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
      data-section={section}
      style={{
        height: "var(--nav-height)",
        background: "var(--nav-bg)",
        borderColor: "var(--brd)",
      }}
    >
      <div className="mx-auto flex h-full max-w-325 items-center gap-2 px-3 md:gap-3 md:px-6">
        {/* Logo — links to section dashboard */}
        <Link href={dashboardHref} className="flex shrink-0 items-center">
          <Logo />
        </Link>

        {/* Section badge */}
        <span
          className="hidden rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest md:inline-flex"
          style={{
            fontFamily: "var(--font-mono)",
            background: "var(--accent-soft)",
            color: "var(--color-accent)",
          }}
        >
          {section === "community" ? "Community" : section === "obog" ? "OB/OG" : "Business"}
        </span>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Notification bell */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => { setNotifOpen((v) => !v); setUserOpen(false); }}
            className={`notification-bell${unreadCount > 0 ? " has-unread" : ""} flex h-9 w-9 items-center justify-center rounded-lg border text-sm transition-all`}
            style={{ borderColor: "var(--brd)", color: "var(--ink2)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            aria-label="Notifications"
          >
            <Icon name="bell" size={18} />
            {unreadCount > 0 && (
              <span style={{ position: "absolute", top: -4, right: -4, background: "var(--red)", color: "#fff", fontSize: 9, fontWeight: 700, borderRadius: "50%", width: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>{unreadCount}</span>
            )}
          </button>

          {notifOpen && (
            <div
              className="fixed inset-x-3 top-[calc(var(--nav-height)+8px)] rounded-xl border shadow-lg sm:absolute sm:inset-x-auto sm:right-0 sm:top-full sm:mt-2 sm:w-80"
              style={{ background: "var(--card)", borderColor: "var(--brd)", boxShadow: "var(--shadow-md)" }}
            >
              <div className="flex items-center justify-between border-b px-4 py-3" style={{ borderColor: "var(--brd)" }}>
                <span className="text-[13px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  <T ja="通知" en="Notifications" />
                </span>
                <span className="tag tag-accent">{unreadCount}</span>
              </div>
              <div className="flex flex-col gap-0.5 p-2">
                <div className="rounded-lg p-3 transition-colors" style={{ background: "var(--accent-soft)" }}>
                  <div className="text-[12px] font-medium">
                    <T ja="新しいメッセージが届きました" en="You have a new message" />
                  </div>
                  <div className="mt-1 text-[11px]" style={{ color: "var(--ink4)" }}>
                    <T ja="2分前" en="2m ago" />
                  </div>
                </div>
                <div
                  className="rounded-lg p-3 transition-colors"
                  style={{ background: "transparent" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-hover)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <div className="text-[12px] font-medium">
                    <T ja="プロフィールが閲覧されました" en="Your profile was viewed" />
                  </div>
                  <div className="mt-1 text-[11px]" style={{ color: "var(--ink4)" }}>
                    <T ja="15分前" en="15m ago" />
                  </div>
                </div>
                <div
                  className="rounded-lg p-3 transition-colors"
                  style={{ background: "transparent" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-hover)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <div className="text-[12px] font-medium">
                    <T ja="訪問リクエストが承認されました" en="Visit request approved" />
                  </div>
                  <div className="mt-1 text-[11px]" style={{ color: "var(--ink4)" }}>
                    <T ja="1時間前" en="1h ago" />
                  </div>
                </div>
              </div>
              <div className="border-t px-4 py-2.5" style={{ borderColor: "var(--brd)" }}>
                <Link
                  href={`/${section}/notifications`}
                  className="text-[12px] font-semibold"
                  style={{ color: "var(--color-accent)" }}
                  onClick={() => setNotifOpen(false)}
                >
                  <T ja="すべての通知を見る →" en="View all notifications →" />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Separator */}
        <span className="hidden h-5 w-px sm:block" style={{ background: "var(--brd)" }} />

        {/* Language toggle -- hidden on small mobile to save space */}
        <div className="hidden overflow-hidden rounded-lg border sm:flex" style={{ borderColor: "var(--brd)" }}>
          {(["ja", "en"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className="px-3 py-1.5 text-[10.5px] font-semibold tracking-wider transition-all"
              style={{
                fontFamily: "var(--font-mono)",
                background: lang === l ? "var(--ink)" : "transparent",
                color: lang === l ? "var(--bg)" : "var(--ink4)",
              }}
            >
              {l === "ja" ? "JP" : "EN"}
            </button>
          ))}
        </div>

        {/* Theme toggle -- hidden on very small mobile to save space */}
        <button
          onClick={toggleTheme}
          className="hidden h-9 w-9 items-center justify-center rounded-lg border text-sm transition-all sm:flex"
          style={{ borderColor: "var(--brd)", color: "var(--ink2)" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-hover)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          aria-label="Toggle theme"
          title="Toggle theme"
          suppressHydrationWarning
        >
          {theme === "light" ? <Icon name="sun" size={16} /> : <Icon name="moon" size={16} />}
        </button>

        {/* User avatar & dropdown */}
        <div className="relative hidden md:block" ref={userRef}>
          <button
            onClick={() => { setUserOpen((v) => !v); setNotifOpen(false); }}
            className="flex items-center gap-1.5 cursor-pointer transition-opacity hover:opacity-80"
          >
            <div
              className="av av-sm"
              style={{
                background: "var(--accent-soft)",
                color: "var(--color-accent)",
              }}
            >
              {user.initials}
            </div>
            <Icon name="chevron-down" size={14} />
          </button>

          {userOpen && (
            <div
              className="absolute right-0 top-full mt-2 w-56 rounded-xl border shadow-lg"
              style={{ background: "var(--card)", borderColor: "var(--brd)", boxShadow: "var(--shadow-md)" }}
            >
              {/* User info */}
              <div className="border-b px-4 py-3" style={{ borderColor: "var(--brd)" }}>
                <div className="flex items-center gap-1.5 text-[13px] font-semibold">
                  <T ja={user.ja} en={user.en} />
                  {user.verified && <span className="badge-verified">✓</span>}
                </div>
                <div className="text-[12px]" style={{ color: "var(--ink3)" }}>
                  <T ja={user.jaRole} en={user.enRole} />
                </div>
              </div>

              {/* Menu items */}
              <div className="flex flex-col gap-0.5 p-2">
                <Link
                  href={settingsHref}
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] transition-all"
                  style={{ color: "var(--ink2)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-hover)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  onClick={() => setUserOpen(false)}
                >
                  <Icon name="settings" size={16} />
                  <T ja="プロフィール設定" en="Profile Settings" />
                </Link>
                {section !== "obog" && (
                  <Link
                    href={section === "business" ? "/business/pricing" : "/pricing"}
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] transition-all"
                    style={{ color: "var(--ink2)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-hover)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    onClick={() => setUserOpen(false)}
                  >
                    <Icon name="credit-card" size={16} />
                    <T ja="プラン・料金" en="Plans & Pricing" />
                  </Link>
                )}
                <hr className="my-1" style={{ borderColor: "var(--brd)" }} />
                <button
                  className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-[13px] transition-all"
                  style={{ color: "var(--red)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--red-bg)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  onClick={() => setUserOpen(false)}
                >
                  <Icon name="log-out" size={16} />
                  <T ja="ログアウト" en="Log Out" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg border md:hidden"
          style={{ borderColor: "var(--brd)", color: "var(--ink2)" }}
          onClick={onMobileMenuToggle}
          aria-label="Menu"
        >
          <Icon name="menu" size={20} />
        </button>
      </div>
    </nav>
  );
}
