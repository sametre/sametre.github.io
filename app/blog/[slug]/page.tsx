import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { trPosts } from "@/lib/static-posts";
import { SiteFooter, SiteHeader } from "../../site-shell";

export const dynamic = "force-static";
export const dynamicParams = false;

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = trPosts.find((item) => item.slug === slug);
  if (!post) return { title: "Yazı bulunamadı" };

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    authors: [{ name: "Samet ER", url: "https://sametre.github.io/about" }],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title, description: post.excerpt, type: "article",
      url: `/blog/${post.slug}`, publishedTime: post.date,
      authors: ["Samet ER"], tags: post.keywords, locale: "tr_TR",
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
  };
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = trPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const articleSchema = {
    "@context": "https://schema.org", "@type": "BlogPosting",
    headline: post.title, description: post.excerpt, datePublished: post.date,
    dateModified: post.date, inLanguage: "tr-TR", keywords: post.keywords.join(", "),
    mainEntityOfPage: `https://sametre.github.io/blog/${post.slug}`,
    author: { "@type": "Person", name: "Samet ER", url: "https://sametre.github.io/about" },
    publisher: { "@type": "Person", name: "Samet ER" },
  };

  return (
    <main>
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="shell blog-article">
        <a className="blog-back" href="/blog">← Tüm yazılar</a>
        <div className="blog-article-heading">
          <span className="section-number">Teknik not</span>
          <div className="article-taxonomy">{post.category} · {post.readingTime}</div>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <div className="blog-body">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
      <section className="contact page-contact"><SiteFooter /></section>
    </main>
  );
}

export function generateStaticParams() {
  return trPosts.map((post) => ({ slug: post.slug }));
}
