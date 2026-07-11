import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faq } from "../data/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="mb-10">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-ember)] mb-3">
            Questions fréquentes
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-[var(--color-slate)] tracking-tight">
            Vos questions, nos réponses
          </h2>
        </div>

        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-medium text-[var(--color-slate)]">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-[var(--color-slate-soft)] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm text-[var(--color-slate-soft)] leading-relaxed pr-8">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
