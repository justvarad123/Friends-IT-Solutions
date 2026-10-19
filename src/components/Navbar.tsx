import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code, Phone, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  onOpenQuote: () => void;
}

export function Navbar({ onOpenQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['services', 'projects', 'why-us', 'about', 'estimator', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Why Us', href: '#why-us', id: 'why-us' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Estimator', href: '#estimator', id: 'estimator' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-3.5'
            : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark with Pune highlight */}
            <a
              href="#"
              className="flex items-center gap-2.5 text-slate-900 font-bold text-lg tracking-tight hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold shadow-sm group-hover:bg-blue-700 transition-colors">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <span className="text-slate-900 font-extrabold tracking-tight text-base block leading-tight">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-[11px] text-slate-500 font-normal block leading-none mt-0.5">
                  Karvenagar, Pune
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`transition-colors whitespace-nowrap shrink-0 hover:text-blue-600 ${
                      isActive ? 'text-blue-600 font-semibold' : ''
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: 1 Primary CTA Button & Direct Call Quick Action */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <div className="hidden xl:flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>Varad:</span>
                <a href="tel:+918329863893" className="text-slate-900 font-mono hover:text-blue-600 font-bold">8329863893</a>
                <span className="text-slate-300">|</span>
                <span>Ram:</span>
                <a href="tel:+919359032001" className="text-slate-900 font-mono hover:text-blue-600 font-bold">9359032001</a>
              </div>
              <a
                href="tel:+918329863893"
                className="hidden lg:inline-flex xl:hidden items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>+91 83298 63893</span>
              </a>

              <button
                type="button"
                onClick={onOpenQuote}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm active:scale-[0.98]"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 border border-slate-200 transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-white/98 backdrop-blur-xl pt-20 px-6 pb-8 flex flex-col justify-between border-b border-slate-200 shadow-xl animate-in fade-in duration-150">
          <div className="flex flex-col space-y-3 pt-4">
            <div className="pb-3 mb-2 border-b border-slate-100">
              <p className="text-xs font-semibold text-blue-600">FRIENDS IT SOLUTIONS</p>
              <p className="text-xs text-slate-500">Ram Chavan & Varad Edke · Karvenagar, Pune</p>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-base font-semibold text-slate-800 hover:text-blue-600 py-2 border-b border-slate-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col gap-2.5">
            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:+918329863893"
                className="py-2.5 px-3 text-center text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>Call Varad</span>
              </a>
              <a
                href="tel:+919359032001"
                className="py-2.5 px-3 text-center text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>Call Ram</span>
              </a>
            </div>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 px-4 text-center text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-center text-slate-500">
              Direct response from Ram Chavan & Varad Edke
            </p>
          </div>
        </div>
      )}
    </>
  );
}
