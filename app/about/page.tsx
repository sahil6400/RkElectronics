import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import { generalEnquiryLink } from "@/lib/whatsapp";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "RK Electronics supplies everyday electronics — earpods, portable appliances, charging cables and kitchen appliances — with orders placed directly on WhatsApp.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy-950 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="font-mono text-xs uppercase tracking-wider text-copper-400">
            About {site.name}
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
            Practical electronics, sold the simple way.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8">
        <AnimatedSection className="space-y-6 leading-relaxed text-ink-600">
          <p>
            {site.name} started with a simple frustration: buying everyday
            electronics online often means wading through inflated listings,
            fake reviews and confusing checkout flows for products that should
            be simple to buy. We wanted a more direct way to do it.
          </p>
          <p>
            So instead of a traditional cart and checkout, every product on
            this site is a starting point for a conversation. You browse, you
            find something you like, and you message us directly on WhatsApp
            — the same way you&apos;d ask a shop owner about a product in person.
            We answer questions, confirm price and availability, and take
            your order from there.
          </p>
          <p>
            Since {site.founded}, we&apos;ve focused on a small, practical catalog:
            wireless earpods, portable USB-rechargeable appliances, durable
            charging cables, and kitchen appliances like mixer grinders and
            spice grinders. Every product is chosen for everyday reliability
            over flashy specs.
          </p>
          <p>
            We&apos;re based in {site.addressLine}, and we ship across India. If
            you have a question about a product, sizing, warranty or
            delivery timelines, message us — we reply personally, not through
            a support ticket queue.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-10">
          <WhatsAppButton href={generalEnquiryLink()} label="Talk to us on WhatsApp" />
        </AnimatedSection>
      </section>
    </div>
  );
}
