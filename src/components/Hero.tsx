import { useState } from 'react';
import { ArrowRight, CheckCircle2, MapPin, MessageCircle, Phone, Sparkles, Clock, Globe, Smartphone, Cpu, Zap, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { InteractiveAgentDemo } from './InteractiveAgentDemo';

interface HeroProps {
  onOpenQuote: () => void;
  onOpenBooking?: () => void;
}

export function Hero({ onOpenQuote, onOpenBooking }: HeroProps) {
  const [selectedFocus, setSelectedFocus] = useState<'web' | 'mobile' | 'ai' | 'automation'>('web');

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const focusData = {
    web: {
      title: 'High-Performance Web Platforms',
      badge: '10–20 Days MVP',
      tech: 'Next.js 15 · React 19 · TypeScript · Tailwind CSS',
      highlight: 'Sub-second page loads, SEO-optimized, and built to convert visitors.',
    },
    mobile: {
      title: 'iOS & Android Native Mobile Apps',
      badge: '3–5 Weeks Delivery',
      tech: 'React Native · Flutter · Node.js · Supabase',
      highlight: 'Single unified codebase for iPhone and Android with offline sync.',
    },
    ai: {
      title: 'Autonomous WhatsApp & Web AI Agents',
      badge: '2–3 Weeks Deployment',
      tech: 'Python · LangChain · Gemini API · WhatsApp Cloud',
      highlight: '24/7 intelligent customer support, lead qualification, and document search.',
    },
    automation: {
      title: 'Business Workflow & ERP Automations',
      badge: '7–14 Days Rollout',
      tech: 'n8n · Python · Webhooks · Google Cloud · Tally API',
      highlight: 'Eliminate manual copy-pasting with automated invoicing & CRM sync.',
    },
  };

  const currentFocus = focusData[selectedFocus];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-white overflow-hidden border-b border-slate-100">
      {/* Soft gradient background ambiance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] pointer-events-none -z-10 opacity-70">
        <div className="absolute top-8 left-1/4 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute top-16 right-1/4 w-80 h-80 bg-indigo-50/70 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Interactive Focus */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Live Status and Founder Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide mb-4">
              <span className="flex items-center gap-1.5 text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Karvenagar, Pune</span>
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-700 font-medium">Ram Chavan & Varad Edke</span>
              <span className="text-slate-300">·</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Taking Q2/Q3 Projects</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6 text-balance">
              Custom Websites, Mobile Apps & AI Agents That{' '}
              <span className="text-blue-600 underline decoration-blue-200 decoration-wavy decoration-2">
                Grow Your Business
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              We are a dedicated IT agency founded by <strong className="text-slate-900 font-semibold">Ram Chavan</strong> & <strong className="text-slate-900 font-semibold">Varad Edke</strong> in Karvenagar, Pune. We engineer modern digital platforms, cross-platform mobile apps, autonomous AI agents, and custom workflow automations for growing companies.
            </p>

            {/* Dynamic Interactive Focus Tabs */}
            <div className="mb-8 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2.5 px-1">
                <span>EXPLORE OUR ENGINEERING DOMAINS:</span>
                <span className="text-blue-600 font-mono text-[11px] font-bold">{currentFocus.badge}</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                <button
                  type="button"
                  onClick={() => setSelectedFocus('web')}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    selectedFocus === 'web'
                      ? 'bg-white text-blue-600 shadow-xs border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Websites</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedFocus('mobile')}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    selectedFocus === 'mobile'
                      ? 'bg-white text-indigo-600 shadow-xs border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Mobile Apps</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedFocus('ai')}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    selectedFocus === 'ai'
                      ? 'bg-white text-emerald-600 shadow-xs border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>AI Agents</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedFocus('automation')}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    selectedFocus === 'automation'
                      ? 'bg-white text-amber-600 shadow-xs border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Automations</span>
                </button>
              </div>

              {/* Dynamic Focus Details Banner */}
              <div className="mt-3 pt-3 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div>
                  <span className="font-bold text-slate-900">{currentFocus.title}: </span>
                  <span className="text-slate-600">{currentFocus.highlight}</span>
                </div>
                <span className="font-mono text-[11px] text-blue-600 shrink-0 font-medium">
                  {currentFocus.tech}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
              <button
                type="button"
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-md shadow-blue-500/20 active:scale-[0.98]"
              >
                <span>Get Instant Project Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  if (onOpenBooking) {
                    onOpenBooking();
                  } else {
                    scrollToSection('booking');
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all"
              >
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>Book 30-min Call</span>
              </button>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Direct Engineering Standards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 border-t border-slate-100 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Working MVP in 10–20 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>100% Code & IP Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Karvenagar Office & In-Person Meets</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Capabilities & AI Agent Simulator */}
          <div className="lg:col-span-5">
            <InteractiveAgentDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
