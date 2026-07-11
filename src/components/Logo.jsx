import { Link } from "react-router-dom";
import { brand } from "../data/content";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 shrink-0">
      <span className="bg-white rounded-lg px-2.5 py-1.5 flex items-center shadow-sm">
        <img
          src={brand.logo}
          alt="Maestro Solutions — Calor & Frío"
          className="h-8 md:h-9 w-auto object-contain"
        />
      </span>
    </Link>
  );
}
