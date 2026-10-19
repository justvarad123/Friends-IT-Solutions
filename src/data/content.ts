export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  features: string[];
  techStack: string[];
  deliverables: string[];
  typicalTimeline: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  solutionType: string;
  category: 'web' | 'mobile' | 'ai' | 'automation';
  categoryLabel: string;
  summary: string;
  architectureHighlight: string;
  coreFeatures: string[];
  techStack: string[];
  estimatedSprint: string;
  accentColor: string;
}

export interface ValuePillar {
  title: string;
  highlight: string;
  description: string;
  metric: string;
  metricLabel: string;
  points: string[];
}

export const COMPANY_INFO = {
  name: 'Friends IT Solutions',
  tagline: 'Modern Web, Mobile & Custom AI Solutions',
  founders: [
    {
      name: 'Ram Chavan',
      role: 'Co-Founder & Chief Technology Officer',
      focus: 'Distributed Systems, AI Agents & Cloud Engineering',
      email: 'ramchavan00001@gmail.com',
      phone: '+91 93590 32001',
      rawPhone: '9359032001',
      whatsappUrl: 'https://wa.me/919359032001?text=Hello%20Ram,%20I%20would%20like%20to%20discuss%20a%20project%20with%20Friends%20IT%20Solutions',
    },
    {
      name: 'Varad Edke',
      role: 'Co-Founder & Head of Product Engineering',
      focus: 'Full-Stack Web, Cross-Platform Mobile & Architecture',
      email: 'varad.edke1803@gmail.com',
      phone: '+91 83298 63893',
      rawPhone: '8329863893',
      whatsappUrl: 'https://wa.me/918329863893?text=Hello%20Varad,%20I%20would%20like%20to%20discuss%20a%20project%20with%20Friends%20IT%20Solutions',
    },
  ],
  heroHeadline: 'Custom Websites, Mobile Apps & AI Solutions That Grow Your Business',
  heroSubheadline: 'Founded by Ram Chavan & Varad Edke in Karvenagar, Pune. We build lightning-fast web platforms, cross-platform mobile apps, autonomous AI agents, and enterprise workflow automations.',
  email: 'varad.edke1803@gmail.com',
  ramEmail: 'ramchavan00001@gmail.com',
  varadEmail: 'varad.edke1803@gmail.com',
  phone: '+91 83298 63893',
  ramPhone: '+91 93590 32001',
  varadPhone: '+91 83298 63893',
  whatsappUrl: 'https://wa.me/918329863893?text=Hello%20Friends%20IT%20Solutions,%20I%20would%20like%20to%20discuss%20a%20project%20quote',
  ramWhatsappUrl: 'https://wa.me/919359032001?text=Hello%20Ram,%20I%20would%20like%20to%20discuss%20a%20project%20with%20Friends%20IT%20Solutions',
  varadWhatsappUrl: 'https://wa.me/918329863893?text=Hello%20Varad,%20I%20would%20like%20to%20discuss%20a%20project%20with%20Friends%20IT%20Solutions',
  address: {
    street: 'Near Cummins College Road, Karvenagar',
    city: 'Pune',
    state: 'Maharashtra',
    postalCode: '411052',
    country: 'India',
    fullFormatted: 'Karvenagar, Pune, Maharashtra 411052, India',
    mapsUrl: 'https://maps.google.com/?q=Karvenagar,+Pune,+Maharashtra+411052',
  },
  hours: 'Monday – Saturday: 9:00 AM – 8:00 PM IST',
  supportSla: 'Guaranteed call or WhatsApp reply within 2 hours',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Custom Website Development',
    category: 'Web Platforms',
    iconName: 'Globe',
    shortDesc: 'Modern, ultra-fast websites and web portals built with React, Next.js, and clean Tailwind styling designed to convert visitors.',
    longDesc: 'We develop responsive, search-engine optimized websites engineered for sub-second page loads. From clean corporate websites to full SaaS dashboards, every build follows modern accessibility standards and clean code architecture.',
    features: [
      'Next.js 15 & React responsive components',
      'High-speed page load (< 1s Core Web Vitals)',
      'Clean CMS integration (Sanity, WordPress, Strapi)',
      'Advanced On-page SEO & Structured Data',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    deliverables: ['Custom Responsive UI Design', 'Full Source Code & Git Access', 'Domain & Hosting Setup', 'Google Analytics & SEO Config'],
    typicalTimeline: '10 to 20 days',
  },
  {
    id: 'mobile-app',
    title: 'Mobile & Web App Development',
    category: 'Cross-Platform Applications',
    iconName: 'Smartphone',
    shortDesc: 'Sleek, fluid iOS and Android mobile apps alongside progressive web apps with real-time sync and offline readiness.',
    longDesc: 'We turn your app vision into intuitive, reliable mobile products. Using React Native and Flutter, we deliver synchronized iOS and Android mobile apps from a unified codebase, saving development budget and maintaining high performance.',
    features: [
      'Cross-platform iOS & Android deployment',
      'Push notifications & user authentication',
      'Real-time database sync & offline persistence',
      'Razorpay, Stripe & UPI payment gateways',
    ],
    techStack: ['React Native', 'Flutter', 'Node.js', 'Supabase', 'Firebase', 'PostgreSQL'],
    deliverables: ['App Store & Play Store Builds', 'Backend REST/GraphQL APIs', 'Admin Management Panel', 'Maintenance & Warranty Support'],
    typicalTimeline: '3 to 6 weeks',
  },
  {
    id: 'ai-agents',
    title: 'Custom AI Agents & LLM Integrations',
    category: 'Artificial Intelligence',
    iconName: 'Cpu',
    shortDesc: 'Automated AI customer support agents, smart document analyzers, and custom LLM workflows that handle repetitive operations.',
    longDesc: 'Harness practical, revenue-generating AI. We build custom conversational AI agents connected directly to your business databases, WhatsApp API, or CRM—answering customer queries 24/7, booking appointments, and summarizing reports.',
    features: [
      'WhatsApp & Web AI Chatbots with business context',
      'Private document search (RAG with vector databases)',
      'Automated email drafting & lead qualification',
      'Zero hallucination guardrails & private data privacy',
    ],
    techStack: ['Python', 'LangChain', 'FastAPI', 'pgvector', 'Gemini / OpenAI APIs', 'WhatsApp Cloud API'],
    deliverables: ['Custom Trained AI Model / Agent', 'Integration with WhatsApp or Web', 'Admin Chat Logs & Oversight Dashboard', 'Deployment on Cloud'],
    typicalTimeline: '2 to 4 weeks',
  },
  {
    id: 'automations',
    title: 'Business Workflow Automations',
    category: 'Operations & Integration',
    iconName: 'Zap',
    shortDesc: 'Eliminate manual excel work by syncing your CRM, billing, ERP, Google Sheets, and accounting tools automatically.',
    longDesc: 'Free your team from hours of manual copy-pasting. We create automated event-driven workflows that sync customer leads, generate GST invoices, notify team members on WhatsApp/Slack, and update inventory across channels seamlessly.',
    features: [
      'CRM, Tally, Zoho & ERP integrations',
      'Automated GST invoice generation & dispatch',
      'Instant WhatsApp/SMS order notifications',
      'Custom webhook pipelines with error retry safety',
    ],
    techStack: ['Node.js', 'Python', 'n8n', 'Make', 'Webhooks', 'Google Cloud'],
    deliverables: ['Automated Workflow Connectors', 'Error Alert System', 'Step-by-step Video Walkthrough', 'Audit Logging Dashboard'],
    typicalTimeline: '1 to 2 weeks',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Hosting & DevOps Support',
    category: 'Infrastructure',
    iconName: 'Cloud',
    shortDesc: 'High-availability AWS and Google Cloud hosting, automated backups, and 99.9% uptime management for peace of mind.',
    longDesc: 'We set up secure, cost-optimized cloud servers with automated daily backups, SSL certificates, and CI/CD pipelines so your applications run smoothly without unexpected crashes or slowdowns.',
    features: [
      'AWS, DigitalOcean & Google Cloud setup',
      'Automated daily database backups & monitoring',
      'SSL certificates, DDoS protection & firewall',
      'Continuous deployment via GitHub Actions',
    ],
    techStack: ['AWS', 'Google Cloud', 'Docker', 'Linux', 'GitHub Actions', 'Nginx'],
    deliverables: ['Server Architecture Configuration', 'Zero-Downtime Deployment Flow', 'Monitoring & Uptime Alerts', 'Security Audit Report'],
    typicalTimeline: '1 to 3 weeks',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX & Product Design',
    category: 'Design Strategy',
    iconName: 'Layout',
    shortDesc: 'Clean, user-friendly Figma wireframes, clickable prototypes, and conversion-focused designs that your customers will love.',
    longDesc: 'Great software starts with clear, intuitive design. Our team designs uncluttered screens, clean typography, and intuitive customer journeys in Figma that make navigation effortless on mobile and desktop.',
    features: [
      'Complete Figma design systems with components',
      'Clickable interactive mobile & web prototypes',
      'Modern, uncluttered, accessible layouts',
      'Fast developer handoff with ready tokens',
    ],
    techStack: ['Figma', 'FigJam', 'Tailwind CSS', 'Design Tokens'],
    deliverables: ['Figma Master Design File', 'Clickable Prototype Preview', 'Component Library', 'Exported Assets (SVG, PNG, Icons)'],
    typicalTimeline: '1 to 2 weeks',
  },
];

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'ecommerce-platform',
    title: 'Next-Gen E-Commerce & Retail Web Portal',
    solutionType: 'High-Conversion Storefront',
    category: 'web',
    categoryLabel: 'Web Platform',
    summary: 'Ultra-fast headless online storefront with instant product search, Razorpay/UPI checkout, automated WhatsApp invoice notifications, and real-time inventory sync.',
    architectureHighlight: 'Next.js 15 Server-Side Rendering with sub-second page loads & edge caching.',
    coreFeatures: [
      'Sub-second page loads with mobile-first checkout',
      'Integrated Razorpay, Paytm UPI, Card & Cash on Delivery',
      'Instant WhatsApp order confirmation & tracking dispatch',
      'Real-time admin dashboard for orders, sales & coupons',
    ],
    techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Razorpay API'],
    estimatedSprint: '14 to 20 days',
    accentColor: 'blue',
  },
  {
    id: 'clinic-telehealth',
    title: 'Healthcare Clinic Management & Patient App',
    solutionType: 'Patient & Doctor Portal',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    summary: 'Cross-platform iOS and Android mobile app paired with a web admin portal for seamless doctor appointment booking, digital prescriptions, and automated WhatsApp reminders.',
    architectureHighlight: 'Unified React Native codebase deployed to iOS App Store & Android Play Store.',
    coreFeatures: [
      'One-tap doctor consultation booking with live queue tokens',
      'Secure digital health records and instant PDF prescriptions',
      'Automated WhatsApp appointment reminders 2 hours prior',
      'Role-based staff login for receptionists and doctors',
    ],
    techStack: ['React Native', 'Node.js', 'Express', 'PostgreSQL', 'AWS S3', 'WhatsApp Cloud API'],
    estimatedSprint: '3 to 5 weeks',
    accentColor: 'indigo',
  },
  {
    id: 'whatsapp-ai-agent',
    title: 'Autonomous WhatsApp AI Customer Agent',
    solutionType: '24/7 Intelligent Support Bot',
    category: 'ai',
    categoryLabel: 'AI & Automation',
    summary: 'Intelligent AI conversational assistant connected to Meta WhatsApp Cloud API that resolves customer queries, shares product catalogs, qualifies leads, and logs appointments automatically.',
    architectureHighlight: 'LangChain & Gemini LLM with private retrieval (RAG) and zero-hallucination guardrails.',
    coreFeatures: [
      'Multilingual conversational support in English, Hindi & Marathi',
      'Instant answers to pricing, product specs, and business hours',
      'Direct integration with Google Sheets, Excel & CRM databases',
      'Human handoff alert to Ram or Varad when complex deals arise',
    ],
    techStack: ['Python', 'FastAPI', 'LangChain', 'Gemini API', 'WhatsApp Cloud API', 'pgvector'],
    estimatedSprint: '10 to 18 days',
    accentColor: 'emerald',
  },
  {
    id: 'erp-workflow-pipeline',
    title: 'Automated Invoicing & ERP Workflow Pipeline',
    solutionType: 'Business Automation',
    category: 'automation',
    categoryLabel: 'Workflow Automation',
    summary: 'Event-driven automation pipeline connecting customer orders, Tally/Zoho accounting, and warehouse dispatch without requiring any manual copy-pasting.',
    architectureHighlight: 'Webhook-driven message queue with automatic retry logic and error alerting.',
    coreFeatures: [
      'Auto-generation of GST compliant invoices on purchase',
      'Two-way synchronization between CRM and Tally ERP',
      'Real-time Slack / WhatsApp notification on high-value orders',
      'Comprehensive audit log of every processed transaction',
    ],
    techStack: ['Node.js', 'Python', 'n8n', 'Webhooks', 'Docker', 'Google Cloud Platform'],
    estimatedSprint: '7 to 14 days',
    accentColor: 'amber',
  },
  {
    id: 'real-estate-showcase',
    title: 'Property Showcase & Virtual Tour Portal',
    solutionType: 'Interactive Real Estate Showcase',
    category: 'web',
    categoryLabel: 'Web Platform',
    summary: 'Visually stunning real estate portal featuring high-definition photo galleries, interactive floor plans, instant EMI calculators, and 1-tap WhatsApp visit scheduling.',
    architectureHighlight: 'Optimized image pipelines with progressive blur-up loading and dynamic maps.',
    coreFeatures: [
      'Interactive unit floor plans and virtual walkthroughs',
      'Live mortgage & EMI financial calculator with down-payment sliders',
      'Immediate lead capture routed to sales team with visit preferences',
      'SEO-optimized property listings with structured JSON-LD schema',
    ],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Supabase', 'Google Maps API'],
    estimatedSprint: '12 to 18 days',
    accentColor: 'blue',
  },
  {
    id: 'saas-analytics-dashboard',
    title: 'Multi-Tenant SaaS Cloud Analytics Dashboard',
    solutionType: 'Cloud SaaS Application',
    category: 'web',
    categoryLabel: 'Web Platform',
    summary: 'Secure, modern cloud dashboard with role-based access control, real-time KPI graphs, subscription billing, and sub-second table filtering for high-volume data.',
    architectureHighlight: 'Modular component architecture with strict TypeScript verification and secure JWT auth.',
    coreFeatures: [
      'Interactive time-series charts and customizable KPI cards',
      'Multi-role permissions (Admin, Manager, Viewer)',
      'Automated scheduled report generation in Excel and PDF formats',
      'Dark and light mode responsive interfaces',
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Docker'],
    estimatedSprint: '3 to 6 weeks',
    accentColor: 'indigo',
  },
];

// Export PROJECTS as alias to SOLUTIONS for compatibility
export const PROJECTS = SOLUTIONS;
export type ProjectItem = SolutionItem;

export const CLIENT_COMMITMENTS: ValuePillar[] = [
  {
    title: 'Milestone-Based Payments',
    highlight: 'Pay As We Ship',
    description: 'We do not charge massive upfront fees. Billing is split into clear stages: 30% advance on architecture kickoff, 40% only after you test the working staging build, and the final 30% upon live deployment.',
    metric: '3-Stage',
    metricLabel: 'Milestone structure aligned with verified software delivery',
    points: [
      'Zero surprise invoices or hidden charges',
      'You test working software before paying the second milestone',
      '100% money-back guarantee if kickoff sprint does not meet specs',
    ],
  },
  {
    title: 'Weekly Staging Releases',
    highlight: 'Test Every Friday',
    description: 'You will never wonder what is happening with your project. We deploy working software to a private URL every week so you can test features on your own phone or laptop.',
    metric: 'Every Friday',
    metricLabel: 'Live clickable demo builds for immediate team feedback',
    points: [
      'Direct hands-on testing of features as they are built',
      'Quick feedback turnaround to tweak UI/UX early',
      'Continuous progress visibility without technical jargon',
    ],
  },
  {
    title: '100% Code & IP Handover',
    highlight: 'Zero Vendor Lock-in',
    description: 'Every line of code, design file, database schema, and deployment credential belongs entirely to your business upon completion. We provide complete documentation and GitHub repo access.',
    metric: '100%',
    metricLabel: 'Intellectual property and source code ownership transfer',
    points: [
      'Complete Git repository and production environment handover',
      'Clean modular architecture that your internal team can extend',
      'No proprietary licensing fees or recurring code charges',
    ],
  },
  {
    title: 'Local Presence & Direct Founder Access',
    highlight: 'Karvenagar, Pune Office',
    description: 'You communicate directly with Ram Chavan and Varad Edke. We welcome in-person meetings at our Karvenagar office or online video calls over Google Meet.',
    metric: 'Direct 1-on-1',
    metricLabel: 'Direct WhatsApp and phone access to Ram & Varad',
    points: [
      'In-person meetings welcome across Pune, Kothrud, Baner, Hinjawadi',
      'Guaranteed response to calls and messages within 2 hours',
      '30-day post-launch warranty with dedicated maintenance support',
    ],
  },
];
