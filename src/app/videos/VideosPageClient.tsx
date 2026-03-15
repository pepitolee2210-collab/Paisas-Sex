"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, Flame } from "lucide-react";
import { MOCK_VIDEOS, MOCK_CATEGORIES } from "@/lib/mock-data";
import VideoCard from "@/components/VideoCard";

type SortOption = "newest" | "popular" | "trending";

export default function VideosPageClient() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [sort, setSort] = useState<SortOption>("trending");

  const filtered = MOCK_VIDEOS.filter((v) => {
    const matchesSearch = v.title.toLowerCase().includes(search.toLowerCase()) ||
      v.model.toLowerCase().includes(search.toLowerCase());
    const matchesCat = activeCategory === "all" || v.categorySlug === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <Flame className="w-5 h-5 text-coral-400" />
            <span className="text-coral-400 text-sm font-semibold uppercase tracking-[0.15em]">
              Catálogo
            </span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold">
            Todos los <span className="text-gradient-gold">Videos</span>
          </h1>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              placeholder="Buscar videos o modelos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-dark-800 border border-white/10 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-coral-500/50 transition-colors"
            />
          </div>
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-text-muted" />
            {(["trending", "newest", "popular"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSort(s)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  sort === s
                    ? "bg-coral-500/20 text-coral-400 border border-coral-500/30"
                    : "text-text-muted hover:text-text-primary hover:bg-dark-800"
                }`}
              >
                {s === "trending" ? "🔥 Trending" : s === "newest" ? "Nuevos" : "Populares"}
              </button>
            ))}
          </div>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === "all"
                ? "bg-coral-500 text-white"
                : "bg-dark-800 text-text-secondary hover:bg-dark-700 border border-white/5"
            }`}
          >
            Todos
          </button>
          {MOCK_CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              type="button"
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.slug
                  ? "bg-coral-500 text-white"
                  : "bg-dark-800 text-text-secondary hover:bg-dark-700 border border-white/5"
              }`}
            >
              {cat.emoji} {cat.name}
            </button>
          ))}
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-muted text-lg">No se encontraron videos</p>
            <p className="text-text-muted text-sm mt-2">Intenta con otra búsqueda o categoría</p>
          </div>
        )}
      </div>
    </div>
  );
}
