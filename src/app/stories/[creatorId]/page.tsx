"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Heart, Send } from "lucide-react";
import { MOCK_STORIES, MOCK_CREATORS } from "@/lib/mock-data";

export default function StoryViewerPage() {
  const params = useParams();
  const router = useRouter();
  const creatorStories = MOCK_STORIES.filter((s) => s.creatorId === params.creatorId);
  const creator = MOCK_CREATORS.find((c) => c.id === params.creatorId);
  const [current, setCurrent] = useState(0);

  if (!creator || creatorStories.length === 0) {
    router.push("/feed");
    return null;
  }

  const story = creatorStories[current];
  const progress = ((current + 1) / creatorStories.length) * 100;

  const goNext = () => {
    if (current < creatorStories.length - 1) setCurrent(current + 1);
    else router.push("/feed");
  };

  const goPrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  return (
    <div className="fixed inset-0 z-[60] bg-dark-950 flex items-center justify-center">
      <div className="relative w-full max-w-md h-full sm:h-[90vh] sm:rounded-2xl overflow-hidden bg-dark-900">
        {/* Story media placeholder */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-700 via-dark-800 to-dark-900" />

        {/* Progress bars */}
        <div className="absolute top-0 left-0 right-0 z-20 flex gap-1 px-2 pt-2">
          {creatorStories.map((_, i) => (
            <div key={i} className="flex-1 h-[2px] bg-white/20 rounded-full overflow-hidden">
              <div className={`h-full rounded-full transition-all duration-300 ${i < current ? "bg-white w-full" : i === current ? "bg-white" : "w-0"}`} style={i === current ? { width: `${progress}%` } : undefined} />
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="absolute top-4 left-0 right-0 z-20 flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-dark-700 border border-white/20 flex items-center justify-center">
              <span className="font-display text-xs font-bold text-coral-400">{creator.name.charAt(0)}</span>
            </div>
            <div>
              <p className="text-white text-sm font-semibold">{creator.name}</p>
              <p className="text-white/60 text-[10px]">{story.timeAgo}</p>
            </div>
          </div>
          <button type="button" onClick={() => router.push("/feed")} className="p-1.5 text-white/80 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation areas */}
        <button type="button" onClick={goPrev} className="absolute left-0 top-0 bottom-0 w-1/3 z-10" aria-label="Previous" />
        <button type="button" onClick={goNext} className="absolute right-0 top-0 bottom-0 w-2/3 z-10" aria-label="Next" />

        {/* Nav arrows (desktop) */}
        <button type="button" onClick={goPrev} className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm items-center justify-center text-white hover:bg-white/20 transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button type="button" onClick={goNext} className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm items-center justify-center text-white hover:bg-white/20 transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-dark-900/90 to-transparent">
          <p className="text-white text-sm mb-3">{story.caption}</p>
          <div className="flex items-center gap-2">
            <input type="text" placeholder="Enviar mensaje..." className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white placeholder:text-white/50 focus:outline-none" />
            <button type="button" className="p-2 text-white/80 hover:text-coral-400 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button type="button" className="p-2 text-white/80 hover:text-coral-400 transition-colors">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
