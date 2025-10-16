"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/animations";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/70 text-sm"> {new Date().getFullYear()} Ecoverify. All rights reserved.</div>
          <div className="flex items-center gap-3 text-white/70 text-sm">
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
