"use client";
import { motion } from "framer-motion";
import EcoParticles from "@/components/EcoParticles";
import Logo from "@/components/Logo";
import { fadeInUp, scaleIn } from "@/components/animations";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,193,110,0.10),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.04),transparent_60%)]" />
      <EcoParticles />
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-28 sm:pt-32 sm:pb-36">
        <div className="flex items-center justify-between">
          <Logo />
          <a href="#waitlist" className="text-sm text-white/70 hover:text-white transition">Join Waitlist</a>
        </div>
        <div className="mt-16 grid gap-6 sm:gap-8">
          <motion.h1 variants={fadeInUp} initial="hidden" animate="visible" className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Bold, Intelligent Sustainability
            <span className="block text-emerald-400">for Future-Ready Brands</span>
          </motion.h1>
          <motion.p variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="max-w-2xl text-base sm:text-lg text-white/80">
            Ecoverify blends data, design, and strategy to help consumers and brands make eco-conscious decisions - powerfully and transparently.
          </motion.p>
          <motion.div variants={scaleIn} initial="hidden" animate="visible" className="mt-6 flex items-center gap-3">
            <a href="#waitlist" className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-black hover:bg-emerald-400 transition">
              <span>Join Waitlist</span>
              <span className="grid place-items-center rounded-md bg-black/20 p-1 transition group-hover:bg-black/10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                  <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a href="#features" className="text-sm text-white/70 hover:text-white transition">Explore Features</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
