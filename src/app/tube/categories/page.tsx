"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Tv } from "lucide-react";
import { MOCK_CATEGORIES } from "@/lib/mock-data";

export default function TubeCategoriesPage() {
  return (
    <div className="pt-16 sm:pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <Tv className="w-5 h-5 text-coral-400" />
            <span className="text-coral-400 text-sm font-semibold uppercase tracking-wider">Tube</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold">
            Categorías <span className="text-gradient-gold">del Tube</span>
          </h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {MOCK_CATEGORIES.map((cat, i) => (
            <motion.div key={cat.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
              <Link href={`/tube/category/${cat.slug}`} className="group block card-hover">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dark-700 border border-white/5 group-hover:border-coral-500/30 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-600 to-dark-800 group-hover:from-coral-500/10 transition-all duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <span className="text-4xl mb-2">{cat.emoji}</span>
                    <h3 className="font-display text-lg font-bold text-text-primary group-hover:text-coral-400 transition-colors">{cat.name}</h3>
                    <p className="text-text-muted text-xs mt-1">{cat.count} videos</p>
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
