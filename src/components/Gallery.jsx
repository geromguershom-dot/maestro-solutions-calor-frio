import { useState } from "react";
import { X } from "lucide-react";
import { galleryCategories, galleryItems } from "../data/content";

export default function Gallery() {
  const [filter, setFilter] = useState("Tous");
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    filter === "Tous" ? galleryItems : galleryItems.filter((it) => it.category === filter);

  return (
    <section className="bg-[var(--color-frost)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 mb-10">
          <h2 className="font-display font-semibold text-2xl text-[var(--color-slate)] tracking-tight">
            Galerie photo
          </h2>

          <div className="flex flex-wrap gap-2">
            {galleryCategories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
                  filter === c
                    ? "bg-[var(--color-midnight)] text-white border-[var(--color-midnight)]"
                    : "bg-white text-[var(--color-slate-soft)] border-slate-200 hover:border-[var(--color-cyan)]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((it, i) => (
            <button
              key={i}
              onClick={() => setLightbox(it)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] text-left"
            >
              <img
                src={it.img}
                alt={it.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
              <span className="absolute bottom-3 left-4 text-white text-xs font-medium bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1">
                {it.category}
              </span>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-black/85 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white"
            onClick={() => setLightbox(null)}
            aria-label="Fermer"
          >
            <X size={28} />
          </button>
          <img
            src={lightbox.img}
            alt={lightbox.alt}
            className="max-h-[85vh] max-w-full rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
