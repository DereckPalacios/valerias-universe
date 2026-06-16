import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";

const hangingSpiders = [
  { id: 1, left: "12%", delay: 0, length: 120, size: "text-4xl" },
  { id: 2, left: "28%", delay: 0.2, length: 180, size: "text-5xl" },
  { id: 3, left: "48%", delay: 0.4, length: 140, size: "text-4xl" },
  { id: 4, left: "68%", delay: 0.1, length: 210, size: "text-5xl" },
  { id: 5, left: "84%", delay: 0.3, length: 150, size: "text-4xl" },
];

export default function AntiSpiderZone() {
  const [open, setOpen] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const spiderX = useSpring(mouseX, {
    stiffness: 80,
    damping: 18,
  });

  const spiderY = useSpring(mouseY, {
    stiffness: 80,
    damping: 18,
  });

  useEffect(() => {
    if (!open) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX + 18);
      mouseY.set(e.clientY + 18);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      mouseX.set(-100);
      mouseY.set(-100);
    };
  }, [open, mouseX, mouseY]);

  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="glass mx-auto max-w-4xl rounded-3xl p-8 text-center">
        <FaShieldAlt className="mx-auto text-5xl text-purple-300" />

        <h2 className="mt-5 text-3xl font-black md:text-5xl">
          Zona Antiarañas
        </h2>

        <p className="mt-4 text-slate-300">
          Sistema de protección activado. Aquí las arañas no pasan ni con visa.
        </p>

        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="mt-8 rounded-full bg-red-500 px-7 py-3 font-bold transition hover:scale-105 hover:bg-red-400"
          >
            Abrir caja misteriosa 🕷️
          </button>
        )}

        <AnimatePresence>
          {open && (
            <motion.div
              className="relative mt-8 overflow-hidden rounded-2xl border border-red-400 bg-red-950/70 p-6"
              initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.85 }}
            >
              <p className="text-2xl font-black">⚠️ Araña detectada</p>

              <p className="mt-3 text-lg">
                Sistema cerrado.
              </p>

              <button
                onClick={() => setOpen(false)}
                className="relative z-20 mt-6 rounded-full bg-white px-5 py-2 font-bold text-red-950 transition hover:scale-105"
              >
                Cerrar caja, qué asco 😭
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 pointer-events-none bg-black/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {hangingSpiders.map((spider) => (
              <motion.div
                key={spider.id}
                className="fixed top-0 z-50 pointer-events-none"
                style={{ left: spider.left }}
                initial={{ y: -260, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -260,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: spider.delay,
                  ease: "easeOut",
                }}
              >
                <motion.div
                  animate={{
                    x: [0, 12, -12, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div
                    className="mx-auto w-px bg-white/50"
                    style={{ height: spider.length }}
                  />

                  <motion.div
                    className={`${spider.size} drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]`}
                    animate={{
                      y: [0, 8, 0],
                      rotate: [-6, 6, -6],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    🕷️
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}

            <motion.div
              className="fixed left-0 top-0 z-[60] pointer-events-none text-5xl drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
              style={{
                x: spiderX,
                y: spiderY,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: [1, 1.15, 1],
                rotate: [0, 10, -10, 0],
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                opacity: { duration: 0.2 },
                scale: {
                  duration: 1.3,
                  repeat: Infinity,
                },
                rotate: {
                  duration: 1.2,
                  repeat: Infinity,
                },
              }}
            >
              🕷️
            </motion.div>

            <motion.div
              className="fixed bottom-8 left-1/2 z-[61] -translate-x-1/2 rounded-full border border-red-400 bg-red-950/90 px-6 py-3 text-center font-bold text-red-100 shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
            >
              skjskjkd 😜😜
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}