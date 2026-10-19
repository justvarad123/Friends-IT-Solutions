import { useState } from 'react';
import { ArrowRight, CheckCircle2, MapPin, MessageCircle, Phone, Sparkles, Clock, Globe, Smartphone, Cpu, Zap, Calendar, Calculator, ChevronRight, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { SOLUTIONS, SERVICES, CLIENT_COMMITMENTS } from '../data/content';
import { useRouter } from '../context/RouterContext';
import { ProjectCardVisual } from '../components/ProjectCardVisual';

export function HomePage() {
  const { navigate } = useRouter();
  const [activeTab, setActiveTab] = useState<'web' | 'mobile' | 'ai' | 'cloud'>('web');

  const domainHighlights = {
    web: {
      title: 'High-Performance Web Platforms',
      badge: 'React 19 · Next.js · Node.js',
      description: 'Ultra-fast, responsive web applications engineered for sub-second page loads and high conversion rates.',
      metrics: 'Production sprint: 2–3 Weeks',
      deliverables: ['Custom Design System', 'High-Load Backend APIs', 'Full SEO & WCAG 2.1 AA'],
    },
    mobile: {
      title: 'Native & Cross-Platform Mobile Apps',
      badge: 'Flutter · React Native · Swift',
      description: 'Fluid iOS & Android applications with offline-first local databases, real-time push, and smooth 60fps animations.',
      metrics: 'Production sprint: 3–4 Weeks',
      deliverables: ['Apple App Store & Play Store publishing', 'Native Camera & Biometrics', 'Real-time WebSocket Sync'],
    },
    ai: {
      title: 'Autonomous AI Agents & Private LLMs',
      badge: 'Gemini 2.5/Flash · LangChain · Python',
      description: 'Custom AI workflows that automate customer inquiry handling, intelligent document parsing, and database queries.',
      metrics: 'Production sprint: 1–2 Weeks',
      deliverables: ['Private Knowledge Grounding', 'Multi-channel WhatsApp/Web bot', 'Secure Zero-Data-Leakage'],
    },
    cloud: {
      title: 'Scalable Cloud DevOps & Microservices',
      badge: 'AWS · Docker · PostgreSQL · Redis',
      description: 'Battle-tested cloud infrastructure with zero-downtime CI/CD pipelines, automated backups, and 99.95% uptime SLA.',
      metrics: 'Deployment: 48–72 Hours',
      deliverables: ['Automated GitHub Actions CI/CD', 'SSL & DDoS Mitigation', 'Cloud SQL / PostgreSQL Migration'],
    },
  };

  const selectedDomain = domainHighlights[activeTab];
  const featuredSolutions = SOLUTIONS.slice(0, 3);

  return (
    <div className="space-y-20 pb-16">
      {/* 1. Hero Section - Punchy, High Impact, Less Informative Overload */}
      <section className="relative pt-12 md:pt-16 pb-12 overflow-hidden border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Live Presence Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-xs text-slate-700 shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-slate-900">Pune Engineering Hub</span>
              <span className="text-slate-400" aria-hidden="true">·</span>
              <span className="text-slate-600 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                Karvenagar, Pune
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
              Engineering digital products{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                built for millions.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We design and ship production-grade web platforms, mobile apps, and custom AI agents engineered for scale, reliability, and modern enterprise performance.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => navigate('estimator')}
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg transition-all flex items-center gap-2 active:scale-98 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 outline-none"
              >
                <Calculator className="w-4 h-4" />
                <span>Calculate Project Scope</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => navigate('book')}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-semibold text-sm border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex items-center gap-2 active:scale-98 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 outline-none"
              >
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>Schedule Discovery Call</span>
              </button>

              <button
                type="button"
                onClick={() => navigate('contact')}
                className="px-4 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-sm border border-slate-200/80 transition-colors flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-slate-900 outline-none"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Contact Engineering Team</span>
              </button>
            </div>

            {/* Key Assurance Indicators */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Milestone Payments (30/40/30)
              </span>
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Weekly Friday Demos
              </span>
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                100% Code & IP Ownership
              </span>
            </div>
          </div>

          {/* Interactive Engineering Tabs (Clean, not noisy) */}
          <div className="mt-14 max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
            <div className="flex border-b border-slate-100 overflow-x-auto bg-slate-50/60 p-1.5 gap-1.5">
              {[
                { id: 'web', label: 'Web Platforms', icon: Globe },
                { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
                { id: 'ai', label: 'Custom AI & LLMs', icon: Cpu },
                { id: 'cloud', label: 'Cloud & DevOps', icon: Zap },
              ].map((tab) => {
                const Icon = tab.icon;
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-white text-blue-600 shadow-xs border border-slate-200/70'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-blue-600' : 'text-slate-400'}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2.5 max-w-lg">
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded font-semibold">
                    {selectedDomain.badge}
                  </span>
                  <span className="text-slate-400">·</span>
                  <span className="text-slate-500 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {selectedDomain.metrics}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">{selectedDomain.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{selectedDomain.description}</p>
                <div className="pt-2 flex flex-wrap gap-2">
                  {selectedDomain.deliverables.map((item, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1 text-xs text-slate-600 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={() => navigate('services')}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Explore Capabilities</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => navigate('estimator')}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Calculator className="w-3.5 h-3.5 text-blue-600" />
                  <span>Get Estimate</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Top 3 Production Solutions Preview (Crisp & Selective) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proven Architectures</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Production-ready blueprints.
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-lg">
              Scalable, resilient architectures designed for real transactions and high concurrent traffic.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate('solutions')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span>View all 6 blueprints</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredSolutions.map((sol) => (
            <div
              key={sol.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col group"
            >
              <div className="h-44 bg-slate-50 border-b border-slate-100 p-3 overflow-hidden relative">
                <ProjectCardVisual id={sol.id} category={sol.category} />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-blue-600">{sol.categoryLabel || sol.category}</span>
                    <span className="font-mono text-slate-400">{sol.estimatedSprint}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-base">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {sol.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500">
                    {sol.techStack.slice(0, 3).join(' · ')}
                  </div>
                  <button
                    type="button"
                    onClick={() => navigate('solutions')}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    aria-label={`Inspect ${sol.title} Blueprint`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Core Services Summary Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200/70">
          <div className="max-w-xl mb-8 space-y-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">What We Build</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Full lifecycle software engineering.
            </h2>
            <p className="text-sm text-slate-600">
              From MVP architecture to high-load scaling, we handle the entire engineering roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.slice(0, 4).map((svc) => (
              <div
                key={svc.id}
                className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:border-blue-300 transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    {svc.category}
                  </span>
                  <h3 className="font-bold text-sm text-slate-900">{svc.title}</h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {svc.shortDesc}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => navigate('services')}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 pt-2"
                >
                  <span>Learn more</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-600">
              Need a custom tailored package? We provide fixed-scope milestones and dedicated sprint squads.
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => navigate('services')}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 transition-colors"
              >
                View all 6 services
              </button>
              <button
                type="button"
                onClick={() => navigate('estimator')}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              >
                Instant Project Estimator
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Client Commitments & Trust (Why Choose Friends IT) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Engineering Integrity</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            How we protect your project & budget.
          </h2>
          <p className="text-sm text-slate-600">
            No endless hourly billing surprises. We work with strict milestone gates and transparent deliveries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CLIENT_COMMITMENTS.map((comm, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all space-y-2.5"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                0{idx + 1}
              </div>
              <h3 className="font-bold text-sm text-slate-900">{comm.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{comm.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Punchy Call to Action Bar */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs font-mono font-semibold text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded border border-blue-800">
              FAST-TRACK RESPONSE · PUNE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Ready to ship your digital product?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Connect with our senior engineering team in Pune. Receive an architectural scope, tech stack proposal, and transparent quote within 24 hours.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => navigate('estimator')}
                className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-md transition-all flex items-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                <span>Estimate Project Cost</span>
              </button>
              <button
                type="button"
                onClick={() => navigate('book')}
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-blue-400" />
                <span>Book 30-Min Call</span>
              </button>
              <button
                type="button"
                onClick={() => navigate('contact')}
                className="px-4 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>View Contact & Founder Details</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
