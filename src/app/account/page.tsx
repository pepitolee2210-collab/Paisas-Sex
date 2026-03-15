"use client";

import { User, CreditCard, Heart, History, Settings, ChevronRight } from "lucide-react";
import Link from "next/link";

const MENU_ITEMS = [
  { href: "/account/subscription", icon: CreditCard, label: "Mi Suscripción", description: "Gestiona tu plan y método de pago" },
  { href: "/account/favorites", icon: Heart, label: "Favoritos", description: "Videos que has guardado" },
  { href: "/account/history", icon: History, label: "Historial", description: "Videos que has visto" },
] as const;

export default function AccountPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile header */}
        <div className="flex items-center gap-5 mb-10">
          <div className="w-20 h-20 rounded-full bg-dark-700 border-2 border-coral-500/30 flex items-center justify-center">
            <User className="w-8 h-8 text-coral-400" />
          </div>
          <div>
            <h1 className="font-display text-2xl font-bold">Mi Cuenta</h1>
            <p className="text-text-muted text-sm">usuario@email.com</p>
            <span className="inline-block mt-1.5 px-3 py-0.5 bg-dark-700 border border-white/10 rounded-full text-xs text-text-secondary">
              Plan Free
            </span>
          </div>
        </div>

        {/* Upgrade banner */}
        <div className="relative rounded-2xl overflow-hidden border border-coral-500/20 mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-coral-500/10 via-dark-800 to-rose-500/10" />
          <div className="relative z-10 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-lg font-bold">Actualiza a Premium</h3>
              <p className="text-text-secondary text-sm">Desbloquea todos los videos en calidad máxima</p>
            </div>
            <Link href="/pricing" className="shimmer relative shrink-0 px-6 py-2.5 rounded-full bg-gradient-to-r from-coral-500 to-rose-500 text-white font-bold hover:shadow-lg hover:shadow-coral-500/25 transition-all">
              Ver Planes
            </Link>
          </div>
        </div>

        {/* Menu */}
        <div className="space-y-3">
          {MENU_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="flex items-center justify-between p-5 rounded-xl bg-dark-800 border border-white/5 hover:border-coral-500/20 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-coral-400" />
                </div>
                <div>
                  <p className="font-medium text-text-primary group-hover:text-coral-400 transition-colors">{item.label}</p>
                  <p className="text-text-muted text-xs">{item.description}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-text-muted" />
            </Link>
          ))}
        </div>

        {/* Settings */}
        <div className="mt-8 pt-8 border-t border-white/5">
          <button type="button" className="flex items-center gap-3 text-sm text-text-muted hover:text-text-primary transition-colors">
            <Settings className="w-4 h-4" />
            Configuración de la cuenta
          </button>
        </div>
      </div>
    </div>
  );
}
