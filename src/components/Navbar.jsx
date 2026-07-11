import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { nav, brand } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[var(--color-midnight)]/95 backdrop-blur shadow-lg shadow-black/20" : "bg-[var(--color-midnight)]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-[72px] flex items-center justify-between">
        <Logo dark />

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-[var(--color-cyan)]" : "text-white/80 hover:text-[var(--color-cyan)]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:+237${brand.whatsapp}`}
            className="inline-flex items-center gap-1.5 text-white/75 hover:text-[var(--color-cyan)] text-sm transition-colors"
          >
            <Phone size={15} /> +237 {brand.phone1}
          </a>
          <a
            href={`https://wa.me/237${brand.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 hover:border-[var(--color-cyan)] text-white/85 hover:text-[var(--color-cyan)] text-sm px-3.5 py-2 transition-colors"
          >
            <MessageCircle size={15} /> WhatsApp
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ember)] hover:bg-[var(--color-ember-dim)] text-white text-sm font-semibold px-5 py-2.5 transition-colors"
          >
            Demander un devis
          </Link>
        </div>

        <button
          className="lg:hidden text-white p-2 -mr-2"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[var(--color-midnight)] border-t border-white/10 px-5 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium py-3 border-b border-white/5 ${
                    isActive ? "text-[var(--color-cyan)]" : "text-white/85 hover:text-[var(--color-cyan)]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 text-center rounded-full bg-[var(--color-ember)] text-white text-sm font-semibold px-5 py-3"
            >
              Demander un devis
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
