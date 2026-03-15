"use client";

import { Heart, MessageCircle, Share2, Lock, Play, Image as ImageIcon, Images } from "lucide-react";
import Link from "next/link";
import { type Post } from "@/lib/mock-data";

type PostWithOptionalPrice = Post & { individualPrice?: number };

const TYPE_ICON = { reel: Play, photo: ImageIcon, gallery: Images } as const;

export default function PostCard({ post }: { post: PostWithOptionalPrice }) {
  const TypeIcon = TYPE_ICON[post.type];

  return (
    <article className="bg-dark-800 border border-white/5 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 p-4">
        <Link href={`/profile/${post.creatorUsername}`} className="shrink-0">
          <div className="w-10 h-10 rounded-full bg-dark-700 border border-coral-500/30 flex items-center justify-center">
            <span className="font-display text-sm font-bold text-coral-400">{post.creatorName.charAt(0)}</span>
          </div>
        </Link>
        <div className="flex-1 min-w-0">
          <Link href={`/profile/${post.creatorUsername}`} className="text-sm font-semibold text-text-primary hover:text-coral-400 transition-colors">
            {post.creatorName}
          </Link>
          <p className="text-[11px] text-text-muted">{post.timeAgo}</p>
        </div>
        {post.isPremium && (
          <span className="flex items-center gap-1 px-2 py-0.5 bg-coral-500/15 border border-coral-500/25 rounded-full text-[10px] font-bold text-coral-400 uppercase">
            <Lock className="w-2.5 h-2.5" />
            {"individualPrice" in post && post.individualPrice ? `$${post.individualPrice}` : "Premium"}
          </span>
        )}
      </div>

      {/* Media placeholder */}
      <div className="relative aspect-square bg-dark-700">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-600 via-dark-700 to-dark-800" />

        {/* Type indicator */}
        <div className="absolute top-3 right-3 p-1.5 bg-dark-900/60 backdrop-blur-sm rounded-lg">
          <TypeIcon className="w-4 h-4 text-white" />
        </div>

        {post.isPremium && (
          <div className="absolute inset-0 bg-dark-900/60 backdrop-blur-sm flex flex-col items-center justify-center gap-3">
            <Lock className="w-8 h-8 text-coral-400" />
            <p className="text-sm font-semibold text-text-primary">Contenido Premium</p>
            <Link href={`/profile/${post.creatorUsername}`} className="shimmer relative px-5 py-2 rounded-full bg-gradient-to-r from-coral-500 to-rose-500 text-white text-sm font-bold">
              {post.individualPrice ? `Desbloquear — $${post.individualPrice}` : "Suscribirse"}
            </Link>
          </div>
        )}

        {!post.isPremium && post.type === "reel" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-coral-500/80 flex items-center justify-center shadow-lg shadow-coral-500/20">
              <Play className="w-6 h-6 text-white ml-0.5" />
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="p-4">
        <div className="flex items-center gap-4 mb-3">
          <button type="button" className="flex items-center gap-1.5 text-text-secondary hover:text-coral-400 transition-colors">
            <Heart className="w-5 h-5" />
            <span className="text-xs font-medium">{post.likesCount}</span>
          </button>
          <button type="button" className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span className="text-xs font-medium">{post.commentsCount}</span>
          </button>
          <button type="button" className="ml-auto text-text-secondary hover:text-text-primary transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm text-text-primary leading-relaxed">
          <Link href={`/profile/${post.creatorUsername}`} className="font-semibold hover:text-coral-400 transition-colors">
            {post.creatorName}
          </Link>{" "}
          {post.caption}
        </p>

        {post.commentsCount > 0 && (
          <button type="button" className="text-xs text-text-muted mt-2 hover:text-text-secondary transition-colors">
            Ver los {post.commentsCount} comentarios
          </button>
        )}
      </div>
    </article>
  );
}
