"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { MOCK_CREATORS } from "@/lib/mock-data";

export default function StoryBar() {
  const creatorsWithStories = MOCK_CREATORS.filter((c) => c.storiesActive > 0);

  return (
    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
      {/* Add story (for creators) */}
      <div className="flex flex-col items-center gap-1.5 shrink-0">
        <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full bg-dark-700 border-2 border-dashed border-white/20 flex items-center justify-center">
          <Plus className="w-5 h-5 text-text-muted" />
        </div>
        <span className="text-[10px] text-text-muted">Tu historia</span>
      </div>

      {creatorsWithStories.map((creator) => (
        <Link
          key={creator.id}
          href={`/stories/${creator.id}`}
          className="flex flex-col items-center gap-1.5 shrink-0 group"
        >
          <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full p-[2.5px] bg-gradient-to-br from-coral-500 via-rose-500 to-coral-400">
            <div className="w-full h-full rounded-full bg-dark-900 p-[2px]">
              <div className="w-full h-full rounded-full bg-dark-700 flex items-center justify-center overflow-hidden">
                <span className="font-display text-lg font-bold text-coral-400">
                  {creator.name.charAt(0)}
                </span>
              </div>
            </div>
          </div>
          <span className="text-[10px] text-text-secondary group-hover:text-coral-400 transition-colors truncate max-w-[64px] sm:max-w-[72px] text-center">
            {creator.name.split(" ")[0]}
          </span>
        </Link>
      ))}
    </div>
  );
}
