import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import AnimatedSection from "@/components/AnimatedSection";
import { products, categories } from "@/data/products";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "All Products",
  description:
    "Browse earpods, portable appliances, charging cables and kitchen appliances from RK Electronics. Enquire and order directly on WhatsApp.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const activeCategory = searchParams.category;
  const list = activeCategory
    ? products.filter((p) => p.categorySlug === activeCategory)
    : products;

  return (
    <div className="bg-ink-50">
      <section className="bg-navy-950 py-14">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="font-mono text-xs uppercase tracking-wider text-copper-400">
            Catalog
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">
            All Products
          </h1>
          <p className="mt-3 max-w-xl text-sm text-ink-100/70">
            Every product below can be enquired and ordered directly on WhatsApp —
            no account or checkout required.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-10 md:px-8">
        <div className="flex flex-wrap gap-3">
          <Link
            href="/products"
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              !activeCategory
                ? "bg-navy-900 text-white"
                : "bg-white text-ink-600 hover:bg-ink-100"
            }`}
          >
            All
          </Link>
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/products?category=${c.slug}`}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === c.slug
                  ? "bg-navy-900 text-white"
                  : "bg-white text-ink-600 hover:bg-ink-100"
              }`}
            >
              {c.name}
            </Link>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((product, i) => (
            <AnimatedSection key={product.id} delay={(i % 3) * 0.08}>
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>

        {list.length === 0 && (
          <p className="mt-10 text-center text-ink-600">
            No products in this category yet. Message us on{" "}
            <a
              href={`https://wa.me/${site.whatsappNumber}`}
              className="font-semibold text-copper-600 underline"
            >
              WhatsApp
            </a>{" "}
            and we&apos;ll help you find what you need.
          </p>
        )}
      </div>
    </div>
  );
}
