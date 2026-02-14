"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "../providers/ThemeProvider";
import { useLang, T } from "../providers/LanguageProvider";
import Logo from "./Logo";

interface NavLink {
  readonly href: string;
  readonly ja: string;
  readonly en: string;
  readonly external?: boolean; // Opens in new tab if true
}

const links: readonly NavLink[] = [
  { href: "/", ja: "ホーム", en: "Home" },
  { href: "/community", ja: "学生の方", en: "For Students" },
  { href: "/business", ja: "企業の方", en: "For Companies", external: true }, // Will open in new tab
  { href: "/how-it-works", ja: "使い方", en: "How It Works" },
  { href: "/pricing", ja: "料金", en: "Pricing" },
  { href: "/faq", ja: "FAQ", en: "FAQ" },
] as const;

export default function Navbar() {
  const path = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState<boolean>(false);
  const isDash = path.includes("/dashboard");

  // Determine current section for branding
  const section = path.startsWith("/business")
    ? "business"
    : path.startsWith("/community")
    ? "community"
    : undefined;

  const isActive = (href: string): boolean => {
    return href === "/" ? path === "/" : path.startsWith(href);
  };

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-all"
      data-section={section}
      style={{
        height: "var(--nav-height)",
        background: "var(--nav-bg)",
        borderColor: "var(--brd)",
      }}
    >
      <div className="mx-auto flex h-full max-w-325 items-center gap-8 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center"
        >
          <Logo />
        </Link>

        <span
          className="hidden h-6 w-px shrink-0 md:block"
          style={{ background: "var(--brd)" }}
        />

        {/* Links */}
        <div className="hidden flex-1 items-center gap-2 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="rounded-lg px-4 py-2 text-[13px] transition-all"
              style={{
                fontWeight: isActive(l.href) ? 600 : 500,
                color: isActive(l.href) ? "var(--ink)" : "var(--ink3)",
                background: isActive(l.href)
                  ? "var(--bg-hover)"
                  : "transparent",
              }}
            >
              <T ja={l.ja} en={l.en} />
            </Link>
          ))}
        </div>

        {/* Right */}
        <div className="ml-auto flex items-center gap-2.5">
          {/* Lang */}
          <div
            className="flex overflow-hidden rounded-lg border"
            style={{ borderColor: "var(--brd)" }}
          >
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

          {/* Theme */}
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg border text-sm transition-all"
            style={{ borderColor: "var(--brd)", color: "var(--ink2)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            aria-label="Toggle theme"
            suppressHydrationWarning
          >
            {theme === "light" ? "☀️" : "🌙"}
          </button>

          {/* Auth — hide on dashboard, context-aware */}
          {!isDash && (() => {
            const isBusiness = path.startsWith("/business");
            const loginHref = isBusiness ? "/business/login" : "/community/login";
            const signupHref = isBusiness ? "/business/signup" : "/community/signup";

            return (
              <>
                <Link
                  href={loginHref}
                  target={isBusiness ? "_blank" : undefined}
                  rel={isBusiness ? "noopener noreferrer" : undefined}
                  className="hidden rounded-lg border px-4 py-2 text-xs font-semibold transition-all md:inline-flex"
                  style={{ borderColor: "var(--brd)", color: "var(--ink2)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-hover)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <T ja="ログイン" en="Log in" />
                </Link>
                <Link
                  href={signupHref}
                  target={isBusiness ? "_blank" : undefined}
                  rel={isBusiness ? "noopener noreferrer" : undefined}
                  className="hidden rounded-lg px-4 py-2 text-xs font-semibold text-white transition-all hover:opacity-90 md:inline-flex"
                  style={{ background: "var(--color-accent)" }}
                >
                  <T ja="無料登録" en="Sign up" />
                </Link>
              </>
            );
          })()}

          {/* Mobile menu */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg border md:hidden"
            style={{ borderColor: "var(--brd)" }}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <div className="flex flex-col gap-1">
              <span
                className="block h-[1.5px] w-4 rounded"
                style={{ background: "var(--ink)" }}
              />
              <span
                className="block h-[1.5px] w-4 rounded"
                style={{ background: "var(--ink)" }}
              />
              <span
                className="block h-[1.5px] w-4 rounded"
                style={{ background: "var(--ink)" }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="absolute inset-x-0 top-full border-b px-6 py-5 backdrop-blur-xl md:hidden"
          style={{ background: "var(--nav-bg)", borderColor: "var(--brd)" }}
        >
          <div className="flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-2.5 text-sm font-medium transition-all"
                style={{ color: "var(--ink2)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <T ja={l.ja} en={l.en} />
              </Link>
            ))}
            <hr className="my-2" style={{ borderColor: "var(--brd)" }} />
            {(() => {
              const isBusiness = path.startsWith("/business");
              const loginHref = isBusiness ? "/business/login" : "/community/login";
              const signupHref = isBusiness ? "/business/signup" : "/community/signup";

              return (
                <>
                  <Link
                    href={loginHref}
                    target={isBusiness ? "_blank" : undefined}
                    rel={isBusiness ? "noopener noreferrer" : undefined}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-4 py-2.5 text-sm font-semibold"
                    style={{ color: "var(--color-accent)" }}
                  >
                    <T ja="ログイン" en="Log in" />
                  </Link>
                  <Link
                    href={signupHref}
                    target={isBusiness ? "_blank" : undefined}
                    rel={isBusiness ? "noopener noreferrer" : undefined}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-4 py-2.5 text-sm font-semibold"
                    style={{ color: "var(--color-accent)" }}
                  >
                    <T ja="無料登録" en="Sign up" />
                  </Link>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </nav>
  );
}
