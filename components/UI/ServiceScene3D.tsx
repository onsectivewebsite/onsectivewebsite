import React, { useEffect, useRef, useState } from 'react';

/**
 * Onsective — Service 3D Scroll Scenes
 *
 * Cinema-grade scroll-linked scenes, one per service. Each scene:
 *   - Never clips (SVG viewBox + object-contain sizing).
 *   - Lives inside a premium sticky stage with gold halo, ambient
 *     particles, and a stacked numeral backdrop.
 *   - Progresses from 0 → 1 as the user scrolls through the stage.
 */

// ------------------------------------------------------------------
// Progress hook: maps 0..1 to the *sticky-engaged window* of the
// tracked element. Scene idles at 0 before pinning, animates fully
// during pinning, and holds at 1 after — no dead zone.
// ------------------------------------------------------------------
const useScrollProgress = (ref: React.RefObject<HTMLElement>) => {
  const [p, setP] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const stickyRange = rect.height - vh;
        if (stickyRange <= 0) {
          // Section shorter than viewport — use simple entry/exit mapping.
          const total = rect.height + vh;
          const scrolled = vh - rect.top;
          setP(Math.max(0, Math.min(1, scrolled / total)));
          return;
        }
        const scrolledInSticky = -rect.top;
        setP(Math.max(0, Math.min(1, scrolledInSticky / stickyRange)));
      });
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ref]);
  return p;
};

// ------------------------------------------------------------------
// Premium stage wrapper — used by every scene.
// Never clips the scene.
// ------------------------------------------------------------------
interface StageProps {
  numeral: string;
  eyebrow: string;
  title: string;
  body: string;
  stat?: { value: string; label: string };
  children: (progress: number) => React.ReactNode;
}

const Stage: React.FC<StageProps> = ({ numeral, eyebrow, title, body, stat, children }) => {
  const track = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(track);

  return (
    <section
      ref={track}
      className="relative bg-[#0a1f35] text-white"
      style={{ minHeight: '120vh' }}
    >
      {/* Ambient layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: 'linear-gradient(to right, #c1912f 1px, transparent 1px), linear-gradient(to bottom, #c1912f 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f35] via-transparent to-[#0a1f35]" />
      </div>

      {/* Sticky stage — perfectly centered, never clipped */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Large numeral backdrop — scaled per viewport so it never overflows mobile */}
        <div
          className="absolute select-none pointer-events-none font-['Playfair_Display'] font-bold leading-none max-w-full overflow-hidden"
          style={{
            fontSize: 'clamp(8rem, 32vw, 40rem)',
            color: 'rgba(193,145,47,0.05)',
            letterSpacing: '-0.05em',
            transform: `translateY(${-8 + progress * 8}px)`
          }}
        >
          {numeral}
        </div>

        {/* Floating particles */}
        {Array.from({ length: 18 }).map((_, i) => {
          const seed = i * 37.3;
          const x = (seed * 13) % 100;
          const delay = (seed * 7) % 12;
          const dur = 14 + (seed % 10);
          return (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#c1912f]"
              style={{
                left: `${x}%`,
                bottom: 0,
                opacity: 0.35,
                animation: `floatUp ${dur}s linear ${delay}s infinite`
              }}
            />
          );
        })}

        {/* Content grid */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-5 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-14 items-center">
          {/* Caption — magazine feel */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-8">
              <span className="text-[#c1912f] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] font-['Plus_Jakarta_Sans']">
                {eyebrow}
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#c1912f]/60 to-transparent" />
            </div>
            <h3
              className="font-['Playfair_Display'] font-bold text-white leading-[1.02] mb-4 sm:mb-7"
              style={{ fontSize: 'clamp(1.5rem, 4.2vw, 3.75rem)', letterSpacing: '-0.02em' }}
            >
              {title}
            </h3>
            <p className="text-white/55 font-['Plus_Jakarta_Sans'] leading-[1.7] text-sm sm:text-base md:text-lg max-w-xl">
              {body}
            </p>

            {stat && (
              <div className="mt-6 sm:mt-10 inline-flex items-baseline gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-5 border border-[#c1912f]/25 rounded-sm bg-white/[0.02] backdrop-blur-sm">
                <span
                  className="font-['Playfair_Display'] font-bold text-[#c1912f] leading-none"
                  style={{ fontSize: 'clamp(1.75rem, 4vw, 3.5rem)' }}
                >
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/50 font-['Plus_Jakarta_Sans']">
                  {stat.label}
                </span>
              </div>
            )}
          </div>

          {/* Scene — sized with both width AND height caps so it never clips */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex items-center justify-center w-full">
            <div
              className="relative flex items-center justify-center aspect-square mx-auto w-full"
              style={{ maxWidth: '560px', maxHeight: '55vh' }}
            >
              {/* Gold halo */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(193,145,47,0.22) 0%, rgba(193,145,47,0.08) 30%, transparent 65%)',
                  filter: 'blur(20px)',
                  transform: `scale(${0.9 + progress * 0.3})`
                }}
              />
              {/* Scene content */}
              <div className="relative w-full h-full flex items-center justify-center">
                {children(progress)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes for particles */}
      <style>{`
        @keyframes floatUp {
          0%   { transform: translateY(0) translateX(0); opacity: 0; }
          10%  { opacity: 0.35; }
          90%  { opacity: 0.25; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

// ==================================================================
// DIGITAL MARKETING — Camera zoom into lens
// ==================================================================
export const CameraZoomScene: React.FC = () => (
  <Stage
    numeral="01"
    eyebrow="Digital Marketing · Chapter 01"
    title="From Wide Frame to Pixel-Precise Focus."
    body="Onsective's digital marketing practice zooms from brand narrative into cinema-grade creative execution. Every asset is platform-optimised, performance-instrumented, and engineered to convert institutional attention into qualified pipeline."
    stat={{ value: '5.2×', label: 'Average ROAS' }}
  >
    {(p) => {
      const apertureOpen = Math.min(1, p * 1.4);
      const innerReveal = Math.max(0, (p - 0.5) * 2);
      const lensRadius = 62 + p * 14;
      return (
        <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <defs>
            <radialGradient id="lensGlass2" cx="50%" cy="45%" r="55%">
              <stop offset="0%" stopColor="#e8c874" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#c1912f" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#0d2b45" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#000" />
            </radialGradient>
            <radialGradient id="innerBeam" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity={innerReveal * 0.95} />
              <stop offset="55%" stopColor="#c1912f" stopOpacity={innerReveal * 0.4} />
              <stop offset="100%" stopColor="#c1912f" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a1a2e" />
              <stop offset="100%" stopColor="#050a15" />
            </linearGradient>
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Camera body — stays put, only lens expands */}
          <g transform={`translate(200,210) scale(${1 + p * 0.08}) translate(-200,-210)`}>
            {/* Shadow beneath */}
            <ellipse cx="200" cy="320" rx="130" ry="12" fill="#000" opacity="0.45" />
            {/* Main body */}
            <rect x="80" y="150" width="240" height="150" rx="14" fill="url(#bodyGrad)" stroke="#c1912f" strokeOpacity="0.35" />
            {/* Top panel */}
            <path d="M 80 150 L 120 120 L 280 120 L 320 150 Z" fill="#0a1020" stroke="#c1912f" strokeOpacity="0.25" />
            {/* Viewfinder */}
            <rect x="170" y="108" width="60" height="18" rx="2" fill="#050a15" stroke="#c1912f" strokeOpacity="0.3" />
            {/* Grip */}
            <rect x="275" y="160" width="45" height="130" rx="10" fill="#050a15" />
            <rect x="280" y="170" width="35" height="110" rx="6" fill="#1a1a2e" opacity="0.7" />
            {/* Grip texture lines */}
            {Array.from({ length: 14 }).map((_, i) => (
              <line key={i} x1="285" y1={175 + i * 7} x2="312" y2={175 + i * 7} stroke="#c1912f" strokeOpacity="0.15" strokeWidth="0.5" />
            ))}
            {/* Mode dial */}
            <circle cx="125" cy="145" r="10" fill="#1a1a2e" stroke="#c1912f" strokeOpacity="0.3" />
            <circle cx="125" cy="145" r="4" fill="#c1912f" opacity="0.8" />
            {/* Flash */}
            <rect x="155" y="135" width="30" height="12" rx="2" fill="#0a1020" stroke="#c1912f" strokeOpacity="0.25" />
            {/* REC indicator */}
            <circle cx="105" cy="168" r="4" fill="#ff3344" opacity={0.35 + 0.65 * Math.abs(Math.sin(p * 12))} filter="url(#softGlow)" />
            <text x="115" y="172" fontSize="9" fontWeight="600" fill="#c1912f" opacity="0.7" className="font-['Plus_Jakarta_Sans']">REC</text>

            {/* LENS ASSEMBLY */}
            {/* Outer barrel */}
            <circle cx="200" cy="225" r={lensRadius + 22} fill="#050a15" stroke="#c1912f" strokeOpacity="0.5" strokeWidth="1.5" />
            {/* Focus ring teeth */}
            {Array.from({ length: 36 }).map((_, i) => {
              const a = (i / 36) * Math.PI * 2 + p * Math.PI * 0.5;
              const x1 = 200 + Math.cos(a) * (lensRadius + 18);
              const y1 = 225 + Math.sin(a) * (lensRadius + 18);
              const x2 = 200 + Math.cos(a) * (lensRadius + 22);
              const y2 = 225 + Math.sin(a) * (lensRadius + 22);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#c1912f" strokeOpacity="0.45" strokeWidth="0.8" />;
            })}
            {/* Inner lens barrel */}
            <circle cx="200" cy="225" r={lensRadius + 10} fill="#0a1020" stroke="#c1912f" strokeOpacity="0.3" />
            {/* Aperture/glass */}
            <circle cx="200" cy="225" r={lensRadius} fill="url(#lensGlass2)" />
            {/* Highlights */}
            <ellipse cx={180 - p * 6} cy={205 - p * 4} rx={lensRadius * 0.25} ry={lensRadius * 0.15} fill="#ffffff" opacity="0.35" />
            <ellipse cx={215 + p * 4} cy={245 + p * 4} rx={lensRadius * 0.12} ry={lensRadius * 0.07} fill="#ffffff" opacity="0.15" />

            {/* Aperture blades closing/opening */}
            {Array.from({ length: 10 }).map((_, i) => {
              const angle = (i / 10) * Math.PI * 2;
              const close = 1 - apertureOpen;
              const inner = lensRadius * 0.4 * close;
              const outer = lensRadius * 0.95;
              const x1 = 200 + Math.cos(angle) * outer;
              const y1 = 225 + Math.sin(angle) * outer;
              const x2 = 200 + Math.cos(angle + 0.4) * inner;
              const y2 = 225 + Math.sin(angle + 0.4) * inner;
              return (
                <path
                  key={i}
                  d={`M 200 225 L ${x1} ${y1} L ${x2} ${y2} Z`}
                  fill="#050a15"
                  opacity={0.7 * close + 0.2}
                />
              );
            })}

            {/* Inner reveal (image through open lens) */}
            <circle cx="200" cy="225" r={lensRadius * 0.85 * apertureOpen} fill="url(#innerBeam)" />
            {/* Image hints inside lens once open */}
            {innerReveal > 0.3 && (
              <g opacity={innerReveal * 0.9}>
                {Array.from({ length: 3 }).map((_, i) => (
                  <rect
                    key={i}
                    x={170 + i * 14}
                    y={215 - i * 4}
                    width={10}
                    height={14 + i * 4}
                    rx="2"
                    fill="#c1912f"
                    opacity={0.6}
                  />
                ))}
              </g>
            )}
          </g>
        </svg>
      );
    }}
  </Stage>
);

// ==================================================================
// CLOUD SERVICES — Server rack + rising cloud
// ==================================================================
export const CloudRackScene: React.FC = () => (
  <Stage
    numeral="02"
    eyebrow="Cloud Services · Chapter 02"
    title="Sovereign Infrastructure, Engineered to Ascend."
    body="Watch the rack lift into the cloud — the architectural shift from owned hardware to elastic, globally-governed, institutional-grade compute. Every workload is assessed, migrated, and optimised with zero downtime."
    stat={{ value: '35%', label: 'Average cost reduction' }}
  >
    {(p) => (
      <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="cloudGrad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e8c874" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#c1912f" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="rackGrad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a4a6e" />
            <stop offset="100%" stopColor="#0a1f35" />
          </linearGradient>
          <filter id="cloudBlur">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        {/* Upper cloud */}
        <g transform={`translate(0, ${p * 20 - 10})`} opacity={0.5 + p * 0.5}>
          <g filter="url(#cloudBlur)">
            <ellipse cx="200" cy="110" rx="130" ry="36" fill="url(#cloudGrad2)" />
            <ellipse cx="150" cy="95" rx="55" ry="25" fill="url(#cloudGrad2)" opacity="0.7" />
            <ellipse cx="245" cy="100" rx="65" ry="30" fill="url(#cloudGrad2)" opacity="0.7" />
          </g>
          {/* Crisp cloud edge */}
          <path
            d="M 90 130 Q 100 90, 150 85 Q 175 65, 205 80 Q 240 55, 270 85 Q 305 90, 305 130 Z"
            fill="none"
            stroke="#c1912f"
            strokeOpacity="0.4"
            strokeWidth="1"
          />
        </g>

        {/* Connecting data columns */}
        {[170, 200, 230].map((x, col) => (
          <g key={col}>
            {Array.from({ length: 8 }).map((_, i) => {
              const yBase = 150;
              const offset = ((p * 220 + i * 18 + col * 6) % 120);
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={yBase - offset}
                  r={1.5}
                  fill="#c1912f"
                  opacity={0.55 - (offset / 120) * 0.5}
                />
              );
            })}
          </g>
        ))}

        {/* Rack */}
        <g transform={`translate(0, ${-p * 14})`}>
          {/* Rack shadow */}
          <ellipse cx="200" cy="370" rx="90" ry="8" fill="#000" opacity="0.45" />
          {/* Rack frame */}
          <rect x="130" y="180" width="140" height="180" rx="6" fill="url(#rackGrad2)" stroke="#c1912f" strokeOpacity="0.35" strokeWidth="1.5" />
          {/* Rack header */}
          <rect x="130" y="180" width="140" height="18" rx="6" fill="#0a1f35" />
          <circle cx="255" cy="189" r="2.5" fill="#22c55e" opacity="0.9" />
          <circle cx="245" cy="189" r="2.5" fill="#c1912f" opacity="0.9" />

          {/* Slots */}
          {Array.from({ length: 8 }).map((_, i) => {
            const active = p > i / 8;
            const y = 206 + i * 19;
            return (
              <g key={i}>
                <rect x="140" y={y} width="120" height="14" rx="2" fill="#05101c" />
                <rect x="140" y={y} width="120" height="14" rx="2" fill="none" stroke="#1a4a6e" strokeOpacity="0.6" />
                {/* Activity LEDs */}
                <circle cx="148" cy={y + 7} r="1.8" fill={active ? '#c1912f' : '#334a62'} />
                <circle cx="154" cy={y + 7} r="1.8" fill={active ? '#22c55e' : '#334a62'} />
                {/* Data bar */}
                <rect x="165" y={y + 4} width={(active ? 1 : 0.3) * 85} height="6" rx="1" fill="#c1912f" opacity="0.7" />
                {/* Detail */}
                <line x1="160" y1={y + 7} x2="160" y2={y + 7} stroke="#c1912f" strokeOpacity="0.4" />
              </g>
            );
          })}

          {/* Bottom vent */}
          <rect x="140" y="352" width="120" height="4" rx="1" fill="#050a15" opacity="0.6" />
        </g>
      </svg>
    )}
  </Stage>
);

// ==================================================================
// CYBERSECURITY — Shield assembly + scan
// ==================================================================
export const ShieldScanScene: React.FC = () => (
  <Stage
    numeral="03"
    eyebrow="Cybersecurity · Chapter 03"
    title="Defence Assembled in Zero-Trust Layers."
    body="As you scroll, Onsective's defence-in-depth architecture assembles — from perimeter through identity to data. Every layer assumes breach; every layer hardens the next; every signal is monitored by our sovereign 24/7 SOC."
    stat={{ value: '<15m', label: 'Mean time to detect' }}
  >
    {(p) => (
      <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="shieldCore2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e8c874" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#c1912f" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#c1912f" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="shieldBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a4a6e" />
            <stop offset="100%" stopColor="#0a1f35" />
          </linearGradient>
        </defs>

        {/* Concentric rings */}
        {[170, 140, 115, 90].map((r, i) => (
          <circle
            key={i}
            cx="200"
            cy="210"
            r={r}
            fill="none"
            stroke="#c1912f"
            strokeOpacity={p > i / 6 ? 0.25 : 0}
            strokeWidth="1"
            strokeDasharray="3 9"
            transform={`rotate(${p * 40 + i * 22} 200 210)`}
          />
        ))}

        {/* Shield outline */}
        <path
          d="M 200 120 L 280 150 L 280 230 Q 280 290 200 320 Q 120 290 120 230 L 120 150 Z"
          fill="url(#shieldBody)"
          stroke="#c1912f"
          strokeOpacity="0.55"
          strokeWidth="1.5"
          opacity={0.2 + p * 0.75}
        />

        {/* Assembling segments */}
        {Array.from({ length: 6 }).map((_, i) => {
          const assemble = Math.max(0, Math.min(1, (p - 0.1 - i * 0.06) * 2.2));
          if (assemble <= 0) return null;
          const a1 = (i / 6) * Math.PI * 2 - Math.PI / 2;
          const a2 = ((i + 1) / 6) * Math.PI * 2 - Math.PI / 2;
          const r = 70;
          const x1 = 200 + Math.cos(a1) * r;
          const y1 = 220 + Math.sin(a1) * r;
          const x2 = 200 + Math.cos(a2) * r;
          const y2 = 220 + Math.sin(a2) * r;
          return (
            <path
              key={i}
              d={`M 200 220 L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z`}
              fill="#0d2b45"
              stroke="#c1912f"
              strokeOpacity={assemble * 0.7}
              strokeWidth="1"
              opacity={assemble * 0.5}
            />
          );
        })}

        {/* Core glow */}
        <circle cx="200" cy="220" r={24 + p * 18} fill="url(#shieldCore2)" opacity={0.3 + p * 0.7} />

        {/* Lock */}
        <g opacity={Math.max(0, (p - 0.45) * 2)}>
          <rect x="186" y="215" width="28" height="25" rx="3" fill="#c1912f" />
          <rect x="186" y="215" width="28" height="25" rx="3" fill="none" stroke="#e8c874" strokeOpacity="0.5" />
          <path d="M 192 215 L 192 206 Q 192 197 200 197 Q 208 197 208 206 L 208 215" stroke="#c1912f" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <circle cx="200" cy="227" r="2.5" fill="#0d2b45" />
          <line x1="200" y1="228" x2="200" y2="234" stroke="#0d2b45" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Horizontal scan beam */}
        <g opacity={p > 0.05 && p < 0.98 ? 1 : 0}>
          <rect x="120" y={145 + p * 165} width="160" height="2" fill="#c1912f" opacity="0.85" />
          <rect x="120" y={143 + p * 165} width="160" height="8" fill="url(#shieldCore2)" opacity="0.3" />
        </g>
      </svg>
    )}
  </Stage>
);

// ==================================================================
// AI & AUTOMATION — Neural network
// ==================================================================
export const NeuralBrainScene: React.FC = () => {
  const layers = [4, 6, 6, 3];
  const nodes: { x: number; y: number; layer: number }[] = [];
  layers.forEach((count, layerIdx) => {
    const x = 70 + (260 / (layers.length - 1)) * layerIdx;
    for (let i = 0; i < count; i++) {
      const y = 130 + (140 / Math.max(1, count - 1)) * i;
      nodes.push({ x, y, layer: layerIdx });
    }
  });

  return (
    <Stage
      numeral="04"
      eyebrow="AI & Automation · Chapter 04"
      title="Intelligence That Compounds With Every Signal."
      body="Onsective's AI practice deploys production-grade neural systems that learn continuously. Every signal — from data ingress through human-in-the-loop feedback — refines the model, engineering measurable ROI within 90 days."
      stat={{ value: '95%+', label: 'Model accuracy' }}
    >
      {(p) => (
        <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <defs>
            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e8c874" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#c1912f" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Input / output labels */}
          <text x={nodes[0].x} y="95" textAnchor="middle" fontSize="9" fill="#c1912f" opacity={0.6 * p} className="font-['Plus_Jakarta_Sans']" letterSpacing="2">
            INPUT
          </text>
          <text x={nodes[nodes.length - 1].x} y="95" textAnchor="middle" fontSize="9" fill="#c1912f" opacity={0.6 * p} className="font-['Plus_Jakarta_Sans']" letterSpacing="2">
            OUTPUT
          </text>

          {/* Edges */}
          {nodes.map((n, i) =>
            nodes.map((m, j) => {
              if (m.layer !== n.layer + 1) return null;
              const activation = Math.max(0, Math.min(1, p * 1.8 - n.layer * 0.18));
              if (activation <= 0) return null;
              const pulse = 0.5 + 0.5 * Math.sin(p * 8 + i + j);
              return (
                <line
                  key={`e-${i}-${j}`}
                  x1={n.x}
                  y1={n.y}
                  x2={m.x}
                  y2={m.y}
                  stroke="#c1912f"
                  strokeWidth="0.8"
                  opacity={0.12 + activation * 0.5 * pulse}
                />
              );
            })
          )}

          {/* Nodes */}
          {nodes.map((n, i) => {
            const fire = Math.max(0, Math.min(1, p * 2.4 - n.layer * 0.35));
            const pulse = 0.65 + 0.35 * Math.sin(p * 12 + i);
            return (
              <g key={`n-${i}`}>
                {/* Soft glow ring */}
                {fire > 0 && (
                  <circle cx={n.x} cy={n.y} r={18 * fire * pulse} fill="url(#nodeGlow)" opacity={fire * 0.7} />
                )}
                {/* Node core */}
                <circle cx={n.x} cy={n.y} r="11" fill="#0a1f35" stroke="#c1912f" strokeOpacity={0.25 + fire * 0.6} strokeWidth="1.4" />
                <circle cx={n.x} cy={n.y} r={7 * fire * pulse} fill="#c1912f" opacity={fire * 0.85} />
              </g>
            );
          })}
        </svg>
      )}
    </Stage>
  );
};

// ==================================================================
// IT STRATEGY — HTML-CSS 3D Cube (SVG can't reliably do preserve-3d)
// ==================================================================
export const StrategyCubeScene: React.FC = () => (
  <Stage
    numeral="05"
    eyebrow="IT Strategy · Chapter 05"
    title="Every Dimension of the Institution — Engineered as One."
    body="Onsective's IT Strategy practice renders every dimension of your enterprise — capability, information, application, infrastructure — as a single rotatable blueprint. One coherent system, defensible to the board and executable by engineering."
    stat={{ value: '40%', label: 'OpEx reduction' }}
  >
    {(p) => {
      const rx = -20 + p * 40;
      const ry = -20 + p * 420;
      const faces: { label: string; transform: string; shade: number }[] = [
        { label: 'STRATEGY',     transform: 'rotateY(0deg) translateZ(100px)',       shade: 0.95 },
        { label: 'ARCHITECTURE', transform: 'rotateY(90deg) translateZ(100px)',      shade: 0.78 },
        { label: 'VISION',       transform: 'rotateY(180deg) translateZ(100px)',     shade: 0.62 },
        { label: 'GOVERN',       transform: 'rotateY(-90deg) translateZ(100px)',     shade: 0.78 },
        { label: 'VALUE',        transform: 'rotateX(90deg) translateZ(100px)',      shade: 0.88 },
        { label: 'DATA',         transform: 'rotateX(-90deg) translateZ(100px)',     shade: 0.7 }
      ];
      return (
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{ perspective: '1400px' }}
        >
          <div
            style={{
              position: 'relative',
              width: '200px',
              height: '200px',
              transformStyle: 'preserve-3d',
              transform: `rotateX(${rx}deg) rotateY(${ry}deg)`,
              transition: 'transform 0.08s linear'
            }}
          >
            {faces.map((f) => (
              <div
                key={f.label}
                className="absolute inset-0 flex items-center justify-center font-['Playfair_Display'] font-bold border border-[#c1912f]/40"
                style={{
                  background: `linear-gradient(135deg, rgba(13,43,69,${f.shade}) 0%, rgba(10,31,53,${f.shade}) 100%)`,
                  color: '#c1912f',
                  fontSize: '22px',
                  letterSpacing: '0.08em',
                  transform: f.transform,
                  boxShadow: 'inset 0 0 30px rgba(193,145,47,0.08)'
                }}
              >
                {f.label}
              </div>
            ))}
            {/* Edge highlights */}
            {faces.map((f, i) => (
              <div
                key={`edge-${i}`}
                className="absolute inset-0 border border-[#c1912f]/20 pointer-events-none"
                style={{ transform: f.transform }}
              />
            ))}
          </div>

          {/* Orbiting marker dots */}
          <div
            className="absolute w-full h-full rounded-full pointer-events-none"
            style={{
              border: '1px dashed rgba(193,145,47,0.15)',
              borderRadius: '50%',
              width: '80%',
              height: '80%',
              transform: `rotate(${p * 180}deg)`
            }}
          />
        </div>
      );
    }}
  </Stage>
);

// ==================================================================
// DIGITAL EXPERIENCE — Device morph
// ==================================================================
export const DeviceMorphScene: React.FC = () => (
  <Stage
    numeral="06"
    eyebrow="Digital Experience · Chapter 06"
    title="One System, Every Surface, Institutional Fidelity."
    body="Watch a single design system elastically morph from mobile to desktop — the same tokens, the same brand intent, the same measurable conversion objective. WCAG 2.1 AA engineered in from the first pixel."
    stat={{ value: '3.2×', label: 'Conversion lift' }}
  >
    {(p) => {
      const w = 110 + p * 220;
      const h = 240 - p * 70;
      const x = 200 - w / 2;
      const y = 210 - h / 2;
      const cornerRadius = 20 - p * 14;
      const cols = p > 0.6 ? 3 : p > 0.3 ? 2 : 1;
      return (
        <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0d2b45" />
              <stop offset="100%" stopColor="#071a2e" />
            </linearGradient>
          </defs>

          {/* Device frame */}
          <rect
            x={x - 12}
            y={y - 16}
            width={w + 24}
            height={h + 32}
            rx={cornerRadius}
            fill="#050a15"
            stroke="#c1912f"
            strokeOpacity="0.55"
            strokeWidth="1.5"
          />

          {/* Screen */}
          <rect x={x} y={y} width={w} height={h} rx={cornerRadius * 0.4} fill="url(#screenGrad)" />

          {/* Header block */}
          <rect x={x + 12} y={y + 14} width={w * 0.55} height="7" rx="2" fill="#c1912f" opacity="0.9" />
          <rect x={x + 12} y={y + 26} width={w * 0.85} height="3" rx="1" fill="#ffffff" opacity="0.35" />
          <rect x={x + 12} y={y + 32} width={w * 0.65} height="3" rx="1" fill="#ffffff" opacity="0.25" />

          {/* Cards */}
          {Array.from({ length: cols }).map((_, i) => {
            const cardW = (w - 24 - (cols - 1) * 8) / cols;
            return (
              <g key={i}>
                <rect
                  x={x + 12 + i * (cardW + 8)}
                  y={y + 56}
                  width={cardW}
                  height={h - 80}
                  rx="4"
                  fill="#1a4a6e"
                  opacity="0.7"
                />
                <rect
                  x={x + 18 + i * (cardW + 8)}
                  y={y + 64}
                  width={cardW - 12}
                  height="4"
                  rx="1"
                  fill="#c1912f"
                  opacity="0.8"
                />
                <rect
                  x={x + 18 + i * (cardW + 8)}
                  y={y + 72}
                  width={(cardW - 12) * 0.7}
                  height="2"
                  rx="1"
                  fill="#ffffff"
                  opacity="0.35"
                />
              </g>
            );
          })}

          {/* Home indicator (mobile only) */}
          {p < 0.35 && (
            <rect x={200 - 18} y={y + h - 7} width="36" height="3" rx="1.5" fill="#ffffff" opacity="0.45" />
          )}

          {/* Desktop stand */}
          {p > 0.75 && (
            <g>
              <path d={`M 182 ${y + h + 24} L 218 ${y + h + 24} L 225 ${y + h + 50} L 175 ${y + h + 50} Z`} fill="#0a1f35" />
              <rect x="145" y={y + h + 50} width="110" height="6" rx="3" fill="#0a1f35" />
            </g>
          )}
        </svg>
      );
    }}
  </Stage>
);

// ==================================================================
// ENTERPRISE SEO — Rising rankings + magnifier
// ==================================================================
export const SearchRankScene: React.FC = () => (
  <Stage
    numeral="07"
    eyebrow="Enterprise SEO · Chapter 07"
    title="From Position 14 to Position One, Engineered at Scale."
    body="Onsective's Enterprise SEO practice treats rankings with the discipline of a trading floor — every technical fix, every topic cluster, every backlink measured for compounding organic value across 50+ markets."
    stat={{ value: '340%', label: 'Organic traffic lift' }}
  >
    {(p) => {
      const rows = 6;
      return (
        <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          {/* Ranking rows */}
          {Array.from({ length: rows }).map((_, i) => {
            // Each row starts at a high position (6) and ascends to position (i+1)
            const target = i + 1;
            const start = rows;
            const threshold = i * 0.12;
            const eased = Math.max(0, Math.min(1, (p - threshold) * 2));
            const pos = start - (start - target) * eased;
            const y = 90 + (pos - 1) * 36;
            const isTop = Math.abs(pos - 1) < 0.05;
            return (
              <g key={i}>
                {/* Result card */}
                <rect
                  x={70}
                  y={y}
                  width={260 - i * 10}
                  height="28"
                  rx="3"
                  fill="#0a1f35"
                  stroke="#c1912f"
                  strokeOpacity={isTop ? 0.7 : 0.18}
                  strokeWidth={isTop ? 1.5 : 1}
                />
                {/* Position badge */}
                <rect x={76} y={y + 7} width="14" height="14" rx="2" fill={isTop ? '#c1912f' : '#334a62'} />
                <text
                  x={83}
                  y={y + 17}
                  textAnchor="middle"
                  fontSize="9"
                  fontWeight="700"
                  fill={isTop ? '#0d2b45' : '#c1912f'}
                  className="font-['Plus_Jakarta_Sans']"
                >
                  {Math.round(pos)}
                </text>
                {/* Title */}
                <rect x={96} y={y + 8} width={150 - i * 8} height="3.5" rx="1" fill="#ffffff" opacity={isTop ? 0.92 : 0.35} />
                {/* URL */}
                <rect x={96} y={y + 15} width={90 - i * 6} height="2.5" rx="1" fill="#c1912f" opacity={isTop ? 0.8 : 0.4} />
                {/* Description */}
                <rect x={96} y={y + 21} width={130 - i * 10} height="2" rx="1" fill="#ffffff" opacity={isTop ? 0.5 : 0.2} />
              </g>
            );
          })}

          {/* Magnifier sweeping */}
          <g transform={`translate(${260 - p * 180}, ${60 + p * 220})`}>
            <circle cx="30" cy="30" r="26" fill="rgba(193,145,47,0.08)" stroke="#c1912f" strokeWidth="2.5" />
            <line x1="48" y1="48" x2="70" y2="70" stroke="#c1912f" strokeWidth="4.5" strokeLinecap="round" />
            {/* Cross-hair */}
            <line x1="10" y1="30" x2="50" y2="30" stroke="#c1912f" strokeOpacity="0.35" />
            <line x1="30" y1="10" x2="30" y2="50" stroke="#c1912f" strokeOpacity="0.35" />
            <circle cx="30" cy="30" r="3" fill="#c1912f" />
          </g>
        </svg>
      );
    }}
  </Stage>
);

// ==================================================================
// SOCIAL MEDIA — Orbiting platforms
// ==================================================================
export const SocialOrbitScene: React.FC = () => (
  <Stage
    numeral="08"
    eyebrow="Social Media · Chapter 08"
    title="Orchestrated Presence Across Every Channel."
    body="LinkedIn, Instagram, X, YouTube, TikTok, Facebook — Onsective's Social Capital practice orchestrates institutional presence across every platform with sovereign governance, crisis protocols, and compounding community growth."
    stat={{ value: '400%', label: 'Engagement growth' }}
  >
    {(p) => {
      const inner = ['LI', 'IG', 'X'];
      const outer = ['YT', 'TT', 'FB'];
      return (
        <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <defs>
            <radialGradient id="centralGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e8c874" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#c1912f" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Central brand */}
          <circle cx="200" cy="210" r={55} fill="url(#centralGlow)" opacity={0.8} />
          <circle cx="200" cy="210" r="30" fill="#c1912f" />
          <circle cx="200" cy="210" r="30" fill="none" stroke="#e8c874" strokeWidth="1" opacity="0.5" />
          <text x="200" y="218" textAnchor="middle" fontSize="20" fontWeight="700" fill="#0d2b45" className="font-['Playfair_Display']">O</text>

          {/* Orbit rings */}
          <circle cx="200" cy="210" r={105} fill="none" stroke="#c1912f" strokeOpacity="0.2" strokeDasharray="2 8" />
          <circle cx="200" cy="210" r={150} fill="none" stroke="#c1912f" strokeOpacity="0.15" strokeDasharray="2 10" />

          {/* Inner orbit */}
          {inner.map((name, i) => {
            const a = (i / inner.length) * Math.PI * 2 + p * Math.PI * 2;
            const x = 200 + Math.cos(a) * 105;
            const y = 210 + Math.sin(a) * 105;
            return (
              <g key={name}>
                <line x1="200" y1="210" x2={x} y2={y} stroke="#c1912f" strokeOpacity="0.1" />
                <circle cx={x} cy={y} r="20" fill="#0a1f35" stroke="#c1912f" strokeWidth="1.5" strokeOpacity="0.7" />
                <text x={x} y={y + 4} textAnchor="middle" fontSize="11" fontWeight="700" fill="#c1912f" className="font-['Plus_Jakarta_Sans']">{name}</text>
              </g>
            );
          })}

          {/* Outer orbit (counter-rotating) */}
          {outer.map((name, i) => {
            const a = (i / outer.length) * Math.PI * 2 - p * Math.PI * 1.4 + Math.PI;
            const x = 200 + Math.cos(a) * 150;
            const y = 210 + Math.sin(a) * 150;
            return (
              <g key={name}>
                <circle cx={x} cy={y} r="18" fill="#0d2b45" stroke="#c1912f" strokeWidth="1.2" strokeOpacity="0.55" />
                <text x={x} y={y + 3.5} textAnchor="middle" fontSize="10" fontWeight="700" fill="#c1912f" className="font-['Plus_Jakarta_Sans']">{name}</text>
              </g>
            );
          })}
        </svg>
      );
    }}
  </Stage>
);

// ==================================================================
// CUSTOM SOFTWARE — Code brackets
// ==================================================================
export const CodeBracketScene: React.FC = () => (
  <Stage
    numeral="09"
    eyebrow="Custom Software · Chapter 09"
    title="Bespoke Code, Institutional Grade, Infinite Horizon."
    body="Watch Onsective's engineering stack unfold — from architectural brackets to production-grade systems, every layer peer-reviewed, every deploy automated, every release de-risked with progressive delivery."
    stat={{ value: '99.9%', label: 'Uptime SLA' }}
  >
    {(p) => (
      <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Left bracket */}
        <path
          d={`M ${155 - p * 40} 135 L ${125 - p * 55} 135 L ${125 - p * 55} 285 L ${155 - p * 40} 285`}
          fill="none"
          stroke="#c1912f"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Right bracket */}
        <path
          d={`M ${245 + p * 40} 135 L ${275 + p * 55} 135 L ${275 + p * 55} 285 L ${245 + p * 40} 285`}
          fill="none"
          stroke="#c1912f"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Code lines */}
        {Array.from({ length: 8 }).map((_, i) => {
          const reveal = Math.max(0, Math.min(1, (p - i * 0.06) * 2.5));
          const indent = [0, 18, 18, 36, 36, 18, 0, 0][i];
          const colors = ['#c1912f', '#ffffff', '#c1912f', '#ffffff', '#c1912f', '#ffffff', '#ffffff', '#c1912f'];
          const widths = [55, 110, 90, 100, 130, 80, 60, 45];
          return (
            <rect
              key={i}
              x={165 + indent}
              y={150 + i * 17}
              width={widths[i] * reveal}
              height="3.5"
              rx="1.5"
              fill={colors[i]}
              opacity={0.4 + reveal * 0.55}
            />
          );
        })}

        {/* Cursor blink */}
        <rect
          x={200}
          y={182}
          width="2"
          height="12"
          fill="#c1912f"
          opacity={Math.abs(Math.sin(p * 14))}
        />

        {/* Build success */}
        <g opacity={Math.max(0, (p - 0.7) * 3)}>
          <circle cx="200" cy="320" r="9" fill="#22c55e" />
          <path d="M 196 320 L 199 323 L 205 317" stroke="#0d2b45" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <text x="218" y="324" fontSize="11" fontWeight="600" fill="#ffffff" className="font-['Plus_Jakarta_Sans']" opacity="0.85">Build Succeeded · v1.0.0</text>
        </g>
      </svg>
    )}
  </Stage>
);

// ==================================================================
// BRAND MANAGEMENT — Morphing identity shapes
// ==================================================================
export const BrandMorphScene: React.FC = () => (
  <Stage
    numeral="10"
    eyebrow="Brand Management · Chapter 10"
    title="A Sovereign Identity That Flexes Without Breaking."
    body="Watch the mark morph — adapting shape, context, and surface while the institutional DNA stays invariant. This is brand governance as architecture, not restriction."
    stat={{ value: '85%', label: 'Brand recall lift' }}
  >
    {(p) => {
      const stage = Math.min(3, Math.floor(p * 3));
      const t = p * 3 - stage;
      const shapes = [
        <circle key="c" cx="200" cy="210" r="95" fill="#c1912f" />,
        <rect key="r" x="105" y="115" width="190" height="190" rx={95 * (1 - t)} fill="#c1912f" />,
        <polygon key="h" points="200,115 293,167 293,253 200,305 107,253 107,167" fill="#c1912f" />,
        <polygon key="d" points="200,115 295,210 200,305 105,210" fill="#c1912f" />
      ];

      return (
        <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <defs>
            <radialGradient id="brandGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e8c874" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#c1912f" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Rotating dashed ring */}
          <circle
            cx="200"
            cy="210"
            r="150"
            fill="none"
            stroke="#c1912f"
            strokeOpacity="0.2"
            strokeDasharray="4 10"
            transform={`rotate(${p * 360} 200 210)`}
          />

          {/* Glow */}
          <circle cx="200" cy="210" r="120" fill="url(#brandGlow)" opacity={0.5 + p * 0.3} />

          {/* Morphing shape */}
          <g transform={`rotate(${p * 90} 200 210)`}>
            {shapes[stage]}
          </g>

          {/* Monogram */}
          <text x="200" y="226" textAnchor="middle" fontSize="52" fontWeight="700" fill="#0a1f35" className="font-['Playfair_Display']">
            O
          </text>

          {/* Satellite tokens */}
          {Array.from({ length: 4 }).map((_, i) => {
            const a = (i / 4) * Math.PI * 2 + p * Math.PI;
            const x = 200 + Math.cos(a) * 165;
            const y = 210 + Math.sin(a) * 165;
            return <circle key={i} cx={x} cy={y} r="5" fill="#c1912f" opacity="0.7" />;
          })}
        </svg>
      );
    }}
  </Stage>
);

// ==================================================================
// Mapping
// ==================================================================
export const SCENE_MAP: Record<string, React.FC> = {
  'digital-marketing': CameraZoomScene,
  'cloud-services': CloudRackScene,
  'cybersecurity': ShieldScanScene,
  'ai-automation': NeuralBrainScene,
  'it-strategy': StrategyCubeScene,
  'digital-experience': DeviceMorphScene,
  'enterprise-seo': SearchRankScene,
  'social-capital': SocialOrbitScene,
  'custom-software': CodeBracketScene,
  'brand-management': BrandMorphScene
};

export const getSceneForService = (serviceId: string): React.FC | undefined => SCENE_MAP[serviceId];
