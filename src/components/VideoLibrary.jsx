import { useState } from "react";
import { Play, X } from "lucide-react";
import { videoLibrary, videoCategories } from "../data/content";

export default function VideoLibrary() {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("Toutes");

  const filtered =
    filter === "Toutes" ? videoLibrary : videoLibrary.filter((v) => v.category === filter);

  return (
    <section className="bg-[var(--color-midnight)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-cyan)] mb-3">
              En action
            </p>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-white tracking-tight mb-4">
              Nos interventions filmées, pour un aperçu concret du travail
            </h2>
            <p className="text-white/60 leading-relaxed">
              Chaque vidéo montre une intervention réelle — de l'analyse du besoin jusqu'à la
              mise en service.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {videoCategories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
                  filter === c
                    ? "bg-[var(--color-ember)] text-white border-[var(--color-ember)]"
                    : "bg-transparent text-white/60 border-white/20 hover:border-[var(--color-cyan)]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((v, i) => (
            <button
              key={i}
              onClick={() => setActive(v)}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] text-left border border-white/10"
            >
              <img
                src={v.poster}
                alt={v.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <span className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-wider text-white/70 bg-black/40 rounded-full px-2.5 py-1">
                {v.category}
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-14 h-14 rounded-full bg-[var(--color-ember)] group-hover:bg-white flex items-center justify-center transition-colors">
                  <Play size={20} className="text-white group-hover:text-[var(--color-ember)] fill-current ml-0.5" />
                </span>
              </div>
              <span className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium leading-snug">
                {v.title}
              </span>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-white/40 text-sm mt-6">Aucune vidéo dans cette catégorie pour l'instant.</p>
        )}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-6"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white"
            onClick={() => setActive(null)}
            aria-label="Fermer"
          >
            <X size={28} />
          </button>

          <div className="w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            {active.src ? (
              <video src={active.src} controls autoPlay className="w-full rounded-xl" />
            ) : (
              <div className="aspect-video rounded-xl bg-[var(--color-midnight-2)] flex flex-col items-center justify-center gap-3 border border-white/10">
                <p className="relative text-white/70 text-sm text-center px-6">
                  Vidéo à venir pour « {active.title} ».
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
