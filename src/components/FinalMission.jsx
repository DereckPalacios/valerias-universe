import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function FinalMission() {
  const [accepted, setAccepted] = useState(false);

  const acceptMission = (snacks = false) => {
    setAccepted(true);

    confetti({
      particleCount: 160,
      spread: 90,
      origin: { y: 0.65 },
    });

    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 120,
        origin: { y: 0.4 },
      });
    }, 450);
  };

  return (
    <section id="mission" className="px-6 py-28">
      <motion.div
        className="glass mx-auto max-w-4xl rounded-3xl p-8 text-center md:p-12"
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.p
          className="text-2xl font-black text-purple-300"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Misión completada 🚀
        </motion.p>

        <h2 className="mt-5 text-3xl font-black md:text-5xl">
          Después de explorar el universo, hay una misión pendiente…
        </h2>

        <div className="mt-10 rounded-3xl bg-white/10 p-6">
          <p className="text-4xl">🍿 Ver Interestelar</p>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Porque ya habíamos quedado en ver una película y un desarrollador
            desorganizado la dejó pendiente kskjskjsj
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={() => acceptMission(false)}
              className="rounded-full bg-purple-600 px-6 py-3 font-bold transition hover:scale-105 hover:bg-purple-500"
            >
              🚀 Acepto la misión
            </button>

            <button
              onClick={() => acceptMission(true)}
              className="rounded-full bg-white px-6 py-3 font-bold text-slate-950 transition hover:scale-105 hover:bg-purple-200"
            >
              🍿 Acepto la misión con snacks
            </button>
          </div>
        </div>

        <AnimatePresence>
          {accepted && (
            <motion.div
              className="mt-8 rounded-2xl bg-green-500/20 p-5 text-green-200"
              initial={{ opacity: 0, y: 25, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="text-2xl font-black">
                Misión aceptada. Interestelar queda oficialmente desbloqueada.
              </p>
              <p className="mt-2">
                El desarrollador queda bajo vigilancia por desorganizado. 😜😜
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}