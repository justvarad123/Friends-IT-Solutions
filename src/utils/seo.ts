/**
 * Dynamic SEO and Structured Data Manager
 * Meets WCAG 2.1 AA and modern search engine optimization standards.
 */

export interface PageMetadata {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export const ROUTE_SEO: Record<string, PageMetadata> = {
  home: {
    title: 'Friends IT Solutions | High-Velocity Software & AI Engineering · Pune',
    description: 'Premier software & AI engineering studio in Karvenagar, Pune. Led by Ram Chavan & Varad Edke. We build web applications, mobile apps, and custom AI systems.',
    path: '/',
    keywords: ['software agency Pune', 'web development Karvenagar', 'AI solutions Pune', 'Ram Chavan', 'Varad Edke', 'mobile app developers'],
  },
  services: {
    title: 'Engineering Services | Full-Stack, Mobile & AI Agents · Friends IT Solutions',
    description: 'Explore our core engineering capabilities: modern React/Node web platforms, native iOS/Android apps, private LLM agents, and cloud DevOps.',
    path: '/services',
    keywords: ['web development services', 'mobile app engineering', 'custom AI development', 'DevOps Pune'],
  },
  solutions: {
    title: 'Production Blueprints & Architectures | Friends IT Solutions',
    description: 'Explore live interactive software blueprints built for e-commerce, telehealth, AI messaging agents, logistics tracking, and enterprise analytics.',
    path: '/solutions',
    keywords: ['software blueprints', 'IT case studies', 'scalable architecture examples'],
  },
  stack: {
    title: 'Technology Stack & Architecture Matrix | Friends IT Solutions',
    description: 'Our modern enterprise technology choices across React, Next.js, Node.js, Python, PostgreSQL, Flutter, AWS, and Gemini models.',
    path: '/stack',
    keywords: ['tech stack Pune', 'React Node Python stack', 'cloud architecture', 'modern database stack'],
  },
  estimator: {
    title: 'Interactive Project Scope & Cost Estimator | Friends IT Solutions',
    description: 'Calculate instant sprint timelines, architecture recommendations, and transparent pricing for your web, mobile, or AI product in seconds.',
    path: '/estimator',
    keywords: ['software cost calculator', 'project scope estimator', 'app development cost Pune'],
  },
  book: {
    title: 'Book a 30-Min Discovery Call with Founders | Friends IT Solutions',
    description: 'Schedule a direct one-on-one consultation with Ram Chavan or Varad Edke. Choose between video conferencing or visit our Karvenagar, Pune office.',
    path: '/book',
    keywords: ['schedule tech consultation', 'book discovery call', 'Karvenagar Pune tech office'],
  },
  about: {
    title: 'About Ram Chavan & Varad Edke | Friends IT Solutions · Pune Hub',
    description: 'Meet founders Ram Chavan and Varad Edke. Dedicated to delivering scalable, secure digital solutions with transparent weekly sprints from Karvenagar, Pune.',
    path: '/about',
    keywords: ['Ram Chavan Pune', 'Varad Edke Pune', 'Friends IT Solutions founders', 'Karvenagar Pune agency'],
  },
  contact: {
    title: 'Contact Engineering Team | Fast-Track Inquiries · Friends IT Solutions',
    description: 'Direct communication channels for new projects. Reach Ram Chavan (+91 9359032001) or Varad Edke (+91 8329863893) via phone, email, or WhatsApp.',
    path: '/contact',
    keywords: ['contact software company', 'hire developers Pune', 'Friends IT phone number'],
  },
  admin: {
    title: 'Founder Console | Restricted Access · Friends IT Solutions',
    description: 'Secure administrative access portal for Ram Chavan and Varad Edke.',
    path: '/admin',
  },
};

/**
 * Apply dynamic metadata to the document head
 */
export function applyPageSEO(pageKey: string): void {
  const meta = ROUTE_SEO[pageKey] || ROUTE_SEO.home;

  // Set document title
  document.title = meta.title;

  // Set meta description
  let descTag = document.querySelector('meta[name="description"]');
  if (!descTag) {
    descTag = document.createElement('meta');
    descTag.setAttribute('name', 'description');
    document.head.appendChild(descTag);
  }
  descTag.setAttribute('content', meta.description);

  // Set OpenGraph
  setMetaTag('property', 'og:title', meta.title);
  setMetaTag('property', 'og:description', meta.description);
  setMetaTag('property', 'og:url', window.location.origin + meta.path);
  setMetaTag('name', 'twitter:title', meta.title);
  setMetaTag('name', 'twitter:description', meta.description);

  // Set Canonical
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', window.location.origin + meta.path);
}

function setMetaTag(attributeName: 'name' | 'property', attributeValue: string, content: string): void {
  let tag = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attributeName, attributeValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}
