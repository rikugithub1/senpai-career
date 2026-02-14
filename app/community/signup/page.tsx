"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { T, useLang } from "../../components/providers/LanguageProvider";
import AuthLayout from "../../components/auth/AuthLayout";

/**
 * Community Signup Page
 *
 * Student signup with teal branding and split-screen layout
 */
export default function CommunitySignupPage() {
  const router = useRouter();
  const { t } = useLang();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push("/community/dashboard");
  }

  return (
    <AuthLayout type="community">
      {/* Logo */}
      <div className="mb-8 text-center">
        <div
          className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
          style={{ background: "var(--color-accent)" }}
        >
          🎒
        </div>
        <h1 className="mb-1 text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          <T ja="アカウント作成" en="Create Account" />
        </h1>
        <p className="text-sm" style={{ color: "var(--ink3)" }}>
          <T ja="学生・OB/OG向けプラットフォーム" en="Student & OB/OG Platform" />
        </p>
      </div>

      {/* Card */}
      <div className="rounded-[14px] border p-6" style={{ background: "var(--card)", borderColor: "var(--brd)" }}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="mb-1.5 block text-xs font-semibold" style={{ color: "var(--ink2)" }}>
              <T ja="氏名" en="Full Name" />
            </label>
            <input type="text" className="input" placeholder={t("田中 太郎", "Taro Tanaka")} required />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold" style={{ color: "var(--ink2)" }}>
              <T ja="メールアドレス" en="Email" />
            </label>
            <input type="email" className="input" placeholder="you@university.ac.jp" required />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold" style={{ color: "var(--ink2)" }}>
              <T ja="パスワード" en="Password" />
            </label>
            <input type="password" className="input" placeholder="••••••••" required />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold" style={{ color: "var(--ink2)" }}>
              <T ja="大学" en="University" />
            </label>
            <select className="input" required>
              <option value="">{t("大学を選択", "Select university")}</option>
              <option value="todai">{t("東京大学", "University of Tokyo")}</option>
              <option value="keio">{t("慶應義塾大学", "Keio University")}</option>
              <option value="waseda">{t("早稲田大学", "Waseda University")}</option>
            </select>
          </div>

          <button type="submit" className="btn btn-accent mt-1 w-full">
            <T ja="無料で登録する" en="Sign Up Free" />
            <span className="arrow">→</span>
          </button>
        </form>

        <div className="mt-4 border-t pt-4 text-center text-sm" style={{ borderColor: "var(--brd)" }}>
          <span style={{ color: "var(--ink2)" }}>
            <T ja="すでにアカウントをお持ちですか？" en="Already have an account?" />{" "}
            <Link href="/community/login" className="font-semibold" style={{ color: "var(--color-accent)" }}>
              <T ja="ログイン" en="Log in" />
            </Link>
          </span>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link href="/community" className="text-xs font-medium hover:opacity-80" style={{ color: "var(--ink2)" }}>
          ← <T ja="学生トップに戻る" en="Back to Student Home" />
        </Link>
      </div>
    </AuthLayout>
  );
}
