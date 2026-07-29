import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { blogPosts } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides and tips on earpods, charging cables, portable appliances and kitchen appliances from RK Electronics.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy-950 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="font-mono text-xs uppercase tracking-wider text-copper-400">
            Blog
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
            Guides, tips &amp; buying advice
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <div className="space-y-6">
          {blogPosts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-ink-100 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
              >
                <p className="font-mono text-xs uppercase tracking-wider text-copper-600">
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}{" "}
                  · {post.readTime}
                </p>
                <h2 className="mt-2 font-display text-xl font-semibold text-navy-900 transition-colors group-hover:text-copper-600">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-copper-600">
                  Read more →
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
