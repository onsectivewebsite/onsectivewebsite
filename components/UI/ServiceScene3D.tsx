import React, { useEffect, useRef, useState } from 'react';

/**
 * Service-specific 3D scroll-linked scenes.
 * Each service has a unique SVG-based scene that animates based on scroll position.
 * Scroll progress: 0 (just entered viewport) → 1 (about to leave).
 */

/* ------------------------------------------------------------------ */
/*  useScrollProgress — returns 0..1 based on element position         */
/* ------------------------------------------------------------------ */
const useScrollProgress = (ref: React.RefObject<HTMLElement>) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        // progress: 0 when element top hits bottom of viewport, 1 when element bottom hits top
        const total = rect.height + vh;
        const scrolled = vh - rect.top;
        const p = Math.max(0, Math.min(1, scrolled / total));
        setProgress(p);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ref]);
  return progress;
};

/* ------------------------------------------------------------------ */
/*  SHARED WRAPPER                                                    */
/* ------------------------------------------------------------------ */
const SceneWrap: React.FC<{ children: (p: number) => React.ReactNode; caption?: string; subcaption?: string }> = ({ children, caption, subcaption }) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(wrapRef);

  return (
    <section ref={wrapRef} className="relative min-h-[120vh] bg-[#0d2b45] overflow-hidden flex items-center">
      {/* Background grid */}
      <div className="absolute inset-0 perspective-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d2b45] via-[#0d2b45] to-[#0d2b45]/90 pointer-events-none" />

      {/* Sticky content */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Scene */}
          <div className="relative aspect-square max-w-[560px] w-full mx-auto" style={{ perspective: '1200px' }}>
            {children(progress)}
          </div>

          {/* Caption */}
          <div className="text-white max-w-lg">
            {caption && (
              <>
                <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-widest mb-5 block font-['Plus_Jakarta_Sans']">
                  Interactive Signal · Scroll to Engage
                </span>
                <h3 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold mb-6 leading-[1.1]">{caption}</h3>
              </>
            )}
            {subcaption && <p className="text-white/50 leading-relaxed font-['Plus_Jakarta_Sans'] text-base md:text-lg">{subcaption}</p>}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex-1 h-[3px] bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#c1912f] rounded-full transition-all" style={{ width: `${progress * 100}%` }} />
              </div>
              <span className="text-xs text-white/40 tabular-nums font-['Plus_Jakarta_Sans']">{Math.round(progress * 100)}%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  DIGITAL MARKETING — CAMERA ZOOM INTO LENS                         */
/* ------------------------------------------------------------------ */
export const CameraZoomScene: React.FC = () => (
  <SceneWrap
    caption="From Frame to Focus — Premium Creative Production."
    subcaption="Onsective's digital marketing practice zooms from brand narrative into pixel-precise creative execution. Every asset is cinema-graded, platform-optimised, and performance-instrumented."
  >
    {(p) => {
      // Camera body zooms in, lens expands, aperture opens, then inside-of-lens content reveals
      const bodyScale = 1 + p * 4;          // camera zooms
      const apertureOpen = p < 0.6 ? p / 0.6 : 1; // 0..1 by 60% scroll
      const innerReveal = Math.max(0, (p - 0.5) / 0.5);
      return (
        <svg viewBox="0 0 400 400" className="w-full h-full" style={{ transform: `scale(${1}) rotate(${p * 6}deg)`, transition: 'transform 0.05s linear' }}>
          <defs>
            <radialGradient id="lensGlass" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#c1912f" stopOpacity="0.9" />
              <stop offset="55%" stopColor="#0d2b45" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#000000" stopOpacity="1" />
            </radialGradient>
            <radialGradient id="innerLens" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity={0.8 * innerReveal} />
              <stop offset="100%" stopColor="#c1912f" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="body" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a1a2e" />
              <stop offset="100%" stopColor="#0d2b45" />
            </linearGradient>
          </defs>

          <g style={{ transformOrigin: '200px 200px', transform: `scale(${bodyScale})` }}>
            {/* Camera body */}
            <rect x="80" y="130" width="240" height="160" rx="18" fill="url(#body)" stroke="#c1912f" strokeOpacity="0.3" strokeWidth="2" />
            {/* Hot-shoe */}
            <rect x="150" y="110" width="100" height="30" rx="4" fill="#1a1a2e" stroke="#c1912f" strokeOpacity="0.4" />
            {/* Grip */}
            <rect x="280" y="150" width="40" height="140" rx="12" fill="#0a1f35" />
            {/* Lens outer */}
            <circle cx="200" cy="210" r="80" fill="#0a1f35" stroke="#c1912f" strokeOpacity="0.4" strokeWidth="3" />
            {/* Lens ring */}
            <circle cx="200" cy="210" r="70" fill="none" stroke="#c1912f" strokeOpacity="0.5" strokeWidth="1.5" />
            {/* Lens glass */}
            <circle cx="200" cy="210" r="62" fill="url(#lensGlass)" />
            {/* Aperture blades */}
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i / 8) * Math.PI * 2;
              const open = apertureOpen;
              const x1 = 200 + Math.cos(angle) * 58;
              const y1 = 210 + Math.sin(angle) * 58;
              const x2 = 200 + Math.cos(angle + Math.PI / 8) * (58 - open * 45);
              const y2 = 210 + Math.sin(angle + Math.PI / 8) * (58 - open * 45);
              return (
                <path
                  key={i}
                  d={`M 200 210 L ${x1} ${y1} L ${x2} ${y2} Z`}
                  fill="#1a1a2e"
                  opacity={0.85 - open * 0.6}
                />
              );
            })}
            {/* Inner image appearing through lens */}
            <circle cx="200" cy="210" r={62 * apertureOpen} fill="url(#innerLens)" opacity={innerReveal} />
            {/* Recording dot */}
            <circle cx="110" cy="150" r="5" fill="#ff3344" opacity={0.3 + 0.7 * Math.abs(Math.sin(p * 10))} />
            {/* Focus ring markings */}
            {Array.from({ length: 20 }).map((_, i) => (
              <rect
                key={i}
                x="199"
                y="135"
                width="2"
                height="8"
                fill="#c1912f"
                opacity="0.4"
                style={{ transformOrigin: '200px 210px', transform: `rotate(${i * 18 + p * 360}deg)` }}
              />
            ))}
          </g>
        </svg>
      );
    }}
  </SceneWrap>
);

/* ------------------------------------------------------------------ */
/*  CLOUD SERVICES — ROTATING SERVER RACK / CLOUD                      */
/* ------------------------------------------------------------------ */
export const CloudRackScene: React.FC = () => (
  <SceneWrap
    caption="Sovereign Infrastructure at Institutional Scale."
    subcaption="Watch the rack ascend into the cloud — the architectural shift from owned hardware to sovereign, elastic, globally-governed compute that compounds institutional advantage."
  >
    {(p) => (
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          <linearGradient id="cloudGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c1912f" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#c1912f" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="rackGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a4a6e" />
            <stop offset="100%" stopColor="#0d2b45" />
          </linearGradient>
        </defs>

        {/* Cloud above */}
        <g style={{ transformOrigin: '200px 120px', transform: `translateY(${-20 + p * 30}px) scale(${1 + p * 0.4})`, opacity: 0.4 + p * 0.6 }}>
          <ellipse cx="200" cy="120" rx="130" ry="40" fill="url(#cloudGrad)" />
          <ellipse cx="150" cy="100" rx="60" ry="30" fill="url(#cloudGrad)" opacity="0.7" />
          <ellipse cx="240" cy="105" rx="70" ry="35" fill="url(#cloudGrad)" opacity="0.7" />
        </g>

        {/* Rack rising */}
        <g style={{ transformOrigin: '200px 300px', transform: `translateY(${p * -80}px) rotateX(${10 - p * 10}deg)` }}>
          <rect x="140" y="200" width="120" height="180" rx="6" fill="url(#rackGrad)" stroke="#c1912f" strokeOpacity="0.35" strokeWidth="2" />
          {/* Server slots */}
          {Array.from({ length: 8 }).map((_, i) => (
            <g key={i}>
              <rect x="148" y={210 + i * 20} width="104" height="14" rx="2" fill="#0a1f35" />
              <circle cx={156 + p * 10} cy={217 + i * 20} r="2" fill={p > i / 8 ? '#c1912f' : '#334a62'} />
              <rect x="170" y={214 + i * 20} width={60 * (0.3 + p * 0.7)} height="6" fill="#c1912f" opacity="0.7" />
            </g>
          ))}
        </g>

        {/* Connecting data stream */}
        {Array.from({ length: 6 }).map((_, i) => {
          const offset = (p * 300 + i * 50) % 300;
          return (
            <circle
              key={i}
              cx={200 + Math.sin(i) * 8}
              cy={200 - offset * 0.6}
              r="2.5"
              fill="#c1912f"
              opacity={0.4 + Math.sin(p * 6 + i) * 0.3}
            />
          );
        })}
      </svg>
    )}
  </SceneWrap>
);

/* ------------------------------------------------------------------ */
/*  CYBERSECURITY — SHIELD WITH SCAN / BUILD-UP                        */
/* ------------------------------------------------------------------ */
export const ShieldScanScene: React.FC = () => (
  <SceneWrap
    caption="Zero-Trust Defence, Engineered in Layers."
    subcaption="As you scroll, watch Onsective's defence-in-depth architecture assemble — layer by layer — from perimeter to identity to data. Every layer assumes breach; every layer hardens the next."
  >
    {(p) => (
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          <radialGradient id="shieldCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c1912f" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#c1912f" stopOpacity="0.1" />
          </radialGradient>
        </defs>

        {/* Rings of defence */}
        {[160, 130, 100, 70].map((r, i) => (
          <circle
            key={i}
            cx="200"
            cy="210"
            r={r}
            fill="none"
            stroke="#c1912f"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            opacity={p > i / 5 ? 0.3 + 0.2 * Math.sin(p * 10 + i) : 0}
            style={{ transformOrigin: '200px 210px', transform: `rotate(${p * 90 + i * 30}deg)` }}
          />
        ))}

        {/* Shield body assembling — triangle segments */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2 - Math.PI / 2;
          const assemble = Math.max(0, Math.min(1, (p - 0.1) * 2 - i * 0.05));
          const r = 80 * assemble;
          const x = 200 + Math.cos(angle) * (60 - 60 * assemble);
          const y = 210 + Math.sin(angle) * (60 - 60 * assemble);
          return (
            <path
              key={i}
              d={`M 200 210 L ${x + Math.cos(angle - 0.3) * r * 0.8} ${y + Math.sin(angle - 0.3) * r * 0.8} L ${x + Math.cos(angle + 0.3) * r * 0.8} ${y + Math.sin(angle + 0.3) * r * 0.8} Z`}
              fill="#0d2b45"
              stroke="#c1912f"
              strokeWidth="1.5"
              opacity={assemble * 0.8}
            />
          );
        })}

        {/* Main shield shape */}
        <path
          d="M 200 140 L 275 170 L 275 240 Q 275 290 200 320 Q 125 290 125 240 L 125 170 Z"
          fill="#0d2b45"
          stroke="#c1912f"
          strokeWidth="2"
          opacity={0.2 + p * 0.6}
        />

        {/* Core glow */}
        <circle cx="200" cy="225" r={25 + p * 15} fill="url(#shieldCore)" opacity={p} />

        {/* Lock icon when shield complete */}
        <g opacity={Math.max(0, (p - 0.5) * 2)}>
          <rect x="188" y="215" width="24" height="22" rx="2" fill="#c1912f" />
          <path d="M 193 215 L 193 208 Q 193 200 200 200 Q 207 200 207 208 L 207 215" stroke="#c1912f" strokeWidth="3" fill="none" />
        </g>

        {/* Scan line sweeping */}
        <line
          x1="125"
          y1={140 + p * 180}
          x2="275"
          y2={140 + p * 180}
          stroke="#c1912f"
          strokeWidth="2"
          opacity={p > 0.1 && p < 0.95 ? 0.7 : 0}
        />
      </svg>
    )}
  </SceneWrap>
);

/* ------------------------------------------------------------------ */
/*  AI & AUTOMATION — NEURAL NETWORK / BRAIN                          */
/* ------------------------------------------------------------------ */
export const NeuralBrainScene: React.FC = () => {
  // Create a neural network with layered nodes
  const layers = [4, 6, 6, 3];
  const nodes: { x: number; y: number; layer: number }[] = [];
  layers.forEach((count, layerIdx) => {
    const x = 70 + (260 / (layers.length - 1)) * layerIdx;
    for (let i = 0; i < count; i++) {
      const y = 120 + (160 / (count - 1 || 1)) * i;
      nodes.push({ x, y, layer: layerIdx });
    }
  });

  return (
    <SceneWrap
      caption="Intelligence That Compounds with Every Interaction."
      subcaption="Onsective's AI practice deploys production-grade neural systems that learn continuously — from data ingress to human-in-the-loop feedback, every signal refines the model."
    >
      {(p) => (
        <svg viewBox="0 0 400 400" className="w-full h-full">
          {/* Connections */}
          {nodes.map((n, i) =>
            nodes.map((m, j) => {
              if (m.layer !== n.layer + 1) return null;
              const activation = Math.max(0, Math.min(1, p * 2 - n.layer * 0.2));
              return (
                <line
                  key={`${i}-${j}`}
                  x1={n.x}
                  y1={n.y}
                  x2={m.x}
                  y2={m.y}
                  stroke="#c1912f"
                  strokeWidth="1"
                  opacity={0.1 + activation * 0.4 * Math.abs(Math.sin(p * 10 + i + j))}
                />
              );
            })
          )}

          {/* Nodes */}
          {nodes.map((n, i) => {
            const fire = Math.max(0, Math.min(1, p * 3 - n.layer * 0.4));
            const pulse = 0.6 + 0.4 * Math.sin(p * 15 + i);
            return (
              <g key={i}>
                <circle cx={n.x} cy={n.y} r={12} fill="#0d2b45" stroke="#c1912f" strokeOpacity={0.2 + fire * 0.6} strokeWidth="1.5" />
                <circle cx={n.x} cy={n.y} r={8 * fire * pulse} fill="#c1912f" opacity={fire * 0.8} />
              </g>
            );
          })}

          {/* Output glow */}
          {nodes.filter(n => n.layer === layers.length - 1).map((n, i) => (
            <circle
              key={i}
              cx={n.x}
              cy={n.y}
              r={22 * p}
              fill="#c1912f"
              opacity={0.2 * p}
            />
          ))}

          {/* Labels */}
          <text x="70" y="90" textAnchor="middle" className="font-['Plus_Jakarta_Sans']" fontSize="10" fill="#c1912f" opacity={p}>INPUT</text>
          <text x="330" y="90" textAnchor="middle" className="font-['Plus_Jakarta_Sans']" fontSize="10" fill="#c1912f" opacity={p}>OUTPUT</text>
        </svg>
      )}
    </SceneWrap>
  );
};

/* ------------------------------------------------------------------ */
/*  IT STRATEGY — ROTATING STRATEGY CUBE                              */
/* ------------------------------------------------------------------ */
export const StrategyCubeScene: React.FC = () => (
  <SceneWrap
    caption="Every Facet of the Enterprise — Engineered as One."
    subcaption="Onsective's IT Strategy practice renders every dimension of your institution — capability, information, application, infrastructure — as a single, rotatable, coherent blueprint."
  >
    {(p) => {
      const rx = p * 60;
      const ry = p * 180;
      return (
        <svg viewBox="0 0 400 400" className="w-full h-full" style={{ perspective: '1000px' }}>
          <g style={{ transformOrigin: '200px 200px', transform: `rotateX(${rx}deg) rotateY(${ry}deg)`, transformBox: 'fill-box', transformStyle: 'preserve-3d' }}>
            {/* Cube approximation with 6 faces drawn flat, using transform-style:preserve-3d on parent */}
            {/* Front */}
            <g style={{ transform: 'translateZ(75px)', transformStyle: 'preserve-3d' }}>
              <rect x="125" y="125" width="150" height="150" fill="#0d2b45" stroke="#c1912f" strokeWidth="1.5" opacity="0.85" />
              <text x="200" y="210" textAnchor="middle" className="font-['Playfair_Display']" fontSize="22" fill="#c1912f" fontWeight="bold">STRATEGY</text>
            </g>
            {/* Back */}
            <g style={{ transform: 'translateZ(-75px) rotateY(180deg)' }}>
              <rect x="125" y="125" width="150" height="150" fill="#1a4a6e" stroke="#c1912f" strokeWidth="1.5" opacity="0.7" />
              <text x="200" y="210" textAnchor="middle" fontSize="22" fill="#c1912f" fontWeight="bold" className="font-['Playfair_Display']">VISION</text>
            </g>
            {/* Right */}
            <g style={{ transform: 'rotateY(90deg) translateZ(75px)' }}>
              <rect x="125" y="125" width="150" height="150" fill="#071a2e" stroke="#c1912f" strokeWidth="1.5" opacity="0.75" />
              <text x="200" y="210" textAnchor="middle" fontSize="20" fill="#c1912f" fontWeight="bold" className="font-['Playfair_Display']">ARCHITECTURE</text>
            </g>
            {/* Left */}
            <g style={{ transform: 'rotateY(-90deg) translateZ(75px)' }}>
              <rect x="125" y="125" width="150" height="150" fill="#1a2a3e" stroke="#c1912f" strokeWidth="1.5" opacity="0.75" />
              <text x="200" y="210" textAnchor="middle" fontSize="22" fill="#c1912f" fontWeight="bold" className="font-['Playfair_Display']">GOVERN</text>
            </g>
            {/* Top */}
            <g style={{ transform: 'rotateX(-90deg) translateZ(75px)' }}>
              <rect x="125" y="125" width="150" height="150" fill="#0a1f35" stroke="#c1912f" strokeWidth="1.5" opacity="0.8" />
              <text x="200" y="210" textAnchor="middle" fontSize="22" fill="#c1912f" fontWeight="bold" className="font-['Playfair_Display']">VALUE</text>
            </g>
            {/* Bottom */}
            <g style={{ transform: 'rotateX(90deg) translateZ(75px)' }}>
              <rect x="125" y="125" width="150" height="150" fill="#0a1f35" stroke="#c1912f" strokeWidth="1.5" opacity="0.8" />
              <text x="200" y="210" textAnchor="middle" fontSize="22" fill="#c1912f" fontWeight="bold" className="font-['Playfair_Display']">DATA</text>
            </g>
          </g>
          {/* Accent orbits */}
          <circle cx="200" cy="200" r={130 + p * 30} fill="none" stroke="#c1912f" strokeOpacity="0.25" strokeDasharray="3 8" />
        </svg>
      );
    }}
  </SceneWrap>
);

/* ------------------------------------------------------------------ */
/*  DIGITAL EXPERIENCE — PHONE → DESKTOP MORPH                        */
/* ------------------------------------------------------------------ */
export const DeviceMorphScene: React.FC = () => (
  <SceneWrap
    caption="One Experience, Every Device, Seamlessly Scaled."
    subcaption="Watch a single design system elastically morph from mobile to desktop — the same component tokens, the same brand intent, the same measurable conversion objective."
  >
    {(p) => {
      // Phone (aspect 9:19) → Tablet (4:3) → Desktop (16:9)
      const w = 120 + p * 200; // 120 to 320
      const h = 240 - p * 60;  // 240 to 180
      const x = 200 - w / 2;
      const y = 200 - h / 2;
      return (
        <svg viewBox="0 0 400 400" className="w-full h-full">
          {/* Device frame */}
          <rect x={x - 10} y={y - 15} width={w + 20} height={h + 30} rx={18 - p * 10} fill="#0a1f35" stroke="#c1912f" strokeWidth="2" strokeOpacity="0.6" />
          {/* Screen */}
          <rect x={x} y={y} width={w} height={h} fill="#0d2b45" rx={4} />
          {/* Content lines */}
          <rect x={x + 12} y={y + 16} width={w * 0.6} height="8" rx="2" fill="#c1912f" opacity="0.85" />
          <rect x={x + 12} y={y + 30} width={w * 0.85} height="4" rx="1" fill="#ffffff" opacity="0.35" />
          <rect x={x + 12} y={y + 38} width={w * 0.7} height="4" rx="1" fill="#ffffff" opacity="0.25" />

          {/* Responsive grid cards */}
          {Array.from({ length: p > 0.5 ? 3 : p > 0.2 ? 2 : 1 }).map((_, i) => (
            <rect
              key={i}
              x={x + 12 + i * ((w - 24) / (p > 0.5 ? 3 : p > 0.2 ? 2 : 1))}
              y={y + 60}
              width={(w - 24) / (p > 0.5 ? 3 : p > 0.2 ? 2 : 1) - 6}
              height={h - 90}
              rx="4"
              fill="#1a4a6e"
              opacity="0.6"
            />
          ))}

          {/* Home indicator (phone only) */}
          {p < 0.3 && <rect x={200 - 15} y={y + h - 10} width="30" height="3" rx="1.5" fill="#ffffff" opacity="0.4" />}

          {/* Desktop stand */}
          {p > 0.7 && <rect x="185" y={y + h + 20} width="30" height="30" fill="#0a1f35" />}
          {p > 0.7 && <rect x="155" y={y + h + 48} width="90" height="6" rx="3" fill="#0a1f35" />}
        </svg>
      );
    }}
  </SceneWrap>
);

/* ------------------------------------------------------------------ */
/*  ENTERPRISE SEO — MAGNIFIER + RISING RANKINGS                      */
/* ------------------------------------------------------------------ */
export const SearchRankScene: React.FC = () => (
  <SceneWrap
    caption="From Page 5 to Position One, Engineered at Scale."
    subcaption="Onsective's Enterprise SEO practice moves rankings with the discipline of an engineering project — every technical fix, every content cluster, every backlink measured for compounding organic value."
  >
    {(p) => (
      <svg viewBox="0 0 400 400" className="w-full h-full">
        {/* Search result bars climbing */}
        {Array.from({ length: 6 }).map((_, i) => {
          const target = 6 - i; // 6,5,4,3,2,1
          const current = p > i * 0.1 ? target : 6;
          const y = 80 + (current - 1) * 45;
          return (
            <g key={i} style={{ transition: 'all 0.3s' }}>
              <rect x="60" y={y} width={260 - i * 20} height="30" rx="4" fill="#0a1f35" stroke="#c1912f" strokeWidth="1" strokeOpacity={i === 0 ? 0.6 : 0.2} />
              <circle cx="78" cy={y + 15} r="4" fill={i === 0 ? '#c1912f' : '#334a62'} />
              <rect x="90" y={y + 10} width={180 - i * 15} height="4" rx="2" fill="#ffffff" opacity={i === 0 ? 0.9 : 0.3} />
              <rect x="90" y={y + 18} width={140 - i * 12} height="3" rx="1.5" fill="#ffffff" opacity={i === 0 ? 0.6 : 0.2} />
            </g>
          );
        })}

        {/* Magnifier sweeping down */}
        <g style={{ transform: `translate(${260 - p * 180}px, ${40 + p * 240}px)` }}>
          <circle cx="30" cy="30" r="28" fill="none" stroke="#c1912f" strokeWidth="3" />
          <line x1="48" y1="48" x2="72" y2="72" stroke="#c1912f" strokeWidth="5" strokeLinecap="round" />
          <circle cx="30" cy="30" r="22" fill="#c1912f" opacity="0.08" />
        </g>
      </svg>
    )}
  </SceneWrap>
);

/* ------------------------------------------------------------------ */
/*  SOCIAL — ORBITING PLATFORMS                                       */
/* ------------------------------------------------------------------ */
export const SocialOrbitScene: React.FC = () => (
  <SceneWrap
    caption="Orchestrated Presence Across Every Platform."
    subcaption="LinkedIn, Instagram, X, YouTube, TikTok, Facebook — Onsective's Social Capital practice orchestrates institutional presence across every channel with sovereign governance and compounding community growth."
  >
    {(p) => {
      const platforms = ['In', 'Ig', 'X', 'Yt', 'Tk', 'Fb'];
      return (
        <svg viewBox="0 0 400 400" className="w-full h-full">
          {/* Central brand */}
          <circle cx="200" cy="200" r={30 + p * 10} fill="#c1912f" opacity={0.9} />
          <text x="200" y="208" textAnchor="middle" fontSize="18" fill="#0d2b45" fontWeight="bold" className="font-['Playfair_Display']">O</text>

          {/* Orbits */}
          {[100, 140].map((r, oi) => (
            <circle
              key={oi}
              cx="200"
              cy="200"
              r={r}
              fill="none"
              stroke="#c1912f"
              strokeOpacity="0.2"
              strokeDasharray="2 6"
            />
          ))}

          {/* Platform satellites */}
          {platforms.map((name, i) => {
            const orbit = i < 3 ? 100 : 140;
            const speed = i < 3 ? 1 : -0.7;
            const base = (i / (i < 3 ? 3 : 3)) * Math.PI * 2 + p * Math.PI * 2 * speed;
            const x = 200 + Math.cos(base) * orbit;
            const y = 200 + Math.sin(base) * orbit;
            return (
              <g key={i}>
                <line x1="200" y1="200" x2={x} y2={y} stroke="#c1912f" strokeOpacity="0.15" strokeWidth="1" />
                <circle cx={x} cy={y} r="22" fill="#0d2b45" stroke="#c1912f" strokeWidth="1.5" strokeOpacity="0.6" />
                <text x={x} y={y + 4} textAnchor="middle" fontSize="12" fontWeight="bold" fill="#c1912f" className="font-['Plus_Jakarta_Sans']">{name}</text>
              </g>
            );
          })}
        </svg>
      );
    }}
  </SceneWrap>
);

/* ------------------------------------------------------------------ */
/*  CUSTOM SOFTWARE — CODE BRACKETS EXPANDING                         */
/* ------------------------------------------------------------------ */
export const CodeBracketScene: React.FC = () => (
  <SceneWrap
    caption="Bespoke Code, Institutional Grade, Infinite Horizon."
    subcaption="Watch Onsective's engineering stack unfold — from architectural brackets to production-grade systems engineered for sovereign scale, testable at every layer."
  >
    {(p) => (
      <svg viewBox="0 0 400 400" className="w-full h-full">
        {/* Left bracket */}
        <path
          d={`M ${140 - p * 60} 120 L ${100 - p * 80} 120 L ${100 - p * 80} 280 L ${140 - p * 60} 280`}
          fill="none"
          stroke="#c1912f"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Right bracket */}
        <path
          d={`M ${260 + p * 60} 120 L ${300 + p * 80} 120 L ${300 + p * 80} 280 L ${260 + p * 60} 280`}
          fill="none"
          stroke="#c1912f"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Code lines inside */}
        {Array.from({ length: 7 }).map((_, i) => {
          const reveal = Math.max(0, Math.min(1, (p - i * 0.08) * 3));
          const indent = [0, 20, 20, 40, 40, 20, 0][i];
          const colors = ['#c1912f', '#ffffff', '#ffffff', '#c1912f', '#ffffff', '#ffffff', '#c1912f'];
          const widths = [60, 120, 80, 100, 140, 80, 50];
          return (
            <rect
              key={i}
              x={155 + indent}
              y={135 + i * 18}
              width={widths[i] * reveal}
              height="4"
              rx="2"
              fill={colors[i]}
              opacity={0.4 + reveal * 0.6}
            />
          );
        })}

        {/* Cursor */}
        <rect
          x={155 + 20 + 80 * Math.min(1, p * 2)}
          y="171"
          width="2"
          height="12"
          fill="#c1912f"
          opacity={Math.abs(Math.sin(p * 20))}
        />

        {/* Compile indicator */}
        <g opacity={Math.max(0, (p - 0.7) * 3)}>
          <circle cx="200" cy="330" r="8" fill="#22c55e" />
          <text x="220" y="335" fontSize="11" fill="#ffffff" className="font-['Plus_Jakarta_Sans']" fontWeight="600">Build Succeeded</text>
        </g>
      </svg>
    )}
  </SceneWrap>
);

/* ------------------------------------------------------------------ */
/*  BRAND MANAGEMENT — MORPHING IDENTITY SHAPES                       */
/* ------------------------------------------------------------------ */
export const BrandMorphScene: React.FC = () => (
  <SceneWrap
    caption="A Sovereign Identity That Flexes Without Breaking."
    subcaption="Watch the mark morph — adapting shape, colour, and context while the institutional DNA stays invariant. This is brand governance as architecture, not restriction."
  >
    {(p) => {
      // Morph: circle → square → hexagon → diamond
      const morph = p * 3;
      const stage = Math.floor(morph);
      const t = morph - stage;
      const shapes = [
        // Circle
        () => <circle cx="200" cy="200" r="90" fill="#c1912f" />,
        // Square (rounded)
        () => <rect x="110" y="110" width="180" height="180" rx={90 * (1 - t)} fill="#c1912f" />,
        // Hexagon
        () => <polygon points="200,105 285,155 285,245 200,295 115,245 115,155" fill="#c1912f" />,
        // Diamond
        () => <polygon points="200,105 305,210 200,315 95,210" fill="#c1912f" />
      ];
      const currentShape = shapes[Math.min(stage, 3)]();

      return (
        <svg viewBox="0 0 400 400" className="w-full h-full">
          {/* Outer rotating ring */}
          <g style={{ transformOrigin: '200px 200px', transform: `rotate(${p * 360}deg)` }}>
            <circle cx="200" cy="200" r="140" fill="none" stroke="#c1912f" strokeOpacity="0.2" strokeWidth="2" strokeDasharray="6 10" />
          </g>

          {/* Main morphing shape */}
          <g style={{ transformOrigin: '200px 200px', transform: `rotate(${p * 90}deg)` }}>
            {currentShape}
          </g>

          {/* Center monogram */}
          <text x="200" y="212" textAnchor="middle" fontSize="48" fill="#0d2b45" fontWeight="bold" className="font-['Playfair_Display']">O</text>

          {/* Satellite tokens */}
          {Array.from({ length: 4 }).map((_, i) => {
            const a = (i / 4) * Math.PI * 2 + p * Math.PI;
            return (
              <circle
                key={i}
                cx={200 + Math.cos(a) * 160}
                cy={200 + Math.sin(a) * 160}
                r={6}
                fill="#c1912f"
                opacity="0.6"
              />
            );
          })}
        </svg>
      );
    }}
  </SceneWrap>
);

// ============================================================
// Mapping service id → scene
// ============================================================
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
  'brand-management': BrandMorphScene,
};

export const getSceneForService = (serviceId: string): React.FC | undefined => SCENE_MAP[serviceId];
