import { Shield, Users, Layers, MapPin, Award, CheckCircle, Phone, Mail, MessageCircle, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-slate-100 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Mission & Founder Profiles */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-600 mb-3">
              <span>FOUNDER-LED AGENCY</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-600">PUNE HEADQUARTERS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 text-balance">
              Building Scalable Digital Products with Personal Ownership & Technical Precision
            </h2>

            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                <strong className="text-slate-900 font-semibold">Friends IT Solutions</strong> was founded by <strong className="text-slate-900 font-semibold">Ram Chavan</strong> and <strong className="text-slate-900 font-semibold">Varad Edke</strong> in Karvenagar, Pune. We started the firm with a clear focus: to help startups, clinics, retailers, and expanding businesses launch high-quality digital solutions without the sluggish communication and inflated costs of traditional agencies.
              </p>
              <p>
                From custom full-stack web platforms and cross-platform mobile apps to autonomous AI agents that handle WhatsApp and customer queries, we write clean, maintainable code. You work directly with Ram and Varad—guaranteeing rapid execution and direct technical answers.
              </p>
            </div>

            {/* Founder Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm">
                      RC
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Ram Chavan</h4>
                      <p className="text-[11px] text-blue-600 font-medium">Co-Founder & CTO</p>
                    </div>
                  </div>
                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                    AI agent workflows, Python backend services, cloud architectures & automated data pipelines.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs">
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
                  <div className="pt-1 flex gap-2">
                    <a
                      href="https://wa.me/919359032001?text=Hello%20Ram,%20I%20would%20like%20to%20discuss%20a%20project%20with%20Friends%20IT%20Solutions"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-1.5 px-2 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg text-[11px] text-emerald-800 font-bold text-center flex items-center justify-center gap-1"
                    >
                      <MessageCircle className="w-3 h-3 text-emerald-600" />
                      <span>WhatsApp Ram</span>
                    </a>
                    <a
                      href="tel:+919359032001"
                      className="py-1.5 px-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-[11px] font-bold flex items-center justify-center gap-1"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-sm">
                      VE
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Varad Edke</h4>
                      <p className="text-[11px] text-blue-600 font-medium">Co-Founder & Head of Product</p>
                    </div>
                  </div>
                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                    High-velocity Next.js web applications, React Native mobile apps, user experience & cloud delivery.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs">
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
                  <div className="pt-1 flex gap-2">
                    <a
                      href="https://wa.me/918329863893?text=Hello%20Varad,%20I%20would%20like%20to%20discuss%20a%20project%20with%20Friends%20IT%20Solutions"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-1.5 px-2 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg text-[11px] text-emerald-800 font-bold text-center flex items-center justify-center gap-1"
                    >
                      <MessageCircle className="w-3 h-3 text-emerald-600" />
                      <span>WhatsApp Varad</span>
                    </a>
                    <a
                      href="tel:+918329863893"
                      className="py-1.5 px-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-[11px] font-bold flex items-center justify-center gap-1"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Address callout with Maps link */}
            <div className="mt-6 p-4 rounded-xl border border-slate-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-600">
                  <span className="font-bold text-slate-900 block text-xs">Our Registered Engineering Desk:</span>
                  <span>{COMPANY_INFO.address.street}, {COMPANY_INFO.address.fullFormatted}</span>
                </div>
              </div>
              <a
                href={COMPANY_INFO.address.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline shrink-0"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right: Technical Disciplines */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-base">Our Engineering Principles</h3>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <Shield className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold mb-0.5">Strict Code Cleanliness</strong>
                    Strict TypeScript, component modularity, and automated tests so your product scales smoothly without technical debt.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <Users className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold mb-0.5">Direct Accountability</strong>
                    No middle managers, no bureaucratic delays. When you have a question, you talk directly with the engineer writing your code.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <Layers className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold mb-0.5">Production-Grade Security</strong>
                    SSL encryption, environment variable safety, role-based authorization (RBAC), and automated cloud backups.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
