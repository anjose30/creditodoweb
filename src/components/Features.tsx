import { motion } from "framer-motion";

const services = [
  {
    title: "Asesoría financiera personalizada",
    description:
      "Recibe orientación profesional para estructurar tu crédito según tus metas.",
    image: "./asesoria.avif",
  },
  {
    title: "Solicitudes 100% digitales",
    description:
      "Gestiona tu crédito desde cualquier lugar, de forma fácil y segura.",
    image: "./solicitud.avif",
  },
  {
    title: "Soporte continuo",
    description:
      "Nuestro equipo te acompaña antes, durante y después del desembolso.",
    image: "./soporte.avif",
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
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-4xl font-bold text-gray-900 mb-6"
        >
          Nuestros Servicios
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Soluciones financieras diseñadas para ti. Explora cómo te ayudamos a
          alcanzar tus metas.
        </motion.p>
      </div>

      <div className="relative z-10 grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                whileHover={{ scale: 1.1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6 text-left">
              <motion.h4 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300">
                {service.title}
              </motion.h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <motion.div
                className="mt-4 w-0 h-0.5 bg-gradient-to-r from-credi-orange to-orange-500 group-hover:w-full transition-all duration-500"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </div>
          </motion.div>
        ))}
      </div>

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
