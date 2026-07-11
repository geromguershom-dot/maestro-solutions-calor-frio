// ============================================================
// CONTENU DU SITE — modifie ce fichier pour changer les textes,
// sans toucher aux composants React.
// ============================================================

export const brand = {
  name: "Maestro Solutions",
  tagline: "Calor & Frío",
  taglineFull: "L'expertise qui maîtrise votre confort",
  logo: "/logo/maestro-solutions-logo.png",
  phone1: "677 33 14 26",
  phone2: "695 95 69 38",
  whatsapp: "677331426", // format sans espaces pour le lien wa.me
  email: "salomon.fotso@yahoo.com",
  city: "Yaoundé, Cameroun",
};

export const nav = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Formations", href: "/formations" },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  eyebrow: "Maestro Solutions",
  titleLine1: "Votre confort,",
  titleLine2: "notre métier.",
  subtitle:
    "Installation, entretien et dépannage en climatisation, froid industriel, électricité et plomberie — par une équipe qui traite chaque projet comme le sien.",
  ctaPrimary: "Demander un devis",
  ctaSecondary: "Voir nos réalisations",
};

// ⚠️ Chiffres à remplir avec le client (nombre réel d'années d'activité,
// d'interventions, etc.) — remplace ces valeurs avant la mise en ligne.
export const stats = [
  { icon: "clock", value: "24/7", label: "Assistance disponible" },
  { icon: "shield", value: "100%", label: "Interventions garanties" },
  { icon: "star", value: "5+", label: "Domaines d'expertise" },
  { icon: "settings", value: "Sur mesure", label: "Solutions adaptées à vos besoins" },
];

export const services = [
  {
    icon: "snowflake",
    title: "Climatisation",
    desc: "Installation et entretien de systèmes de climatisation résidentiels et professionnels.",
    img: "/images/service-climatisation.jpg",
  },
  {
    icon: "box",
    title: "Chambres froides & réfrigérateurs",
    desc: "Entretien et dépannage de chambres froides, réfrigérateurs et équipements électroménagers.",
    img: "/images/service-chambres-froides.jpg",
  },
  {
    icon: "bolt",
    title: "Électricité",
    desc: "Installations électriques pour bâtiments résidentiels, commerciaux et industriels.",
    img: "/images/service-electricite.jpg",
  },
  {
    icon: "droplet",
    title: "Hydraulique & plomberie",
    desc: "Installation et dépannage des réseaux hydrauliques et de plomberie.",
    img: "/images/service-plomberie.jpg",
  },
  {
    icon: "graduation",
    title: "Formations techniques",
    desc: "Formations pratiques en climatisation, froid et électricité, pour entreprises et particuliers.",
    img: "/images/service-formations.jpg",
  },
  {
    icon: "sparkle",
    title: "Solutions bien-être",
    desc: "Étude, conception et installation de solutions innovantes : hammams et équipements de confort.",
    img: "/images/installation-climatiseur-tour.jpg",
  },
];

export const whyChooseUs = [
  { icon: "clock", title: "Intervention rapide", desc: "Nous intervenons rapidement pour minimiser vos arrêts et rétablir votre confort." },
  { icon: "shield", title: "Garantie & qualité", desc: "Toutes nos interventions sont garanties et réalisées avec des équipements de qualité." },
  { icon: "users", title: "Techniciens qualifiés", desc: "Notre équipe est composée de professionnels qualifiés et expérimentés." },
  { icon: "headset", title: "Disponibilité 24/7", desc: "Nous sommes disponibles 24h/24 et 7j/7 pour tous vos besoins urgents." },
];

export const whyUs = {
  eyebrow: "Pourquoi nous choisir",
  title: "L'expertise et la fiabilité au service de votre confort",
  points: [
    "Étude et réalisation de projets sur mesure",
    "Techniciens qualifiés et expérimentés",
    "Intervention rapide sur Yaoundé et environs",
    "Assistance disponible 24/7",
    "Matériel de qualité et solutions durables",
    "Garantie sur chaque installation",
  ],
};

// Vraies photos du technicien Maestro Solutions — envoyées directement.
// Les catégories Électricité et Plomberie n'ont pas encore de photo réelle :
// les visuels restent en placeholder Unsplash en attendant.
export const galleryCategories = ["Tous", "Climatisation", "Installation", "Électricité", "Plomberie"];

export const galleryItems = [
  { category: "Climatisation", img: "/images/entretien-cassette-plafond-1.jpg", alt: "Entretien d'un climatiseur cassette au plafond" },
  { category: "Installation", img: "/images/installation-hauteur-echelle.jpg", alt: "Technicien installant des unités extérieures en hauteur" },
  { category: "Climatisation", img: "/images/climatisation-murale-installee.jpg", alt: "Climatiseur mural installé" },
  { category: "Installation", img: "/images/installation-unite-exterieure-gaz.jpg", alt: "Installation et mise en gaz d'une unité extérieure" },
  { category: "Climatisation", img: "/images/maintenance-climatiseur-tour-1.jpg", alt: "Contrôle électrique d'un climatiseur tour TCL" },
  { category: "Installation", img: "/images/installation-plafond-echafaudage.jpg", alt: "Installation de climatiseurs cassette sur échafaudage" },
  { category: "Climatisation", img: "/images/installation-climatiseur-tour.jpg", alt: "Installation d'un climatiseur tour" },
  { category: "Installation", img: "/images/installation-cassette-echafaudage-2.jpg", alt: "Technicien sur échafaudage lors de l'installation d'une cassette" },
  { category: "Climatisation", img: "/images/installation-unite-exterieure-nagu.jpg", alt: "Unité extérieure NAGU fraîchement installée" },
  { category: "Installation", img: "/images/cassette-plafond-finie.jpg", alt: "Climatiseur cassette installé, vue du dessous" },
  { category: "Climatisation", img: "/images/preparation-climatiseur-airwell.jpg", alt: "Préparation d'un climatiseur Airwell avant installation" },
  { category: "Installation", img: "/images/installation-echafaudage-technicien.jpg", alt: "Technicien sur échafaudage lors d'une installation" },
  { category: "Climatisation", img: "/images/entretien-cassette-plafond-2.jpg", alt: "Entretien d'un climatiseur cassette, filtre en main" },
  { category: "Climatisation", img: "/images/maintenance-climatiseur-tour-2.jpg", alt: "Vérification d'un climatiseur tour avec pince ampèremétrique" },
  { category: "Climatisation", img: "/images/diagnostic-carte-electronique.jpg", alt: "Diagnostic de la carte électronique d'un équipement" },
  { category: "Électricité", img: "/images/service-electricite.jpg", alt: "Installation électrique — bornier de raccordement" },
  { category: "Plomberie", img: "/images/service-plomberie.jpg", alt: "Installation hydraulique — chauffe-eau" },
];

// Vraies vidéos de réalisations envoyées par le technicien.
// ⚠️ Je n'ai pas pu vérifier visuellement le contenu exact de chaque vidéo de mon côté —
// les titres et catégories ci-dessous sont des valeurs par défaut. Ajuste-les librement :
// categories possibles : "Interventions", "Installations", "Conseils"
export const videoCategories = ["Toutes", "Interventions", "Installations", "Conseils"];

export const videoLibrary = [
  { title: "Réalisation — intervention 1", category: "Interventions", poster: "/images/realisation-01-poster.jpg", src: "/videos/realisation-01.mp4" },
  { title: "Réalisation — intervention 2", category: "Interventions", poster: "/images/realisation-02-poster.jpg", src: "/videos/realisation-02.mp4" },
  { title: "Réalisation — intervention 3", category: "Installations", poster: "/images/realisation-03-poster.jpg", src: "/videos/realisation-03.mp4" },
  { title: "Réalisation — intervention 4", category: "Installations", poster: "/images/realisation-04-poster.jpg", src: "/videos/realisation-04.mp4" },
  { title: "Réalisation — intervention 5", category: "Installations", poster: "/images/realisation-05-poster.jpg", src: "/videos/realisation-05.mp4" },
  { title: "Réalisation — intervention 6", category: "Interventions", poster: "/images/realisation-06-poster.jpg", src: "/videos/realisation-06.mp4" },
  { title: "Réalisation — intervention 7", category: "Installations", poster: "/images/realisation-07-poster.jpg", src: "/videos/realisation-07.mp4" },
  { title: "Réalisation — intervention 8", category: "Interventions", poster: "/images/realisation-08-poster.jpg", src: "/videos/realisation-08.mp4" },
  { title: "Conseil du technicien", category: "Conseils", poster: "/images/conseil-01-poster.jpg", src: "/videos/conseil-01.mp4" },
  { title: "Réalisation — intervention 9", category: "Interventions", poster: "/images/intervention-09-poster.jpg", src: "/videos/intervention-09.mp4" },
  { title: "Réalisation — intervention 10", category: "Interventions", poster: "/images/intervention-10-poster.jpg", src: "/videos/intervention-10.mp4" },
  { title: "Réalisation — installation 9", category: "Installations", poster: "/images/installation-09-poster.jpg", src: "/videos/installation-09.mp4" },
  { title: "Conseil du technicien 2", category: "Conseils", poster: "/images/conseil-02-poster.jpg", src: "/videos/conseil-02.mp4" },
  { title: "Réalisation — intervention 11", category: "Interventions", poster: "/images/intervention-11-poster.jpg", src: "/videos/intervention-11.mp4" },
];

export const formations = [
  { title: "Climatisation", level: "Niveau : Débutant", duration: "Durée : 4 semaines" },
  { title: "Froid industriel", level: "Niveau : Intermédiaire", duration: "Durée : 6 semaines" },
  { title: "Électricité bâtiment", level: "Niveau : Débutant", duration: "Durée : 4 semaines" },
  { title: "Plomberie & hydraulique", level: "Niveau : Tous niveaux", duration: "Durée : 3 semaines" },
];

export const process = [
  { step: "01", title: "Prise de contact", desc: "Contactez-nous par téléphone, WhatsApp ou via le formulaire." },
  { step: "02", title: "Visite technique", desc: "Nous analysons vos besoins directement sur site." },
  { step: "03", title: "Devis détaillé", desc: "Vous recevez une proposition claire, sans surprise." },
  { step: "04", title: "Installation", desc: "Nos techniciens réalisent l'installation dans les règles de l'art." },
  { step: "05", title: "Suivi & maintenance", desc: "Nous assurons le suivi pour votre tranquillité durable." },
];

export const faq = [
  { q: "Quels sont vos délais d'intervention ?", a: "Nous intervenons rapidement sur Yaoundé et ses environs, généralement sous 24 à 48h selon l'urgence de la demande." },
  { q: "Proposez-vous un service après-vente ?", a: "Oui, chaque installation est suivie d'un accompagnement et d'une garantie sur les travaux réalisés." },
  { q: "Quels types de climatiseurs installez-vous ?", a: "Nous installons et entretenons tous types de systèmes : split muraux, cassettes, systèmes centralisés et froid industriel." },
  { q: "Travaillez-vous uniquement à Yaoundé ?", a: "Notre base est à Yaoundé, mais nous nous déplaçons selon les projets. Contactez-nous pour vérifier la disponibilité sur votre zone." },
];

export const values = [
  { title: "Rigueur", desc: "Chaque installation suit les règles de l'art, sans raccourci." },
  { title: "Transparence", desc: "Un devis clair, sans coût caché ni surprise à la facture." },
  { title: "Proximité", desc: "Une équipe joignable et à l'écoute, du premier appel au suivi." },
  { title: "Durabilité", desc: "Des solutions pensées pour durer, pas pour être refaites dans un an." },
];

// ⚠️ PROVISOIRE — à remplacer par de vrais témoignages une fois obtenus auprès des clients.
export const testimonials = [
  {
    name: "Jean D.",
    role: "Particulier",
    text: "Service impeccable, l'installation a été rapide et le résultat excellent. Je recommande.",
  },
  {
    name: "Marie L.",
    role: "Restaurant",
    text: "Équipe professionnelle et à l'écoute, je recommande sans hésiter pour tout projet de froid industriel.",
  },
  {
    name: "Paul M.",
    role: "Entreprise",
    text: "Travail soigné, respect des délais et des prix raisonnables. Exactement ce qu'il fallait pour nos bureaux.",
  },
];

// Marques d'équipements réellement posées par le technicien (vues sur les photos réelles) —
// différent des logos clients : ici on ne prétend pas à un partenariat, juste qu'on installe ce matériel.
export const equipmentBrands = ["TCL", "Airwell", "NAGU", "Gree", "Roch"];

export const motto = "Votre satisfaction, notre leitmotiv.";

// Références réelles communiquées par le client — mentions textuelles uniquement,
// pas de logos (on n'a pas l'autorisation d'utiliser l'identité visuelle de ces organismes).
export const references = [
  { name: "MINESEC", detail: "Partenariat depuis 2008" },
  { name: "MINDEF", detail: "Travaux réalisés 2017–2018" },
  { name: "Supermarché Oumbé", detail: "Installation climatisation" },
  { name: "MIRAP — Eli-Essono", detail: "Installation climatisation" },
  { name: "Hôtels partenaires", detail: "Entretien & installation" },
  { name: "Résidences à Bastos", detail: "Installations résidentielles" },
];

export const about = {
  eyebrow: "À propos",
  title: "Un technicien engagé, une équipe de confiance",
  body: "Maestro Solutions est né d'une conviction simple : le confort ne devrait jamais être un luxe compliqué à obtenir. Derrière chaque installation, chaque dépannage et chaque formation, il y a la même exigence — un travail propre, durable, et fait pour durer. De la climatisation résidentielle aux chambres froides industrielles, en passant par l'électricité et la plomberie, nous mettons notre expérience de terrain au service de projets concrets, à Yaoundé et au-delà.",
};
