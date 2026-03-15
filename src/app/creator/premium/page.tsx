"use client";

import { useState } from "react";
import {
  Crown,
  DollarSign,
  Users,
  TrendingUp,
  ChevronRight,
  Lock,
  Film,
  Image as ImageIcon,
  Images,
} from "lucide-react";
import { MOCK_POSTS } from "@/lib/mock-data";

const PREMIUM_POSTS = MOCK_POSTS.filter((p) => p.isPremium);

const TYPE_ICONS = {
  reel: Film,
  photo: ImageIcon,
  gallery: Images,
} as const;

export default function CreatorPremiumPage() {
  const [price, setPrice] = useState("4.99");

  return (
    <div className="pt-20 sm:pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-text-muted mb-6">
          <span>Panel Creadora</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-text-primary">Premium</span>
        </div>

        <h1 className="font-display text-2xl sm:text-3xl font-bold mb-8">
          Contenido Premium
        </h1>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
          <div className="rounded-2xl bg-dark-800 border border-white/5 p-4 sm:p-5">
            <div className="w-10 h-10 rounded-xl bg-coral-500/10 flex items-center justify-center mb-3">
              <Users className="w-5 h-5 text-coral-400" />
            </div>
            <p className="font-display text-xl sm:text-2xl font-bold text-text-primary">89</p>
            <p className="text-xs text-text-muted mt-1">Suscriptores premium</p>
          </div>
          <div className="rounded-2xl bg-dark-800 border border-white/5 p-4 sm:p-5">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center mb-3">
              <DollarSign className="w-5 h-5 text-green-400" />
            </div>
            <p className="font-display text-xl sm:text-2xl font-bold text-text-primary">$3,200</p>
            <p className="text-xs text-text-muted mt-1">Ingresos por suscripciones</p>
          </div>
          <div className="rounded-2xl bg-dark-800 border border-white/5 p-4 sm:p-5">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mb-3">
              <TrendingUp className="w-5 h-5 text-purple-400" />
            </div>
            <p className="font-display text-xl sm:text-2xl font-bold text-text-primary">$1,332</p>
            <p className="text-xs text-text-muted mt-1">Ventas de contenido</p>
          </div>
        </div>

        {/* Set price */}
        <div className="rounded-2xl bg-dark-800 border border-white/5 p-5 sm:p-6 mb-8">
          <h2 className="font-display text-lg font-bold mb-4 flex items-center gap-2">
            <Crown className="w-5 h-5 text-amber-400" />
            Precio de Suscripcion
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end">
            <div className="flex-1 w-full sm:w-auto">
              <label htmlFor="subPrice" className="block text-sm text-text-secondary mb-1.5">
                Precio mensual (USD)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  id="subPrice"
                  type="number"
                  min="0.99"
                  max="49.99"
                  step="0.01"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-dark-700 border border-white/10 rounded-xl text-sm text-text-primary focus:outline-none focus:border-coral-500/50 transition-colors"
                />
              </div>
              <p className="text-[11px] text-text-muted mt-1.5">
                Rango recomendado: $2.99 - $9.99. Tu ganancia: 85% del precio.
              </p>
            </div>
            <button
              type="button"
              className="shimmer relative px-6 py-2.5 rounded-full bg-gradient-to-r from-coral-500 to-rose-500 text-white font-bold text-sm hover:shadow-lg hover:shadow-coral-500/25 transition-all shrink-0"
            >
              Guardar Precio
            </button>
          </div>
        </div>

        {/* Premium content list */}
        <div className="rounded-2xl bg-dark-800 border border-white/5 p-5 sm:p-6">
          <h2 className="font-display text-lg font-bold mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5 text-coral-400" />
            Contenido Exclusivo ({PREMIUM_POSTS.length})
          </h2>
          <div className="space-y-3">
            {PREMIUM_POSTS.map((post) => {
              const TypeIcon = TYPE_ICONS[post.type];
              return (
                <div
                  key={post.id}
                  className="flex items-center gap-4 p-3 rounded-xl bg-dark-700/50 hover:bg-dark-700 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-dark-800 flex items-center justify-center shrink-0">
                    <TypeIcon className="w-5 h-5 text-text-muted" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-text-primary truncate">{post.caption}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-[11px] text-text-muted">{post.timeAgo}</span>
                      {"individualPrice" in post && (
                        <span className="text-[11px] text-green-400 font-medium">
                          ${post.individualPrice} por unidad
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-400 text-[11px] font-medium shrink-0">
                    <Crown className="w-3 h-3" />
                    Premium
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
