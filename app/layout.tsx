import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Oluwatosin Ayeni — AI Strategy & Technology Consultant",
  description:
    "Helping businesses design and deploy AI systems that create real competitive advantage — from strategy to production.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#030712] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
