"use client";

import { useParams } from "next/navigation";
import { Play, Heart, Share2, Lock, Clock, Eye, ChevronRight, Flame } from "lucide-react";
import Link from "next/link";
import { MOCK_VIDEOS } from "@/lib/mock-data";
import VideoCard from "@/components/VideoCard";

export default function VideoPage() {
  const params = useParams();
  const video = MOCK_VIDEOS.find((v) => v.id === params.id);

  if (!video) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-display text-3xl font-bold">Video no encontrado</h1>
        <Link href="/videos" className="text-coral-400 mt-4 inline-block hover:underline">
          ← Volver a videos
        </Link>
      </div>
    );
  }

  const related = MOCK_VIDEOS.filter((v) => v.id !== video.id).slice(0, 4);

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-text-muted mb-6 pt-4">
          <Link href="/" className="hover:text-coral-400 transition-colors">Inicio</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/videos" className="hover:text-coral-400 transition-colors">Videos</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-text-secondary truncate">{video.title}</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Player Area */}
          <div className="lg:col-span-2">
            {/* Player placeholder */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-dark-800 border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-dark-700 to-dark-900 flex items-center justify-center">
                {video.isPremium ? (
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-coral-500/20 border border-coral-500/30 flex items-center justify-center mb-4">
                      <Lock className="w-8 h-8 text-coral-400" />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2">Contenido Premium</h3>
                    <p className="text-text-secondary text-sm mb-6">Suscríbete para ver el video completo</p>
                    <Link
                      href="/pricing"
                      className="shimmer relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-coral-500 to-rose-500 text-white font-bold hover:shadow-xl hover:shadow-coral-500/30 transition-all"
                    >
                      <Flame className="w-4 h-4" />
                      Desbloquear — $4.99/mes
                    </Link>
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-full bg-coral-500/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform glow-gold">
                    <Play className="w-9 h-9 text-white ml-1" />
                  </div>
                )}
              </div>

              {/* Duration bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-dark-600">
                <div className="h-full w-0 bg-gradient-to-r from-coral-500 to-rose-500 rounded-full" />
              </div>
            </div>

            {/* Video Info */}
            <div className="mt-6">
              <h1 className="font-display text-2xl lg:text-3xl font-bold">{video.title}</h1>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-text-muted">
                <Link href={`/model/${video.modelId}`} className="text-coral-400 hover:text-coral-300 font-medium transition-colors">
                  {video.model}
                </Link>
                <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {video.views} vistas</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {video.duration}</span>
                <Link href={`/category/${video.categorySlug}`} className="px-2 py-0.5 bg-dark-700 rounded text-xs hover:bg-dark-600 transition-colors">
                  {video.category}
                </Link>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 mt-6">
                <button type="button" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-dark-800 border border-white/10 text-sm font-medium hover:border-coral-500/30 hover:bg-coral-500/5 transition-all">
                  <Heart className="w-4 h-4 text-coral-400" /> Favorito
                </button>
                <button type="button" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-dark-800 border border-white/10 text-sm font-medium hover:border-white/20 transition-all">
                  <Share2 className="w-4 h-4" /> Compartir
                </button>
              </div>

              {/* Description */}
              <div className="mt-8 p-6 rounded-xl bg-dark-800/50 border border-white/5">
                <p className="text-text-secondary leading-relaxed">{video.description}</p>
              </div>
            </div>
          </div>

          {/* Sidebar — Related */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4 flex items-center gap-2">
              <Flame className="w-4 h-4 text-coral-400" />
              Videos Relacionados
            </h3>
            <div className="space-y-4">
              {related.map((v) => (
                <VideoCard key={v.id} video={v} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
