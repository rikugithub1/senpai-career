import PageContainer from "../components/shared/PageContainer";
import { T } from "../components/providers/LanguageProvider";

/**
 * Privacy Policy Page
 *
 * Legal template with placeholder content
 * Last Updated: [To be determined]
 */
export default function PrivacyPage() {
  const sections = [
    { id: "intro", ja: "はじめに", en: "Introduction" },
    { id: "collect", ja: "収集する情報", en: "Information We Collect" },
    { id: "use", ja: "情報の利用", en: "How We Use Your Information" },
    { id: "sharing", ja: "情報の共有", en: "Data Sharing & Disclosure" },
    { id: "retention", ja: "データ保持", en: "Data Retention" },
    { id: "rights", ja: "あなたの権利", en: "Your Rights" },
    { id: "cookies", ja: "Cookie", en: "Cookies & Tracking" },
    { id: "security", ja: "セキュリティ", en: "Security Measures" },
    { id: "international", ja: "国際データ転送", en: "International Data Transfers" },
    { id: "children", ja: "子どものプライバシー", en: "Children's Privacy" },
    { id: "changes", ja: "ポリシーの変更", en: "Changes to This Policy" },
    { id: "contact", ja: "お問い合わせ", en: "Contact" },
  ];

  return (
    <PageContainer maxWidth="180">
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-180">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              <T ja="プライバシーポリシー" en="Privacy Policy" />
            </h1>
            <p className="text-sm" style={{ color: "var(--ink3)" }}>
              <T ja="最終更新日: 2026年2月23日" en="Last Updated: February 23, 2026" />
            </p>
          </div>

          {/* Table of Contents */}
          <div className="mb-8 rounded-[14px] border p-5" style={{ borderColor: "var(--brd)", background: "var(--bg2)" }}>
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wide" style={{ color: "var(--ink2)" }}>
              <T ja="目次" en="Table of Contents" />
            </h2>
            <div className="grid gap-2 text-sm md:grid-cols-2">
              {sections.map((section, i) => (
                <a
                  key={i}
                  href={`#${section.id}`}
                  className="hover:underline"
                  style={{ color: "var(--color-accent)" }}
                >
                  {i + 1}. <T ja={section.ja} en={section.en} />
                </a>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-sm max-w-none">
            {sections.map((section, i) => (
              <div key={i} id={section.id} className="mb-8">
                <h2 className="mb-3 text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  {i + 1}. <T ja={section.ja} en={section.en} />
                </h2>
                <div className="text-sm leading-relaxed" style={{ color: "var(--ink2)" }}>
                  <p className="mb-3">
                    <T
                      ja="[このセクションの内容を記入してください。個人情報保護法、GDPR等に準拠した内容を含める必要があります。]"
                      en="[Content for this section to be added. Should include appropriate privacy disclosures compliant with Japanese privacy law, GDPR, etc.]"
                    />
                  </p>
                  <p>
                    <T
                      ja="[データ収集方法、利用目的、第三者提供、ユーザーの権利などを詳しく記載してください。]"
                      en="[Include details on data collection methods, purposes, third-party sharing, user rights, etc.]"
                    />
                  </p>
                </div>
              </div>
            ))}

            {/* Contact Section */}
            <div className="mt-12 rounded-[14px] border p-6" style={{ borderColor: "var(--brd)", background: "var(--accent-soft)" }}>
              <h3 className="mb-2 text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
                <T ja="プライバシーに関するお問い合わせ" en="Privacy Questions?" />
              </h3>
              <p className="mb-3 text-sm" style={{ color: "var(--ink2)" }}>
                <T
                  ja="プライバシーポリシーに関するご質問や、個人情報の取り扱いについてのお問い合わせは、こちらまでご連絡ください。"
                  en="For questions about this privacy policy or how we handle your personal information, please contact us."
                />
              </p>
              <a href="mailto:privacy@senpaicareer.com" style={{ color: "var(--color-accent)", fontWeight: 600 }}>
                privacy@senpaicareer.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
