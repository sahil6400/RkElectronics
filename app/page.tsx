import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import CategoryStrip from "@/components/CategoryStrip";
import HowItWorks from "@/components/HowItWorks";
import ProductCard from "@/components/ProductCard";
import AnimatedSection from "@/components/AnimatedSection";
import { products } from "@/data/products";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `${site.name} — Earpods, Portable Appliances, Cables & Kitchen Appliances`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featured = products.filter((p) => p.badge);

  return (
    <>
      <Hero />
      <CategoryStrip />

      <section className="bg-ink-50 py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <AnimatedSection className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-copper-600">
                Customer favourites
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-navy-900">
                Bestsellers &amp; trending picks
              </h2>
            </div>
            <Link
              href="/products"
              className="font-body text-sm font-semibold text-copper-600 hover:text-copper-700"
            >
              View all products →
            </Link>
          </AnimatedSection>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product, i) => (
              <AnimatedSection key={product.id} delay={i * 0.1}>
                <ProductCard product={product} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />

      <section className="bg-navy-950 py-20">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Got a question before you order?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-100/70">
              Send us a message on WhatsApp — we typically reply within a few hours
              with price, stock and delivery timelines.
            </p>
            <a
              href={`https://wa.me/${site.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-volt-500 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-all hover:bg-volt-400 hover:shadow-glow"
            >
              Chat with RK Electronics
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
