export default function Footer() {
  return (
    <footer className="relative w-full bg-credi-blue text-credi-neutro-white">
      <div className="w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-10 md:h-16"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C480,0 960,0 1440,80 L1440,0 L0,0 Z"
            fill="#ffffff" // cambia según tu color bg-credi-blue
          ></path>
        </svg>
      </div>
      <div className="text-center py-6 h-20 md:h-28 flex items-center justify-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Creditodo. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
