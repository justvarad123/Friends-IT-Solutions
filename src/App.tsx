import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProjectEstimator } from './components/ProjectEstimator';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { LiveLeadsDesk } from './components/LiveLeadsDesk';
import { FounderAdminModal } from './components/FounderAdminModal';
import { trackCurrentVisit } from './data/tracker';
import { COMPANY_INFO } from './data/content';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [adminUser, setAdminUser] = useState<string | null>(() => {
    try {
      return sessionStorage.getItem('fit_admin_user');
    } catch {
      return null;
    }
  });

  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [scopeSummary, setScopeSummary] = useState<string | undefined>(undefined);

  // Track visitor quietly in background on mount
  useEffect(() => {
    trackCurrentVisit();

    // Keyboard shortcut for Ram & Varad to quickly open Founder Admin (Alt + A)
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.altKey && (e.key === 'a' || e.key === 'A')) || (e.ctrlKey && e.shiftKey && (e.key === 'a' || e.key === 'A'))) {
        e.preventDefault();
        setIsAdminModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleAdminLogin = (name: string) => {
    setAdminUser(name);
    try {
      sessionStorage.setItem('fit_admin_user', name);
    } catch {
      // silent fallback
    }
  };

  const handleAdminLogout = () => {
    setAdminUser(null);
    try {
      sessionStorage.removeItem('fit_admin_user');
    } catch {
      // silent fallback
    }
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyEstimateToContact = (estimateData: {
    service: string;
    tier: string;
    estimatedCost: string;
    timeline: string;
    addons: string[];
  }) => {
    setSelectedService(estimateData.service);
    const summaryText = `[Project Scope Estimate]\nService: ${estimateData.service}\nTier: ${estimateData.tier}\nEstimated Budget: ${estimateData.estimatedCost}\nTarget Timeline: ${estimateData.timeline}\nAdd-on Modules: ${estimateData.addons.join(', ') || 'None'}`;
    setScopeSummary(summaryText);

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleJumpToEstimator = () => {
    const estimatorSection = document.getElementById('estimator');
    if (estimatorSection) {
      estimatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCallFounders = () => {
    window.location.href = `tel:${COMPANY_INFO.phone}`;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-600/10 selection:text-blue-700">
      {/* Sticky Top Bar Navbar */}
      <Navbar onOpenQuote={() => setIsQuoteModalOpen(true)} />

      {/* Main Single-Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenQuote={() => setIsQuoteModalOpen(true)} />

        {/* About Founders & Pune Hub Section */}
        <About />

        {/* Core Services Section */}
        <Services onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* Featured Projects Portfolio */}
        <Projects onSelectProjectForQuote={handleSelectServiceForQuote} />

        {/* Why Choose Us & Reviews */}
        <WhyChooseUs />

        {/* Instant Project Estimator & Scope Calculator */}
        <ProjectEstimator onApplyEstimateToContact={handleApplyEstimateToContact} />

        {/* Direct Contact & Immediate Inquiry Form */}
        <Contact initialService={selectedService} scopeSummary={scopeSummary} />
      </main>

      {/* Footer with Founder Admin trigger */}
      <Footer
        onOpenAdminModal={() => setIsAdminModalOpen(true)}
        adminUser={adminUser}
        onLogoutAdmin={handleAdminLogout}
      />

      {/* Global Interactive Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        onJumpToEstimator={handleJumpToEstimator}
      />

      {/* Founder Admin PIN Authentication Modal */}
      <FounderAdminModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        onLoginSuccess={handleAdminLogin}
      />

      {/* Real-Time Visitor & Leads Desk - Rendered ONLY when Ram or Varad is logged in */}
      <LiveLeadsDesk
        adminUser={adminUser}
        onLogout={handleAdminLogout}
        onCallNow={handleCallFounders}
      />
    </div>
  );
}
