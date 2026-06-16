import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const planets = [
  {
    name: "Mercurio",
    color: "from-gray-300 to-gray-600",
    position: "left-[48%] top-[42%]",
    size: "h-10 w-10",
    distance: "57.9 millones km",
    temperature: "430°C",
    fact: "Es el planeta más cercano al Sol.",
  },
  {
    name: "Venus",
    color: "from-yellow-200 to-orange-500",
    position: "left-[58%] top-[35%]",
    size: "h-12 w-12",
    distance: "108.2 millones km",
    temperature: "465°C",
    fact: "Es el planeta más caliente del sistema solar.",
  },
  {
    name: "Tierra",
    color: "from-blue-400 to-emerald-500",
    position: "left-[65%] top-[52%]",
    size: "h-14 w-14",
    distance: "149.6 millones km",
    temperature: "15°C promedio",
    fact: "Tiene océanos, vida, perros, gatos y desarrolladores desorganizados.",
  },
  {
    name: "Marte",
    color: "from-red-400 to-orange-800",
    position: "left-[38%] top-[62%]",
    size: "h-12 w-12",
    distance: "227.9 millones km",
    temperature: "-63°C promedio",
    fact: "Tiene el volcán más grande del sistema solar: Olympus Mons.",
  },
  {
    name: "Júpiter",
    color: "from-orange-200 to-amber-700",
    position: "left-[24%] top-[35%]",
    size: "h-20 w-20",
    distance: "778.5 millones km",
    temperature: "-110°C",
    fact: "Es tan grande que cabrían más de 1,300 Tierras dentro.",
  },
  {
    name: "Saturno",
    color: "from-yellow-100 to-yellow-600",
    position: "left-[72%] top-[22%]",
    size: "h-24 w-24",
    distance: "1,434 millones km",
    temperature: "-140°C",
    fact: "Sus anillos están hechos de hielo, roca y polvo.",
  },
  {
    name: "Urano",
    color: "from-cyan-200 to-blue-500",
    position: "left-[18%] top-[70%]",
    size: "h-16 w-16",
    distance: "2,871 millones km",
    temperature: "-195°C",
    fact: "Gira de lado, como si se hubiera caído y nadie lo levantó.",
  },
  {
    name: "Neptuno",
    color: "from-blue-500 to-indigo-900",
    position: "left-[82%] top-[70%]",
    size: "h-16 w-16",
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
            Tocá un planeta para ver sus datos. Esta versión sí funciona,
            porque no está poseída por bugs orbitales.
          </p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass relative h-[620px] overflow-hidden rounded-[2rem]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_55%)]" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[590px] w-[590px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

            <motion.div
              className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                boxShadow:
                  "0 0 60px #fde047, 0 0 130px rgba(253,224,71,.8)",
              }}
            />

            {planets.map((planet, index) => {
              const isActive = selected.name === planet.name;

              return (
                <motion.button
                  key={planet.name}
                  type="button"
                  onClick={() => setSelected(planet)}
                  className={`absolute z-30 ${planet.position} -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    y: {
                      duration: 2.5 + index * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.4 },
                  }}
                >
                  <div
                    className={`${planet.size} flex items-center justify-center rounded-full bg-gradient-to-br ${planet.color} text-2xl shadow-2xl`}
                    style={{
                      boxShadow: isActive
                        ? "0 0 40px rgba(216,180,254,1)"
                        : "0 0 24px rgba(255,255,255,.35)",
                    }}
                  >
                    {planet.emoji}
                  </div>

                  <span className="mt-2 block text-xs font-bold text-white drop-shadow-lg">
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
              <div
                className={`mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br ${selected.color} text-5xl`}
                style={{
                  boxShadow: "0 0 55px rgba(168,85,247,0.55)",
                }}
              >
                {selected.emoji}
              </div>

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

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm text-slate-300">
                  Planeta seleccionado:
                </p>
                <p className="mt-1 text-2xl font-black text-purple-200">
                  {selected.name}
                </p>
              </div>
            </motion.aside>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}