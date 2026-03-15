"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Volume2, VolumeX } from "lucide-react";
import Image from "next/image";

const AGE_VERIFIED_KEY = "paisasex_age_verified";

export default function AgeGate({ children }: { children: React.ReactNode }) {
  const [verified, setVerified] = useState<boolean | null>(null);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(AGE_VERIFIED_KEY);
    setVerified(stored === "true");
  }, []);

  const handleConfirm = () => {
    localStorage.setItem(AGE_VERIFIED_KEY, "true");
    setVerified(true);

    const audio = new Audio("/bg-music.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    audio.play().catch(() => {});
    audioRef.current = audio;
  };

  const handleDeny = () => {
    window.location.href = "https://www.google.com";
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setMuted(!muted);
    }
  };

  if (verified === null) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-coral-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <>
      <AnimatePresence>
        {!verified && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark-950/98 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-md w-full text-center"
            >
              <div className="flex items-center justify-center mb-8">
                <Image
                  src="/logo.png"
                  alt="PaisaSex"
                  width={200}
                  height={50}
                  className="h-12 w-auto"
                  priority
                />
              </div>

              <div className="w-20 h-20 mx-auto rounded-full bg-coral-500/10 border border-coral-500/20 flex items-center justify-center mb-6">
                <ShieldCheck className="w-10 h-10 text-coral-400" />
              </div>

              <h2 className="font-display text-2xl font-bold text-text-primary mb-3">
                Verificación de Edad
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-8 max-w-sm mx-auto">
                Este sitio web contiene material para adultos. Al ingresar,
                confirmas que tienes al menos{" "}
                <strong className="text-text-primary">18 años de edad</strong> y
                que el acceso a contenido para adultos es legal en tu
                jurisdicción.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleConfirm}
                  className="shimmer relative flex-1 px-6 py-3.5 rounded-full bg-gradient-to-r from-coral-500 to-rose-500 text-white font-bold text-lg hover:shadow-xl hover:shadow-coral-500/25 transition-all"
                >
                  Soy mayor de 18
                </button>
                <button
                  type="button"
                  onClick={handleDeny}
                  className="flex-1 px-6 py-3.5 rounded-full border border-white/10 text-text-secondary font-medium hover:bg-white/5 transition-all"
                >
                  Salir
                </button>
              </div>

              <p className="text-text-muted text-[11px] mt-6 leading-relaxed">
                Al hacer clic en &quot;Soy mayor de 18&quot;, aceptas nuestros{" "}
                Términos de Uso y Política de Privacidad.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Music toggle button — only visible after verification */}
      {verified && audioRef.current && (
        <button
          type="button"
          onClick={toggleMute}
          className="fixed bottom-20 right-4 z-50 w-10 h-10 rounded-full bg-dark-800/90 backdrop-blur-sm border border-white/10 flex items-center justify-center text-text-secondary hover:text-coral-400 hover:border-coral-500/30 transition-all md:bottom-6"
          aria-label={muted ? "Activar música" : "Silenciar música"}
        >
          {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      )}

      {children}
    </>
  );
}
