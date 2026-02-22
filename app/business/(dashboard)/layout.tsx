"use client";

import { useState } from "react";
import DashboardNavbar from "../../components/layout/DashboardNavbar";
import DashboardSidebar from "../../components/layout/DashboardSidebar";
import type { SidebarProps } from "../../components/layout/DashboardSidebar";

const user = {
  initials: "TS",
  ja: "佐藤 太郎",
  en: "T. Sato",
  jaRole: "人事部長",
  enRole: "HR Director",
};

const sidebarConfig: SidebarProps = {
  sections: [
    {
      ja: "メニュー",
      en: "Menu",
      links: [
        { icon: "layout-dashboard", ja: "ダッシュボード", en: "Dashboard", href: "/business/dashboard" },
        { icon: "kanban-square", ja: "採用パイプライン", en: "Pipeline", href: "/business/pipeline" },
        { icon: "users", ja: "候補者管理", en: "Candidates", href: "/business/candidates" },
        { icon: "message-square", ja: "メッセージ", en: "Messages", href: "/business/messages" },
        { icon: "user-check", ja: "OB/OG枠", en: "OB/OG Slots", href: "/business/obog-slots" },
        { icon: "bar-chart-3", ja: "レポート", en: "Reports", href: "/business/reports" },
        { icon: "settings", ja: "企業プロフィール設定", en: "Company Settings", href: "/business/settings" },
      ],
    },
  ],
  user,
};

export default function BusinessDashboardGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div data-section="business">
      <DashboardNavbar section="business" user={user} onMobileMenuToggle={() => setSidebarOpen(true)} />
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
