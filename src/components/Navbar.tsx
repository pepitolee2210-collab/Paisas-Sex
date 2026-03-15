"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, Flame } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/videos", label: "Videos" },
  { href: "/models", label: "Modelos" },
  { href: "/categories", label: "Categorías" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-dark-900/85 backdrop-blur-xl border-b border-white/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="block group shrink-0">
            <Image
              src="/logo.png"
              alt="PaisaSex"
              width={160}
              height={40}
              className="h-8 lg:h-10 w-auto group-hover:brightness-110 transition-all"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-coral-400 transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {/* Search */}
            <AnimatePresence>
              {searchOpen && (
                <motion.form
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 220, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  onSubmit={handleSearch}
                  className="overflow-hidden"
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar..."
                    autoFocus
                    className="w-full px-4 py-2 bg-dark-800 border border-white/10 rounded-full text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-coral-500/50"
                  />
                </motion.form>
              )}
            </AnimatePresence>
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 text-text-secondary hover:text-coral-400 transition-colors"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link
              href="/auth/login"
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors px-4 py-2"
            >
              Entrar
            </Link>
            <Link
              href="/pricing"
              className="shimmer relative text-sm font-bold px-6 py-2.5 rounded-full bg-gradient-to-r from-coral-500 to-rose-500 text-white hover:shadow-lg hover:shadow-coral-500/30 transition-all flex items-center gap-2"
            >
              <Flame className="w-4 h-4" />
              Suscribirse
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-primary"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden relative bg-dark-800/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile search */}
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar videos o modelos..."
                    className="w-full pl-10 pr-4 py-3 bg-dark-700 border border-white/10 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-coral-500/50"
                  />
                </div>
              </form>

              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg text-text-secondary hover:text-coral-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-white/10" />
              <Link href="/auth/login" onClick={() => setIsOpen(false)} className="block text-lg text-text-secondary">
                Entrar
              </Link>
              <Link
                href="/pricing"
                onClick={() => setIsOpen(false)}
                className="shimmer relative block text-center text-lg font-bold px-6 py-3 rounded-full bg-gradient-to-r from-coral-500 to-rose-500 text-white"
              >
                Suscribirse — Desde $4.99/mes
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
