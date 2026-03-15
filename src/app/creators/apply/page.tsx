"use client";

import { motion } from "framer-motion";
import { Flame, DollarSign, Shield, Users, Camera, TrendingUp, Check } from "lucide-react";
import Image from "next/image";

const BENEFITS = [
  { icon: DollarSign, title: "Gana hasta 90%", desc: "La comisión más baja del mercado. Tú te quedas con el 85-90% de cada venta." },
  { icon: Users, title: "Construye tu Audiencia", desc: "Stories, reels y posts para conectar con tus fans. Como Instagram, pero sin censura." },
  { icon: Shield, title: "Privacidad Total", desc: "Pagos discretos. Tu información personal nunca se comparte con los suscriptores." },
  { icon: Camera, title: "Herramientas Pro", desc: "Panel de creadora con analytics, gestión de contenido y control total de precios." },
  { icon: TrendingUp, title: "Más que WhatsApp", desc: "Deja de perder clientes por WhatsApp. Aquí tus fans te encuentran y pagan fácil." },
  { icon: Flame, title: "Comunidad Exclusiva", desc: "Únete a las creadoras paisas más exitosas de la plataforma." },
] as const;

export default function CreatorsApplyPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <Image src="/logo.png" alt="PaisaSex" width={200} height={50} className="h-10 w-auto mx-auto mb-6" />
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-coral-500/30 bg-coral-500/10 text-coral-400 text-sm font-semibold">
              <Flame className="w-4 h-4" /> Programa de Creadoras
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold">
            Monetiza tu <span className="text-gradient-gold">Contenido</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-text-secondary mt-4 max-w-lg mx-auto text-sm sm:text-lg">
            ¿Vendes contenido por WhatsApp? Mereces una plataforma profesional. Gana más, con menos esfuerzo.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-16 max-w-lg mx-auto">
          {[
            { value: "90%", label: "Para ti" },
            { value: "+10K", label: "Fans activos" },
            { value: "$0", label: "Costo de unirte" },
          ].map((s) => (
            <div key={s.label} className="text-center p-4 rounded-xl bg-dark-800 border border-white/5">
              <p className="text-2xl sm:text-3xl font-display font-bold text-coral-400">{s.value}</p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {BENEFITS.map((b, i) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }} className="p-5 rounded-2xl bg-dark-800/50 border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-coral-500/10 flex items-center justify-center mb-3">
                <b.icon className="w-5 h-5 text-coral-400" />
              </div>
              <h3 className="font-semibold text-text-primary mb-1">{b.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Application form */}
        <div className="max-w-md mx-auto">
          <h2 className="font-display text-2xl font-bold text-center mb-6">Aplica Ahora</h2>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 p-6 rounded-2xl bg-dark-800 border border-white/10">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1.5">Nombre artístico</label>
              <input id="name" type="text" placeholder="Ej: Valentina M." className="w-full px-4 py-2.5 bg-dark-700 border border-white/10 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-coral-500/50" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1.5">Email</label>
              <input id="email" type="email" placeholder="tu@email.com" className="w-full px-4 py-2.5 bg-dark-700 border border-white/10 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-coral-500/50" />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-text-secondary mb-1.5">Ciudad</label>
              <input id="city" type="text" placeholder="Medellín" className="w-full px-4 py-2.5 bg-dark-700 border border-white/10 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-coral-500/50" />
            </div>
            <div>
              <label htmlFor="instagram" className="block text-sm font-medium text-text-secondary mb-1.5">Instagram o WhatsApp</label>
              <input id="instagram" type="text" placeholder="@tu_perfil" className="w-full px-4 py-2.5 bg-dark-700 border border-white/10 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-coral-500/50" />
            </div>
            <div>
              <label htmlFor="why" className="block text-sm font-medium text-text-secondary mb-1.5">¿Por qué quieres unirte?</label>
              <textarea id="why" rows={3} placeholder="Cuéntanos sobre ti..." className="w-full px-4 py-2.5 bg-dark-700 border border-white/10 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-coral-500/50 resize-none" />
            </div>
            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 mt-0.5 accent-coral-500" />
              <span className="text-xs text-text-muted">Confirmo que soy mayor de 18 años y acepto los términos</span>
            </label>
            <button type="submit" className="shimmer relative w-full py-3 rounded-full bg-gradient-to-r from-coral-500 to-rose-500 text-white font-bold hover:shadow-xl hover:shadow-coral-500/25 transition-all flex items-center justify-center gap-2">
              <Flame className="w-4 h-4" /> Enviar Solicitud
            </button>
          </form>
          <div className="mt-4 space-y-2">
            {["Aprobación en 24-48 horas", "Sin costo de inscripción", "Soporte dedicado para creadoras"].map((t) => (
              <p key={t} className="flex items-center gap-2 text-xs text-text-muted"><Check className="w-3.5 h-3.5 text-coral-400" /> {t}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
