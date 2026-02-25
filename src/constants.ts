import { NavItem, Service, Feature } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'IT Services', path: '/it-services' },
  { label: 'Financial Services', path: '/financial-services' },
  { label: 'Contact', path: '/contact' },
];

export const IT_SERVICES: Service[] = [
  {
    id: 'software-solutions',
    title: 'Software Solutions',
    description: 'Custom software development tailored to your business needs, from enterprise applications to mobile solutions.',
    icon: 'Code',
    features: ['Custom Web Apps', 'Mobile Development', 'API Integration', 'Legacy System Modernization'],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protecting your digital assets with advanced threat detection, risk assessment, and robust security protocols.',
    icon: 'ShieldCheck',
    features: ['Threat Monitoring', 'Vulnerability Assessment', 'Data Encryption', 'Compliance Audits'],
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    description: 'Scalable and secure cloud infrastructure solutions to enhance collaboration and operational efficiency.',
    icon: 'Cloud',
    features: ['Cloud Migration', 'AWS/Azure Management', 'Serverless Architecture', 'Cloud Backup'],
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    description: 'Strategic technology planning to align your IT infrastructure with your long-term business goals.',
    icon: 'Lightbulb',
    features: ['Digital Transformation', 'Infrastructure Design', 'IT Roadmap', 'Vendor Management'],
  },
];

export const FINANCIAL_SERVICES: Service[] = [
  {
    id: 'financial-consulting',
    title: 'Financial Consulting',
    description: 'Strategic financial advice to help you navigate complex markets and optimize your business performance.',
    icon: 'TrendingUp',
    features: ['Strategic Planning', 'Risk Management', 'Performance Analysis', 'Capital Structuring'],
  },
  {
    id: 'accounting-support',
    title: 'Accounting Support',
    description: 'Comprehensive accounting services ensuring accuracy, compliance, and clear financial reporting.',
    icon: 'Calculator',
    features: ['Bookkeeping', 'Financial Statements', 'Payroll Management', 'Audit Preparation'],
  },
  {
    id: 'tax-planning',
    title: 'Tax Planning',
    description: 'Expert tax strategies to minimize liabilities and ensure full compliance with evolving regulations.',
    icon: 'FileText',
    features: ['Corporate Tax', 'Personal Tax', 'VAT/GST Compliance', 'Tax Optimization'],
  },
  {
    id: 'investment-guidance',
    title: 'Investment Guidance',
    description: 'Tailored investment strategies designed to grow and protect your wealth over the long term.',
    icon: 'Briefcase',
    features: ['Portfolio Management', 'Asset Allocation', 'Market Analysis', 'Retirement Planning'],
  },
];

export const WHY_CHOOSE_US: Feature[] = [
  {
    title: 'Unwavering Trust',
    description: 'We build long-term relationships based on transparency, integrity, and consistent delivery.',
    icon: 'Handshake',
  },
  {
    title: 'Deep Expertise',
    description: 'Our team consists of industry veterans with decades of experience in both tech and finance.',
    icon: 'Award',
  },
  {
    title: 'Security First',
    description: 'Whether it is your data or your capital, we prioritize security and compliance in everything we do.',
    icon: 'Lock',
  },
  {
    title: 'Client-Centric',
    description: 'Your success is our metric. We tailor every solution to fit your unique challenges and goals.',
    icon: 'Users',
  },
];
