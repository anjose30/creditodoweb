import { motion } from "framer-motion";
import { Bike, Truck, RotateCcw, Zap } from "lucide-react";

const financingOptions = [
  {
    title: "Motos",
    description:
      "Financia la moto de tus sueños con planes flexibles y tasas competitivas.",
    icon: Bike,
    features: ["Variedad de marcas", "Hasta 60 meses", "Desde $1.500.000"],
  },
  {
    title: "Cargueros y Motocarros",
    description:
      "Impulsa tu negocio con vehículos comerciales para transporte y carga.",
    icon: Truck,
    features: [
      "Vehículos comerciales",
      "Para emprendedores",
      "Tasas preferenciales",
    ],
  },
  {
    title: "Vehículos Usados",
    description:
      "Adquiere la moto usada que necesitas con facilidades de pago.",
    icon: RotateCcw,
    features: ["Amplio catálogo", "Financiación rápida", "Garantía incluida"],
  },
  {
    title: "Movilidad Eléctrica",
    description:
      "Patinetas, bicicletas eléctricas y más opciones de transporte sostenible.",
    icon: Zap,
    features: ["Eco-friendly", "Tecnología avanzada", "Mantenimiento mínimo"],
  },
];

export default function Features() {
  return (
    <motion.section
      id="features"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative py-24 px-6 min-h-screen justify-center bg-gradient-to-br from-white to-gray-50 w-full flex flex-col items-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-48 h-48 bg-credi-orange/5 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-credi-blue/5 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl w-full text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <h3 className="text-4xl md:text-4xl font-bold text-gray-900">
            Qué financiamos
          </h3>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Descubre todas las opciones de financiamiento que tenemos para ti.
          Desde motos hasta movilidad eléctrica.
        </motion.p>
      </div>

      <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {financingOptions.map((option, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-credi-orange/20"
          >
            <div className="p-6 text-center">
              <motion.div
                className="w-16 h-16 mx-auto mb-4 p-3 bg-gradient-to-r from-credi-orange/10 to-orange-500/10 rounded-2xl group-hover:from-credi-orange/20 group-hover:to-orange-500/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <option.icon
                  className="w-full h-full text-credi-orange group-hover:text-orange-500 transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </motion.div>

              <motion.h4 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300">
                {option.title}
              </motion.h4>

              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                {option.description}
              </p>

              <div className="space-y-2">
                {option.features.map((feature, featureIdx) => (
                  <motion.div
                    key={featureIdx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * featureIdx }}
                    className="flex items-center justify-center gap-2 text-sm text-gray-500"
                  >
                    <span className="w-1.5 h-1.5 bg-credi-orange rounded-full"></span>
                    {feature}
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-4 w-0 h-0.5 bg-gradient-to-r from-credi-orange to-orange-500 group-hover:w-full transition-all duration-500 mx-auto"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1, delay: 0.1 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-credi-orange to-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Ver todas las opciones
        </motion.button>
      </motion.div>

      <motion.div
        className="absolute top-20 right-20 w-3 h-3 bg-credi-orange rounded-full opacity-40"
        animate={{
          y: [0, -15, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-32 left-16 w-2 h-2 bg-credi-blue rounded-full opacity-50"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-10 w-1 h-1 bg-credi-orange/60 rounded-full"
        animate={{
          y: [0, -10, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </motion.section>
  );
}
