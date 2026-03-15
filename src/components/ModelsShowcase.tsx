"use client";

import { motion } from "framer-motion";
import { MapPin, Video, Heart, Crown } from "lucide-react";
import Link from "next/link";
import { MOCK_MODELS } from "@/lib/mock-data";

export default function ModelsShowcase() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] bg-gradient-radial from-rose-500/5 via-transparent to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-rose-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
            Nuestras estrellas
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3">
            Modelos <span className="text-gradient-gold">Exclusivas</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-text-secondary text-sm sm:text-base mt-3 sm:mt-4 max-w-lg mx-auto">
            Las mujeres más sensuales del Valle de Aburrá.
          </motion.p>
        </div>

        {/* Mobile: horizontal scroll | Desktop: 4-col grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {MOCK_MODELS.map((model, i) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="w-full"
            >
              <Link href={`/model/${model.id}`} className="group block relative">
                <div className="relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden bg-dark-700 border border-white/5 group-hover:border-coral-500/30 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-b from-dark-600 via-dark-700 to-dark-800" />
                  {model.isTop && (
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex items-center gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 bg-coral-500/20 backdrop-blur-sm border border-coral-500/30 rounded-full z-10">
                      <Crown className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-coral-400" />
                      <span className="text-[8px] sm:text-[10px] font-bold text-coral-400 uppercase">Top</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <h3 className="font-display text-sm sm:text-lg font-bold text-text-primary group-hover:text-coral-400 transition-colors">{model.name}</h3>
                    <div className="flex items-center gap-2 sm:gap-3 mt-1 sm:mt-1.5 text-[10px] sm:text-xs text-text-muted">
                      <span className="flex items-center gap-0.5 sm:gap-1"><MapPin className="w-2.5 sm:w-3 h-2.5 sm:h-3" /> {model.city}</span>
                      <span className="flex items-center gap-0.5 sm:gap-1"><Video className="w-2.5 sm:w-3 h-2.5 sm:h-3" /> {model.videos}</span>
                      <span className="hidden sm:flex items-center gap-1"><Heart className="w-3 h-3 text-coral-400" /> {model.likes}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link href="/models" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-white/10 text-text-primary text-sm sm:text-base font-medium hover:border-coral-500/30 hover:bg-coral-500/5 transition-all">
            Ver todas las modelos <span className="text-coral-400">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
