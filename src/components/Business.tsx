import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

const logos = [
  {
    src: "business/LOGO_DISTRITODO.webp",
    alt: "Distritodo",
    company: "Distritodo",
  },
  {
    src: "business/LOGO_MERKFACIL.webp",
    alt: "MerkFácil",
    company: "Merkafacil",
  },
  {
    src: "business/TODO_MOTOS_COLOR.webp",
    alt: "Todo Motos",
    company: "TodoMotos",
  },
  {
    src: "business/LOGO_DISTRITODO.webp",
    alt: "Distritodo",
    company: "Distritodo",
  },
  {
    src: "business/LOGO_MERKFACIL.webp",
    alt: "MerkFácil",
    company: "Merkafacil",
  },
  {
    src: "business/TODO_MOTOS_COLOR.webp",
    alt: "Todo Motos",
    company: "TodoMotos",
  },
];

export default function Brands() {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    checkMobile();

    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, [checkMobile]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isMobile) {
      const style = document.createElement("style");
      style.textContent = `
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `;
      document.head.appendChild(style);

      return () => {
        document.head.removeChild(style);
      };
    }
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gradient-to-br bg-gray-100 pt-16 overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10">
        <header className="text-center mb-8">
          <motion.h2
            className="text-4xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nuestros Aliados
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Empresas que confían en nosotros para impulsar su crecimiento y
            éxito empresarial.
          </motion.p>
        </header>

        <div className="relative">
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none"></div>

          <div className="relative w-full overflow-hidden rounded-2xl backdrop-blur-sm shadow-lg border border-white/20">
            {isMobile ? (
              <div className="flex overflow-x-auto scrollbar-hide px-6 gap-8 py-4">
                {[...logos, ...logos, ...logos].map((logo, index) => (
                  <div
                    key={`${logo.company}-${index}`}
                    className="flex-shrink-0 group cursor-pointer"
                  >
                    <div className="relative p-4 hover:shadow-xl transition-all duration-300 group-hover:border-gray-200 hover:rounded-t-xl">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="w-28 h-16 object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        width="112"
                        height="64"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <motion.div
                className="flex w-max px-10 gap-16"
                animate={
                  isVisible
                    ? {
                        x: ["0%", "-50%"],
                      }
                    : {}
                }
                transition={{
                  duration: 25,
                  ease: "linear",
                  repeat: Infinity,
                }}
                style={{ willChange: "transform" }}
              >
                {[...logos, ...logos].map((logo, index) => (
                  <div
                    key={`${logo.company}-${index}`}
                    className="flex-shrink-0 group cursor-pointer"
                  >
                    <div className="relative p-6 hover:shadow-xl transition-all duration-300 group-hover:border-gray-200 hover:rounded-t-xl">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="w-46 h-30 object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        width="144"
                        height="80"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
