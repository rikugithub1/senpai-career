"use client";

import { useState } from "react";
import DashboardNavbar from "../../components/layout/DashboardNavbar";
import DashboardSidebar from "../../components/layout/DashboardSidebar";
import type { SidebarProps } from "../../components/layout/DashboardSidebar";

const user = {
  initials: "LC",
  ja: "L. Chen",
  en: "L. Chen",
  jaRole: "経済学部",
  enRole: "Economics",
};

const sidebarConfig: SidebarProps = {
  sections: [
    {
      ja: "メニュー",
      en: "Menu",
      links: [
        { icon: "layout-dashboard", ja: "ダッシュボード", en: "Dashboard", href: "/community/dashboard" },
        { icon: "search", ja: "OB/OG検索", en: "Find OB/OG", href: "/community/search-obog" },
        { icon: "calendar", ja: "予約管理", en: "Bookings", href: "/community/bookings" },
        { icon: "message-square", ja: "メッセージ", en: "Messages", href: "/community/messages" },
        { icon: "settings", ja: "プロフィール設定", en: "Profile Settings", href: "/community/settings" },
      ],
    },
  ],
  user,
};

export default function CommunityDashboardGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div data-section="community">
      <DashboardNavbar section="community" user={user} onMobileMenuToggle={() => setSidebarOpen(true)} />
      <div
        className="flex min-h-screen"
        style={{ paddingTop: "var(--nav-height)", background: "var(--bg2)" }}
      >
        <DashboardSidebar {...sidebarConfig} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="min-w-0 flex-1 p-6 md:ml-65 md:p-7">
          {children}
        </main>
      </div>
    </div>
  );
}
