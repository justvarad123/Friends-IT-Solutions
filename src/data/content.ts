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

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'web' | 'mobile' | 'ai' | 'automation';
  categoryLabel: string;
  summary: string;
  challenge: string;
  solution: string;
  impactMetric: string;
  impactDetail: string;
  techStack: string[];
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
  heroSubheadline: 'Founded by Ram Chavan & Varad Edke in Karvenagar, Pune. We build lightning-fast web platforms, mobile apps, autonomous AI agents, and business workflow automations for startups and expanding businesses.',
  email: 'varad.edke1803@gmail.com',
  ramEmail: 'ramchavan00001@gmail.com',
  varadEmail: 'varad.edke1803@gmail.com',
  secondaryEmail: 'ramchavan00001@gmail.com',
  phone: '+91 83298 63893',
  ramPhone: '+91 93590 32001',
  varadPhone: '+91 83298 63893',
  secondaryPhone: '+91 93590 32001',
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
  },
  hours: 'Monday – Saturday: 9:00 AM – 8:00 PM IST',
  supportSla: 'Instant email confirmation & guaranteed call within 2 hours of inquiry',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Custom Website Development',
    category: 'Web Platforms',
    iconName: 'Globe',
    shortDesc: 'Modern, ultra-fast websites and custom web portals built with React, Next.js, and clean Tailwind styling designed to convert visitors.',
    longDesc: 'We develop beautiful, responsive, and search-engine optimized websites engineered for sub-second page loads. From clean corporate websites to full SaaS dashboards, every build follows modern accessibility standards and clean code architecture.',
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

export const PROJECTS: ProjectItem[] = [
  {
    id: 'finpulse',
    title: 'FinPulse Accounting & Analytics Web Portal',
    client: 'FinPulse Advisory',
    category: 'web',
    categoryLabel: 'Web Platform',
    summary: 'Responsive financial portfolio and reconciliation dashboard built for real-time reporting and multi-branch tracking.',
    challenge: 'Client needed an uncluttered, high-speed financial portal to replace slow Excel sheets and visualize daily branch transactions without delays.',
    solution: 'Built a clean React & Next.js dashboard with instant table filtering, sub-second queries, and automated PDF statement generation.',
    impactMetric: '+320%',
    impactDetail: 'Speed increase in report generation with sub-second page loads',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    accentColor: 'blue',
  },
  {
    id: 'apexcare',
    title: 'ApexCare Clinic Patient & Telehealth Mobile App',
    client: 'ApexCare Health Services',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    summary: 'Cross-platform iOS and Android mobile app for instant doctor consultation booking, medical records, and digital prescriptions.',
    challenge: 'Patients struggled with long phone hold times and scattered paper prescriptions across two medical clinics.',
    solution: 'Designed and deployed an easy-to-use React Native app with one-tap doctor appointment booking and secure WhatsApp reminders.',
    impactMetric: '15,000+',
    impactDetail: 'Active clinic patients booking visits through the mobile application',
    techStack: ['React Native', 'Node.js', 'PostgreSQL', 'Razorpay', 'AWS'],
    accentColor: 'indigo',
  },
  {
    id: 'synthetix-ai',
    title: 'SmartDesk WhatsApp AI Customer Support Agent',
    client: 'SmartDesk Retail Pune',
    category: 'ai',
    categoryLabel: 'AI & Automation',
    summary: '24/7 intelligent conversational AI agent integrated with WhatsApp that answers product inquiries and schedules customer visits.',
    challenge: 'Retail staff were overwhelmed handling hundreds of repetitive WhatsApp price and availability queries every day.',
    solution: 'Integrated an autonomous AI agent backed by live inventory data that resolves inquiries instantly in English, Marathi, and Hindi.',
    impactMetric: '85%',
    impactDetail: 'Automated resolution of repetitive inquiries within 5 seconds',
    techStack: ['Python', 'FastAPI', 'LangChain', 'Gemini API', 'WhatsApp Cloud'],
    accentColor: 'teal',
  },
  {
    id: 'logixflow',
    title: 'LogixFlow Order & Dispatch Automation Pipeline',
    client: 'LogixFlow Logistics',
    category: 'automation',
    categoryLabel: 'Workflow Automation',
    summary: 'Automated order ingestion and dispatch tracking connecting e-commerce storefronts with regional warehouse dispatchers.',
    challenge: 'Manual order re-entry between Shopify, Google Sheets, and shipping partners caused daily shipment delays and duplicate entries.',
    solution: 'Engineered automated webhook orchestrations with error-handling queues that generate labels and trigger customer SMS alerts.',
    impactMetric: '99.9%',
    impactDetail: 'Accuracy rate in automated order processing across 3,500 daily parcels',
    techStack: ['Node.js', 'n8n', 'Docker', 'Webhooks', 'REST APIs'],
    accentColor: 'blue',
  },
  {
    id: 'proptech-prime',
    title: 'Aura Realty Virtual Property Showcase',
    client: 'Aura Properties Pune',
    category: 'web',
    categoryLabel: 'Web Platform',
    summary: 'Clean, elegant real estate web portal featuring high-definition photo galleries, floor plans, and instant EMI calculators.',
    challenge: 'Static property PDF brochures resulted in low engagement and difficulty for NRI clients to explore layouts remotely.',
    solution: 'Created an uncluttered, modern property showcase web platform with interactive layout tours and direct WhatsApp agent booking.',
    impactMetric: '+140%',
    impactDetail: 'Increase in qualified property visit bookings in the first 60 days',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Supabase'],
    accentColor: 'indigo',
  },
  {
    id: 'omnico-ai',
    title: 'LeadQual AI Voice & Lead Screening Bot',
    client: 'OmniService Enterprises',
    category: 'ai',
    categoryLabel: 'AI & Automation',
    summary: 'Automated lead response bot that calls new web inquiries within 60 seconds to qualify requirements and book calendar demos.',
    challenge: 'Inbound web form leads had a 4-hour delay before sales reps called back, leading to a 35% drop in conversion.',
    solution: 'Implemented an instant AI caller that dials leads immediately upon form submission, answers questions, and confirms appointments.',
    impactMetric: '< 60s',
    impactDetail: 'Average response time to incoming website leads, doubling conversions',
    techStack: ['Python', 'WebSockets', 'Twilio Voice', 'Gemini API', 'PostgreSQL'],
    accentColor: 'teal',
  },
];

export const VALUE_PILLARS: ValuePillar[] = [
  {
    title: 'High-Speed Delivery & Clean Code',
    highlight: 'Working MVP in 10-20 Days',
    description: 'We do not drag projects out over months. Led by Ram Chavan & Varad Edke, we deliver rapid working milestones every week so you see real progress immediately.',
    metric: '2-3x',
    metricLabel: 'Faster turnaround compared to traditional consulting firms',
    points: [
      'Weekly live staging demos of working software',
      'No unnecessary meetings—direct developer communication',
      'Rigorous automated testing for zero bugs on launch',
    ],
  },
  {
    title: 'Clean, Maintainable Architecture',
    highlight: 'Zero Technical Bloat',
    description: 'We build with clean modern standards: React, Next.js, TypeScript, Python, and cloud services. Clean code that is easy to extend as your business scales.',
    metric: '100%',
    metricLabel: 'Code ownership transferred to you with full documentation',
    points: [
      'Full intellectual property & GitHub repo transfer',
      'Clean modular folder structures and clean comments',
      'No proprietary lock-in or recurring code licensing fees',
    ],
  },
  {
    title: 'Local Presence & Direct Accountability',
    highlight: 'Karvenagar, Pune Office',
    description: 'You work directly with co-founders Ram Chavan & Varad Edke. We understand local business needs as well as global tech standards.',
    metric: '1-on-1',
    metricLabel: 'Founder-led project management and architectural oversight',
    points: [
      'In-person meetings available in Pune & Maharashtra',
      'Dedicated phone, WhatsApp, and email response',
      'Tailored solutions built specifically for your business model',
    ],
  },
  {
    title: 'Ongoing Support & Rapid SLA',
    highlight: 'Post-Launch Care & Maintenance',
    description: 'We stand firmly behind our work. After deployment, we provide bug-free warranty support, security patches, and rapid assistance whenever you need it.',
    metric: '< 2 hrs',
    metricLabel: 'Average inquiry & support response turnaround',
    points: [
      'Dedicated WhatsApp support channel for quick help',
      'Regular backups, security audits, and speed optimizations',
      'Flexible maintenance packages tailored to your growth',
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: 'Sandeep Patil',
    role: 'Director',
    company: 'Patil Industrial Solutions, Pune',
    quote: 'Ram Chavan and Varad Edke at Friends IT Solutions transformed our outdated company catalog into a modern web portal that loads instantly. Their communication was direct, honest, and the project was delivered a week ahead of schedule.',
    stat: 'Delivered in 14 Days',
  },
  {
    name: 'Anjali Sharma',
    role: 'Founder & CEO',
    company: 'Zenith Health Clinics',
    quote: 'The WhatsApp AI assistant and patient booking app they built completely streamlined our front desk. Patients can book in seconds, and our staff saves 3 hours of phone calls every day. Highly recommended!',
    stat: '+180% Patient Bookings',
  },
  {
    name: 'Nitin Joshi',
    role: 'Operations Head',
    company: 'LogixExpress Logistics, Mumbai',
    quote: 'Finding trustworthy engineers who truly understand automated workflows is rare. Friends IT Solutions automated our dispatch sync seamlessly. Whenever we need support, Varad and Ram respond right away.',
    stat: 'Zero Downtime',
  },
];
