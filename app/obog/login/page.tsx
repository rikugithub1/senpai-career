"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { T } from "../../components/providers/LanguageProvider";
import AuthLayout from "../../components/auth/AuthLayout";

export default function ObogLoginPage() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push("/obog/dashboard");
  }

  return (
    <AuthLayout type="obog">
      {/* Logo */}
      <div className="mb-8 text-center">
        <div
          className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
          style={{ background: "var(--color-accent)" }}
        >
          🎓
        </div>
        <h1 className="mb-1 text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          <T ja="OB/OGログイン" en="Alumni Log In" />
        </h1>
        <p className="text-sm" style={{ color: "var(--ink3)" }}>
          <T ja="OB/OG向けプラットフォーム" en="Alumni Platform" />
        </p>
      </div>

      {/* Card */}
      <div className="rounded-[14px] border p-6" style={{ background: "var(--card)", borderColor: "var(--brd)" }}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="mb-1.5 block text-xs font-semibold" style={{ color: "var(--ink2)" }}>
              <T ja="メールアドレス" en="Email" />
            </label>
            <input type="email" className="input" placeholder="you@company.co.jp" required />
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
            <Link href="/obog/signup" className="font-semibold" style={{ color: "var(--color-accent)" }}>
              <T ja="無料登録" en="Sign up" />
            </Link>
          </span>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link href="/obog" className="text-xs font-medium hover:opacity-80" style={{ color: "var(--ink2)" }}>
          ← <T ja="OB/OGトップに戻る" en="Back to Alumni Home" />
        </Link>
      </div>
    </AuthLayout>
  );
}
