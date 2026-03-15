"use client";

import { History, ChevronRight } from "lucide-react";
import Link from "next/link";
import { MOCK_VIDEOS } from "@/lib/mock-data";
import VideoCard from "@/components/VideoCard";

export default function HistoryPage() {
  const history = MOCK_VIDEOS.slice(2, 6);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-text-muted mb-8">
          <Link href="/account" className="hover:text-coral-400 transition-colors">Mi Cuenta</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-text-secondary">Historial</span>
        </div>

        <div className="flex items-center gap-3 mb-8">
          <History className="w-6 h-6 text-coral-400" />
          <h1 className="font-display text-3xl font-bold">Historial</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {history.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
}
