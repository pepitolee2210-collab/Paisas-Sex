import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AgeGate from "@/components/AgeGate";
import MobileBottomCTA from "@/components/MobileBottomCTA";

export const metadata: Metadata = {
  title: "PaisaSex — Las Paisas Más Sensuales de Colombia",
  description:
    "Contenido exclusivo premium con las modelos más hermosas de Medellín. Videos HD, suscripción desde $4.99/mes.",
  keywords: ["colombian models", "paisa", "premium content", "medellin"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0A0A0A" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <AgeGate>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <MobileBottomCTA />
        </AgeGate>
      </body>
    </html>
  );
}
