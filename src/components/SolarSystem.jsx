import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const planets = [
  {
    name: "Mercurio",
    image: "/planets/mercury.png",
    position: "left-[48%] top-[42%]",
    size: "h-12 w-12 md:h-16 md:w-16",
    distance: "57.9 millones km",
    temperature: "430°C",
    fact: "Es el planeta más cercano al Sol.",
  },
  {
    name: "Venus",
    image: "/planets/venus.png",
    position: "left-[58%] top-[34%]",
    size: "h-14 w-14 md:h-20 md:w-20",
    distance: "108.2 millones km",
    temperature: "465°C",
    fact: "Es el planeta más caliente del sistema solar.",
  },
  {
    name: "Tierra",
    image: "/planets/earth.png",
    position: "left-[65%] top-[52%]",
    size: "h-16 w-16 md:h-24 md:w-24",
    distance: "149.6 millones km",
    temperature: "15°C promedio",
    fact: "Tiene océanos, vida, perros, gatos y desarrolladores desorganizados.",
  },
  {
    name: "Marte",
    image: "/planets/mars.png",
    position: "left-[38%] top-[62%]",
    size: "h-14 w-14 md:h-20 md:w-20",
    distance: "227.9 millones km",
    temperature: "-63°C promedio",
    fact: "Tiene el volcán más grande del sistema solar: Olympus Mons.",
  },
  {
    name: "Júpiter",
    image: "/planets/jupiter.png",
    position: "left-[24%] top-[35%]",
    size: "h-24 w-24 md:h-36 md:w-36",
    distance: "778.5 millones km",
    temperature: "-110°C",
    fact: "Es tan grande que cabrían más de 1,300 Tierras dentro.",
  },
  {
    name: "Saturno",
    image: "/planets/saturn.png",
    position: "left-[74%] top-[22%]",
    size: "h-28 w-28 md:h-44 md:w-44",
    distance: "1,434 millones km",
    temperature: "-140°C",
    fact: "Sus anillos están hechos de hielo, roca y polvo.",
  },
  {
    name: "Urano",
    image: "/planets/uranus.png",
    position: "left-[18%] top-[72%]",
    size: "h-20 w-20 md:h-28 md:w-28",
    distance: "2,871 millones km",
    temperature: "-195°C",
    fact: "Gira de lado, como si se hubiera caído y nadie lo levantó.",
  },
  {
    name: "Neptuno",
    image: "/planets/neptune.png",
    position: "left-[82%] top-[72%]",
    size: "h-20 w-20 md:h-28 md:w-28",
    distance: "4,495 millones km",
    temperature: "-200°C",
    fact: "Tiene los vientos más fuertes del sistema solar.",
  },
];

export default function SolarSystem() {
  const [selected, setSelected] = useState(planets[2]);

  return (
    <section id="solar-system" className="relative overflow-hidden px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-purple-300">
            Exploración orbital
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Sistema Solar Interactivo
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-300">
            Toca un planeta para ver sus datos.
          </p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass relative h-[540px] overflow-hidden rounded-[2rem] md:h-[650px]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_55%)]" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

            <motion.div
              className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-yellow-300 md:h-32 md:w-32"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                boxShadow:
                  "0 0 60px #fde047, 0 0 130px rgba(253,224,71,.8)",
              }}
            >
              <span className="text-4xl md:text-5xl">☀️</span>
            </motion.div>

            {planets.map((planet, index) => {
              const isActive = selected.name === planet.name;

              return (
                <motion.button
                  key={planet.name}
                  type="button"
                  onClick={() => setSelected(planet)}
                  className={`absolute z-30 ${planet.position} -translate-x-1/2 -translate-y-1/2 cursor-pointer border-0 bg-transparent p-0 outline-none`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    y: {
                      duration: 2.5 + index * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <img
                    src={planet.image}
                    alt={planet.name}
                    draggable="false"
                    className={`${planet.size} object-contain transition-all duration-300 ${
                      isActive ? "scale-125" : "scale-100"
                    } drop-shadow-[0_0_25px_rgba(255,255,255,0.45)]`}
                  />

                  <span
                    className={`mt-1 block text-xs font-bold drop-shadow-lg ${
                      isActive ? "text-purple-200" : "text-white"
                    }`}
                  >
                    {planet.name}
                  </span>
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.aside
              key={selected.name}
              className="glass rounded-3xl p-8 shadow-2xl"
              initial={{ opacity: 0, x: 35, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -35, filter: "blur(8px)" }}
              transition={{ duration: 0.35 }}
            >
              <motion.img
                src={selected.image}
                alt={selected.name}
                draggable="false"
                className="mb-6 h-40 w-40 object-contain drop-shadow-[0_0_45px_rgba(168,85,247,0.8)]"
                initial={{ scale: 0.8, rotate: -8 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.35 }}
              />

              <h3 className="text-5xl font-black">{selected.name}</h3>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-slate-400">Distancia al Sol</p>
                  <p className="mt-1 text-xl font-bold">{selected.distance}</p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-slate-400">Temperatura</p>
                  <p className="mt-1 text-xl font-bold">
                    {selected.temperature}
                  </p>
                </div>

                <div className="rounded-2xl bg-purple-500/20 p-4">
                  <p className="text-sm text-purple-300">Dato curioso</p>
                  <p className="mt-2 text-slate-100">{selected.fact}</p>
                </div>
              </div>
            </motion.aside>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}