import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code, Phone, Sparkles, Lock, Calendar, Layers, Cpu, Calculator, Users, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { useRouter, RoutePath } from '../context/RouterContext';

interface NavbarProps {
  onOpenQuote: () => void;
  adminUser?: string | null;
}

export function Navbar({ onOpenQuote, adminUser }: NavbarProps) {
  const { currentRoute, navigate } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key (WCAG compliance)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks: { route: RoutePath; label: string; icon?: React.ElementType }[] = [
    { route: 'home', label: 'Home' },
    { route: 'services', label: 'Services' },
    { route: 'solutions', label: 'Blueprints' },
    { route: 'stack', label: 'Tech Stack' },
    { route: 'estimator', label: 'Estimator' },
    { route: 'book', label: 'Book Call' },
    { route: 'about', label: 'About' },
    { route: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (route: RoutePath) => {
    navigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* WCAG Skip-to-Content Link for Screen Readers & Keyboard Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-xl focus:shadow-xl focus:font-semibold focus:text-xs focus:ring-2 focus:ring-white outline-none"
      >
        Skip to main content
      </a>

      {/* Top Engineering Hub Info Strip */}
      <div className="bg-slate-950 text-slate-300 text-[11px] py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Pune Engineering Hub: <strong className="text-white font-medium">Karvenagar</strong>
            </span>
            <span className="hidden sm:inline text-slate-700" aria-hidden="true">|</span>
            <span className="hidden sm:inline text-slate-400">
              Mon–Sat, 9:00 AM – 8:00 PM IST
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate('contact')}
              className="text-slate-300 hover:text-white transition-colors flex items-center gap-1 focus-visible:ring-1 focus-visible:ring-blue-400 rounded outline-none"
            >
              <Mail className="w-3 h-3 text-blue-400" />
              <span>Contact Us</span>
            </button>
            <span className="text-slate-700" aria-hidden="true">|</span>
            {/* Founder Portal Direct Link */}
            <button
              type="button"
              onClick={() => navigate('admin')}
              className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors rounded p-0.5"
              title="Founder Secure Access"
              aria-label="Founder Admin Portal"
            >
              <Lock className="w-3 h-3 text-amber-400" />
              <span className="text-[10px] font-mono">
                {adminUser ? `Admin (${adminUser.split(' ')[0]})` : 'Founder Portal'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        role="banner"
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-2.5'
            : 'bg-white border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 group text-left focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-0.5 outline-none"
            aria-label="Friends IT Solutions Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-base font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors block leading-tight">
                Friends IT
              </span>
              <span className="text-[10px] text-slate-500 font-medium block">
                Solutions · Pune
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav role="navigation" aria-label="Primary Navigation" className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  type="button"
                  onClick={() => handleNavClick(item.route)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all focus-visible:ring-2 focus-visible:ring-blue-600 outline-none ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 font-bold'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => navigate('estimator')}
              className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-slate-900 outline-none"
            >
              Get Estimate
            </button>

            <button
              type="button"
              onClick={onOpenQuote}
              className="px-4 py-2 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-xs hover:shadow transition-all flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 outline-none"
            >
              <span>Instant Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-600 outline-none"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-150"
          >
            <div className="grid grid-cols-2 gap-1.5">
              {navLinks.map((item) => {
                const isActive = currentRoute === item.route;
                return (
                  <button
                    key={item.route}
                    type="button"
                    onClick={() => handleNavClick(item.route)}
                    className={`p-2.5 rounded-xl text-left text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-blue-600 text-white font-bold'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold shadow-xs flex items-center justify-center gap-1.5"
              >
                <span>Instant Project Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('admin')}
                className="w-full py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5 text-amber-500" />
                <span>Founder Secure Console</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
