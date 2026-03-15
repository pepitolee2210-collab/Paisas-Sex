"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, Flame, Tv } from "lucide-react";
import { MOCK_TUBE_VIDEOS, MOCK_CATEGORIES } from "@/lib/mock-data";
import TubeVideoCard from "@/components/TubeVideoCard";

export default function TubePage() {
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("all");
  const [sort, setSort] = useState<"trending" | "newest" | "popular">("trending");

  const filtered = MOCK_TUBE_VIDEOS.filter((v) => {
    const matchSearch = v.title.toLowerCase().includes(search.toLowerCase()) || v.creatorName.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCat === "all" || v.categorySlug === activeCat;
    return matchSearch && matchCat;
  });

  return (
    <div className="pt-16 sm:pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Tv className="w-5 h-5 text-coral-400" />
            <span className="text-coral-400 text-sm font-semibold uppercase tracking-wider">Tube</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold">
            Videos <span className="text-gradient-gold">Profesionales</span>
          </h1>
          <p className="text-text-secondary text-sm mt-2">Producciones exclusivas con las mejores creadoras paisas.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar videos..." className="w-full pl-11 pr-4 py-2.5 bg-dark-800 border border-white/10 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-coral-500/50" />
          </div>
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-text-muted" />
            {(["trending", "newest", "popular"] as const).map((s) => (
              <button key={s} type="button" onClick={() => setSort(s)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${sort === s ? "bg-coral-500/20 text-coral-400 border border-coral-500/30" : "text-text-muted hover:text-text-primary bg-dark-800"}`}>
                {s === "trending" ? "🔥 Trending" : s === "newest" ? "Nuevos" : "Populares"}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <button type="button" onClick={() => setActiveCat("all")} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${activeCat === "all" ? "bg-coral-500 text-white" : "bg-dark-800 text-text-secondary border border-white/5"}`}>
            Todos
          </button>
          {MOCK_CATEGORIES.map((cat) => (
            <button key={cat.slug} type="button" onClick={() => setActiveCat(cat.slug)} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${activeCat === cat.slug ? "bg-coral-500 text-white" : "bg-dark-800 text-text-secondary border border-white/5"}`}>
              {cat.emoji} {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {filtered.map((v) => <TubeVideoCard key={v.id} video={v} />)}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <Flame className="w-8 h-8 text-text-muted mx-auto mb-3" />
            <p className="text-text-muted">No se encontraron videos</p>
          </div>
        )}
      </div>
    </div>
  );
}
