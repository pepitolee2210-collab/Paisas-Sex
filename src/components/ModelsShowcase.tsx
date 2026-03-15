"use client";

import { motion } from "framer-motion";
import { MapPin, Users, BadgeCheck } from "lucide-react";
import Link from "next/link";
import { MOCK_CREATORS } from "@/lib/mock-data";

export default function ModelsShowcase() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] bg-gradient-radial from-rose-500/5 via-transparent to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-rose-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
            Red Social
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3">
            Creadoras <span className="text-gradient-gold">Destacadas</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-text-secondary text-sm sm:text-base mt-3 sm:mt-4 max-w-lg mx-auto">
            Sigue a tus creadoras favoritas. Stories diarias, reels y contenido premium exclusivo.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {MOCK_CREATORS.map((creator, i) => (
            <motion.div key={creator.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="w-full">
              <Link href={`/profile/${creator.username}`} className="group block relative">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-dark-800 border border-white/5 group-hover:border-coral-500/30 transition-all duration-300">
                  {/* Banner */}
                  <div className="h-16 sm:h-20 bg-gradient-to-br from-coral-500/15 via-dark-700 to-rose-500/10" />
                  {/* Avatar */}
                  <div className="px-3 -mt-5 sm:-mt-6 relative z-10">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-700 border-2 border-dark-800 flex items-center justify-center">
                      <span className="font-display text-sm sm:text-base font-bold text-coral-400">{creator.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="p-3 pt-1.5">
                    <div className="flex items-center gap-1">
                      <h3 className="text-xs sm:text-sm font-semibold text-text-primary group-hover:text-coral-400 transition-colors truncate">{creator.name}</h3>
                      {creator.isVerified && <BadgeCheck className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-coral-400 shrink-0" />}
                    </div>
                    <p className="text-[10px] text-text-muted flex items-center gap-0.5 mt-0.5">
                      <MapPin className="w-2.5 h-2.5" /> {creator.city}
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-[10px] text-text-muted">
                      <span className="flex items-center gap-0.5"><Users className="w-2.5 h-2.5" /> {(creator.followersCount / 1000).toFixed(1)}K</span>
                      <span className="text-coral-400 font-semibold">${creator.subscriptionPrice}/mes</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link href="/explore" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-white/10 text-text-primary text-sm sm:text-base font-medium hover:border-coral-500/30 hover:bg-coral-500/5 transition-all">
            Explorar todas las creadoras <span className="text-coral-400">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
