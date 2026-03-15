"use client";

import {
  DollarSign,
  Users,
  FileText,
  Eye,
  Upload,
  PlusCircle,
  TrendingUp,
  ChevronRight,
  Heart,
  MessageCircle,
  UserPlus,
} from "lucide-react";
import Link from "next/link";

const STATS = [
  { label: "Ganancias este mes", value: "$1,245.80", icon: DollarSign, color: "text-green-400", bg: "bg-green-500/10" },
  { label: "Suscriptores", value: "89", icon: Users, color: "text-coral-400", bg: "bg-coral-500/10" },
  { label: "Posts totales", value: "45", icon: FileText, color: "text-blue-400", bg: "bg-blue-500/10" },
  { label: "Vistas", value: "24.5K", icon: Eye, color: "text-purple-400", bg: "bg-purple-500/10" },
] as const;

const QUICK_ACTIONS = [
  { label: "Subir Story", href: "/creator/stories", icon: Upload },
  { label: "Crear Post", href: "/creator/posts", icon: PlusCircle },
  { label: "Ver Ganancias", href: "/creator/earnings", icon: TrendingUp },
] as const;

const RECENT_ACTIVITY = [
  { id: 1, icon: Heart, text: "Camilo G. le dio like a tu post", time: "Hace 5 min", color: "text-rose-400" },
  { id: 2, icon: UserPlus, text: "Nueva suscriptora: Laura M.", time: "Hace 12 min", color: "text-coral-400" },
  { id: 3, icon: MessageCircle, text: "3 nuevos comentarios en tu reel", time: "Hace 30 min", color: "text-blue-400" },
  { id: 4, icon: DollarSign, text: "Recibiste $4.99 de suscripción", time: "Hace 1h", color: "text-green-400" },
  { id: 5, icon: Eye, text: "Tu story fue vista 128 veces", time: "Hace 2h", color: "text-purple-400" },
  { id: 6, icon: UserPlus, text: "Nuevo suscriptor: Andrés R.", time: "Hace 3h", color: "text-coral-400" },
] as const;

export default function CreatorDashboardPage() {
  return (
    <div className="pt-20 sm:pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-text-muted mb-6">
          <span>Panel Creadora</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-text-primary">Dashboard</span>
        </div>

        <h1 className="font-display text-2xl sm:text-3xl font-bold mb-8">
          Bienvenida, <span className="text-coral-400">Valentina</span>
        </h1>

        {/* Stats cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-dark-800 border border-white/5 p-4 sm:p-5"
            >
              <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center mb-3`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <p className="font-display text-xl sm:text-2xl font-bold text-text-primary">
                {stat.value}
              </p>
              <p className="text-xs text-text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
          {QUICK_ACTIONS.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className="shimmer relative flex flex-col items-center gap-2 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-coral-500/10 to-rose-500/10 border border-coral-500/20 hover:border-coral-500/40 transition-all group"
            >
              <action.icon className="w-6 h-6 text-coral-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm font-medium text-text-primary text-center">
                {action.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Recent activity */}
        <div className="rounded-2xl bg-dark-800 border border-white/5 p-5 sm:p-6">
          <h2 className="font-display text-lg font-bold mb-4">Actividad Reciente</h2>
          <div className="space-y-3">
            {RECENT_ACTIVITY.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 rounded-xl bg-dark-700/50 hover:bg-dark-700 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-dark-800 flex items-center justify-center shrink-0">
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-text-primary truncate">{item.text}</p>
                  <p className="text-xs text-text-muted">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
