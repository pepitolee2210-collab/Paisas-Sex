import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = {
  Contenido: [
    { label: "Videos", href: "/videos" },
    { label: "Modelos", href: "/models" },
    { label: "Categorías", href: "/categories" },
    { label: "Nuevos", href: "/videos?sort=newest" },
  ],
  Cuenta: [
    { label: "Iniciar Sesión", href: "/auth/login" },
    { label: "Registrarse", href: "/auth/register" },
    { label: "Planes", href: "/pricing" },
    { label: "Mi Cuenta", href: "/account" },
  ],
  Legal: [
    { label: "Términos de Uso", href: "/terms" },
    { label: "Privacidad", href: "/privacy" },
    { label: "2257 Compliance", href: "/compliance" },
    { label: "DMCA", href: "/dmca" },
  ],
} as const;

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-dark-950">
      <div className="noise-overlay absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="block mb-4">
              <Image
                src="/logo.png"
                alt="PaisaSex"
                width={140}
                height={35}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Contenido exclusivo premium con las modelos más hermosas de
              Colombia. +18 solamente.
            </p>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-text-muted hover:text-gold-400 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} PaisaSex. Todos los derechos
            reservados. Contenido para mayores de 18 años.
          </p>
          <div className="flex items-center gap-4 text-text-muted text-xs">
            <span className="flex items-center gap-1">
              🔒 SSL Seguro
            </span>
            <span>|</span>
            <span>RTA Labeled</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
