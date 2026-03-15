"use client";

import { motion } from "framer-motion";
import { MapPin, Video, Heart, Crown, Flame } from "lucide-react";
import Link from "next/link";
import { MOCK_MODELS } from "@/lib/mock-data";

export default function ModelsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <Flame className="w-5 h-5 text-coral-400" />
            <span className="text-coral-400 text-sm font-semibold uppercase tracking-[0.15em]">
              Nuestras Estrellas
            </span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold">
            Modelos <span className="text-gradient-gold">Exclusivas</span>
          </h1>
          <p className="text-text-secondary mt-3 max-w-lg">
            Las mujeres más sensuales del Valle de Aburrá, seleccionadas por su belleza, carisma y sensualidad.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-7">
          {MOCK_MODELS.map((model, i) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={`/model/${model.id}`} className="group block relative card-hover">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-dark-700 border border-white/5 group-hover:border-coral-500/30 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-b from-dark-600 via-dark-700 to-dark-800" />

                  {model.isTop && (
                    <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 bg-coral-500/20 backdrop-blur-sm border border-coral-500/30 rounded-full z-10">
                      <Crown className="w-3 h-3 text-coral-400" />
                      <span className="text-[10px] font-bold text-coral-400 uppercase">Top</span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-display text-lg font-bold text-text-primary group-hover:text-coral-400 transition-colors">
                      {model.name}
                    </h3>
                    <div className="flex items-center gap-3 mt-1.5 text-xs text-text-muted">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {model.city}</span>
                      <span className="flex items-center gap-1"><Video className="w-3 h-3" /> {model.videos}</span>
                      <span className="flex items-center gap-1"><Heart className="w-3 h-3 text-coral-400" /> {model.likes}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
