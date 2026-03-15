"use client";

import { Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-16">
      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <Image src="/logo.png" alt="PaisaSex" width={180} height={45} className="h-10 w-auto mx-auto mb-4" />
          <h1 className="font-display text-2xl font-bold">Recuperar Contraseña</h1>
          <p className="text-text-muted text-sm mt-1">Te enviaremos un enlace para restablecer tu contraseña</p>
        </div>

        <div className="p-8 rounded-2xl bg-dark-800/80 backdrop-blur-sm border border-white/10">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Email</label>
              <input id="email" type="email" placeholder="tu@email.com" className="w-full px-4 py-3 bg-dark-700 border border-white/10 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-coral-500/50 transition-colors" />
            </div>
            <button type="submit" className="shimmer relative w-full py-3.5 rounded-full bg-gradient-to-r from-coral-500 to-rose-500 text-white font-bold hover:shadow-xl hover:shadow-coral-500/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Enviar Enlace
            </button>
          </form>
          <p className="text-center text-text-muted text-sm mt-6">
            <Link href="/auth/login" className="text-coral-400 hover:text-coral-300 transition-colors">← Volver al login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
