"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import Link from "next/link";
import { MOCK_VIDEOS } from "@/lib/mock-data";
import VideoCard from "@/components/VideoCard";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function FeaturedVideos() {
  const featured = MOCK_VIDEOS.slice(0, 6);

  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4 mb-8 sm:mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-coral-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] flex items-center gap-1.5"
            >
              <Flame className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> Lo más caliente
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3"
            >
              Videos <span className="text-gradient-gold">Destacados</span>
            </motion.h2>
          </div>
          <Link href="/videos" className="text-coral-400 hover:text-coral-300 text-xs sm:text-sm font-medium transition-colors underline underline-offset-4 decoration-coral-500/30">
            Ver todos →
          </Link>
        </div>

        {/* Mobile: 2 columns | Desktop: 3 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6"
        >
          {featured.map((video) => (
            <motion.div key={video.id} variants={cardVariants}>
              <VideoCard video={video} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-16 relative rounded-2xl overflow-hidden border border-coral-500/20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-coral-500/10 via-dark-800 to-rose-500/10" />
          <div className="noise-overlay absolute inset-0" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 p-6 sm:p-8 lg:p-12 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-coral-500/20 flex items-center justify-center shrink-0">
                <Flame className="w-6 sm:w-7 h-6 sm:h-7 text-coral-400" />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-bold">
                  ¿Quieres ver todo sin censura?
                </h3>
                <p className="text-text-secondary text-xs sm:text-sm mt-1">
                  +500 videos en HD. Sin límites. Sin publicidad.
                </p>
              </div>
            </div>
            <Link
              href="/pricing"
              className="shimmer relative shrink-0 w-full sm:w-auto px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-coral-500 to-rose-500 text-white font-bold text-sm sm:text-base hover:shadow-xl hover:shadow-coral-500/30 transition-all text-center"
            >
              Suscribirse desde $4.99
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
