"use client";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const CALENDLY = "https://calendly.com/app/intro/team";

const floatingBadges = [
  { label: "n8n Automation", x: "7%", y: "28%", delay: 0, rot: "-6deg", dur: "7s" },
  { label: "OpenAI API", x: "79%", y: "22%", delay: 1, rot: "5deg", dur: "6s" },
  { label: "FastAPI", x: "76%", y: "62%", delay: 1.5, rot: "-4deg", dur: "8s" },
  { label: "React & Next.js", x: "8%", y: "65%", delay: 0.5, rot: "4deg", dur: "7s" },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 50, damping: 20 });
  const springY = useSpring(cursorY, { stiffness: 50, damping: 20 });

  // Parallax on scroll
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    },
    [cursorX, cursorY],
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* AI-generated background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY, scale: bgScale }}
      >
        <Image
          src="/ai/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center" }}
        />
        {/* Dark overlay — keep text readable */}
        <div className="absolute inset-0 bg-[#030712]/70" />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, #030712 100%)",
          }}
        />
      </motion.div>

      {/* Mouse gradient follower */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[1] hidden lg:block"
        style={{
          background: `radial-gradient(700px circle at ${springX}px ${springY}px, rgba(37,99,235,0.09), transparent 60%)`,
        }}
      />

      {/* Animated overlay blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <div
          className="absolute w-[700px] h-[700px] rounded-full opacity-[0.12] blur-[110px]"
          style={{
            background: "radial-gradient(circle, #1E3A5F, #2563EB)",
            top: "5%",
            left: "-15%",
            animation: "blob 13s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.08] blur-[130px]"
          style={{
            background: "radial-gradient(circle, #F59E0B, #92400E)",
            top: "45%",
            right: "-8%",
            animation: "blob 16s ease-in-out infinite 4s",
          }}
        />
        <div
          className="absolute w-[350px] h-[350px] rounded-full opacity-[0.1] blur-[90px]"
          style={{
            background: "radial-gradient(circle, #7C3AED, #2563EB)",
            bottom: "8%",
            left: "35%",
            animation: "blob 11s ease-in-out infinite 7s",
          }}
        />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none z-[2]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating tech badges (desktop) */}
      {floatingBadges.map((b) => (
        <motion.div
          key={b.label}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 + b.delay, duration: 0.5 }}
          className="absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-white/[0.07] backdrop-blur-md text-xs text-slate-300 font-medium select-none cursor-default z-[3]"
          style={{
            left: b.x,
            top: b.y,
            transform: `rotate(${b.rot})`,
            animation: `float ${b.dur} ease-in-out infinite ${parseFloat(b.delay.toString()) * 0.4}s`,
            "--rot": b.rot,
          } as React.CSSProperties}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] opacity-60" />
          {b.label}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Headline — line by line reveal */}
        <h1 className="font-extrabold tracking-tight leading-[1.08] mb-3">
          <span className="block text-6xl sm:text-7xl md:text-8xl overflow-hidden">
            <motion.span
              className="block text-white"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              AI Strategy
            </motion.span>
          </span>
          <span className="block text-6xl sm:text-7xl md:text-8xl overflow-hidden">
            <motion.span
              className="block text-white"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.38, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              That Ships.
            </motion.span>
          </span>
        </h1>

        {/* Gold name */}
        <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-10 overflow-hidden">
          <motion.span
            className="block"
            style={{ color: "#F59E0B" }}
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.51, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            — Oluwatosin Ayeni
          </motion.span>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
        >
          I help businesses design, build, and ship AI systems that create lasting competitive
          advantage — from strategy through to production deployment.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold text-lg overflow-hidden transition-transform duration-200 hover:scale-[1.03]"
            style={{
              background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
              boxShadow: "0 0 50px rgba(37,99,235,0.45)",
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              Book a Discovery Call
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>

          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-lg border border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200"
          >
            View Services
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="text-slate-500 text-sm tracking-wide"
        >
          Strategy · automation · full-stack AI · across fintech, edtech, and ops
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-white/15 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2.5 rounded-full bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
