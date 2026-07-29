export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  tagline: string;
  price: string;
  badge?: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  image: string;
  seoTitle: string;
  seoDescription: string;
};

export const categories = [
  { name: "Earpods & Audio", slug: "earpods-audio" },
  { name: "Portable Appliances", slug: "portable-appliances" },
  { name: "Charging Cables", slug: "charging-cables" },
  { name: "Kitchen Appliances", slug: "kitchen-appliances" },
];

export const products: Product[] = [
  {
    id: "1",
    slug: "airbeat-pro-tws-earpods",
    name: "AirBeat Pro TWS Earpods",
    category: "Earpods & Audio",
    categorySlug: "earpods-audio",
    tagline: "Punchy bass, all-day comfort, zero wires.",
    price: "₹1,299 onwards",
    badge: "Bestseller",
    description:
      "AirBeat Pro is a true-wireless earpod built for people who live in their headphones — commutes, calls, workouts, and everything between. A tuned 13mm driver delivers deep bass without losing clarity in the mids and highs, while the ergonomic shell sits comfortably for hours. Touch controls handle calls and playback, and the compact charging case adds multiple extra charges on the go.",
    features: [
      "13mm dynamic driver with deep bass tuning",
      "Touch controls for calls, music & voice assistant",
      "Up to 6 hours playback, 24 hours with case",
      "IPX4 sweat and splash resistant",
      "Low-latency mode for gaming and video",
      "Compact pocket-friendly charging case",
    ],
    specs: {
      "Driver size": "13mm dynamic",
      Connectivity: "Bluetooth 5.3",
      "Battery (earbuds)": "40mAh each",
      "Battery (case)": "400mAh",
      "Playback time": "6 hrs / 24 hrs with case",
      "Water resistance": "IPX4",
      Warranty: "6 months manufacturing warranty",
    },
    image: "https://placehold.co/900x900/161D2E/C77D4B?text=AirBeat+Pro&font=raleway",
    seoTitle: "AirBeat Pro TWS Earpods — Wireless Bluetooth Earbuds | RK Electronics",
    seoDescription:
      "AirBeat Pro TWS earpods with deep bass, touch controls and 24-hour battery life. Enquire and order directly on WhatsApp from RK Electronics.",
  },
  {
    id: "2",
    slug: "snugfit-wireless-earpods",
    name: "SnugFit Wireless Earpods",
    category: "Earpods & Audio",
    categorySlug: "earpods-audio",
    tagline: "Lightweight fit that stays put, all day.",
    price: "₹999 onwards",
    description:
      "SnugFit is built around one idea — comfort that lasts. A featherlight shell and soft in-ear tips keep these earpods secure through workouts, work calls and travel, backed by clean, balanced sound and quick-charge convenience for busy days.",
    features: [
      "Ultra-light ergonomic shell, 4.2g per earbud",
      "Balanced sound signature for calls & music",
      "Quick charge: 10 min charge for 1 hour playback",
      "One-tap pairing with auto-connect",
      "In-built mic with noise reduction for calls",
    ],
    specs: {
      Connectivity: "Bluetooth 5.2",
      "Battery (earbuds)": "35mAh each",
      "Battery (case)": "350mAh",
      "Playback time": "5 hrs / 20 hrs with case",
      Weight: "4.2g per earbud",
      Warranty: "6 months manufacturing warranty",
    },
    image: "https://placehold.co/900x900/161D2E/C77D4B?text=SnugFit&font=raleway",
    seoTitle: "SnugFit Wireless Earpods — Lightweight Bluetooth Earbuds | RK Electronics",
    seoDescription:
      "SnugFit wireless earpods offer a featherlight fit, balanced sound and quick charging. Order on WhatsApp from RK Electronics.",
  },
  {
    id: "3",
    slug: "powerblend-portable-juicer-mug",
    name: "PowerBlend Portable Juicer Mug",
    category: "Portable Appliances",
    categorySlug: "portable-appliances",
    tagline: "Fresh juice anywhere, one USB charge away.",
    price: "₹899 onwards",
    badge: "Trending",
    description:
      "The PowerBlend Mug turns any desk, gym bag or kitchen counter into a juice bar. A rechargeable base with a 6-blade stainless steel blade blends fruits, shakes and smoothies straight into a travel-friendly bottle — no cords, no fixed outlet needed. Charge it once over USB and blend for days.",
    features: [
      "6-blade 304 stainless steel blending blade",
      "Rechargeable via USB-C, no fixed outlet needed",
      "400ml leak-proof travel bottle",
      "One-touch blending with safety lock lid",
      "Easy to clean — rinse and go",
    ],
    specs: {
      Capacity: "400ml",
      Battery: "2000mAh rechargeable",
      Charging: "USB-C",
      "Blade material": "304 stainless steel",
      "Blends per charge": "Approx. 12-15 uses",
      Warranty: "3 months manufacturing warranty",
    },
    image: "https://placehold.co/900x900/161D2E/C77D4B?text=PowerBlend+Mug&font=raleway",
    seoTitle: "PowerBlend Portable USB Juicer Mug | RK Electronics",
    seoDescription:
      "Rechargeable portable juicer mug with stainless steel blades — blend smoothies anywhere. Enquire on WhatsApp from RK Electronics.",
  },
  {
    id: "4",
    slug: "armorbraid-type-c-cable",
    name: "ArmorBraid Type-C Fast Charging Cable",
    category: "Charging Cables",
    categorySlug: "charging-cables",
    tagline: "Braided strength, built to survive daily life.",
    price: "₹249 onwards",
    description:
      "ArmorBraid is a nylon-braided Type-C cable engineered for the way people actually use cables — twisted in bags, pulled around desks, bent at odd angles. Reinforced aramid-fibre core connectors and 3A fast-charge support mean it charges quickly and keeps working long after ordinary cables fray.",
    features: [
      "Nylon braided jacket, tangle and fray resistant",
      "Reinforced connector joints rated for 10,000+ bends",
      "3A fast charging & fast data sync",
      "Available in 1m and 1.5m lengths",
      "Compatible with all USB-C devices",
    ],
    specs: {
      Connector: "USB-A to Type-C",
      "Current rating": "3A fast charging",
      Length: "1m / 1.5m",
      Jacket: "Nylon braided",
      Warranty: "6 months manufacturing warranty",
    },
    image: "https://placehold.co/900x900/161D2E/C77D4B?text=ArmorBraid+Type-C&font=raleway",
    seoTitle: "ArmorBraid Type-C Fast Charging Cable | RK Electronics",
    seoDescription:
      "Durable nylon-braided Type-C fast charging cable rated for 10,000+ bends. Enquire and order on WhatsApp from RK Electronics.",
  },
  {
    id: "5",
    slug: "armorbraid-lightning-cable",
    name: "ArmorBraid Lightning Fast Charging Cable",
    category: "Charging Cables",
    categorySlug: "charging-cables",
    tagline: "The reliable cable your iPhone deserves.",
    price: "₹299 onwards",
    description:
      "Built on the same braided, reinforced design as our Type-C cable, the ArmorBraid Lightning cable is tuned for Apple devices — fast, stable charging and steady data transfer without the fraying that ends most cables early.",
    features: [
      "Nylon braided jacket, tangle and fray resistant",
      "MFi-style stable charging performance",
      "Supports fast charging on compatible adapters",
      "Available in 1m and 1.5m lengths",
      "Reinforced strain-relief connectors",
    ],
    specs: {
      Connector: "USB-A to Lightning",
      Length: "1m / 1.5m",
      Jacket: "Nylon braided",
      Warranty: "6 months manufacturing warranty",
    },
    image: "https://placehold.co/900x900/161D2E/C77D4B?text=ArmorBraid+Lightning&font=raleway",
    seoTitle: "ArmorBraid Lightning Fast Charging Cable | RK Electronics",
    seoDescription:
      "Durable braided Lightning charging cable for iPhone with fast, stable charging. Order on WhatsApp from RK Electronics.",
  },
  {
    id: "6",
    slug: "turbomix-3-jar-mixer-grinder",
    name: "TurboMix 3-Jar Mixer Grinder",
    category: "Kitchen Appliances",
    categorySlug: "kitchen-appliances",
    tagline: "One motor, every kitchen job, done fast.",
    price: "₹2,499 onwards",
    badge: "Bestseller",
    description:
      "TurboMix is a household mixer grinder built around a high-torque copper-wound motor that keeps its power even on tough grinding jobs. Three stainless steel jars cover wet grinding, dry grinding and chutney work, so one appliance handles the full range of daily kitchen prep.",
    features: [
      "High-torque copper-wound motor, 550W",
      "3 stainless steel jars: liquidiser, dry & chutney",
      "3-speed control plus incher for pulse grinding",
      "Overload protection with automatic thermal cut-off",
      "Rubber feet for stability during heavy grinding",
    ],
    specs: {
      Power: "550W",
      Jars: "3 (liquidiser, dry, chutney)",
      Speed: "3-speed + incher",
      "Body material": "ABS food-grade plastic",
      Warranty: "12 months on motor",
    },
    image: "https://placehold.co/900x900/161D2E/C77D4B?text=TurboMix+Grinder&font=raleway",
    seoTitle: "TurboMix 3-Jar Mixer Grinder | RK Electronics",
    seoDescription:
      "550W high-torque mixer grinder with 3 stainless steel jars for everyday kitchen prep. Enquire on WhatsApp from RK Electronics.",
  },
  {
    id: "7",
    slug: "spicepro-dry-grinder",
    name: "SpicePro Dry Grinder",
    category: "Kitchen Appliances",
    categorySlug: "kitchen-appliances",
    tagline: "Fine, even grinding for spices and dry masalas.",
    price: "₹799 onwards",
    description:
      "SpicePro is a compact dry grinder purpose-built for spices, dals and dry chutneys. A stainless steel blade and heavy-duty jar handle repeated daily grinding without losing sharpness, while the compact footprint keeps it easy to store in any kitchen.",
    features: [
      "Dedicated stainless steel grinding jar",
      "High-speed motor for fine, even texture",
      "Compact footprint, easy to store",
      "Detachable jar for easy cleaning",
      "Anti-skid base for stable grinding",
    ],
    specs: {
      Power: "300W",
      "Jar capacity": "150g dry spices",
      "Body material": "ABS food-grade plastic",
      Warranty: "6 months on motor",
    },
    image: "https://placehold.co/900x900/161D2E/C77D4B?text=SpicePro+Grinder&font=raleway",
    seoTitle: "SpicePro Dry Grinder for Spices & Masala | RK Electronics",
    seoDescription:
      "Compact dry grinder for spices and dry masalas with a stainless steel jar. Order directly on WhatsApp from RK Electronics.",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((p) => p.categorySlug === categorySlug);
}
