import { Search, MessageCircle, PackageCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    n: "01",
    icon: Search,
    title: "Browse the catalog",
    body: "Look through our earpods, portable appliances, cables and kitchen appliances, and pick what fits.",
  },
  {
    n: "02",
    icon: MessageCircle,
    title: "Enquire on WhatsApp",
    body: "Tap the WhatsApp button on any product — it opens a chat with the product already filled in.",
  },
  {
    n: "03",
    icon: PackageCheck,
    title: "Confirm & receive",
    body: "We'll confirm price, quantity and delivery details with you directly, then get your order moving.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-ink-50 py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <AnimatedSection>
          <p className="font-mono text-xs uppercase tracking-wider text-copper-600">
            How ordering works
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy-900">
            No cart. Just a conversation.
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <AnimatedSection key={step.n} delay={i * 0.15}>
              <div className="relative rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
                <span className="font-mono text-4xl font-bold text-copper-100">
                  {step.n}
                </span>
                <span className="mt-3 flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900">
                  <step.icon className="h-5 w-5 text-copper-400" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {step.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
