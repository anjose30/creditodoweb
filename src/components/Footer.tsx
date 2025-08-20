import {
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

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
            fill="#ffffff"
          ></path>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3">
              <h3 className="text-base sm:text-lg font-bold text-credi-gray-white">
                Soporte
              </h3>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-3 text-sm sm:text-base text-gray-300 hover:text-credi-orange transition-all duration-300"
                >
                  <div className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-credi-orange transition-colors flex-shrink-0"></div>
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-3 text-sm sm:text-base text-gray-300 hover:text-credi-orange transition-all duration-300"
                >
                  <div className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-credi-orange transition-colors flex-shrink-0"></div>
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3">
              <h3 className="text-base sm:text-lg font-bold text-credi-gray-white">
                Empresa
              </h3>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-3 text-sm sm:text-base text-gray-300 hover:text-credi-orange transition-all duration-300"
                >
                  <div className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-credi-orange transition-colors flex-shrink-0"></div>
                  Acerca de Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-3 text-sm sm:text-base text-gray-300 hover:text-credi-orange transition-all duration-300"
                >
                  <div className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-credi-orange transition-colors flex-shrink-0"></div>
                  Nuestro Equipo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-3 text-sm sm:text-base text-gray-300 hover:text-credi-orange transition-all duration-300"
                >
                  <div className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-credi-orange transition-colors flex-shrink-0"></div>
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3">
              <h3 className="text-base sm:text-lg font-bold text-credi-gray-white">
                Legales
              </h3>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-3 text-sm sm:text-base text-gray-300 hover:text-credi-orange transition-all duration-300"
                >
                  <div className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-credi-orange transition-colors flex-shrink-0"></div>
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-3 text-sm sm:text-base text-gray-300 hover:text-credi-orange transition-all duration-300"
                >
                  <div className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-credi-orange transition-colors flex-shrink-0"></div>
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-3 text-sm sm:text-base text-gray-300 hover:text-credi-orange transition-all duration-300"
                >
                  <div className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-credi-orange transition-colors flex-shrink-0"></div>
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <h3 className="text-base sm:text-lg font-bold text-credi-gray-white">
                Síguenos
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Mantente conectado con nosotros en nuestras redes sociales para
                las últimas actualizaciones.
              </p>
              <div className="flex gap-3 sm:gap-4">
                <a
                  href="#"
                  className="group relative p-2.5 sm:p-3 rounded-xl bg-credi-gray-white/10 hover:bg-credi-orange transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300 group-hover:text-credi-neutro-white transition-colors" />
                </a>
                <a
                  href="#"
                  className="group relative p-2.5 sm:p-3 rounded-xl bg-credi-gray-white/10 hover:bg-credi-orange transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300 group-hover:text-credi-neutro-white transition-colors" />
                </a>
                <a
                  href="#"
                  className="group relative p-2.5 sm:p-3 rounded-xl bg-credi-gray-white/10 hover:bg-credi-orange transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="X (Twitter)"
                >
                  <Twitter className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300 group-hover:text-credi-neutro-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-credi-gray-white">
          <div className="text-center h-20 md:h-28 flex items-center justify-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Creditodo. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
