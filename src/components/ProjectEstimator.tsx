import { useState } from 'react';
import { Calculator, ArrowDown, Check, Clock, DollarSign, Sparkles, MessageCircle, Copy, CheckCircle2 } from 'lucide-react';
import { updateVisitorStatus } from '../data/tracker';
import { COMPANY_INFO } from '../data/content';

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
  const [copied, setCopied] = useState(false);

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

  const quoteSummaryText = `Friends IT Solutions - Project Scope Quote
Service: ${selectedService}
Scale Tier: ${selectedTier.toUpperCase()}
Estimated Cost: ${formattedEstimate}
Timeline: ${timeline}
Urgency: ${selectedTimeline === 'accelerated' ? 'Accelerated Priority Sprint' : 'Standard Sprint'}
Add-on Modules: ${addons.join(', ') || 'None'}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(quoteSummaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(`Hello Ram & Varad! I calculated a project estimate on your website:\n\n${quoteSummaryText}\n\nCan we discuss starting this?`);
    window.open(`https://wa.me/918329863893?text=${text}`, '_blank');
  };

  return (
    <section id="estimator" className="py-20 md:py-28 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-600 mb-3">
            <span>TRANSPARENT PRICING</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-slate-600">DYNAMIC SCOPE CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            Interactive Scope, Budget & Delivery Estimator
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Customize your technology requirements to get an instantaneous realistic budget and timeline bracket. You can lock in this scope or send it directly to Ram Chavan & Varad Edke on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Service Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                1. Select Core Service
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {services.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => {
                      setSelectedService(item.name);
                      updateVisitorStatus('Calculating Quote', item.name);
                    }}
                    className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all ${
                      selectedService === item.name
                        ? 'border-blue-600 bg-blue-50/50 text-blue-900 shadow-xs ring-1 ring-blue-600/30'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.name}</span>
                      {selectedService === item.name && (
                        <Check className="w-4 h-4 text-blue-600 shrink-0 ml-2" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Scale Tier */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                2. Project Scale & Complexity
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'mvp', title: 'Lean MVP', desc: 'Fast market test (10-15 days)' },
                  { id: 'growth', title: 'Growth Tier', desc: 'Full custom product (3-4 wks)' },
                  { id: 'enterprise', title: 'Enterprise', desc: 'High scale & security (6+ wks)' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => {
                      setSelectedTier(tier.id as any);
                      updateVisitorStatus('Calculating Quote', `Tier: ${tier.title}`);
                    }}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      selectedTier === tier.id
                        ? 'border-blue-600 bg-blue-50/50 shadow-xs ring-1 ring-blue-600/30'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <p className={`text-xs font-bold ${selectedTier === tier.id ? 'text-blue-900' : 'text-slate-900'}`}>
                      {tier.title}
                    </p>
                    <p className="text-[10px] text-slate-500 mt-1">{tier.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Add-on Modules */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                3. Optional Add-on Modules
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {availableAddons.map((addon) => {
                  const isChecked = addons.includes(addon.label);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.label)}
                      className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between text-xs ${
                        isChecked
                          ? 'border-blue-600 bg-blue-50/40 text-blue-900 font-semibold'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center ${
                            isChecked ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <span>{addon.label}</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 font-medium ml-2">
                        +₹{addon.cost.toLocaleString('en-IN')}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Delivery Urgency */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                4. Delivery Urgency
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedTimeline('standard')}
                  className={`p-3 rounded-xl border text-xs font-semibold transition-all ${
                    selectedTimeline === 'standard'
                      ? 'border-blue-600 bg-blue-50/50 text-blue-900 shadow-xs'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <p className="font-bold">Standard Sprint</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">Regular milestone schedule</p>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTimeline('accelerated')}
                  className={`p-3 rounded-xl border text-xs font-semibold transition-all ${
                    selectedTimeline === 'accelerated'
                      ? 'border-blue-600 bg-blue-50/50 text-blue-900 shadow-xs'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <p className="font-bold">Accelerated Priority (+15%)</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">Dedicated engineering sprint</p>
                </button>
              </div>
            </div>
          </div>

          {/* Dynamic Calculated Summary Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-6 md:p-8 rounded-2xl border border-slate-200 bg-slate-50 shadow-lg shadow-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider">
                    ESTIMATED BUDGET BRACKET
                  </span>
                  <span className="text-[11px] font-mono text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    REAL-TIME CALC
                  </span>
                </div>

                <div className="py-6">
                  <span className="text-xs text-slate-500 font-medium block mb-1">Estimated Cost (INR):</span>
                  <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight text-blue-600">
                    {formattedEstimate}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-600">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>Estimated Turnaround: <strong className="text-slate-900">{timeline}</strong></span>
                  </div>
                </div>

                {/* Scope Breakdown */}
                <div className="space-y-2 py-4 border-t border-slate-200 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Base Service:</span>
                    <strong className="text-slate-900 text-right">{selectedService}</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Selected Scale:</span>
                    <strong className="text-slate-900">{selectedTier.toUpperCase()}</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Add-ons Included:</span>
                    <strong className="text-slate-900">{addons.length} selected</strong>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-600 space-y-1">
                  <p className="font-semibold text-slate-800">Milestone Payment Structure:</p>
                  <p>• 30% on Architecture Kickoff</p>
                  <p>• 40% after testing Working Staging Release</p>
                  <p>• 30% upon Production Launch & Full Code Handover</p>
                </div>
              </div>

              {/* Dynamic Action Buttons */}
              <div className="mt-6 pt-6 border-t border-slate-200 space-y-2.5">
                <button
                  type="button"
                  onClick={handleApply}
                  className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 transition-all active:scale-98"
                >
                  <ArrowDown className="w-4 h-4" />
                  <span>Lock In Scope & Auto-Fill Contact Form</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all text-center"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send to WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="py-2.5 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-all text-center"
                  >
                    {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
