import { motion } from "framer-motion";
import FloatingPlanet from "./FloatingPlanet";
import { FaRocket } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 text-center">
      <FloatingPlanet emoji="🪐" className="left-8 top-28" />
      <FloatingPlanet emoji="🌙" className="right-10 top-36" delay={1} />
      <FloatingPlanet emoji="🌎" className="bottom-24 left-16" delay={2} />

      <motion.div
        className="glass max-w-4xl rounded-3xl p-8 shadow-2xl md:p-14"
        initial={{ opacity: 0, y: 45, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9 }}
      >
        <motion.div
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-purple-600/30 text-4xl"
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <FaRocket />
        </motion.div>

        <h1 className="text-glow text-4xl font-black md:text-7xl">
          Welcome to Valeria’s Universe
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 md:text-xl">
          Un universo espacial, colombiano, danés, con perritos, gatitos y cero
          tolerancia a las arañas 😜.
        </p>

        <a
          href="#solar-system"
          className="mt-8 inline-block rounded-full bg-white px-7 py-3 font-bold text-slate-950 transition hover:scale-105 hover:bg-purple-200"
        >
          Iniciar viaje 🚀
        </a>
      </motion.div>
    </section>
  );
}