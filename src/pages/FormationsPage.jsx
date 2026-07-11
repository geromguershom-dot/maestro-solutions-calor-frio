import PageHeader from "../components/PageHeader";
import Formations from "../components/Formations";
import PromoBanner from "../components/PromoBanner";
import usePageMeta from "../hooks/usePageMeta";

export default function FormationsPage() {
  usePageMeta("Formations", "Formations pratiques en climatisation, froid industriel et électricité, pour entreprises et particuliers à Yaoundé.");
  return (
    <>
      <PageHeader
        eyebrow="Nos formations"
        title="Développez vos compétences techniques"
        subtitle="Des formations pratiques et concrètes en climatisation, froid industriel, électricité et plomberie — pour entreprises et particuliers."
      />
      <Formations />
      <PromoBanner />
    </>
  );
}
