"use client";

import DashboardSidebar from "../../components/layout/DashboardSidebar";
import type { SidebarProps } from "../../components/layout/DashboardSidebar";

const config: SidebarProps = {
  sections: [
    {
      ja: "メニュー",
      en: "Menu",
      links: [
        {
          icon: "◉",
          ja: "ダッシュボード",
          en: "Dashboard",
          href: "/obog/dashboard",
        },
        {
          icon: "📩",
          ja: "訪問リクエスト",
          en: "Visit Requests",
          href: "/obog/visit-requests",
        },
        {
          icon: "📅",
          ja: "スケジュール",
          en: "Schedule",
          href: "/obog/schedule",
        },
        {
          icon: "💬",
          ja: "メッセージ",
          en: "Messages",
          href: "/obog/messages",
        },
      ],
    },
    {
      ja: "コンテンツ",
      en: "Content",
      links: [
        {
          icon: "✍️",
          ja: "ES・体験記",
          en: "ES & Stories",
          href: "/obog/es-stories",
        },
        {
          icon: "👤",
          ja: "プロフィール",
          en: "My Profile",
          href: "/obog/profile",
        },
        { icon: "⚙", ja: "プロフィール設定", en: "Profile Settings", href: "/obog/settings" },
      ],
    },
  ],
  user: {
    initials: "KY",
    ja: "K. Yamada",
    en: "K. Yamada",
    jaRole: "McKinsey · 慶應卒",
    enRole: "McKinsey · Keio grad",
    verified: true,
  },
};

export default function ObogDashboardGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex min-h-screen"
      style={{ paddingTop: "var(--nav-height)", background: "var(--bg2)" }}
    >
      <DashboardSidebar {...config} />
      <main className="min-w-0 flex-1 p-6 md:ml-65 md:p-7">
        {children}
      </main>
    </div>
  );
}
