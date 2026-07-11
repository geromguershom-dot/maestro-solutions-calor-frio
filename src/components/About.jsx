import { about, brand, motto } from "../data/content";

export default function About() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-[var(--color-slate)] tracking-tight leading-tight mb-4">
            {about.title}
          </h2>
          <p className="font-display text-lg text-[var(--color-ember)] italic mb-6">« {motto} »</p>
          <p className="text-[var(--color-slate-soft)] leading-relaxed">{about.body}</p>

          <div className="mt-8 flex items-center gap-4 text-sm text-[var(--color-slate-soft)] font-mono">
            <span>{brand.city}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/maintenance-climatiseur-tour-1.jpg"
            alt="Technicien Maestro Solutions en intervention"
            className="rounded-2xl w-full h-56 object-cover"
          />
          <img
            src="/images/equipe-maestro-solutions.jpg"
            alt="L'équipe Maestro Solutions lors d'une installation"
            className="rounded-2xl w-full h-56 object-cover mt-8"
          />
        </div>
      </div>
    </section>
  );
}
