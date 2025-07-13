import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0D2348] shadow-md h-16" : "bg-transparent h-20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-full">
        <h1 className="text-xl font-bold">
          <span className="text-credi-orange">Credi</span>
          <span className={scrolled ? "text-white" : "text-[#0D2348]"}>
            Todo
          </span>
        </h1>

        <nav className="space-x-4">
          <a href="#features" className="text-sm hover:underline text-white">
            Servicios
          </a>
          <a href="#contact" className="text-sm hover:underline text-white">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
