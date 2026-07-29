"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Headphones, Cable, Coffee, CookingPot } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import { generalEnquiryLink } from "@/lib/whatsapp";

const nodes = [
  { icon: Headphones, label: "Audio", cx: 60, cy: 40 },
  { icon: Cable, label: "Cables", cx: 220, cy: 130 },
  { icon: Coffee, label: "Portable", cx: 400, cy: 55 },
  { icon: CookingPot, label: "Kitchen", cx: 560, cy: 140 },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-20 pt-16 md:pb-28 md:pt-20">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-copper-500/30 bg-copper-500/10 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-copper-400">
              Order directly on WhatsApp
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] text-white md:text-5xl">
              Everyday electronics,
              <br />
              <span className="text-copper-400">built to last.</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-100/70">
              Earpods, portable juicer mugs, charging cables, mixers and grinders —
              browse our catalog, then enquire and place your order in one chat.
              No cart, no checkout, just a straight conversation.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="rounded-full bg-copper-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-copper-600 hover:shadow-glow"
              >
                Browse Products
              </Link>
              <WhatsAppButton href={generalEnquiryLink()} label="Chat on WhatsApp" />
            </div>
          </motion.div>

          <motion.div
            className="relative hidden h-64 md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <svg
              viewBox="0 0 620 200"
              className="h-full w-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M60 40 C 140 40, 150 130, 220 130 S 340 55, 400 55 S 500 140, 560 140"
                stroke="#C77D4B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="1000"
                className="animate-trace-draw"
              />
              {nodes.map((n, i) => (
                <circle key={`dot-${i}`} cx={n.cx} cy={n.cy} r="4" fill="#43CB86" />
              ))}
            </svg>
            {nodes.map((n, i) => {
              const Icon = n.icon;
              return (
                <motion.div
                  key={n.label}
                  className="absolute flex flex-col items-center gap-2"
                  style={{
                    left: `${(n.cx / 620) * 100}%`,
                    top: `${(n.cy / 200) * 100}%`,
                    transform: "translate(-50%, -130%)",
                  }}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.25 }}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-copper-500/30 bg-navy-800 shadow-glow">
                    <Icon className="h-5 w-5 text-copper-400" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wide text-ink-100/60">
                    {n.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
