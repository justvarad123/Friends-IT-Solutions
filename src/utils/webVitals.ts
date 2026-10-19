/**
 * Core Web Vitals & Performance Monitoring
 * Measures LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift),
 * and FID/INP (Interaction to Next Paint) directly using PerformanceObserver.
 */

export interface WebVitalsScore {
  lcp: number | null; // target < 2500ms
  cls: number; // target < 0.1
  inp: number | null; // target < 200ms
  fcp: number | null; // target < 1800ms
  rating: 'good' | 'needs-improvement' | 'poor';
}

const vitalsState: WebVitalsScore = {
  lcp: null,
  cls: 0,
  inp: null,
  fcp: null,
  rating: 'good',
};

type VitalsListener = (vitals: WebVitalsScore) => void;
const listeners: Set<VitalsListener> = new Set();

export function subscribeToWebVitals(callback: VitalsListener): () => void {
  listeners.add(callback);
  callback({ ...vitalsState });
  return () => listeners.delete(callback);
}

function notify(): void {
  // calculate overall rating
  let rating: WebVitalsScore['rating'] = 'good';
  if ((vitalsState.lcp && vitalsState.lcp > 4000) || vitalsState.cls > 0.25 || (vitalsState.inp && vitalsState.inp > 500)) {
    rating = 'poor';
  } else if ((vitalsState.lcp && vitalsState.lcp > 2500) || vitalsState.cls > 0.1 || (vitalsState.inp && vitalsState.inp > 200)) {
    rating = 'needs-improvement';
  }
  vitalsState.rating = rating;
  listeners.forEach((l) => l({ ...vitalsState }));
}

export function initWebVitals(): void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  try {
    // 1. Observe FCP & Paint metrics
    const paintObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          vitalsState.fcp = Math.round(entry.startTime);
          notify();
        }
      }
    });
    paintObserver.observe({ type: 'paint', buffered: true });

    // 2. Observe LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        vitalsState.lcp = Math.round(lastEntry.startTime);
        notify();
      }
    });
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

    // 3. Observe CLS (Cumulative Layout Shift)
    const clsObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        // Only count shifts without recent user input
        if (!(entry as unknown as { hadRecentInput: boolean }).hadRecentInput) {
          vitalsState.cls = parseFloat((vitalsState.cls + (entry as unknown as { value: number }).value).toFixed(3));
          notify();
        }
      }
    });
    clsObserver.observe({ type: 'layout-shift', buffered: true });

    // 4. Observe INP / Event Timings
    const inpObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        const duration = Math.round(entry.duration);
        if (vitalsState.inp === null || duration > vitalsState.inp) {
          vitalsState.inp = duration;
          notify();
        }
      }
    });
    inpObserver.observe({ type: 'first-input', buffered: true });
  } catch {
    // Browser does not support some performance observers, gracefully fail
  }
}

export function getWebVitals(): WebVitalsScore {
  return { ...vitalsState };
}
