import { motion } from "motion/react";

export default function Features() {
  return (
    <motion.section
      id="features"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-16 px-6 bg-credi-neutro-white w-full min-h-screen justify-center items-center flex flex-col"
    > 
      <h3 className="text-3xl font-semibold text-center mb-10">
        ¿Qué ofrecemos?
      </h3>
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-xl font-bold mb-2">Consultoría</h4>
          <p>Te guiamos hacia el éxito tecnológico.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4 className="text-xl font-bold mb-2">Desarrollo</h4>
          <p>Aplicaciones a la medida de tus necesidades.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h4 className="text-xl font-bold mb-2">Soporte</h4>
          <p>Acompañamiento continuo para tu negocio.</p>
        </motion.div>
      </div>
    </motion.section>
  );
}
