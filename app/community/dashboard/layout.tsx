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
          href: "/community/dashboard",
          active: true,
        },
        {
          icon: "🔍",
          ja: "OB/OG検索",
          en: "Find OB/OG",
          href: "/community/search-obog",
        },
        {
          icon: "📅",
          ja: "予約管理",
          en: "Bookings",
          href: "/community/bookings",
        },
        {
          icon: "💬",
          ja: "メッセージ",
          en: "Messages",
          href: "/community/messages",
        },
      ],
    },
    {
      ja: "リソース",
      en: "Resources",
      links: [
        {
          icon: "📖",
          ja: "就活ガイド",
          en: "Career Guide",
          href: "/community/career-guide",
        },
        {
          icon: "✏️",
          ja: "ES添削",
          en: "ES Review",
          href: "/community/es-review",
        },
        { icon: "⚙", ja: "設定", en: "Settings", href: "/community/dashboard" },
      ],
    },
  ],
  user: {
    initials: "LC",
    ja: "L. Chen",
    en: "L. Chen",
    jaRole: "東大 経済学部",
    enRole: "UTokyo, Econ",
  },
};

export default function CommunityDashboardLayout({
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
      <main className="min-w-0 flex-1 p-6 md:ml-[260px] md:p-7">
        {children}
      </main>
    </div>
  );
}
