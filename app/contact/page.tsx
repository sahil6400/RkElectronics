import type { Metadata } from "next";
import { MapPin, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import { generalEnquiryLink } from "@/lib/whatsapp";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with RK Electronics on WhatsApp for product enquiries, orders, and support.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="bg-ink-50">
      <section className="bg-navy-950 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="font-mono text-xs uppercase tracking-wider text-copper-400">
            Contact
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
            We reply on WhatsApp, not ticket queues.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-ink-100/70">
            For product enquiries, orders, or support — WhatsApp is the fastest
            way to reach us.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8">
        <AnimatedSection>
          <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-volt-500/15">
              <MessageCircle className="h-5 w-5 text-volt-500" />
            </span>

            <h2 className="mt-4 font-display text-lg font-semibold text-navy-900">
              WhatsApp
            </h2>

            <p className="mt-1 text-sm text-ink-600">
              The quickest way to ask about a product, place an order, or get
              support. We usually respond within a few minutes during business
              hours.
            </p>

            <div className="mt-6">
              <WhatsAppButton
                href={generalEnquiryLink()}
                label="Start a Chat"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          delay={0.2}
          className="mt-6 flex items-start gap-3 rounded-2xl border border-ink-100 bg-white p-6 shadow-card"
        >
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-copper-500" />

          <div>
            <h2 className="font-display text-lg font-semibold text-navy-900">
              Our Store
            </h2>

            <p className="mt-1 text-sm text-ink-600">
              {site.addressLine}
            </p>

            <p className="mt-1 text-sm text-ink-400">
              We ship products across India.
            </p>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}