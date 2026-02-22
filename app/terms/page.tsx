import PageContainer from "../components/shared/PageContainer";
import { T } from "../components/providers/LanguageProvider";

/**
 * Terms of Service Page
 *
 * Legal template with placeholder content
 * Last Updated: [To be determined]
 */
export default function TermsPage() {
  const sections = [
    { id: "intro", ja: "はじめに", en: "Introduction" },
    { id: "eligibility", ja: "利用資格", en: "Eligibility" },
    { id: "accounts", ja: "アカウント", en: "User Accounts" },
    { id: "use", ja: "利用規約", en: "Acceptable Use" },
    { id: "students", ja: "学生向け規約", en: "Terms for Students and OB/OG (Alumni)" },
    { id: "companies", ja: "企業向け規約", en: "Terms for Companies" },
    { id: "privacy", ja: "プライバシー", en: "Privacy & Data" },
    { id: "ip", ja: "知的財産", en: "Intellectual Property" },
    { id: "liability", ja: "免責事項", en: "Limitation of Liability" },
    { id: "law", ja: "準拠法", en: "Governing Law" },
    { id: "contact", ja: "お問い合わせ", en: "Contact" },
  ];

  return (
    <PageContainer maxWidth="180">
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-180">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              <T ja="利用規約" en="Terms of Service" />
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
                      ja="[このセクションの内容を記入してください。法的文書として適切な内容を含める必要があります。]"
                      en="[Content for this section to be added. Should include appropriate legal language for a Terms of Service agreement.]"
                    />
                  </p>
                  <p>
                    <T
                      ja="[詳細な規約内容、ユーザーの権利と義務、サービスの利用条件などを記載してください。]"
                      en="[Include detailed terms, user rights and obligations, service usage conditions, etc.]"
                    />
                  </p>
                </div>
              </div>
            ))}

            {/* Contact Section */}
            <div className="mt-12 rounded-[14px] border p-6" style={{ borderColor: "var(--brd)", background: "var(--accent-soft)" }}>
              <h3 className="mb-2 text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
                <T ja="お問い合わせ" en="Questions About These Terms?" />
              </h3>
              <p className="mb-3 text-sm" style={{ color: "var(--ink2)" }}>
                <T
                  ja="利用規約に関するご質問がございましたら、お気軽にお問い合わせください。"
                  en="If you have questions about these terms, please contact us."
                />
              </p>
              <a href="mailto:legal@senpaicareer.com" style={{ color: "var(--color-accent)", fontWeight: 600 }}>
                legal@senpaicareer.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
