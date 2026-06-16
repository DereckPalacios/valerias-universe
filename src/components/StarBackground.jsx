import { motion } from "framer-motion";

const stars = Array.from({ length: 90 }, (_, i) => ({
  id: i,
  top: Math.random() * 100,
  left: Math.random() * 100,
  size: Math.random() * 2 + 1,
  delay: Math.random() * 3,
}));

export default function StarBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[radial-gradient(circle_at_top,#312e81,#020617_55%,#000)]">
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.7, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}

      <motion.div
        className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-purple-700/30 blur-3xl"
        animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"
        animate={{ x: [0, -80, 0], y: [0, -60, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />
    </div>
  );
}