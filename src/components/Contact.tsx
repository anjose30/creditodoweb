export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-6 bg-credi-neutro-white w-full min-h-screen"
    >
      <h3 className="text-3xl font-semibold text-center mb-8">Contáctanos</h3>
      <form className="max-w-xl mx-auto grid gap-4">
        <input
          type="text"
          placeholder="Nombre"
          className="p-3 border rounded"
        />
        <input
          type="email"
          placeholder="Correo"
          className="p-3 border rounded"
        />
        <textarea
          placeholder="Mensaje"
          rows={4}
          className="p-3 border rounded"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Enviar
        </button>
      </form>
    </section>
  );
}
