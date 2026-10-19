import { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/content';
import { useRouter } from '../context/RouterContext';
import { CheckCircle2, ArrowRight, Clock, Layers, Sparkles, Filter, Code2, ShieldCheck } from 'lucide-react';

export function ServicesPage() {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'web', label: 'Web Applications' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ai', label: 'AI & Automations' },
    { id: 'cloud', label: 'Cloud & Infrastructure' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => {
        if (selectedCategory === 'web') return s.category.toLowerCase().includes('web') || s.id.includes('web');
        if (selectedCategory === 'mobile') return s.category.toLowerCase().includes('mobile') || s.id.includes('mobile');
        if (selectedCategory === 'ai') return s.category.toLowerCase().includes('ai') || s.id.includes('ai');
        if (selectedCategory === 'cloud') return s.category.toLowerCase().includes('cloud') || s.id.includes('cloud') || s.id.includes('database');
        return true;
      });

  const handleSelectService = (service: ServiceItem) => {
    navigate('estimator', { service: service.title });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5" />
          <span>Engineering Offerings</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Software services crafted with production rigor.
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          From early architecture prototypes to mission-critical platforms, we deliver modular codebases with strict type safety, complete test suites, and transparent documentation.
        </p>

        {/* Filter Pills / Segmented Controls */}
        <div className="pt-2 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === c.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredServices.map((svc) => (
          <div
            key={svc.id}
            className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                  {svc.category}
                </span>
                <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {svc.typicalTimeline}
                </span>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900">{svc.title}</h2>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{svc.longDesc}</p>
              </div>

              {/* Key Features */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                  Deliverables Included
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  {svc.deliverables.map((d, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="space-y-1.5 pt-2">
                <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                  Primary Technology Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {svc.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[11px] font-mono bg-slate-100 text-slate-700 rounded border border-slate-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <span className="text-xs text-slate-500">Fixed Milestone Pricing</span>
              <button
                type="button"
                onClick={() => handleSelectService(svc)}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <span>Get Instant Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Assurance Banner */}
      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">Custom Architectural Requirements?</h4>
            <p className="text-xs text-slate-600">
              We provide tailored solutions for enterprise compliance, high security, and offline edge systems.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate('book')}
          className="px-4 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-semibold shrink-0 transition-colors"
        >
          Schedule Technical Discovery Call
        </button>
      </div>
    </div>
  );
}
