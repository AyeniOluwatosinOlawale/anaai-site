"use client";
import { motion, useInView, useMotionValue, useMotionTemplate } from "framer-motion";
import { useRef, useCallback } from "react";
import Image from "next/image";

const CALENDLY = "https://calendly.com/app/intro/team";

const services = [
  {
    num: "01",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "AI Strategy & Roadmapping",
    description:
      "Work with leadership to define a clear, executable AI roadmap — identifying high-value use cases, assessing readiness, and prioritizing investments that deliver measurable ROI.",
    tags: ["AI Audit", "Roadmap", "Strategy Deck"],
    color: "#2563EB",
    glow: "rgba(37,99,235,0.18)",
    image: "/ai/service-strategy.png",
  },
  {
    num: "02",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Automation & Workflow Intelligence",
    description:
      "End-to-end automation using n8n, Python, and LLM integrations. Connect your CRM, data sources, and comms channels into intelligent pipelines that run themselves.",
    tags: ["n8n Workflows", "LLM Pipelines", "CRM Integration"],
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.18)",
    image: "/ai/service-automation.png",
  },
  {
    num: "03",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: "Data Architecture & Analytics",
    description:
      "Design data infrastructure your AI can actually use — Supabase schemas, real-time dashboards, and predictive analytics pipelines built for scale.",
    tags: ["Supabase", "Dashboards", "Predictive Models"],
    color: "#10B981",
    glow: "rgba(16,185,129,0.18)",
    image: "/ai/service-data.png",
  },
  {
    num: "04",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "AI Product Development",
    description:
      "Full-stack AI product builds from concept to production. React frontends, FastAPI backends, face recognition, conversational AI — everything in between.",
    tags: ["MVP Build", "Full-Stack", "Production Deploy"],
    color: "#8B5CF6",
    glow: "rgba(139,92,246,0.18)",
    image: "/ai/service-product.png",
  },
];

function SpotlightCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowColor = service.glow;
  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, ${glowColor}, transparent 80%)`;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY],
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div
        onMouseMove={handleMouseMove}
        className="relative group rounded-2xl border border-white/[0.07] bg-[#0a1628] p-8 h-full overflow-hidden cursor-default transition-all duration-300 hover:border-white/[0.18]"
      >
        {/* AI-generated background image — visible on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <Image
            src={service.image}
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-[#0a1628]/80" />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${service.color}18 0%, transparent 60%)`,
            }}
          />
        </div>

        {/* Spotlight glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
          style={{ background: spotlight }}
        />

        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${service.color}80, transparent)`,
          }}
        />

        <div className="flex items-start justify-between mb-6">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{ background: `${service.color}15`, color: service.color }}
          >
            {service.icon}
          </div>
          <span className="text-5xl font-black text-white/[0.04] font-mono select-none">
            {service.num}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-xs font-medium border"
              style={{
                borderColor: `${service.color}28`,
                color: service.color,
                background: `${service.color}0d`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hover arrow */}
        <div
          className="absolute bottom-7 right-7 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
          style={{ background: `${service.color}18`, color: service.color }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-3 block">
            What I Do
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-lg">
              Services Built for{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, #FCD34D, #F59E0B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Real Impact
              </span>
            </h2>
            <p className="text-slate-600 text-sm max-w-xs md:text-right leading-relaxed">
              No fluff — every engagement is scoped for measurable outcomes.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <SpotlightCard key={s.title} service={s} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-slate-700 text-sm mt-10"
        >
          Not sure which service fits?{" "}
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#60A5FA] hover:text-white transition-colors underline underline-offset-4"
          >
            Let&apos;s talk it through
          </a>
        </motion.p>
      </div>
    </section>
  );
}
