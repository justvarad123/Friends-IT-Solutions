import { useState } from 'react';
import { ArrowRight, Code, ShieldCheck, Terminal, Cpu, Database, CheckCircle2, MapPin, Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeroProps {
  onOpenQuote: () => void;
}

export function Hero({ onOpenQuote }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'architecture' | 'agent' | 'delivery'>('architecture');

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-white overflow-hidden border-b border-slate-100">
      {/* Subtle soft gradient background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none -z-10 opacity-70">
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-blue-100/60 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-indigo-50/80 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean unboxed location & founder kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-blue-600 mb-4">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-500" />
                <span>KARVENAGAR, PUNE</span>
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-600">RAM CHAVAN & VARAD EDKE</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-emerald-600 font-medium">AVAILABLE FOR LIVE PROJECTS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6 text-balance">
              Custom Websites, Mobile Apps & AI Solutions That{' '}
              <span className="text-blue-600 underline decoration-blue-200 decoration-wavy decoration-2">
                Grow Your Business
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              We are a dedicated IT agency founded by <strong className="text-slate-800 font-semibold">Ram Chavan</strong> & <strong className="text-slate-800 font-semibold">Varad Edke</strong> in Karvenagar, Pune. We build high-speed custom websites, Android/iOS mobile apps, autonomous AI agents, and business workflow automations that eliminate manual work.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <button
                type="button"
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-md shadow-blue-500/20 active:scale-[0.98]"
              >
                <span>Get a Free Project Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all"
              >
                <span>Explore Core Services</span>
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

            {/* Trust points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 border-t border-slate-100 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Working MVP in 10-20 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>100% Code & IP Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Direct Founder Communication</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Light-Mode Interactive System Architecture Visualizer */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 font-mono text-xs text-slate-600 font-medium">
                    friends-it-solutions.in · Pune Hub
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>ONLINE & SERVING</span>
                </div>
              </div>

              {/* Segmented Tabs */}
              <div className="flex items-center border-b border-slate-200 bg-slate-50/60 p-1.5 gap-1 text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('architecture')}
                  className={`flex-1 py-1.5 px-2 rounded-lg font-semibold transition-all text-center ${
                    activeTab === 'architecture'
                      ? 'bg-white text-blue-600 shadow-xs border border-slate-200/80'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Tech Architecture
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('agent')}
                  className={`flex-1 py-1.5 px-2 rounded-lg font-semibold transition-all text-center ${
                    activeTab === 'agent'
                      ? 'bg-white text-blue-600 shadow-xs border border-slate-200/80'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Instant Inquiry Flow
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('delivery')}
                  className={`flex-1 py-1.5 px-2 rounded-lg font-semibold transition-all text-center ${
                    activeTab === 'delivery'
                      ? 'bg-white text-blue-600 shadow-xs border border-slate-200/80'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Pune SLA & Delivery
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-5 text-xs">
                {activeTab === 'architecture' && (
                  <div className="space-y-3 font-mono">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                          <Code className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 font-sans text-xs">Next.js 15 & React Frontend</p>
                          <p className="text-[11px] text-slate-500 font-sans">Mobile responsive · 99/100 Core Web Vitals</p>
                        </div>
                      </div>
                      <span className="text-[11px] text-emerald-600 font-bold">&lt;0.8s LCP</span>
                    </div>

                    <div className="w-px h-2.5 bg-slate-300 mx-auto" />

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 font-sans text-xs">Python & Node.js Backend</p>
                          <p className="text-[11px] text-slate-500 font-sans">FastAPI, WebSockets & WhatsApp APIs</p>
                        </div>
                      </div>
                      <span className="text-[11px] text-blue-600 font-bold">Encrypted</span>
                    </div>

                    <div className="w-px h-2.5 bg-slate-300 mx-auto" />

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600">
                          <Database className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 font-sans text-xs">PostgreSQL + Vector RAG</p>
                          <p className="text-[11px] text-slate-500 font-sans">Automated daily backups · High availability</p>
                        </div>
                      </div>
                      <span className="text-[11px] text-slate-600 font-bold">99.9% Uptime</span>
                    </div>
                  </div>
                )}

                {activeTab === 'agent' && (
                  <div className="space-y-3 font-sans">
                    <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200">
                      <div className="flex items-center justify-between text-xs font-bold text-blue-900 mb-1">
                        <span>1. Visitor Browses or Quotes</span>
                        <span className="text-emerald-700 font-mono text-[10px]">Tracked Live</span>
                      </div>
                      <p className="text-[11px] text-blue-800">
                        Our page logs session activity and prepares instant quotation calculation.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
                      <div className="flex items-center justify-between text-xs font-bold text-emerald-900 mb-1">
                        <span>2. Details Submitted by Client</span>
                        <span className="text-emerald-700 font-mono text-[10px]">Instant Trigger</span>
                      </div>
                      <p className="text-[11px] text-emerald-800">
                        The client automatically receives an official confirmation email summarizing the project scope.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-1">
                        <span>3. Call / WhatsApp from Ram or Varad</span>
                        <span className="text-blue-600 font-mono text-[10px]">&lt; 2 Hours</span>
                      </div>
                      <p className="text-[11px] text-slate-600">
                        Our founders in Karvenagar review requirements and place a direct call or schedule a demo.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'delivery' && (
                  <div className="space-y-2.5 font-sans text-slate-700">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="font-medium text-xs">Office Hub</span>
                      <span className="font-semibold text-slate-900 text-xs">Karvenagar, Pune, MH</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="font-medium text-xs">Founders</span>
                      <span className="font-semibold text-blue-600 text-xs">Ram Chavan & Varad Edke</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="font-medium text-xs">Inquiry SLA</span>
                      <span className="font-semibold text-emerald-600 text-xs">Immediate email + 2-hour call</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="font-medium text-xs">Client Satisfaction</span>
                      <span className="font-semibold text-slate-900 text-xs">100% Milestone Based</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-600 font-medium">
                <span>Friends IT Solutions · Pune, India</span>
                <span className="text-blue-600 font-semibold">Production Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Metric Proof Row Sits in a Full-Width Row Below */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-100">
            <p className="text-3xl font-extrabold text-slate-900 tracking-tight tabular-nums font-mono">
              10-20 Days
            </p>
            <p className="text-xs text-slate-600 mt-1 font-medium">
              Average working MVP delivery
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-100">
            <p className="text-3xl font-extrabold text-blue-600 tracking-tight tabular-nums font-mono">
              99.9%
            </p>
            <p className="text-xs text-slate-600 mt-1 font-medium">
              Production uptime benchmark
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-100">
            <p className="text-3xl font-extrabold text-slate-900 tracking-tight tabular-nums font-mono">
              &lt; 2 hrs
            </p>
            <p className="text-xs text-slate-600 mt-1 font-medium">
              Inquiry response & callback
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-100">
            <p className="text-3xl font-extrabold text-emerald-600 tracking-tight tabular-nums font-mono">
              100%
            </p>
            <p className="text-xs text-slate-600 mt-1 font-medium">
              Direct founder accountability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
