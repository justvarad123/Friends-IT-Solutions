import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { applyPageSEO } from '../utils/seo';

export type RoutePath =
  | 'home'
  | 'services'
  | 'solutions'
  | 'stack'
  | 'estimator'
  | 'book'
  | 'about'
  | 'contact'
  | 'admin';

interface RouterContextType {
  currentRoute: RoutePath;
  navigate: (route: RoutePath, params?: Record<string, string>) => void;
  routeParams: Record<string, string>;
}

const RouterContext = createContext<RouterContextType>({
  currentRoute: 'home',
  navigate: () => {},
  routeParams: {},
});

const PATH_MAP: Record<string, RoutePath> = {
  '/': 'home',
  '/services': 'services',
  '/solutions': 'solutions',
  '/projects': 'solutions',
  '/stack': 'stack',
  '/estimator': 'estimator',
  '/pricing': 'estimator',
  '/book': 'book',
  '/calendar': 'book',
  '/about': 'about',
  '/contact': 'contact',
  '/admin': 'admin',
};

function getRouteFromLocation(): RoutePath {
  // Support both standard pathname and hash routing (#/services) for maximum compatibility on Render/Vercel
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  if (hash && (PATH_MAP[`/${hash}`] || (hash in PATH_MAP))) {
    return (PATH_MAP[`/${hash}`] || hash) as RoutePath;
  }

  const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
  return PATH_MAP[path] || 'home';
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [currentRoute, setCurrentRoute] = useState<RoutePath>(() => getRouteFromLocation());
  const [routeParams, setRouteParams] = useState<Record<string, string>>({});

  useEffect(() => {
    const handlePopState = () => {
      const route = getRouteFromLocation();
      setCurrentRoute(route);
      applyPageSEO(route);
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    applyPageSEO(currentRoute);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, [currentRoute]);

  const navigate = useCallback((route: RoutePath, params?: Record<string, string>) => {
    setCurrentRoute(route);
    if (params) setRouteParams(params);

    const targetPath = route === 'home' ? '/' : `/${route}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    applyPageSEO(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <RouterContext.Provider value={{ currentRoute, navigate, routeParams }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}
