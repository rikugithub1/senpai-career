import PageContainer from "../components/shared/PageContainer";
import SectionHeader from "../components/shared/SectionHeader";
import ImagePlaceholder from "../components/shared/ImagePlaceholder";
import { T } from "../components/providers/LanguageProvider";
import { studentDetailedSteps } from "../data/content";
import Link from "next/link";

/**
 * How It Works Page (Student-focused)
 *
 * Detailed explanation of the process for students and OB/OG
 */
export default function HowItWorksPage() {
  return (
    <PageContainer maxWidth="275">
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-275">
          {/* Header */}
          <SectionHeader
            label="HOW IT WORKS"
            title={{ ja: "Senpai Careerの使い方", en: "How Senpai Career Works" }}
            subtitle={{ ja: "3つのステップで先輩とつながる", en: "Connect with senpai in 3 simple steps" }}
          />

          {/* For Students and OB/OG (Alumni) Section */}
          <div className="mb-20 mt-12">
            <div className="flex flex-col gap-12">
              {studentDetailedSteps.map((step, i) => (
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
                    <div className="mb-4 text-sm leading-relaxed whitespace-pre-line" style={{ color: "var(--ink3)" }}>
                      <T ja={step.jaLong} en={step.enLong} />
                    </div>
                    {step.tips && (
                      <div className="rounded-lg p-4" style={{ background: "var(--accent-soft)" }}>
                        <div className="mb-2 text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--color-accent)" }}>
                          <T ja="💡 Tips" en="💡 Tips" />
                        </div>
                        <ul className="flex flex-col gap-1.5 text-sm">
                          {step.tips.map((tip, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <span style={{ color: "var(--color-accent)" }}>•</span>
                              <T ja={tip.ja} en={tip.en} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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

          {/* Video Tutorial Section (Placeholder) */}
          <div className="mb-16 text-center">
            <h3 className="mb-4 text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              <T ja="📹 ビデオチュートリアル" en="📹 Video Tutorial" />
            </h3>
            <div className="mx-auto" style={{ maxWidth: "700px" }}>
              <ImagePlaceholder
                width={700}
                height={400}
                label="Video Tutorial (Coming Soon)"
                variant="illustration"
              />
            </div>
            <p className="mt-4 text-sm" style={{ color: "var(--ink3)" }}>
              <T ja="動画チュートリアルは近日公開予定です" en="Video tutorial coming soon" />
            </p>
          </div>

          {/* CTA Section */}
          <div className="rounded-[14px] border p-8 text-center" style={{ borderColor: "var(--brd)", background: "var(--bg2)" }}>
            <h3 className="mb-3 text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              <T ja="今すぐ始めましょう" en="Get Started Today" />
            </h3>
            <p className="mx-auto mb-6 max-w-120 text-sm" style={{ color: "var(--ink3)" }}>
              <T
                ja="登録は無料。先輩とつながり、あなたのキャリアを切り拓きましょう。"
                en="Sign up for free. Connect with senpai and unlock your career."
              />
            </p>
            <Link href="/community/signup" className="btn btn-accent">
              <T ja="無料で登録する" en="Sign Up Free" />
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
