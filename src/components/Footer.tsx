import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-secondary text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/">
            <span className="font-serif font-bold text-2xl tracking-tight text-white">
              MAXMATRIX
            </span>
          </Link>
          <p className="text-text-muted text-sm leading-relaxed">
            ERP Solutions & Independent Financial Advisory. We help businesses run efficiently and individuals make smarter financial decisions.
          </p>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-purple hover:border-brand-purple transition-all">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-text-muted">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="hover:text-brand-purple transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-semibold mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-text-muted">
            <li><Link to="/erp-solutions" className="hover:text-brand-purple transition-colors">ERP Implementation</Link></li>
            <li><Link to="/erp-solutions" className="hover:text-brand-purple transition-colors">Process Mapping</Link></li>
            <li><Link to="/financial-advisory" className="hover:text-brand-purple transition-colors">Investment Guidance</Link></li>
            <li><Link to="/financial-advisory" className="hover:text-brand-purple transition-colors">Insurance Planning</Link></li>
            <li><Link to="/financial-advisory" className="hover:text-brand-purple transition-colors">Wealth Planning</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-semibold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-sm text-text-muted">
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-brand-teal shrink-0" />
              <a href="mailto:max0matrixx@gmail.com" className="hover:text-brand-purple transition-colors">max0matrixx@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="p-6 bg-white/5 rounded-2xl border border-white/10 mb-8">
          <h5 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Disclaimer</h5>
          <p className="text-[10px] text-text-muted leading-relaxed">
            Financial advice is provided for educational and informational purposes only and does not constitute investment recommendations. Please consult licensed professionals where required. MaxMatrix is an independent advisory firm and does not sell financial products or receive commissions.
          </p>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} MaxMatrix. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
