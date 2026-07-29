import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.name} — how we collect, use and protect your information.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy-950 py-14">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <h1 className="font-display text-3xl font-bold text-white">Privacy Policy</h1>
          <p className="mt-2 text-sm text-ink-100/60">Last updated: July 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-8 px-5 py-14 text-ink-600 md:px-8">
        <p>
          {site.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the website {site.url}
          (the &quot;Site&quot;). This Privacy Policy explains how we collect, use and
          protect information when you visit the Site or contact us to
          enquire about or order our products.
        </p>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            1. Information we collect
          </h2>
          <p className="mt-2">
            Because orders are placed through WhatsApp rather than an online
            checkout, we do not collect payment card details or account
            passwords through this Site. Information we may receive includes:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Your name, phone number and delivery address, shared by you directly on WhatsApp when placing an order.</li>
            <li>Your email address, if you contact us via email.</li>
            <li>Basic usage data such as pages visited and general location, collected automatically through standard analytics tools.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            2. How we use your information
          </h2>
          <p className="mt-2">We use the information you share with us to:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Confirm product availability, pricing and process your order.</li>
            <li>Coordinate delivery and provide order updates.</li>
            <li>Respond to questions and support requests.</li>
            <li>Improve our products, catalog and Site content.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            3. WhatsApp communication
          </h2>
          <p className="mt-2">
            When you tap a &quot;WhatsApp&quot; button on this Site, you are redirected
            to WhatsApp&apos;s own platform, operated by WhatsApp/Meta. Any
            conversation you have with us there is also subject to WhatsApp&apos;s
            own privacy policy and terms. We only use details you share on
            WhatsApp to process your enquiry or order.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            4. Data sharing
          </h2>
          <p className="mt-2">
            We do not sell your personal information. We may share necessary
            order details (such as name, address and phone number) with
            delivery partners solely to fulfil your order.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            5. Cookies &amp; analytics
          </h2>
          <p className="mt-2">
            The Site may use basic cookies or analytics tools to understand
            how visitors use it, so we can improve content and performance.
            These do not collect payment information.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            6. Your choices
          </h2>
          <p className="mt-2">
            You can choose not to share personal information with us, though
            this may limit our ability to process an order. You may request
            that we delete information you&apos;ve shared with us by emailing{" "}
            <a href={`mailto:${site.email}`} className="text-copper-600 underline">
              {site.email}
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            7. Changes to this policy
          </h2>
          <p className="mt-2">
            We may update this Privacy Policy from time to time. Changes will
            be posted on this page with an updated &quot;last updated&quot; date.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-navy-900">
            8. Contact us
          </h2>
          <p className="mt-2">
            For any privacy-related questions, email us at{" "}
            <a href={`mailto:${site.email}`} className="text-copper-600 underline">
              {site.email}
            </a>{" "}
            or message us on WhatsApp.
          </p>
        </div>
      </section>
    </div>
  );
}
