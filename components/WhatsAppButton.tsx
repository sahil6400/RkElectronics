import { MessageCircle } from "lucide-react";

export default function WhatsAppButton({
  href,
  label = "Enquire on WhatsApp",
  full = false,
}: {
  href: string;
  label?: string;
  full?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-volt-500 px-5 py-3 text-sm font-semibold text-navy-950 transition-all duration-300 hover:bg-volt-400 hover:shadow-glow active:scale-[0.98] ${
        full ? "w-full" : ""
      }`}
    >
      <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
      {label}
    </a>
  );
}
