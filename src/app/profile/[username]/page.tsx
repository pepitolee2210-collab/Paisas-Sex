"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { MapPin, BadgeCheck, Users, Heart, Lock, Grid3x3, Film, Crown } from "lucide-react";
import Link from "next/link";
import PostCard from "@/components/PostCard";
import { MOCK_CREATORS, MOCK_POSTS } from "@/lib/mock-data";

type Tab = "posts" | "reels" | "premium";

export default function CreatorProfilePage() {
  const params = useParams();
  const creator = MOCK_CREATORS.find((c) => c.username === params.username);
  const [tab, setTab] = useState<Tab>("posts");

  if (!creator) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-display text-3xl font-bold">Creadora no encontrada</h1>
        <Link href="/explore" className="text-coral-400 mt-4 inline-block hover:underline">← Explorar creadoras</Link>
      </div>
    );
  }

  const creatorPosts = MOCK_POSTS.filter((p) => p.creatorId === creator.id);
  const freePosts = creatorPosts.filter((p) => !p.isPremium);
  const premiumPosts = creatorPosts.filter((p) => p.isPremium);
  const reels = creatorPosts.filter((p) => p.type === "reel");

  const displayPosts = tab === "posts" ? freePosts : tab === "reels" ? reels : premiumPosts;

  return (
    <div className="pt-14 sm:pt-20 pb-20">
      <div className="max-w-2xl mx-auto">
        {/* Banner */}
        <div className="h-32 sm:h-44 bg-gradient-to-br from-coral-500/20 via-dark-800 to-rose-500/15 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent" />
        </div>

        {/* Profile info */}
        <div className="px-4 -mt-12 relative z-10">
          <div className="flex items-end gap-4">
            <div className="w-24 h-24 rounded-full bg-dark-700 border-4 border-dark-900 flex items-center justify-center shrink-0">
              <span className="font-display text-3xl font-bold text-coral-400">{creator.name.charAt(0)}</span>
            </div>
            <div className="flex gap-2 mb-2 ml-auto">
              <button type="button" className="px-5 py-2 rounded-full bg-dark-800 border border-white/10 text-sm font-medium text-text-primary hover:border-coral-500/30 transition-colors">
                Seguir
              </button>
              <button type="button" className="shimmer relative px-5 py-2 rounded-full bg-gradient-to-r from-coral-500 to-rose-500 text-sm font-bold text-white">
                Suscribirse ${creator.subscriptionPrice}/mes
              </button>
            </div>
          </div>

          <div className="mt-3">
            <div className="flex items-center gap-1.5">
              <h1 className="font-display text-xl font-bold">{creator.name}</h1>
              {creator.isVerified && <BadgeCheck className="w-5 h-5 text-coral-400" />}
            </div>
            <p className="text-sm text-text-muted flex items-center gap-1 mt-0.5">
              <MapPin className="w-3.5 h-3.5" /> {creator.city}, Colombia · {creator.age} años
            </p>
            <p className="text-sm text-text-secondary mt-3 leading-relaxed">{creator.bio}</p>

            {/* Stats */}
            <div className="flex gap-6 mt-4 text-sm">
              <div><span className="font-bold text-text-primary">{(creator.followersCount / 1000).toFixed(1)}K</span> <span className="text-text-muted">seguidores</span></div>
              <div><span className="font-bold text-text-primary">{creator.subscribersCount}</span> <span className="text-text-muted">suscriptores</span></div>
              <div><span className="font-bold text-text-primary">{creator.postsCount}</span> <span className="text-text-muted">posts</span></div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/5 mt-6 px-4">
          {([
            { key: "posts" as Tab, label: "Posts", icon: Grid3x3 },
            { key: "reels" as Tab, label: "Reels", icon: Film },
            { key: "premium" as Tab, label: "Premium", icon: Crown },
          ]).map((t) => (
            <button key={t.key} type="button" onClick={() => setTab(t.key)} className={`flex items-center gap-1.5 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${tab === t.key ? "border-coral-500 text-coral-400" : "border-transparent text-text-muted hover:text-text-secondary"}`}>
              <t.icon className="w-4 h-4" />
              {t.label}
              {t.key === "premium" && <Lock className="w-3 h-3" />}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="px-4 mt-4 space-y-4">
          {displayPosts.length > 0 ? (
            displayPosts.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <div className="text-center py-16">
              <p className="text-text-muted">No hay contenido en esta sección</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
