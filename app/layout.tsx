/**
 * ═══════════════════════════════════════════════════════════════
 * ROOT LAYOUT - The Foundation of Your Next.js App
 * ═══════════════════════════════════════════════════════════════
 *
 * This is the MOST IMPORTANT file in your Next.js 16 application!
 *
 * What is a Layout?
 * - Wraps ALL pages in your app
 * - Runs on the server (Server Component)
 * - Only renders once when the app loads
 * - Perfect for things that appear on EVERY page
 *
 * What goes in layout.tsx?
 * ✅ Fonts, global CSS, metadata (SEO)
 * ✅ Navbar, footer, or any UI that appears everywhere
 * ✅ Context providers (theme, auth, language, etc.)
 * ❌ Page-specific content (that goes in page.tsx)
 */

import type { Metadata } from "next";
import { Outfit, Noto_Sans_JP, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { LanguageProvider } from "./components/providers/LanguageProvider";
import Navbar from "./components/layout/Navbar";
import "./globals.css";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📝 FONTS - Next.js optimizes Google Fonts automatically
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * How Next.js Font Optimization Works:
 * 1. Downloads font files at BUILD time (not runtime)
 * 2. Self-hosts them for better performance
 * 3. Creates CSS variables you can use anywhere
 * 4. No layout shift - fonts load perfectly
 */

const outfit = Outfit({
  subsets: ["latin"],           // Only load Latin characters (smaller file)
  variable: "--font-display",   // ← Use this in CSS: font-family: var(--font-display)
  display: "swap",              // Show fallback font while loading
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],           // This font supports Japanese too!
  variable: "--font-body",      // ← Use this in CSS: font-family: var(--font-body)
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],           // Monospace font for code
  variable: "--font-mono",      // ← Use this in CSS: font-family: var(--font-mono)
  display: "swap",
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🔍 METADATA - SEO (Search Engine Optimization)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * This information appears in:
 * - Browser tabs (title)
 * - Google search results (title + description)
 * - Social media previews (when shared on Twitter, etc.)
 *
 * You can override this in specific pages by exporting metadata there!
 */

export const metadata: Metadata = {
  title: "Senpai Career — 留学生のためのOB/OG訪問プラットフォーム",
  description:
    "日本で就職を目指す留学生と日本企業を、OB/OG訪問でつなぐバイリンガルプラットフォーム。",
  icons: {
    icon: "/img/transparent/logo.png",
  },
  openGraph: {
    title: "Senpai Career — 留学生のためのOB/OG訪問プラットフォーム",
    description:
      "日本で就職を目指す留学生と日本企業を、OB/OG訪問でつなぐバイリンガルプラットフォーム。",
    images: ["/img/transparent/imageFullLight.jpeg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Senpai Career — 留学生のためのOB/OG訪問プラットフォーム",
    description:
      "日本で就職を目指す留学生と日本企業を、OB/OG訪問でつなぐバイリンガルプラットフォーム。",
    images: ["/img/transparent/imageFullLight.jpeg"],
  },
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🏗️ ROOT LAYOUT COMPONENT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The Layout Component Structure:
 *
 * <html>                      ← Root HTML element
 *   <body>
 *     <ThemeProvider>         ← Provides dark/light theme to all components
 *       <LanguageProvider>    ← Provides Japanese/English to all components
 *         <Navbar />          ← Shows on EVERY page
 *         {children}          ← YOUR PAGE CONTENT GOES HERE (changes per route)
 *       </LanguageProvider>
 *     </ThemeProvider>
 *   </body>
 * </html>
 */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;  // {children} = the actual page content
}) {
  return (
    <html
      lang="ja"                     // Default language for accessibility
      data-lang="ja"                // Our custom attribute for CSS [data-lang="ja"]
      data-theme="light"            // Our custom attribute for CSS [data-theme="light"]
      // Apply font CSS variables to entire app:
      className={`${outfit.variable} ${notoSansJP.variable} ${jetbrainsMono.variable}`}
      // Prevent React warnings when client-side JS modifies theme/lang:
      suppressHydrationWarning
    >
      <body>
        {/*
          🎨 THEME PROVIDER
          Wraps the app to provide theme state (light/dark mode)
          Any component can use: const { theme, toggleTheme } = useTheme()
        */}
        <ThemeProvider>
          {/*
            🌐 LANGUAGE PROVIDER
            Wraps the app to provide language state (ja/en)
            Any component can use: const { lang, setLang, t } = useLang()
          */}
          <LanguageProvider>
            {/*
              🧭 UNIFIED NAVBAR
              Shows on all pages with consistent navigation.
              Branding (colors) automatically adjust based on current section.
            */}
            <Navbar />

            {/*
              📄 PAGE CONTENT
              This is where your actual page content renders
              For example:
              - / → renders app/page.tsx
              - /community → renders app/community/page.tsx
              - /business → renders app/business/page.tsx
            */}
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
