"use client";
import { motion } from "framer-motion";
import { revealOnScroll } from "@/components/animations";

const testimonials = [
  { quote: "Strategy-driven sustainability that actually moves the needle.", name: "Richard Zorto", role: "Software Engineer at Ecoverify" },
  { quote: "Transparent, powerful, and beautifully executed.", name: "Reezaal Arafat", role: "Founder at Ecoverify" },
  { quote: "A bold approach to eco-techfinally.", name: "X user", role: "" },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <motion.h2 variants={revealOnScroll} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-3xl sm:text-4xl font-bold text-white">What People Say</motion.h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div key={i} variants={revealOnScroll} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition">
            <p className="text-white/90">{t.quote}</p>
            <div className="mt-4 text-sm text-white/60">
              <span>{t.name}</span>
              {t.role && <span>, {t.role}</span>}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
