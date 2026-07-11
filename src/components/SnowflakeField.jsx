// Flocons décoratifs en arrière-plan — élément de signature de marque (moitié "Frío").
// Respecte prefers-reduced-motion (voir index.css).
export default function SnowflakeField({ count = 14, className = "" }) {
  const flakes = Array.from({ length: count }, (_, i) => {
    const left = (i * 137.5) % 100; // répartition pseudo-aléatoire régulière
    const size = 6 + ((i * 7) % 14);
    const duration = 14 + ((i * 5) % 12);
    const delay = (i * 1.3) % 10;
    const opacity = 0.15 + ((i * 3) % 5) * 0.05;
    return { left, size, duration, delay, opacity, id: i };
  });

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {flakes.map((f) => (
        <svg
          key={f.id}
          width={f.size}
          height={f.size}
          viewBox="0 0 24 24"
          fill="none"
          style={{
            position: "absolute",
            left: `${f.left}%`,
            top: "-5%",
            opacity: f.opacity,
            animation: `snowfall ${f.duration}s linear ${f.delay}s infinite`,
          }}
        >
          <g stroke="#22D3EE" strokeWidth="1.6" strokeLinecap="round">
            <path d="M12 2 L12 22" />
            <path d="M12 2 L9 5 M12 2 L15 5" />
            <path d="M12 22 L9 19 M12 22 L15 19" />
            <path d="M3.5 7 L20.5 17" />
            <path d="M3.5 7 L6.5 6 M3.5 7 L5 9.8" />
            <path d="M20.5 17 L17.5 18 M20.5 17 L19 14.2" />
            <path d="M20.5 7 L3.5 17" />
            <path d="M20.5 7 L17.5 6 M20.5 7 L19 9.8" />
            <path d="M3.5 17 L6.5 18 M3.5 17 L5 14.2" />
          </g>
        </svg>
      ))}
      <style>{`
        @keyframes snowfall {
          from { transform: translateY(0) rotate(0deg); }
          to { transform: translateY(110vh) rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          svg { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
