import { NavItem, Service, Feature } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'ERP Solutions', path: '/erp-solutions' },
  { label: 'Financial Advisory', path: '/financial-advisory' },
  { label: 'Why MaxMatrix', path: '/why-maxmatrix' },
  { label: 'Contact', path: '/contact' },
];

export const ERP_SERVICES: Service[] = [
  {
    id: 'consultation',
    title: 'ERP Consultation & Planning',
    description: 'We help businesses streamline operations by implementing ERP systems tailored to their specific needs.',
    icon: 'ClipboardList',
    features: ['System Planning', 'Requirement Analysis', 'Strategic Roadmap'],
  },
  {
    id: 'implementation',
    title: 'Implementation & Customization',
    description: 'Our focus is simplicity, reliability, and long-term usability in every implementation.',
    icon: 'Settings',
    features: ['System Setup', 'Custom Workflows', 'Data Migration'],
  },
  {
    id: 'mapping',
    title: 'Business Process Mapping',
    description: 'Improve operational efficiency and internal control through clear process mapping.',
    icon: 'Map',
    features: ['Workflow Analysis', 'Efficiency Audits', 'Internal Controls'],
  },
  {
    id: 'support',
    title: 'Training & User Support',
    description: 'Comprehensive training and ongoing support to ensure your team maximizes the system.',
    icon: 'Users',
    features: ['User Training', 'Technical Support', 'Documentation'],
  },
];

export const FINANCIAL_ADVISORY: Service[] = [
  {
    id: 'investment',
    title: 'Investment Guidance',
    description: 'Advice on how to invest based on your goals, risk tolerance, and time horizon.',
    icon: 'TrendingUp',
    features: ['Goal-based Investing', 'Risk Assessment', 'Time Horizon Planning'],
  },
  {
    id: 'insurance',
    title: 'Insurance Planning',
    description: 'Guidance on which types of insurance to buy and how to avoid unnecessary products.',
    icon: 'ShieldCheck',
    features: ['Coverage Analysis', 'Product Guidance', 'Risk Protection'],
  },
  {
    id: 'personal-finance',
    title: 'Personal Finance Planning',
    description: 'Advice on budgeting, saving, spending wisely, and building financial discipline.',
    icon: 'Wallet',
    features: ['Budgeting', 'Savings Strategy', 'Financial Discipline'],
  },
  {
    id: 'wealth',
    title: 'Wealth Planning',
    description: 'Structured guidance for long-term financial growth and stability.',
    icon: 'Briefcase',
    features: ['Growth Strategy', 'Stability Planning', 'Long-term Vision'],
  },
];

export const WHY_MAXMATRIX: Feature[] = [
  {
    title: 'Clear and Honest Advice',
    description: 'We provide independent, unbiased advice focused on your long-term well-being.',
    icon: 'MessageSquare',
  },
  {
    title: 'No Product Selling',
    description: 'We do not sell financial products or receive commissions from any provider.',
    icon: 'Ban',
  },
  {
    title: 'Practical ERP Solutions',
    description: 'ERP systems tailored to your needs without overengineering.',
    icon: 'CheckCircle',
  },
  {
    title: 'Focus on Long-term Value',
    description: 'Our focus is on simplicity, reliability, and long-term usability.',
    icon: 'BarChart',
  },
  {
    title: 'Client-First Approach',
    description: 'Your success and financial well-being are our only priorities.',
    icon: 'Heart',
  },
];
