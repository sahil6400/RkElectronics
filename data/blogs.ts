export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string[];
  seoTitle: string;
  seoDescription: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-wireless-earpods",
    title: "How to Choose the Right Wireless Earpods in 2026",
    excerpt:
      "Battery life, fit, latency, water resistance — here's what actually matters when picking your next TWS earpods.",
    date: "2026-06-02",
    readTime: "4 min read",
    seoTitle: "How to Choose the Right Wireless Earpods in 2026 | RK Electronics Blog",
    seoDescription:
      "A practical guide to choosing wireless earpods — battery life, fit, latency and water resistance explained simply.",
    content: [
      "Shopping for wireless earpods can feel overwhelming with every brand promising 'premium sound' and 'all-day battery'. Here's what actually separates a good pair from a forgettable one.",
      "Battery life on paper rarely matches real use. Look for earbuds that promise at least 5-6 hours of continuous playback with the case adding two to three full recharges — that's enough for a full work day plus a commute.",
      "Fit matters more than driver size. An earpod that keeps falling out during a walk is unusable no matter how good the bass is. Lighter shells with soft ear tips generally sit better for longer sessions.",
      "Latency matters if you watch videos or game on your phone. Look for a dedicated low-latency or gaming mode, usually under 100ms, so audio stays in sync with video.",
      "Finally, water resistance (IPX4 or higher) is worth having even if you don't work out — sweat and light rain are more common than people expect.",
      "If you're comparing options, our AirBeat Pro and SnugFit earpods are built around exactly these priorities — reach out to us on WhatsApp and we'll help you pick the right one for your use case.",
    ],
  },
  {
    slug: "portable-blenders-vs-regular-mixers",
    title: "Portable Juicer Mugs vs Regular Mixers: Which Do You Need?",
    excerpt:
      "A USB juicer mug and a kitchen mixer grinder solve different problems. Here's how to decide between them.",
    date: "2026-06-14",
    readTime: "3 min read",
    seoTitle: "Portable Juicer Mugs vs Mixer Grinders — Which Should You Buy? | RK Electronics",
    seoDescription:
      "Understand the difference between a portable USB juicer mug and a traditional mixer grinder before you buy.",
    content: [
      "A portable juicer mug and a mixer grinder look similar at a glance — both have blades, both blend things — but they're designed for very different jobs.",
      "A portable juicer mug like our PowerBlend Mug is built for single-serve blending: a protein shake before the gym, a fruit smoothie at your desk, a quick juice while travelling. It runs on a rechargeable battery, so it doesn't need a plug point nearby.",
      "A mixer grinder, on the other hand, is a kitchen workhorse. It's meant for batch cooking prep — grinding batter, making chutneys, blending larger quantities — and needs a steady power connection to handle tougher, longer jobs.",
      "If your need is personal and on-the-go, a portable mug covers it well. If you're prepping meals for a household, a proper mixer grinder is the better long-term investment. Many of our customers end up with both.",
    ],
  },
  {
    slug: "signs-your-charging-cable-needs-replacing",
    title: "5 Signs Your Charging Cable Needs Replacing",
    excerpt:
      "Slow charging isn't always your phone's fault. Here's how to tell when the cable itself is the problem.",
    date: "2026-07-01",
    readTime: "3 min read",
    seoTitle: "5 Signs Your Charging Cable Needs Replacing | RK Electronics Blog",
    seoDescription:
      "Learn the warning signs of a worn-out charging cable and why a braided cable lasts longer.",
    content: [
      "Charging cables are one of the most-replaced electronics accessories, and most people wait far too long to swap them out. Here are the signs to watch for.",
      "Slow or inconsistent charging is the most obvious sign. If your phone charges quickly on one cable but crawls on another, the cable's internal wiring has likely started to degrade.",
      "Visible fraying near the connector is a safety issue, not just a cosmetic one. Exposed wiring can cause short circuits and, in rare cases, overheating.",
      "A connector that needs to be held at 'just the right angle' to charge is telling you the internal contacts are wearing out.",
      "If your cable feels unusually hot during charging, stop using it immediately — this is a clear sign of internal resistance building up from damage.",
      "Braided cables, like our ArmorBraid range, are built specifically to resist the twisting and bending that causes most of this wear, which is why we recommend them for anyone who charges on the go.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
