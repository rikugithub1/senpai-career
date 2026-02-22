"use client";

import { useState, useRef, useEffect } from "react";
import { T } from "../../../components/providers/LanguageProvider";
import Icon from "../../../components/shared/Icon";
import { useToast } from "../../../components/providers/ToastProvider";

/* ── mock data ── */

interface ProfileForm {
  nameJa: string;
  nameEn: string;
  company: string;
  role: string;
  almaMater: string;
  graduationYear: string;
  bio: string;
  topics: string[];
  availabilityPref: string;
}

const allTopics = [
  { ja: "コンサル", en: "Consulting" },
  { ja: "金融", en: "Finance" },
  { ja: "テック", en: "Tech" },
  { ja: "商社", en: "Trading" },
  { ja: "メーカー", en: "Manufacturing" },
  { ja: "キャリアパス", en: "Career Path" },
  { ja: "就活対策", en: "Job Hunting" },
  { ja: "海外経験", en: "Global Experience" },
  { ja: "起業", en: "Entrepreneurship" },
  { ja: "インターン", en: "Internships" },
];

const initialForm: ProfileForm = {
  nameJa: "山田 一郎",
  nameEn: "Ichiro Yamada",
  company: "McKinsey & Company",
  role: "Consultant",
  almaMater: "Keio University",
  graduationYear: "2020",
  bio: "McKinseyでコンサルタントとして3年間勤務。戦略コンサルやキャリア選択について、学生の皆さんの参考になるお話ができればと思います。",
  topics: ["コンサル", "金融", "キャリアパス"],
  availabilityPref: "online",
};

/* ── page ── */

export default function SettingsPage() {
  const [form, setForm] = useState<ProfileForm>(initialForm);
  const [dirty, setDirty] = useState(false);
  const initialFormRef = useRef<string>(JSON.stringify(initialForm));
  const { toast } = useToast();

  useEffect(() => {
    const isDirty = JSON.stringify(form) !== initialFormRef.current;
    setDirty(isDirty);
  }, [form]);

  const updateField = (field: keyof ProfileForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleTopic = (topic: string) => {
    setForm((prev) => ({
      ...prev,
      topics: prev.topics.includes(topic)
        ? prev.topics.filter((t) => t !== topic)
        : [...prev.topics, topic],
    }));
  };

  const handleSave = () => {
    initialFormRef.current = JSON.stringify(form);
    setDirty(false);
    toast("保存しました", "success");
  };

  return (
    <>
      {/* Header */}
      <div className="mb-6">
        <h1 className="mb-0.5 text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          <T ja="プロフィール設定" en="Profile Settings" />
        </h1>
        <p className="text-[12.5px]" style={{ color: "var(--ink3)" }}>
          <T ja="プロフィール情報を更新して、学生にアピールしましょう" en="Update your profile to attract students" />
        </p>
      </div>

      {/* Unsaved changes warning */}
      {dirty && (
        <div
          className="mb-4 flex items-center gap-2 rounded-lg border px-4 py-2.5 text-[12.5px] font-medium"
          style={{ borderColor: "var(--yellow)", background: "var(--yellow-bg)", color: "var(--ink2)" }}
        >
          <Icon name="alert-circle" size={15} style={{ color: "var(--yellow)" }} />
          <T ja="未保存の変更があります" en="You have unsaved changes" />
        </div>
      )}

      {/* Profile Preview */}
      <div className="card mb-5">
        <div className="card-bd">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            {/* Avatar with photo upload overlay */}
            <div className="group relative">
              <div
                className="av av-md av-round"
                style={{ background: "var(--accent-soft)", color: "var(--color-accent)", width: 56, height: 56, fontSize: 18 }}
              >
                KY
              </div>
              <button
                className="absolute inset-0 flex items-center justify-center rounded-full opacity-0 transition-opacity group-hover:opacity-100"
                style={{ background: "rgba(0,0,0,0.45)" }}
                aria-label="Upload photo"
              >
                <Icon name="camera" size={18} style={{ color: "#fff" }} />
              </button>
            </div>
            <div>
              <div className="flex items-center gap-2 text-[15px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
                <span className="ja-only">{form.nameJa}</span>
                <span className="en-only">{form.nameEn}</span>
                <span className="badge-verified">&#x2713;</span>
              </div>
              <div className="text-[12.5px]" style={{ color: "var(--ink2)" }}>
                {form.company} &middot; {form.role}
              </div>
              <div className="mt-0.5 text-[11px]" style={{ color: "var(--ink3)" }}>
                {form.almaMater} &middot; <T ja={`${form.graduationYear}年卒`} en={`Class of ${form.graduationYear}`} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="card mb-5">
        <div className="card-hd">
          <div className="card-t">
            <span className="mr-2 inline-flex"><Icon name="user" size={16} /></span>
            <T ja="基本情報" en="Basic Information" />
          </div>
        </div>
        <div className="card-bd">
          <div className="grid gap-4 md:grid-cols-2">
            {/* Name JP */}
            <div>
              <label className="mb-1.5 block text-[12px] font-medium" style={{ color: "var(--ink2)" }}>
                <T ja="氏名（日本語）" en="Name (Japanese)" /> <span style={{ color: "var(--red)" }}>*</span>
              </label>
              <input
                className="input"
                value={form.nameJa}
                onChange={(e) => updateField("nameJa", e.target.value)}
              />
            </div>

            {/* Name EN */}
            <div>
              <label className="mb-1.5 block text-[12px] font-medium" style={{ color: "var(--ink2)" }}>
                <T ja="氏名（英語）" en="Name (English)" /> <span style={{ color: "var(--red)" }}>*</span>
              </label>
              <input
                className="input"
                value={form.nameEn}
                onChange={(e) => updateField("nameEn", e.target.value)}
              />
            </div>

            {/* Company */}
            <div>
              <label className="mb-1.5 block text-[12px] font-medium" style={{ color: "var(--ink2)" }}>
                <T ja="会社名" en="Company" /> <span style={{ color: "var(--red)" }}>*</span>
              </label>
              <input
                className="input"
                value={form.company}
                onChange={(e) => updateField("company", e.target.value)}
              />
            </div>

            {/* Role */}
            <div>
              <label className="mb-1.5 block text-[12px] font-medium" style={{ color: "var(--ink2)" }}>
                <T ja="役職" en="Role" /> <span style={{ color: "var(--red)" }}>*</span>
              </label>
              <input
                className="input"
                value={form.role}
                onChange={(e) => updateField("role", e.target.value)}
              />
            </div>

            {/* Alma Mater */}
            <div>
              <label className="mb-1.5 block text-[12px] font-medium" style={{ color: "var(--ink2)" }}>
                <T ja="出身大学" en="Alma Mater" />
              </label>
              <input
                className="input"
                value={form.almaMater}
                onChange={(e) => updateField("almaMater", e.target.value)}
              />
            </div>

            {/* Graduation Year */}
            <div>
              <label className="mb-1.5 block text-[12px] font-medium" style={{ color: "var(--ink2)" }}>
                <T ja="卒業年" en="Graduation Year" />
              </label>
              <input
                className="input"
                type="number"
                min={1970}
                max={2030}
                value={form.graduationYear}
                onChange={(e) => updateField("graduationYear", e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Topics / Expertise */}
      <div className="card mb-5">
        <div className="card-hd">
          <div className="card-t">
            <span className="mr-2 inline-flex"><Icon name="target" size={16} /></span>
            <T ja="専門分野・トピック" en="Topics & Expertise" />
          </div>
        </div>
        <div className="card-bd">
          <p className="mb-3 text-[12px]" style={{ color: "var(--ink3)" }}>
            <T
              ja="対応可能なトピックを選択してください（複数選択可）"
              en="Select topics you can discuss (multiple selection)"
            />
          </p>
          <div className="flex flex-wrap gap-2">
            {allTopics.map((topic) => {
              const isSelected = form.topics.includes(topic.ja);
              return (
                <button
                  key={topic.ja}
                  onClick={() => toggleTopic(topic.ja)}
                  className="rounded-full border px-3 py-1.5 text-[12px] font-medium transition-all"
                  style={{
                    borderColor: isSelected ? "var(--color-accent)" : "var(--brd)",
                    borderStyle: isSelected ? "solid" : "dashed",
                    background: isSelected ? "var(--accent-soft)" : "transparent",
                    color: isSelected ? "var(--color-accent)" : "var(--ink3)",
                  }}
                >
                  {isSelected && <span className="mr-1">&#x2713;</span>}
                  <T ja={topic.ja} en={topic.en} />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="card mb-5">
        <div className="card-hd">
          <div className="card-t">
            <span className="mr-2 inline-flex"><Icon name="file-text" size={16} /></span>
            <T ja="自己紹介" en="Bio" />
          </div>
        </div>
        <div className="card-bd">
          <textarea
            className="input"
            rows={3}
            value={form.bio}
            onChange={(e) => updateField("bio", e.target.value)}
            style={{ resize: "vertical" }}
          />
          <div className="mt-1.5 text-right text-[11px]" style={{ color: "var(--ink4)" }}>
            {form.bio.length} / 500
          </div>
        </div>
      </div>

      {/* Availability Preferences */}
      <div className="card mb-6">
        <div className="card-hd">
          <div className="card-t">
            <span className="mr-2 inline-flex"><Icon name="clock" size={16} /></span>
            <T ja="面談形式の設定" en="Availability Preferences" />
          </div>
        </div>
        <div className="card-bd">
          <div className="flex flex-col gap-2.5">
            {[
              { value: "online", ja: "オンラインのみ", en: "Online only" },
              { value: "in-person", ja: "対面のみ", en: "In-person only" },
              { value: "both", ja: "オンライン・対面 両方可", en: "Both online and in-person" },
            ].map((opt) => {
              const isActive = form.availabilityPref === opt.value;
              return (
                <label
                  key={opt.value}
                  className="flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 transition-all"
                  style={{
                    borderColor: isActive ? "var(--color-accent)" : "var(--brd)",
                    background: isActive ? "var(--accent-soft)" : "transparent",
                  }}
                >
                  <input
                    type="radio"
                    name="availability"
                    value={opt.value}
                    checked={isActive}
                    onChange={(e) => updateField("availabilityPref", e.target.value)}
                    className="accent-accent"
                  />
                  <span className="text-[13px] font-medium" style={{ color: isActive ? "var(--color-accent)" : "var(--ink2)" }}>
                    <T ja={opt.ja} en={opt.en} />
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="btn btn-accent w-full md:w-auto" onClick={handleSave}>
          <Icon name="check" size={14} className="mr-1" />
          <T ja="保存する" en="Save Changes" />
        </button>
      </div>
    </>
  );
}
