import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Refund & Return Policy",
  description: `Return, replacement and refund policy for products purchased from ${site.name}.`,
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy-950 py-14">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <h1 className="font-display text-3xl font-bold text-white">
            Refund &amp; Return Policy
          </h1>
          <p className="mt-2 text-sm text-ink-100/60">Last updated: July 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-8 px-5 py-14 text-ink-600 md:px-8">
        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            Damaged or wrong items
          </h2>
          <p className="mt-2">
            If your product arrives damaged, defective, or different from
            what you ordered, message us on WhatsApp within 48 hours of
            delivery with photos of the item and packaging. We&apos;ll arrange a
            replacement or refund at no extra cost once verified.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            Change of mind
          </h2>
          <p className="mt-2">
            Since orders are made-to-order or sourced on confirmation, we
            generally do not accept returns for change of mind. If you&apos;re
            unsure about a product, message us on WhatsApp before ordering —
            we&apos;re happy to answer questions and share more photos or details.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            Warranty claims
          </h2>
          <p className="mt-2">
            Products with a manufacturing warranty (see individual product
            pages) can be sent back for repair or replacement if they
            develop a genuine manufacturing fault within the warranty
            period. Physical damage, water damage or misuse are not covered.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            Refund method
          </h2>
          <p className="mt-2">
            Approved refunds are issued to the original payment method used,
            and typically processed within 5–7 business days of approval.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            How to request a return
          </h2>
          <p className="mt-2">
            Message us on WhatsApp with your order details, the issue, and
            supporting photos. We&apos;ll guide you through the next steps,
            including pickup if applicable.
          </p>
        </div>
      </section>
    </div>
  );
}
