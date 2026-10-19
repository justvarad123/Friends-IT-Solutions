import { About } from '../components/About';
import { FAQSection } from '../components/FAQSection';
import { COMPANY_INFO } from '../data/content';
import { useRouter } from '../context/RouterContext';
import { Users, MapPin, Phone, Mail, MessageCircle, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';

export function AboutPage() {
  const { navigate } = useRouter();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider">
          <Users className="w-3.5 h-3.5" />
          <span>Founding Story & Engineering Team</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Engineers at heart. Focused on high-impact execution.
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Friends IT Solutions was founded in Pune by <strong className="text-slate-900">Ram Chavan</strong> and <strong className="text-slate-900">Varad Edke</strong>.
          We founded the company on a simple principle: build software with direct founder accountability, zero middlemen, and transparent milestone deliveries.
        </p>
      </div>

      {/* Main About Component */}
      <About />

      {/* Frequently Asked Questions */}
      <div className="pt-6 border-t border-slate-200">
        <FAQSection />
      </div>

      {/* Connect Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2">
          <h3 className="text-xl font-bold">Have a project you want to build?</h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
            Meet us in person at our Karvenagar, Pune office or get in touch for an instant scope estimate.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => navigate('contact')}
            className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-md transition-all flex items-center gap-2"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => navigate('book')}
            className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all"
          >
            Schedule Office Visit
          </button>
        </div>
      </div>
    </div>
  );
}
