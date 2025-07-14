import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section className="relative h-screen pt-20 overflow-hidden bg-gradient-to-br from-credi-neutro-white to-gray-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/3 w-32 h-32 bg-credi-orange/10 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-credi-blue/10 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative flex items-center justify-between h-full px-6 mx-auto max-w-7xl">
        <motion.div
          className="z-10 max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="mb-6 text-4xl md:text-4xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Soluciones financieras
            <span className="text-credi-orange"> a tu alcance</span>
          </motion.h2>

          <motion.p
            className="mb-8 text-lg leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            En CrediTodo VS S.A.S te ayudamos a acceder a créditos rápidos,
            seguros y adaptados a tus necesidades. Con nosotros,{" "}
            <span className="font-semibold text-credi-orange">
              ¡sí es posible!
            </span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="px-8 py-4 text-white font-semibold rounded-xl bg-gradient-to-r from-credi-orange to-orange-500 hover:from-credi-orange/90 hover:to-orange-500/90 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.005 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicita tu crédito
            </motion.button>

            <motion.button
              className="px-8 py-4 border-2 font-semibold rounded-xl border-credi-orange text-credi-orange hover:bg-credi-orange hover:text-white transition-all duration-200 transform hover:scale-105"
              whileHover={{ scale: 1.005 }}
              whileTap={{ scale: 0.95 }}
            >
              Conoce nuestros servicios
            </motion.button>
          </motion.div>
        </motion.div>

        <div className="relative w-[900px] h-[600px] hidden md:block">
          <motion.div
            className="absolute w-[400px] h-[400px] bg-gradient-to-br from-credi-blue/20 to-blue-600/20 rounded-full -top-20 -left-10 blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute w-[300px] h-[300px] bg-gradient-to-br from-credi-orange/30 to-orange-500/30 rounded-full -bottom-16 -right-16 blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          <motion.div
            className="relative z-10 flex items-center justify-center h-full"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative"
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-credi-orange/20 to-credi-blue/20 rounded-full blur-2xl"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <img
                src="/LOGO_CREDITODO.webp"
                alt="CrediTodo Logo"
                className="relative z-10 object-contain w-[500px] h-[500px] filter drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute top-10 right-10 w-4 h-4 bg-credi-orange rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute bottom-20 left-20 w-3 h-3 bg-credi-blue rounded-full"
            animate={{
              y: [0, 15, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
        </div>
      </div>
    </motion.section>
  );
}
