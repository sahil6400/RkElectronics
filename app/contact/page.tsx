import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import { generalEnquiryLink } from "@/lib/whatsapp";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with RK Electronics on WhatsApp or email for product enquiries, orders, and support.",
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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <AnimatedSection>
            <div className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-volt-500/15">
                <MessageCircle className="h-5 w-5 text-volt-500" />
              </span>
              <h2 className="mt-4 font-display text-lg font-semibold text-navy-900">
                WhatsApp
              </h2>
              <p className="mt-1 text-sm text-ink-600">
                The quickest way to ask about a product or place an order.
              </p>
              <div className="mt-4">
                <WhatsAppButton href={generalEnquiryLink()} label="Start a chat" />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-copper-500/15">
                <Mail className="h-5 w-5 text-copper-600" />
              </span>
              <h2 className="mt-4 font-display text-lg font-semibold text-navy-900">
                Email
              </h2>
              <p className="mt-1 text-sm text-ink-600">
                For anything that needs a written record — invoices, bulk orders.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-4 inline-block font-mono text-sm font-semibold text-navy-900 underline"
              >
                {site.email}
              </a>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.2} className="mt-6 flex items-start gap-3 rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-copper-500" />
          <div>
            <h2 className="font-display text-lg font-semibold text-navy-900">Location</h2>
            <p className="mt-1 text-sm text-ink-600">{site.addressLine}</p>
            <p className="mt-1 text-sm text-ink-400">We ship across India.</p>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
