import { Link } from "react-router-dom";
import { Clock, ShieldCheck, MessageSquare } from "lucide-react";

const points = [
  { icon: Clock, text: "Réponse rapide" },
  { icon: ShieldCheck, text: "Devis gratuit" },
  { icon: MessageSquare, text: "Conseils personnalisés" },
];

export default function ClosingCTA() {
  return (
    <section className="relative bg-[var(--color-midnight)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-8 items-end">
        <div className="relative lg:hidden -mx-5 md:-mx-8 mb-2">
          <img
            src="/images/maintenance-climatiseur-tour-1.jpg"
            alt="Technicien Maestro Solutions prêt à intervenir"
            className="w-full h-56 object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-midnight)] via-transparent to-transparent" />
        </div>

        <div className="py-8 lg:py-20">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-cyan)] mb-4">
            Besoin d'un expert ?
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-white tracking-tight mb-4">
            Vous avez un projet ?
          </h2>
          <p className="text-white/65 leading-relaxed max-w-md mb-8">
            Nos techniciens sont à votre écoute pour vous accompagner et vous proposer la
            meilleure solution.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ember)] hover:bg-[var(--color-ember-dim)] text-white font-semibold px-6 py-3.5 transition-colors mb-8"
          >
            Demander un devis
          </Link>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {points.map((p) => (
              <div key={p.text} className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full border border-[var(--color-cyan)]/40 flex items-center justify-center shrink-0">
                  <p.icon size={14} className="text-[var(--color-cyan)]" />
                </span>
                <span className="text-sm text-white/75">{p.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block relative h-full order-1 lg:order-2">
          <img
            src="/images/maintenance-climatiseur-tour-1.jpg"
            alt="Technicien Maestro Solutions prêt à intervenir"
            className="w-full h-[420px] object-cover object-top rounded-t-3xl"
          />
        </div>
      </div>
    </section>
  );
}
