"use client";

import { CreditCard, ChevronRight, Check } from "lucide-react";
import Link from "next/link";

export default function SubscriptionPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-text-muted mb-8">
          <Link href="/account" className="hover:text-coral-400 transition-colors">Mi Cuenta</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-text-secondary">Suscripción</span>
        </div>

        <h1 className="font-display text-3xl font-bold mb-8">Mi Suscripción</h1>

        {/* Current plan */}
        <div className="p-6 rounded-2xl bg-dark-800 border border-white/10 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-coral-400" />
              <span className="font-semibold">Plan Actual</span>
            </div>
            <span className="px-3 py-1 bg-dark-700 rounded-full text-xs font-medium text-text-secondary">Free</span>
          </div>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2 text-sm text-text-secondary">
              <Check className="w-4 h-4 text-coral-400" /> Trailers de 30 segundos
            </li>
            <li className="flex items-center gap-2 text-sm text-text-secondary">
              <Check className="w-4 h-4 text-coral-400" /> Navegar catálogo
            </li>
          </ul>
          <Link href="/pricing" className="shimmer relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-coral-500 to-rose-500 text-white font-bold hover:shadow-lg hover:shadow-coral-500/25 transition-all">
            Actualizar Plan
          </Link>
        </div>

        <p className="text-text-muted text-sm">
          ¿Problemas con tu suscripción? <Link href="/terms" className="text-coral-400 hover:underline">Contáctanos</Link>
        </p>
      </div>
    </div>
  );
}
