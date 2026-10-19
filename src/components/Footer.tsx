import { Code, Github, Linkedin, Twitter, MessageSquare, ArrowUp, MapPin, Phone, Mail, Heart, Lock, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/content';

interface FooterProps {
  onOpenAdminModal?: () => void;
  adminUser?: string | null;
  onLogoutAdmin?: () => void;
}

export function Footer({ onOpenAdminModal, adminUser, onLogoutAdmin }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand & Founders Info (col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold shadow-sm">
                <Code className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-900 font-extrabold text-base tracking-tight block">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-[11px] text-slate-500 font-medium block">
                  Karvenagar, Pune, Maharashtra
                </span>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed max-w-sm">
              Founded and operated by <strong className="text-slate-800">Ram Chavan</strong> & <strong className="text-slate-800">Varad Edke</strong>. We engineer high-performance custom websites, mobile apps, WhatsApp AI agents, and automated business workflows.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
              <span>{COMPANY_INFO.address.fullFormatted}</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 font-semibold transition-colors flex items-center gap-1.5 text-xs"
              >
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Mirror */}
          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 font-medium">
              <li>
                <a href="#services" className="hover:text-blue-600 transition-colors">
                  Core Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-600 transition-colors">
                  Past Deployments
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-blue-600 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-600 transition-colors">
                  Founders & Team
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-blue-600 transition-colors">
                  Instant Quote Estimator
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600 transition-colors">
                  Contact Desk Pune
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 font-medium">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-blue-600 transition-colors truncate block">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Desk */}
          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-4">
              Direct Contact
            </h4>
            <div className="space-y-2 text-slate-600">
              <div>
                <span className="text-slate-400 block text-[10px]">Varad Edke:</span>
                <a href="tel:+918329863893" className="text-slate-900 font-bold hover:text-blue-600 block font-mono">
                  +91 83298 63893
                </a>
                <a href="mailto:varad.edke1803@gmail.com" className="text-blue-600 hover:underline block text-[11px] font-mono truncate">
                  varad.edke1803@gmail.com
                </a>
              </div>
              <div className="pt-1.5 border-t border-slate-100">
                <span className="text-slate-400 block text-[10px]">Ram Chavan:</span>
                <a href="tel:+919359032001" className="text-slate-900 font-bold hover:text-blue-600 block font-mono">
                  +91 93590 32001
                </a>
                <a href="mailto:ramchavan00001@gmail.com" className="text-blue-600 hover:underline block text-[11px] font-mono truncate">
                  ramchavan00001@gmail.com
                </a>
              </div>
              <p className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded inline-block border border-emerald-200 mt-1">
                Karvenagar, Pune Office
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Built with pride in Karvenagar, Pune by Ram Chavan & Varad Edke.
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <span>Confidential & Bilateral NDA</span>

            {/* Founder Admin Discreet Link */}
            {adminUser ? (
              <span className="flex items-center gap-1.5 text-blue-600 font-semibold bg-blue-50 px-2 py-1 rounded-md border border-blue-200">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Admin: {adminUser}</span>
                <button
                  type="button"
                  onClick={onLogoutAdmin}
                  className="text-rose-500 hover:text-rose-700 ml-1 underline text-[10px]"
                >
                  (Log Out)
                </button>
              </span>
            ) : (
              <button
                type="button"
                onClick={onOpenAdminModal}
                className="flex items-center gap-1 text-slate-400 hover:text-slate-700 transition-colors"
                title="Founder Admin Portal for Ram Chavan & Varad Edke"
              >
                <Lock className="w-3 h-3" />
                <span>Founder Admin</span>
              </button>
            )}

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-700 hover:text-blue-600 font-medium transition-colors ml-auto sm:ml-0"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
