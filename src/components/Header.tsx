import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-[#00234B] shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 mx-auto max-w-7xl">
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="business/LOGO_CREDITODO.webp"
              alt="CrediTodo"
              className="h-8 w-8 sm:h-12 sm:w-12 filter drop-shadow-md"
            />

            <h1 className="text-lg sm:text-xl font-bold">
              <span className="text-credi-orange">CREDI</span>
              <span
                className={`transition-colors duration-300 ${
                  scrolled ? "text-white" : "text-credi-blue"
                }`}
              >
                TODO
              </span>
            </h1>
          </div>

          <motion.div
            className="hidden sm:block relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              className="relative px-4 lg:px-8 py-2 lg:py-3 text-sm lg:text-base font-bold text-white rounded-xl bg-gradient-to-r from-credi-orange to-orange-500 hover:from-credi-orange/90 hover:to-orange-500/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full"
                animate={{ translateX: ["100%", "-100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <span className="relative z-10">Solicitar Crédito</span>
            </motion.button>
          </motion.div>

          <motion.button
            className="sm:hidden p-2 rounded-lg hover:bg-gray-100/10 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMobileMenu}
          >
            <motion.svg
              className={`w-6 h-6 ${
                scrolled ? "text-white" : "text-credi-blue"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={mobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </motion.svg>
          </motion.button>
        </div>

        <motion.div
          className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-credi-orange/0 via-credi-orange/50 to-credi-orange/0"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        />

        <motion.div
          className="hidden lg:block absolute top-1/2 left-1/4 w-1 h-1 bg-credi-orange/30 rounded-full"
          animate={{
            y: [0, -5, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="hidden lg:block absolute top-1/3 right-1/3 w-1 h-1 bg-credi-blue/30 rounded-full"
          animate={{
            y: [0, 8, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
            />

            <motion.div
              className="absolute top-16 left-0 right-0 bg-credi-blue shadow-2xl border-t border-credi-orange/20"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="px-6 py-8 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.button
                    className="w-full relative px-6 py-4 font-bold text-white rounded-xl bg-gradient-to-r from-credi-orange to-orange-500 hover:from-credi-orange/90 hover:to-orange-500/90 transition-all duration-300 shadow-lg overflow-hidden"
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleMobileMenu}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full"
                      animate={{ translateX: ["100%", "-100%"] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <span className="relative z-10">SOLICITA TU CRÉDITO</span>
                  </motion.button>
                </motion.div>

                <motion.div
                  className="pt-6 border-t border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-white/70 text-sm">¿Necesitas ayuda?</p>
                  <p className="text-credi-orange font-medium">
                    +57 300 123 4567
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
