import { ShieldCheck, Clock, Users, Award } from "lucide-react";

const badges = [
  { icon: ShieldCheck, title: "Qualité garantie", desc: "Interventions professionnelles" },
  { icon: Clock, title: "Intervention rapide", desc: "Disponible 24h/24 et 7j/7" },
  { icon: Users, title: "Techniciens qualifiés", desc: "Équipe expérimentée et sérieuse" },
  { icon: Award, title: "Satisfaction", desc: "La qualité de service, notre priorité" },
];

export default function ServiceBadges() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {badges.map((b) => (
        <div key={b.title} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
          <span className="w-10 h-10 rounded-lg border border-[var(--color-cyan)]/40 flex items-center justify-center shrink-0">
            <b.icon size={17} className="text-[var(--color-cyan)]" />
          </span>
          <div>
            <div className="text-sm font-semibold text-white leading-tight">{b.title}</div>
            <div className="text-xs text-white/55 mt-1 leading-snug">{b.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
