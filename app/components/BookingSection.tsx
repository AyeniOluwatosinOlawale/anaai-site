"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CALENDLY = "https://calendly.com/ayenioluwatosinolawale/30min";

export default function BookingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Animated ambient light */}
      <div
        className="absolute w-[900px] h-[900px] rounded-full blur-[160px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.18), transparent 65%)",
          bottom: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          animation: "breathe 14s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(245,158,11,0.12), transparent 70%)",
          top: "10%",
          right: "5%",
          animation: "aurora 19s ease-in-out infinite 4s",
        }}
      />

      {/* Vertical top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-[#2563EB]/40 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F59E0B]/25 bg-[#F59E0B]/8 text-[#FCD34D] text-sm font-medium mb-8">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5"
              />
            </svg>
            Free 30-minute discovery call
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] mb-6" style={{ textWrap: "balance" } as React.CSSProperties}>
            Ready to Build{" "}
            <span style={{ color: "#F59E0B" }}>Something Intelligent?</span>
          </h2>

          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Let&apos;s spend 30 minutes mapping exactly how AI can transform your business. No
            commitment. No sales pitch. Just clarity.
          </p>

          {/* CTA */}
          <motion.a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-white font-bold text-xl transition-shadow duration-300"
            style={{
              background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
              boxShadow:
                "0 0 60px rgba(37,99,235,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 80px rgba(37,99,235,0.65), inset 0 1px 0 rgba(255,255,255,0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 60px rgba(37,99,235,0.5), inset 0 1px 0 rgba(255,255,255,0.08)";
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5"
              />
            </svg>
            Schedule on Calendly
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>

          <div className="flex items-center gap-4 mt-8 mb-4 max-w-xs mx-auto">
            <div className="flex-1 h-px bg-white/5" />
            <span className="text-slate-500 text-xs">or reach out directly</span>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          <div className="flex flex-col items-center gap-2">
            <a
              href="tel:+447727305230"
              className="text-slate-400 hover:text-[#60A5FA] transition-colors text-sm"
            >
              +44 7727 305230
            </a>
            <a
              href="mailto:ayenioluwatosinolawale@gmail.com"
              className="text-slate-400 hover:text-[#60A5FA] transition-colors text-sm"
            >
              ayenioluwatosinolawale@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
