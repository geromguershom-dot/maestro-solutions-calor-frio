import { Link } from "react-router-dom";
import EquipmentBrands from "./EquipmentBrands";
import Logo from "./Logo";
import { nav, brand } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-midnight-2)] pt-14 pb-8">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          <div>
            <Logo dark />
            <p className="text-sm text-white/50 mt-4 leading-relaxed max-w-xs">
              Votre partenaire de confiance pour vos besoins en climatisation, froid industriel,
              électricité, plomberie et formations.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">Liens rapides</h4>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-white/50 hover:text-[var(--color-cyan)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">Nos services</h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>Climatisation</li>
              <li>Chambres froides</li>
              <li>Électricité</li>
              <li>Plomberie</li>
              <li>Formations</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>{brand.city}</li>
              <li>{brand.phone1}</li>
              <li>{brand.email}</li>
            </ul>
          </div>
        </div>

        <EquipmentBrands />

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} {brand.name} — {brand.tagline}. Tous droits réservés.
          </p>
          <p className="text-xs text-white/35">Yaoundé, Cameroun</p>
        </div>
      </div>
    </footer>
  );
}
