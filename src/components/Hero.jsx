import { Link } from "react-router-dom";
import { ArrowRight, Play, Clock, ShieldCheck, Star, Settings } from "lucide-react";
import { hero, stats, brand } from "../data/content";
import SnowflakeField from "./SnowflakeField";

const iconMap = { clock: Clock, shield: ShieldCheck, star: Star, settings: Settings };

export default function Hero() {
  return (
    <section className="relative pt-[72px] overflow-hidden bg-[var(--color-midnight)] min-h-[720px] flex flex-col">
      {/* Vidéo de fond */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src="/videos/hero-background.mp4"
          poster="/images/hero-background-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-midnight)] via-[var(--color-midnight)]/85 to-[var(--color-midnight)]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-midnight)] via-transparent to-[var(--color-midnight)]/30" />
      </div>
      <SnowflakeField count={14} className="z-[1]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 pt-14 md:pt-20 flex-1 w-full">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-cyan)] mb-5">
          {hero.eyebrow}
        </p>
        <h1 className="font-display font-semibold text-white text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight max-w-2xl">
          {hero.titleLine1}
          <br />
          <span className="bg-gradient-to-r from-[var(--color-ember)] to-[var(--color-cyan)] bg-clip-text text-transparent">
            {hero.titleLine2}
          </span>
        </h1>
        <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-lg">
          {hero.subtitle}
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ember)] hover:bg-[var(--color-ember-dim)] text-white font-semibold px-6 py-3.5 transition-colors"
          >
            {hero.ctaPrimary} <ArrowRight size={18} />
          </Link>
          <Link
            to="/realisations"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] text-white font-semibold px-6 py-3.5 transition-colors backdrop-blur-sm"
          >
            <Play size={16} className="fill-current" /> {hero.ctaSecondary}
          </Link>
        </div>

        {/* Badge flottant — vraie photo du technicien */}
        <div className="hidden lg:flex absolute right-4 xl:right-12 top-4 items-center gap-3 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-3 max-w-xs">
          <img
            src="/images/technicien-portrait.jpg"
            alt="Salomon Fotso, fondateur et technicien Maestro Solutions"
            className="w-12 h-12 rounded-full object-cover border-2 border-[var(--color-cyan)]/60 shrink-0"
          />
          <div>
            <div className="text-white text-sm font-display font-semibold leading-tight">
              Salomon Fotso
            </div>
            <div className="text-white/60 text-xs leading-snug">
              Fondateur &amp; technicien — 15 ans d'expérience
            </div>
          </div>
        </div>
      </div>

      {/* Barre de stats vitrée */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-5 md:px-8 pb-8 pt-6">
        <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-6 py-6">
          {stats.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <div key={s.label} className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-full border border-[var(--color-cyan)]/40 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-[var(--color-cyan)]" />
                </span>
                <div>
                  <div className="font-mono text-lg font-semibold text-white leading-tight">
                    {s.value}
                  </div>
                  <div className="text-xs text-white/60 leading-snug">{s.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="thermal-divider relative z-10" />
    </section>
  );
}
