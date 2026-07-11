import PageHeader from "../components/PageHeader";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import usePageMeta from "../hooks/usePageMeta";

export default function ContactPage() {
  usePageMeta("Contact", "Contactez Maestro Solutions pour un devis gratuit : climatisation, froid industriel, électricité et plomberie à Yaoundé.");
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Parlons de votre projet"
        subtitle="Un mot, un appel ou un message WhatsApp — on vous répond rapidement."
      />
      <Contact />
      <FAQ />
    </>
  );
}
