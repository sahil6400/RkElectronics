import Link from "next/link";
import { Zap, Instagram, Facebook, Mail, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { categories } from "@/data/products";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950 text-ink-100/70">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-copper-500">
              <Zap className="h-4 w-4 text-navy-950" strokeWidth={2.5} />
            </span>
            <span className="font-display text-base font-bold text-white">{site.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">{site.description}</p>
          <div className="mt-5 flex gap-3">
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full border border-white/10 p-2 transition-colors hover:border-copper-500 hover:text-copper-400">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full border border-white/10 p-2 transition-colors hover:border-copper-500 hover:text-copper-400">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-white">Shop</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/products?category=${c.slug}`} className="transition-colors hover:text-copper-400">
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/products" className="transition-colors hover:text-copper-400">
                All Products
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-white">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="transition-colors hover:text-copper-400">About Us</Link></li>
            <li><Link href="/blog" className="transition-colors hover:text-copper-400">Blog</Link></li>
            <li><Link href="/contact" className="transition-colors hover:text-copper-400">Contact</Link></li>
            <li><Link href="/privacy-policy" className="transition-colors hover:text-copper-400">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions" className="transition-colors hover:text-copper-400">Terms &amp; Conditions</Link></li>
            <li><Link href="/shipping-policy" className="transition-colors hover:text-copper-400">Shipping Policy</Link></li>
            <li><Link href="/refund-policy" className="transition-colors hover:text-copper-400">Refund &amp; Return Policy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-white">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-copper-400" />
              <span>{site.addressLine}</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-copper-400" />
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-copper-400">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 px-5 py-6 text-center text-xs text-ink-100/50 md:px-8">
        © {new Date().getFullYear()} {site.legalName}. All rights reserved. All orders are placed and confirmed via WhatsApp.
      </div>
    </footer>
  );
}
