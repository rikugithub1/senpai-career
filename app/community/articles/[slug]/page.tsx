/**
 * INDIVIDUAL CAREER GUIDE ARTICLE
 *
 * URL: /community/articles/[slug]
 *
 * Dynamic route for individual career guide articles
 */

import Link from "next/link";
import { notFound } from "next/navigation";
import { T } from "../../../components/providers/LanguageProvider";
import Icon from "../../../components/shared/Icon";
import Footer from "../../../components/layout/Footer";
import { careerArticles } from "../../../data/content";

export function generateStaticParams() {
  return careerArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = careerArticles.find((a) => a.slug === slug);

  if (!article) return notFound();

  return (
    <div style={{ paddingTop: "var(--nav-height)" }} data-section="community">
      <article className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-180">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-[12px]" style={{ color: "var(--ink4)" }}>
            <Link href="/community" className="transition-colors hover:underline" style={{ color: "var(--color-accent)" }}>
              <T ja="コミュニティ" en="Community" />
            </Link>
            <span>/</span>
            <Link href="/community/articles" className="transition-colors hover:underline" style={{ color: "var(--color-accent)" }}>
              <T ja="就活ガイド" en="Career Guide" />
            </Link>
            <span>/</span>
            <span><T ja={article.title.ja} en={article.title.en} /></span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="icon-box mb-4" style={{ width: 56, height: 56 }}>
              <Icon name={article.icon} size={28} />
            </div>
            <h1
              className="mb-3 text-2xl font-extrabold tracking-tight md:text-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <T ja={article.title.ja} en={article.title.en} />
            </h1>
            <div className="flex items-center gap-3">
              <span className="tag tag-accent">{article.category}</span>
              <span className="text-[12px]" style={{ color: "var(--ink4)" }}>
                <T ja={`${article.readTime}分で読める`} en={`${article.readTime} min read`} />
              </span>
            </div>
          </div>

          {/* Article body placeholder */}
          <div
            className="rounded-[14px] border p-8 md:p-12"
            style={{ borderColor: "var(--brd)", background: "var(--card)" }}
          >
            <div className="mb-6 text-[15px] font-semibold leading-relaxed" style={{ color: "var(--ink2)" }}>
              <T ja={article.excerpt.ja} en={article.excerpt.en} />
            </div>

            <div
              className="rounded-lg p-6 text-center"
              style={{ background: "var(--bg2)", borderRadius: "12px" }}
            >
              <div className="mb-2"><Icon name="pen-line" size={28} style={{ color: "var(--ink4)" }} /></div>
              <div className="text-[14px] font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                <T ja="記事コンテンツは準備中です" en="Article content coming soon" />
              </div>
              <div className="mt-1 text-[13px]" style={{ color: "var(--ink3)" }}>
                <T
                  ja="このセクションには詳細な記事コンテンツが入ります。"
                  en="Detailed article content will be placed here."
                />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between">
            <Link
              href="/community/articles"
              className="text-[13px] font-semibold"
              style={{ color: "var(--color-accent)" }}
            >
              <T ja="← すべての記事" en="← All articles" />
            </Link>
            <Link href="/community/signup" className="btn btn-sm btn-accent">
              <T ja="無料で登録" en="Sign Up Free" />
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
