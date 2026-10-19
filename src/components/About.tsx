import { Shield, Users, Layers, MapPin, Award, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-slate-100 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Mission & Trust statement */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-600 mb-3">
              <span>ABOUT THE FOUNDERS</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-600">PUNE HEADQUARTERS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 text-balance">
              Building Scalable Digital Products with Personal Ownership & Technical Precision
            </h2>

            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                <strong className="text-slate-900 font-semibold">Friends IT Solutions</strong> was founded by <strong className="text-slate-900 font-semibold">Ram Chavan</strong> and <strong className="text-slate-900 font-semibold">Varad Edke</strong> in Karvenagar, Pune. We started the firm with a clear mission: to help startups, clinics, logistics providers, and expanding businesses launch high-quality digital solutions without the sluggish communication and inflated costs of traditional IT agencies.
              </p>
              <p>
                From custom full-stack web applications and cross-platform mobile apps to autonomous AI agents that handle WhatsApp and customer queries, we write clean, maintainable code. You work directly with Ram and Varad—guaranteeing rapid execution and direct technical answers.
              </p>
            </div>

            {/* Founder Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm">
                      RC
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Ram Chavan</h4>
                      <p className="text-[11px] text-blue-600 font-medium">Co-Founder & CTO</p>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    AI agent workflows, backend architectures, Python services & automated data pipelines.
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5 text-[11px]">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Phone:</span>
                    <a href="tel:+919359032001" className="font-mono font-bold text-slate-800 hover:text-blue-600">
                      +91 93590 32001
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Email:</span>
                    <a href="mailto:ramchavan00001@gmail.com" className="font-mono text-blue-600 hover:underline truncate max-w-[170px]">
                      ramchavan00001@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-sm">
                      VE
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Varad Edke</h4>
                      <p className="text-[11px] text-blue-600 font-medium">Co-Founder & Head of Product</p>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    High-velocity Next.js web applications, mobile apps, user experience & cloud delivery.
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5 text-[11px]">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Phone:</span>
                    <a href="tel:+918329863893" className="font-mono font-bold text-slate-800 hover:text-blue-600">
                      +91 83298 63893
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Email:</span>
                    <a href="mailto:varad.edke1803@gmail.com" className="font-mono text-blue-600 hover:underline truncate max-w-[170px]">
                      varad.edke1803@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Address callout */}
            <div className="mt-6 p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-600">
                <span className="font-bold text-slate-900 block text-xs">Our Registered Office:</span>
                <span>{COMPANY_INFO.address.street}, {COMPANY_INFO.address.fullFormatted}</span>
                <span className="block text-slate-500 mt-0.5 font-medium">In-person meetings and discussions welcome in Pune.</span>
              </div>
            </div>
          </div>

          {/* Right: 3 Core Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-blue-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Direct Founder Collaboration</h3>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    No inexperienced middlemen. You brainstorm, plan, and review sprint progress directly with Ram and Varad every single week.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-blue-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Modern Code & Total IP Rights</h3>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    We build using clean React, Next.js, TypeScript, and Python. Upon project completion, 100% of the code, Git repository, and assets belong to you.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-blue-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Guaranteed Timelines & SLA</h3>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Clear milestone-based agreements with fixed deliverables. We provide warranty maintenance and rapid support so your business never stalls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
