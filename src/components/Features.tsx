export default function Features() {
  return (
    <section id="features" className="py-16 px-6 bg-gray-100 w-full min-h-screen">
      <h3 className="text-3xl font-semibold text-center mb-10">
        ¿Qué ofrecemos?
      </h3>
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div>
          <h4 className="text-xl font-bold mb-2">Consultoría</h4>
          <p>Te guiamos hacia el éxito tecnológico.</p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-2">Desarrollo</h4>
          <p>Aplicaciones a la medida de tus necesidades.</p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-2">Soporte</h4>
          <p>Acompañamiento continuo para tu negocio.</p>
        </div>
      </div>
    </section>
  );
}
