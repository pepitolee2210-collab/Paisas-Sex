import { Metadata } from "next";

export const metadata: Metadata = { title: "Política de Privacidad — PaisaSex" };

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert prose-sm">
        <h1 className="font-display text-3xl font-bold mb-8 !text-text-primary">Política de Privacidad</h1>
        <p className="text-text-muted text-sm mb-4">Última actualización: Marzo 2026</p>

        <h2 className="!text-text-primary font-display">1. Información que Recopilamos</h2>
        <p className="text-text-secondary">Recopilamos información que proporcionas directamente: email, nombre de usuario. También recopilamos datos de uso anónimos para mejorar el servicio.</p>

        <h2 className="!text-text-primary font-display">2. Uso de la Información</h2>
        <p className="text-text-secondary">Utilizamos tu información para proveer el servicio, procesar pagos, enviar comunicaciones relevantes y mejorar la experiencia de usuario.</p>

        <h2 className="!text-text-primary font-display">3. Protección de Datos</h2>
        <p className="text-text-secondary">Implementamos medidas de seguridad estándar de la industria, incluyendo encriptación SSL, para proteger tu información personal. Los pagos son procesados por Stripe y nunca almacenamos datos de tarjetas.</p>

        <h2 className="!text-text-primary font-display">4. Discreción en Pagos</h2>
        <p className="text-text-secondary">Los cargos en tu extracto bancario aparecerán con un nombre discreto. Respetamos completamente tu privacidad.</p>

        <h2 className="!text-text-primary font-display">5. Cookies</h2>
        <p className="text-text-secondary">Utilizamos cookies esenciales para el funcionamiento del sitio y cookies analíticas para entender el uso del servicio.</p>

        <h2 className="!text-text-primary font-display">6. Tus Derechos</h2>
        <p className="text-text-secondary">Puedes solicitar la eliminación de tu cuenta y datos personales en cualquier momento contactando a privacy@paisasex.com.</p>
      </div>
    </div>
  );
}
