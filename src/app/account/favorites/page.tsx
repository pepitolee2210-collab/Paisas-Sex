"use client";

import { Heart, ChevronRight } from "lucide-react";
import Link from "next/link";
import { MOCK_TUBE_VIDEOS } from "@/lib/mock-data";
import TubeVideoCard from "@/components/TubeVideoCard";

export default function FavoritesPage() {
  const favorites = MOCK_TUBE_VIDEOS.slice(0, 3);

  return (
    <div className="pt-16 sm:pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-text-muted mb-6">
          <Link href="/account" className="hover:text-coral-400">Mi Cuenta</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-text-secondary">Favoritos</span>
        </div>
        <div className="flex items-center gap-3 mb-6">
          <Heart className="w-6 h-6 text-coral-400 fill-coral-400" />
          <h1 className="font-display text-2xl font-bold">Mis Favoritos</h1>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {favorites.map((v) => <TubeVideoCard key={v.id} video={v} />)}
        </div>
      </div>
    </div>
  );
}
