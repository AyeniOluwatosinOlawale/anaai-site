import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Oluwatosin Ayeni — AI Strategy & Technology Consultant",
  description:
    "Helping businesses design and deploy AI systems that create real competitive advantage. Book a discovery call today.",
  openGraph: {
    title: "Oluwatosin Ayeni — AI Strategy Consultant",
    description: "Transform your business with intelligent automation and AI strategy.",
    url: "https://anaai.tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#080E1A] text-white antialiased">{children}</body>
    </html>
  );
}
