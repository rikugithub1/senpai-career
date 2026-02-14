import PageContainer from "../components/shared/PageContainer";
import SectionHeader from "../components/shared/SectionHeader";
import FAQAccordion from "../components/shared/FAQAccordion";
import { T } from "../components/providers/LanguageProvider";
import Link from "next/link";

/**
 * Pricing Page (Student-focused)
 *
 * Shows pricing for students and OB/OG (alumni) - completely free
 */
export default function PricingPage() {
  const pricingFAQs = [
    {
      q: "学生は本当に無料ですか？",
      qE: "Is it really free for students and OB/OG (alumni)?",
      a: "はい、学生・OB/OGの方は完全無料です。すべての機能を無制限でご利用いただけます。クレジットカードの登録も不要です。",
      aE: "Yes, completely free for students and OB/OG (alumni). All features unlimited, no credit card required.",
      category: "students" as const
    },
    {
      q: "どの大学の学生が対象ですか？",
      qE: "Which universities are supported?",
      a: "現在は東京大学・慶應義塾大学・早稲田大学の留学生を中心にサービスを展開しています。今後、対象校を順次拡大予定です。",
      aE: "We currently focus on international students from UTokyo, Keio, and Waseda. We plan to expand to more universities soon.",
      category: "students" as const
    },
    {
      q: "クレジットカードの登録は必要ですか？",
      qE: "Do I need to register a credit card?",
      a: "いいえ、学生・OB/OGの方はクレジットカードの登録は一切不要です。完全無料でご利用いただけます。",
      aE: "No, students and OB/OG don't need to register a credit card. It's completely free.",
      category: "students" as const
    },
    {
      q: "今後も無料で使い続けられますか？",
      qE: "Will it remain free in the future?",
      a: "はい、学生・OB/OGの方向けの基本機能は永久無料です。安心してご利用ください。",
      aE: "Yes, core features for students and OB/OG will remain free forever.",
      category: "students" as const
    },
  ];

  return (
    <PageContainer maxWidth="180">
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-180">
          {/* Header */}
          <SectionHeader
            title={{ ja: "完全無料で使える", en: "Completely Free" }}
            subtitle={{ ja: "学生・OB/OGの方は永久無料。すべての機能が使い放題。", en: "Free forever for students and OB/OG. All features unlimited." }}
          />

          {/* Main Pricing Card */}
          <div className="mb-16 mt-12">
            <div
              className="mx-auto max-w-140 rounded-[14px] border p-10 text-center"
              style={{ borderColor: "var(--brd)", background: "var(--card)" }}
            >
              <div className="mb-3 text-[18px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
                <T ja="学生・OB/OGプラン" en="Student & OB/OG Plan" />
              </div>
              <div
                className="mb-2 text-[56px] font-extrabold"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)" }}
              >
                ¥0
              </div>
              <div className="mb-8 text-[14px]" style={{ color: "var(--ink2)" }}>
                <T ja="永久無料" en="Free Forever" />
              </div>

              {/* Features List */}
              <div className="mb-8 grid gap-3 text-left md:grid-cols-2">
                {[
                  { ja: "OB/OG検索・予約", en: "Search & book OB visits" },
                  { ja: "メッセージ無制限", en: "Unlimited messaging" },
                  { ja: "就活ガイド", en: "Career guides" },
                  { ja: "ES添削サポート", en: "ES review support" },
                  { ja: "業界研究資料", en: "Industry research" },
                  { ja: "面接対策", en: "Interview preparation" },
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-[13px]">
                    <span style={{ color: "var(--green)", fontSize: "16px" }}>✓</span>
                    <T ja={feature.ja} en={feature.en} />
                  </div>
                ))}
              </div>

              <Link href="/community/signup" className="btn btn-accent">
                <T ja="無料で登録する" en="Sign Up Free" />
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>

          {/* Why Free Section */}
          <div className="mb-16">
            <h3 className="mb-6 text-center text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
              <T ja="なぜ無料なのか？" en="Why is it free?" />
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-[14px] border p-6 text-center" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
                <div className="emoji mb-3">🎓</div>
                <div className="mb-2 text-[15px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  <T ja="学生支援が目的" en="Supporting Students" />
                </div>
                <div className="text-[13px] leading-relaxed" style={{ color: "var(--ink3)" }}>
                  <T
                    ja="留学生の就活を支援するため、学生向け機能は永久無料です。"
                    en="We support international students' job hunt by keeping student features free forever."
                  />
                </div>
              </div>

              <div className="rounded-[14px] border p-6 text-center" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
                <div className="emoji mb-3">🏢</div>
                <div className="mb-2 text-[15px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  <T ja="企業からの収益" en="Business Revenue" />
                </div>
                <div className="text-[13px] leading-relaxed" style={{ color: "var(--ink3)" }}>
                  <T
                    ja="企業向けプランの収益で、学生向けサービスを運営しています。"
                    en="Revenue from business plans allows us to keep student services free."
                  />
                </div>
              </div>

              <div className="rounded-[14px] border p-6 text-center" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
                <div className="emoji mb-3">🌏</div>
                <div className="mb-2 text-[15px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  <T ja="ミッション重視" en="Mission-Driven" />
                </div>
                <div className="text-[13px] leading-relaxed" style={{ color: "var(--ink3)" }}>
                  <T
                    ja="留学生と企業をつなぐことが私たちの使命です。"
                    en="Our mission is to connect international students with companies."
                  />
                </div>
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
        </div>
      </section>
    </PageContainer>
  );
}
