"use client";

import { motion } from "framer-motion";
import { Play, Star, Flame, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Particles from "./Particles";

const MODELS_PREVIEW = [
  { name: "Valentina M.", tag: "Exclusivo", city: "Medellín" },
  { name: "Camila R.", tag: "Trending", city: "Envigado" },
  { name: "Isabella G.", tag: "Nuevo", city: "Medellín" },
] as const;

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 sm:w-[700px] sm:h-[700px] rounded-full bg-coral-500/[0.12] blur-[80px] sm:blur-[120px] translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-56 h-56 sm:w-[500px] sm:h-[500px] rounded-full bg-rose-500/[0.08] blur-[60px] sm:blur-[100px] -translate-x-1/3 translate-y-1/4" />
      </div>
      <div className="noise-overlay absolute inset-0" />
      <Particles count={12} />

      {/* ── Content ── */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-24 sm:pt-32 pb-10 sm:pb-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* ═══ Text column ═══ */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-coral-500/30 bg-coral-500/10 mb-5 sm:mb-7"
            >
              <Flame className="w-3.5 h-3.5 text-coral-400" />
              <span className="text-[11px] sm:text-sm text-coral-400 font-semibold tracking-wide uppercase">
                Contenido Exclusivo +18
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold tracking-tight"
            >
              <span className="block text-4xl sm:text-5xl lg:text-7xl leading-[1.1] text-text-primary">
                Las Paisas
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-7xl leading-[1.1] text-gradient-gold">
                Más Sensuales
              </span>
              <span className="block text-lg sm:text-3xl lg:text-5xl text-text-primary/70 mt-1 font-medium italic">
                de Colombia
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-text-secondary text-sm sm:text-lg lg:text-xl leading-relaxed mt-4 sm:mt-6"
            >
              Videos exclusivos en HD con las mujeres más
              deseadas de Medellín. Pura tentación desde{" "}
              <span className="text-coral-400 font-bold">$4.99/mes</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/pricing"
                className="shimmer relative flex items-center justify-center gap-2 py-3.5 sm:py-4 sm:px-8 rounded-full bg-gradient-to-r from-coral-500 via-rose-500 to-coral-600 text-white font-bold text-[15px] sm:text-lg shadow-lg shadow-coral-500/20 hover:shadow-coral-500/40 transition-all active:scale-[0.98]"
              >
                <Flame className="w-[18px] h-[18px]" />
                Acceso Total
              </Link>
              <Link
                href="/videos"
                className="flex items-center justify-center gap-2 py-3.5 sm:py-4 sm:px-8 rounded-full border border-white/10 text-text-primary font-medium text-[15px] sm:text-lg hover:border-coral-500/30 hover:bg-white/[0.03] transition-all active:scale-[0.98]"
              >
                <Play className="w-[18px] h-[18px] text-coral-400" />
                Ver Trailers Gratis
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-7 sm:mt-10 flex items-center justify-center lg:justify-start gap-3 sm:gap-5 text-[11px] sm:text-sm text-text-muted"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-coral-400 fill-coral-400" />
                ))}
                <span className="text-text-secondary ml-1 font-medium">4.9</span>
              </div>
              <span className="w-px h-3 bg-white/10" />
              <span className="flex items-center gap-1">
                <Heart className="w-3 h-3 text-coral-400 fill-coral-400" />
                10K+
              </span>
              <span className="w-px h-3 bg-white/10" />
              <span>500+ videos HD</span>
            </motion.div>

            {/* ── Mobile: model cards grid (NO horizontal scroll) ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="lg:hidden mt-8 grid grid-cols-3 gap-2.5"
            >
              {MODELS_PREVIEW.map((model) => (
                <div
                  key={model.name}
                  className="aspect-[3/4] rounded-xl overflow-hidden bg-dark-800 border border-white/[0.08] relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-dark-600 via-dark-700 to-dark-900" />
                  <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 bg-coral-500/25 backdrop-blur-sm border border-coral-500/30 rounded text-[7px] font-bold text-coral-300 uppercase tracking-wider z-10">
                    {model.tag}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-coral-500/80 flex items-center justify-center shadow-lg shadow-coral-500/20">
                      <Play className="w-3 h-3 text-white ml-px" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 px-2 pb-2 pt-6 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent">
                    <p className="text-[10px] font-bold text-text-primary leading-tight truncate">{model.name}</p>
                    <p className="text-[8px] text-text-muted">{model.city}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ═══ Desktop: showcase card ═══ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-8 bg-gradient-to-br from-coral-500/20 via-rose-500/10 to-transparent rounded-3xl blur-3xl animate-pulse-glow" />
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10 bg-dark-800">
              <div className="absolute inset-0 bg-gradient-to-b from-dark-700 via-dark-800 to-dark-900 flex items-center justify-center">
                <div className="text-center">
                  <Image src="/logo.png" alt="PaisaSex" width={180} height={45} className="h-12 w-auto mb-4 mx-auto" />
                  <p className="text-text-muted text-sm italic">Próximamente</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-coral-500/20 border border-coral-500/30 rounded text-xs font-semibold text-coral-400 uppercase tracking-wider">Exclusivo</span>
                  <span className="px-2 py-0.5 bg-rose-500/20 border border-rose-500/30 rounded text-xs font-semibold text-rose-400 uppercase tracking-wider">Nuevo</span>
                </div>
                <h3 className="font-display text-xl font-bold text-text-primary">Valentina M.</h3>
                <p className="text-text-secondary text-sm">Medellín, Colombia</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-coral-500/90 flex items-center justify-center glow-gold cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 text-white ml-1" />
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 top-1/4 w-36 rounded-xl border border-white/10 bg-dark-800/90 backdrop-blur-sm p-3 shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-2 h-2 rounded-full bg-coral-400 animate-pulse" />
                <span className="text-[10px] text-coral-400 uppercase tracking-wider font-semibold">Trending</span>
              </div>
              <p className="text-xs font-medium text-text-primary truncate">Camila R.</p>
              <p className="text-[10px] text-text-muted">245 viendo ahora</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-4 bottom-1/4 w-40 rounded-xl border border-white/10 bg-dark-800/90 backdrop-blur-sm p-3 shadow-2xl"
            >
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-coral-400 fill-coral-400" />
                ))}
              </div>
              <p className="text-xs text-text-primary font-medium italic">&quot;Adicto desde el primer video&quot;</p>
              <p className="text-[10px] text-text-muted mt-1">— Marco, Miami</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-32 bg-gradient-to-t from-dark-900 to-transparent pointer-events-none" />
    </section>
  );
}
