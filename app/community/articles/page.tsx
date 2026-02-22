/**
 * CAREER GUIDE ARTICLES INDEX
 *
 * URL: /community/articles
 *
 * Lists all career guide articles for community users
 */

import Link from "next/link";
import { T } from "../../components/providers/LanguageProvider";
import Icon from "../../components/shared/Icon";
import SectionHeader from "../../components/shared/SectionHeader";
import Footer from "../../components/layout/Footer";
import { careerArticles } from "../../data/content";

export default function ArticlesIndexPage() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }} data-section="community">
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-275">
          <SectionHeader
            label="CAREER GUIDE"
            title={{ ja: "就活ガイド", en: "Career Guide" }}
            subtitle={{ ja: "日本での就活を成功させるための記事を読もう", en: "Read articles to succeed in your job hunt in Japan" }}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {careerArticles.map((article, i) => (
              <Link
                key={i}
                href={`/community/articles/${article.slug}`}
                className="group rounded-[14px] border p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
                style={{ borderColor: "var(--brd)", background: "var(--card)" }}
              >
                <div className="icon-box mb-4">
                  <Icon name={article.icon} size={22} />
                </div>
                <div
                  className="mb-2 text-[16px] font-bold tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <T ja={article.title.ja} en={article.title.en} />
                </div>
                <div className="mb-4 text-[13px] leading-relaxed" style={{ color: "var(--ink2)" }}>
                  <T ja={article.excerpt.ja} en={article.excerpt.en} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="tag tag-accent">{article.category}</span>
                  <span className="text-[12px]" style={{ color: "var(--ink4)" }}>
                    <T ja={`${article.readTime}分で読める`} en={`${article.readTime} min read`} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="mb-4 text-[15px]" style={{ color: "var(--ink3)" }}>
              <T
                ja="OB/OG訪問を通じて、記事の知識を実践しよう"
                en="Put your knowledge into practice through OB/OG visits"
              />
            </p>
            <Link href="/community/signup" className="btn btn-accent">
              <T ja="無料で登録する" en="Sign Up Free" />
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
