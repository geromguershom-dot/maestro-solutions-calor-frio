import { MessageCircle } from "lucide-react";
import { brand } from "../data/content";

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/237${brand.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp"
      className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] shadow-lg shadow-black/20 flex items-center justify-center transition-transform hover:scale-105"
    >
      <MessageCircle size={26} className="text-white fill-white" strokeWidth={1.5} />
    </a>
  );
}
