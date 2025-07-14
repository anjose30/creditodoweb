import { motion } from "motion/react";

export default function Statistics() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-2 md:grid-cols-4 text-center bg-gray-100 py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h4 className="text-3xl font-bold text-credi-blue-dark">+5,000</h4>
        <p className="text-gray-600">Créditos entregados</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h4 className="text-3xl font-bold text-credi-blue-dark">6 Años</h4>
        <p className="text-gray-600">de experiencia</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h4 className="text-3xl font-bold text-credi-blue-dark">95%</h4>
        <p className="text-gray-600">Clientes satisfechos</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h4 className="text-3xl font-bold text-credi-blue-dark">+1,200</h4>
        <p className="text-gray-600">Empresas asesoradas</p>
      </motion.div>
    </motion.section>
  );
}
