"use client";

import {
  Users,
  DollarSign,
  ChevronRight,
  Crown,
  Calendar,
  Search,
} from "lucide-react";
import { useState } from "react";

const MOCK_SUBSCRIBERS = [
  { id: "u1", name: "Carlos M.", subscribedSince: "15 Ene 2026", amount: 4.99, avatar: "C" },
  { id: "u2", name: "Andres R.", subscribedSince: "22 Ene 2026", amount: 4.99, avatar: "A" },
  { id: "u3", name: "Miguel A.", subscribedSince: "3 Feb 2026", amount: 4.99, avatar: "M" },
  { id: "u4", name: "Juan P.", subscribedSince: "10 Feb 2026", amount: 4.99, avatar: "J" },
  { id: "u5", name: "David L.", subscribedSince: "14 Feb 2026", amount: 4.99, avatar: "D" },
  { id: "u6", name: "Santiago G.", subscribedSince: "18 Feb 2026", amount: 4.99, avatar: "S" },
  { id: "u7", name: "Felipe H.", subscribedSince: "25 Feb 2026", amount: 4.99, avatar: "F" },
  { id: "u8", name: "Nicolas V.", subscribedSince: "1 Mar 2026", amount: 4.99, avatar: "N" },
  { id: "u9", name: "Alejandro T.", subscribedSince: "5 Mar 2026", amount: 4.99, avatar: "A" },
  { id: "u10", name: "Sebastian C.", subscribedSince: "8 Mar 2026", amount: 4.99, avatar: "S" },
  { id: "u11", name: "Mateo R.", subscribedSince: "10 Mar 2026", amount: 4.99, avatar: "M" },
  { id: "u12", name: "Daniel F.", subscribedSince: "12 Mar 2026", amount: 4.99, avatar: "D" },
] as const;

const TOTAL_SUBSCRIBERS = 89;
const MONTHLY_REVENUE = 444.11;

export default function CreatorSubscribersPage() {
  const [search, setSearch] = useState("");

  const filtered = MOCK_SUBSCRIBERS.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-20 sm:pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-text-muted mb-6">
          <span>Panel Creadora</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-text-primary">Suscriptores</span>
        </div>

        <h1 className="font-display text-2xl sm:text-3xl font-bold mb-8">
          Mis Suscriptores
        </h1>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
          <div className="rounded-2xl bg-dark-800 border border-white/5 p-5">
            <div className="w-10 h-10 rounded-xl bg-coral-500/10 flex items-center justify-center mb-3">
              <Users className="w-5 h-5 text-coral-400" />
            </div>
            <p className="font-display text-2xl sm:text-3xl font-bold text-text-primary">
              {TOTAL_SUBSCRIBERS}
            </p>
            <p className="text-xs text-text-muted mt-1">Suscriptores totales</p>
          </div>
          <div className="rounded-2xl bg-dark-800 border border-white/5 p-5">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center mb-3">
              <DollarSign className="w-5 h-5 text-green-400" />
            </div>
            <p className="font-display text-2xl sm:text-3xl font-bold text-text-primary">
              ${MONTHLY_REVENUE.toFixed(2)}
            </p>
            <p className="text-xs text-text-muted mt-1">Ingreso mensual por suscripciones</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative max-w-sm mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar suscriptor..."
            className="w-full pl-11 pr-4 py-3 bg-dark-800 border border-white/10 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-coral-500/50 transition-colors"
          />
        </div>

        {/* Subscribers list */}
        <div className="rounded-2xl bg-dark-800 border border-white/5 overflow-hidden">
          {/* Header */}
          <div className="hidden sm:grid grid-cols-[1fr_auto_auto] gap-4 px-5 py-3 border-b border-white/5">
            <span className="text-xs text-text-muted font-medium uppercase tracking-wider">
              Suscriptor
            </span>
            <span className="text-xs text-text-muted font-medium uppercase tracking-wider w-36 text-center">
              Desde
            </span>
            <span className="text-xs text-text-muted font-medium uppercase tracking-wider w-24 text-right">
              Pago
            </span>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/5">
            {filtered.map((sub) => (
              <div
                key={sub.id}
                className="flex items-center gap-3 sm:grid sm:grid-cols-[1fr_auto_auto] sm:gap-4 px-5 py-3.5 hover:bg-dark-700/30 transition-colors"
              >
                {/* User */}
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-dark-700 border border-coral-500/20 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-coral-400">
                      {sub.avatar}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-text-primary font-medium truncate">
                      {sub.name}
                    </p>
                    <p className="text-[11px] text-text-muted sm:hidden flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {sub.subscribedSince}
                    </p>
                  </div>
                </div>

                {/* Date */}
                <span className="hidden sm:flex items-center gap-1.5 text-sm text-text-secondary w-36 justify-center">
                  <Calendar className="w-3.5 h-3.5 text-text-muted" />
                  {sub.subscribedSince}
                </span>

                {/* Amount */}
                <span className="flex items-center gap-1 text-sm font-semibold text-green-400 w-24 justify-end shrink-0">
                  <Crown className="w-3.5 h-3.5 text-amber-400" />
                  ${sub.amount.toFixed(2)}/mes
                </span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="px-5 py-3 border-t border-white/5 text-xs text-text-muted text-center">
            Mostrando {filtered.length} de {TOTAL_SUBSCRIBERS} suscriptores
          </div>
        </div>
      </div>
    </div>
  );
}
