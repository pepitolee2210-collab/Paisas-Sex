"use client";

import { motion } from "framer-motion";
import { Flame, DollarSign, Camera, Users } from "lucide-react";
import Link from "next/link";

export default function CreatorCTA() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-coral-500/[0.06] via-dark-900 to-rose-500/[0.06]" />
      <div className="noise-overlay absolute inset-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-coral-500/30 bg-coral-500/10 text-coral-400 text-xs sm:text-sm font-semibold mb-6">
            <DollarSign className="w-3.5 h-3.5" /> Para Creadoras de Contenido
          </span>

          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold">
            ¿Vendes contenido por <span className="text-gradient-gold">WhatsApp</span>?
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg mx-auto text-sm sm:text-lg">
            Deja de perder clientes. Únete a PaisaSex y gana hasta el 90% de cada venta con tu propia página, stories y suscriptores.
          </p>

          <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-10 max-w-md mx-auto">
            {[
              { icon: Camera, label: "Stories y Reels", desc: "Como Instagram" },
              { icon: Users, label: "Tus Suscriptores", desc: "Ingresos fijos" },
              { icon: DollarSign, label: "90% para ti", desc: "La mejor comisión" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-coral-500/10 flex items-center justify-center mb-2">
                  <item.icon className="w-5 h-5 text-coral-400" />
                </div>
                <p className="text-xs font-semibold text-text-primary">{item.label}</p>
                <p className="text-[10px] text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>

          <Link
            href="/creators/apply"
            className="shimmer relative inline-flex items-center gap-2 mt-8 sm:mt-10 px-8 py-3.5 rounded-full bg-gradient-to-r from-coral-500 to-rose-500 text-white font-bold text-sm sm:text-base hover:shadow-xl hover:shadow-coral-500/30 transition-all"
          >
            <Flame className="w-4 h-4" />
            Quiero Ser Creadora
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
