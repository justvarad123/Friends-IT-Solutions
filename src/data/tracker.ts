export interface VisitorLog {
  id: string;
  ipPlaceholder: string;
  location: string;
  device: string;
  browser: string;
  visitedAt: string;
  lastActive: string;
  status: 'Browsing Website' | 'Calculating Quote' | 'Submitted Inquiry' | 'Contact Viewed';
  viewedSections: string[];
  currentPage?: string;
}

export interface LeadInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  budget: string;
  details?: string;
  message?: string;
  submittedAt: string;
  emailSentStatus: 'Dispatched to User' | 'Delivered' | 'Pending';
  assignedTo: string; // 'Ram Chavan' or 'Varad Edke'
  callbackStatus: 'Urgent Callback Scheduled' | 'Contacted' | 'Meeting Booked';
  status?: 'new' | 'contacted' | 'closed';
}

const VISITOR_STORAGE_KEY = 'friends_it_visitors_log';
const LEADS_STORAGE_KEY = 'friends_it_leads_records';

// Initial realistic seed data so founders can see recent Pune/Global visitors immediately
const INITIAL_VISITORS: VisitorLog[] = [
  {
    id: 'VIS-9021',
    ipPlaceholder: '103.211.xxx.xx',
    location: 'Karvenagar, Pune (MH)',
    device: 'Desktop · macOS',
    browser: 'Chrome 128',
    visitedAt: 'Just now',
    lastActive: 'Active now',
    status: 'Browsing Website',
    viewedSections: ['Homepage', 'Services', 'Blueprints'],
    currentPage: '/services',
  },
  {
    id: 'VIS-8994',
    ipPlaceholder: '49.36.xxx.xx',
    location: 'Kothrud, Pune (MH)',
    device: 'Mobile · iPhone',
    browser: 'Safari Mobile',
    visitedAt: '12 mins ago',
    lastActive: '8 mins ago',
    status: 'Calculating Quote',
    viewedSections: ['Services', 'Estimator'],
    currentPage: '/estimator',
  },
  {
    id: 'VIS-8872',
    ipPlaceholder: '115.99.xxx.xx',
    location: 'Hinjawadi, Pune (MH)',
    device: 'Desktop · Windows 11',
    browser: 'Edge 126',
    visitedAt: '45 mins ago',
    lastActive: '30 mins ago',
    status: 'Browsing Website',
    viewedSections: ['Home', 'About'],
    currentPage: '/about',
  },
];

const INITIAL_LEADS: LeadInquiry[] = [
  {
    id: 'FIT-PUNE-101',
    name: 'Sagar Deshmukh',
    email: 'sagar.deshmukh@techventures.in',
    phone: '9822014567',
    company: 'FinPulse Systems Pune',
    service: 'Full-Stack Web Application (React + Node.js)',
    budget: '₹2,50,000 - ₹5,00,000',
    details: 'Need a multi-tenant client portal with real-time analytics and Razorpay billing.',
    message: 'Need a multi-tenant client portal with real-time analytics and Razorpay billing.',
    submittedAt: '11:45 AM, Today',
    emailSentStatus: 'Dispatched to User',
    assignedTo: 'Varad Edke',
    callbackStatus: 'Urgent Callback Scheduled',
    status: 'new',
  },
  {
    id: 'FIT-PUNE-102',
    name: 'Pooja Kulkarni',
    email: 'pooja.k@aarogyacare.com',
    phone: '9158023456',
    company: 'Aarogya Clinic Network',
    service: 'Telehealth & Clinic Mobile App (Flutter)',
    budget: '₹3,00,000 - ₹6,00,000',
    details: 'Doctor consultation mobile app with prescription generator and offline local DB.',
    message: 'Doctor consultation mobile app with prescription generator and offline local DB.',
    submittedAt: '09:15 AM, Today',
    emailSentStatus: 'Dispatched to User',
    assignedTo: 'Ram Chavan',
    callbackStatus: 'Contacted',
    status: 'contacted',
  },
];

export function getStoredVisitors(): VisitorLog[] {
  try {
    const raw = localStorage.getItem(VISITOR_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(VISITOR_STORAGE_KEY, JSON.stringify(INITIAL_VISITORS));
      return INITIAL_VISITORS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_VISITORS;
  }
}

export function trackCurrentVisit(): VisitorLog {
  const visitors = getStoredVisitors();
  const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '';
  let device = 'Desktop';
  if (/mobile/i.test(userAgent)) device = 'Mobile';
  else if (/tablet|ipad/i.test(userAgent)) device = 'Tablet';

  let browser = 'Modern Browser';
  if (/chrome/i.test(userAgent)) browser = 'Chrome';
  else if (/safari/i.test(userAgent)) browser = 'Safari';
  else if (/firefox/i.test(userAgent)) browser = 'Firefox';

  const currentVisitor: VisitorLog = {
    id: `VIS-${Math.floor(1000 + Math.random() * 9000)}`,
    ipPlaceholder: 'Current Visitor',
    location: 'Karvenagar, Pune / Regional Network',
    device: `${device} · ${typeof navigator !== 'undefined' ? navigator.platform || 'Client' : 'Client'}`,
    browser,
    visitedAt: 'Just now',
    lastActive: 'Active now',
    status: 'Browsing Website',
    viewedSections: ['Homepage'],
    currentPage: '/',
  };

  const updated = [currentVisitor, ...visitors.filter((v) => v.ipPlaceholder !== 'Current Visitor')];
  try {
    localStorage.setItem(VISITOR_STORAGE_KEY, JSON.stringify(updated.slice(0, 15)));
  } catch {
    // silent fallback
  }
  return currentVisitor;
}

export function updateVisitorStatus(status: VisitorLog['status'], sectionName?: string, pagePath?: string) {
  try {
    const visitors = getStoredVisitors();
    if (visitors.length > 0) {
      visitors[0].status = status;
      visitors[0].lastActive = 'Active just now';
      if (pagePath) {
        visitors[0].currentPage = pagePath;
      }
      if (sectionName && !visitors[0].viewedSections.includes(sectionName)) {
        visitors[0].viewedSections.push(sectionName);
      }
      localStorage.setItem(VISITOR_STORAGE_KEY, JSON.stringify(visitors));
    }
  } catch {
    // silent fallback
  }
}

export function getStoredLeads(): LeadInquiry[] {
  try {
    const raw = localStorage.getItem(LEADS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(INITIAL_LEADS));
      return INITIAL_LEADS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_LEADS;
  }
}

export function updateLeadStatus(id: string, status: 'new' | 'contacted' | 'closed'): void {
  try {
    const existing = getStoredLeads();
    const updated = existing.map((l) => (l.id === id ? { ...l, status } : l));
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // silent fallback
  }
}

export function saveLeadInquiry(newLeadData: Partial<LeadInquiry>): LeadInquiry {
  const existing = getStoredLeads();
  const idNumber = Math.floor(100 + existing.length + 1);
  const assigned = idNumber % 2 === 0 ? 'Ram Chavan' : 'Varad Edke';

  const createdLead: LeadInquiry = {
    id: `FIT-PUNE-${idNumber}`,
    name: newLeadData.name || 'Anonymous Client',
    email: newLeadData.email || 'client@example.com',
    phone: newLeadData.phone || '9359032001',
    company: newLeadData.company || 'Direct Client',
    service: newLeadData.service || 'Custom Engineering Sprint',
    budget: newLeadData.budget || 'Flexible Milestone Scope',
    details: newLeadData.details || newLeadData.message || '',
    message: newLeadData.message || newLeadData.details || '',
    submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ', Today',
    emailSentStatus: 'Dispatched to User',
    assignedTo: assigned,
    callbackStatus: 'Urgent Callback Scheduled',
    status: 'new',
  };

  const updated = [createdLead, ...existing];
  try {
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // silent fallback
  }

  // Update current visitor status
  updateVisitorStatus('Submitted Inquiry', 'Contact Form', '/contact');

  return createdLead;
}
