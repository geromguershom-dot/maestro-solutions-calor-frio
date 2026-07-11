import SnowflakeField from "./SnowflakeField";

export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="relative bg-[var(--color-midnight)] pt-[72px] overflow-hidden">
      <div className="pointer-events-none absolute -top-20 -left-20 w-[320px] h-[320px] rounded-full bg-[var(--color-cyan)]/15 blur-[100px]" />
      <div className="pointer-events-none absolute -top-20 -right-20 w-[320px] h-[320px] rounded-full bg-[var(--color-ember)]/15 blur-[100px]" />
      <SnowflakeField count={8} />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-14 md:py-20">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-cyan)] mb-3">
          {eyebrow}
        </p>
        <h1 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight max-w-2xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-white/65 max-w-xl leading-relaxed">{subtitle}</p>
        )}
      </div>

      <div className="thermal-divider" />
    </section>
  );
}
