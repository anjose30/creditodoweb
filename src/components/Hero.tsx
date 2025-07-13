export default function Hero() {
  return (
    <section className="relative h-screen bg-credi-neutro-white pt-20">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Cuotas que se adaptan a ti
          </h2>
          <p className="mb-6">¡Solo necesitas tu cédula y WhatsApp!</p>
          <div className="space-x-4">
            <button className="bg-credi-orange text-white px-4 py-2 rounded">
              Dónde comprar
            </button>
            <button className=" border border-credi-orange text-credi-orange px-4 py-2 rounded">
              Solicita tu cupo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
