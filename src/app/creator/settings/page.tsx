"use client";

import { useState } from "react";
import {
  ChevronRight,
  Camera,
  Save,
  User,
  MapPin,
  Calendar,
  DollarSign,
  FileText,
  Image as ImageIcon,
} from "lucide-react";

export default function CreatorSettingsPage() {
  const [form, setForm] = useState({
    displayName: "Valentina M.",
    bio: "Paisa de corazon, amante de la noche y el buen vestir. Mis videos te llevaran a un mundo de fantasia.",
    city: "Medellin",
    age: "23",
    subscriptionPrice: "4.99",
  });

  const update = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="pt-20 sm:pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-text-muted mb-6">
          <span>Panel Creadora</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-text-primary">Configuracion</span>
        </div>

        <h1 className="font-display text-2xl sm:text-3xl font-bold mb-8">
          Configuracion del Perfil
        </h1>

        <div className="max-w-2xl space-y-6">
          {/* Avatar upload */}
          <div className="rounded-2xl bg-dark-800 border border-white/5 p-5 sm:p-6">
            <h2 className="font-display text-base font-bold mb-4 flex items-center gap-2">
              <Camera className="w-4 h-4 text-coral-400" />
              Foto de Perfil
            </h2>
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-full bg-dark-700 border-2 border-dashed border-white/10 flex items-center justify-center cursor-pointer hover:border-coral-500/30 transition-colors">
                <User className="w-8 h-8 text-text-muted" />
              </div>
              <div>
                <label className="cursor-pointer px-4 py-2 rounded-xl bg-dark-700 border border-white/10 text-sm text-text-primary hover:border-coral-500/30 transition-colors inline-block">
                  Cambiar foto
                  <input type="file" accept="image/*" className="hidden" />
                </label>
                <p className="text-[11px] text-text-muted mt-1.5">
                  JPG o PNG. Maximo 5MB. Recomendado: 400x400px.
                </p>
              </div>
            </div>
          </div>

          {/* Banner upload */}
          <div className="rounded-2xl bg-dark-800 border border-white/5 p-5 sm:p-6">
            <h2 className="font-display text-base font-bold mb-4 flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-coral-400" />
              Banner del Perfil
            </h2>
            <div className="w-full aspect-[3/1] rounded-xl bg-dark-700 border-2 border-dashed border-white/10 flex flex-col items-center justify-center cursor-pointer hover:border-coral-500/30 transition-colors">
              <Camera className="w-8 h-8 text-text-muted mb-2" />
              <p className="text-sm text-text-muted">Haz clic para subir un banner</p>
              <p className="text-[11px] text-text-muted mt-1">
                Recomendado: 1200x400px. JPG o PNG.
              </p>
            </div>
          </div>

          {/* Profile form */}
          <div className="rounded-2xl bg-dark-800 border border-white/5 p-5 sm:p-6">
            <h2 className="font-display text-base font-bold mb-5 flex items-center gap-2">
              <FileText className="w-4 h-4 text-coral-400" />
              Informacion del Perfil
            </h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {/* Display name */}
              <div>
                <label htmlFor="displayName" className="flex items-center gap-1.5 text-sm font-medium text-text-secondary mb-1.5">
                  <User className="w-3.5 h-3.5" />
                  Nombre artistico
                </label>
                <input
                  id="displayName"
                  type="text"
                  value={form.displayName}
                  onChange={(e) => update("displayName", e.target.value)}
                  className="w-full px-4 py-2.5 bg-dark-700 border border-white/10 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-coral-500/50 transition-colors"
                />
              </div>

              {/* Bio */}
              <div>
                <label htmlFor="bio" className="flex items-center gap-1.5 text-sm font-medium text-text-secondary mb-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  Bio
                </label>
                <textarea
                  id="bio"
                  rows={3}
                  value={form.bio}
                  onChange={(e) => update("bio", e.target.value)}
                  className="w-full px-4 py-2.5 bg-dark-700 border border-white/10 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-coral-500/50 transition-colors resize-none"
                />
                <p className="text-[11px] text-text-muted mt-1">
                  {form.bio.length}/200 caracteres
                </p>
              </div>

              {/* City + Age row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="flex items-center gap-1.5 text-sm font-medium text-text-secondary mb-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Ciudad
                  </label>
                  <input
                    id="city"
                    type="text"
                    value={form.city}
                    onChange={(e) => update("city", e.target.value)}
                    className="w-full px-4 py-2.5 bg-dark-700 border border-white/10 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-coral-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="age" className="flex items-center gap-1.5 text-sm font-medium text-text-secondary mb-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Edad
                  </label>
                  <input
                    id="age"
                    type="number"
                    min="18"
                    max="99"
                    value={form.age}
                    onChange={(e) => update("age", e.target.value)}
                    className="w-full px-4 py-2.5 bg-dark-700 border border-white/10 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-coral-500/50 transition-colors"
                  />
                </div>
              </div>

              {/* Subscription price */}
              <div>
                <label htmlFor="subPrice" className="flex items-center gap-1.5 text-sm font-medium text-text-secondary mb-1.5">
                  <DollarSign className="w-3.5 h-3.5" />
                  Precio de suscripcion mensual (USD)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                  <input
                    id="subPrice"
                    type="number"
                    min="0.99"
                    max="49.99"
                    step="0.01"
                    value={form.subscriptionPrice}
                    onChange={(e) => update("subscriptionPrice", e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 bg-dark-700 border border-white/10 rounded-xl text-sm text-text-primary focus:outline-none focus:border-coral-500/50 transition-colors"
                  />
                </div>
                <p className="text-[11px] text-text-muted mt-1">
                  Tu ganancia sera del 85% ($
                  {(parseFloat(form.subscriptionPrice || "0") * 0.85).toFixed(2)}
                  /mes por suscriptor)
                </p>
              </div>

              {/* Save button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="shimmer relative w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-coral-500 to-rose-500 text-white font-bold hover:shadow-xl hover:shadow-coral-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Guardar Cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
