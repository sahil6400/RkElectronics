import Link from "next/link";
import { Headphones, Cable, Coffee, CookingPot } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const items = [
  { name: "Earpods & Audio", slug: "earpods-audio", icon: Headphones },
  { name: "Portable Appliances", slug: "portable-appliances", icon: Coffee },
  { name: "Charging Cables", slug: "charging-cables", icon: Cable },
  { name: "Kitchen Appliances", slug: "kitchen-appliances", icon: CookingPot },
];

export default function CategoryStrip() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <AnimatedSection>
          <p className="font-mono text-xs uppercase tracking-wider text-copper-600">
            Shop by category
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy-900">
            Four categories, one WhatsApp chat away.
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
          {items.map((item, i) => (
            <AnimatedSection key={item.slug} delay={i * 0.1}>
              <Link
                href={`/products?category=${item.slug}`}
                className="group flex flex-col items-center gap-4 rounded-2xl border border-ink-100 bg-ink-50 px-4 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-copper-300 hover:bg-white hover:shadow-card-hover"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 transition-colors group-hover:bg-copper-500">
                  <item.icon className="h-6 w-6 text-copper-400 transition-colors group-hover:text-white" />
                </span>
                <span className="font-display text-sm font-semibold text-navy-900">
                  {item.name}
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
