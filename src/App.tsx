import { useState, useEffect } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { QuickActionWidget } from './components/QuickActionWidget';
import { LiveLeadsDesk } from './components/LiveLeadsDesk';

// Separate Page Views
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { TechStackPage } from './pages/TechStackPage';
import { EstimatorPage } from './pages/EstimatorPage';
import { BookingPage } from './pages/BookingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';

import { trackCurrentVisit, updateVisitorStatus } from './data/tracker';
import { initWebVitals } from './utils/webVitals';
import { getActiveSession, terminateSession } from './utils/security';

function AppContent() {
  const { currentRoute, navigate } = useRouter();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [adminUser, setAdminUser] = useState<string | null>(() => {
    const sess = getActiveSession();
    return sess ? sess.founderName : null;
  });

  // Initialize Core Web Vitals & Real-Time Visitor Presence Tracking
  useEffect(() => {
    initWebVitals();
    trackCurrentVisit();

    const checkSession = () => {
      const sess = getActiveSession();
      setAdminUser(sess ? sess.founderName : null);
    };
    window.addEventListener('storage', checkSession);
    const interval = setInterval(checkSession, 1500);
    return () => {
      window.removeEventListener('storage', checkSession);
      clearInterval(interval);
    };
  }, []);

  // Update real-time visitor status when navigating between pages
  useEffect(() => {
    updateVisitorStatus('Browsing Website', currentRoute, `/${currentRoute}`);
    const sess = getActiveSession();
    setAdminUser(sess ? sess.founderName : null);
  }, [currentRoute]);

  const handleAdminLogout = () => {
    terminateSession();
    setAdminUser(null);
    if (currentRoute === 'admin') {
      navigate('home');
    }
  };

  const handleJumpToEstimator = () => {
    setIsQuoteModalOpen(false);
    navigate('estimator');
  };

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'services':
        return <ServicesPage />;
      case 'solutions':
        return <SolutionsPage />;
      case 'stack':
        return <TechStackPage />;
      case 'estimator':
        return <EstimatorPage />;
      case 'book':
        return <BookingPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'admin':
        return <AdminPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600/10 selection:text-blue-700 flex flex-col justify-between">
      {/* Screen reader route announcement for WCAG compliance */}
      <div aria-live="polite" className="sr-only">
        Navigated to {currentRoute} page
      </div>

      <div>
        {/* Navigation Bar */}
        <Navbar
          onOpenQuote={() => setIsQuoteModalOpen(true)}
          adminUser={adminUser}
        />

        {/* Main Content Area */}
        <main id="main-content" role="main" className="focus:outline-none">
          {renderCurrentPage()}
        </main>
      </div>

      {/* Footer */}
      <Footer
        adminUser={adminUser}
        onLogoutAdmin={handleAdminLogout}
      />

      {/* Global Interactive Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        onJumpToEstimator={handleJumpToEstimator}
      />

      {/* Live Leads Desk (Only mounted when Ram or Varad is actively logged in) */}
      {adminUser && (
        <LiveLeadsDesk
          adminUser={adminUser}
          onLogout={handleAdminLogout}
          onCallNow={() => navigate('contact')}
        />
      )}

      {/* Floating Quick Action Widget (Hidden on Admin page or when admin desk is open) */}
      {!adminUser && currentRoute !== 'admin' && (
        <QuickActionWidget onOpenQuote={() => setIsQuoteModalOpen(true)} />
      )}
    </div>
  );
}

export function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

export default App;
