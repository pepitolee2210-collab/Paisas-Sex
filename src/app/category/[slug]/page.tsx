"use client";

import { useParams } from "next/navigation";
import { ChevronRight, Flame } from "lucide-react";
import Link from "next/link";
import { MOCK_CATEGORIES, MOCK_VIDEOS } from "@/lib/mock-data";
import VideoCard from "@/components/VideoCard";

export default function CategoryPage() {
  const params = useParams();
  const category = MOCK_CATEGORIES.find((c) => c.slug === params.slug);
  const videos = MOCK_VIDEOS.filter((v) => v.categorySlug === params.slug);

  if (!category) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-display text-3xl font-bold">Categoría no encontrada</h1>
        <Link href="/categories" className="text-coral-400 mt-4 inline-block hover:underline">← Volver a categorías</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-text-muted mb-8">
          <Link href="/" className="hover:text-coral-400 transition-colors">Inicio</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/categories" className="hover:text-coral-400 transition-colors">Categorías</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-text-secondary">{category.name}</span>
        </div>

        <div className="mb-12">
          <span className="text-5xl mb-4 block">{category.emoji}</span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold">
            {category.name}
          </h1>
          <p className="text-text-secondary mt-3 max-w-lg">{category.description}</p>
          <div className="flex items-center gap-2 mt-3 text-sm text-text-muted">
            <Flame className="w-4 h-4 text-coral-400" />
            <span>{category.count} videos disponibles</span>
          </div>
        </div>

        {videos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <p className="text-text-muted py-12 text-center">Próximamente videos en esta categoría</p>
        )}
      </div>
    </div>
  );
}
