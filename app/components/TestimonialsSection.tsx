"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "Oluwatosin transformed our operations in 8 weeks. What used to take 3 days now runs automatically overnight. His AI strategy became our internal playbook.",
    name: "Desmond Enechi",
    role: "COO, EduTechConnect",
    initials: "DE",
    color: "#2563EB",
  },
  {
    quote:
      "We came in with a vague idea of 'using AI' and left with a fully working product. The face recognition attendance system has been flawless for 200+ employees.",
    name: "Amara Okonkwo",
    role: "Head of HR, Stellar Labs",
    initials: "AO",
    color: "#F59E0B",
  },
  {
    quote:
      "The data architecture work alone saved us from a rewrite 6 months later. He thinks in systems, not just code — incredibly rare and valuable.",
    name: "Taiwo Adegboyega",
    role: "Founder, Purple Squirrel",
    initials: "TA",
    color: "#8B5CF6",
  },
  {
    quote:
      "Automated our entire lead qualification pipeline. Sales went from manually checking 500 leads/week to having hot leads delivered to their WhatsApp. Game-changer.",
    name: "Chukwuemeka Nweze",
    role: "VP Sales, TechBridge Africa",
    initials: "CN",
    color: "#10B981",
  },
  {
    quote:
      "We needed someone who could translate business problems into AI solutions. Oluwatosin did that flawlessly — on time and under budget.",
    name: "Fatima Al-Hassan",
    role: "CTO, EdAI Systems",
    initials: "FA",
    color: "#F59E0B",
  },
  {
    quote:
      "The automation processes our WhatsApp inquiries 24/7. Response time went from hours to seconds and conversion jumped 40%.",
    name: "Blessing Okafor",
    role: "CEO, VestaLearn",
    initials: "BO",
    color: "#2563EB",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-[#F59E0B]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="relative shrink-0 w-[320px] rounded-2xl border border-white/[0.06] bg-[#0a1628] p-6 mx-2.5 select-none">
      <Stars />
      <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-4">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
          style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}80)` }}
        >
          {t.initials}
        </div>
        <div>
          <p className="text-white text-sm font-semibold leading-tight">{t.name}</p>
          <p className="text-slate-600 text-xs mt-0.5">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

const FADE_MASK =
  "[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]";

export default function TestimonialsSection() {
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: "-60px" });

  const row1 = [...testimonials.slice(0, 3), ...testimonials.slice(0, 3), ...testimonials.slice(0, 3), ...testimonials.slice(0, 3)];
  const row2 = [...testimonials.slice(3), ...testimonials.slice(3), ...testimonials.slice(3), ...testimonials.slice(3)];

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-[#8B5CF6] text-sm font-semibold tracking-widest uppercase mb-3 block">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Results Speak{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #FCD34D, #F59E0B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Louder
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Row 1 — left to right */}
      <div className={`overflow-hidden mb-4 ${FADE_MASK}`}>
        <div className="flex" style={{ animation: "marquee 32s linear infinite" }}>
          {row1.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
      </div>

      {/* Row 2 — right to left */}
      <div className={`overflow-hidden ${FADE_MASK}`}>
        <div className="flex" style={{ animation: "marquee-reverse 38s linear infinite" }}>
          {row2.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
