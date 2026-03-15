"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Search as SearchIcon } from "lucide-react";
import { MOCK_VIDEOS, MOCK_MODELS } from "@/lib/mock-data";
import VideoCard from "@/components/VideoCard";
import Link from "next/link";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";

  const videos = MOCK_VIDEOS.filter(
    (v) =>
      v.title.toLowerCase().includes(query.toLowerCase()) ||
      v.model.toLowerCase().includes(query.toLowerCase()) ||
      v.category.toLowerCase().includes(query.toLowerCase())
  );

  const models = MOCK_MODELS.filter(
    (m) =>
      m.name.toLowerCase().includes(query.toLowerCase()) ||
      m.city.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="flex items-center gap-2 text-text-muted text-sm mb-2">
            <SearchIcon className="w-4 h-4" />
            Resultados para
          </div>
          <h1 className="font-display text-4xl font-bold">
            &quot;{query || "..."}&quot;
          </h1>
          <p className="text-text-muted mt-2">
            {videos.length} videos · {models.length} modelos
          </p>
        </div>

        {/* Models */}
        {models.length > 0 && (
          <div className="mb-12">
            <h2 className="font-display text-xl font-bold mb-4">Modelos</h2>
            <div className="flex flex-wrap gap-3">
              {models.map((m) => (
                <Link
                  key={m.id}
                  href={`/model/${m.id}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-dark-800 border border-white/5 hover:border-coral-500/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center">
                    <span className="font-display font-bold text-coral-400">{m.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{m.name}</p>
                    <p className="text-xs text-text-muted">{m.city} · {m.videos} videos</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Videos */}
        {videos.length > 0 ? (
          <>
            <h2 className="font-display text-xl font-bold mb-4">Videos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </>
        ) : (
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
