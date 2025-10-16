/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { revealOnScroll } from "@/components/animations";

type FormState = { name: string; email: string; userType: "Consumer" | "Brand" | "Student" | "" };

export default function WaitlistForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", userType: "" });
  const [status, setStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; message?: string }>({ type: "idle" });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading" });
    try {
      const res = await fetch("/api/waitlist", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Submission failed");
      setStatus({ type: "success", message: data?.message || "Success" });
      setForm({ name: "", email: "", userType: "" });
    } catch (err: any) {
      setStatus({ type: "error", message: err?.message || "Error" });
    }
  };

  return (
    <section id="waitlist" className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <motion.h2 variants={revealOnScroll} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-3xl sm:text-4xl font-bold text-white">Join the Waitlist</motion.h2>
      <motion.form onSubmit={onSubmit} variants={revealOnScroll} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1">
          <label className="text-sm text-white/70">Full Name</label>
          <input type="text" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} required className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-white placeholder:text-white/40 outline-none focus:border-emerald-400" placeholder="Input full name" />
        </div>
        <div className="md:col-span-1">
          <label className="text-sm text-white/70">Email</label>
          <input type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} required className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-white placeholder:text-white/40 outline-none focus:border-emerald-400" placeholder="jane@example.com" />
        </div>
        <div className="md:col-span-1">
          <label className="text-sm text-white/70">User Type</label>
          <select value={form.userType} onChange={(e) => setForm((f) => ({ ...f, userType: e.target.value as FormState["userType"] }))} required className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-white outline-none focus:border-emerald-400">
            <option value="" className="text-black">Select...</option>
            <option value="Consumer" className="text-black">Consumer</option>
            <option value="Brand" className="text-black">Brand</option>
            <option value="Student" className="text-black">Student</option>
          </select>
        </div>
        <div className="md:col-span-1 flex items-end">
          <button type="submit" className="group w-full rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-black hover:bg-emerald-400 transition">
            <span>Join Waitlist</span>
          </button>
        </div>
      </motion.form>
      {status.type !== "idle" && (
        <div className="mt-4 text-sm">
          {status.type === "loading" && <span className="text-white/70">Submitting</span>}
          {status.type === "success" && <span className="text-emerald-400">{status.message}</span>}
          {status.type === "error" && <span className="text-red-400">{status.message}</span>}
        </div>
      )}
    </section>
  );
}
