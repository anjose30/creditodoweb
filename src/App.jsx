import Header from "./components/Header";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";
import Features from "./components/Features";
import FAQSection from "./components/FAQSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Business from "./components/business";
import Brands from "./components/Brands";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Statistics /> 
      <Features />
      <Brands />
      <FAQSection />
      <Business />
      <Contact />
      <Footer />
      <a
        href="http://wa.me/+573104863527"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-4 md:bottom-16 z-50 bg-green-500 hover:bg-green-600 transition rounded-full shadow-lg p-3 flex items-center justify-center"
      >
        <img
          src="/WhatsApp.webp"
          alt="WhatsApp"
          className="w-8 lg:w-10 hover:w-12 transition-all duration-300 object-contain"
        />
      </a>
    </div>
  );
}
