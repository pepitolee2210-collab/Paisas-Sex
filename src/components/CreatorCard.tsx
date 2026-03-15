"use client";

import { MapPin, Users, BadgeCheck } from "lucide-react";
import Link from "next/link";
import type { Creator } from "@/lib/mock-data";

export default function CreatorCard({ creator }: { creator: Creator }) {
  return (
    <Link href={`/profile/${creator.username}`} className="group block">
      <div className="relative rounded-2xl overflow-hidden bg-dark-800 border border-white/5 group-hover:border-coral-500/25 transition-all card-hover">
        {/* Banner placeholder */}
        <div className="h-24 sm:h-28 bg-gradient-to-br from-coral-500/20 via-dark-700 to-rose-500/15" />

        {/* Avatar */}
        <div className="px-4 -mt-8 relative z-10">
          <div className="w-16 h-16 rounded-full bg-dark-700 border-[3px] border-dark-800 flex items-center justify-center">
            <span className="font-display text-xl font-bold text-coral-400">
              {creator.name.charAt(0)}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-4 pt-2">
          <div className="flex items-center gap-1.5">
            <h3 className="font-semibold text-text-primary group-hover:text-coral-400 transition-colors text-sm truncate">
              {creator.name}
            </h3>
            {creator.isVerified && <BadgeCheck className="w-3.5 h-3.5 text-coral-400 shrink-0" />}
          </div>
          <p className="text-[11px] text-text-muted flex items-center gap-1 mt-0.5">
            <MapPin className="w-3 h-3" /> {creator.city}
          </p>
          <p className="text-xs text-text-secondary mt-2 line-clamp-2 leading-relaxed">{creator.bio}</p>

          <div className="flex items-center gap-3 mt-3 text-[11px] text-text-muted">
            <span className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              {(creator.followersCount / 1000).toFixed(1)}K
            </span>
            <span>{creator.postsCount} posts</span>
          </div>

          <div className="mt-3 flex gap-2">
            <span className="flex-1 text-center py-1.5 rounded-full bg-dark-700 border border-white/5 text-xs font-medium text-text-secondary">
              Seguir
            </span>
            <span className="flex-1 text-center py-1.5 rounded-full bg-coral-500 text-xs font-bold text-white">
              ${creator.subscriptionPrice}/mes
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
