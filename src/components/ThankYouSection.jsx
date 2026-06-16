import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const createPetals = () =>
  Array.from({ length: 35 }, (_, index) => ({
    id: index,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 2.5,
    duration: 5 + Math.random() * 5,
    size: 45 + Math.random() * 45,
    rotate: Math.random() * 360,
    drift: Math.random() > 0.5 ? 60 : -60,
  }));

export default function ThankYouSection() {
  const [open, setOpen] = useState(false);

  const petals = useMemo(() => {
    if (!open) return [];
    return createPetals();
  }, [open]);

  return (
    <section className="relative overflow-hidden px-6 py-28">
      <AnimatePresence>
        {open && (
          <motion.div
            key="lily-petals-layer"
            className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
          >
            {petals.map((petal) => (
              <motion.img
                key={petal.id}
                src="/flowers/lily-petal.png"
                alt=""
                className="absolute top-[-100px] object-contain"
                style={{
                  left: petal.left,
                  width: petal.size,
                  height: "auto",
                }}
                initial={{
                  y: -120,
                  opacity: 0,
                  rotate: petal.rotate,
                  scale: 0.8,
                }}
                animate={{
                  y: "115vh",
                  opacity: [0, 1, 1, 0],
                  x: [0, petal.drift, -petal.drift / 2, petal.drift / 3],
                  rotate: petal.rotate + 540,
                  scale: [0.8, 1, 0.9, 1],
                }}
                exit={{
                  opacity: 0,
                  y: -120,
                  transition: { duration: 0.2 },
                }}
                transition={{
                  duration: petal.duration,
                  delay: petal.delay,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="glass relative z-50 mx-auto max-w-5xl rounded-3xl p-8 text-center md:p-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="mb-6 flex justify-center text-6xl"
        >
          🌙✨
        </motion.div>

        <h2 className="text-3xl font-black md:text-5xl">
          Hay una carta para ti
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Un pequeño mensaje guardado en este universo.
        </p>

        {!open && (
          <motion.button
            onClick={() => setOpen(true)}
            className="mt-8 rounded-full bg-white px-7 py-3 font-bold text-slate-950 transition hover:bg-purple-200"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver mensaje 💌
          </motion.button>
        )}

        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              key="letter-wrapper"
              className="relative mx-auto mt-10 max-w-3xl"
              initial={{ opacity: 0, scale: 0.82, rotateX: -80 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.82, rotateX: -80 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
            <motion.img
              src="/flowers/lily.png"
              alt="Lirio"
              draggable="false"
              className="
                pointer-events-none
                absolute
                right-[-120px]
                bottom-[-20px]
                z-30
                block
                w-[280px]
                md:w-[500px]
                object-contain
                drop-shadow-[0_0_45px_rgba(255,255,255,0.8)]
              "
              initial={{
                opacity: 0,
                x: 80,
                y: 40,
                rotate: 12,
                scale: 0.75,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, -12, 0],
                rotate: [6, 10, 6],
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: 80,
                scale: 0.75,
              }}
              transition={{
                opacity: {
                  duration: 0.5,
                  delay: 0.35,
                },
                x: {
                  duration: 0.7,
                  delay: 0.35,
                },
                scale: {
                  duration: 0.7,
                  delay: 0.35,
                },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />

              <motion.div
                className="relative rounded-3xl border border-purple-200/40 bg-gradient-to-br from-purple-100 via-white to-pink-100 p-1 shadow-[0_0_60px_rgba(216,180,254,0.45)]"
                initial={{ y: 24 }}
                animate={{ y: 0 }}
              >
                <div className="relative overflow-hidden rounded-[1.35rem] bg-white/95 px-7 py-8 text-slate-900 md:px-10">
                  <motion.div
                    className="absolute left-0 top-0 h-24 w-full bg-gradient-to-b from-purple-200/80 to-transparent"
                    initial={{ y: -80 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  />

                  <motion.div
                    className="relative mx-auto mb-8 h-20 w-32 rounded-b-full bg-gradient-to-b from-purple-200 to-pink-100 shadow-lg"
                    initial={{ rotateX: 0 }}
                    animate={{ rotateX: 180 }}
                    transition={{ duration: 0.9, delay: 0.25 }}
                    style={{ transformOrigin: "top" }}
                  />

                  <div className="relative z-10">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-purple-500">
                      Para Vale
                    </p>

                    <h3 className="mt-4 text-3xl font-black">
                      Gracias por estar aquí
                    </h3>

                    <p className="mt-6 text-lg leading-relaxed text-slate-700">
                      Gracias por tu amistad y por el poco tiempo que hemos compartido.
                      En muy poco tiempo lograste hacerme sentir especial y convertirte en alguien
                      importante para mí.
                    </p>

                    <p className="mt-5 text-lg leading-relaxed text-slate-700">
                      Y quiero que sepa que, sin importar si estoy ocupado, trabajando o haciendo
                      cualquier cosa, siempre puedes contar conmigo para lo que necesite.
                    </p>

                    <p className="mt-6 text-2xl font-bold text-purple-700">
                      Te quiero mucho. 🫶🏽
                    </p>

                    <button
                      onClick={() => setOpen(false)}
                      className="mt-8 rounded-full bg-purple-600 px-6 py-3 font-bold text-white transition hover:scale-105 hover:bg-purple-500"
                    >
                      Cerrar carta ✨
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}