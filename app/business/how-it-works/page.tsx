/**
 * ═══════════════════════════════════════════════════════════════
 * BUSINESS - HOW IT WORKS PAGE
 * ═══════════════════════════════════════════════════════════════
 *
 * URL: /business/how-it-works
 *
 * Business-focused "How It Works" page showing only company steps
 * with navy branding and consistent business styling
 */

import PageContainer from "../../components/shared/PageContainer";
import SectionHeader from "../../components/shared/SectionHeader";
import ImagePlaceholder from "../../components/shared/ImagePlaceholder";
import { T } from "../../components/providers/LanguageProvider";
import { businessDetailedSteps } from "../../data/content";
import Link from "next/link";

export default function BusinessHowItWorksPage() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      {/* Navy branding applied by business layout */}

      <PageContainer maxWidth="275">
        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-275">
            {/* Header */}
            <div
              className="mb-4 flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-widest"
              style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)" }}
            >
              <span className="inline-block h-[1.5px] w-4" style={{ background: "var(--color-accent)" }} />
              business.senpaicareer.com
            </div>

            <SectionHeader
              title={{ ja: "企業向け利用ガイド", en: "How It Works for Companies" }}
              subtitle={{
                ja: "4つのステップで採用パイプラインを構築し、優秀な留学生と出会う",
                en: "Build your recruitment pipeline in 4 steps and connect with top international talent"
              }}
            />

            {/* For Companies Section */}
            <div className="mb-16 mt-12">
              <div className="flex flex-col gap-12">
                {businessDetailedSteps.map((step, i) => (
                  <div key={i} className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-center">
                    {/* Image (left on even, right on odd) */}
                    {i % 2 === 0 && (
                      <div className="order-1 md:order-none">
                        <ImagePlaceholder
                          width={400}
                          height={300}
                          label={step.screenshot || `Step ${i + 1}`}
                          variant="screenshot"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className={i % 2 === 0 ? "order-2 md:order-none" : ""}>
                      <div className="mb-3 text-3xl font-extrabold" style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)", opacity: 0.3 }}>
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="mb-2 text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                        <T ja={step.ja} en={step.en} />
                      </h3>
                      <p className="mb-3 text-sm font-semibold" style={{ color: "var(--ink2)" }}>
                        <T ja={step.jaD} en={step.enD} />
                      </p>
                      <div className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "var(--ink3)" }}>
                        <T ja={step.jaLong} en={step.enLong} />
                      </div>
                    </div>

                    {/* Image (right on odd) */}
                    {i % 2 === 1 && (
                      <div>
                        <ImagePlaceholder
                          width={400}
                          height={300}
                          label={step.screenshot || `Step ${i + 1}`}
                          variant="screenshot"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Key Benefits Section */}
            <div className="mb-16">
              <h3 className="mb-6 text-center text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                <T ja="なぜOB/OG訪問が採用に効くのか" en="Why OB Visits Work for Recruitment" />
              </h3>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-[14px] border p-6" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
                  <div className="emoji mb-3">🤝</div>
                  <div className="mb-2 text-[15px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    <T ja="信頼関係の構築" en="Build Trust" />
                  </div>
                  <div className="text-[13px] leading-relaxed" style={{ color: "var(--ink3)" }}>
                    <T
                      ja="OB訪問を通じて、学生は企業の文化を深く理解し、親近感を持ちます。"
                      en="Through OB visits, students deeply understand your culture and feel connected."
                    />
                  </div>
                </div>

                <div className="rounded-[14px] border p-6" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
                  <div className="emoji mb-3">🎯</div>
                  <div className="mb-2 text-[15px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    <T ja="ターゲット採用" en="Targeted Hiring" />
                  </div>
                  <div className="text-[13px] leading-relaxed" style={{ color: "var(--ink3)" }}>
                    <T
                      ja="東大・慶應・早稲田の優秀な留学生に直接リーチできます。"
                      en="Directly reach top international students from Todai, Keio, and Waseda."
                    />
                  </div>
                </div>

                <div className="rounded-[14px] border p-6" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
                  <div className="emoji mb-3">📊</div>
                  <div className="mb-2 text-[15px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    <T ja="効率的な採用" en="Efficient Process" />
                  </div>
                  <div className="text-[13px] leading-relaxed" style={{ color: "var(--ink3)" }}>
                    <T
                      ja="OB訪問から内定までを一元管理し、採用効率を大幅に改善。"
                      en="Manage from OB visit to offer in one place to improve efficiency."
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Video Tutorial Section (Placeholder) */}
            <div className="mb-16 text-center">
              <h3 className="mb-4 text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                <T ja="📹 プラットフォームツアー" en="📹 Platform Tour" />
              </h3>
              <div className="mx-auto" style={{ maxWidth: "700px" }}>
                <ImagePlaceholder
                  width={700}
                  height={400}
                  label="Platform Demo (Coming Soon)"
                  variant="illustration"
                />
              </div>
              <p className="mt-4 text-sm" style={{ color: "var(--ink3)" }}>
                <T ja="プラットフォームデモは近日公開予定です" en="Platform demo coming soon" />
              </p>
            </div>

            {/* CTA Section */}
            <div
              className="rounded-[14px] border p-8 text-center"
              style={{
                borderColor: "var(--brd)",
                background: "linear-gradient(135deg, var(--accent-soft2) 0%, var(--accent-soft) 100%)"
              }}
            >
              <h3 className="mb-3 text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                <T ja="今すぐ始めましょう" en="Get Started Today" />
              </h3>
              <p className="mx-auto mb-6 max-w-120 text-sm" style={{ color: "var(--ink2)" }}>
                <T
                  ja="まずはお気軽にお問い合わせください。導入をサポートいたします。"
                  en="Contact us to get started. We'll support you through the onboarding process."
                />
              </p>
              <div className="flex flex-col gap-2.5 items-center justify-center sm:flex-row">
                <Link href="/contact" className="btn btn-accent">
                  <T ja="お問い合わせ" en="Contact Sales" />
                  <span className="arrow">→</span>
                </Link>
                <Link href="/business/signup" className="btn btn-ghost">
                  <T ja="企業として登録" en="Register Company" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </PageContainer>
    </div>
  );
}
