"use client";
import AiLogo from "./AiLogo";

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/oluwatosinolawaleayeni/" },
  { label: "Twitter", href: "https://x.com/anabury25" },
  { label: "GitHub", href: "https://github.com/AyeniOluwatosinOlawale" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <AiLogo size={28} />
          <span className="text-slate-600 text-sm font-medium">Anaai.consult</span>
        </div>

        <p className="text-slate-500 text-xs">
          &copy; {new Date().getFullYear()} Oluwatosin Ayeni · All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          {social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-200 text-xs transition-colors duration-200"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
