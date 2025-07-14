import { motion } from "motion/react";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col items-center justify-center w-full min-h-screen px-6 py-16 bg-credi-neutro-white"
    >
      <h3 className="mb-8 text-3xl font-semibold text-center">Contáctanos</h3>

      <form className="grid w-full max-w-xl gap-4 mx-auto">
        <motion.input
          type="text"
          placeholder="Nombre"
          className="p-3 border rounded"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        />
        <motion.input
          type="email"
          placeholder="Correo"
          className="p-3 border rounded"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        />
        <motion.textarea
          placeholder="Mensaje"
          rows={4}
          className="p-3 border rounded"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: true }}
        />
        <motion.button
          type="submit"
          className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          viewport={{ once: true }}
        >
          Enviar
        </motion.button>
      </form>
    </motion.section>
  );
}
