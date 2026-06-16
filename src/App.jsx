import { useRef, useState } from "react";
import { FaMusic, FaPause } from "react-icons/fa";

import StarBackground from "./components/StarBackground";
import Hero from "./components/Hero";
import SolarSystem from "./components/SolarSystem";
import SpaceFacts from "./components/SpaceFacts";
import AnimalSection from "./components/AnimalSection";
import AntiSpiderZone from "./components/AntiSpiderZone";
import ThankYouSection from "./components/ThankYouSection";
import FinalMission from "./components/FinalMission";

export default function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.22;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.log("El navegador bloqueó el audio:", error);
    }
  };

  return (
    <>
      <StarBackground />

      <audio ref={audioRef} loop>
        <source src="/music/interstellar.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed bottom-5 right-5 z-[999] flex items-center gap-2 rounded-full border border-white/20 bg-purple-600/90 px-5 py-3 text-sm font-bold text-white shadow-2xl backdrop-blur-md transition hover:scale-105 hover:bg-purple-500"
      >
        {isPlaying ? <FaPause /> : <FaMusic />}
        {isPlaying ? "Pausar música" : "Música espacial"}
      </button>

      <main>
        <Hero />
        <SolarSystem />
        <SpaceFacts />
        <AnimalSection />
        <AntiSpiderZone />
        <ThankYouSection />
        <FinalMission />
      </main>

      <footer className="px-6 pb-8 text-center text-sm text-slate-400">
        Creado con React, Vite, Tailwind, Framer Motion y cariño espacial.
      </footer>
    </>
  );
}