import { motion } from "framer-motion";
import { Mail, User, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative w-full min-h-screen bg-gradient-to-br bg-credi-neutro-white flex items-center justify-center px-6 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-16 h-16 bg-credi-blue/10 rounded-full"
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-credi-blue/5 rounded-full"
          animate={{
            y: [0, 15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-6xl w-full relative">
        <motion.div
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-0"
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-credi-blue/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] opacity-90"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="business/LOGO_CREDITODO.webp"
                alt="Creditodo Logo"
                className="w-full h-full object-contain filter drop-shadow-2xl"
              />
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-credi-blue to-blue-400 rounded-full opacity-70"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-6 h-6 bg-credi-blue/60 rounded-full"
              animate={{
                y: [0, 15, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>
        </motion.div>

        <motion.div
          className="relative z-10 ml-0 md:ml-8 lg:ml-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl max-w-lg w-full p-8 md:p-12 border border-white/20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-3">
                Contáctanos
              </h3>
              <p className="text-gray-600 leading-relaxed">
                ¿Tienes preguntas o quieres hablar con nosotros? Completa el
                formulario y te contactamos pronto.
              </p>
            </motion.div>

            <div className="grid gap-6">
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <User
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-credi-blue focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                />
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Mail
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-credi-blue focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                />
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <MessageSquare
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />
                <textarea
                  placeholder="Tu mensaje"
                  rows={4}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-credi-blue focus:border-transparent resize-none transition-all duration-200 bg-gray-50/50 hover:bg-white"
                />
              </motion.div>

              <motion.button
                type="submit"
                className="bg-gradient-to-r from-orange-400 to-orange-500 text-white py-4 px-8 rounded-xl hover:from-orange-500 hover:to-orange-600 transition-all duration-200 hover:shadow-xl transform hover:scale-[1.02] font-semibold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Enviar mensaje
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
