"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Heart, Star, MapPin } from "lucide-react";

export default function SeductorasBanner() {
  return (
    <section className="relative py-12 sm:py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.a
          href="https://seductoras.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative block rounded-2xl overflow-hidden border border-pink-500/20 bg-gradient-to-br from-dark-800 via-dark-900 to-dark-800 hover:border-pink-500/40 transition-all duration-500"
        >
          {/* Background glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-pink-500/10 blur-3xl group-hover:bg-pink-500/15 transition-all duration-700" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-rose-500/10 blur-3xl group-hover:bg-rose-500/15 transition-all duration-700" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 p-6 sm:p-8">
            {/* Logo */}
            <div className="shrink-0">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3 group-hover:border-pink-500/30 transition-colors">
                <Image
                  src="/seductoras-logo.png"
                  alt="Seductoras"
                  width={140}
                  height={140}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold mb-3">
                <Heart className="w-3 h-3" fill="currentColor" />
                Publicidad
              </div>

              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                Encuentra Acompañantes en{" "}
                <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Medellín
                </span>
              </h3>

              <p className="text-text-secondary text-sm sm:text-base mb-4 max-w-lg">
                El directorio más exclusivo de Colombia. Perfiles verificados, fotos reales y reseñas de la comunidad.
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-5">
                {[
                  { icon: Star, label: "Perfiles Verificados" },
                  { icon: MapPin, label: "Medellín y más" },
                  { icon: Heart, label: "Reseñas Reales" },
                ].map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-1.5 text-xs text-text-muted"
                  >
                    <item.icon className="w-3.5 h-3.5 text-pink-400" />
                    {item.label}
                  </span>
                ))}
              </div>

              <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold text-sm group-hover:shadow-lg group-hover:shadow-pink-500/25 transition-all">
                Visitar Seductoras
                <ExternalLink className="w-4 h-4" />
              </span>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
