import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { stats, brand } from "../data/content";

export default function ServiceStatBand() {
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8 -mt-2 mb-20">
      <div className="bg-[var(--color-midnight)] rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
        <div className="flex items-center gap-3 lg:pr-6 lg:border-r lg:border-white/10">
          <span className="w-11 h-11 rounded-full border border-[var(--color-cyan)]/40 flex items-center justify-center shrink-0">
            <Phone size={18} className="text-[var(--color-cyan)]" />
          </span>
          <div>
            <div className="text-sm font-semibold text-white">Besoin d'un conseil ou d'un devis ?</div>
            <div className="text-xs text-white/55">Nos experts sont à votre écoute.</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3 flex-1 justify-center">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-mono text-lg font-semibold text-white">{s.value}</div>
              <div className="text-[11px] text-white/50 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ember)] hover:bg-[var(--color-ember-dim)] text-white font-semibold px-6 py-3 text-sm transition-colors shrink-0"
        >
          Demander un devis <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
