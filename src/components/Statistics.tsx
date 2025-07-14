import { motion, useInView } from "framer-motion";
import { HandCoins, CalendarCheck, Laugh, Handshake } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const useCountUp = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animate = () => {
    if (hasAnimated) return;

    setHasAnimated(true);
    const startTime = Date.now();
    const startValue = start;

    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(
        startValue + (end - startValue) * easeOutQuart
      );

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    updateCount();
  };

  return { count, animate, hasAnimated };
};

const StatCard = ({ icon: Icon, value, label, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const numericValue =
    typeof value === "string" ? parseInt(value.replace(/[^0-9]/g, "")) : value;
  const { count, animate, hasAnimated } = useCountUp(numericValue, 2000);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timer = setTimeout(() => {
        animate();
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, animate, delay, hasAnimated]);

  const displayValue =
    typeof value === "string" && value.includes("%")
      ? `${count}%`
      : value.toString().includes("+")
      ? `+${count.toLocaleString()}`
      : count.toLocaleString();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center group"
    >
      <div className="flex items-center gap-3 mb-3">
        <Icon className="w-8 h-8 text-credi-orange" />
        <h3 className="text-2xl md:text-3xl font-bold text-credi-blue-dark">
          {displayValue}
        </h3>
      </div>
      <p className="text-gray-600 text-sm md:text-base">{label}</p>
    </motion.div>
  );
};

export default function Statistics() {
  const stats = [
    {
      icon: HandCoins,
      value: "5000",
      label: "Créditos entregados",
      delay: 0.1,
    },
    {
      icon: CalendarCheck,
      value: "6",
      label: "Años de experiencia",
      delay: 0.2,
    },
    {
      icon: Laugh,
      value: "95%",
      label: "Clientes satisfechos",
      delay: 0.3,
    },
    {
      icon: Handshake,
      value: "1200",
      label: "Empresas asesoradas",
      delay: 0.4,
    },
  ];

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full bg-gradient-to-br from-slate-50 to-gray-100 py-16 px-4 overflow-hidden relative"
      aria-labelledby="statistics-heading"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
