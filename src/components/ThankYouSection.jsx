import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function ThankYouSection() {
  return (
    <section className="px-6 py-28">
      <motion.div
        className="glass mx-auto max-w-4xl rounded-3xl p-8 text-center md:p-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mb-6 flex justify-center text-5xl text-pink-400"
        >
          🫶🏽
        </motion.div>

        <h2 className="text-3xl font-black md:text-5xl">
          Un mensaje para usted
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
        Gracias por tu amistad y por el poco tiempo que hemos compartido.
        En muy poco tiempo lograste hacerme sentir especial y convertirte en alguien
        importante para mí.
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
        Y quiero que sepas que, sin importar si estoy ocupado, trabajando o haciendo
        cualquier cosa, siempre puedes contar conmigo para lo que necesites.
        </p>

        <p className="mx-auto mt-6 text-xl font-semibold text-purple-200 md:text-2xl">
        Te quiero mucho, Vale. ✨
        </p>

      </motion.div>
    </section>
  );
}