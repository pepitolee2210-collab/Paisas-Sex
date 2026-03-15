"use client";

import StoryBar from "@/components/StoryBar";
import PostCard from "@/components/PostCard";
import CreatorCard from "@/components/CreatorCard";
import { MOCK_POSTS, MOCK_CREATORS } from "@/lib/mock-data";
import { Flame } from "lucide-react";
import Link from "next/link";

export default function FeedPage() {
  const suggestedCreators = MOCK_CREATORS.filter((c) => c.isTop).slice(0, 3);

  return (
    <div className="pt-16 sm:pt-20 pb-20">
      <div className="max-w-2xl mx-auto px-4">
        {/* Stories bar */}
        <div className="py-4 border-b border-white/5">
          <StoryBar />
        </div>

        {/* Feed */}
        <div className="mt-4 space-y-4">
          {MOCK_POSTS.slice(0, 3).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}

          {/* Suggested creators inline */}
          <div className="bg-dark-800 border border-white/5 rounded-2xl p-4">
            <h3 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-coral-400" />
              Creadoras Sugeridas
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {suggestedCreators.map((c) => (
                <Link key={c.id} href={`/profile/${c.username}`} className="text-center group">
                  <div className="w-14 h-14 mx-auto rounded-full bg-dark-700 border border-coral-500/20 flex items-center justify-center group-hover:border-coral-500/50 transition-colors">
                    <span className="font-display text-lg font-bold text-coral-400">{c.name.charAt(0)}</span>
                  </div>
                  <p className="text-[11px] font-medium text-text-primary mt-1.5 truncate">{c.name.split(" ")[0]}</p>
                  <p className="text-[10px] text-coral-400">${c.subscriptionPrice}/mes</p>
                </Link>
              ))}
            </div>
          </div>

          {MOCK_POSTS.slice(3).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
