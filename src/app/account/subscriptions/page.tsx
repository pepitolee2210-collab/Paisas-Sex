"use client";

import { ChevronRight, Crown, CreditCard } from "lucide-react";
import Link from "next/link";
import { MOCK_CREATORS } from "@/lib/mock-data";

const MOCK_SUBS = MOCK_CREATORS.slice(0, 3).map((c) => ({
  creator: c,
  since: "Feb 2026",
  nextBilling: "15 Abr 2026",
}));

export default function MySubscriptionsPage() {
  return (
    <div className="pt-16 sm:pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center gap-2 text-sm text-text-muted mb-6">
          <Link href="/account" className="hover:text-coral-400">Mi Cuenta</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-text-secondary">Suscripciones</span>
        </div>
        <h1 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
          <Crown className="w-6 h-6 text-coral-400" /> Mis Suscripciones
        </h1>

        <div className="space-y-3">
          {MOCK_SUBS.map((sub) => (
            <div key={sub.creator.id} className="flex items-center justify-between p-4 rounded-xl bg-dark-800 border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-dark-700 border border-coral-500/20 flex items-center justify-center">
                  <span className="font-display font-bold text-coral-400">{sub.creator.name.charAt(0)}</span>
                </div>
                <div>
                  <Link href={`/profile/${sub.creator.username}`} className="font-semibold text-sm hover:text-coral-400 transition-colors">{sub.creator.name}</Link>
                  <p className="text-[11px] text-text-muted">Desde {sub.since} · Próximo cobro: {sub.nextBilling}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-coral-400">${sub.creator.subscriptionPrice}/mes</p>
                <button type="button" className="text-[11px] text-text-muted hover:text-rose-400 transition-colors">Cancelar</button>
              </div>
            </div>
          ))}
        </div>

        {/* Tube subscription */}
        <div className="mt-8">
          <h2 className="font-display text-lg font-bold mb-4 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-coral-400" /> Suscripción Tube
          </h2>
          <div className="p-4 rounded-xl bg-dark-800 border border-white/5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-sm">Plan Basic</p>
                <p className="text-[11px] text-text-muted">Videos profesionales en HD</p>
              </div>
              <p className="text-sm font-bold text-coral-400">$4.99/mes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
