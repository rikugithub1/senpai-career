/**
 * OB/OG - HOW IT WORKS PAGE
 *
 * URL: /obog/how-it-works
 *
 * OB/OG-focused "How It Works" page with amber branding
 */

import PageContainer from "../../components/shared/PageContainer";
import SectionHeader from "../../components/shared/SectionHeader";
import ImagePlaceholder from "../../components/shared/ImagePlaceholder";
import Icon from "../../components/shared/Icon";
import { T } from "../../components/providers/LanguageProvider";
import { obogDetailedSteps } from "../../data/content";
import Link from "next/link";

export default function ObogHowItWorksPage() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }} data-section="obog">
      <PageContainer maxWidth="275">
        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-275">
            {/* Header */}
            <div
              className="mb-4 flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-widest"
              style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)" }}
            >
              <span className="inline-block h-[1.5px] w-4" style={{ background: "var(--color-accent)" }} />
              <T ja="使い方ガイド" en="HOW IT WORKS" />
            </div>

            <SectionHeader
              title={{ ja: "OB/OG向け利用ガイド", en: "How It Works for OB/OG" }}
              subtitle={{
                ja: "3つのステップで簡単にOB/OG訪問を始められます",
                en: "Start receiving OB/OG visits in 3 simple steps"
              }}
            />

            {/* Steps */}
            <div className="mb-16 mt-12">
              <div className="flex flex-col gap-12">
                {obogDetailedSteps.map((step, i) => (
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
                      <div
                        className="mb-3 text-3xl font-extrabold"
                        style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)", opacity: 0.5 }}
                      >
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
                        <div
                          className="rounded-lg p-4"
                          style={{
                            background: "var(--accent-soft)",
                            borderLeft: "3px solid var(--color-accent)",
                          }}
                        >
                          <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--color-accent)" }}>
                            <Icon name="lightbulb" size={14} />
                            <T ja="ポイント" en="Tips" />
                          </div>
                          <ul className="flex flex-col gap-1.5 text-sm">
                            {step.tips.map((tip, j) => (
                              <li key={j} className="flex items-start gap-2">
                                <span className="mt-0.5 shrink-0" style={{ color: "var(--color-accent)" }}>
                                  <Icon name="chevron-right" size={14} />
                                </span>
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

            {/* Benefits */}
            <div className="mb-16">
              <h3 className="mb-6 text-center text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                <T ja="OB/OGとして活動するメリット" en="Benefits of Being an OB/OG" />
              </h3>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-[14px] border p-6" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
                  <div className="icon-box mb-3"><Icon name="star" size={18} /></div>
                  <div className="mb-2 text-[15px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    <T ja="キャリアの棚卸し" en="Reflect on Your Career" />
                  </div>
                  <div className="text-[13px] leading-relaxed" style={{ color: "var(--ink3)" }}>
                    <T
                      ja="後輩の質問に答えることで、自分自身のキャリアを振り返る良い機会になります。日々の仕事では気づかない自分の強みや経験の価値を再発見できるでしょう。"
                      en="Answering questions from younger students gives you a great opportunity to reflect on your own career. You may rediscover strengths and the value of experiences you overlook in day-to-day work."
                    />
                  </div>
                </div>
                <div className="rounded-[14px] border p-6" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
                  <div className="icon-box mb-3"><Icon name="users" size={18} /></div>
                  <div className="mb-2 text-[15px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    <T ja="ネットワーク拡大" en="Expand Your Network" />
                  </div>
                  <div className="text-[13px] leading-relaxed" style={{ color: "var(--ink3)" }}>
                    <T
                      ja="様々なバックグラウンドを持つコミュニティユーザーとのつながりが生まれます。異なる視点や文化に触れることで、自分自身の視野も広がります。"
                      en="Build connections with community users from diverse backgrounds. Exposure to different perspectives and cultures broadens your own horizons as well."
                    />
                  </div>
                </div>
                <div className="rounded-[14px] border p-6" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
                  <div className="icon-box mb-3"><Icon name="badge-check" size={18} /></div>
                  <div className="mb-2 text-[15px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    <T ja="公式認証バッジ" en="Official Verification Badge" />
                  </div>
                  <div className="text-[13px] leading-relaxed" style={{ color: "var(--ink3)" }}>
                    <T
                      ja="企業から公式OB/OGとして認証されると、プロフィールに公式バッジが表示されます。バッジにより検索結果で上位に表示され、より多くのコミュニティユーザーとつながれます。"
                      en="When verified by your company, an official badge appears on your profile. The badge boosts your ranking in search results, helping you connect with more community users."
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div
              className="rounded-[14px] border p-8 text-center"
              style={{
                borderColor: "var(--brd)",
                background: "linear-gradient(135deg, var(--accent-soft2) 0%, var(--accent-soft) 100%)"
              }}
            >
              <h3 className="mb-3 text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                <T ja="OB/OGとして後輩を応援しよう" en="Support the Next Generation as OB/OG" />
              </h3>
              <p className="mx-auto mb-6 max-w-120 text-sm" style={{ color: "var(--ink2)" }}>
                <T
                  ja="完全無料。2分で登録完了。あなたの経験が後輩の力になります。"
                  en="Completely free. Sign up in 2 minutes. Your experience can make a difference."
                />
              </p>
              <div className="flex flex-col items-center justify-center gap-2.5 sm:flex-row">
                <Link href="/obog/signup" className="btn btn-accent">
                  <T ja="OB/OGとして登録" en="Register as OB/OG" />
                  <span className="arrow">→</span>
                </Link>
                <Link href="/obog/login" className="btn btn-ghost">
                  <T ja="ログイン" en="Log In" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </PageContainer>
    </div>
  );
}
