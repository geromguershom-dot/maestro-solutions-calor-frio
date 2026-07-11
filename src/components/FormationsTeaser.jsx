import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { formations } from "../data/content";

export default function FormationsTeaser() {
  const featured = formations.slice(0, 3);
  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="font-display font-semibold text-2xl text-[var(--color-slate)] tracking-tight">
          Nos formations
        </h2>
        <Link
          to="/formations"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-ember)] shrink-0"
        >
          Toutes nos formations <ArrowRight size={14} />
        </Link>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {featured.map((f) => (
          <div key={f.title} className="rounded-xl border border-slate-200 p-4">
            <h3 className="font-display font-semibold text-sm text-[var(--color-slate)] mb-2">
              {f.title}
            </h3>
            <p className="text-xs text-[var(--color-slate-soft)]">{f.level}</p>
            <p className="text-xs text-[var(--color-slate-soft)]">{f.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
