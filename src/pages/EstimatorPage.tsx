import { ProjectEstimator } from '../components/ProjectEstimator';
import { useRouter } from '../context/RouterContext';
import { Calculator, ShieldCheck, CheckCircle2, Phone, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export function EstimatorPage() {
  const { navigate, routeParams } = useRouter();

  const handleApplyEstimate = (scopeDetails: {
    service: string;
    tier: string;
    estimatedCost: string;
    timeline: string;
    addons: string[];
  }) => {
    const summary = `${scopeDetails.service} (${scopeDetails.tier.toUpperCase()} Tier) · Estimated: ${scopeDetails.estimatedCost} · Timeline: ${scopeDetails.timeline}`;
    navigate('contact', { estimate: summary, service: scopeDetails.service });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-10">
      {/* Page Title */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider">
          <Calculator className="w-3.5 h-3.5" />
          <span>Interactive Scope & Pricing</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Transparent sprint timeline & cost calculator.
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Configure your product requirements below. We provide immediate cost ranges, recommended architecture frameworks, and sprint estimates with zero hidden fees.
        </p>

        {routeParams.service && (
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-800 flex items-center gap-2">
            <span className="font-semibold">Selected Service:</span>
            <span>{routeParams.service}</span>
          </div>
        )}
      </div>

      {/* Main Estimator Engine */}
      <ProjectEstimator onApplyEstimateToContact={handleApplyEstimate} />

      {/* Direct Booking Alternative */}
      <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5">
          <h3 className="text-base font-bold text-slate-900">Need a detailed custom Request for Proposal (RFP)?</h3>
          <p className="text-xs text-slate-600">
            Schedule a 30-minute discovery call directly with Ram Chavan or Varad Edke. We provide detailed line-item milestones.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => navigate('book')}
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-2 transition-colors shadow-xs"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Founder Call</span>
          </button>
          <a
            href={`tel:${COMPANY_INFO.varadPhone}`}
            className="px-4 py-2.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-2 transition-colors"
          >
            <Phone className="w-4 h-4 text-emerald-600" />
            <span>Call Varad</span>
          </a>
        </div>
      </div>
    </div>
  );
}
