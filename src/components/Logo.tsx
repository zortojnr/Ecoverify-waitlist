"use client";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div initial={{ opacity: 0, filter: "blur(6px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} className="relative flex items-center gap-3">
      <motion.div initial={{ scale: 0.9, boxShadow: "0 0 0 rgba(0,0,0,0)" }} animate={{ scale: 1, boxShadow: ["0 0 14px rgba(0,193,110,0.4)", "0 0 24px rgba(0,193,110,0.6)", "0 0 14px rgba(0,193,110,0.4)"] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} className="grid place-items-center w-9 h-9 rounded-md bg-emerald-500">
        <span className="h-4 w-4 bg-white rounded-sm" />
      </motion.div>
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl font-semibold tracking-wide">
        <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-white bg-clip-text text-transparent">Ecoverify</span>
      </motion.span>
    </motion.div>
  );
}
