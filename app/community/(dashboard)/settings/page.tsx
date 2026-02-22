"use client";

import { useState } from "react";
import { T } from "../../../components/providers/LanguageProvider";
import Icon from "../../../components/shared/Icon";
import { useToast } from "../../../components/providers/ToastProvider";

/* ── Mock Data ── */

const allInterests = [
  { ja: "コンサルティング", en: "Consulting" },
  { ja: "金融", en: "Finance" },
  { ja: "テクノロジー", en: "Technology" },
  { ja: "商社", en: "Trading" },
  { ja: "メーカー", en: "Manufacturing" },
  { ja: "スタートアップ", en: "Startups" },
  { ja: "広告・メディア", en: "Media & Advertising" },
  { ja: "不動産", en: "Real Estate" },
  { ja: "エンジニアリング", en: "Engineering" },
  { ja: "マーケティング", en: "Marketing" },
];

/* ── Page ── */

export default function SettingsPage() {
  const [firstName, setFirstName] = useState("L.");
  const [lastName, setLastName] = useState("Chen");
  const [email, setEmail] = useState("l.chen@example.com");
  const [university, setUniversity] = useState("Keio University");
  const [faculty, setFaculty] = useState("Economics");
  const [gradYear, setGradYear] = useState("2026");
  const [bio, setBio] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<number[]>([0, 1, 3]);
  const [language, setLanguage] = useState<"ja" | "en" | "auto">("auto");
  const { toast } = useToast();

  const toggleInterest = (index: number) => {
    setSelectedInterests((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleSave = () => {
    toast("保存しました / Saved successfully");
  };

  return (
    <>
      {/* Header */}
      <div className="mb-6">
        <h1 className="mb-0.5 text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          <Icon name="settings" size={16} className="mr-2" style={{ color: "var(--color-accent)" }} />
          <T ja="プロフィール設定" en="Profile Settings" />
        </h1>
        <p className="text-[12.5px]" style={{ color: "var(--ink3)" }}>
          <T ja="プロフィール情報を管理しましょう" en="Manage your profile information" />
        </p>
      </div>

      {/* Avatar & Name */}
      <div className="card mb-3.5">
        <div className="card-hd">
          <div className="card-t">
            <Icon name="user" size={16} className="mr-2" style={{ color: "var(--color-accent)" }} />
            <T ja="基本情報" en="Basic Info" />
          </div>
        </div>
        <div className="card-bd">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            {/* Avatar */}
            <div className="flex flex-col items-center gap-2">
              <div
                className="av flex items-center justify-center text-lg font-bold"
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: "var(--accent-soft)",
                  color: "var(--color-accent)",
                  fontSize: 22,
                }}
              >
                LC
              </div>
              <button
                className="btn btn-sm btn-ghost"
              >
                <T ja="写真を変更" en="Change Photo" />
              </button>
            </div>

            {/* Name Fields */}
            <div className="flex-1 space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-[11.5px] font-medium" style={{ color: "var(--ink3)" }}>
                    <T ja="姓" en="Last Name" />
                  </label>
                  <input
                    className="input"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-[11.5px] font-medium" style={{ color: "var(--ink3)" }}>
                    <T ja="名" en="First Name" />
                  </label>
                  <input
                    className="input"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-[11.5px] font-medium" style={{ color: "var(--ink3)" }}>
                  <T ja="メールアドレス" en="Email" />
                </label>
                <input
                  className="input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="mb-1 block text-[11.5px] font-medium" style={{ color: "var(--ink3)" }}>
                  <T ja="自己紹介" en="Bio" />
                </label>
                <textarea
                  className="input"
                  rows={3}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  style={{ resize: "vertical" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* University Info */}
      <div className="card mb-3.5">
        <div className="card-hd">
          <div className="card-t">
            <Icon name="graduation-cap" size={16} className="mr-2" style={{ color: "var(--color-accent)" }} />
            <T ja="大学情報" en="University Info" />
          </div>
        </div>
        <div className="card-bd">
          <div className="grid gap-3 sm:grid-cols-3">
            <div>
              <label className="mb-1 block text-[11.5px] font-medium" style={{ color: "var(--ink3)" }}>
                <T ja="大学名" en="University" />
              </label>
              <input
                className="input"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
              />
            </div>
            <div>
              <label className="mb-1 block text-[11.5px] font-medium" style={{ color: "var(--ink3)" }}>
                <T ja="学部" en="Faculty / Major" />
              </label>
              <input
                className="input"
                value={faculty}
                onChange={(e) => setFaculty(e.target.value)}
              />
            </div>
            <div>
              <label className="mb-1 block text-[11.5px] font-medium" style={{ color: "var(--ink3)" }}>
                <T ja="卒業予定年" en="Graduation Year" />
              </label>
              <select
                className="input"
                value={gradYear}
                onChange={(e) => setGradYear(e.target.value)}
              >
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Interests / Industries */}
      <div className="card mb-3.5">
        <div className="card-hd">
          <div className="card-t">
            <Icon name="bookmark" size={16} className="mr-2" style={{ color: "var(--color-accent)" }} />
            <T ja="興味のある業界" en="Industries of Interest" />
          </div>
        </div>
        <div className="card-bd">
          <p className="mb-3 text-[12px]" style={{ color: "var(--ink3)" }}>
            <T
              ja="興味のある業界を選択してください（複数可）。おすすめのOB/OGに反映されます。"
              en="Select industries you're interested in. This helps us recommend relevant OB/OG alumni."
            />
          </p>
          <div className="flex flex-wrap gap-2">
            {allInterests.map((interest, i) => {
              const isSelected = selectedInterests.includes(i);
              return (
                <button
                  key={i}
                  onClick={() => toggleInterest(i)}
                  className="rounded-full border px-3.5 py-1.5 text-[12px] font-medium transition-colors"
                  style={{
                    borderColor: isSelected ? "var(--color-accent)" : "var(--brd)",
                    background: isSelected ? "var(--accent-soft)" : "transparent",
                    color: isSelected ? "var(--color-accent)" : "var(--ink2)",
                  }}
                >
                  <T ja={interest.ja} en={interest.en} />
                  {isSelected && <span className="ml-1.5">✕</span>}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Language Preferences */}
      <div className="card mb-3.5">
        <div className="card-hd">
          <div className="card-t">
            <Icon name="globe" size={16} className="mr-2" style={{ color: "var(--color-accent)" }} />
            <T ja="言語設定" en="Language Preferences" />
          </div>
        </div>
        <div className="card-bd">
          <div className="space-y-2.5">
            {(
              [
                { value: "auto", ja: "自動検出（ブラウザ設定に合わせる）", en: "Auto-detect (follow browser setting)" },
                { value: "ja", ja: "日本語", en: "Japanese" },
                { value: "en", ja: "English", en: "English" },
              ] as const
            ).map((opt) => (
              <label
                key={opt.value}
                className="flex cursor-pointer items-center gap-2.5 rounded-lg border p-3 transition-colors"
                style={{
                  borderColor: language === opt.value ? "var(--color-accent)" : "var(--brd)",
                  background: language === opt.value ? "var(--accent-soft)" : "transparent",
                }}
              >
                <input
                  type="radio"
                  name="language"
                  value={opt.value}
                  checked={language === opt.value}
                  onChange={() => setLanguage(opt.value)}
                  className="accent-[var(--color-accent)]"
                />
                <span
                  className="text-[13px] font-medium"
                  style={{ color: language === opt.value ? "var(--color-accent)" : "var(--ink2)" }}
                >
                  <T ja={opt.ja} en={opt.en} />
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Save */}
      <div className="flex items-center gap-3">
        <button className="btn btn-accent" onClick={handleSave}>
          <Icon name="check" size={14} className="mr-1" />
          <T ja="変更を保存" en="Save Changes" />
        </button>
      </div>
    </>
  );
}
