import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, TrendingUp } from 'lucide-react';

/**
 * Interactive digital-marketing ROI calculator.
 * Inputs: monthly ad spend, current conversion rate, AOV.
 * Outputs: current revenue, projected revenue with Onsective's average
 * 3.2× conversion lift + 65% CPL reduction, and the delta.
 */
const fmt = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

const ROICalculator: React.FC = () => {
  const [spend, setSpend] = useState(50000);
  const [cr, setCr] = useState(2.0);
  const [aov, setAov] = useState(350);
  const [cpc, setCpc] = useState(4.5);

  const results = useMemo(() => {
    // Current state
    const clicks = spend / cpc;
    const conversions = clicks * (cr / 100);
    const revenue = conversions * aov;
    const roas = revenue / spend;

    // Onsective projection: 3.2× conversion lift, 65% CPL reduction
    // (proxy by 35% effective CPC reduction via better targeting).
    const onsectiveCpc = cpc * 0.6;
    const onsectiveClicks = spend / onsectiveCpc;
    const onsectiveCr = Math.min(15, cr * 3.2);
    const onsectiveConversions = onsectiveClicks * (onsectiveCr / 100);
    const onsectiveRevenue = onsectiveConversions * aov;
    const onsectiveRoas = onsectiveRevenue / spend;

    return {
      current: { clicks, conversions, revenue, roas },
      onsective: { clicks: onsectiveClicks, conversions: onsectiveConversions, revenue: onsectiveRevenue, roas: onsectiveRoas },
      delta: {
        revenue: onsectiveRevenue - revenue,
        roasX: onsectiveRoas / (roas || 1)
      }
    };
  }, [spend, cr, aov, cpc]);

  return (
    <section className="py-16 md:py-24 bg-[#0d2b45] relative overflow-hidden">
      <div className="absolute inset-0 perspective-grid opacity-15" />
      <div className="max-w-6xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c1912f]/10 border border-[#c1912f]/30 rounded-full mb-4">
            <Calculator size={14} className="text-[#c1912f]" />
            <span className="text-[11px] font-semibold text-[#c1912f] uppercase tracking-widest font-['Plus_Jakarta_Sans']">Interactive Tool</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-white mb-3">
            Project Your Onsective ROI
          </h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto font-['Plus_Jakarta_Sans']">
            Estimate the revenue uplift Onsective's digital marketing practice typically delivers. Based on our institutional benchmark of 3.2× conversion lift and 65% CPL reduction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Inputs */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-lg p-6 md:p-8">
            <h3 className="text-lg font-['Playfair_Display'] font-bold text-white mb-6">Your current state</h3>
            <div className="space-y-5">
              <Field label="Monthly ad spend (USD)" value={spend} onChange={setSpend} min={1000} max={2000000} step={1000} prefix="$" />
              <Field label="Current conversion rate (%)" value={cr} onChange={setCr} min={0.1} max={20} step={0.1} suffix="%" />
              <Field label="Average order value (USD)" value={aov} onChange={setAov} min={10} max={50000} step={10} prefix="$" />
              <Field label="Current cost per click (USD)" value={cpc} onChange={setCpc} min={0.1} max={100} step={0.1} prefix="$" />
            </div>
          </div>

          {/* Output */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Current */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-white/40 font-['Plus_Jakarta_Sans'] mb-4">Current performance</div>
              <dl className="space-y-3 text-sm">
                <Row label="Clicks / mo" value={Math.round(results.current.clicks).toLocaleString()} />
                <Row label="Conversions / mo" value={Math.round(results.current.conversions).toLocaleString()} />
                <Row label="Revenue / mo" value={fmt(results.current.revenue)} highlight={false} />
                <Row label="ROAS" value={`${results.current.roas.toFixed(2)}×`} />
              </dl>
            </div>

            {/* Onsective */}
            <div className="bg-[#c1912f]/10 border border-[#c1912f]/40 rounded-lg p-6">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[#c1912f] font-['Plus_Jakarta_Sans'] mb-4">
                <TrendingUp size={12} /> With Onsective
              </div>
              <dl className="space-y-3 text-sm">
                <Row label="Clicks / mo" value={Math.round(results.onsective.clicks).toLocaleString()} gold />
                <Row label="Conversions / mo" value={Math.round(results.onsective.conversions).toLocaleString()} gold />
                <Row label="Revenue / mo" value={fmt(results.onsective.revenue)} gold highlight />
                <Row label="ROAS" value={`${results.onsective.roas.toFixed(2)}×`} gold />
              </dl>
            </div>

            {/* Delta */}
            <div className="md:col-span-2 bg-gradient-to-br from-[#c1912f]/20 to-[#c1912f]/5 border border-[#c1912f]/40 rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <div className="text-[11px] font-semibold uppercase tracking-widest text-[#c1912f] font-['Plus_Jakarta_Sans'] mb-2">Projected Monthly Uplift</div>
                <div
                  className="font-['Playfair_Display'] font-bold text-white leading-none"
                  style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
                >
                  +{fmt(results.delta.revenue)}
                </div>
                <div className="text-sm text-white/60 mt-2 font-['Plus_Jakarta_Sans']">
                  That's {results.delta.roasX.toFixed(1)}× your current ROAS — compounding month over month.
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#c1912f] text-white font-semibold text-sm rounded-md font-['Plus_Jakarta_Sans'] hover:brightness-110 whitespace-nowrap shrink-0"
              >
                Claim This Uplift <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
        <p className="text-xs text-white/30 mt-6 text-center font-['Plus_Jakarta_Sans']">
          Projection model based on Onsective's aggregated client outcomes. Actual results depend on engagement scope, industry, and baseline quality. Not a commercial commitment.
        </p>
      </div>
    </section>
  );
};

const Field: React.FC<{
  label: string; value: number; onChange: (n: number) => void;
  min: number; max: number; step: number; prefix?: string; suffix?: string;
}> = ({ label, value, onChange, min, max, step, prefix, suffix }) => (
  <div>
    <label className="flex items-baseline justify-between text-xs font-semibold text-white/70 uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans']">
      <span>{label}</span>
      <span className="text-[#c1912f] text-sm normal-case font-bold tabular-nums">
        {prefix}{value.toLocaleString(undefined, { maximumFractionDigits: 2 })}{suffix}
      </span>
    </label>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full accent-[#c1912f]"
    />
  </div>
);

const Row: React.FC<{ label: string; value: string; gold?: boolean; highlight?: boolean }> = ({ label, value, gold, highlight }) => (
  <div className="flex justify-between items-baseline border-b border-white/5 pb-2 last:border-0">
    <dt className="text-white/55 font-['Plus_Jakarta_Sans']">{label}</dt>
    <dd className={`font-bold tabular-nums font-['Plus_Jakarta_Sans'] ${highlight ? 'text-lg' : 'text-base'} ${gold ? 'text-[#c1912f]' : 'text-white'}`}>{value}</dd>
  </div>
);

export default ROICalculator;
