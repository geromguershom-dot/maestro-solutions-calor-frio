import { Star } from "lucide-react";
import { testimonials } from "../data/content";

const avatarColors = ["#F97316", "#22D3EE", "#0EA5C4"];

export default function Testimonials({ compact = false }) {
  const content = (
    <>
      {!compact && (
        <div className="max-w-xl mb-12">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-ember)] mb-3">
            Avis clients
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-[var(--color-slate)] tracking-tight">
            Ils nous font confiance
          </h2>
        </div>
      )}
      {compact && (
        <h2 className="font-display font-semibold text-2xl text-[var(--color-slate)] tracking-tight mb-6">
          Ils parlent de nous
        </h2>
      )}

      <div className={compact ? "grid gap-4" : "grid sm:grid-cols-2 lg:grid-cols-3 gap-6"}>
        {(compact ? testimonials.slice(0, 2) : testimonials).map((t, i) => (
          <div key={t.name} className={`rounded-2xl border border-slate-200/70 bg-[var(--color-frost)] ${compact ? "p-5" : "p-6"}`}>
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} size={14} className="text-[var(--color-ember)] fill-current" />
              ))}
            </div>
            <p className="text-sm text-[var(--color-slate-soft)] leading-relaxed mb-5">
              « {t.text} »
            </p>
            <div className="flex items-center gap-3">
              <span
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-display font-semibold shrink-0"
                style={{ backgroundColor: avatarColors[i % avatarColors.length] }}
              >
                {t.name.charAt(0)}
              </span>
              <div>
                <div className="text-sm font-semibold text-[var(--color-slate)]">{t.name}</div>
                <div className="text-xs text-[var(--color-slate-soft)]">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  if (compact) return content;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">{content}</div>
    </section>
  );
}
