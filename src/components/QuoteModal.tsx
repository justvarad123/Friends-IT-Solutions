import { useState } from 'react';
import { X, Send, CheckCircle2, ArrowRight, Calculator, Sparkles, MessageCircle, Phone } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/content';
import { saveLeadInquiry } from '../data/tracker';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJumpToEstimator: () => void;
}

export function QuoteModal({ isOpen, onClose, onJumpToEstimator }: QuoteModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Custom Website Development');
  const [timeline, setTimeline] = useState('Within 15-20 Days');
  const [brief, setBrief] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [quoteId, setQuoteId] = useState('');
  const [assignedFounder, setAssignedFounder] = useState('Ram Chavan');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    const saved = saveLeadInquiry({
      name,
      email,
      phone,
      service,
      budget: 'Quote Requested',
      details: brief || 'Quick Quote Request via Modal',
    });

    setQuoteId(saved.id);
    setAssignedFounder(saved.assignedTo);
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setBrief('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="max-w-lg w-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl relative">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div>
            <span className="text-[11px] font-mono text-blue-600 font-bold uppercase tracking-wider">
              FRIENDS IT SOLUTIONS · PUNE
            </span>
            <h3 className="text-base font-bold text-slate-900">Request a Free Project Quote</h3>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Quote Request Submitted</h4>
              <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                Reference ID: <span className="font-mono text-blue-600 font-bold">{quoteId}</span>. A confirmation email has been dispatched to <strong className="text-slate-900">{email}</strong>.
              </p>

              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-left text-xs text-blue-900 space-y-1">
                <p className="font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>Assigned to: {assignedFounder}</span>
                </p>
                <p className="text-blue-800 text-[11px]">
                  Ram Chavan or Varad Edke will contact you directly on <strong className="text-slate-900">{phone}</strong> within 2 hours.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <a
                  href="https://wa.me/918329863893?text=Hello%20Varad,%20I%20just%20submitted%20a%20quote%20request%20on%20Friends%20IT%20Solutions"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Varad</span>
                </a>
                <a
                  href="https://wa.me/919359032001?text=Hello%20Ram,%20I%20just%20submitted%20a%20quote%20request%20on%20Friends%20IT%20Solutions"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Ram</span>
                </a>
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Optional Quick Link to Estimator */}
              <div className="mb-4 p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <Calculator className="w-4 h-4 text-blue-600" />
                  <span>Want to calculate a ballpark price first?</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onJumpToEstimator();
                  }}
                  className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-2 shrink-0 ml-2"
                >
                  Open Estimator
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Your Name <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Anand Shinde"
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Email Address <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="anand@business.in"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Phone Number <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98220 00000"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Service
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Complete Website & AI Agent Bundle">Website & AI Bundle</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Target Launch
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    >
                      <option value="Urgent (10-15 Days)">Urgent (10-15 Days)</option>
                      <option value="Standard (3-4 Weeks)">Standard (3-4 Weeks)</option>
                      <option value="Flexible (1-2 Months)">Flexible (1-2 Months)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Project Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    placeholder="Briefly describe what your business needs..."
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Send Quote Request & Receive Call</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[11px] text-center text-slate-500 mt-2">
                    Directly assigned to Ram Chavan & Varad Edke · 2-Hour Response SLA
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
