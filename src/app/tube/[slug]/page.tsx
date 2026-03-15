"use client";

import { useParams } from "next/navigation";
import { Play, Heart, Share2, Lock, Clock, Eye, ChevronRight, Flame } from "lucide-react";
import Link from "next/link";
import { MOCK_TUBE_VIDEOS } from "@/lib/mock-data";
import TubeVideoCard from "@/components/TubeVideoCard";

export default function TubeVideoPage() {
  const params = useParams();
  const video = MOCK_TUBE_VIDEOS.find((v) => v.slug === params.slug);

  if (!video) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-display text-3xl font-bold">Video no encontrado</h1>
        <Link href="/tube" className="text-coral-400 mt-4 inline-block hover:underline">← Volver al tube</Link>
      </div>
    );
  }

  const related = MOCK_TUBE_VIDEOS.filter((v) => v.id !== video.id).slice(0, 4);

  return (
    <div className="pt-16 sm:pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-text-muted mb-6 pt-4">
          <Link href="/" className="hover:text-coral-400">Inicio</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/tube" className="hover:text-coral-400">Tube</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-text-secondary truncate">{video.title}</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-dark-800 border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-dark-700 to-dark-900 flex items-center justify-center">
                {video.isPremium ? (
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-coral-500/20 border border-coral-500/30 flex items-center justify-center mb-4">
                      <Lock className="w-8 h-8 text-coral-400" />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2">Contenido Premium</h3>
                    <p className="text-text-secondary text-sm mb-6">Suscríbete para ver el video completo</p>
                    <Link href="/pricing" className="shimmer relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-coral-500 to-rose-500 text-white font-bold">
                      <Flame className="w-4 h-4" /> Desbloquear — $4.99/mes
                    </Link>
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-full bg-coral-500/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform glow-gold">
                    <Play className="w-9 h-9 text-white ml-1" />
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6">
              <h1 className="font-display text-2xl lg:text-3xl font-bold">{video.title}</h1>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-text-muted">
                <Link href={`/profile/${video.creatorId}`} className="text-coral-400 hover:text-coral-300 font-medium">{video.creatorName}</Link>
                <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {video.views}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {video.duration}</span>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <button type="button" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-dark-800 border border-white/10 text-sm font-medium hover:border-coral-500/30 transition-all">
                  <Heart className="w-4 h-4 text-coral-400" /> Favorito
                </button>
                <button type="button" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-dark-800 border border-white/10 text-sm font-medium hover:border-white/20 transition-all">
                  <Share2 className="w-4 h-4" /> Compartir
                </button>
              </div>
              <div className="mt-8 p-6 rounded-xl bg-dark-800/50 border border-white/5">
                <p className="text-text-secondary leading-relaxed">{video.description}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold mb-4 flex items-center gap-2">
              <Flame className="w-4 h-4 text-coral-400" /> Relacionados
            </h3>
            <div className="space-y-4">
              {related.map((v) => <TubeVideoCard key={v.id} video={v} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
