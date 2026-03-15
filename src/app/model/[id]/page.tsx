"use client";

import { useParams } from "next/navigation";
import { MapPin, Video, Heart, Crown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { MOCK_MODELS, MOCK_VIDEOS } from "@/lib/mock-data";
import VideoCard from "@/components/VideoCard";

export default function ModelPage() {
  const params = useParams();
  const model = MOCK_MODELS.find((m) => m.id === params.id);

  if (!model) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-display text-3xl font-bold">Modelo no encontrada</h1>
        <Link href="/models" className="text-coral-400 mt-4 inline-block hover:underline">← Volver a modelos</Link>
      </div>
    );
  }

  const modelVideos = MOCK_VIDEOS.filter((v) => v.modelId === model.id);

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-text-muted mb-8 pt-4">
          <Link href="/" className="hover:text-coral-400 transition-colors">Inicio</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/models" className="hover:text-coral-400 transition-colors">Modelos</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-text-secondary">{model.name}</span>
        </div>

        {/* Profile header */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-coral-500/10 via-dark-800 to-rose-500/10" />
          <div className="noise-overlay absolute inset-0" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-8 lg:p-12">
            {/* Avatar placeholder */}
            <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-dark-700 border-2 border-coral-500/30 flex items-center justify-center shrink-0">
              <span className="font-display text-3xl font-bold text-coral-400">
                {model.name.charAt(0)}
              </span>
            </div>

            <div className="text-center md:text-left flex-1">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <h1 className="font-display text-3xl lg:text-4xl font-bold">{model.name}</h1>
                {model.isTop && (
                  <span className="flex items-center gap-1 px-3 py-1 bg-coral-500/20 border border-coral-500/30 rounded-full">
                    <Crown className="w-3.5 h-3.5 text-coral-400" />
                    <span className="text-xs font-bold text-coral-400">TOP</span>
                  </span>
                )}
              </div>

              <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-text-muted mb-4">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {model.city}, Colombia</span>
                <span>{model.age} años</span>
              </div>

              <p className="text-text-secondary max-w-lg italic">&quot;{model.bio}&quot;</p>

              <div className="flex items-center justify-center md:justify-start gap-6 mt-6">
                <div className="text-center">
                  <span className="text-2xl font-bold text-text-primary flex items-center gap-1"><Video className="w-5 h-5 text-coral-400" /> {model.videos}</span>
                  <span className="text-xs text-text-muted">Videos</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="text-center">
                  <span className="text-2xl font-bold text-text-primary flex items-center gap-1"><Heart className="w-5 h-5 text-coral-400 fill-coral-400" /> {model.likes}</span>
                  <span className="text-xs text-text-muted">Likes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Model's videos */}
        <h2 className="font-display text-2xl font-bold mb-6">
          Videos de <span className="text-gradient-gold">{model.name}</span>
        </h2>
        {modelVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {modelVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <p className="text-text-muted py-12 text-center">Próximamente nuevos videos de {model.name}</p>
        )}
      </div>
    </div>
  );
}
