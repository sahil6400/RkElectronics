import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: `Shipping timelines, charges and coverage for orders placed with ${site.name}.`,
  alternates: { canonical: "/shipping-policy" },
};

export default function ShippingPolicyPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy-950 py-14">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <h1 className="font-display text-3xl font-bold text-white">Shipping Policy</h1>
          <p className="mt-2 text-sm text-ink-100/60">Last updated: July 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-8 px-5 py-14 text-ink-600 md:px-8">
        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">Coverage</h2>
          <p className="mt-2">
            We currently ship across India through trusted courier partners.
            Delivery to your pin code will be confirmed with you on WhatsApp
            when you place an order.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            Delivery timelines
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Metro cities: typically 2–4 business days</li>
            <li>Other locations: typically 4–7 business days</li>
          </ul>
          <p className="mt-2">
            Timelines are estimates and may vary due to courier delays,
            weather, or high-demand periods.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            Shipping charges
          </h2>
          <p className="mt-2">
            Shipping charges (if any) depend on your location and order value
            and will be shared with you before your order is confirmed.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            Order tracking
          </h2>
          <p className="mt-2">
            Once your order is shipped, we&apos;ll send you tracking details on
            WhatsApp so you can follow its progress.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            Questions
          </h2>
          <p className="mt-2">
            For any shipping questions on an existing order, message us on
            WhatsApp or email{" "}
            <a href={`mailto:${site.email}`} className="text-copper-600 underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
