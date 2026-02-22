import PageContainer from "../components/shared/PageContainer";
import SectionHeader from "../components/shared/SectionHeader";
import FAQAccordion from "../components/shared/FAQAccordion";
import Icon from "../components/shared/Icon";
import { T } from "../components/providers/LanguageProvider";
import Link from "next/link";

/**
 * Pricing Page
 *
 * Community: Free (5 msgs/day) + Premium (¥5,000/mo, 100 msgs/day)
 * OB/OG: Always free
 */
export default function PricingPage() {
  const pricingFAQs = [
    {
      q: "コミュニティユーザーは本当に無料ですか？",
      qE: "Is it really free for community users?",
      a: "はい、基本プランは完全無料です。1日5通のメッセージ送信（返信は含まず）、OB/OG検索・予約、就活ガイドなどの機能がご利用いただけます。",
      aE: "Yes, the free plan is completely free. You get 5 messages/day (replies excluded), OB/OG search & booking, and career guides.",
      category: "students" as const
    },
    {
      q: "OB/OGも無料ですか？",
      qE: "Is it free for OB/OG too?",
      a: "はい、OB/OGの方は完全無料です。すべての機能を無制限でご利用いただけます。",
      aE: "Yes, completely free for OB/OG. All features unlimited.",
      category: "students" as const
    },
    {
      q: "Premiumプランの解約はいつでもできますか？",
      qE: "Can I cancel the Premium plan anytime?",
      a: "はい、いつでも解約可能です。解約後は次の請求期間から無料プランに戻ります。",
      aE: "Yes, you can cancel anytime. After cancellation, you'll return to the free plan from the next billing period.",
      category: "students" as const
    },
    {
      q: "メッセージの「返信」は制限にカウントされますか？",
      qE: "Do replies count toward the message limit?",
      a: "いいえ、相手からのメッセージへの返信は制限にカウントされません。制限は新規メッセージの送信のみに適用されます。",
      aE: "No, replies to messages you receive are not counted. The limit applies only to new outgoing messages.",
      category: "students" as const
    },
  ];

  return (
    <PageContainer maxWidth="275">
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-275">
          {/* Header */}
          <SectionHeader
            title={{ ja: "料金プラン", en: "Pricing Plans" }}
            subtitle={{ ja: "コミュニティユーザーもOB/OGも、基本は完全無料。", en: "Free for community users and OB/OG. Upgrade for more." }}
          />

          {/* Plan cards */}
          <div className="mb-16 mt-12 grid gap-6 md:grid-cols-3">
            {/* Free Plan */}
            <div
              className="rounded-[14px] border p-8"
              style={{ borderColor: "var(--brd)", background: "var(--card)" }}
            >
              <div className="mb-1 text-[14px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
                <T ja="Free プラン" en="Free Plan" />
              </div>
              <div className="mb-1 text-[11px]" style={{ color: "var(--ink4)" }}>
                <T ja="コミュニティユーザー向け" en="For Community Users" />
              </div>
              <div
                className="mb-1 text-[48px] font-extrabold"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)" }}
              >
                ¥0
              </div>
              <div className="mb-6 text-[13px]" style={{ color: "var(--ink3)" }}>
                <T ja="ずっと無料" en="Free forever" />
              </div>

              <ul className="mb-8 flex flex-col gap-2.5">
                {[
                  { ja: "1日5通のメッセージ送信", en: "5 messages/day" },
                  { ja: "返信は無制限", en: "Unlimited replies" },
                  { ja: "OB/OG検索・予約", en: "OB/OG search & booking" },
                  { ja: "就活ガイド閲覧", en: "Career guide access" },
                  { ja: "プロフィール作成", en: "Profile creation" },
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13px]">
                    <Icon name="check" size={14} style={{ color: "var(--green)" }} />
                    <T ja={f.ja} en={f.en} />
                  </li>
                ))}
              </ul>

              <Link href="/community/signup" className="btn btn-ghost w-full justify-center">
                <T ja="無料で登録" en="Sign Up Free" />
                <span className="arrow">→</span>
              </Link>
            </div>

            {/* Premium Plan */}
            <div
              className="relative rounded-[14px] border-2 p-8"
              style={{ borderColor: "var(--color-accent)", background: "var(--card)" }}
            >
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[11px] font-bold text-white"
                style={{ background: "var(--color-accent)" }}
              >
                <T ja="おすすめ" en="Recommended" />
              </div>
              <div className="mb-1 text-[14px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
                <T ja="Premium プラン" en="Premium Plan" />
              </div>
              <div className="mb-1 text-[11px]" style={{ color: "var(--ink4)" }}>
                <T ja="コミュニティユーザー向け" en="For Community Users" />
              </div>
              <div
                className="mb-1 text-[48px] font-extrabold"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)" }}
              >
                ¥5,000
              </div>
              <div className="mb-6 text-[13px]" style={{ color: "var(--ink3)" }}>
                <T ja="/ 月" en="/ month" />
              </div>

              <ul className="mb-8 flex flex-col gap-2.5">
                {[
                  { ja: "1日100通のメッセージ送信", en: "100 messages/day" },
                  { ja: "返信は無制限", en: "Unlimited replies" },
                  { ja: "検索結果で優先表示", en: "Priority visibility in search" },
                  { ja: "高度なフィルター", en: "Advanced search filters" },
                  { ja: "OB/OG検索・予約", en: "OB/OG search & booking" },
                  { ja: "就活ガイド閲覧", en: "Career guide access" },
                  { ja: "プロフィール作成", en: "Profile creation" },
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13px]">
                    <Icon name="check" size={14} style={{ color: "var(--green)" }} />
                    <T ja={f.ja} en={f.en} />
                  </li>
                ))}
              </ul>

              <Link href="/community/signup" className="btn btn-accent w-full justify-center">
                <T ja="Premiumを始める" en="Start Premium" />
                <span className="arrow">→</span>
              </Link>
            </div>

            {/* OB/OG Plan */}
            <div
              className="rounded-[14px] border p-8"
              style={{ borderColor: "var(--brd)", background: "var(--card)" }}
              data-section="obog"
            >
              <div className="mb-1 text-[14px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
                <T ja="OB/OG プラン" en="OB/OG Plan" />
              </div>
              <div className="mb-1 text-[11px]" style={{ color: "var(--ink4)" }}>
                <T ja="OB/OG（卒業生）向け" en="For OB/OG (Alumni)" />
              </div>
              <div
                className="mb-1 text-[48px] font-extrabold"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)" }}
              >
                ¥0
              </div>
              <div className="mb-6 text-[13px]" style={{ color: "var(--ink3)" }}>
                <T ja="完全無料" en="Completely free" />
              </div>

              <ul className="mb-8 flex flex-col gap-2.5">
                {[
                  { ja: "訪問リクエスト管理", en: "Visit request management" },
                  { ja: "メッセージ無制限", en: "Unlimited messaging" },
                  { ja: "スケジュール管理", en: "Schedule management" },
                  { ja: "公式OB/OG認証対応", en: "Official OB/OG verification" },
                  { ja: "プロフィール作成", en: "Profile creation" },
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13px]">
                    <Icon name="check" size={14} style={{ color: "var(--green)" }} />
                    <T ja={f.ja} en={f.en} />
                  </li>
                ))}
              </ul>

              <Link href="/obog/signup" className="btn btn-ghost w-full justify-center">
                <T ja="OB/OGとして登録" en="Register as OB/OG" />
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>

          {/* Business link */}
          <div
            className="mb-16 rounded-[14px] border p-6 text-center"
            style={{ borderColor: "var(--brd)", background: "var(--bg2)" }}
          >
            <div className="mb-2 text-[15px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
              <span className="flex items-center justify-center gap-1.5"><Icon name="building-2" size={18} /><T ja="企業の方はこちら" en="For Companies" /></span>
            </div>
            <div className="mb-4 text-[13px]" style={{ color: "var(--ink3)" }}>
              <T
                ja="メッセージプラン・OB/OG枠の料金については企業向け料金ページをご覧ください。"
                en="See our business pricing page for messaging plans and OB/OG slot pricing."
              />
            </div>
            <Link href="/business/pricing" className="btn btn-sm btn-ghost">
              <T ja="企業向け料金を見る" en="View Business Pricing" />
              <span className="arrow">→</span>
            </Link>
          </div>

          {/* Pricing FAQ */}
          <div>
            <h3 className="mb-6 text-center text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
              <T ja="料金に関するFAQ" en="Pricing FAQ" />
            </h3>
            <div className="mx-auto flex max-w-180 flex-col gap-3">
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
