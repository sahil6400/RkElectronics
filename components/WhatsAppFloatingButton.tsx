"use client";

import { MessageCircle } from "lucide-react";
import { generalEnquiryLink } from "@/lib/whatsapp";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={generalEnquiryLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with RK Electronics on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-volt-500 text-navy-950 shadow-lg animate-pulse-ring hover:bg-volt-400 transition-colors duration-300 md:bottom-8 md:right-8"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
