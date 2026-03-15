"use client";

import { User, CreditCard, Heart, History, Crown, ShoppingBag, ChevronRight, Settings } from "lucide-react";
import Link from "next/link";

const MENU_ITEMS = [
  { href: "/account/subscriptions", icon: Crown, label: "Mis Suscripciones", description: "Creadoras y tube a las que estás suscrito" },
  { href: "/account/purchases", icon: ShoppingBag, label: "Mis Compras", description: "Contenido individual que has comprado" },
  { href: "/account/favorites", icon: Heart, label: "Favoritos", description: "Videos del tube que has guardado" },
  { href: "/account/history", icon: History, label: "Historial", description: "Videos que has visto" },
] as const;

export default function AccountPage() {
  return (
    <div className="pt-16 sm:pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center gap-5 mb-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-dark-700 border-2 border-coral-500/30 flex items-center justify-center">
            <User className="w-7 h-7 text-coral-400" />
          </div>
          <div>
            <h1 className="font-display text-xl sm:text-2xl font-bold">Mi Cuenta</h1>
            <p className="text-text-muted text-sm">usuario@email.com</p>
            <span className="inline-block mt-1 px-3 py-0.5 bg-dark-700 border border-white/10 rounded-full text-xs text-text-secondary">Fan</span>
          </div>
        </div>

        {/* Upgrade banner */}
        <div className="relative rounded-2xl overflow-hidden border border-coral-500/20 mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-coral-500/10 via-dark-800 to-rose-500/10" />
          <div className="relative z-10 p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <h3 className="font-display text-base font-bold">Desbloquea todo el contenido</h3>
              <p className="text-text-secondary text-xs mt-0.5">Suscríbete a tus creadoras favoritas o al tube premium</p>
            </div>
            <Link href="/explore" className="shimmer relative shrink-0 px-5 py-2 rounded-full bg-gradient-to-r from-coral-500 to-rose-500 text-white text-sm font-bold">
              Explorar
            </Link>
          </div>
        </div>

        <div className="space-y-2">
          {MENU_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="flex items-center justify-between p-4 rounded-xl bg-dark-800 border border-white/5 hover:border-coral-500/20 transition-all group">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-dark-700 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-coral-400" />
                </div>
                <div>
                  <p className="font-medium text-sm text-text-primary group-hover:text-coral-400 transition-colors">{item.label}</p>
                  <p className="text-text-muted text-[11px]">{item.description}</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-text-muted" />
            </Link>
          ))}
        </div>

        {/* Creator link */}
        <div className="mt-6 p-4 rounded-xl bg-dark-800/50 border border-coral-500/10 text-center">
          <p className="text-sm text-text-secondary mb-2">¿Quieres ganar dinero con tu contenido?</p>
          <Link href="/creators/apply" className="text-coral-400 text-sm font-semibold hover:underline">
            Aplica como creadora →
          </Link>
        </div>

        <div className="mt-6 pt-6 border-t border-white/5">
          <button type="button" className="flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors">
            <Settings className="w-4 h-4" /> Configuración
          </button>
        </div>
      </div>
    </div>
  );
}
