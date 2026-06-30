"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function BookingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080E1A] to-[#0A1530] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent" />

      {/* Decorative orbs */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#2563EB]/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-[#A16207]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D97706]/40 bg-[#D97706]/10 text-[#FBBF24] text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24]" />
            Free 30-minute discovery call
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Ready to Build
            <br />
            Something{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FBBF24, #D97706)" }}
            >
              Intelligent?
            </span>
          </h2>

          <p className="text-slate-400 text-xl leading-relaxed mb-12 max-w-xl mx-auto">
            Let&apos;s spend 30 minutes mapping out how AI can transform your specific business — no
            commitment, no sales pitch.
          </p>

          {/* CTA Button */}
          <motion.a
            href="https://calendly.com/anaai/discovery"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-white font-bold text-xl transition-shadow duration-300"
            style={{
              background: "linear-gradient(135deg, #2563EB 0%, #1E3A5F 100%)",
              boxShadow: "0 0 0 1px rgba(37,99,235,0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 20px 60px -10px rgba(37,99,235,0.5), 0 0 0 1px rgba(37,99,235,0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 0 1px rgba(37,99,235,0.4)";
            }}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
            </svg>
            Schedule on Calendly
          </motion.a>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8 max-w-xs mx-auto">
            <div className="flex-1 h-px bg-slate-800" />
            <span className="text-slate-600 text-sm">or</span>
            <div className="flex-1 h-px bg-slate-800" />
          </div>

          {/* Email */}
          <p className="text-slate-500 text-sm">
            Prefer email?{" "}
            <a
              href="mailto:hello@anaai.tech"
              className="text-[#60A5FA] hover:text-white transition-colors underline underline-offset-4"
            >
              hello@anaai.tech
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
