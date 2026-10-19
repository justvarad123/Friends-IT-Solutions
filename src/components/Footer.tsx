import { Code, MapPin, Mail, Lock, Calendar, ArrowUp, Phone, Clock, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { useRouter } from '../context/RouterContext';

interface FooterProps {
  adminUser?: string | null;
  onLogoutAdmin?: () => void;
}

export function Footer({ adminUser, onLogoutAdmin }: FooterProps) {
  const { navigate } = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer role="contentinfo" className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand & Pune Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <Code className="w-4 h-4" />
              </div>
              <span className="text-base font-extrabold text-white">Friends IT Solutions</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              High-velocity software engineering studio. Delivering production-grade web, mobile, and AI solutions worldwide from Karvenagar, Pune.
            </p>
            <div className="text-[11px] text-slate-500 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span>Karvenagar, Pune, Maharashtra 411052</span>
              </div>
              <div className="text-slate-500 pl-5">Office Hours: Mon–Sat, 9:00 AM – 8:00 PM IST</div>
            </div>
          </div>

          {/* Col 2: Engineering Pages */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Solutions & Capabilities</h4>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => navigate('services')}
                  className="hover:text-white transition-colors"
                >
                  Full-Stack Web Platforms
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('services')}
                  className="hover:text-white transition-colors"
                >
                  Cross-Platform Mobile Apps
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('services')}
                  className="hover:text-white transition-colors"
                >
                  Custom AI Agents & LLMs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('solutions')}
                  className="hover:text-white transition-colors"
                >
                  Production Blueprints (6)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('stack')}
                  className="hover:text-white transition-colors"
                >
                  Technology Matrix
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Project Planning */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Client Resources</h4>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => navigate('estimator')}
                  className="hover:text-white transition-colors font-medium text-blue-400"
                >
                  Interactive Scope & Cost Estimator
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('book')}
                  className="hover:text-white transition-colors"
                >
                  Schedule 30-Min Discovery Call
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('about')}
                  className="hover:text-white transition-colors"
                >
                  About Founders & Engineering Ethics
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact & Direct Founder Details
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('admin')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <Lock className="w-3 h-3 text-amber-500" />
                  <span>Founder Admin Portal</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us & Engineering Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Direct Contact & Inquiries</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Direct founder phone numbers, WhatsApp lines, and official emails are available on our dedicated contact page.
            </p>
            <div className="space-y-2 pt-1">
              <button
                type="button"
                onClick={() => navigate('contact')}
                className="w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-between transition-colors shadow-sm"
              >
                <span>Go to Contact Us Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-[11px]">
                <div className="text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>Inquiry Response Guarantee:</span>
                </div>
                <div className="text-slate-200 font-semibold pl-5">Within 24 Hours with Scope & Quote</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Clean, professional, no build tools or dev vitals */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Friends IT Solutions · Karvenagar, Pune. All rights reserved.
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
