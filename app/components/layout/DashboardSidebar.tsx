"use client";

import type { JSX } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { T } from "../providers/LanguageProvider";
import Icon from "../shared/Icon";

interface SidebarLink {
  readonly icon: string;
  readonly ja: string;
  readonly en: string;
  readonly href: string;
}

interface SidebarSection {
  readonly ja: string;
  readonly en: string;
  readonly links: readonly SidebarLink[];
}

interface UserInfo {
  readonly initials: string;
  readonly ja: string;
  readonly en: string;
  readonly jaRole: string;
  readonly enRole: string;
  readonly verified?: boolean;
}

export interface SidebarProps {
  readonly sections: readonly SidebarSection[];
  readonly user: UserInfo;
  readonly isOpen?: boolean;
  readonly onClose?: () => void;
}

function SidebarContent({
  sections,
  user,
  onClose,
}: {
  sections: readonly SidebarSection[];
  user: UserInfo;
  onClose?: () => void;
}): JSX.Element {
  const pathname = usePathname();

  return (
    <>
      {sections.map((sec, si) => (
        <div key={`section-${si}-${sec.ja}`} className="mb-5">
          <div className="flex flex-col gap-1.5">
            {sec.links.map((lk) => {
              const isActive = pathname === lk.href || pathname.startsWith(lk.href + "/");
              return (
                <Link
                  key={lk.href}
                  href={lk.href}
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-lg px-3.5 py-2.5 text-[13.5px] transition-all hover:bg-(--bg-hover)"
                  style={{
                    fontWeight: isActive ? 600 : 500,
                    background: isActive ? "var(--accent-soft)" : "transparent",
                    color: isActive ? "var(--color-accent)" : "var(--ink3)",
                  }}
                >
                  <span
                    className="w-[18px] shrink-0 text-center"
                    style={{ opacity: isActive ? 1 : 0.65 }}
                  >
                    <Icon name={lk.icon} size={18} />
                  </span>
                  <T ja={lk.ja} en={lk.en} />
                </Link>
              );
            })}
          </div>
        </div>
      ))}

      <div className="flex-1" />

      {/* Logout & Help */}
      <div style={{ padding: "8px 12px", borderTop: "1px solid var(--brd)", marginTop: "auto" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", fontSize: 13, color: "var(--red)", borderRadius: 8 }}>
          <Icon name="log-out" size={16} />
          <span className="ja-only">ログアウト</span>
          <span className="en-only">Logout</span>
        </a>
        <a href="/faq" style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", fontSize: 13, color: "var(--ink3)", borderRadius: 8 }}>
          <Icon name="help-circle" size={16} />
          <span className="ja-only">ヘルプ</span>
          <span className="en-only">Help</span>
        </a>
      </div>

      {/* User */}
      <div
        className="flex items-center gap-3 border-t px-3 pt-4"
        style={{ borderColor: "var(--brd)" }}
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
        <div>
          <div className="flex items-center gap-1.5 text-[13px] font-semibold">
            <T ja={user.ja} en={user.en} />
            {user.verified && <span className="badge-verified" title="公式認証済み / Verified">✓</span>}
          </div>
          <div className="text-[11px]" style={{ color: "var(--ink3)" }}>
            <T ja={user.jaRole} en={user.enRole} />
          </div>
        </div>
      </div>
    </>
  );
}

export default function DashboardSidebar({
  sections,
  user,
  isOpen,
  onClose,
}: SidebarProps): JSX.Element {
  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className="fixed bottom-0 left-0 top-[var(--nav-height)] hidden w-70 flex-col overflow-y-auto border-r p-5 md:flex"
        style={{ background: "var(--card)", borderColor: "var(--brd)" }}
      >
        <SidebarContent sections={sections} user={user} />
      </aside>

      {/* Mobile overlay sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] md:hidden"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,0.5)" }}
          />
          {/* Sidebar panel */}
          <aside
            className="absolute left-0 top-0 bottom-0 w-70 flex flex-col overflow-y-auto p-5"
            style={{ background: "var(--card)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <div className="flex justify-end mb-2">
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-lg"
                style={{ color: "var(--ink2)" }}
                aria-label="Close sidebar"
              >
                <Icon name="x" size={20} />
              </button>
            </div>
            <SidebarContent sections={sections} user={user} onClose={onClose} />
          </aside>
        </div>
      )}
    </>
  );
}
