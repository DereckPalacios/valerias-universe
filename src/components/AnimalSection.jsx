import { motion } from "framer-motion";

const animals = [
  {
    title: "Perrito astronauta",
    emoji: "🐶🚀",
    text: "Capitán de la misión: detectar ternura a 9300 km.",
  },
  {
    title: "Gatito astronauta",
    emoji: "🐱🌙",
    text: "Experto en ignorar órdenes y verse elegante flotando.",
  },
];

export default function AnimalSection() {
  return (
    <section className="px-6 py-24">
      <h2 className="mb-12 text-center text-3xl font-black md:text-5xl">
        Animales Espaciales
      </h2>

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {animals.map((animal) => (
          <motion.div
            key={animal.title}
            className="glass rounded-3xl p-8 text-center"
            whileHover={{ rotate: 2, scale: 1.04 }}
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-8xl"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {animal.emoji}
            </motion.div>

            <h3 className="mt-6 text-2xl font-bold">{animal.title}</h3>
            <p className="mt-3 text-slate-300">{animal.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}