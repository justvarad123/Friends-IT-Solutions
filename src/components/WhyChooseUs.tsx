import { Zap, Code2, ShieldAlert, Headphones, CheckCircle2, Quote, MapPin } from 'lucide-react';
import { VALUE_PILLARS, TESTIMONIALS, COMPANY_INFO } from '../data/content';

export function WhyChooseUs() {
  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Zap className="w-5 h-5 text-blue-600" />;
      case 1:
        return <Code2 className="w-5 h-5 text-indigo-600" />;
      case 2:
        return <MapPin className="w-5 h-5 text-teal-600" />;
      case 3:
        return <Headphones className="w-5 h-5 text-purple-600" />;
      default:
        return <Zap className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-slate-50/60 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-600 mb-3">
            <span>WHY FRIENDS IT SOLUTIONS</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-slate-600">THE FOUNDERS' PROMISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            Why Businesses in Pune & Beyond Trust Ram Chavan & Varad Edke
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            We operate as your dedicated engineering core. No junior handoffs, no bloated administrative delays, and absolute transparency from day one.
          </p>
        </div>

        {/* 4 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {VALUE_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center">
                    {getPillarIcon(idx)}
                  </div>
                  <span className="text-xs font-mono text-blue-600 font-bold bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                    {pillar.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Sub-points */}
                <div className="space-y-2.5 mb-6">
                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metric bar */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-2xl font-extrabold text-slate-900 font-mono tabular-nums">
                    {pillar.metric}
                  </span>
                  <p className="text-[11px] text-slate-500 font-sans mt-0.5 font-medium">
                    {pillar.metricLabel}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Testimonials */}
        <div className="pt-12 border-t border-slate-200">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-600 mb-6">
            <span>CLIENT REVIEWS</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-slate-600">DIRECT EXPERIENCES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-6 h-6 text-blue-200 mb-4" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-slate-500 text-[11px]">{t.role}, {t.company}</p>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {t.stat}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
