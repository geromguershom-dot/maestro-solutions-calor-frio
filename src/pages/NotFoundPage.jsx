import { Link } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";
import SnowflakeField from "../components/SnowflakeField";
import usePageMeta from "../hooks/usePageMeta";

export default function NotFoundPage() {
  usePageMeta("Page introuvable", "Cette page n'existe pas ou plus.");

  return (
    <section className="relative bg-[var(--color-midnight)] min-h-[80vh] flex items-center justify-center overflow-hidden pt-[72px]">
      <SnowflakeField count={12} />
      <div className="relative z-10 text-center px-6">
        <p className="font-mono text-7xl md:text-8xl font-semibold bg-gradient-to-r from-[var(--color-ember)] to-[var(--color-cyan)] bg-clip-text text-transparent mb-4">
          404
        </p>
        <h1 className="font-display font-semibold text-2xl md:text-3xl text-white mb-3">
          Cette page a pris la clim et s'est absentée.
        </h1>
        <p className="text-white/60 max-w-md mx-auto mb-8">
          La page que vous cherchez n'existe pas ou a été déplacée. Retournons à l'accueil.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ember)] hover:bg-[var(--color-ember-dim)] text-white font-semibold px-6 py-3.5 transition-colors"
        >
          <Home size={18} /> Retour à l'accueil <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
