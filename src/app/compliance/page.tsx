import { Metadata } from "next";

export const metadata: Metadata = { title: "2257 Compliance — PaisaSex" };

export default function CompliancePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert prose-sm">
        <h1 className="font-display text-3xl font-bold mb-8 !text-text-primary">18 U.S.C. § 2257 Compliance</h1>

        <p className="text-text-secondary">Todos los modelos, actores y otras personas que aparecen en cualquier representación visual de conducta sexual real en este sitio web tenían dieciocho (18) años de edad o más al momento de la creación de dichas representaciones.</p>

        <h2 className="!text-text-primary font-display">Custodio de Registros</h2>
        <p className="text-text-secondary">Los registros requeridos por la ley federal de los Estados Unidos para este sitio web y todo el contenido asociado son mantenidos por el custodio de registros designado.</p>

        <h2 className="!text-text-primary font-display">Verificación de Edad</h2>
        <p className="text-text-secondary">Todos los modelos presentan identificación válida con fotografía antes de cualquier producción. Se mantienen copias verificadas de dichos documentos.</p>

        <p className="text-text-secondary">Para consultas de cumplimiento: compliance@paisasex.com</p>
      </div>
    </div>
  );
}
