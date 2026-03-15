"use client";

import { useState } from "react";
import { Search, Flame, TrendingUp, Star } from "lucide-react";
import CreatorCard from "@/components/CreatorCard";
import { MOCK_CREATORS } from "@/lib/mock-data";

type Tab = "trending" | "top" | "new";

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState<Tab>("trending");

  const filtered = MOCK_CREATORS.filter(
    (c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-16 sm:pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Flame className="w-5 h-5 text-coral-400" />
            <span className="text-coral-400 text-sm font-semibold uppercase tracking-wider">Explorar</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold">
            Descubre <span className="text-gradient-gold">Creadoras</span>
          </h1>
        </div>

        {/* Search */}
        <div className="relative max-w-md mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar creadoras..." className="w-full pl-11 pr-4 py-3 bg-dark-800 border border-white/10 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-coral-500/50 transition-colors" />
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          {([
            { key: "trending" as Tab, label: "Trending", icon: TrendingUp },
            { key: "top" as Tab, label: "Top", icon: Star },
            { key: "new" as Tab, label: "Nuevas", icon: Flame },
          ]).map((t) => (
            <button key={t.key} type="button" onClick={() => setTab(t.key)} className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${tab === t.key ? "bg-coral-500/20 text-coral-400 border border-coral-500/30" : "text-text-muted hover:text-text-primary bg-dark-800 border border-white/5"}`}>
              <t.icon className="w-3.5 h-3.5" />
              {t.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      </div>
    </div>
  );
}
