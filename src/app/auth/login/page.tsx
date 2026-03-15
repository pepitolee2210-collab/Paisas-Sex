"use client";

import { useState } from "react";
import { Eye, EyeOff, Flame } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-16">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-radial from-coral-500/8 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Image src="/logo.png" alt="PaisaSex" width={180} height={45} className="h-10 w-auto mx-auto mb-4" />
          <h1 className="font-display text-2xl font-bold">Bienvenido de vuelta</h1>
          <p className="text-text-muted text-sm mt-1">Inicia sesión para acceder a tu contenido</p>
        </div>

        {/* Form */}
        <div className="p-8 rounded-2xl bg-dark-800/80 backdrop-blur-sm border border-white/10">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Email</label>
              <input
                id="email"
                type="email"
                placeholder="tu@email.com"
                className="w-full px-4 py-3 bg-dark-700 border border-white/10 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-coral-500/50 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text-secondary mb-2">Contraseña</label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-dark-700 border border-white/10 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-coral-500/50 transition-colors pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded bg-dark-700 border-white/20 accent-coral-500" />
                <span className="text-text-muted">Recordarme</span>
              </label>
              <Link href="/auth/forgot-password" className="text-coral-400 hover:text-coral-300 transition-colors">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <button
              type="submit"
              className="shimmer relative w-full py-3.5 rounded-full bg-gradient-to-r from-coral-500 to-rose-500 text-white font-bold text-lg hover:shadow-xl hover:shadow-coral-500/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <Flame className="w-5 h-5" />
              Entrar
            </button>
          </form>

          <p className="text-center text-text-muted text-sm mt-6">
            ¿No tienes cuenta?{" "}
            <Link href="/auth/register" className="text-coral-400 hover:text-coral-300 font-medium transition-colors">
              Regístrate gratis
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
