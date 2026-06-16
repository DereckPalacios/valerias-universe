import { motion } from "framer-motion";

export default function FloatingPlanet({ className = "", emoji = "🪐", delay = 0 }) {
  return (
    <motion.div
      className={`absolute text-5xl md:text-7xl ${className}`}
      animate={{
        y: [0, -25, 0],
        rotate: [0, 8, -8, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      {emoji}
    </motion.div>
  );
}