import { useEffect } from "react";

/**
 * Met à jour le <title> et la meta description de la page.
 * Usage : usePageMeta("Services", "Description spécifique à cette page...")
 */
export default function usePageMeta(title, description) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Maestro Solutions` : "Maestro Solutions | Calor & Frío";
    document.title = fullTitle;

    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      const previous = meta.getAttribute("content");
      meta.setAttribute("content", description);
      return () => {
        if (previous) meta.setAttribute("content", previous);
      };
    }
  }, [title, description]);
}
