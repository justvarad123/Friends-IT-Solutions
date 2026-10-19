import { Calendar, GitBranch, Shield, MapPin, CheckCircle2, Clock, Phone, Sparkles } from 'lucide-react';
import { CLIENT_COMMITMENTS, COMPANY_INFO } from '../data/content';

export function WhyChooseUs() {
  const icons = [
    <Calendar key="cal" className="w-5 h-5 text-blue-600" />,
    <GitBranch key="git" className="w-5 h-5 text-indigo-600" />,
    <Shield key="shield" className="w-5 h-5 text-emerald-600" />,
    <MapPin key="map" className="w-5 h-5 text-teal-600" />,
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-600 mb-3">
            <span>ENGINEERING COMMITMENTS</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-slate-600">HOW WE WORK WITH YOU</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            Transparent Milestone Delivery with Full Client Ownership
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Traditional software consultancies charge huge retainers with slow communication. At Friends IT Solutions, you collaborate directly with Ram Chavan and Varad Edke to build working digital products on predictable sprint schedules.
          </p>
        </div>

        {/* 4 Working Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CLIENT_COMMITMENTS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center">
                    {icons[idx % icons.length]}
                  </div>
                  <span className="text-xs font-mono text-blue-600 font-bold bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Sub-points */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metric bar */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-mono text-xs font-bold text-slate-900">{item.metric}</span>
                <span className="text-slate-500 text-[11px]">{item.metricLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
