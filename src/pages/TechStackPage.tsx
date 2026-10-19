import { TechStackExplorer } from '../components/TechStackExplorer';
import { useRouter } from '../context/RouterContext';
import { Code2, Server, ShieldCheck, Zap, GitBranch, ArrowRight } from 'lucide-react';

export function TechStackPage() {
  const { navigate } = useRouter();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      {/* Page Title */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider">
          <Code2 className="w-3.5 h-3.5" />
          <span>Technology Architecture</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Modern, type-safe stack for high-scale applications.
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          We intentionally select modern frameworks that guarantee fast render speeds, strict type validation, and painless long-term maintainability.
        </p>
      </div>

      {/* Main Interactive Stack Explorer */}
      <TechStackExplorer />

      {/* Engineering Tenets Grid */}
      <div className="pt-6 border-t border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-6">Our Engineering Tenets</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Zap className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">Zero Technical Debt</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Strict linting rules, automated type validation, and modular component encapsulation prevent codebase rot.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">Security By Default</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              OWASP Top 10 defenses, encrypted environment configurations, and parameterized SQL queries to block injection attacks.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <GitBranch className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">Continuous Staging Deploys</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every Friday, a live preview release is deployed to staging so you test real progress before approving milestones.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Action */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold">Ready to discuss your stack requirements?</h4>
          <p className="text-xs text-slate-400">Our founders evaluate your existing architecture and recommend the ideal stack.</p>
        </div>
        <button
          type="button"
          onClick={() => navigate('book')}
          className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0"
        >
          <span>Schedule Tech Review</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
