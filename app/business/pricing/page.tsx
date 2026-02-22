/**
 * BUSINESS PRICING PAGE
 *
 * URL: /business/pricing
 *
 * New pricing model:
 * - Messaging: Pay-per-message ¥500, Base ¥10k/mo, Premium ¥50k/mo, Enterprise ¥100k/mo
 * - OB/OG Slots: 1st ¥80k/yr, 2nd ¥50k/yr, 3rd ¥30k/yr, 4th+ ¥20k/yr
 */

import PageContainer from "../../components/shared/PageContainer";
import SectionHeader from "../../components/shared/SectionHeader";
import FAQAccordion from "../../components/shared/FAQAccordion";
import Icon from "../../components/shared/Icon";
import { T } from "../../components/providers/LanguageProvider";
import Link from "next/link";

const messagingPlans = [
  {
    name: { ja: "従量課金", en: "Pay Per Message" },
    price: "¥500",
    unit: { ja: "/ 通", en: "/ message" },
    desc: { ja: "必要な時だけ。少量利用に最適。", en: "Only when needed. Perfect for low volume." },
    features: [
      { ja: "メッセージ単位で課金", en: "Charged per message" },
      { ja: "月額費用なし", en: "No monthly fee" },
      { ja: "基本的なプロフィール閲覧", en: "Basic profile access" },
    ],
    popular: false,
  },
  {
    name: { ja: "Base プラン", en: "Base Plan" },
    price: "¥10,000",
    unit: { ja: "/ 月", en: "/ month" },
    desc: { ja: "採用活動を始める企業に。", en: "For companies starting to recruit." },
    features: [
      { ja: "月30通のメッセージ送信", en: "30 messages/month" },
      { ja: "候補者管理ダッシュボード", en: "Candidate management dashboard" },
      { ja: "基本レポート", en: "Basic reports" },
    ],
    popular: false,
  },
  {
    name: { ja: "Premium プラン", en: "Premium Plan" },
    price: "¥50,000",
    unit: { ja: "/ 月", en: "/ month" },
    desc: { ja: "本格的な採用活動に。最も人気。", en: "For serious recruitment. Most popular." },
    features: [
      { ja: "月200通のメッセージ送信", en: "200 messages/month" },
      { ja: "採用パイプライン管理", en: "Recruitment pipeline management" },
      { ja: "詳細レポート・分析", en: "Detailed reports & analytics" },
      { ja: "優先サポート", en: "Priority support" },
    ],
    popular: true,
  },
  {
    name: { ja: "Enterprise プラン", en: "Enterprise Plan" },
    price: "¥100,000",
    unit: { ja: "/ 月", en: "/ month" },
    desc: { ja: "大規模採用に。フル機能。", en: "For large-scale hiring. Full features." },
    features: [
      { ja: "メッセージ無制限", en: "Unlimited messages" },
      { ja: "全機能フルアクセス", en: "Full access to all features" },
      { ja: "専任カスタマーサクセス", en: "Dedicated customer success manager" },
      { ja: "カスタムレポート", en: "Custom reports" },
      { ja: "API連携", en: "API integration" },
    ],
    popular: false,
  },
];

const obogSlotPricing = [
  { slot: "1", price: "¥80,000", unit: { ja: "/ 年", en: "/ year" } },
  { slot: "2", price: "¥50,000", unit: { ja: "/ 年", en: "/ year" } },
  { slot: "3", price: "¥30,000", unit: { ja: "/ 年", en: "/ year" } },
  { slot: "4+", price: "¥20,000", unit: { ja: "/ 年 / 枠", en: "/ year / slot" } },
];

export default function BusinessPricingPage() {
  const pricingFAQs = [
    {
      q: "メッセージプランの切り替えはできますか？",
      qE: "Can I switch messaging plans?",
      a: "はい、いつでもプランの変更が可能です。アップグレードは即時反映、ダウングレードは次の請求期間から反映されます。",
      aE: "Yes, you can change plans anytime. Upgrades take effect immediately, downgrades from the next billing period.",
      category: "companies" as const
    },
    {
      q: "OB/OG枠の料金体系を教えてください。",
      qE: "How does OB/OG slot pricing work?",
      a: "OB/OG枠は年額課金です。1枠目は¥80,000/年、2枠目は¥50,000/年、3枠目は¥30,000/年、4枠目以降は¥20,000/年/枠です。2ヶ月ごとに担当の入替が可能です。",
      aE: "OB/OG slots are billed annually. 1st slot: ¥80,000/yr, 2nd: ¥50,000/yr, 3rd: ¥30,000/yr, 4th+: ¥20,000/yr/slot. Bi-monthly rotation supported.",
      category: "companies" as const
    },
    {
      q: "従量課金とプランの併用はできますか？",
      qE: "Can I combine pay-per-message with a plan?",
      a: "プラン契約中は、プランに含まれるメッセージ数を超えた分が従量課金（¥500/通）で自動課金されます。",
      aE: "While on a plan, messages beyond your plan's limit are automatically charged at ¥500/message.",
      category: "companies" as const
    },
    {
      q: "公式OB/OG枠とは何ですか？",
      qE: "What are Official OB/OG Slots?",
      a: "公式OB/OG枠は、自社の社員を「公式OB/OG」として認証するための枠です。認証されたOB/OGは検索結果で公式バッジが表示され、コミュニティユーザーからの信頼度が向上します。",
      aE: "Official OB/OG Slots let you verify your employees as official OB/OG. Verified members display a badge in search results, boosting trust with community users.",
      category: "companies" as const
    },
    {
      q: "請求書払いは可能ですか？",
      qE: "Is invoice payment available?",
      a: "はい、Enterprise プランでは請求書払いに対応しております。その他のプランはクレジットカード決済となります。",
      aE: "Yes, invoice payment is available for Enterprise plans. Other plans use credit card payment.",
      category: "companies" as const
    },
  ];

  return (
    <div style={{ paddingTop: "var(--nav-height)" }} data-section="business">
      <PageContainer maxWidth="275">
        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-275">
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
                ja: "メッセージプランとOB/OG枠、それぞれのニーズに合わせた料金体系。",
                en: "Messaging plans and OB/OG slots, priced to fit your needs."
              }}
            />

            {/* ── MESSAGING PLANS ── */}
            <div className="mb-16 mt-12">
              <h3 className="mb-2 flex items-center justify-center gap-2 text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
                <Icon name="message-square" size={20} />
                <T ja="メッセージプラン" en="Messaging Plans" />
              </h3>
              <p className="mx-auto mb-8 max-w-140 text-center text-[13px]" style={{ color: "var(--ink3)" }}>
                <T
                  ja="コミュニティユーザーに直接メッセージを送信するためのプランです。"
                  en="Plans for sending direct messages to community users."
                />
              </p>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {messagingPlans.map((plan, i) => (
                  <div
                    key={i}
                    className="relative rounded-[14px] border p-6"
                    style={{
                      borderColor: plan.popular ? "var(--color-accent)" : "var(--brd)",
                      background: "var(--card)",
                      borderWidth: plan.popular ? 2 : 1,
                    }}
                  >
                    {plan.popular && (
                      <div
                        className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-[11px] font-bold text-white"
                        style={{ background: "var(--color-accent)" }}
                      >
                        <T ja="人気" en="Popular" />
                      </div>
                    )}
                    <div className="mb-1 text-[14px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
                      <T ja={plan.name.ja} en={plan.name.en} />
                    </div>
                    <div className="text-[13px] leading-relaxed" style={{ color: "var(--ink3)" }}>
                      <T ja={plan.desc.ja} en={plan.desc.en} />
                    </div>
                    <div className="my-4">
                      <span
                        className="text-[32px] font-extrabold"
                        style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)" }}
                      >
                        {plan.price}
                      </span>
                      <span className="text-[13px]" style={{ color: "var(--ink3)" }}>
                        {" "}<T ja={plan.unit.ja} en={plan.unit.en} />
                      </span>
                    </div>
                    <ul className="mb-5 flex flex-col gap-2">
                      {plan.features.map((f, fi) => (
                        <li key={fi} className="flex items-start gap-2 text-[13px]">
                          <span style={{ color: "var(--green)" }}><Icon name="check" size={14} /></span>
                          <span style={{ color: "var(--ink2)" }}><T ja={f.ja} en={f.en} /></span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/business/signup"
                      className={`btn w-full justify-center ${plan.popular ? "btn-accent" : "btn-ghost"}`}
                    >
                      <T ja="始める" en="Get Started" />
                      <span className="arrow">→</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* ── OB/OG SLOT PRICING ── */}
            <div className="mb-16">
              <h3 className="mb-2 flex items-center justify-center gap-2 text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
                <Icon name="badge-check" size={20} />
                <T ja="公式OB/OG枠の料金" en="Official OB/OG Slot Pricing" />
              </h3>
              <p className="mx-auto mb-8 max-w-140 text-center text-[13px]" style={{ color: "var(--ink3)" }}>
                <T
                  ja="自社のOB/OGを公式認証し、コミュニティユーザーからの信頼度を高めましょう。枠が増えるほどお得です。"
                  en="Verify your OB/OG and boost trust with community users. More slots = lower per-slot price."
                />
              </p>

              <div className="mx-auto max-w-180">
                <div
                  className="rounded-[14px] border overflow-hidden"
                  style={{ borderColor: "var(--brd)", background: "var(--card)" }}
                >
                  {/* Table header */}
                  <div
                    className="grid grid-cols-3 gap-4 border-b px-6 py-3 text-[12px] font-semibold uppercase tracking-wider"
                    style={{ borderColor: "var(--brd)", color: "var(--ink3)", fontFamily: "var(--font-display)" }}
                  >
                    <div><T ja="枠番号" en="Slot #" /></div>
                    <div className="text-center"><T ja="年額料金" en="Annual Price" /></div>
                    <div className="text-right"><T ja="月額換算" en="Monthly Equiv." /></div>
                  </div>
                  {/* Table rows */}
                  {obogSlotPricing.map((row, i) => {
                    const annual = parseInt(row.price.replace(/[¥,]/g, ""));
                    const monthly = Math.round(annual / 12).toLocaleString();
                    return (
                      <div
                        key={i}
                        className="grid grid-cols-3 gap-4 border-b px-6 py-4 last:border-b-0"
                        style={{ borderColor: "var(--brd2)" }}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className="flex h-7 w-7 items-center justify-center rounded-lg text-[12px] font-bold"
                            style={{ background: "var(--accent-soft)", color: "var(--color-accent)" }}
                          >
                            {row.slot}
                          </span>
                          <span className="text-[13px] font-medium">
                            <T ja={`${row.slot}枠目`} en={`Slot ${row.slot}`} />
                          </span>
                        </div>
                        <div className="flex items-center justify-center">
                          <span className="text-[18px] font-extrabold" style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)" }}>
                            {row.price}
                          </span>
                          <span className="ml-1 text-[11px]" style={{ color: "var(--ink4)" }}>
                            <T ja={row.unit.ja} en={row.unit.en} />
                          </span>
                        </div>
                        <div className="flex items-center justify-end text-[13px]" style={{ color: "var(--ink3)" }}>
                          ≈ ¥{monthly}<T ja="/月" en="/mo" />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 flex items-start gap-2 rounded-lg p-4 text-[12px] leading-relaxed" style={{ background: "var(--accent-soft)", color: "var(--ink2)" }}>
                  <Icon name="lightbulb" size={16} className="mt-0.5 shrink-0" style={{ color: "var(--color-accent)" }} />
                  <T
                    ja="各枠には2ヶ月のロック期間があります。期間終了後、ダッシュボードから別のOB/OG社員に入替可能です。"
                    en="Each slot has a 2-month lock period. After it ends, you can swap to a different OB/OG employee from your dashboard."
                  />
                </div>
              </div>
            </div>

            {/* Pricing FAQ */}
            <div className="mb-16">
              <h3 className="mb-6 text-center text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
                <T ja="料金に関するFAQ" en="Pricing FAQ" />
              </h3>
              <div className="mx-auto flex max-w-180 flex-col gap-3">
                {pricingFAQs.map((faq, i) => (
                  <FAQAccordion key={i} faq={faq} />
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div
              className="rounded-[14px] border p-8 text-center"
              style={{
                borderColor: "var(--brd)",
                background: "linear-gradient(135deg, var(--accent-soft2) 0%, var(--accent-soft) 100%)"
              }}
            >
              <h3 className="mb-3 text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                <T ja="まずはお気軽にお問い合わせください" en="Get in Touch" />
              </h3>
              <p className="mx-auto mb-6 max-w-120 text-sm" style={{ color: "var(--ink2)" }}>
                <T
                  ja="貴社のニーズに合わせた最適なプランをご提案いたします。"
                  en="We'll recommend the best plan tailored to your needs."
                />
              </p>
              <div className="flex flex-col items-center justify-center gap-2.5 sm:flex-row">
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
