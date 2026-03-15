"use client";

import { Play, Clock, Eye, Lock } from "lucide-react";
import Link from "next/link";
import type { Video } from "@/lib/mock-data";

export default function VideoCard({ video }: { video: Video }) {
  return (
    <article className="group relative card-hover">
      <Link href={`/video/${video.id}`} className="block">
        <div className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden bg-dark-700 border border-white/5 group-hover:border-coral-500/30 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-600 via-dark-700 to-dark-800" />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/50 transition-colors duration-300 flex items-center justify-center">
            <div className="w-10 sm:w-14 h-10 sm:h-14 rounded-full bg-coral-500/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg shadow-coral-500/30">
              <Play className="w-4 sm:w-6 h-4 sm:h-6 text-white ml-0.5" />
            </div>
          </div>

          {/* Duration */}
          <div className="absolute bottom-1.5 sm:bottom-2 right-1.5 sm:right-2 flex items-center gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 bg-dark-900/80 backdrop-blur-sm rounded text-[10px] sm:text-xs text-text-primary">
            <Clock className="w-2.5 sm:w-3 h-2.5 sm:h-3" />
            {video.duration}
          </div>

          {/* Premium lock */}
          {video.isPremium && (
            <div className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 p-1 sm:p-1.5 bg-coral-500/20 backdrop-blur-sm rounded-md sm:rounded-lg border border-coral-500/30">
              <Lock className="w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 text-coral-400" />
            </div>
          )}

          {/* New badge */}
          {video.isNew && (
            <div className="absolute top-1.5 sm:top-2 left-1.5 sm:left-2 px-1.5 sm:px-2 py-0.5 bg-coral-500 rounded text-[8px] sm:text-[10px] font-bold text-white uppercase tracking-wider">
              Nuevo
            </div>
          )}
        </div>

        <div className="mt-2 sm:mt-3 px-0.5 sm:px-1">
          <h3 className="text-xs sm:text-sm font-semibold text-text-primary group-hover:text-coral-400 transition-colors line-clamp-1">
            {video.title}
          </h3>
          <div className="flex items-center justify-between mt-1 sm:mt-1.5">
            <span className="text-[10px] sm:text-xs text-text-muted">{video.model}</span>
            <div className="flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs text-text-muted">
              <Eye className="w-2.5 sm:w-3 h-2.5 sm:h-3" />
              {video.views}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
