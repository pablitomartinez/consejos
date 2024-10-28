'use client';
import { useState } from "react";

export default function Home() {
  const [advice, setAdvice] = useState<string | null>(null);

  // Función para traducir el consejo a español (método simplificado)
  const translateToSpanish = (text: string) => {
    return text
      .replace("advice", "consejo")
      .replace("you", "tú")
      .replace("your", "tu")
      .replace("life", "vida");
  };

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      const translatedAdvice = translateToSpanish(data.slip.advice);
      setAdvice(translatedAdvice);
    } catch (error) {
      console.error("Error obteniendo el consejo:", error);
      setAdvice("No se pudo obtener un consejo en este momento.");
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white font-bold overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover -z-10 opacity-70"
      >
        <source src="/tormenta.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button
        onClick={fetchAdvice}
        className="px-12 py-8 bg-red-900 text-white text-3xl sm:text-5xl font-bold rounded-lg transition-all transform hover:scale-110 hover:bg-red-700 hover:shadow-[0px_0px_20px_5px_rgba(255,0,0,0.5)] z-10"
      >
        ¿Querés un consejo?
      </button>

      {advice && (
        <p className="mt-8 text-2xl sm:text-3xl text-center text-yellow-300 font-medium animate-pulse blood-effect z-10">
          {advice}
        </p>
      )}

      <style jsx>{`
        .blood-effect {
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
          border-bottom: 4px solid #ff0000;
          padding-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
}
