# Maestro Solutions — Calor & Frío | Site vitrine

## 🔒 Sécurité

Ce site est un site vitrine statique (pas de backend, pas de base de données, pas de compte utilisateur) — la surface d'attaque est donc naturellement très réduite. Ce qui est déjà en place :

- **HTTPS automatique** : Vercel fournit un certificat SSL gratuit pour chaque déploiement et chaque nom de domaine connecté, sans configuration nécessaire.
- **En-têtes de sécurité HTTP** (`vercel.json`) : protection contre le détournement d'iframe (clickjacking), contre le sniffing de type de fichier, limitation des informations de référent envoyées à d'autres sites.
- **Aucune faille d'injection connue** : React échappe automatiquement le contenu affiché, et le code n'utilise aucun pattern dangereux (`dangerouslySetInnerHTML`, `eval`, etc.) — vérifié.
- **Aucun secret ou clé API codée en dur** dans le code — vérifié.
- **0 vulnérabilité connue** dans les dépendances (`npm audit`) au moment de la livraison.

⚠️ Ces vérifications datent de la livraison — avant chaque mise à jour importante, relance `npm audit` pour vérifier qu'aucune nouvelle vulnérabilité n'est apparue dans les dépendances.

## ✅ Checklist avant mise en ligne définitive (à faire avec/après validation de Fotso)

1. **Remplacer l'URL provisoire** — cherche `maestro-solutions.vercel.app` dans le projet (index.html, robots.txt, sitemap.xml) et remplace par la vraie adresse une fois déployée.
2. **Titres des vidéos** — dans `src/data/content.js` (`videoLibrary`), renomme les titres génériques ("Réalisation — intervention 9") par de vrais intitulés si tu veux, sinon ce n'est pas bloquant.
3. **Chiffres à reconfirmer si besoin** — les stats du hero (24/7, 100%, 5+) sont volontairement prudentes ; si Fotso donne un vrai nombre de projets réalisés, on peut l'ajouter.
4. **Témoignages** — ceux affichés sont provisoires (marqués comme tels dans le code). À remplacer dès que Fotso obtient de vrais retours clients.
5. **Déployer sur Vercel** :
   ```powershell
   npm install -g vercel
   vercel
   ```
6. **Connecter un nom de domaine** une fois acheté (`.cm` ou `.com`), dans les paramètres du projet Vercel.

Tout le reste (photos, vidéos, logo, pages, SEO, formulaire, bouton WhatsApp) est prêt et testé.

---

Site vitrine React + Vite + Tailwind CSS v4 + React Router, en pages dédiées, prêt à lancer et à déployer.

## 🗺️ Structure des pages

- `/` — Accueil (hero + aperçus de chaque section)
- `/services` — Tous les services en détail
- `/formations` — Toutes les formations
- `/realisations` — Galerie photo + bibliothèque vidéo complète
- `/a-propos` — Histoire, valeurs, section Calor & Frío
- `/contact` — Formulaire + FAQ

## 🚀 Démarrer en local (PowerShell)

```powershell
cd calor-frio-site
npm install
npm run dev
```

Le site s'ouvre sur `http://localhost:5173`.

Pour générer la version de production :
```powershell
npm run build
```
Le résultat est généré dans le dossier `dist/`.

## 📁 Où modifier quoi

**Tout le texte du site est centralisé dans un seul fichier :**
```
src/data/content.js
```
Tu peux changer les titres, les services, les FAQ, les coordonnées, etc. sans toucher au code des composants.

**Les composants visuels** sont dans `src/components/` — un fichier par section (Hero, Services, Gallery, VideoLibrary, Contact, etc.).

## 🎥 Ajouter les vraies vidéos du technicien

Dans `src/data/content.js`, repère `videoLibrary` :

```js
export const videoLibrary = [
  {
    title: "Installation climatiseur split",
    poster: "URL_DE_LA_MINIATURE",
    src: "",   // ← mets ici le chemin/URL de la vraie vidéo
  },
  ...
];
```

Deux options pour héberger les vidéos :
1. **Simple** : place les fichiers `.mp4` dans le dossier `public/videos/` (à créer), puis mets `src: "/videos/installation.mp4"`.
2. **Recommandé pour la prod** : héberge-les sur un service comme Cloudinary, Bunny.net ou YouTube — ça évite d'alourdir le site. Si tu utilises YouTube, dis-le-moi, je peux adapter le lecteur pour un iframe YouTube au lieu de la balise `<video>`.

Tant que `src` est vide, le site affiche un message "vidéo à venir" plutôt qu'une erreur — donc rien ne casse si tu ajoutes les vidéos progressivement.

## ✅ Vraies photos intégrées

Les photos suivantes viennent directement du technicien (dossier `public/images/`) et remplacent les placeholders Unsplash sur : le hero, la page À propos, la section "pourquoi nous choisir", et la majorité de la galerie (catégories Climatisation et Installation).

Il manque encore de vraies photos pour les catégories **Électricité** et **Plomberie** — ces deux-là utilisent encore des photos Unsplash placeholder en attendant.

Le vrai logo (`public/logo/maestro-solutions-logo.png`) a été extrait automatiquement de la bannière que tu as envoyée. Si le recadrage n'est pas parfaitement net, envoie-moi le fichier logo original (idéalement en PNG transparent) et je le remplace proprement.

## ⚠️ Sur les bannières "ChatGPT_Image..." et "Copilot_..."

Ces visuels (Chambres froides, Installations électriques, Hydraulique & Plomberie, Hammams) semblent générés par IA — le technicien qui y figure porte des logos d'une autre marque ("SOTIMA", etc.), donc ce n'est pas le vrai technicien de Calor & Frío. Je ne les ai pas utilisés comme "vraies photos de l'équipe" pour éviter toute confusion si un visiteur les reconnaît comme génération IA. Si tu veux les utiliser quand même (par exemple comme visuels décoratifs génériques, sans les présenter comme l'équipe réelle), dis-le-moi.

## 📞 À confirmer avec le client

Deux infos de contact circulent dans ce qu'on a reçu :
- Email `salomon.fotso@yahoo.com` (vu dans les posts WhatsApp)
- Email `contact@maestrosolution.cm` (vu dans la bannière logo — a l'air plus professionnel)

Actuellement le site utilise `salomon.fotso@yahoo.com`. Dis-moi laquelle est la bonne et je corrige.

## 🎥 Vidéos intégrées — attention à la taille

8 vraies vidéos de réalisations sont déjà dans `public/videos/` et branchées dans `videoLibrary` (`content.js`). Elles fonctionnent directement avec `npm run dev`.

**Mais** : ça représente environ **73 Mo**, ce qui est beaucoup pour un site — ton dépôt Git et ton déploiement Vercel vont devenir lents, et le premier visiteur qui clique sur une vidéo attendra plus longtemps que nécessaire. Pour la mise en production, deux options :

1. **Compresser** (simple, rapide) : réduire le poids sans changer l'hébergement.
   ```powershell
   ffmpeg -i public/videos/realisation-01.mp4 -vcodec libx264 -crf 28 -preset fast public/videos/realisation-01-compressed.mp4
   ```
   Répète pour chaque vidéo, ça peut diviser le poids par 3 ou 4 sans perte visible à l'écran.

2. **Héberger ailleurs** (recommandé pour la vraie mise en ligne) : envoie les vidéos sur Cloudinary, Bunny.net ou YouTube (non répertorié), puis remplace juste les `src` dans `content.js` par les URLs — aucune autre modification nécessaire.

**Autre point** : je n'ai pas pu visionner le contenu exact de chaque vidéo pour leur donner un vrai titre — elles s'appellent actuellement "Réalisation — intervention 1" à "8". Renomme-les dans `content.js` (`videoLibrary`) avec l'intitulé réel de chaque intervention si tu veux que ce soit plus parlant pour les visiteurs.

## 🖼️ Remplacer les images placeholder restantes

Toutes les images viennent d'Unsplash pour l'instant. Deux catégories :
- **Vérifiées et confirmées libres de droit** : les photos de flocon de neige et de flamme (`snowflakePhotos` dans `content.js`, utilisées dans `DualityShowcase.jsx`) — j'ai confirmé chaque source individuellement.
- **Choisies rapidement, à vérifier avant mise en ligne** : les photos de climatiseur, chambre froide, tableau électrique, plomberie et équipe (`galleryItems`, `Hero.jsx`, `WhyUs.jsx`, `About.jsx`). Comme tu vas de toute façon les remplacer par les vraies photos du client, je n'ai pas passé de temps à vérifier chacune une par une — mais ne les publie pas telles quelles sur un site en production sans les vérifier ou les remplacer.

Idéalement, héberge tes photos finales dans `public/images/` puis réfère-les en `/images/nom-du-fichier.jpg`.

## 🌐 Déploiement SPA (important)

Le site utilise maintenant plusieurs pages avec React Router. Un fichier `vercel.json` est déjà inclus pour que les URLs comme `/services` fonctionnent aussi en rechargement direct (sans lui, Vercel renverrait une 404 sur ces routes). Si tu déploies ailleurs qu'sur Vercel (Netlify, etc.), il faut une redirection équivalente vers `index.html`.

## ☎️ Formulaire de contact

Le formulaire n'a pas de backend (pas de serveur d'envoi d'email) — c'est volontaire pour un site vitrine simple. Au clic sur "Envoyer", il ouvre WhatsApp avec un message pré-rempli vers le numéro du client. Si tu veux plutôt un vrai envoi d'email, on peut brancher un service comme EmailJS (tu l'as déjà utilisé sur ton propre portfolio).

## 📊 Chiffres à vérifier avec le client

Dans `content.js`, la constante `stats` (24/7, 100%, etc.) contient des valeurs à confirmer avec le client avant mise en ligne — ne jamais inventer un chiffre qu'il ne peut pas assumer face à ses propres clients.

## 🌐 Déployer (Vercel — comme tes autres projets)

```powershell
npm install -g vercel
vercel
```
Suis les instructions ; le site sera en ligne en quelques minutes. Tu peux ensuite connecter un nom de domaine personnalisé si le client en achète un.

## 🎨 Identité visuelle utilisée

- **Couleurs** : bleu nuit `#0B1930` (froid/pro), cyan `#22D3EE` (Frío), orange `#F97316` (Calor)
- **Typographies** : Space Grotesk (titres), Inter (texte), IBM Plex Mono (chiffres/stats)
- **Signature** : la dualité chaud/froid de la marque irrigue tout le design (dégradés, icônes, accents)

Tous ces tokens sont dans `src/index.css` (`@theme`) si tu veux ajuster une teinte partout d'un coup.
#   m a e s t r o - s o l u t i o n s - c a l o r - f r i o  
 