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
        scrolled ? "bg-[#0D2348] shadow-md h-18" : "bg-transparent h-20"
      }`}
    >
      <div className="flex items-center justify-between h-full px-4 mx-auto max-w-7xl">
        <div className="flex flex-row items-center gap-1">
          <img
            src="/public/LOGO_CREDITODO.webp"
            alt="Creditodo"
            className="h-14 w-14"
          />
          <h1 className="text-xl font-bold">
            <span className="text-credi-orange">CREDI</span>
            <span className={scrolled ? "text-white" : "text-[#0D2348]"}>
              TODO
            </span>
          </h1>
        </div>
        <div className="h-full text-white">
          <div className="relative h-full">
            <div
              className={`flex items-center justify-center h-full px-6 py-2 transform shadow-md w-60 -skew-x-26 bg-credi-orange grad`}
            >
              <button className="h-full font-bold text-white transform skew-x-26">
                SOLICITA TU CREDITO
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
