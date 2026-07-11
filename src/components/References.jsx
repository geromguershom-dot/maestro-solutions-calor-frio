import { references } from "../data/content";

export default function References() {
  return (
    <section className="bg-white border-b border-slate-100 py-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-center font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-slate-soft)] mb-6">
          Ils nous ont fait confiance
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {references.map((r) => (
            <div key={r.name} className="text-center">
              <div className="font-display font-semibold text-sm text-[var(--color-slate)]">
                {r.name}
              </div>
              <div className="text-[11px] text-[var(--color-slate-soft)]">{r.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
