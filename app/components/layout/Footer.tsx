"use client";

import Link from "next/link";
import Image from "next/image";
import { T } from "../providers/LanguageProvider";
import { useTheme } from "../providers/ThemeProvider";

/**
 * Footer Component
 *
 * 4-column sitemap structure with logo, links, and social
 */
export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="border-t py-12" style={{ borderColor: "var(--brd)", background: "var(--bg2)" }}>
      <div className="mx-auto max-w-275 px-6">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Column 1: Logo + Description */}
          <div>
            <Link href="/" className="inline-block mb-3">
              <Image
                src={theme === "dark" ? "/img/transparent/imageFullDark.jpeg" : "/img/transparent/imageFullLight.jpeg"}
                alt="Senpai Career"
                width={480}
                height={135}
                className="h-20 w-auto opacity-90 transition-all hover:opacity-100"
              />
            </Link>
            <p className="mt-3 text-xs leading-relaxed" style={{ color: "var(--ink3)" }}>
              <T
                ja="留学生と日本企業をつなぐOB/OG訪問プラットフォーム"
                en="Connecting international students with Japanese companies"
              />
            </p>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h3 className="mb-3 text-xs font-bold" style={{ color: "var(--ink2)" }}>
              <T ja="プラットフォーム" en="Platform" />
            </h3>
            <div className="flex flex-col gap-2">
              <Link href="/community" className="text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--ink3)" }}>
                <T ja="学生向け" en="For Students" />
              </Link>
              <Link href="/obog" className="text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--ink3)" }}>
                <T ja="OB/OG向け" en="For Alumni" />
              </Link>
              <Link href="/business" className="text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--ink3)" }}>
                <T ja="企業向け" en="For Companies" />
              </Link>
              <Link href="/how-it-works" className="text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--ink3)" }}>
                <T ja="使い方" en="How It Works" />
              </Link>
              <Link href="/pricing" className="text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--ink3)" }}>
                <T ja="料金" en="Pricing" />
              </Link>
            </div>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="mb-3 text-xs font-bold" style={{ color: "var(--ink2)" }}>
              <T ja="会社情報" en="Company" />
            </h3>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--ink3)" }}>
                <T ja="会社概要" en="About" />
              </Link>
              <Link href="/contact" className="text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--ink3)" }}>
                <T ja="お問い合わせ" en="Contact" />
              </Link>
              <Link href="/faq" className="text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--ink3)" }}>
                <T ja="FAQ" en="FAQ" />
              </Link>
            </div>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="mb-3 text-xs font-bold" style={{ color: "var(--ink2)" }}>
              <T ja="法的情報" en="Legal" />
            </h3>
            <div className="flex flex-col gap-2">
              <Link href="/terms" className="text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--ink3)" }}>
                <T ja="利用規約" en="Terms" />
              </Link>
              <Link href="/privacy" className="text-[13px] transition-colors hover:opacity-80" style={{ color: "var(--ink3)" }}>
                <T ja="プライバシーポリシー" en="Privacy" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom row: Social + Copyright */}
        <div className="mt-8 flex flex-col gap-4 border-t pt-6 md:flex-row md:items-center md:justify-between" style={{ borderColor: "var(--brd)" }}>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link href="#" className="text-xs transition-colors hover:opacity-80" style={{ color: "var(--ink3)" }} aria-label="LinkedIn">
              LinkedIn
            </Link>
            <Link href="#" className="text-xs transition-colors hover:opacity-80" style={{ color: "var(--ink3)" }} aria-label="X">
              X
            </Link>
          </div>
          <div className="text-center text-[11.5px] md:text-right" style={{ color: "var(--ink3)" }}>
            © 2026 DBA Corporation. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
