import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck, ArrowRight, AlertCircle, MessageCircle, PhoneCall, Sparkles } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/content';
import { saveLeadInquiry, updateVisitorStatus } from '../data/tracker';

interface ContactProps {
  initialService?: string;
  scopeSummary?: string;
}

export function Contact({ initialService, scopeSummary }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('Custom Website Development');
  const [budget, setBudget] = useState('₹40,000 – ₹80,000');
  const [details, setDetails] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedLeadId, setSubmittedLeadId] = useState('');
  const [assignedFounder, setAssignedFounder] = useState('Varad Edke');
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string; details?: string }>({});

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    if (scopeSummary) {
      setDetails((prev) => {
        if (!prev) return scopeSummary;
        return `${scopeSummary}\n\nAdditional notes: ${prev}`;
      });
    }
  }, [scopeSummary]);

  const validate = () => {
    const errs: { name?: string; email?: string; phone?: string; details?: string } = {};
    if (!name.trim()) errs.name = 'Please provide your full name';
    if (!email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!phone.trim() || phone.trim().length < 8) {
      errs.phone = 'Please provide your mobile/WhatsApp number for callback';
    }
    if (!details.trim() || details.trim().length < 10) {
      errs.details = 'Please briefly outline your requirements (min 10 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    updateVisitorStatus('Submitted Inquiry', 'Submitting Details');

    setTimeout(() => {
      const savedLead = saveLeadInquiry({
        name,
        email,
        phone,
        company: company.trim() || 'Direct Client',
        service,
        budget,
        details,
      });

      setSubmittedLeadId(savedLead.id);
      setAssignedFounder(savedLead.assignedTo);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setDetails('');
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Location */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-600 mb-3">
                <span>CONNECT WITH FOUNDERS</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-slate-600">RAM CHAVAN & VARAD EDKE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
                Let's Discuss Your Project in Pune or Online
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                Tell us what you want to build. As soon as you submit your details, an official confirmation is sent to your email, and Ram or Varad will call or message you on WhatsApp within 2 hours.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-xs">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-medium">Office & Engineering Desk</p>
                    <p className="text-slate-900 font-bold">{COMPANY_INFO.address.street}</p>
                    <p className="text-slate-600 text-xs mt-0.5">{COMPANY_INFO.address.fullFormatted}</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-xs">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="w-full">
                    <p className="text-slate-500 text-xs font-medium">Direct Phone Numbers</p>
                    <div className="mt-1 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-600 font-medium">Varad Edke:</span>
                        <a
                          href="tel:+918329863893"
                          className="text-slate-900 font-bold hover:text-blue-600 font-mono"
                        >
                          +91 83298 63893
                        </a>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-600 font-medium">Ram Chavan:</span>
                        <a
                          href="tel:+919359032001"
                          className="text-slate-900 font-bold hover:text-blue-600 font-mono"
                        >
                          +91 93590 32001
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-xs">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="w-full">
                    <p className="text-slate-500 text-xs font-medium">Direct Email Inboxes</p>
                    <div className="mt-1 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-600 font-medium">Varad:</span>
                        <a
                          href="mailto:varad.edke1803@gmail.com"
                          className="text-blue-600 font-semibold hover:underline font-mono truncate max-w-[200px]"
                        >
                          varad.edke1803@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-600 font-medium">Ram:</span>
                        <a
                          href="mailto:ramchavan00001@gmail.com"
                          className="text-blue-600 font-semibold hover:underline font-mono truncate max-w-[200px]"
                        >
                          ramchavan00001@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-xs">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-medium">Working Hours</p>
                    <p className="text-slate-900 font-semibold">{COMPANY_INFO.hours}</p>
                    <p className="text-slate-500 text-[11px] mt-0.5">{COMPANY_INFO.supportSla}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons for Ram & Varad */}
            <div className="mt-8 space-y-2.5">
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href="https://wa.me/918329863893?text=Hello%20Varad,%20I%20would%20like%20to%20discuss%20a%20project%20with%20Friends%20IT%20Solutions"
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all text-center"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat with Varad</span>
                </a>
                <a
                  href="https://wa.me/919359032001?text=Hello%20Ram,%20I%20would%20like%20to%20discuss%20a%20project%20with%20Friends%20IT%20Solutions"
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all text-center"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat with Ram</span>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href="tel:+918329863893"
                  className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all text-center"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Varad</span>
                </a>
                <a
                  href="tel:+919359032001"
                  className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all text-center"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Ram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-100">
              {isSuccess ? (
                <div className="py-8 text-center space-y-5 animate-in fade-in duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-mono text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 uppercase">
                      Inquiry Logged · Ref {submittedLeadId}
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900 mt-3">
                      Thank You, {name}!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                      We have sent an automated confirmation email to <strong className="text-slate-900">{email}</strong>.
                    </p>
                  </div>

                  {/* Immediate Action Notification Box */}
                  <div className="p-5 rounded-xl bg-blue-50/70 border border-blue-200 text-left text-xs space-y-2 max-w-md mx-auto">
                    <div className="flex items-center gap-2 text-blue-900 font-bold">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                      <span>Assigned to Co-Founder: {assignedFounder}</span>
                    </div>
                    <p className="text-blue-800 leading-relaxed">
                      Your inquiry has been assigned to <strong className="text-slate-900">{assignedFounder}</strong> in our Karvenagar office. We will call you on <strong className="text-slate-900">{phone}</strong> within 2 hours to discuss your scope.
                    </p>
                    <div className="pt-2 border-t border-blue-200/80 text-[11px] text-blue-900 space-y-0.5">
                      <p><strong className="text-slate-700">Service:</strong> {service}</p>
                      <p><strong className="text-slate-700">Estimated Budget:</strong> {budget}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={`https://wa.me/${assignedFounder === 'Ram Chavan' ? '919359032001' : '918329863893'}?text=${encodeURIComponent(
                        `Hello ${assignedFounder}! I just submitted project inquiry [${submittedLeadId}] on your website.\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nBudget: ${budget}\nDetails: ${details}`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Open WhatsApp with {assignedFounder}</span>
                    </a>
                    <a
                      href={`tel:${assignedFounder === 'Ram Chavan' ? '+919359032001' : '+918329863893'}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                    >
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span>Call {assignedFounder} Now</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      <span>New Inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="pb-2 border-b border-slate-100">
                    <h3 className="text-lg font-bold text-slate-900">Request Project Scope or Quote</h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Fill out the form below. As soon as you hit submit, you will receive an email confirmation and a personal follow-up.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Your Full Name <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="e.g. Ramesh Kulkarni"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all ${
                          errors.name ? 'border-rose-500 bg-rose-50/20' : 'border-slate-200'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Email Address <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="ramesh@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all ${
                          errors.email ? 'border-rose-500 bg-rose-50/20' : 'border-slate-200'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Phone / WhatsApp Number <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="+91 98220 00000"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all ${
                          errors.phone ? 'border-rose-500 bg-rose-50/20' : 'border-slate-200'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Company or Business Name
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Pune Tech Ventures"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Primary Service Needed
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Full-Stack Website & AI Bundle">Full Website & AI Bundle</option>
                        <option value="Other Custom Solution">Other Technical Requirement</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Budget Range
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      >
                        <option value="₹25,000 – ₹45,000">₹25,000 – ₹45,000 (MVP)</option>
                        <option value="₹45,000 – ₹90,000">₹45,000 – ₹90,000 (Growth)</option>
                        <option value="₹90,000 – ₹1,80,000">₹90,000 – ₹1,80,000 (Full Platform)</option>
                        <option value="₹1,80,000+ Enterprise">₹1,80,000+ (Custom Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Project Details & Objectives <span className="text-blue-600">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={details}
                      onChange={(e) => {
                        setDetails(e.target.value);
                        if (errors.details) setErrors({ ...errors, details: undefined });
                      }}
                      placeholder="Briefly describe what you are looking to build (e.g. clinic booking portal, WhatsApp AI bot, or custom company website)..."
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all leading-relaxed ${
                        errors.details ? 'border-rose-500 bg-rose-50/20' : 'border-slate-200'
                      }`}
                    />
                    {errors.details && (
                      <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.details}</span>
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-4 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-60 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 active:scale-[0.98]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Dispatching Inquiry & Sending Confirmation...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Inquiry & Receive Instant Confirmation</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-slate-500 mt-2.5">
                      ⚡ Immediate email receipt sent to your inbox · Guaranteed callback from Ram Chavan or Varad Edke within 2 hours
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
