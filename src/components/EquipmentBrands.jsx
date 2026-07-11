import { equipmentBrands } from "../data/content";

export default function EquipmentBrands() {
  return (
    <div className="border-t border-white/10 pt-6 mt-2">
      <p className="text-[11px] font-mono uppercase tracking-wider text-white/35 mb-3">
        Marques posées et entretenues
      </p>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {equipmentBrands.map((b) => (
          <span key={b} className="text-sm font-display font-semibold text-white/50">
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}
