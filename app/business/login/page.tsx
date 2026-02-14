"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { T } from "../../components/providers/LanguageProvider";
import AuthLayout from "../../components/auth/AuthLayout";

/**
 * Business Login Page
 *
 * Login-only page with navy branding and split-screen layout
 */
export default function BusinessLoginPage() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push("/business/dashboard");
  }

  return (
    <AuthLayout type="business">
      {/* Logo */}
      <div className="mb-8 text-center">
        <div
          className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
          style={{ background: "var(--color-accent)" }}
        >
          🏢
        </div>
        <h1 className="mb-1 text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          <T ja="企業ログイン" en="Business Log In" />
        </h1>
        <p className="text-sm" style={{ color: "var(--ink3)" }}>
          <T ja="企業向け管理プラットフォーム" en="Business Management Platform" />
        </p>
      </div>

      {/* Card */}
      <div className="rounded-[14px] border p-6" style={{ background: "var(--card)", borderColor: "var(--brd)" }}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="mb-1.5 block text-xs font-semibold" style={{ color: "var(--ink2)" }}>
              <T ja="メールアドレス" en="Email" />
            </label>
            <input type="email" className="input" placeholder="hr@company.co.jp" required />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold" style={{ color: "var(--ink2)" }}>
              <T ja="パスワード" en="Password" />
            </label>
            <input type="password" className="input" placeholder="••••••••" required />
          </div>
          <button type="submit" className="btn btn-accent mt-1 w-full">
            <T ja="ログイン" en="Log In" />
            <span className="arrow">→</span>
          </button>
        </form>

        <div className="mt-4 border-t pt-4 text-center text-sm" style={{ borderColor: "var(--brd)" }}>
          <span style={{ color: "var(--ink2)" }}>
            <T ja="アカウントをお持ちでない方" en="Don't have an account?" />{" "}
            <Link href="/business/signup" className="font-semibold" style={{ color: "var(--color-accent)" }}>
              <T ja="企業登録" en="Register" />
            </Link>
          </span>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link href="/business" className="text-xs font-medium hover:opacity-80" style={{ color: "var(--ink2)" }}>
          ← <T ja="企業トップに戻る" en="Back to Business Home" />
        </Link>
      </div>
    </AuthLayout>
  );
}
