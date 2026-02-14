/**
 * ═══════════════════════════════════════════════════════════════
 * LANGUAGE PROVIDER - Bilingual Support (Japanese ⇄ English)
 * ═══════════════════════════════════════════════════════════════
 *
 * This is a CONTEXT PROVIDER - a React pattern for sharing state globally.
 *
 * What does this file do?
 * 1. Manages language state (Japanese or English)
 * 2. Saves user preference to localStorage
 * 3. Provides language switching to ALL components
 * 4. Provides translation helper functions
 *
 * How to use this in your components:
 * ```tsx
 * import { useLang, T } from "@/app/components/providers/LanguageProvider";
 *
 * function MyComponent() {
 *   const { lang, setLang, t } = useLang();
 *
 *   return (
 *     <>
 *       {/* Method 1: Use the <T> component (renders both, CSS hides one) *\/}
 *       <T ja="こんにちは" en="Hello" />
 *
 *       {/* Method 2: Use the t() function (returns string based on lang) *\/}
 *       <p>{t("日本語", "English")}</p>
 *
 *       {/* Change language: *\/}
 *       <button onClick={() => setLang("en")}>English</button>
 *     </>
 *   );
 * }
 * ```
 */

"use client";  // ← This makes it a Client Component (runs in browser, can use hooks)

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📝 TYPES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

type Lang = "ja" | "en";  // Only these two languages are supported

interface LanguageContextValue {
  lang: Lang;                              // Current language
  setLang: (l: Lang) => void;              // Function to change language
  t: (ja: string, en: string) => string;   // Translate function
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🏪 CONTEXT SETUP
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * React Context = a way to share state across your entire app
 * Think of it as a "global variable" but safer and more React-like
 */

const LangCtx = createContext<LanguageContextValue>({
  lang: "ja",                  // Default value (Japanese)
  setLang: () => {},           // Empty function (will be replaced)
  t: (ja) => ja,               // Default returns Japanese
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🪝 CUSTOM HOOK - useLang()
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Use this hook in any component to access language state:
 * const { lang, setLang, t } = useLang();
 */
export function useLang() {
  return useContext(LangCtx);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎨 TRANSLATION COMPONENT - <T>
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * This component renders BOTH languages but CSS hides the inactive one.
 *
 * Example:
 * <T ja="ログイン" en="Login" />
 *
 * Renders:
 * <span class="ja-only">ログイン</span>  ← Visible when lang="ja"
 * <span class="en-only">Login</span>     ← Visible when lang="en"
 *
 * CSS in globals.css handles the showing/hiding:
 * [data-lang="ja"] .en-only { display: none; }
 * [data-lang="en"] .ja-only { display: none; }
 */
export function T({ ja, en }: { ja: string; en: string }) {
  return (
    <>
      <span className="ja-only">{ja}</span>
      <span className="en-only">{en}</span>
    </>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🌐 LANGUAGE PROVIDER COMPONENT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * This component wraps your app (in layout.tsx) to provide language state.
 *
 * How it works:
 * 1. On first load, check localStorage for saved preference
 * 2. If none found, default to Japanese
 * 3. Update the HTML element's data-lang attribute
 * 4. Provide lang, setLang, and t() to all child components
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  // ──────────────────────────────────────────────────────────────
  // STATE: Current language (starts as "ja" for server rendering)
  // ──────────────────────────────────────────────────────────────
  const [lang, setLangState] = useState<Lang>("ja");

  // ──────────────────────────────────────────────────────────────
  // EFFECT: Load saved language from browser storage
  // ──────────────────────────────────────────────────────────────
  useEffect(() => {
    // Read from localStorage (only available in browser, not server)
    const stored = localStorage.getItem("senpai-lang") as Lang | null;
    const initial = stored ?? "ja";  // Default to Japanese if nothing saved

    // Update the HTML element: <html data-lang="ja">
    // This triggers CSS to show/hide .ja-only and .en-only elements
    document.documentElement.setAttribute("data-lang", initial);

    // Update React state asynchronously to avoid ESLint warnings
    // Promise.resolve() creates a microtask, delaying state update slightly
    Promise.resolve().then(() => setLangState(initial));
  }, []);  // Empty array = run once on mount

  // ──────────────────────────────────────────────────────────────
  // FUNCTION: Change Language
  // ──────────────────────────────────────────────────────────────
  /**
   * When user clicks "JP" or "EN" button, this function:
   * 1. Updates React state
   * 2. Updates HTML data-lang attribute (triggers CSS change)
   * 3. Saves preference to localStorage (persists across page reloads)
   *
   * useCallback prevents this function from being recreated on every render
   */
  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    document.documentElement.setAttribute("data-lang", l);
    localStorage.setItem("senpai-lang", l);
  }, []);

  // ──────────────────────────────────────────────────────────────
  // FUNCTION: Translate (returns string based on current language)
  // ──────────────────────────────────────────────────────────────
  /**
   * Usage: t("日本語テキスト", "English text")
   * Returns "日本語テキスト" if lang === "ja"
   * Returns "English text" if lang === "en"
   */
  const t = useCallback(
    (ja: string, en: string) => (lang === "ja" ? ja : en),
    [lang],  // Recreate when lang changes
  );

  // ──────────────────────────────────────────────────────────────
  // RENDER: Provide language state to all children
  // ──────────────────────────────────────────────────────────────
  /**
   * LangCtx.Provider makes { lang, setLang, t } available to:
   * - ALL components inside <LanguageProvider>
   * - Via the useLang() hook
   */
  return (
    <LangCtx.Provider value={{ lang, setLang, t }}>
      {children}
    </LangCtx.Provider>
  );
}
