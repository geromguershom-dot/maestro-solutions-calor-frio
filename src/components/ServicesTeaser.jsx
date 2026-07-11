import { Link } from "react-router-dom";
import { Snowflake, Box, Zap, Droplet, GraduationCap, Sparkles, ArrowRight } from "lucide-react";
import { services } from "../data/content";

const iconMap = {
  snowflake: Snowflake,
  box: Box,
  bolt: Zap,
  droplet: Droplet,
  graduation: GraduationCap,
  sparkle: Sparkles,
};

export default function ServicesTeaser() {
  const featured = services.slice(0, 3);
  return (
    <section className="bg-[var(--color-frost)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-ember)] mb-3">
              Nos services
            </p>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-[var(--color-slate)] tracking-tight">
              Des solutions complètes adaptées à vos besoins
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 hover:border-[var(--color-cyan)] text-sm font-semibold px-5 py-2.5 text-[var(--color-slate)] transition-colors"
          >
            Tous nos services <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <div
                key={s.title}
                className="group bg-white rounded-2xl p-7 border border-slate-200/70 hover:border-[var(--color-cyan)]/50 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-midnight)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-ember)] transition-colors">
                  <Icon size={22} className="text-[var(--color-cyan)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-lg text-[var(--color-slate)] mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-[var(--color-slate-soft)] leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
