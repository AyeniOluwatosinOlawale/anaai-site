"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Discovery",
    description:
      "We map your business, identify where AI creates the most leverage, and define success metrics before a single line of code is written.",
    color: "#2563EB",
    glow: "rgba(37,99,235,0.4)",
  },
  {
    num: "02",
    title: "Design & Build",
    description:
      "Rapid prototyping followed by a production-grade build — clean architecture, thorough testing, and systems designed to scale with you.",
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.4)",
  },
  {
    num: "03",
    title: "Launch & Scale",
    description:
      "Deploy with confidence. I handle the rollout, monitor performance, and optimize iteratively so your investment keeps compounding.",
    color: "#10B981",
    glow: "rgba(16,185,129,0.4)",
  },
];

export default function ProcessSection() {
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section id="process" className="py-32 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 50%, rgba(37,99,235,0.06), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ textWrap: "balance" } as React.CSSProperties}>
            From Idea to{" "}
            <span style={{ color: "#F59E0B" }}>Impact</span>
          </h2>
        </motion.div>

        <div className="relative grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Animated connector line */}
          <div className="absolute top-10 left-[calc(16.67%+2.5rem)] right-[calc(16.67%+2.5rem)] h-px hidden md:block overflow-hidden rounded-full">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.4, ease: "easeInOut" }}
              className="h-full origin-left"
              style={{
                background:
                  "linear-gradient(90deg, #2563EB, #F59E0B 50%, #10B981)",
              }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.15 }}
              className="relative text-center"
            >
              {/* Number circle */}
              <div className="relative w-20 h-20 mx-auto mb-8">
                <div
                  className="absolute inset-0 rounded-full blur-2xl opacity-50"
                  style={{ background: step.color }}
                />
                <div
                  className="relative w-20 h-20 rounded-full flex items-center justify-center border-2 text-2xl font-black font-mono"
                  style={{
                    borderColor: step.color,
                    background: `${step.color}10`,
                    color: step.color,
                    boxShadow: `0 0 30px ${step.glow}`,
                  }}
                >
                  {step.num}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
