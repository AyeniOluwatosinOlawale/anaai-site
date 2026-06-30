"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (y) => setScrolled(y > 60));
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080E1A]/90 backdrop-blur-xl border-b border-blue-900/30 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#1E3A5F] flex items-center justify-center text-xs font-bold tracking-tight">
            A
          </div>
          <span className="font-semibold text-white tracking-tight group-hover:text-[#FBBF24] transition-colors">
            Anaai.tech
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          {["Services", "About", "Testimonials", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="https://calendly.com/anaai/discovery"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-sm font-medium transition-colors"
        >
          Book a Call
        </a>
      </div>
    </motion.nav>
  );
}
