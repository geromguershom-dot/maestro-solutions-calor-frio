import PageHeader from "../components/PageHeader";
import Gallery from "../components/Gallery";
import VideoLibrary from "../components/VideoLibrary";
import PromoBanner from "../components/PromoBanner";
import usePageMeta from "../hooks/usePageMeta";

export default function RealisationsPage() {
  usePageMeta("Réalisations", "Découvrez nos interventions en photos et vidéos : climatisation, installations et dépannages réalisés à Yaoundé.");
  return (
    <>
      <PageHeader
        eyebrow="Nos réalisations"
        title="Le travail parle de lui-même"
        subtitle="Photos et vidéos d'interventions réelles — de l'installation d'un climatiseur au dépannage d'une chambre froide."
      />
      <Gallery />
      <VideoLibrary />
      <PromoBanner />
    </>
  );
}
