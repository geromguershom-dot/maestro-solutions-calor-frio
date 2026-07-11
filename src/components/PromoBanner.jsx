import { brand } from "../data/content";

export default function PromoBanner() {
  return (
    <section className="py-16 px-5 md:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-r from-[var(--color-ember)] to-[var(--color-ember-dim)] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-white/80 mb-2">
            Offre en cours
          </p>
          <h3 className="font-display font-semibold text-2xl md:text-3xl text-white">
            Un devis gratuit pour toute nouvelle installation
          </h3>
          <p className="text-white/85 mt-2 text-sm max-w-md">
            Contactez-nous dès aujourd'hui pour une évaluation sans engagement de votre projet.
          </p>
        </div>
        <a
          href={`https://wa.me/237${brand.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white text-[var(--color-ember)] font-semibold px-7 py-3.5 hover:bg-white/90 transition-colors"
        >
          Profiter maintenant
        </a>
      </div>
    </section>
  );
}
