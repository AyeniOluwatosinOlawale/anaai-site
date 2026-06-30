"use client";

const items = [
  "AI Strategy",
  "n8n Automation",
  "OpenAI API",
  "React & Next.js",
  "FastAPI",
  "Supabase",
  "WhatsApp API",
  "Zoho CRM",
  "Python",
  "TypeScript",
  "Face Recognition",
  "LLM Integration",
];

export default function LogoBar() {
  const doubled = [...items, ...items];
  return (
    <div className="border-y border-white/[0.05] py-5 overflow-hidden relative">
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #030712, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #030712, transparent)" }}
      />
      <div
        className="flex gap-10 w-max"
        style={{ animation: "marquee 28s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-slate-700 text-sm font-medium whitespace-nowrap select-none"
          >
            <span className="w-1 h-1 rounded-full bg-slate-800" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
