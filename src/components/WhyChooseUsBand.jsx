import { Clock, ShieldCheck, Users, Headset } from "lucide-react";
import { whyChooseUs } from "../data/content";

const iconMap = { clock: Clock, shield: ShieldCheck, users: Users, headset: Headset };

export default function WhyChooseUsBand() {
  return (
    <section className="bg-[var(--color-midnight)] py-14">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-cyan)] mb-8">
          Pourquoi nous choisir ?
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={item.title} className="flex gap-4">
                <span className="w-12 h-12 rounded-full border border-[var(--color-cyan)]/40 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-[var(--color-cyan)]" />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-white mb-1.5">{item.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
