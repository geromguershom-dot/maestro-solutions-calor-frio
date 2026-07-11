import { Link } from "react-router-dom";
import { GraduationCap, ArrowRight } from "lucide-react";
import { formations } from "../data/content";

export default function Formations() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {formations.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-200 p-6 hover:border-[var(--color-cyan)]/50 hover:shadow-lg transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-[var(--color-frost)] flex items-center justify-center mb-5">
                <GraduationCap size={20} className="text-[var(--color-ember)]" />
              </div>
              <h3 className="font-display font-semibold text-[var(--color-slate)] mb-3">{f.title}</h3>
              <p className="text-xs text-[var(--color-slate-soft)] mb-1">{f.level}</p>
              <p className="text-xs text-[var(--color-slate-soft)] mb-5">{f.duration}</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-ember)]"
              >
                Voir le programme <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
