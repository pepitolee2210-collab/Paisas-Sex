"use client";

import { useState } from "react";
import {
  PlusCircle,
  Heart,
  MessageCircle,
  Crown,
  Film,
  Image as ImageIcon,
  Images,
  ToggleLeft,
  ToggleRight,
  ChevronRight,
  Eye,
} from "lucide-react";
import { MOCK_POSTS } from "@/lib/mock-data";

const TYPE_CONFIG = {
  reel: { label: "Reel", icon: Film, color: "text-purple-400", bg: "bg-purple-500/15" },
  photo: { label: "Foto", icon: ImageIcon, color: "text-blue-400", bg: "bg-blue-500/15" },
  gallery: { label: "Galeria", icon: Images, color: "text-emerald-400", bg: "bg-emerald-500/15" },
} as const;

export default function CreatorPostsPage() {
  const [posts, setPosts] = useState(
    MOCK_POSTS.map((p) => ({ ...p, isPremium: p.isPremium as boolean }))
  );

  const togglePremium = (postId: string) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, isPremium: !p.isPremium } : p))
    );
  };

  return (
    <div className="pt-20 sm:pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-text-muted mb-6">
          <span>Panel Creadora</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-text-primary">Posts</span>
        </div>

        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-2xl sm:text-3xl font-bold">
            Mis Posts
          </h1>
          <button
            type="button"
            className="shimmer relative px-5 py-2.5 rounded-full bg-gradient-to-r from-coral-500 to-rose-500 text-white font-bold text-sm hover:shadow-lg hover:shadow-coral-500/25 transition-all flex items-center gap-2"
          >
            <PlusCircle className="w-4 h-4" />
            Nuevo Post
          </button>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { label: "Total posts", value: posts.length },
            { label: "Premium", value: posts.filter((p) => p.isPremium).length },
            { label: "Gratis", value: posts.filter((p) => !p.isPremium).length },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-dark-800 border border-white/5 p-4 text-center"
            >
              <p className="font-display text-xl font-bold text-coral-400">
                {s.value}
              </p>
              <p className="text-xs text-text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Posts list */}
        <div className="space-y-3">
          {posts.map((post) => {
            const typeConf = TYPE_CONFIG[post.type];
            return (
              <div
                key={post.id}
                className="rounded-2xl bg-dark-800 border border-white/5 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4"
              >
                {/* Thumbnail placeholder */}
                <div className="w-full sm:w-20 h-32 sm:h-20 rounded-xl bg-dark-700 flex items-center justify-center shrink-0">
                  <typeConf.icon className={`w-6 h-6 ${typeConf.color}`} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    {/* Type badge */}
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium ${typeConf.bg} ${typeConf.color}`}>
                      <typeConf.icon className="w-3 h-3" />
                      {typeConf.label}
                    </span>
                    {/* Premium badge */}
                    {post.isPremium && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-amber-500/15 text-amber-400">
                        <Crown className="w-3 h-3" />
                        Premium
                      </span>
                    )}
                    <span className="text-[11px] text-text-muted">{post.timeAgo}</span>
                  </div>
                  <p className="text-sm text-text-primary line-clamp-2">
                    {post.caption}
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1 text-xs text-text-muted">
                      <Heart className="w-3.5 h-3.5" />
                      {post.likesCount}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-text-muted">
                      <MessageCircle className="w-3.5 h-3.5" />
                      {post.commentsCount}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-text-muted">
                      <Eye className="w-3.5 h-3.5" />
                      {Math.floor(post.likesCount * 2.3)}
                    </span>
                  </div>
                </div>

                {/* Toggle premium */}
                <button
                  type="button"
                  onClick={() => togglePremium(post.id)}
                  className="flex items-center gap-2 shrink-0 self-start sm:self-center"
                  title={post.isPremium ? "Cambiar a gratis" : "Cambiar a premium"}
                >
                  {post.isPremium ? (
                    <ToggleRight className="w-8 h-8 text-coral-400" />
                  ) : (
                    <ToggleLeft className="w-8 h-8 text-text-muted" />
                  )}
                  <span className="text-xs text-text-muted hidden sm:inline">
                    {post.isPremium ? "Premium" : "Gratis"}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
