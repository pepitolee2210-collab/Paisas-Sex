"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Search as SearchIcon } from "lucide-react";
import { MOCK_TUBE_VIDEOS, MOCK_CREATORS } from "@/lib/mock-data";
import TubeVideoCard from "@/components/TubeVideoCard";
import CreatorCard from "@/components/CreatorCard";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";

  const videos = MOCK_TUBE_VIDEOS.filter((v) => v.title.toLowerCase().includes(query.toLowerCase()) || v.creatorName.toLowerCase().includes(query.toLowerCase()));
  const creators = MOCK_CREATORS.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()) || c.city.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="pt-16 sm:pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-text-muted text-sm mb-2">
            <SearchIcon className="w-4 h-4" /> Resultados para
          </div>
          <h1 className="font-display text-3xl font-bold">&quot;{query || "..."}&quot;</h1>
          <p className="text-text-muted mt-2">{creators.length} creadoras · {videos.length} videos</p>
        </div>

        {creators.length > 0 && (
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4">Creadoras</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {creators.map((c) => <CreatorCard key={c.id} creator={c} />)}
            </div>
          </div>
        )}

        {videos.length > 0 && (
          <>
            <h2 className="font-display text-xl font-bold mb-4">Videos del Tube</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
              {videos.map((v) => <TubeVideoCard key={v.id} video={v} />)}
            </div>
          </>
        )}

        {creators.length === 0 && videos.length === 0 && (
          <p className="text-text-muted py-12 text-center">No se encontraron resultados para &quot;{query}&quot;</p>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-text-muted">Buscando...</div>}>
      <SearchResults />
    </Suspense>
  );
}
