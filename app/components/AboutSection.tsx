"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.09), transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "breathe 18s ease-in-out infinite 3s",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left — text */}
          <div>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              Built for businesses that take{" "}
              <span style={{ color: "#F59E0B" }}>AI seriously</span>
            </h2>

            <p className="text-slate-400 leading-relaxed mb-5">
              Anaai is an AI consulting practice founded by Oluwatosin Ayeni — a technologist
              who has spent years designing and shipping production AI systems across fintech,
              edtech, and operations. Not theory. Real systems, real results.
            </p>

            <p className="text-slate-400 leading-relaxed mb-8">
              We partner with founders and leadership teams to move fast without moving recklessly
              — from defining the right AI strategy to deploying it in production.
            </p>

            <a
              href="https://anaai.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.03]"
              style={{
                background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                boxShadow: "0 0 30px rgba(37,99,235,0.35)",
                color: "#ffffff",
              }}
            >
              Explore Anaai.tech
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right — stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "50+", label: "AI projects delivered", color: "#2563EB" },
              { value: "12+", label: "Industries served", color: "#F59E0B" },
              { value: "3", label: "Core service pillars", color: "#10B981" },
              { value: "End-to-end", label: "Strategy to production", color: "#8B5CF6" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="rounded-2xl border border-white/[0.07] bg-[#0a1628] p-6"
              >
                <p
                  className="text-2xl font-extrabold mb-1"
                  style={{ color: item.color }}
                >
                  {item.value}
                </p>
                <p className="text-slate-400 text-xs leading-snug">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
