"use client";

import { motion } from "framer-motion";
import { Shield, Sparkles, Globe, Camera, Lock, Headphones } from "lucide-react";

const FEATURES = [
  { icon: Camera, title: "Producción Cinematográfica", description: "Videos grabados con equipo profesional. Cada escena es una obra de arte visual.", accent: "coral" as const },
  { icon: Sparkles, title: "100% Paisas Reales", description: "Mujeres reales de Medellín y el Valle de Aburrá. Belleza colombiana auténtica.", accent: "rose" as const },
  { icon: Globe, title: "Streaming Sin Buffering", description: "CDN global de alta velocidad. Disfruta sin interrupciones desde cualquier lugar.", accent: "coral" as const },
  { icon: Shield, title: "Privacidad Absoluta", description: "Tu información nunca se comparte. Cargos discretos en tu extracto bancario.", accent: "rose" as const },
  { icon: Lock, title: "Pago 100% Seguro", description: "Encriptación SSL de 256 bits. Aceptamos todas las tarjetas y PayPal.", accent: "coral" as const },
  { icon: Headphones, title: "Soporte 24/7", description: "Equipo dedicado en español e inglés. Siempre listos para ayudarte.", accent: "rose" as const },
] as const;

export default function WhyUsSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-coral-400 text-sm font-semibold uppercase tracking-[0.2em]">
            ¿Por qué elegirnos?
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            Una Experiencia <span className="text-gradient-gold">Superior</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative p-6 rounded-2xl bg-dark-800/50 border border-white/5 hover:border-coral-500/20 transition-all duration-300 card-hover">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.accent === "coral" ? "bg-coral-500/10 text-coral-400" : "bg-rose-500/10 text-rose-400"}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-text-primary mb-2 group-hover:text-coral-400 transition-colors">{feature.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
