import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and Conditions for using ${site.name} and ordering our products.`,
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy-950 py-14">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <h1 className="font-display text-3xl font-bold text-white">Terms &amp; Conditions</h1>
          <p className="mt-2 text-sm text-ink-100/60">Last updated: July 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-8 px-5 py-14 text-ink-600 md:px-8">
        <p>
          These Terms &amp; Conditions govern your use of {site.url} (the
          &quot;Site&quot;) and any order placed with {site.name} through this Site or
          via WhatsApp. By using the Site or contacting us to order, you
          agree to these terms.
        </p>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            1. How orders work
          </h2>
          <p className="mt-2">
            This Site is a product catalog. It does not process payments or
            confirm orders automatically. Every order is initiated by you
            through WhatsApp, where a member of our team confirms price,
            availability, delivery timeline and payment method with you
            directly before the order is considered placed.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            2. Pricing
          </h2>
          <p className="mt-2">
            Prices shown on the Site are indicative starting prices and may
            vary based on variant, quantity, or current stock. The final
            price will always be confirmed with you on WhatsApp before you
            are asked to pay.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            3. Product availability
          </h2>
          <p className="mt-2">
            Products are subject to availability. We will inform you if an
            item you enquire about is out of stock and, where possible,
            suggest alternatives or an expected restock date.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            4. Payment
          </h2>
          <p className="mt-2">
            Accepted payment methods (such as UPI, bank transfer, or cash on
            delivery where available) will be shared with you on WhatsApp at
            the time of confirming your order.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            5. Delivery
          </h2>
          <p className="mt-2">
            Estimated delivery timelines will be shared with you during order
            confirmation. Timelines may vary based on your location and
            courier availability. See our{" "}
            <a href="/shipping-policy" className="text-copper-600 underline">
              Shipping Policy
            </a>{" "}
            for more detail.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            6. Returns &amp; refunds
          </h2>
          <p className="mt-2">
            Please refer to our{" "}
            <a href="/refund-policy" className="text-copper-600 underline">
              Refund &amp; Return Policy
            </a>{" "}
            for details on returns, replacements and refunds.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            7. Product descriptions
          </h2>
          <p className="mt-2">
            We aim to describe and depict products as accurately as possible.
            Minor variations in colour, packaging or accessories may occur
            between what is shown and what is delivered.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            8. Limitation of liability
          </h2>
          <p className="mt-2">
            {site.name} is not liable for indirect or incidental damages
            arising from the use of our products beyond the value of the
            product itself, except where required by applicable law.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            9. Governing law
          </h2>
          <p className="mt-2">
            These terms are governed by the laws of India. Any disputes will
            be subject to the jurisdiction of the courts in New Delhi.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            10. Contact
          </h2>
          <p className="mt-2">
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${site.email}`} className="text-copper-600 underline">
              {site.email}
            </a>{" "}
            or via WhatsApp.
          </p>
        </div>
      </section>
    </div>
  );
}
