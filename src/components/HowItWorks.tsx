"use client";
import { motion } from "framer-motion";
import { revealOnScroll } from "@/components/animations";

const steps = [
  { title: "Sign Up", desc: "Join the waitlist for early access" },
  { title: "Verify", desc: "Connect your data and get verified" },
  { title: "Analyze", desc: "Explore eco impacts with intelligent insights" },
  { title: "Share", desc: "Publish transparent reports and badges" },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <motion.h2 variants={revealOnScroll} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-3xl sm:text-4xl font-bold text-white">How It Works</motion.h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <motion.div key={i} variants={revealOnScroll} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="relative rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <span className="absolute -top-3 -left-3 grid place-items-center w-8 h-8 rounded-full bg-emerald-500 text-black text-sm font-bold">{i + 1}</span>
            <div className="text-white font-semibold">{s.title}</div>
            <p className="mt-2 text-sm text-white/70">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
