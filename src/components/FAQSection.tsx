import { BadgeCheck } from "lucide-react";
import { motion } from "motion/react";

export default function PaymentMethodsSection() {
  const paymentMethods = [
    {
      id: 1,
      description: "Pagos rápidos y seguros mediante código QR.",
      logo: "/payments/AVAL.svg",
      w: "w-48",
    },
    {
      id: 2,
      description: "Aceptamos transferencias desde bancos nacionales.",
      logo: "/payments/OCCIDENTE.svg",
      w: "w-48",
    },
    {
      id: 3,
      description: "Opción de pago en efectivo a través de puntos Efecty.",
      logo: "/payments/EFECTY.svg",
      w: "w-32",
    },
    {
      id: 4,
      description: "Pagos seguros con el respaldo de la red Vía.",
      logo: "/payments/VIA.svg",
      w: "w-18",
    },
    {
      id: 5,
      description: "Procesa tus pagos directamente con Bancolombia.",
      logo: "/payments/BANCOLOMBIA.svg",
      w: "w-48",
    },
    {
      id: 6,
      description: "También aceptamos pagos desde BBVA.",
      logo: "/payments/BBVA.svg",
      w: "w-28",
    },
  ];

  return (
    <motion.section
      id="payment-methods"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col items-center justify-center w-full min-h-screen px-6 py-16 bg-gradient-to-br from-gray-50 to-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl w-full text-center mb-16"
      >
        <h3 className="text-4xl font-bold text-gray-900 mb-4">
          Paga fácil y sin complicaciones
        </h3>
        <p className="text-xl text-gray-600 leading-relaxed mb-6">
          Elige entre múltiples métodos y realiza tus pagos de forma rápida,
          segura y sin estrés.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-7xl"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paymentMethods.map((method, index) => {
            return (
              <motion.div
                key={method.id}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-xl border border-gray-100 hover:border-credi-orange/20 p-6 transition-all duration-300 shadow-lg hover:shadow-2xl h-48 flex flex-col text-credi-orange hover:text-orange-500">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center justify-center flex-1 min-h-[60px]">
                      <img
                        src={`${method.logo}`}
                        alt={`Método de pago ${method.id}`}
                        className={`${method.w} max-h-12 object-contain`}

                      />
                    </div>
                    <div className="ml-3 opacity-80 group-hover:opacity-100 transition-opacity">
                      <BadgeCheck size={20} />
                    </div>
                  </div>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>
                  <div className="flex-1 flex items-center">
                    <p className="text-sm text-gray-600 leading-relaxed text-center group-hover:text-gray-800 transition-colors">
                      {method.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Ver todas las opciones
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
