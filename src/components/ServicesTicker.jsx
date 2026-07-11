import { Snowflake, Zap, GraduationCap, Wrench, Droplet } from "lucide-react";

const items = [
  { icon: Snowflake, label: "Climatisation" },
  { icon: Wrench, label: "Froid industriel" },
  { icon: Zap, label: "Électricité" },
  { icon: Droplet, label: "Plomberie" },
  { icon: GraduationCap, label: "Formations" },
];

export default function ServicesTicker() {
  const row = [...items, ...items];
  return (
    <div className="bg-[var(--color-midnight-2)] overflow-hidden">
      <div className="flex w-max animate-[scroll_28s_linear_infinite] py-4">
        {[...row, ...row].map((it, i) => (
          <div key={i} className="flex items-center gap-2.5 px-8 shrink-0">
            <it.icon size={16} className="text-[var(--color-cyan)]" />
            <span className="font-mono text-xs tracking-wide uppercase text-white/70">{it.label}</span>
            <span className="text-white/20 ml-8">•</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
