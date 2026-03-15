import { Metadata } from "next";

export const metadata: Metadata = { title: "Términos de Uso — PaisaSex" };

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert prose-sm">
        <h1 className="font-display text-3xl font-bold mb-8 !text-text-primary">Términos de Uso</h1>
        <p className="text-text-muted text-sm mb-4">Última actualización: Marzo 2026</p>

        <h2 className="!text-text-primary font-display">1. Aceptación de los Términos</h2>
        <p className="text-text-secondary">Al acceder y utilizar PaisaSex, aceptas cumplir con estos términos de uso. Si no estás de acuerdo con alguno de estos términos, no debes utilizar este sitio web.</p>

        <h2 className="!text-text-primary font-display">2. Requisito de Edad</h2>
        <p className="text-text-secondary">Debes tener al menos 18 años de edad (o la mayoría de edad legal en tu jurisdicción) para acceder a este sitio. Al utilizar este sitio, declaras y garantizas que cumples con este requisito.</p>

        <h2 className="!text-text-primary font-display">3. Cuenta de Usuario</h2>
        <p className="text-text-secondary">Eres responsable de mantener la confidencialidad de tu cuenta y contraseña. Notifícanos inmediatamente ante cualquier uso no autorizado de tu cuenta.</p>

        <h2 className="!text-text-primary font-display">4. Suscripción y Pagos</h2>
        <p className="text-text-secondary">Las suscripciones se renuevan automáticamente. Puedes cancelar en cualquier momento desde tu panel de cuenta. No se realizan reembolsos por períodos parciales, excepto dentro de los primeros 7 días.</p>

        <h2 className="!text-text-primary font-display">5. Contenido</h2>
        <p className="text-text-secondary">Todo el contenido en PaisaSex es propiedad exclusiva de PaisaSex. Queda prohibida la descarga, redistribución, reproducción o cualquier uso no autorizado del contenido.</p>

        <h2 className="!text-text-primary font-display">6. Conducta del Usuario</h2>
        <p className="text-text-secondary">No debes compartir tu cuenta, intentar eludir los controles de pago, ni utilizar herramientas automatizadas para acceder al contenido.</p>

        <h2 className="!text-text-primary font-display">7. Contacto</h2>
        <p className="text-text-secondary">Para consultas sobre estos términos, contáctanos en legal@paisasex.com.</p>
      </div>
    </div>
  );
}
