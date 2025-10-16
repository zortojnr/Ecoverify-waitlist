"use client";
import { motion } from "framer-motion";
import { revealOnScroll } from "@/components/animations";

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <motion.h2 variants={revealOnScroll} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-3xl sm:text-4xl font-bold text-white">What is Ecoverify?</motion.h2>
      <motion.p variants={revealOnScroll} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mt-4 max-w-3xl text-white/80">
        Ecoverify is a sustainability platform that empowers consumers and brands to make data-driven eco decisions. From impact insights to transparent reporting, we help you move beyond buzzwords and into measurable results.
      </motion.p>
    </section>
  );
}
