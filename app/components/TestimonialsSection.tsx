"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "Oluwatosin transformed our operations in 8 weeks. What used to take our team 3 days now runs automatically overnight. The AI strategy he developed became our internal playbook for the next 2 years.",
    name: "Desmond Enechi",
    role: "COO, EduTechConnect",
    initials: "DE",
    color: "#2563EB",
  },
  {
    quote:
      "We came in with a vague idea of 'using AI' and left with a fully working product. The face recognition attendance system he built has been flawless for 200+ employees. Highly recommend.",
    name: "Amara Okonkwo",
    role: "Head of HR, Stellar Labs",
    initials: "AO",
    color: "#D97706",
  },
  {
    quote:
      "The data architecture work alone saved us from a rewrite 6 months down the line. He thinks in systems, not just code. That's rare and incredibly valuable for an early-stage product.",
    name: "Taiwo Adegboyega",
    role: "Founder, Purple Squirrel",
    initials: "TA",
    color: "#8B5CF6",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#FBBF24]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="py-32 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#1E3A5F]/20 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#D97706] text-sm font-semibold tracking-widest uppercase mb-4">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Results Speak
            <br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #FBBF24, #D97706)" }}>
              Louder Than Promises
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative rounded-2xl border border-slate-800 bg-[#0F1B2D] p-8 flex flex-col"
            >
              {/* Quote mark */}
              <div
                className="absolute top-6 right-8 text-6xl font-serif leading-none select-none"
                style={{ color: `${t.color}20` }}
              >
                &ldquo;
              </div>

              <StarRating />

              <blockquote className="text-slate-300 leading-relaxed flex-1 mb-8">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-slate-600"
        >
          {["Strategy Consulting", "AI Engineering", "Automation", "Data Systems", "Product Development"].map((tag) => (
            <span key={tag} className="text-sm border border-slate-800 rounded-full px-4 py-1.5">
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
