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
}

export interface LeadInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  budget: string;
  details: string;
  submittedAt: string;
  emailSentStatus: 'Dispatched to User' | 'Delivered' | 'Pending';
  assignedTo: string; // 'Ram Chavan' or 'Varad Edke'
  callbackStatus: 'Urgent Callback Scheduled' | 'Contacted' | 'Meeting Booked';
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
    viewedSections: ['Hero', 'Services', 'Projects'],
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
  },
  {
    id: 'VIS-8872',
    ipPlaceholder: '115.99.xxx.xx',
    location: 'Hinjawadi, Pune (MH)',
    device: 'Desktop · Windows 11',
    browser: 'Edge 126',
    visitedAt: '35 mins ago',
    lastActive: '30 mins ago',
    status: 'Submitted Inquiry',
    viewedSections: ['Projects', 'Estimator', 'Contact'],
  },
  {
    id: 'VIS-8740',
    ipPlaceholder: '104.28.xxx.xx',
    location: 'Mumbai, Maharashtra',
    device: 'Laptop · macOS',
    browser: 'Chrome 127',
    visitedAt: '1 hr ago',
    lastActive: '55 mins ago',
    status: 'Contact Viewed',
    viewedSections: ['Services', 'Why Us', 'Contact'],
  },
];

const INITIAL_LEADS: LeadInquiry[] = [
  {
    id: 'FIT-PUNE-102',
    name: 'Rohit Kulkarni',
    email: 'rohit.kulkarni@techcraft.in',
    phone: '+91 98221 44890',
    company: 'TechCraft Logistics Pune',
    service: 'Business Workflow Automations',
    budget: '₹40,000 – ₹80,000',
    details: 'Looking to automate ERP sync between Tally and our warehouse management system.',
    submittedAt: 'Today, 11:20 AM',
    emailSentStatus: 'Dispatched to User',
    assignedTo: 'Varad Edke',
    callbackStatus: 'Urgent Callback Scheduled',
  },
  {
    id: 'FIT-PUNE-101',
    name: 'Pooja Deshmukh',
    email: 'pooja@zenithhealth.org',
    phone: '+91 99230 18872',
    company: 'Zenith Clinics Baner',
    service: 'Custom AI Agents & LLM Integrations',
    budget: '₹75,000 – ₹1,50,000',
    details: 'Need a patient appointment booking AI voice/chat agent integrated with WhatsApp.',
    submittedAt: 'Yesterday, 4:45 PM',
    emailSentStatus: 'Delivered',
    assignedTo: 'Ram Chavan',
    callbackStatus: 'Contacted',
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
  const userAgent = navigator.userAgent;
  let device = 'Desktop';
  if (/mobile/i.test(userAgent)) device = 'Mobile';
  else if (/tablet|ipad/i.test(userAgent)) device = 'Tablet';

  let browser = 'Modern Browser';
  if (/chrome/i.test(userAgent)) browser = 'Chrome';
  else if (/safari/i.test(userAgent)) browser = 'Safari';
  else if (/firefox/i.test(userAgent)) browser = 'Firefox';

  const currentVisitor: VisitorLog = {
    id: `VIS-${Math.floor(1000 + Math.random() * 9000)}`,
    ipPlaceholder: 'Current User (Live Session)',
    location: 'Pune / Local Network',
    device: `${device} · ${navigator.platform || 'Device'}`,
    browser,
    visitedAt: 'Just now',
    lastActive: 'Active now',
    status: 'Browsing Website',
    viewedSections: ['Homepage'],
  };

  const updated = [currentVisitor, ...visitors.filter((v) => v.ipPlaceholder !== 'Current User (Live Session)')];
  try {
    localStorage.setItem(VISITOR_STORAGE_KEY, JSON.stringify(updated.slice(0, 15)));
  } catch {
    // silent fallback
  }
  return currentVisitor;
}

export function updateVisitorStatus(status: VisitorLog['status'], sectionName?: string) {
  try {
    const visitors = getStoredVisitors();
    if (visitors.length > 0) {
      visitors[0].status = status;
      visitors[0].lastActive = 'Active just now';
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

export function saveLeadInquiry(newLeadData: Omit<LeadInquiry, 'id' | 'submittedAt' | 'emailSentStatus' | 'assignedTo' | 'callbackStatus'>): LeadInquiry {
  const existing = getStoredLeads();
  const idNumber = Math.floor(100 + existing.length + 1);
  const assigned = idNumber % 2 === 0 ? 'Ram Chavan' : 'Varad Edke';

  const createdLead: LeadInquiry = {
    id: `FIT-PUNE-${idNumber}`,
    ...newLeadData,
    submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ', Today',
    emailSentStatus: 'Dispatched to User',
    assignedTo: assigned,
    callbackStatus: 'Urgent Callback Scheduled',
  };

  const updated = [createdLead, ...existing];
  try {
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // silent fallback
  }

  // Update current visitor status
  updateVisitorStatus('Submitted Inquiry', 'Contact Form');

  return createdLead;
}
