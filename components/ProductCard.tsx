import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import WhatsAppButton from "./WhatsAppButton";
import { productEnquiryLink } from "@/lib/whatsapp";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
      <Link href={`/products/${product.slug}`} className="relative block aspect-square overflow-hidden bg-navy-800">
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-copper-500 px-3 py-1 text-xs font-semibold text-white">
            {product.badge}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-copper-600">
            {product.category}
          </p>
          <Link href={`/products/${product.slug}`}>
            <h3 className="mt-1 font-display text-lg font-semibold text-navy-900 transition-colors group-hover:text-copper-600">
              {product.name}
            </h3>
          </Link>
          <p className="mt-1 text-sm text-ink-600">{product.tagline}</p>
        </div>
        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <span className="font-mono text-sm font-semibold text-navy-800">
            {product.price}
          </span>
        </div>
        <WhatsAppButton href={productEnquiryLink(product.name)} full />
      </div>
    </div>
  );
}
