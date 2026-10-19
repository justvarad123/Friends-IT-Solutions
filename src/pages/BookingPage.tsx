import { BookingCalendar } from '../components/BookingCalendar';
import { COMPANY_INFO } from '../data/content';
import { Calendar, MapPin, Video, Phone, CheckCircle2 } from 'lucide-react';

export function BookingPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider">
          <Calendar className="w-3.5 h-3.5" />
          <span>Technical Consultation</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Reserve a 30-minute discovery call with our founders.
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Discuss your project scope directly with <strong className="text-slate-900">Ram Chavan</strong> or <strong className="text-slate-900">Varad Edke</strong>.
          Choose between a Google Meet video session or an in-person meeting at our Karvenagar, Pune office.
        </p>

        <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-600">
          <span className="flex items-center gap-1.5 font-medium text-slate-700">
            <Video className="w-4 h-4 text-blue-600" />
            Google Meet Video Link Provided
          </span>
          <span className="flex items-center gap-1.5 font-medium text-slate-700">
            <MapPin className="w-4 h-4 text-emerald-600" />
            Karvenagar, Pune Office Available
          </span>
          <span className="flex items-center gap-1.5 font-medium text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-indigo-600" />
            Zero Obligation Architectural Review
          </span>
        </div>
      </div>

      {/* Main Interactive Booking Calendar */}
      <BookingCalendar />

      {/* Fast-Track Emergency Call Option */}
      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-slate-900">Need urgent same-day technical consultation?</h4>
          <p className="text-xs text-slate-600">
            For critical project kickoffs or immediate RFP deadlines, contact Ram or Varad directly by phone.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${COMPANY_INFO.ramPhone}`}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-blue-400" />
            <span>Call Ram</span>
          </a>
          <a
            href={`tel:${COMPANY_INFO.varadPhone}`}
            className="px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>Call Varad</span>
          </a>
        </div>
      </div>
    </div>
  );
}
