"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AiLogo from "./AiLogo";

const CALENDLY = "https://calendly.com/ayenioluwatosinolawale/30min";
const links = ["Services", "Process", "Testimonials", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#030712]/85 backdrop-blur-2xl border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="https://anaai.tech/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 group">
            <AiLogo size={32} />
            <span className="font-bold text-white tracking-tight group-hover:text-[#60A5FA] transition-colors duration-200">
              Anaai.consult
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#2563EB] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50 hover:scale-[1.02]"
          >
            Book a Call
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <button
            className="md:hidden text-slate-400 hover:text-white"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[68px] left-4 right-4 z-40 rounded-2xl bg-[#0a1628]/96 backdrop-blur-xl border border-white/10 p-6 flex flex-col gap-4 shadow-2xl"
          >
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 hover:text-white text-sm font-medium transition-colors py-1"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full text-center px-5 py-3 rounded-xl bg-[#2563EB] text-sm font-semibold hover:bg-[#1D4ED8] transition-colors"
            >
              Book a Discovery Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
