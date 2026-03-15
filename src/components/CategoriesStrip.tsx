"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MOCK_CATEGORIES } from "@/lib/mock-data";

export default function CategoriesStrip() {
  return (
    <section className="relative py-10 sm:py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-6 sm:mb-8"
        >
          <h2 className="font-display text-xl sm:text-2xl font-bold">
            Categorías <span className="text-gradient-gold">Populares</span>
          </h2>
          <Link href="/categories" className="text-coral-400 hover:text-coral-300 text-xs sm:text-sm font-medium transition-colors">
            Ver todas →
          </Link>
        </motion.div>

        {/* Mobile: horizontal scroll | Desktop: grid */}
        <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3">
          {MOCK_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="w-full"
            >
              <Link
                href={`/category/${cat.slug}`}
                className="group block text-center p-3 sm:p-4 rounded-xl bg-dark-800 border border-white/5 hover:border-coral-500/20 hover:bg-dark-700 transition-all duration-300"
              >
                <span className="text-2xl sm:text-2xl block mb-1.5 sm:mb-2">{cat.emoji}</span>
                <span className="text-xs sm:text-sm font-medium text-text-primary group-hover:text-coral-400 transition-colors block">
                  {cat.name}
                </span>
                <span className="text-[10px] sm:text-[11px] text-text-muted mt-0.5 sm:mt-1 block">{cat.count}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
