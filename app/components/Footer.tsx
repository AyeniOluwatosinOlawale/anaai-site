"use client";

const social = [
  { label: "LinkedIn", href: "https://linkedin.com/in/oluwatosin-ayeni" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "GitHub", href: "https://github.com/AyeniOluwatosinOlawale" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1E3A5F] flex items-center justify-center text-xs font-bold">
            A
          </div>
          <span className="text-slate-600 text-sm font-medium">Anaai.tech</span>
        </div>

        <p className="text-slate-800 text-xs">
          &copy; {new Date().getFullYear()} Oluwatosin Ayeni · All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          {social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-slate-300 text-xs transition-colors duration-200"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
