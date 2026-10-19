import { useState } from 'react';
import { Globe, Smartphone, Cpu, Zap, Cloud, Layout, ArrowRight, Check, Clock, X } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/content';

interface ServicesProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export function Services({ onSelectServiceForQuote }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-600" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-indigo-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-teal-600" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-600" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-sky-600" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-rose-600" />;
      default:
        return <Globe className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-600 mb-3">
            <span>CORE SERVICES</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-slate-600">WHAT WE BUILD FOR CLIENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            Complete Digital Solutions Engineered for Practical Business Growth
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            From modern responsive websites to autonomous AI support agents and cross-platform mobile apps—Friends IT Solutions crafts fast, reliable software tailored to your goals.
          </p>
        </div>

        {/* 6-Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const editorialIndex = `0${index + 1}.`;
            return (
              <div
                key={service.id}
                className="group p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg hover:shadow-slate-100 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="font-mono text-xs text-slate-400 font-semibold tabular-nums">
                      {editorialIndex}
                    </span>
                  </div>

                  <div className="text-xs text-blue-600 font-semibold mb-1">
                    {service.category}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Feature checklist */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Row */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1.5"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectServiceForQuote(service.title)}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detailed Modal in Clean Light Theme */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="max-w-2xl w-full bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center">
                  {getServiceIcon(selectedService.iconName)}
                </div>
                <div>
                  <span className="text-xs text-blue-600 font-bold">{selectedService.category}</span>
                  <h3 className="text-xl font-bold text-slate-900">{selectedService.title}</h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {selectedService.longDesc}
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Scope & Architectural Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                      <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {selectedService.techStack.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-100 rounded-md border border-slate-200 text-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-600 font-medium">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>Standard Delivery Timeline:</span>
                </div>
                <span className="font-bold text-slate-900 font-mono text-sm">{selectedService.typicalTimeline}</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForQuote(title);
                }}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>Request Scope for this Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
