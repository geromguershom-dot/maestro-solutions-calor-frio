import PageHeader from "../components/PageHeader";
import ServiceBadges from "../components/ServiceBadges";
import Services from "../components/Services";
import ServiceStatBand from "../components/ServiceStatBand";
import usePageMeta from "../hooks/usePageMeta";

export default function ServicesPage() {
  usePageMeta("Nos Services", "Climatisation, chambres froides, électricité, plomberie, formations et bien-être — découvrez tous nos services à Yaoundé.");
  return (
    <>
      <section className="relative bg-[var(--color-midnight)] pt-[72px] overflow-hidden">
        <div className="pointer-events-none absolute -top-20 -left-20 w-[320px] h-[320px] rounded-full bg-[var(--color-cyan)]/15 blur-[100px]" />
        <div className="pointer-events-none absolute -top-20 -right-20 w-[320px] h-[320px] rounded-full bg-[var(--color-ember)]/15 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-14 md:py-20">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-cyan)] mb-3">
            Nos services
          </p>
          <h1 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight max-w-2xl">
            Des solutions complètes pour votre confort
          </h1>
          <p className="mt-4 text-white/65 max-w-xl leading-relaxed mb-10">
            Climatisation, froid industriel, électricité, plomberie et bien-être — une seule
            équipe pour tous vos besoins techniques.
          </p>
          <ServiceBadges />
        </div>
        <div className="thermal-divider relative z-10" />
      </section>

      <Services />
      <ServiceStatBand />
    </>
  );
}
