import { Contact } from '../components/Contact';
import { useRouter } from '../context/RouterContext';
import { Mail, Phone, MapPin, Clock, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export function ContactPage() {
  const { routeParams } = useRouter();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      {/* Page Title & Founder Intro */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5" />
          <span>Direct Founder Contact Desk</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Connect directly with founders Ram Chavan & Varad Edke.
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          At Friends IT Solutions, you don't deal with middlemen or junior sales reps. Speak directly with the technical founders leading engineering in Karvenagar, Pune.
        </p>

        <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-600">
          <span className="flex items-center gap-1.5 font-medium text-slate-700">
            <Clock className="w-4 h-4 text-blue-600" />
            2-Hour Fast-Track Callback Guarantee
          </span>
          <span className="flex items-center gap-1.5 font-medium text-slate-700">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Strict Non-Disclosure Guarantee (NDA)
          </span>
          <span className="flex items-center gap-1.5 font-medium text-slate-700">
            <MapPin className="w-4 h-4 text-indigo-600" />
            Karvenagar, Pune Engineering Desk
          </span>
        </div>
      </div>

      {/* Verified Founder Direct Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Ram Chavan */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-wider mb-1">
                Co-Founder & CTO
              </div>
              <h2 className="text-xl font-extrabold text-slate-900">Ram Chavan</h2>
              <p className="text-xs text-slate-500">Cloud Architecture, AI Agents & Backend Scalability</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-extrabold text-lg flex items-center justify-center shadow-md">
              RC
            </div>
          </div>

          <div className="space-y-2 text-xs pt-1 border-t border-slate-100">
            <div className="flex items-center justify-between py-1">
              <span className="text-slate-500">Direct Phone:</span>
              <a
                href={`tel:${COMPANY_INFO.ramPhone}`}
                className="font-bold text-slate-900 hover:text-blue-600 font-mono flex items-center gap-1.5 text-sm"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>{COMPANY_INFO.ramPhone}</span>
              </a>
            </div>

            <div className="flex items-center justify-between py-1">
              <span className="text-slate-500">Direct Email:</span>
              <a
                href={`mailto:${COMPANY_INFO.ramEmail}`}
                className="font-semibold text-blue-600 hover:underline font-mono text-xs"
              >
                {COMPANY_INFO.ramEmail}
              </a>
            </div>
          </div>

          <div className="pt-2 flex items-center gap-2.5">
            <a
              href={COMPANY_INFO.ramWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Ram</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.ramPhone}`}
              className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-slate-600" />
              <span>Call</span>
            </a>
          </div>
        </div>

        {/* Varad Edke */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-wider mb-1">
                Co-Founder & Head of Engineering
              </div>
              <h2 className="text-xl font-extrabold text-slate-900">Varad Edke</h2>
              <p className="text-xs text-slate-500">Full-Stack Web, Cross-Platform Mobile & Architecture</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white font-extrabold text-lg flex items-center justify-center shadow-md">
              VE
            </div>
          </div>

          <div className="space-y-2 text-xs pt-1 border-t border-slate-100">
            <div className="flex items-center justify-between py-1">
              <span className="text-slate-500">Direct Phone:</span>
              <a
                href={`tel:${COMPANY_INFO.varadPhone}`}
                className="font-bold text-slate-900 hover:text-blue-600 font-mono flex items-center gap-1.5 text-sm"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>{COMPANY_INFO.varadPhone}</span>
              </a>
            </div>

            <div className="flex items-center justify-between py-1">
              <span className="text-slate-500">Direct Email:</span>
              <a
                href={`mailto:${COMPANY_INFO.varadEmail}`}
                className="font-semibold text-blue-600 hover:underline font-mono text-xs"
              >
                {COMPANY_INFO.varadEmail}
              </a>
            </div>
          </div>

          <div className="pt-2 flex items-center gap-2.5">
            <a
              href={COMPANY_INFO.varadWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Varad</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.varadPhone}`}
              className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-slate-600" />
              <span>Call</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Contact Form & Project Scope Submission */}
      <Contact
        initialService={routeParams.service}
        scopeSummary={routeParams.estimate || routeParams.solution}
      />
    </div>
  );
}
