import { Metadata } from "next";

export const metadata: Metadata = { title: "DMCA — PaisaSex" };

export default function DMCAPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert prose-sm">
        <h1 className="font-display text-3xl font-bold mb-8 !text-text-primary">Política DMCA</h1>

        <p className="text-text-secondary">PaisaSex respeta los derechos de propiedad intelectual de terceros y espera que los usuarios hagan lo mismo.</p>

        <h2 className="!text-text-primary font-display">Notificación de Infracción</h2>
        <p className="text-text-secondary">Si crees que tu trabajo protegido por derechos de autor ha sido copiado de una manera que constituye infracción, envía una notificación a nuestro agente DMCA con la siguiente información:</p>

        <ul className="text-text-secondary">
          <li>Identificación del trabajo protegido por derechos de autor</li>
          <li>Identificación del material infractor y su ubicación en el sitio</li>
          <li>Tu información de contacto</li>
          <li>Una declaración de buena fe</li>
          <li>Tu firma física o electrónica</li>
        </ul>

        <h2 className="!text-text-primary font-display">Contacto DMCA</h2>
        <p className="text-text-secondary">Envía notificaciones DMCA a: dmca@paisasex.com</p>

        <p className="text-text-secondary">Las notificaciones falsas pueden resultar en responsabilidad legal. Consulta con un abogado antes de presentar una notificación.</p>
      </div>
    </div>
  );
}
