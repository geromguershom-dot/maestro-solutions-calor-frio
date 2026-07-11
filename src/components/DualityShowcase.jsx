export default function DualityShowcase() {
  return (
    <section className="bg-[var(--color-midnight)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl mb-12">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-ember)] mb-3">
            Calor &amp; Frío
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-white tracking-tight">
            Deux mondes, une même exigence
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <figure className="relative rounded-3xl overflow-hidden group">
            <img
              src="/images/technicien-portrait.jpg"
              alt="Salomon Fotso, technicien Maestro Solutions — le savoir-faire Calor"
              className="w-full h-72 md:h-[420px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <figcaption className="absolute bottom-5 left-6 text-white font-display font-medium">
              Calor — le savoir-faire sur le terrain
            </figcaption>
          </figure>

          <figure className="relative rounded-3xl overflow-hidden group">
            <img
              src="/images/installation-unite-exterieure-nagu.jpg"
              alt="Unité de climatisation installée — le savoir-faire Frío"
              className="w-full h-72 md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <figcaption className="absolute bottom-5 left-6 text-white font-display font-medium">
              Frío — la précision des installations
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
