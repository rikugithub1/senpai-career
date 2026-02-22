"use client";

import { useState } from "react";
import DashboardNavbar from "../../components/layout/DashboardNavbar";
import DashboardSidebar from "../../components/layout/DashboardSidebar";
import type { SidebarProps } from "../../components/layout/DashboardSidebar";

const user = {
  initials: "KY",
  ja: "K. Yamada",
  en: "K. Yamada",
  jaRole: "McKinsey",
  enRole: "McKinsey",
  verified: true,
};

const sidebarConfig: SidebarProps = {
  sections: [
    {
      ja: "メニュー",
      en: "Menu",
      links: [
        { icon: "layout-dashboard", ja: "ダッシュボード", en: "Dashboard", href: "/obog/dashboard" },
        { icon: "inbox", ja: "訪問リクエスト", en: "Visit Requests", href: "/obog/visit-requests" },
        { icon: "calendar", ja: "スケジュール", en: "Schedule", href: "/obog/schedule" },
        { icon: "message-square", ja: "メッセージ", en: "Messages", href: "/obog/messages" },
        { icon: "settings", ja: "プロフィール設定", en: "Profile Settings", href: "/obog/settings" },
      ],
    },
  ],
  user,
};

export default function ObogDashboardGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div data-section="obog">
      <DashboardNavbar section="obog" user={user} onMobileMenuToggle={() => setSidebarOpen(true)} />
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
