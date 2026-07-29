import { buildWhatsAppLink } from "@/data/site";

export function productEnquiryLink(productName: string) {
  const message = `Hi RK Electronics, I'd like to enquire about the ${productName}. Could you share price, availability and how to order?`;
  return buildWhatsAppLink(message);
}

export function generalEnquiryLink() {
  const message = `Hi RK Electronics, I have a question about your products.`;
  return buildWhatsAppLink(message);
}
