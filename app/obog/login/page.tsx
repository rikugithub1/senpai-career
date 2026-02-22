"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { T } from "../../components/providers/LanguageProvider";
import AuthLayout from "../../components/auth/AuthLayout";
import Icon from "@/app/components/shared/Icon";

export default function ObogLoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push("/obog/dashboard");
  }

  return (
    <AuthLayout type="obog">
      {/* Logo */}
      <div className="mb-8 text-center">
        <div
          className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
          style={{ background: "var(--color-accent)" }}
        >
          <Icon name="graduation-cap" size={24} style={{ color: "#fff" }} />
        </div>
        <h1 className="mb-1 text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          <T ja="OB/OGログイン" en="Alumni Log In" />
        </h1>
      </div>

      {/* Card */}
      <div
        className="rounded-[14px] border p-6"
        style={{ background: "var(--card)", borderColor: "var(--brd)", boxShadow: "var(--shadow-md)" }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="mb-1.5 block text-xs font-semibold" style={{ color: "var(--ink2)" }}>
              <T ja="メールアドレス" en="Email" />
            </label>
            <input type="email" className="input" placeholder="you@example.com" required />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold" style={{ color: "var(--ink2)" }}>
              <T ja="パスワード" en="Password" />
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                className="input"
                placeholder="パスワードを入力"
                required
                style={{ paddingRight: 40 }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 4,
                  display: "flex",
                  alignItems: "center",
                  color: "var(--ink3)",
                }}
                tabIndex={-1}
              >
                <Icon name={showPassword ? "eye-off" : "eye"} size={16} />
              </button>
            </div>
            <div style={{ textAlign: "right", marginTop: 4 }}>
              <a href="#" style={{ fontSize: 12, color: "var(--color-accent)" }}>
                <T ja="パスワードをお忘れですか？" en="Forgot password?" />
              </a>
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
            <Link href="/obog/signup" className="font-semibold" style={{ color: "var(--color-accent)" }}>
              <T ja="無料登録" en="Sign up" />
            </Link>
          </span>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link href="/obog" className="inline-flex items-center gap-1 text-xs font-medium hover:opacity-80" style={{ color: "var(--ink2)" }}>
          <Icon name="arrow-left" size={12} />
          <T ja="OB/OGトップに戻る" en="Back to Alumni Home" />
        </Link>
      </div>
    </AuthLayout>
  );
}
