import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { brand } from "../data/content";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Bonjour Maestro Solutions,\n\nNom : ${form.name}\nTéléphone : ${form.phone}\nEmail : ${form.email}\n\nMessage : ${form.message}`
    );
    window.open(`https://wa.me/237${brand.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <section className="bg-[var(--color-frost)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 rounded-3xl overflow-hidden border border-slate-200">
            <iframe
              title="Localisation Maestro Solutions"
              className="w-full h-[280px] md:h-[340px]"
              loading="lazy"
              src="https://maps.google.com/maps?q=Yaound%C3%A9%2C%20Cameroun&t=&z=12&ie=UTF8&iwloc=&output=embed"
            />
            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 grid sm:grid-cols-2 gap-4">
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nom complet"
                className="sm:col-span-1 rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-cyan)]"
              />
              <input
                required
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Téléphone"
                className="sm:col-span-1 rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-cyan)]"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="sm:col-span-2 rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-cyan)]"
              />
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Votre message"
                rows={4}
                className="sm:col-span-2 rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-cyan)] resize-none"
              />
              <button
                type="submit"
                className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-midnight)] hover:bg-[var(--color-midnight-2)] text-white font-semibold py-3.5 transition-colors"
              >
                Envoyer via WhatsApp <Send size={16} />
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 bg-[var(--color-midnight)] rounded-3xl p-8 text-white flex flex-col gap-6">
            <h3 className="font-display font-semibold text-lg">Nos coordonnées</h3>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-[var(--color-cyan)] shrink-0 mt-0.5" />
              <span className="text-sm text-white/75">{brand.city}</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={18} className="text-[var(--color-cyan)] shrink-0 mt-0.5" />
              <div className="text-sm text-white/75">
                <div>{brand.phone1}</div>
                <div>{brand.phone2} (WhatsApp)</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={18} className="text-[var(--color-cyan)] shrink-0 mt-0.5" />
              <span className="text-sm text-white/75">{brand.email}</span>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={18} className="text-[var(--color-cyan)] shrink-0 mt-0.5" />
              <span className="text-sm text-white/75">Assistance disponible 24/7</span>
            </div>

            <a
              href={`https://wa.me/237${brand.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-ember)] hover:bg-[var(--color-ember-dim)] font-semibold py-3 transition-colors"
            >
              Discuter sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
