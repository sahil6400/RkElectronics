import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/data/blogs";
import { site } from "@/data/site";
import AnimatedSection from "@/components/AnimatedSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import { generalEnquiryLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <article className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-navy-950 py-16">
        <div className="mx-auto max-w-2xl px-5 md:px-8">
          <Link href="/blog" className="text-sm text-ink-100/60 hover:text-copper-400">
            ← Back to blog
          </Link>
          <p className="mt-4 font-mono text-xs uppercase tracking-wider text-copper-400">
            {new Date(post.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}{" "}
            · {post.readTime}
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-5 py-14 md:px-8">
        <AnimatedSection className="space-y-5 leading-relaxed text-ink-600">
          {post.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-10 rounded-2xl border border-ink-100 bg-ink-50 p-6 text-center">
          <p className="text-sm text-ink-600">
            Have a product question after reading this?
          </p>
          <div className="mt-4 flex justify-center">
            <WhatsAppButton href={generalEnquiryLink()} label="Ask us on WhatsApp" />
          </div>
        </AnimatedSection>
      </section>
    </article>
  );
}
