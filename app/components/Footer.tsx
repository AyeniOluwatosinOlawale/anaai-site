"use client";

export default function Footer() {
  return (
    <footer className="border-t border-slate-900 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#1E3A5F] flex items-center justify-center text-xs font-bold">
            A
          </div>
          <span className="text-slate-400 text-sm font-medium">Anaai.tech</span>
        </div>

        <p className="text-slate-600 text-sm text-center">
          &copy; {new Date().getFullYear()} Oluwatosin Ayeni. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-slate-600 text-sm">
          <a href="mailto:hello@anaai.tech" className="hover:text-white transition-colors">
            Email
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
