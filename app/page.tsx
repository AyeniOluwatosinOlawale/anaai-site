import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import BookingSection from "./components/BookingSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080E1A]">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <BookingSection />
      <Footer />
    </main>
  );
}
