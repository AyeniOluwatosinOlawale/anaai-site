"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "AI Strategy & Roadmapping",
    description:
      "I work with leadership teams to define a clear, executable AI roadmap — identifying high-value use cases, assessing AI readiness, and prioritizing investments that deliver measurable ROI.",
    outcomes: ["AI opportunity audit", "6-month roadmap", "Board-ready strategy deck"],
    color: "#2563EB",
    glow: "rgba(37,99,235,0.15)",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Automation & Workflow Intelligence",
    description:
      "End-to-end automation design using n8n, Python, and LLM integrations. I connect your CRM, data sources, and communication channels into intelligent pipelines that run themselves.",
    outcomes: ["Custom n8n workflows", "LLM integrations", "ROI-driven automation"],
    color: "#D97706",
    glow: "rgba(217,119,6,0.15)",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: "Data Architecture & Analytics",
    description:
      "Design and implement data infrastructure that your AI systems can actually use. From Supabase schemas to real-time dashboards and predictive analytics pipelines.",
    outcomes: ["Database design", "Real-time dashboards", "Predictive models"],
    color: "#10B981",
    glow: "rgba(16,185,129,0.15)",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "AI Product Development",
    description:
      "Full-stack AI product builds — from concept to deployment. React frontends, FastAPI backends, face recognition, conversational AI, and everything in between.",
    outcomes: ["Production-ready MVP", "Full-stack delivery", "Ongoing support"],
    color: "#8B5CF6",
    glow: "rgba(139,92,246,0.15)",
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative rounded-2xl border border-slate-800 bg-[#0F1B2D] p-8 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
      style={{ boxShadow: `0 0 0 0 ${service.glow}` }}
      whileHover={{ boxShadow: `0 20px 60px -10px ${service.glow}` }}
    >
      {/* Subtle gradient top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${service.color}60, transparent)` }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${service.color}18`, color: service.color }}
      >
        {service.icon}
      </div>

      <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
      <p className="text-slate-400 leading-relaxed mb-6">{service.description}</p>

      <ul className="space-y-2">
        {service.outcomes.map((outcome) => (
          <li key={outcome} className="flex items-center gap-2 text-sm text-slate-500">
            <svg className="w-4 h-4 shrink-0" style={{ color: service.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            {outcome}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function ServicesSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080E1A] via-[#0A1221] to-[#080E1A] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-4">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Services Built for
            <br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #FBBF24, #D97706)" }}>
              Real Business Impact
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            No fluff. Every engagement is scoped for measurable outcomes — faster processes,
            smarter decisions, and products that actually ship.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 text-sm">
            Not sure which service fits?{" "}
            <a
              href="https://calendly.com/anaai/discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#60A5FA] hover:text-white transition-colors underline underline-offset-4"
            >
              Let&apos;s talk it through
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
