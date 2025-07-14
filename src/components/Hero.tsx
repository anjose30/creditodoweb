import { motion } from "motion/react";

export default function Hero() {
  return (
    <motion.section className="relative h-screen pt-20 overflow-hidden bg-credi-neutro-white">
      <div className="flex items-center justify-between h-full px-6 mx-auto max-w-7xl">
        <div className="z-10 max-w-2xl">
          <h2 className="mb-4 text-4xl font-bold">
            Soluciones financieras a tu alcance
          </h2>
          <p className="mb-6 leading-relaxed ">
            En CrediTodo VS S.A.S te ayudamos a acceder a créditos rápidos,
            seguros y adaptados a tus necesidades. Con nosotros, ¡sí es
            posible!
          </p>
          <div className="flex flex-row gap-4">
            <button className="px-4 py-2 text-white rounded-xl bg-credi-orange">
              Solicita tu crédito
            </button>
            <button className="px-4 py-2 border rounded-xl border-credi-orange text-credi-orange">
              Conoce nuestros servicios
            </button>
          </div>
        </div>

        <div className="relative w-[900px] h-[600px] hidden md:block">
          <div className="absolute w-[400px] h-[400px] bg-[#0D2348] opacity-20 rounded-full -top-20 -left-10 blur-3xl" />
          <div className="absolute w-[300px] h-[300px] bg-credi-orange opacity-30 rounded-full -bottom-16 -right-16 blur-2xl" />

          <motion.img
            src="\public\LOGO_CREDITODO.webp"
            alt="Persona feliz con su crédito"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 object-contain w-[600px] h-full"
          />
        </div>
      </div>
    </motion.section>
  );
}
