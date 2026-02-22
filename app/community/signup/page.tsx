"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { T, useLang } from "../../components/providers/LanguageProvider";
import AuthLayout from "../../components/auth/AuthLayout";
import Icon from "../../components/shared/Icon";

/**
 * Community Signup Page
 *
 * Student signup with teal branding and split-screen layout
 */
export default function CommunitySignupPage() {
  const router = useRouter();
  const { t } = useLang();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push("/community/dashboard");
  }

  const strength = password.length === 0 ? 0 : password.length < 6 ? 1 : password.length < 10 ? 2 : 3;
  const strengthColor = strength <= 1 ? "var(--red)" : strength === 2 ? "var(--yellow)" : "var(--green)";

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
          <T ja="アカウント作成" en="Create Account" />
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
              <T ja="氏名" en="Full Name" /> <span style={{ color: "var(--red)" }}>*</span>
            </label>
            <input type="text" className="input" placeholder={t("田中 太郎", "Taro Tanaka")} required />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold" style={{ color: "var(--ink2)" }}>
              <T ja="メールアドレス" en="Email" /> <span style={{ color: "var(--red)" }}>*</span>
            </label>
            <input type="email" className="input" placeholder="you@university.ac.jp" required />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold" style={{ color: "var(--ink2)" }}>
              <T ja="パスワード" en="Password" /> <span style={{ color: "var(--red)" }}>*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input"
                placeholder={t("8文字以上で入力", "At least 8 characters")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
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
            {password.length > 0 && (
              <div className="mt-1.5 flex gap-1">
                {[1, 2, 3].map((level) => (
                  <div
                    key={level}
                    className="h-1 flex-1 rounded-full"
                    style={{ background: strength >= level ? strengthColor : "var(--bg3)" }}
                  />
                ))}
              </div>
            )}
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold" style={{ color: "var(--ink2)" }}>
              <T ja="パスワード（確認）" en="Confirm Password" /> <span style={{ color: "var(--red)" }}>*</span>
            </label>
            <input
              type="password"
              className="input"
              placeholder={t("もう一度入力", "Enter again")}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={8}
            />
            {confirmPassword.length > 0 && password !== confirmPassword && (
              <div className="mt-1 text-[11px]" style={{ color: "var(--red)" }}>
                <T ja="パスワードが一致しません" en="Passwords do not match" />
              </div>
            )}
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold" style={{ color: "var(--ink2)" }}>
              <T ja="大学" en="University" /> <span style={{ color: "var(--red)" }}>*</span>
            </label>
            <select className="input" required>
              <option value="">{t("大学を選択", "Select university")}</option>
              <option value="todai">{t("東京大学", "University of Tokyo")}</option>
              <option value="keio">{t("慶應義塾大学", "Keio University")}</option>
              <option value="waseda">{t("早稲田大学", "Waseda University")}</option>
            </select>
          </div>

          <label className="flex cursor-pointer items-start gap-2 text-[12px]" style={{ color: "var(--ink2)" }}>
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5"
              required
            />
            <span>
              <T
                ja="利用規約とプライバシーポリシーに同意します"
                en="I agree to the Terms of Service and Privacy Policy"
              />
            </span>
          </label>

          <button type="submit" className="btn btn-accent mt-1 w-full" disabled={!agreed}>
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
        <Link href="/community" className="inline-flex items-center gap-1 text-xs font-medium hover:opacity-80" style={{ color: "var(--ink2)" }}>
          <Icon name="arrow-left" size={12} />
          <T ja="学生トップに戻る" en="Back to Student Home" />
        </Link>
      </div>
    </AuthLayout>
  );
}
