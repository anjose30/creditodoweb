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
    </div>
  );
}
