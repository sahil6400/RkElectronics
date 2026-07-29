import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { products, getProductBySlug } from "@/data/products";
import { site } from "@/data/site";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCard from "@/components/ProductCard";
import AnimatedSection from "@/components/AnimatedSection";
import { productEnquiryLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};

  return {
    title: product.seoTitle,
    description: product.seoDescription,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      images: [product.image],
    },
  };
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.categorySlug === product.categorySlug && p.slug !== product.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    category: product.category,
    brand: { "@type": "Brand", name: site.name },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${site.url}/products/${product.slug}`,
    },
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-5 py-6 text-sm text-ink-400 md:px-8">
        <Link href="/products" className="hover:text-copper-600">Products</Link>
        <span className="mx-2">/</span>
        <Link href={`/products?category=${product.categorySlug}`} className="hover:text-copper-600">
          {product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink-600">{product.name}</span>
      </div>

      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <AnimatedSection>
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-navy-800">
              {product.badge && (
                <span className="absolute left-4 top-4 z-10 rounded-full bg-copper-500 px-3 py-1 text-xs font-semibold text-white">
                  {product.badge}
                </span>
              )}
              <Image src={product.image} alt={product.name} fill className="object-cover" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="font-mono text-xs uppercase tracking-wider text-copper-600">
              {product.category}
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold text-navy-900 md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-3 text-base text-ink-600">{product.tagline}</p>
            <p className="mt-5 font-mono text-xl font-semibold text-navy-900">
              {product.price}
            </p>

            <p className="mt-6 leading-relaxed text-ink-600">{product.description}</p>

            <ul className="mt-6 space-y-2.5">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-ink-800">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-volt-500" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <WhatsAppButton
                href={productEnquiryLink(product.name)}
                label={`Enquire about ${product.name} on WhatsApp`}
                full
              />
              <p className="mt-3 text-center text-xs text-ink-400">
                Tapping this opens WhatsApp with your enquiry pre-filled — no forms, no signup.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-16">
          <h2 className="font-display text-xl font-semibold text-navy-900">
            Specifications
          </h2>
          <div className="mt-4 divide-y divide-ink-100 overflow-hidden rounded-2xl border border-ink-100">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="flex justify-between gap-4 bg-white px-5 py-3.5 text-sm even:bg-ink-50">
                <span className="text-ink-400">{key}</span>
                <span className="text-right font-medium text-navy-900">{value}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {related.length > 0 && (
        <section className="border-t border-ink-100 bg-ink-50 py-16">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="font-display text-2xl font-bold text-navy-900">
              You might also like
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
