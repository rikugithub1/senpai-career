"use client";

import DashboardSidebar from "../../components/layout/DashboardSidebar";
import type { SidebarProps } from "../../components/layout/DashboardSidebar";

const config: SidebarProps = {
  sections: [
    {
      ja: "管理",
      en: "Management",
      links: [
        {
          icon: "◉",
          ja: "ダッシュボード",
          en: "Dashboard",
          href: "/business/dashboard",
          active: true,
        },
        {
          icon: "📋",
          ja: "パイプライン",
          en: "Pipeline",
          href: "/business/pipeline",
        },
        {
          icon: "👥",
          ja: "候補者管理",
          en: "Candidates",
          href: "/business/candidates",
        },
        {
          icon: "💬",
          ja: "メッセージ",
          en: "Messages",
          href: "/business/messages",
        },
      ],
    },
    {
      ja: "分析",
      en: "Analytics",
      links: [
        {
          icon: "📈",
          ja: "レポート",
          en: "Reports",
          href: "/business/report",
        },
        { icon: "⚙", ja: "設定", en: "Settings", href: "/business/dashboard" },
      ],
    },
  ],
  user: {
    initials: "TS",
    ja: "佐藤 太郎",
    en: "T. Sato",
    jaRole: "人事部長",
    enRole: "HR Director",
  },
};

export default function BusinessDashboardLayout({
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
