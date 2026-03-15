"use client";

import {
  DollarSign,
  TrendingUp,
  Clock,
  ChevronRight,
  Wallet,
  Calendar,
  Users,
  ShoppingBag,
} from "lucide-react";
import { MOCK_EARNINGS } from "@/lib/mock-data";

export default function CreatorEarningsPage() {
  return (
    <div className="pt-20 sm:pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-text-muted mb-6">
          <span>Panel Creadora</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-text-primary">Ganancias</span>
        </div>

        <h1 className="font-display text-2xl sm:text-3xl font-bold mb-8">
          Mis Ganancias
        </h1>

        {/* Top stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
          <div className="rounded-2xl bg-dark-800 border border-white/5 p-5">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center mb-3">
              <DollarSign className="w-5 h-5 text-green-400" />
            </div>
            <p className="font-display text-2xl sm:text-3xl font-bold text-text-primary">
              ${MOCK_EARNINGS.totalEarnings.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </p>
            <p className="text-xs text-text-muted mt-1">Ganancias totales</p>
          </div>
          <div className="rounded-2xl bg-dark-800 border border-white/5 p-5">
            <div className="w-10 h-10 rounded-xl bg-coral-500/10 flex items-center justify-center mb-3">
              <TrendingUp className="w-5 h-5 text-coral-400" />
            </div>
            <p className="font-display text-2xl sm:text-3xl font-bold text-text-primary">
              ${MOCK_EARNINGS.thisMonth.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </p>
            <p className="text-xs text-text-muted mt-1">Este mes</p>
          </div>
          <div className="rounded-2xl bg-dark-800 border border-white/5 p-5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-3">
              <Clock className="w-5 h-5 text-amber-400" />
            </div>
            <p className="font-display text-2xl sm:text-3xl font-bold text-text-primary">
              ${MOCK_EARNINGS.pendingPayout.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </p>
            <p className="text-xs text-text-muted mt-1">Pendiente de pago</p>
          </div>
        </div>

        {/* Revenue breakdown */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
          <div className="rounded-2xl bg-dark-800 border border-white/5 p-4 sm:p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="font-display text-lg font-bold text-text-primary">
                ${MOCK_EARNINGS.subscriberRevenue.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </p>
              <p className="text-xs text-text-muted">Por suscripciones</p>
            </div>
          </div>
          <div className="rounded-2xl bg-dark-800 border border-white/5 p-4 sm:p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
              <ShoppingBag className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="font-display text-lg font-bold text-text-primary">
                ${MOCK_EARNINGS.contentSalesRevenue.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </p>
              <p className="text-xs text-text-muted">Por venta de contenido</p>
            </div>
          </div>
        </div>

        {/* Payout button */}
        <div className="rounded-2xl bg-gradient-to-r from-coral-500/10 via-dark-800 to-rose-500/10 border border-coral-500/20 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <Wallet className="w-6 h-6 text-coral-400" />
            <div>
              <p className="font-display font-bold text-text-primary">
                Tienes ${MOCK_EARNINGS.pendingPayout.toFixed(2)} disponibles
              </p>
              <p className="text-xs text-text-secondary">
                Los pagos se procesan en 3-5 dias habiles
              </p>
            </div>
          </div>
          <button
            type="button"
            className="shimmer relative px-6 py-3 rounded-full bg-gradient-to-r from-coral-500 to-rose-500 text-white font-bold hover:shadow-xl hover:shadow-coral-500/25 transition-all flex items-center gap-2 shrink-0"
          >
            <DollarSign className="w-4 h-4" />
            Solicitar Pago
          </button>
        </div>

        {/* Monthly history table */}
        <div className="rounded-2xl bg-dark-800 border border-white/5 overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-white/5">
            <h2 className="font-display text-lg font-bold flex items-center gap-2">
              <Calendar className="w-5 h-5 text-coral-400" />
              Historial Mensual
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left py-3 px-5 text-text-muted font-medium text-xs uppercase tracking-wider">
                    Mes
                  </th>
                  <th className="text-right py-3 px-5 text-text-muted font-medium text-xs uppercase tracking-wider">
                    Ganancias
                  </th>
                  <th className="text-right py-3 px-5 text-text-muted font-medium text-xs uppercase tracking-wider hidden sm:table-cell">
                    Suscriptores
                  </th>
                  <th className="text-right py-3 px-5 text-text-muted font-medium text-xs uppercase tracking-wider hidden sm:table-cell">
                    Ventas
                  </th>
                </tr>
              </thead>
              <tbody>
                {MOCK_EARNINGS.history.map((row) => (
                  <tr
                    key={row.month}
                    className="border-b border-white/5 last:border-0 hover:bg-dark-700/30 transition-colors"
                  >
                    <td className="py-3.5 px-5 text-text-primary font-medium">
                      {row.month}
                    </td>
                    <td className="py-3.5 px-5 text-right text-green-400 font-semibold">
                      ${row.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </td>
                    <td className="py-3.5 px-5 text-right text-text-secondary hidden sm:table-cell">
                      {row.subscribers}
                    </td>
                    <td className="py-3.5 px-5 text-right text-text-secondary hidden sm:table-cell">
                      {row.sales}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
