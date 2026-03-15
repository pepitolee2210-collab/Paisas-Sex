import { Metadata } from "next";
import VideosPageClient from "./VideosPageClient";

export const metadata: Metadata = {
  title: "Videos — PaisaSex",
  description: "Explora nuestro catálogo completo de videos exclusivos con modelos paisas.",
};

export default function VideosPage() {
  return <VideosPageClient />;
}
