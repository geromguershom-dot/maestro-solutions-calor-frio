import PageHeader from "../components/PageHeader";
import About from "../components/About";
import DualityShowcase from "../components/DualityShowcase";
import { values } from "../data/content";
import usePageMeta from "../hooks/usePageMeta";

function Values() {
  return (
    <section className="bg-[var(--color-frost)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-xl mb-12">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-ember)] mb-3">
            Nos valeurs
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-[var(--color-slate)] tracking-tight">
            Ce qui guide chaque intervention
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <div key={v.title} className="bg-white rounded-2xl p-6 border border-slate-200/70">
              <span className="font-mono text-xs text-[var(--color-cyan-dim)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display font-semibold text-[var(--color-slate)] mt-2 mb-2">
                {v.title}
              </h3>
              <p className="text-sm text-[var(--color-slate-soft)] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AProposPage() {
  usePageMeta("À propos", "Maestro Solutions : 15 ans d'expérience en climatisation et froid industriel, partenaire MINESEC depuis 2008.");
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title="Un technicien engagé, une équipe de confiance"
        subtitle="L'histoire, les valeurs et la vision derrière Maestro Solutions."
      />
      <About />
      <Values />
      <DualityShowcase />
    </>
  );
}
