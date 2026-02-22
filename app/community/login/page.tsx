"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { T } from "../../components/providers/LanguageProvider";
import AuthLayout from "../../components/auth/AuthLayout";
import Icon from "../../components/shared/Icon";

/**
 * Community Login Page
 *
 * Login-only page with teal branding and split-screen layout
 */
export default function CommunityLoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push("/community/dashboard");
  }

  return (
    <AuthLayout type="community">
      {/* Logo */}
      <div className="mb-8 text-center">
        <div
          className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
          style={{ background: "var(--color-accent)" }}
        >
          <Icon name="graduation-cap" size={24} style={{ color: "white" }} />
        </div>
        <h1 className="mb-1 text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          <T ja="ログイン" en="Log In" />
        </h1>
        <p className="text-sm" style={{ color: "var(--ink3)" }}>
          <T ja="学生・OB/OG向けプラットフォーム" en="Student & OB/OG Platform" />
        </p>
      </div>

      {/* Card */}
      <div className="rounded-[14px] border p-6" style={{ background: "var(--card)", borderColor: "var(--brd)", boxShadow: "var(--shadow-md)" }}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input"
                placeholder="パスワードを入力"
                required
                style={{ paddingRight: 40 }}
              />
              <button
                type="button"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 cursor-pointer"
                style={{ color: "var(--ink4)" }}
                onClick={() => setShowPassword(!showPassword)}
              >
                <Icon name={showPassword ? "eye-off" : "eye"} size={16} />
              </button>
            </div>
            <div className="mt-1.5 text-right">
              <Link href="#" className="text-[11px] font-medium" style={{ color: "var(--color-accent)" }}>
                <T ja="パスワードをお忘れですか？" en="Forgot password?" />
              </Link>
            </div>
          </div>
          <button type="submit" className="btn btn-accent mt-1 w-full">
            <T ja="ログイン" en="Log In" />
            <span className="arrow">→</span>
          </button>
        </form>

        <div className="mt-4 border-t pt-4 text-center text-sm" style={{ borderColor: "var(--brd)" }}>
          <span style={{ color: "var(--ink2)" }}>
            <T ja="アカウントをお持ちでない方" en="Don't have an account?" />{" "}
            <Link href="/community/signup" className="font-semibold" style={{ color: "var(--color-accent)" }}>
              <T ja="無料登録" en="Sign up" />
            </Link>
          </span>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link href="/community" className="inline-flex items-center gap-1 text-xs font-medium hover:opacity-80" style={{ color: "var(--ink2)" }}>
          <Icon name="arrow-left" size={12} />
          <T ja="学生トップに戻る" en="Back to Student Home" />
        </Link>
      </div>
    </AuthLayout>
  );
}
