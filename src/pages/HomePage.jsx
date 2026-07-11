import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero from "../components/Hero";
import References from "../components/References";
import ServicesTicker from "../components/ServicesTicker";
import ServicesTeaser from "../components/ServicesTeaser";
import WhyChooseUsBand from "../components/WhyChooseUsBand";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import FormationsTeaser from "../components/FormationsTeaser";
import ClosingCTA from "../components/ClosingCTA";
import { galleryItems } from "../data/content";
import usePageMeta from "../hooks/usePageMeta";

function GalleryTeaser() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-ember)] mb-3">
              Nos réalisations
            </p>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-[var(--color-slate)] tracking-tight">
              Un aperçu de nos interventions
            </h2>
          </div>
          <Link
            to="/realisations"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 hover:border-[var(--color-cyan)] text-sm font-semibold px-5 py-2.5 text-[var(--color-slate)] transition-colors"
          >
            Voir toutes nos réalisations <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {galleryItems.slice(0, 4).map((it, i) => (
            <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={it.img} alt={it.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustAndFormations() {
  return (
    <section className="bg-[var(--color-frost)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12">
        <Testimonials compact />
        <FormationsTeaser />
      </div>
    </section>
  );
}

export default function HomePage() {
  usePageMeta(null, "Climatisation, froid industriel, électricité et plomberie à Yaoundé. Devis gratuit, intervention rapide, 15 ans d'expérience — Maestro Solutions.");
  return (
    <>
      <Hero />
      <References />
      <ServicesTicker />
      <ServicesTeaser />
      <WhyChooseUsBand />
      <GalleryTeaser />
      <Process />
      <TrustAndFormations />
      <ClosingCTA />
    </>
  );
}
