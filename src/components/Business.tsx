import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const logos = [
  {
    src: "/LOGO_DISTRITODO.webp",
    alt: "Distritodo - Distribución y logística",
    company: "Distritodo",
  },
  {
    src: "/LOGO_FIGARANTE.webp",
    alt: "Figarante - Servicios financieros",
    company: "Figarante",
  },
  {
    src: "/LOGO_HURGO_TRANSPORTE.webp",
    alt: "Hurgo Transporte - Soluciones de transporte",
    company: "Hurgo Transporte",
  },
  {
    src: "/LOGO_MERKFACIL.webp",
    alt: "MerkFácil - Plataforma de mercadeo",
    company: "MerkFácil",
  },
  {
    src: "/TODO_MOTOS_COLOR.webp",
    alt: "Todo Motos - Concesionario de motocicletas",
    company: "Todo Motos",
  },
];

export default function Business() {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = async () => {
      if (!containerRef.current || !wrapperRef.current) return;

      const singleSetWidth = containerRef.current.scrollWidth / 3;

      await controls.set({ x: -singleSetWidth });

      while (true) {
        await controls.start({
          x: -singleSetWidth * 2,
          transition: {
            duration: 25,
            ease: "linear",
          },
        });

        await controls.set({ x: -singleSetWidth });
      }
    };

    animate();
  }, [controls]);

  return (
    <section
      className="w-full bg-gradient-to-br from-slate-50 to-gray-100 pt-16  overflow-hidden relative"
      aria-label="Nuestros socios comerciales y aliados estratégicos"
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
            className=" text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Empresas que confían en nosotros para impulsar su crecimiento y
            éxito empresarial
          </motion.p>
        </header>

        <div className="relative">
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none"></div>

          <div
            className="relative w-full overflow-hidden rounded-2xl  backdrop-blur-sm shadow-lg border border-white/20 pt-4"
            ref={wrapperRef}
          >
            <motion.div
              ref={containerRef}
              className="flex gap-20 w-max px-10"
              animate={controls}
            >
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <motion.div
                  key={`${logo.company}-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative p-6 hover:shadow-xl transition-all duration-300 group-hover:border-gray-200 hover:rounded-xl">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="w-46 h-30 object-contain  hover:grayscale-0 transition-all duration-500"
                      loading="lazy"
                      width="144"
                      height="80"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
