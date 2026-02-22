"use client";

import { useState } from "react";
import { T } from "../../../components/providers/LanguageProvider";
import Icon from "../../../components/shared/Icon";
import { useToast } from "../../../components/providers/ToastProvider";

/* ── mock data ── */

const initialForm = {
  name: "テック・イノベーション株式会社",
  nameEn: "Tech Innovation Inc.",
  industry: "IT・テクノロジー",
  industryEn: "IT & Technology",
  description:
    "AIとクラウド技術を活用したソリューションを提供するスタートアップ企業です。",
  descriptionEn:
    "A startup company providing solutions leveraging AI and cloud technology.",
  website: "https://techinnovation.example.co.jp",
  contactEmail: "hr@techinnovation.example.co.jp",
};

const currentPlan = {
  ja: "スタンダードプラン",
  en: "Standard Plan",
  messagesJa: "月30通",
  messagesEn: "30/month",
  slotsJa: "OB/OG枠 5スロット",
  slotsEn: "5 OB/OG slots",
  priceJa: "¥30,000/月",
  priceEn: "¥30,000/mo",
  renewalDate: "2026-03-01",
};

const industries = [
  { ja: "IT・テクノロジー", en: "IT & Technology" },
  { ja: "金融・保険", en: "Finance & Insurance" },
  { ja: "コンサルティング", en: "Consulting" },
  { ja: "製造業", en: "Manufacturing" },
  { ja: "商社", en: "Trading" },
  { ja: "メディア・広告", en: "Media & Advertising" },
  { ja: "不動産", en: "Real Estate" },
  { ja: "その他", en: "Other" },
];

/* ── page ── */

export default function SettingsPage() {
  const [form, setForm] = useState(initialForm);
  const { toast } = useToast();

  function handleChange(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSave() {
    toast("保存しました / Saved successfully");
  }

  return (
    <>
      {/* Header */}
      <div className="mb-6">
        <h1
          className="mb-0.5 text-xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <T ja="企業プロフィール設定" en="Company Settings" />
        </h1>
        <p className="text-[12.5px]" style={{ color: "var(--ink3)" }}>
          <T
            ja="企業情報とプランの管理"
            en="Manage company information and plan"
          />
        </p>
      </div>

      <div className="grid gap-3.5 lg:grid-cols-3">
        {/* Main form (2/3 width) */}
        <div className="lg:col-span-2">
          {/* Company Info */}
          <div className="card mb-3.5">
            <div className="card-hd">
              <div className="card-t">
                <Icon name="building-2" size={16} className="mr-2" style={{ color: "var(--color-accent)" }} />
                <T ja="企業情報" en="Company Information" />
              </div>
            </div>
            <div className="card-bd">
              <div className="flex flex-col gap-4">
                {/* Logo placeholder */}
                <div>
                  <label
                    className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--ink3)",
                    }}
                  >
                    <T ja="企業ロゴ" en="Company Logo" />
                  </label>
                  <div
                    className="flex h-24 w-24 cursor-pointer items-center justify-center rounded-xl border-2 border-dashed text-[11px] transition-colors hover:border-[var(--color-accent)]"
                    style={{
                      borderColor: "var(--brd2)",
                      color: "var(--ink4)",
                      background: "var(--bg3)",
                    }}
                  >
                    <div className="text-center">
                      <div className="mb-1"><Icon name="camera" size={20} style={{ color: "var(--ink4)" }} /></div>
                      <T ja="アップロード" en="Upload" />
                    </div>
                  </div>
                </div>

                {/* Company name (JP) */}
                <div>
                  <label
                    className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--ink3)",
                    }}
                  >
                    <T ja="会社名" en="Company Name" /> <span style={{ color: "var(--red)" }}>*</span>
                  </label>
                  <input
                    className="input"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                  />
                </div>

                {/* Company name (EN) */}
                <div>
                  <label
                    className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--ink3)",
                    }}
                  >
                    <T ja="会社名（英語）" en="Company Name (English)" />
                  </label>
                  <input
                    className="input"
                    value={form.nameEn}
                    onChange={(e) => handleChange("nameEn", e.target.value)}
                  />
                </div>

                {/* Industry */}
                <div>
                  <label
                    className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--ink3)",
                    }}
                  >
                    <T ja="業界" en="Industry" />
                  </label>
                  <select
                    className="input"
                    value={form.industry}
                    onChange={(e) => handleChange("industry", e.target.value)}
                  >
                    {industries.map((ind, i) => (
                      <option key={i} value={ind.ja}>
                        {ind.ja} / {ind.en}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label
                    className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--ink3)",
                    }}
                  >
                    <T ja="企業概要" en="Description" />
                  </label>
                  <textarea
                    className="input"
                    rows={4}
                    value={form.description}
                    onChange={(e) =>
                      handleChange("description", e.target.value)
                    }
                    style={{ resize: "vertical" }}
                  />
                </div>

                {/* Website */}
                <div>
                  <label
                    className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--ink3)",
                    }}
                  >
                    <T ja="ウェブサイト" en="Website" />
                  </label>
                  <input
                    className="input"
                    type="url"
                    value={form.website}
                    onChange={(e) => handleChange("website", e.target.value)}
                  />
                </div>

                {/* Contact email */}
                <div>
                  <label
                    className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--ink3)",
                    }}
                  >
                    <T ja="採用担当メール" en="HR Contact Email" /> <span style={{ color: "var(--red)" }}>*</span>
                  </label>
                  <input
                    className="input"
                    type="email"
                    value={form.contactEmail}
                    onChange={(e) =>
                      handleChange("contactEmail", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Save button */}
          <div className="flex items-center gap-3">
            <button className="btn btn-accent" onClick={handleSave}>
              <Icon name="check" size={14} className="mr-1" />
              <T ja="変更を保存" en="Save Changes" />
            </button>
          </div>
        </div>

        {/* Sidebar (1/3 width) */}
        <div>
          {/* Current Plan */}
          <div className="card mb-3.5">
            <div className="card-hd">
              <div className="card-t">
                <Icon name="package" size={16} className="mr-2" style={{ color: "var(--color-accent)" }} />
                <T ja="現在のプラン" en="Current Plan" />
              </div>
            </div>
            <div className="card-bd">
              <div
                className="mb-3 rounded-lg p-3"
                style={{
                  background: "var(--accent-soft)",
                  border: "1px solid var(--color-accent)",
                }}
              >
                <div
                  className="mb-1 text-[14px] font-bold"
                  style={{ color: "var(--color-accent)" }}
                >
                  <T ja={currentPlan.ja} en={currentPlan.en} />
                </div>
                <div
                  className="text-[20px] font-bold"
                  style={{ color: "var(--ink)" }}
                >
                  <T ja={currentPlan.priceJa} en={currentPlan.priceEn} />
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <div
                  className="flex items-center justify-between border-b pb-2.5"
                  style={{ borderColor: "var(--brd2)" }}
                >
                  <span
                    className="text-[12px]"
                    style={{ color: "var(--ink3)" }}
                  >
                    <T ja="メッセージ枠" en="Messages" />
                  </span>
                  <span className="text-[12.5px] font-semibold">
                    <T
                      ja={currentPlan.messagesJa}
                      en={currentPlan.messagesEn}
                    />
                  </span>
                </div>
                <div
                  className="flex items-center justify-between border-b pb-2.5"
                  style={{ borderColor: "var(--brd2)" }}
                >
                  <span
                    className="text-[12px]"
                    style={{ color: "var(--ink3)" }}
                  >
                    <T ja="OB/OG枠" en="OB/OG Slots" />
                  </span>
                  <span className="text-[12.5px] font-semibold">
                    <T ja={currentPlan.slotsJa} en={currentPlan.slotsEn} />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className="text-[12px]"
                    style={{ color: "var(--ink3)" }}
                  >
                    <T ja="次回更新日" en="Next Renewal" />
                  </span>
                  <span className="text-[12.5px] font-semibold">
                    {currentPlan.renewalDate}
                  </span>
                </div>
              </div>

              <button className="btn btn-ghost btn-sm mt-4 w-full">
                <T ja="プランを変更" en="Change Plan" />
              </button>
            </div>
          </div>

          {/* Account info card */}
          <div className="card">
            <div className="card-hd">
              <div className="card-t">
                <Icon name="user" size={16} className="mr-2" style={{ color: "var(--color-accent)" }} />
                <T ja="アカウント" en="Account" />
              </div>
            </div>
            <div className="card-bd">
              <div className="flex flex-col gap-2.5">
                <div
                  className="flex items-center justify-between border-b pb-2.5"
                  style={{ borderColor: "var(--brd2)" }}
                >
                  <span
                    className="text-[12px]"
                    style={{ color: "var(--ink3)" }}
                  >
                    <T ja="担当者" en="Admin" />
                  </span>
                  <span className="text-[12.5px] font-semibold">
                    <T ja="佐藤 太郎" en="T. Sato" />
                  </span>
                </div>
                <div
                  className="flex items-center justify-between border-b pb-2.5"
                  style={{ borderColor: "var(--brd2)" }}
                >
                  <span
                    className="text-[12px]"
                    style={{ color: "var(--ink3)" }}
                  >
                    <T ja="役職" en="Role" />
                  </span>
                  <span className="text-[12.5px] font-semibold">
                    <T ja="人事部長" en="HR Director" />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className="text-[12px]"
                    style={{ color: "var(--ink3)" }}
                  >
                    <T ja="登録日" en="Since" />
                  </span>
                  <span className="text-[12.5px] font-semibold">
                    2026-01-01
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
