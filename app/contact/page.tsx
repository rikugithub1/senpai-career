"use client";

import { useState } from "react";
import PageContainer from "../components/shared/PageContainer";
import SectionHeader from "../components/shared/SectionHeader";
import { T, useLang } from "../components/providers/LanguageProvider";
import Link from "next/link";

/**
 * Contact Page
 *
 * Features:
 * - Contact form
 * - Contact information
 * - Link to FAQ
 */
export default function ContactPage() {
  const { t } = useLang();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "student",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    alert(t("お問い合わせを受け付けました。", "Thank you for contacting us."));
  };

  return (
    <PageContainer maxWidth="180">
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-180">
          {/* Header */}
          <SectionHeader
            title={{ ja: "お問い合わせ", en: "Get in Touch" }}
            subtitle={{ ja: "ご質問やご相談がございましたら、お気軽にお問い合わせください。", en: "Have questions? We're here to help." }}
          />

          <div className="grid gap-8 md:grid-cols-[1.5fr_1fr]">
            {/* Left: Contact Form */}
            <div className="rounded-[14px] border p-6" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
              <h3 className="mb-4 text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
                <T ja="お問い合わせフォーム" en="Contact Form" />
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold" style={{ color: "var(--ink2)" }}>
                    <T ja="お名前" en="Name" />
                  </label>
                  <input
                    type="text"
                    className="input"
                    placeholder={t("山田 太郎", "Taro Yamada")}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold" style={{ color: "var(--ink2)" }}>
                    <T ja="メールアドレス" en="Email" />
                  </label>
                  <input
                    type="email"
                    className="input"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold" style={{ color: "var(--ink2)" }}>
                    <T ja="お問い合わせ種別" en="Inquiry Type" />
                  </label>
                  <select
                    className="input"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option value="student">{t("学生", "Student")}</option>
                    <option value="company">{t("企業", "Company")}</option>
                    <option value="other">{t("その他", "Other")}</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold" style={{ color: "var(--ink2)" }}>
                    <T ja="件名" en="Subject" />
                  </label>
                  <input
                    type="text"
                    className="input"
                    placeholder={t("お問い合わせ内容", "Inquiry subject")}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold" style={{ color: "var(--ink2)" }}>
                    <T ja="メッセージ" en="Message" />
                  </label>
                  <textarea
                    className="input min-h-[120px]"
                    placeholder={t("お問い合わせ内容をご記入ください", "Please describe your inquiry")}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-accent w-full">
                  <T ja="送信する" en="Send Message" />
                  <span className="arrow">→</span>
                </button>
              </form>
            </div>

            {/* Right: Contact Info */}
            <div>
              <div className="mb-6 rounded-[14px] border p-6" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
                <h3 className="mb-4 text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  <T ja="連絡先情報" en="Contact Information" />
                </h3>
                <div className="flex flex-col gap-3 text-sm">
                  <div>
                    <div className="mb-1 font-semibold" style={{ color: "var(--ink2)" }}>
                      <T ja="一般お問い合わせ" en="General Inquiries" />
                    </div>
                    <a href="mailto:contact@senpaicareer.com" style={{ color: "var(--color-accent)" }}>
                      contact@senpaicareer.com
                    </a>
                  </div>
                  <div>
                    <div className="mb-1 font-semibold" style={{ color: "var(--ink2)" }}>
                      <T ja="企業のお問い合わせ" en="Business Inquiries" />
                    </div>
                    <a href="mailto:business@senpaicareer.com" style={{ color: "var(--color-accent)" }}>
                      business@senpaicareer.com
                    </a>
                  </div>
                  <div>
                    <div className="mb-1 font-semibold" style={{ color: "var(--ink2)" }}>
                      <T ja="サポート" en="Support" />
                    </div>
                    <a href="mailto:support@senpaicareer.com" style={{ color: "var(--color-accent)" }}>
                      support@senpaicareer.com
                    </a>
                  </div>
                  <div className="mt-2 pt-3 border-t" style={{ borderColor: "var(--brd)" }}>
                    <div className="mb-1 font-semibold" style={{ color: "var(--ink2)" }}>
                      <T ja="所在地" en="Address" />
                    </div>
                    <p style={{ color: "var(--ink3)" }}>
                      <T ja="[住所を入力してください]" en="[Address to be added]" />
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[14px] border p-6" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
                <h3 className="mb-2 text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  <T ja="よくある質問" en="FAQ" />
                </h3>
                <p className="mb-3 text-sm" style={{ color: "var(--ink3)" }}>
                  <T
                    ja="お問い合わせ前に、FAQページもご確認ください。"
                    en="Before contacting us, check our FAQ page for quick answers."
                  />
                </p>
                <Link href="/faq" className="btn btn-ghost w-full">
                  <T ja="FAQを見る" en="View FAQ" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
