import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const faqs = [
  {
    question: "¿Qué es CrediTodo VS S.A.S?",
    answer:
      "Somos una empresa especializada en asesoría y otorgamiento de créditos rápidos, personalizados y accesibles.",
  },
  {
    question: "¿Qué requisitos necesito para solicitar un crédito?",
    answer:
      "Solo necesitas tu cédula, tener más de 18 años y contar con una fuente de ingresos verificable.",
  },
  {
    question: "¿Cuánto tiempo tarda la aprobación?",
    answer:
      "Aprobamos tu crédito en menos de 24 horas, dependiendo de la verificación de documentos.",
  },
  {
    question: "¿Puedo pagar en cuotas?",
    answer:
      "Sí, ofrecemos planes de pago flexibles de acuerdo a tu capacidad y perfil financiero.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col items-center justify-center w-full min-h-screen px-6 py-16 bg-credi-neutro-white"
    >
      <h2 className="mb-6 text-4xl font-bold text-center">
        Preguntas Frecuentes
      </h2>
      <p className="mb-10 text-center text-gray-500">
        Aquí encontrarás respuestas a las dudas más comunes de nuestros
        clientes.
      </p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full px-2   md:px-16 space-y-4"
      >   
        {faqs.map((faq, i) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            key={i}
            className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(i)}
              className="flex items-center justify-between w-full p-4 text-left transition-colors hover:bg-gray-50"
            >
              <span className="font-medium">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === i ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center w-5 h-5 text-xl font-bold"
              >
                +
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
