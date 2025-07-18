import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function FAQSection() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col items-center justify-center w-full min-h-screen px-6 py-16 bg-credi-neutro-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl w-full text-center mb-16"
      >
        <h3 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
          Paga fácil y sin complicaciones
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Elige entre múltiples métodos y realiza tus pagos de forma rápida,
          segura y sin estrés.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full px-2 md:px-16 space-y-4 flex justify-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-8 md:grid-rows-6 gap-3 lg:w-[80%] w-full">
          <div className="col-span-1 md:col-span-2 md:row-span-6">
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-300 h-full flex flex-col justify-center items-center text-center bg-gradient-to-br from-white to-orange-50/30">
              <div className="w-32 h-32 mb-6 bg-orange-50 rounded-2xl flex items-center justify-center group-hover:bg-orange-100 transition-all duration-300 group-hover:scale-110">
                <img
                  src="/public/payments/450_1000.webp"
                  alt="Código QR para pagos"
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Pago con QR
              </h4>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Escanea el código QR para pagar de forma instantánea y segura
              </p>
              <img
                src="/public/payments/AVAL.svg"
                alt="Grupo Aval Pay Center"
                className="w-52 h-16 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 md:row-span-3 md:col-start-3 bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-orange-300 h-48 flex flex-col">
            <div className="flex items-center justify-center flex-1 px-4">
              <img
                src="/public/payments/OCCIDENTE.svg"
                alt="Banco de Occidente"
                className="w-50 object-contain"
              />
            </div>
            <div className="p-4 bg-gradient-to-r from-orange-500/10 to-orange-600/10 group-hover:from-orange-500/20 group-hover:to-orange-600/20 transition-all duration-500 text-orange-600 hover:text-orange-700">
              <p className="text-xs transition-colors duration-300">
                Cuenta corriente
              </p>
              <p className="font-bold text-lg tracking-wide">875-825796</p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 md:row-span-3 md:col-start-5 bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-orange-300 h-48 flex flex-col">
            <div className="flex items-center justify-center flex-1 px-4">
              <img
                src="/public/payments/EFECTY.svg"
                alt="Efecty"
                className="w-40 object-contain"
              />
            </div>
            <div className="p-4 bg-gradient-to-r from-orange-500/10 to-orange-600/10 group-hover:from-orange-500/20 group-hover:to-orange-600/20 transition-all duration-500 text-orange-600 hover:text-orange-700">
              <p className="text-xs transition-colors duration-300">
                Convenio:
              </p>
              <p className="font-bold text-lg tracking-wide">14887</p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 md:row-span-3 md:col-start-7 bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-orange-300 h-48 flex flex-col">
            <div className="flex items-center justify-center flex-1 px-4">
              <img
                src="/public/payments/VIA.svg"
                alt="VIA"
                className="w-25 object-contain"
              />
            </div>
            <div className="p-4 bg-gradient-to-r from-orange-500/10 to-orange-600/10 group-hover:from-orange-500/20 group-hover:to-orange-600/20 transition-all duration-500 text-orange-600 hover:text-orange-700">
              <p className="text-xs transition-colors duration-300">
                Convenio:
              </p>
              <p className="font-bold text-lg tracking-wide">14887</p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 md:row-span-3 md:col-start-3 md:row-start-4 bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-orange-300 h-48 flex flex-col">
            <div className="flex items-center justify-center flex-1 px-4">
              <img
                src="/public/payments/BANCOLOMBIA.svg"
                alt="Grupo Bancolombia"
                className="w-50 object-contain"
              />
            </div>
            <div className="p-4 bg-gradient-to-r from-orange-500/10 to-orange-600/10 group-hover:from-orange-500/20 group-hover:to-orange-600/20 transition-all duration-500 text-orange-600 hover:text-orange-700 flex flex-row gap-4">
              <div>
                <p className="text-xs transition-colors duration-300">
                  Cuenta de ahorros:
                </p>
                <p className="font-bold text-lg tracking-wide">
                  516-0002-74-11
                </p>
              </div>
              <div>
                <p className="text-xs transition-colors duration-300">
                  Convenio:
                </p>
                <p className="font-bold text-lg tracking-wide">90584</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 md:row-span-3 md:col-start-6 md:row-start-4 bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-orange-300 h-48 flex flex-col">
            <div className="flex items-center justify-center flex-1 px-4">
              <img
                src="/public/payments/BBVA.svg"
                alt="BBVA"
                className="w-30 object-contain"
              />
            </div>
            <div className="p-4 bg-gradient-to-r from-orange-500/10 to-orange-600/10 group-hover:from-orange-500/20 group-hover:to-orange-600/20 transition-all duration-500 text-orange-600 hover:text-orange-700">
              <p className="text-xs transition-colors duration-300 mb-2">
                Cuenta de ahorros:
              </p>
              <div className="flex flex-wrap gap-2">
                <p className="font-bold text-sm tracking-wide">518527668</p>
                <p className="font-bold text-sm tracking-wide">0518527668</p>
                <p className="font-bold text-sm tracking-wide">
                  0518000200527668
                </p>
              </div>
            </div>
          </div>
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
          className="bg-gradient-to-r from-credi-orange to-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Pagar mi cuota
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
