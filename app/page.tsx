import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LogoBar from "./components/LogoBar";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import TestimonialsSection from "./components/TestimonialsSection";
import BookingSection from "./components/BookingSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#030712]">
      <Navbar />
      <HeroSection />
      <LogoBar />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <BookingSection />
      <Footer />
    </main>
  );
}
