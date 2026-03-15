"use client";

import { useState } from "react";
import {
  Upload,
  Clock,
  Eye,
  Image as ImageIcon,
  Video,
  ChevronRight,
  Plus,
  Trash2,
} from "lucide-react";

const MOCK_CREATOR_STORIES = [
  { id: "s1", type: "image" as const, caption: "Buenos dias desde Medellin", views: 128, hoursLeft: 20, createdAt: "Hoy, 8:30 AM" },
  { id: "s2", type: "video" as const, caption: "Preparandome para la sesion", views: 94, hoursLeft: 17, createdAt: "Hoy, 11:00 AM" },
  { id: "s3", type: "image" as const, caption: "Outfit del dia", views: 67, hoursLeft: 12, createdAt: "Hoy, 2:15 PM" },
  { id: "s4", type: "image" as const, caption: "Tarde de gym", views: 45, hoursLeft: 8, createdAt: "Hoy, 6:00 PM" },
  { id: "s5", type: "video" as const, caption: "Reel detras de camaras", views: 203, hoursLeft: 4, createdAt: "Ayer, 10:30 PM" },
  { id: "s6", type: "image" as const, caption: "Selfie nocturna", views: 312, hoursLeft: 1, createdAt: "Ayer, 11:45 PM" },
] as const;

export default function CreatorStoriesPage() {
  const [stories] = useState(MOCK_CREATOR_STORIES);

  return (
    <div className="pt-20 sm:pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-text-muted mb-6">
          <span>Panel Creadora</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-text-primary">Stories</span>
        </div>

        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-2xl sm:text-3xl font-bold">
            Mis Stories
          </h1>
          <label className="shimmer relative cursor-pointer px-5 py-2.5 rounded-full bg-gradient-to-r from-coral-500 to-rose-500 text-white font-bold text-sm hover:shadow-lg hover:shadow-coral-500/25 transition-all flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Subir Story
            <input type="file" accept="image/*,video/*" className="hidden" />
          </label>
        </div>

        {/* Upload zone */}
        <div className="rounded-2xl bg-dark-800 border-2 border-dashed border-white/10 hover:border-coral-500/30 transition-colors p-8 sm:p-12 mb-8 text-center cursor-pointer">
          <Upload className="w-10 h-10 text-text-muted mx-auto mb-3" />
          <p className="text-text-primary font-medium mb-1">
            Arrastra una imagen o video aqui
          </p>
          <p className="text-xs text-text-muted">
            JPG, PNG, MP4 o MOV. Maximo 50MB. Las stories duran 24 horas.
          </p>
        </div>

        {/* Active stories grid */}
        <h2 className="font-display text-lg font-bold mb-4">
          Stories Activas ({stories.length})
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {stories.map((story) => (
            <div
              key={story.id}
              className="rounded-2xl bg-dark-800 border border-white/5 overflow-hidden group"
            >
              {/* Thumbnail placeholder */}
              <div className="aspect-[9/16] bg-dark-700 relative flex items-center justify-center">
                {story.type === "video" ? (
                  <Video className="w-8 h-8 text-text-muted" />
                ) : (
                  <ImageIcon className="w-8 h-8 text-text-muted" />
                )}
                {/* Time badge */}
                <div className={`absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium ${story.hoursLeft <= 4 ? "bg-rose-500/20 text-rose-400" : "bg-dark-800/80 text-text-secondary"}`}>
                  <Clock className="w-3 h-3" />
                  {story.hoursLeft}h restantes
                </div>
                {/* Delete button on hover */}
                <button
                  type="button"
                  className="absolute top-2 left-2 w-7 h-7 rounded-full bg-dark-900/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-rose-500/20"
                >
                  <Trash2 className="w-3.5 h-3.5 text-rose-400" />
                </button>
                {/* Type badge */}
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-dark-800/80 text-[10px] font-medium text-text-secondary uppercase">
                  {story.type === "video" ? "Video" : "Foto"}
                </span>
              </div>
              {/* Info */}
              <div className="p-3">
                <p className="text-sm text-text-primary truncate mb-1">
                  {story.caption}
                </p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-text-muted">
                    <Eye className="w-3 h-3" />
                    {story.views} vistas
                  </span>
                  <span className="text-[10px] text-text-muted">
                    {story.createdAt}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
