"use client";

import { ChevronRight, ShoppingBag } from "lucide-react";
import Link from "next/link";

const MOCK_PURCHASES = [
  { id: "1", creatorName: "Valentina M.", content: "Set exclusivo fotos premium", price: 2.99, date: "14 Mar 2026" },
  { id: "2", creatorName: "Camila R.", content: "Cosplay versión paisa — Reel", price: 3.99, date: "12 Mar 2026" },
  { id: "3", creatorName: "Isabella G.", content: "5 fotos exclusivas", price: 1.99, date: "8 Mar 2026" },
];

export default function PurchasesPage() {
  return (
    <div className="pt-16 sm:pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center gap-2 text-sm text-text-muted mb-6">
          <Link href="/account" className="hover:text-coral-400">Mi Cuenta</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-text-secondary">Compras</span>
        </div>
        <h1 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
          <ShoppingBag className="w-6 h-6 text-coral-400" /> Mis Compras
        </h1>

        <div className="space-y-3">
          {MOCK_PURCHASES.map((p) => (
            <div key={p.id} className="flex items-center justify-between p-4 rounded-xl bg-dark-800 border border-white/5">
              <div>
                <p className="font-semibold text-sm">{p.content}</p>
                <p className="text-[11px] text-text-muted">{p.creatorName} · {p.date}</p>
              </div>
              <p className="text-sm font-bold text-coral-400">${p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
