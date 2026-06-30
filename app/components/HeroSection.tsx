"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grain"
      id="hero"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#1E3A5F]/30 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#2563EB]/15 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#A16207]/8 blur-[160px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2563EB]/40 bg-[#2563EB]/10 text-[#60A5FA] text-sm font-medium mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24] animate-pulse" />
          Available for new projects · 2026
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold tracking-tight leading-none mb-4"
        >
          <span className="text-white">Oluwatosin</span>
          <br />
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(135deg, #FBBF24 0%, #D97706 50%, #A16207 100%)",
            }}
          >
            Ayeni
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-xl md:text-2xl text-slate-300 font-light tracking-wide mb-6"
        >
          AI Strategy &amp; Technology Consultant
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-12"
        >
          I help businesses design, build, and deploy AI systems that create lasting competitive
          advantage — from strategy to production.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://calendly.com/anaai/discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-900/40"
          >
            Book a Discovery Call
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-slate-700 hover:border-[#2563EB]/60 text-slate-300 hover:text-white font-semibold text-lg transition-all duration-200 hover:bg-white/5"
          >
            View Services
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "12+", label: "Industries Served" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-[#FBBF24]">{stat.value}</p>
              <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent"
        />
      </motion.div>
    </section>
  );
}
