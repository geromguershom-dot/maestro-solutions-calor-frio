import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { whyUs } from "../data/content";

export default function WhyUs() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src="/images/installation-plafond-echafaudage.jpg"
            alt="Techniciens Maestro Solutions lors d'une installation de climatisation"
            className="w-full h-[380px] md:h-[460px] object-cover"
          />
        </div>

        <div>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-ember)] mb-3">
            {whyUs.eyebrow}
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-[var(--color-slate)] tracking-tight leading-tight mb-6">
            {whyUs.title}
          </h2>

          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
            {whyUs.points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[var(--color-cyan)]/15 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-[var(--color-cyan-dim)]" strokeWidth={3} />
                </span>
                <span className="text-sm text-[var(--color-slate-soft)] leading-snug">{p}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/a-propos"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[var(--color-midnight)] hover:bg-[var(--color-midnight-2)] text-white font-semibold px-6 py-3 text-sm transition-colors"
          >
            En savoir plus sur nous
          </Link>
        </div>
      </div>
    </section>
  );
}
