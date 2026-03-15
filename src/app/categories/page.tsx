"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Flame } from "lucide-react";
import { MOCK_CATEGORIES } from "@/lib/mock-data";

export default function CategoriesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <Flame className="w-5 h-5 text-coral-400" />
            <span className="text-coral-400 text-sm font-semibold uppercase tracking-[0.15em]">
              Explora
            </span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold">
            Categorías <span className="text-gradient-gold">Populares</span>
          </h1>
          <p className="text-text-secondary mt-3">Encuentra exactamente lo que te enciende.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={`/category/${cat.slug}`} className="group block card-hover">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dark-700 border border-white/5 group-hover:border-coral-500/30 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-600 via-dark-700 to-dark-800 group-hover:from-coral-500/10 group-hover:via-dark-700 group-hover:to-dark-800 transition-all duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <span className="text-5xl mb-3">{cat.emoji}</span>
                    <h3 className="font-display text-xl font-bold text-text-primary group-hover:text-coral-400 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-text-muted text-xs mt-1">{cat.count} videos</p>
                    <p className="text-text-secondary text-sm mt-3 line-clamp-2">{cat.description}</p>
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
