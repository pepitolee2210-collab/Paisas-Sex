"use client";

import { useState, useEffect } from "react";
import { Flame, X } from "lucide-react";
import Link from "next/link";

export default function MobileBottomCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden animate-fade-in-up">
      <div className="bg-dark-900/95 backdrop-blur-xl border-t border-coral-500/20 px-4 py-3 safe-area-bottom">
        <div className="flex items-center gap-3">
          <Link
            href="/pricing"
            className="shimmer relative flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-coral-500 to-rose-500 text-white font-bold text-sm shadow-lg shadow-coral-500/20"
          >
            <Flame className="w-4 h-4" />
            Acceso Total — $4.99/mes
          </Link>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="p-2 text-text-muted hover:text-text-primary transition-colors shrink-0"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
