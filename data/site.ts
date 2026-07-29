export const site = {
  name: "RK Electronics",
  legalName: "RK Electronics",
  tagline: "Everyday electronics, built to last.",
  description:
    "RK Electronics designs and supplies premium everyday electronics — earpods, portable juicers, charger cables, mixers and grinders. Enquire and order directly on WhatsApp.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.rkelectronics.in",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210",
  email: "hello@rkelectronics.in",
  addressLine: "Karol Bagh, New Delhi, India",
  social: {
    instagram: "https://instagram.com/rkelectronics",
    facebook: "https://facebook.com/rkelectronics",
  },
  founded: 2018,
};

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${site.whatsappNumber}?text=${encoded}`;
}
