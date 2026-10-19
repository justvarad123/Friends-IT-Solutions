import { useState } from 'react';
import { Calendar, Clock, User, Phone, CheckCircle2, MessageCircle, ArrowRight, Video, MapPin, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { saveLeadInquiry, updateVisitorStatus } from '../data/tracker';

export function BookingCalendar() {
  const [selectedFounder, setSelectedFounder] = useState<'Varad Edke' | 'Ram Chavan'>('Varad Edke');
  const [selectedDay, setSelectedDay] = useState('Tomorrow');
  const [selectedSlot, setSelectedSlot] = useState('3:30 PM IST');
  const [meetingMode, setMeetingMode] = useState<'meet' | 'phone' | 'in-person'>('meet');
  const [meetingTopic, setMeetingTopic] = useState('Custom Website or Mobile App Project');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [booked, setBooked] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const days = ['Today (Express)', 'Tomorrow', 'This Friday', 'Next Monday', 'Next Tuesday'];
  const slots = ['11:30 AM IST', '2:00 PM IST', '3:30 PM IST', '5:30 PM IST', '7:00 PM IST'];
  const topics = [
    'Custom Website or Web Portal',
    'Mobile App (iOS & Android)',
    'WhatsApp AI Agent / Automation',
    'Full-Stack Architecture & Cloud Hosting',
  ];

  const founderPhone = selectedFounder === 'Varad Edke' ? '918329863893' : '919359032001';

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientPhone.trim()) {
      setError('Please provide your name and phone / WhatsApp number so we can confirm.');
      return;
    }
    setError(null);
    setBooked(true);

    const modeLabels = {
      meet: 'Google Meet Video Call',
      phone: 'Direct Phone Call',
      'in-person': 'In-Person at Karvenagar, Pune Office',
    };

    // Save lead into live tracker so founders see it in real-time
    saveLeadInquiry({
      name: clientName,
      email: clientEmail || `${clientName.toLowerCase().replace(/\s+/g, '')}@lead.com`,
      phone: clientPhone,
      company: 'Direct Discovery Call',
      service: meetingTopic,
      budget: 'Consultation Booked',
      details: `[Booked Discovery Meeting with ${selectedFounder}]\nDate: ${selectedDay}\nTime: ${selectedSlot}\nFormat: ${modeLabels[meetingMode]}\nTopic: ${meetingTopic}`,
    });

    updateVisitorStatus('Submitted Inquiry', `Meeting Booked with ${selectedFounder}`);

    const message = `Hello ${selectedFounder}! My name is ${clientName}. I just booked a 30-min discovery call regarding "${meetingTopic}" on ${selectedDay} at ${selectedSlot} (${modeLabels[meetingMode]}). My phone is ${clientPhone}. Looking forward to connecting!`;
    const whatsappUrl = `https://wa.me/${founderPhone}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a clean new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="py-20 md:py-28 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-600 mb-3">
            <span>DIRECT FOUNDER CONSULTATION</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-slate-600">SCHEDULE 1-ON-1</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            Book a 30-Minute Technical Discovery Call
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Discuss your project goals, architecture options, and budget directly with Ram Chavan or Varad Edke. We offer Google Meet video calls, direct phone calls, or in-person coffee meetings at our Karvenagar office in Pune.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 md:p-10 shadow-sm max-w-4xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider">
                FOUNDER-LED ARCHITECTURE REVIEW
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Zero Obligation · 100% Free Consultation
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-xl border border-emerald-200 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for This Week's Sprints</span>
            </div>
          </div>

          {booked ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900">Meeting Scheduled with {selectedFounder}!</h4>
              <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                We have locked in your requested slot for <strong className="text-slate-900">{selectedDay} at {selectedSlot}</strong>. A direct WhatsApp conversation has also been triggered with {selectedFounder} to confirm meeting link credentials.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setBooked(false)}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  Modify Booking
                </button>
                <a
                  href={`tel:+${founderPhone}`}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-sm"
                >
                  Call {selectedFounder} Now (+{founderPhone})
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleConfirm} className="pt-6 space-y-6">
              {error && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700">
                  {error}
                </div>
              )}

              {/* Step 1: Select Founder */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                  1. Choose Founder to Consult With
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedFounder('Varad Edke')}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedFounder === 'Varad Edke'
                        ? 'border-blue-600 bg-white shadow-sm ring-1 ring-blue-600/30'
                        : 'border-slate-200 bg-white/70 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 text-sm">Varad Edke</span>
                      <span className="text-[11px] text-blue-600 font-mono font-semibold">+91 83298 63893</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Full-Stack Web, React Native Mobile & Product Strategy</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedFounder('Ram Chavan')}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedFounder === 'Ram Chavan'
                        ? 'border-blue-600 bg-white shadow-sm ring-1 ring-blue-600/30'
                        : 'border-slate-200 bg-white/70 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 text-sm">Ram Chavan</span>
                      <span className="text-[11px] text-blue-600 font-mono font-semibold">+91 93590 32001</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">AI Agent Workflows, Backend Systems & Cloud Architecture</p>
                  </button>
                </div>
              </div>

              {/* Step 2: Meeting Format */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                  2. Select Consultation Format
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setMeetingMode('meet')}
                    className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      meetingMode === 'meet'
                        ? 'border-blue-600 bg-white text-blue-700 shadow-xs'
                        : 'border-slate-200 bg-white/60 text-slate-600 hover:bg-white'
                    }`}
                  >
                    <Video className="w-4 h-4 text-blue-600" />
                    <span>Google Meet (Video)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMeetingMode('phone')}
                    className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      meetingMode === 'phone'
                        ? 'border-blue-600 bg-white text-blue-700 shadow-xs'
                        : 'border-slate-200 bg-white/60 text-slate-600 hover:bg-white'
                    }`}
                  >
                    <Phone className="w-4 h-4 text-emerald-600" />
                    <span>Direct Phone Call</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMeetingMode('in-person')}
                    className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      meetingMode === 'in-person'
                        ? 'border-blue-600 bg-white text-blue-700 shadow-xs'
                        : 'border-slate-200 bg-white/60 text-slate-600 hover:bg-white'
                    }`}
                  >
                    <MapPin className="w-4 h-4 text-teal-600" />
                    <span>Karvenagar Office (Pune)</span>
                  </button>
                </div>
              </div>

              {/* Step 3: Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                    3. Select Day
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {days.map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setSelectedDay(d)}
                        className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition-all ${
                          selectedDay === d
                            ? 'border-blue-600 bg-white text-blue-700 shadow-xs'
                            : 'border-slate-200 bg-white/60 text-slate-600 hover:bg-white'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                    4. Select Preferred Slot
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {slots.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelectedSlot(s)}
                        className={`p-2.5 rounded-xl border text-xs font-mono font-semibold text-center transition-all ${
                          selectedSlot === s
                            ? 'border-blue-600 bg-white text-blue-700 shadow-xs'
                            : 'border-slate-200 bg-white/60 text-slate-600 hover:bg-white'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 4: Contact info */}
              <div className="pt-2 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp / Phone *</label>
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="+91 98..."
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email (Optional)</label>
                  <input
                    type="email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="rahul@example.com"
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 transition-all active:scale-98"
              >
                <span>Confirm & Lock Discovery Slot with {selectedFounder}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
