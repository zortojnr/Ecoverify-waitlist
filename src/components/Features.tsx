"use client";
import { motion } from "framer-motion";
import { revealOnScroll } from "@/components/animations";

const features = [
  { title: "Impact Analyzer", desc: "Quantify carbon, water, and waste impacts with precision", icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
        <path d="M3 3v18h18" /><path d="M7 15l4-4 4 4 4-8" />
      </svg>
    ) },
  { title: "Eco Badges", desc: "Trusted verification for products and brands", icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
        <path d="M12 2l7 4v6c0 5-3 8-7 10-4-2-7-5-7-10V6l7-4z" />
      </svg>
    ) },
  { title: "Transparent Reports", desc: "Share verifiable impact insights with stakeholders", icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
        <path d="M4 4h16v16H4z" /><path d="M8 8h8v4H8z" />
      </svg>
    ) },
  { title: "AI Insights", desc: "Smart recommendations for eco decisions", icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
        <circle cx="12" cy="12" r="9" /><path d="M12 7v10" />
      </svg>
    ) },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <motion.h2 variants={revealOnScroll} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-3xl sm:text-4xl font-bold text-white">Features</motion.h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div key={i} variants={revealOnScroll} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition">
            <div className="flex items-center gap-3">{f.icon}<span className="text-white font-semibold">{f.title}</span></div>
            <p className="mt-3 text-sm text-white/70">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
