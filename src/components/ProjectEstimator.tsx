import { useState } from 'react';
import { Calculator, ArrowDown, Check, Clock, DollarSign, Sparkles } from 'lucide-react';
import { updateVisitorStatus } from '../data/tracker';

interface ProjectEstimatorProps {
  onApplyEstimateToContact: (scopeDetails: {
    service: string;
    tier: string;
    estimatedCost: string;
    timeline: string;
    addons: string[];
  }) => void;
}

export function ProjectEstimator({ onApplyEstimateToContact }: ProjectEstimatorProps) {
  const [selectedService, setSelectedService] = useState('Custom Website Development');
  const [selectedTier, setSelectedTier] = useState<'mvp' | 'growth' | 'enterprise'>('growth');
  const [selectedTimeline, setSelectedTimeline] = useState<'standard' | 'accelerated'>('standard');
  const [addons, setAddons] = useState<string[]>(['Domain, Hosting & DevOps Pipeline']);

  const services = [
    { name: 'Custom Website Development', inrMVP: 25000, inrGrowth: 50000, inrEnt: 95000, timeMVP: '10-15 days', timeGrowth: '15-25 days', timeEnt: '4-6 weeks' },
    { name: 'Mobile & Web App Development', inrMVP: 45000, inrGrowth: 85000, inrEnt: 160000, timeMVP: '3-4 weeks', timeGrowth: '4-7 weeks', timeEnt: '8-12 weeks' },
    { name: 'Custom AI Agents & LLM Integrations', inrMVP: 35000, inrGrowth: 70000, inrEnt: 130000, timeMVP: '2-3 weeks', timeGrowth: '3-5 weeks', timeEnt: '6-8 weeks' },
    { name: 'Business Workflow Automations', inrMVP: 20000, inrGrowth: 40000, inrEnt: 75000, timeMVP: '7-12 days', timeGrowth: '2-3 weeks', timeEnt: '3-5 weeks' },
    { name: 'Cloud Infrastructure & DevOps Support', inrMVP: 22000, inrGrowth: 42000, inrEnt: 80000, timeMVP: '7-10 days', timeGrowth: '2-3 weeks', timeEnt: '3-5 weeks' },
  ];

  const availableAddons = [
    { id: 'whatsapp', label: 'WhatsApp Business API Integration', cost: 12000 },
    { id: 'devops', label: 'Domain, Hosting & DevOps Pipeline', cost: 9000 },
    { id: 'rag', label: 'Private Document AI Knowledge Base', cost: 15000 },
    { id: 'sla', label: 'Ongoing Monthly SLA Support & Backups', cost: 10000 },
  ];

  const currentServiceObj = services.find((s) => s.name === selectedService) || services[0];

  let baseCost = currentServiceObj.inrGrowth;
  let timeline = currentServiceObj.timeGrowth;

  if (selectedTier === 'mvp') {
    baseCost = currentServiceObj.inrMVP;
    timeline = currentServiceObj.timeMVP;
  } else if (selectedTier === 'enterprise') {
    baseCost = currentServiceObj.inrEnt;
    timeline = currentServiceObj.timeEnt;
  }

  const addonCost = addons.reduce((sum, addonLabel) => {
    const item = availableAddons.find((a) => a.label === addonLabel);
    return sum + (item ? item.cost : 0);
  }, 0);

  const accelerationMultiplier = selectedTimeline === 'accelerated' ? 1.15 : 1.0;
  const totalMin = Math.round((baseCost + addonCost) * accelerationMultiplier);
  const totalMax = Math.round(totalMin * 1.25);

  const formattedEstimate = `₹${totalMin.toLocaleString('en-IN')} – ₹${totalMax.toLocaleString('en-IN')}`;

  const toggleAddon = (label: string) => {
    if (addons.includes(label)) {
      setAddons(addons.filter((a) => a !== label));
    } else {
      setAddons([...addons, label]);
    }
    updateVisitorStatus('Calculating Quote', 'Estimator');
  };

  const handleApply = () => {
    updateVisitorStatus('Calculating Quote', 'Applied Estimate');
    onApplyEstimateToContact({
      service: selectedService,
      tier: selectedTier.toUpperCase(),
      estimatedCost: formattedEstimate,
      timeline,
      addons,
    });
  };

  return (
    <section id="estimator" className="py-20 md:py-28 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-600 mb-3">
            <span>TRANSPARENT PRICING</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-slate-600">INSTANT QUOTE CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            Estimate Your Project Scope, Budget & Timeline
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Select your service requirements to view expected brackets. As soon as you submit, Ram Chavan and Varad Edke will review your brief and schedule an immediate consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Service Selection */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                1. Select Core Service Focus
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {services.map((s) => (
                  <button
                    key={s.name}
                    type="button"
                    onClick={() => {
                      setSelectedService(s.name);
                      updateVisitorStatus('Calculating Quote', 'Estimator Service Change');
                    }}
                    className={`p-3 text-left rounded-xl text-xs font-semibold transition-all border ${
                      selectedService === s.name
                        ? 'border-blue-600 bg-white text-blue-700 shadow-xs'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Scale / Tier */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                2. Project Scale & Complexity
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedTier('mvp')}
                  className={`p-4 text-left rounded-xl border transition-all ${
                    selectedTier === 'mvp'
                      ? 'border-blue-600 bg-white shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <p className="font-bold text-xs text-slate-900">MVP Starter</p>
                  <p className="text-[11px] text-slate-500 mt-1">Core features to validate fast</p>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedTier('growth')}
                  className={`p-4 text-left rounded-xl border transition-all ${
                    selectedTier === 'growth'
                      ? 'border-blue-600 bg-white shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <p className="font-bold text-xs text-slate-900">Growth & Scaling</p>
                  <p className="text-[11px] text-slate-500 mt-1">Complete integrated system</p>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedTier('enterprise')}
                  className={`p-4 text-left rounded-xl border transition-all ${
                    selectedTier === 'enterprise'
                      ? 'border-blue-600 bg-white shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <p className="font-bold text-xs text-slate-900">Enterprise Suite</p>
                  <p className="text-[11px] text-slate-500 mt-1">High traffic, custom security</p>
                </button>
              </div>
            </div>

            {/* 3. Addons */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                3. Optional Feature Add-ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {availableAddons.map((addon) => {
                  const isChecked = addons.includes(addon.label);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.label)}
                      className={`p-3 text-left rounded-xl text-xs transition-all border flex items-center justify-between ${
                        isChecked
                          ? 'border-blue-600 bg-blue-50/60 text-blue-900 font-semibold'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <span className="pr-2">{addon.label}</span>
                      <div
                        className={`w-4 h-4 rounded-md flex items-center justify-center border text-[10px] shrink-0 ${
                          isChecked
                            ? 'bg-blue-600 border-blue-600 text-white font-bold'
                            : 'border-slate-300 bg-white'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-100">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-mono text-slate-500 font-semibold">ESTIMATED BALLPARK</span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Fixed Milestone
                </span>
              </div>

              <div className="py-6">
                <p className="text-xs text-slate-500 mb-1">Estimated Investment Bracket</p>
                <p className="text-3xl font-extrabold text-slate-900 font-mono tracking-tight tabular-nums">
                  {formattedEstimate}
                </p>
                <p className="text-xs text-slate-500 mt-2">
                  Includes full Git source code transfer, Karvenagar office support, and post-launch warranty.
                </p>
              </div>

              <div className="space-y-3 py-4 border-t border-slate-100 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Selected Service:</span>
                  <span className="font-bold text-slate-900 truncate max-w-[200px]">{selectedService}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Complexity Tier:</span>
                  <span className="font-bold text-slate-900 uppercase">{selectedTier}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Estimated Delivery:</span>
                  <span className="font-mono font-bold text-blue-600">{timeline}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Included Modules:</span>
                  <span className="text-slate-700 font-medium">{addons.length} items</span>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleApply}
                  className="w-full py-3.5 px-4 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.98]"
                >
                  <span>Apply Scope to Inquiry & Contact</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </button>
                <p className="text-[11px] text-center text-slate-500 mt-2.5">
                  Submitting triggers instant email confirmation & callback from Ram Chavan or Varad Edke.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
