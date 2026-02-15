/**
 * ═══════════════════════════════════════════════════════════════
 * BUSINESS - PRICING PAGE
 * ═══════════════════════════════════════════════════════════════
 *
 * URL: /business/pricing
 *
 * Business-focused pricing page showing only company pricing
 * with navy branding and consistent business styling
 */

import PageContainer from "../../components/shared/PageContainer";
import SectionHeader from "../../components/shared/SectionHeader";
import FAQAccordion from "../../components/shared/FAQAccordion";
import { T } from "../../components/providers/LanguageProvider";
import { businessFeatures, talentPoolStats, obSlotTiers } from "../../data/content";
import Link from "next/link";

export default function BusinessPricingPage() {
  const pricingFAQs = [
    {
      q: "企業プランの料金はいくらですか？",
      qE: "How much does the business plan cost?",
      a: "企業プランは、企業規模やニーズに応じたカスタム料金となっております。詳細はお問い合わせください。",
      aE: "Business plans are custom priced based on company size and needs. Please contact us for details.",
      category: "companies" as const
    },
    {
      q: "無料トライアルはありますか？",
      qE: "Is there a free trial?",
      a: "企業様向けに無料デモをご用意しております。実際のプラットフォームをお試しいただけます。",
      aE: "We offer free demos for companies. You can try the actual platform before committing.",
      category: "companies" as const
    },
    {
      q: "契約期間の縛りはありますか？",
      qE: "Are there any contract commitments?",
      a: "月額プランと年間プランをご用意しております。詳細はお問い合わせください。",
      aE: "We offer both monthly and annual plans. Contact us for details.",
      category: "companies" as const
    },
    {
      q: "どのくらいの学生にリーチできますか？",
      qE: "How many students can we reach?",
      a: "現在、東京大学・慶應義塾大学・早稲田大学を中心に500名以上の優秀な留学生が登録しています。",
      aE: "We currently have 500+ talented international students from UTokyo, Keio, and Waseda.",
      category: "companies" as const
    },
    {
      q: "導入までにどのくらいの時間がかかりますか？",
      qE: "How long does it take to get started?",
      a: "お申し込みから1週間程度で導入が完了します。専任サポートチームが導入をサポートいたします。",
      aE: "Setup typically takes about 1 week from sign-up. Our dedicated team will support your onboarding.",
      category: "companies" as const
    },
    {
      q: "公式OB枠とは何ですか？",
      qE: "What are Official OB Slots?",
      a: "公式OB枠は、自社のOB/OGを「公式認証」するための枠です。認証されたOB/OGは学生の検索結果で公式バッジが表示され、信頼度が向上します。2カ月ごとに担当の入替が可能です。",
      aE: "Official OB Slots let you verify your company's OB/OG. Verified alumni display an official badge in student search results, boosting trust. You can rotate assigned members every 2 months.",
      category: "companies" as const
    },
    {
      q: "OB枠の担当入替はどのように行いますか？",
      qE: "How does OB slot rotation work?",
      a: "各スロットには2カ月のロック期間があります。期間終了後、ダッシュボードから別のOB/OG社員に入替できます。入替後、新しい担当に公式バッジが付与されます。",
      aE: "Each slot has a 2-month lock period. After it ends, you can swap to a different OB/OG employee from your dashboard. The new assignee receives the verified badge immediately.",
      category: "companies" as const
    },
  ];

  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      {/* Navy branding applied by business layout */}

      <PageContainer maxWidth="180">
        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-180">
            {/* Header */}
            <div
              className="mb-4 flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-widest"
              style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)" }}
            >
              <span className="inline-block h-[1.5px] w-4" style={{ background: "var(--color-accent)" }} />
              Pricing
            </div>

            <SectionHeader
              title={{ ja: "企業向け料金プラン", en: "Business Pricing" }}
              subtitle={{
                ja: "企業規模やニーズに応じた柔軟なプラン。まずはお気軽にご相談ください。",
                en: "Flexible plans for companies of all sizes. Contact us for a custom quote."
              }}
            />

            {/* Main Pricing Card */}
            <div className="mb-16 mt-12">
              <div
                className="rounded-[14px] border p-10 text-center"
                style={{ borderColor: "var(--brd)", background: "var(--card)" }}
              >
                <div className="mb-3 text-[18px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  <T ja="企業プラン" en="Business Plan" />
                </div>
                <div
                  className="mb-2 text-[42px] font-extrabold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)" }}
                >
                  <T ja="お問い合わせ" en="Contact Us" />
                </div>
                <div className="mb-6 text-[14px]" style={{ color: "var(--ink2)" }}>
                  <T
                    ja="企業規模やご利用プランに応じて、最適なプランをご提案いたします。"
                    en="We'll propose an optimal plan based on your company size and needs."
                  />
                </div>

                {/* Features List */}
                <div className="mb-8 grid gap-3 text-left md:grid-cols-2">
                  {businessFeatures.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-[13px]">
                      <span style={{ color: "var(--green)", fontSize: "16px" }}>✓</span>
                      <div>
                        <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                          <T ja={feature.ja} en={feature.en} />
                        </strong>
                        <div style={{ color: "var(--ink3)" }}>
                          <T ja={feature.jaD} en={feature.enD} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

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

            {/* OB Slot Plans */}
            <div className="mb-16">
              <h3 className="mb-2 text-center text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
                <T ja="公式OB枠プラン" en="Official OB Slot Plans" />
              </h3>
              <p className="mx-auto mb-8 max-w-120 text-center text-[13px]" style={{ color: "var(--ink3)" }}>
                <T
                  ja="自社のOB/OGを公式認証して、学生からの信頼度を高めましょう。2カ月ごとに担当の入替が可能です。"
                  en="Verify your OB/OG to boost trust with students. Bi-monthly rotation of assigned members is supported."
                />
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {obSlotTiers.map((tier, i) => (
                  <div
                    key={i}
                    className="relative rounded-[14px] border p-6"
                    style={{
                      borderColor: tier.popular ? "var(--color-accent)" : "var(--brd)",
                      background: "var(--card)",
                      borderWidth: tier.popular ? 2 : 1,
                    }}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-[11px] font-bold text-white" style={{ background: "var(--color-accent)" }}>
                        <T ja="人気" en="Popular" />
                      </div>
                    )}
                    <div className="mb-1 text-[14px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
                      <T ja={tier.name.ja} en={tier.name.en} />
                    </div>
                    <div className="mb-1 text-[36px] font-extrabold" style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)" }}>
                      {tier.slots}<span className="text-[14px] font-semibold" style={{ color: "var(--ink3)" }}> <T ja="枠" en="slots" /></span>
                    </div>
                    <div className="mb-4 text-[12px]" style={{ color: "var(--ink3)" }}>
                      <T ja="お問い合わせ" en="Contact for pricing" />
                    </div>
                    <ul className="mb-5 flex flex-col gap-2">
                      {tier.features.map((f, fi) => (
                        <li key={fi} className="flex items-start gap-2 text-[13px]">
                          <span style={{ color: "var(--green)", fontSize: "14px" }}>✓</span>
                          <span style={{ color: "var(--ink2)" }}><T ja={f.ja} en={f.en} /></span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className={`btn w-full justify-center ${tier.popular ? "btn-accent" : "btn-ghost"}`}>
                      <T ja="お問い合わせ" en="Contact Sales" />
                      <span className="arrow">→</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Talent Pool Stats */}
            <div className="mb-16">
              <h3 className="mb-6 text-center text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
                <T ja="質の高い人材プール" en="High-Quality Talent Pool" />
              </h3>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {talentPoolStats.map((stat, i) => (
                  <div key={i} className="rounded-[14px] border p-6 text-center" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
                    <div
                      className="mb-2 text-[32px] font-extrabold"
                      style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-[13px] font-medium" style={{ color: "var(--ink2)" }}>
                      <T ja={stat.label.ja} en={stat.label.en} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div className="mb-16">
              <h3 className="mb-6 text-center text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
                <T ja="プランに含まれるもの" en="What's Included" />
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-[14px] border p-6" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
                  <div className="mb-3 text-[15px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    <T ja="🚀 プラットフォーム機能" en="🚀 Platform Features" />
                  </div>
                  <ul className="flex flex-col gap-2 text-[13px]" style={{ color: "var(--ink3)" }}>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--green)" }}>•</span>
                      <T ja="採用パイプライン管理ダッシュボード" en="Recruitment pipeline dashboard" />
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--green)" }}>•</span>
                      <T ja="候補者データベースへの無制限アクセス" en="Unlimited candidate database access" />
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--green)" }}>•</span>
                      <T ja="OB社員管理機能" en="OB employee management" />
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--green)" }}>•</span>
                      <T ja="メッセージング機能" en="Built-in messaging" />
                    </li>
                  </ul>
                </div>

                <div className="rounded-[14px] border p-6" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
                  <div className="mb-3 text-[15px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    <T ja="📊 分析とサポート" en="📊 Analytics & Support" />
                  </div>
                  <ul className="flex flex-col gap-2 text-[13px]" style={{ color: "var(--ink3)" }}>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--green)" }}>•</span>
                      <T ja="採用効果レポート" en="Recruitment effectiveness reports" />
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--green)" }}>•</span>
                      <T ja="エンゲージメント分析" en="Engagement analytics" />
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--green)" }}>•</span>
                      <T ja="専任カスタマーサクセスマネージャー" en="Dedicated customer success manager" />
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--green)" }}>•</span>
                      <T ja="優先サポート" en="Priority support" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pricing FAQ */}
            <div>
              <h3 className="mb-6 text-center text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
                <T ja="料金に関するFAQ" en="Pricing FAQ" />
              </h3>
              <div className="flex flex-col gap-3">
                {pricingFAQs.map((faq, i) => (
                  <FAQAccordion key={i} faq={faq} />
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div
              className="mt-16 rounded-[14px] border p-8 text-center"
              style={{
                borderColor: "var(--brd)",
                background: "linear-gradient(135deg, var(--accent-soft2) 0%, var(--accent-soft) 100%)"
              }}
            >
              <h3 className="mb-3 text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                <T ja="まずは無料デモから" en="Start with a Free Demo" />
              </h3>
              <p className="mx-auto mb-6 max-w-120 text-sm" style={{ color: "var(--ink2)" }}>
                <T
                  ja="プラットフォームの実際の動作を確認し、貴社のニーズに合わせたプランをご提案します。"
                  en="See the platform in action and get a custom plan tailored to your needs."
                />
              </p>
              <Link href="/contact" className="btn btn-accent">
                <T ja="無料デモを予約" en="Book Free Demo" />
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </section>
      </PageContainer>
    </div>
  );
}
