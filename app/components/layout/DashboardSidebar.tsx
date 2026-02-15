"use client";

import type { JSX } from "react";
import Link from "next/link";
import { T } from "../providers/LanguageProvider";

interface SidebarLink {
  readonly icon: string;
  readonly ja: string;
  readonly en: string;
  readonly href: string;
  readonly active?: boolean;
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
}

export default function DashboardSidebar({
  sections,
  user,
}: SidebarProps): JSX.Element {
  return (
    <aside
      className="fixed bottom-0 left-0 top-[var(--nav-height)] hidden w-70 flex-col overflow-y-auto border-r p-5 md:flex"
      style={{ background: "var(--card)", borderColor: "var(--brd)" }}
    >
      {sections.map((sec, si) => (
        <div key={`section-${si}-${sec.ja}`} className="mb-5">
          <div
            className="mb-2 px-3.5 text-[10.5px] font-semibold uppercase tracking-wider"
            style={{ fontFamily: "var(--font-display)", color: "var(--ink3)" }}
          >
            <T ja={sec.ja} en={sec.en} />
          </div>
          <div className="flex flex-col gap-1.5">
            {sec.links.map((lk) => (
              <Link
                key={lk.href}
                href={lk.href}
                className="flex items-center gap-3 rounded-lg px-3.5 py-2.5 text-[13.5px] transition-all hover:bg-(--bg-hover)"
                style={{
                  fontWeight: lk.active ? 600 : 500,
                  background: lk.active ? "var(--accent-soft)" : "transparent",
                  color: lk.active ? "var(--color-accent)" : "var(--ink3)",
                }}
              >
                <span
                  className="w-[18px] shrink-0 text-center text-sm"
                  style={{ opacity: lk.active ? 1 : 0.65 }}
                >
                  {lk.icon}
                </span>
                <T ja={lk.ja} en={lk.en} />
              </Link>
            ))}
          </div>
        </div>
      ))}

      <div className="flex-1" />

      {/* User */}
      <div
        className="mt-auto flex items-center gap-3 border-t px-3 pt-4"
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
            {user.verified && <span className="badge-verified">✓</span>}
          </div>
          <div className="text-[11px]" style={{ color: "var(--ink3)" }}>
            <T ja={user.jaRole} en={user.enRole} />
          </div>
        </div>
      </div>
    </aside>
  );
}
