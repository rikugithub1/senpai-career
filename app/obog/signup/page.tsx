"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { T, useLang } from "../../components/providers/LanguageProvider";
import AuthLayout from "../../components/auth/AuthLayout";
import Icon from "@/app/components/shared/Icon";

function getPasswordStrength(password: string): { level: number; label: string; labelEn: string; color: string } {
  if (password.length === 0) return { level: 0, label: "", labelEn: "", color: "transparent" };
  if (password.length < 6) return { level: 1, label: "弱い", labelEn: "Weak", color: "#ef4444" };
  if (password.length <= 10) return { level: 2, label: "普通", labelEn: "Medium", color: "#eab308" };
  return { level: 3, label: "強い", labelEn: "Strong", color: "#22c55e" };
}

export default function ObogSignupPage() {
  const router = useRouter();
  const { t } = useLang();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const strength = getPasswordStrength(password);

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
          <T ja="OB/OGアカウント作成" en="Create Alumni Account" />
        </h1>
      </div>

      {/* Card */}
      <div
        className="rounded-[14px] border p-6"
        style={{ background: "var(--card)", borderColor: "var(--brd)", boxShadow: "var(--shadow-md)" }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Last Name / First Name */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1.5 block text-xs font-semibold" style={{ color: "var(--ink2)" }}>
                <T ja="姓" en="Last Name" />
              </label>
              <input type="text" className="input" placeholder={t("山田", "Yamada")} required />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold" style={{ color: "var(--ink2)" }}>
                <T ja="名" en="First Name" />
              </label>
              <input type="text" className="input" placeholder={t("太郎", "Taro")} required />
            </div>
          </div>

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
                placeholder={t("パスワードを入力", "Enter password")}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            {/* Password Strength Indicator */}
            {password.length > 0 && (
              <div style={{ marginTop: 6 }}>
                <div style={{ display: "flex", gap: 3, marginBottom: 2 }}>
                  {[1, 2, 3].map((lvl) => (
                    <div
                      key={lvl}
                      style={{
                        height: 3,
                        flex: 1,
                        borderRadius: 2,
                        background: lvl <= strength.level ? strength.color : "var(--brd)",
                        transition: "background 0.2s",
                      }}
                    />
                  ))}
                </div>
                <div style={{ fontSize: 11, color: strength.color, fontWeight: 500 }}>
                  <T ja={strength.label} en={strength.labelEn} />
                </div>
              </div>
            )}
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold" style={{ color: "var(--ink2)" }}>
              <T ja="パスワード（確認）" en="Confirm Password" />
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="input"
                placeholder={t("パスワードを再入力", "Re-enter password")}
                required
                style={{ paddingRight: 40 }}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
                <Icon name={showConfirmPassword ? "eye-off" : "eye"} size={16} />
              </button>
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold" style={{ color: "var(--ink2)" }}>
              <T ja="勤務先" en="Company" />
            </label>
            <input type="text" className="input" placeholder={t("会社名を入力", "Enter company name")} required />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold" style={{ color: "var(--ink2)" }}>
              <T ja="出身大学" en="Alma Mater" />
            </label>
            <select className="input" required>
              <option value="">{t("大学を選択", "Select university")}</option>
              <option value="todai">{t("東京大学", "University of Tokyo")}</option>
              <option value="keio">{t("慶應義塾大学", "Keio University")}</option>
              <option value="waseda">{t("早稲田大学", "Waseda University")}</option>
            </select>
          </div>

          {/* Terms of Service */}
          <label style={{ display: "flex", alignItems: "start", gap: 8, fontSize: 12, color: "var(--ink2)" }}>
            <input type="checkbox" required style={{ marginTop: 2 }} />
            <span>
              <T
                ja="利用規約とプライバシーポリシーに同意します"
                en="I agree to the Terms of Service and Privacy Policy"
              />
            </span>
          </label>

          <button type="submit" className="btn btn-accent mt-1 w-full">
            <T ja="無料で登録する" en="Sign Up Free" />
            <span className="arrow">→</span>
          </button>
        </form>

        <div className="mt-4 border-t pt-4 text-center text-sm" style={{ borderColor: "var(--brd)" }}>
          <span style={{ color: "var(--ink2)" }}>
            <T ja="すでにアカウントをお持ちですか？" en="Already have an account?" />{" "}
            <Link href="/obog/login" className="font-semibold" style={{ color: "var(--color-accent)" }}>
              <T ja="ログイン" en="Log in" />
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
