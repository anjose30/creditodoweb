export default function Footer() {
  return (
    <footer className="w-full h-20 md:h-28 text-center py-6 bg-credi-blue text-credi-neutro-white">
      <p className="text-sm">
        © {new Date().getFullYear()} Creditodo. Todos los derechos reservados.
      </p>
    </footer>
  );
}
