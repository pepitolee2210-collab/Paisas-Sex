"use client";

import { motion } from "framer-motion";
import { Check, Flame, Zap, Star } from "lucide-react";
import Link from "next/link";

const PLANS = [
  {
    name: "Free",
    price: "0",
    description: "Explora el catálogo",
    icon: Zap,
    color: "text-text-secondary",
    borderColor: "border-white/5",
    bgGradient: "from-dark-700 to-dark-800",
    buttonClass: "border border-white/10 text-text-primary hover:border-white/20 hover:bg-white/5",
    buttonText: "Crear Cuenta Gratis",
    features: ["Navegar catálogo completo", "Trailers de 30 segundos", "Perfiles de modelos", "Búsqueda y categorías"],
    notIncluded: ["Videos completos", "Calidad HD / 4K", "Sin publicidad", "Acceso anticipado"],
  },
  {
    name: "Basic",
    price: "4.99",
    description: "Todo el contenido en HD",
    icon: Star,
    color: "text-coral-400",
    borderColor: "border-coral-500/30",
    bgGradient: "from-coral-500/8 via-dark-800 to-dark-800",
    buttonClass: "bg-gradient-to-r from-coral-500 to-coral-600 text-white font-bold hover:shadow-lg hover:shadow-coral-500/30",
    buttonText: "Suscribirse — $4.99/mes",
    popular: true,
    features: ["Todo lo del plan Free", "Videos completos sin límite", "Calidad HD 720p", "Nuevos videos cada semana"],
    notIncluded: ["Calidad 4K", "Sin publicidad", "Acceso anticipado"],
  },
  {
    name: "Premium",
    price: "9.99",
    description: "La experiencia definitiva",
    icon: Flame,
    color: "text-rose-400",
    borderColor: "border-rose-500/30",
    bgGradient: "from-rose-500/8 via-dark-800 to-dark-800",
    buttonClass: "bg-gradient-to-r from-rose-500 to-coral-500 text-white font-bold hover:shadow-lg hover:shadow-rose-500/30",
    buttonText: "Ir Premium — $9.99/mes",
    features: ["Todo lo del plan Basic", "Calidad máxima 1080p / 4K", "Cero publicidad", "Acceso anticipado a nuevos videos", "Contenido exclusivo Premium", "Soporte prioritario"],
    notIncluded: [],
  },
] as const;

export default function PricingSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-coral-500/20 to-transparent" />
      <div className="noise-overlay absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-coral-400 text-sm font-semibold uppercase tracking-[0.2em]"
          >
            Planes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3"
          >
            Elige tu <span className="text-gradient-gold">Acceso</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary mt-4 max-w-md mx-auto"
          >
            Cancela cuando quieras. Sin contratos. Pago 100% discreto.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              {"popular" in plan && plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1 bg-coral-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-coral-500/30">
                    🔥 Más Popular
                  </span>
                </div>
              )}

              <div
                className={`relative h-full rounded-2xl border ${plan.borderColor} bg-gradient-to-b ${plan.bgGradient} p-6 lg:p-8 flex flex-col ${"popular" in plan && plan.popular ? "ring-1 ring-coral-500/30 scale-[1.02]" : ""}`}
              >
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <plan.icon className={`w-5 h-5 ${plan.color}`} />
                    <span className={`font-semibold text-sm uppercase tracking-wider ${plan.color}`}>
                      {plan.name}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl lg:text-5xl font-display font-bold text-text-primary">
                      ${plan.price}
                    </span>
                    {plan.price !== "0" && (
                      <span className="text-text-muted text-sm">/mes</span>
                    )}
                  </div>
                  <p className="text-text-secondary text-sm mt-2">{plan.description}</p>
                </div>

                <div className="h-px bg-white/5 mb-6" />

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-coral-400 mt-0.5 shrink-0" />
                      <span className="text-sm text-text-primary">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 opacity-40">
                      <Check className="w-4 h-4 mt-0.5 shrink-0" />
                      <span className="text-sm line-through">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/auth/register"
                  className={`shimmer relative block w-full text-center py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02] ${plan.buttonClass}`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-text-muted text-sm mt-10"
        >
          Pago seguro con encriptación SSL. Garantía de devolución en 7 días. Cargo discreto en tu extracto.
        </motion.p>
      </div>
    </section>
  );
}
