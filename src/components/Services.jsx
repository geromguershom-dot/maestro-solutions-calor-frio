

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

const iconBg = {
  snowflake: "bg-[var(--color-cyan-dim)]",
  box: "bg-[var(--color-midnight-2)]",
  bolt: "bg-amber-500",
  droplet: "bg-[var(--color-cyan-dim)]",
  graduation: "bg-violet-600",
  sparkle: "bg-emerald-600",
};

export default function Services() {
  return (
    <section className="bg-[var(--color-frost)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <div
                key={s.title}
                className="group relative bg-white rounded-2xl border border-slate-200/70 hover:border-[var(--color-cyan)]/50 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 flex flex-col sm:flex-row overflow-hidden sm:overflow-visible"
              >
                {/* Photo — en haut sur mobile (pleine largeur), qui déborde à droite sur desktop */}
                <div className="w-full h-40 sm:h-auto sm:w-28 shrink-0 order-1 sm:order-2 relative">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover sm:hidden"
                  />
                  <div className="hidden sm:block absolute -top-3 -bottom-3 -right-3 left-0 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 group-hover:-right-4 group-hover:-top-4 group-hover:-bottom-4 transition-all duration-300">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="flex-1 p-6 sm:pr-4 order-2 sm:order-1">
                  <div className={`w-11 h-11 rounded-xl ${iconBg[s.icon]} flex items-center justify-center mb-4`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-base text-[var(--color-slate)] mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[var(--color-slate-soft)] leading-relaxed mb-4">
                    {s.desc}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-ember)] group-hover:gap-2.5 transition-all"
                  >
                    En savoir plus <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
