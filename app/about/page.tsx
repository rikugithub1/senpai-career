import PageContainer from "../components/shared/PageContainer";
import SectionHeader from "../components/shared/SectionHeader";
import ImagePlaceholder from "../components/shared/ImagePlaceholder";
import Icon from "../components/shared/Icon";
import { T } from "../components/providers/LanguageProvider";
import { teamMembers, companyValues } from "../data/content";
import Link from "next/link";

/**
 * About Page
 *
 * Company information, mission, team, and values
 */
export default function AboutPage() {
  return (
    <PageContainer maxWidth="275">
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-275">
          {/* Header */}
          <SectionHeader
            title={{ ja: "Senpai Careerについて", en: "About Senpai Career" }}
            subtitle={{ ja: "私たちのミッションと、チームをご紹介します。", en: "Our mission and the team behind the platform." }}
          />

          {/* Mission Section */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              <T ja="私たちのミッション" en="Our Mission" />
            </h2>
            <p className="mx-auto max-w-160 text-base leading-relaxed" style={{ color: "var(--ink2)" }}>
              <T
                ja="[ミッション記述を記入してください。例: 日本で働きたい留学生と、多様な人材を求める企業をつなぎ、OB/OG訪問を通じて自然な出会いを生み出すこと。]"
                en="[Mission statement to be added. Example: To connect international students seeking careers in Japan with companies seeking diverse talent, creating natural connections through OB/OG visits.]"
              />
            </p>
          </div>

          {/* Story Section */}
          <div className="mb-16">
            <h2 className="mb-6 text-center text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              <T ja="私たちのストーリー" en="Our Story" />
            </h2>
            <div className="mx-auto max-w-180 text-sm leading-relaxed" style={{ color: "var(--ink2)" }}>
              <p className="mb-4">
                <T
                  ja="[会社設立の経緯やきっかけを記入してください。なぜこのサービスを作ったのか、どんな課題を解決したいのかを説明します。]"
                  en="[Company founding story to be added. Explain why this service was created and what problems it aims to solve.]"
                />
              </p>
              <p>
                <T
                  ja="[Senpai Careerの誕生から現在までの歩み、主要なマイルストーン、今後のビジョンなどを記述します。]"
                  en="[Describe the journey from inception to present, key milestones, and future vision.]"
                />
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="mb-6 text-center text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              <T ja="チームメンバー" en="Our Team" />
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, i) => (
                <div key={i} className="text-center">
                  <div className="mb-3 flex justify-center">
                    <ImagePlaceholder
                      width={150}
                      height={150}
                      label={member.name}
                      variant="photo"
                    />
                  </div>
                  <h3 className="mb-1 font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    {member.name}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--ink3)" }}>
                    <T ja={member.role.ja} en={member.role.en} />
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="mb-6 text-center text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              <T ja="私たちの価値観" en="Our Values" />
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {companyValues.map((value, i) => (
                <div key={i} className="rounded-[14px] border p-6" style={{ borderColor: "var(--brd)", background: "var(--card)" }}>
                  <div className="icon-box mb-3">
                    <Icon name={value.icon} size={24} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    <T ja={value.ja} en={value.en} />
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--ink3)" }}>
                    <T ja={value.jaD} en={value.enD} />
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-16 rounded-[14px] border p-8" style={{ borderColor: "var(--brd)", background: "var(--bg2)" }}>
            <h2 className="mb-6 text-center text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              <T ja="数字で見るSenpai Career" en="Senpai Career by the Numbers" />
            </h2>
            <div className="grid gap-8 text-center md:grid-cols-4">
              {[
                { value: "2024", ja: "サービス開始", en: "Founded" },
                { value: "500+", ja: "登録学生数", en: "Students" },
                { value: "50+", ja: "登録企業数", en: "Companies" },
                { value: "3", ja: "対象大学", en: "Universities" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="mb-1 text-3xl font-extrabold" style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)" }}>
                    {stat.value}
                  </div>
                  <div className="text-xs" style={{ color: "var(--ink3)" }}>
                    <T ja={stat.ja} en={stat.en} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="mb-3 text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              <T ja="一緒に働きませんか？" en="Join Our Team" />
            </h2>
            <p className="mx-auto mb-6 max-w-120 text-sm" style={{ color: "var(--ink3)" }}>
              <T
                ja="私たちと一緒に、留学生と企業をつなぐプラットフォームを成長させませんか？"
                en="Help us grow the platform connecting international students with companies."
              />
            </p>
            <Link href="/contact" className="btn btn-accent">
              <T ja="お問い合わせ" en="Contact Us" />
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
