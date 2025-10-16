"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Particle = { id: number; size: number; x: number; y: number; delay: number };

export default function EcoParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate particle positions client-side after hydration to avoid SSR mismatch
  useEffect(() => {
    const data: Particle[] = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      size: 8 + Math.round(Math.random() * 12),
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
    }));
    setParticles(data);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{ opacity: 0.1, y: 0 }}
          animate={{ opacity: [0.15, 0.6, 0.2], y: [0, -12, 0] }}
          transition={{ duration: 6 + p.delay, repeat: Infinity, ease: "easeInOut" }}
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          className="absolute rounded-full bg-emerald-400/20 blur-[2px]"
        >
          <span style={{ width: p.size, height: p.size, display: "block" }} />
        </motion.span>
      ))}
      <motion.div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,193,110,0.25), rgba(0,193,110,0.05) 60%, transparent 70%)",
        }}
        initial={{ scale: 0.95, opacity: 0.5 }}
        animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.5, 0.65, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
