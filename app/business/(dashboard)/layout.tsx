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
        {
          icon: "🏅",
          ja: "OB/OG枠",
          en: "OB/OG Slots",
          href: "/business/obog-slots",
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
        { icon: "⚙", ja: "プロフィール設定", en: "Profile Settings", href: "/business/settings" },
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

export default function BusinessDashboardGroupLayout({
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
