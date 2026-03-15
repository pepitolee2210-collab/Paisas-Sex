"use client";

import { useState } from "react";
import { Eye, EyeOff, Flame, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-16">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-radial from-coral-500/8 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <Image src="/logo.png" alt="PaisaSex" width={180} height={45} className="h-10 w-auto mx-auto mb-4" />
          <h1 className="font-display text-2xl font-bold">Crea tu cuenta</h1>
          <p className="text-text-muted text-sm mt-1">Accede a trailers gratis al registrarte</p>
        </div>

        <div className="p-8 rounded-2xl bg-dark-800/80 backdrop-blur-sm border border-white/10">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-text-secondary mb-2">Nombre de usuario</label>
              <input id="username" type="text" placeholder="tu_usuario" className="w-full px-4 py-3 bg-dark-700 border border-white/10 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-coral-500/50 transition-colors" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Email</label>
              <input id="email" type="email" placeholder="tu@email.com" className="w-full px-4 py-3 bg-dark-700 border border-white/10 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-coral-500/50 transition-colors" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text-secondary mb-2">Contraseña</label>
              <div className="relative">
                <input id="password" type={showPassword ? "text" : "password"} placeholder="Mínimo 8 caracteres" className="w-full px-4 py-3 bg-dark-700 border border-white/10 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-coral-500/50 transition-colors pr-12" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 mt-0.5 rounded bg-dark-700 border-white/20 accent-coral-500" />
              <span className="text-text-muted text-xs leading-relaxed">
                Confirmo que tengo 18+ años y acepto los{" "}
                <Link href="/terms" className="text-coral-400 hover:underline">Términos de Uso</Link> y la{" "}
                <Link href="/privacy" className="text-coral-400 hover:underline">Política de Privacidad</Link>.
              </span>
            </label>

            <button type="submit" className="shimmer relative w-full py-3.5 rounded-full bg-gradient-to-r from-coral-500 to-rose-500 text-white font-bold text-lg hover:shadow-xl hover:shadow-coral-500/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
              <Flame className="w-5 h-5" />
              Crear Cuenta Gratis
            </button>
          </form>

          {/* Benefits */}
          <div className="mt-6 pt-6 border-t border-white/5">
            <p className="text-text-muted text-xs font-medium uppercase tracking-wider mb-3">Al registrarte obtienes:</p>
            <div className="space-y-2">
              {["Acceso a trailers de 30 segundos", "Navegar catálogo completo", "Guardar favoritos"].map((b) => (
                <div key={b} className="flex items-center gap-2 text-xs text-text-secondary">
                  <Check className="w-3.5 h-3.5 text-coral-400" /> {b}
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-text-muted text-sm mt-6">
            ¿Ya tienes cuenta?{" "}
            <Link href="/auth/login" className="text-coral-400 hover:text-coral-300 font-medium transition-colors">Inicia sesión</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
