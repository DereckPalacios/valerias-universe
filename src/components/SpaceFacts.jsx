import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { spaceFacts } from "../data/spaceFacts";

export default function SpaceFacts() {
  const [fact, setFact] = useState(spaceFacts[0]);

  const getRandomFact = () => {
    const random = spaceFacts[Math.floor(Math.random() * spaceFacts.length)];
    setFact(random);
  };

  return (
    <section className="px-6 py-24">
      <div className="glass mx-auto max-w-4xl rounded-3xl p-8 text-center">
        <h2 className="text-3xl font-black md:text-5xl">
          Curiosidades del Espacio
        </h2>

        <AnimatePresence mode="wait">
          <motion.p
            key={fact}
            className="mx-auto mt-8 max-w-2xl text-xl text-slate-200"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
          >
            {fact}
          </motion.p>
        </AnimatePresence>

        <button
          onClick={getRandomFact}
          className="mt-8 rounded-full bg-purple-600 px-7 py-3 font-bold transition hover:scale-105 hover:bg-purple-500"
        >
          Descubrir dato aleatorio ✨
        </button>
      </div>
    </section>
  );
}