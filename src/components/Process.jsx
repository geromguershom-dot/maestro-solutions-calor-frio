import { process } from "../data/content";

export default function Process() {
  return (
    <section className="bg-[var(--color-frost)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-ember)] mb-3">
            Notre méthode
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-[var(--color-slate)] tracking-tight">
            Un processus clair, du premier contact à la maintenance
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
          {process.map((p, i) => (
            <div key={p.step} className="relative">
              {i < process.length - 1 && (
                <div className="hidden lg:block absolute top-5 left-[60%] w-full h-px bg-slate-200" />
              )}
              <span className="font-mono text-sm text-[var(--color-cyan-dim)] font-semibold">
                {p.step}
              </span>
              <h3 className="font-display font-semibold text-[var(--color-slate)] mt-2 mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-[var(--color-slate-soft)] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
