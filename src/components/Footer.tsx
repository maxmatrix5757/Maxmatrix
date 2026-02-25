import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-gold flex items-center justify-center rounded">
              <span className="text-white font-serif font-bold text-lg">M</span>
            </div>
            <span className="font-serif font-bold text-xl tracking-tight">MAX MATRIX</span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed">
            Empowering businesses through innovative IT solutions and strategic financial guidance. Your partner in growth and security.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><Link to="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
            <li><Link to="/it-services" className="hover:text-brand-gold transition-colors">IT Services</Link></li>
            <li><Link to="/financial-services" className="hover:text-brand-gold transition-colors">Financial Services</Link></li>
            <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-semibold mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><a href="#" className="hover:text-brand-gold transition-colors">Software Development</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">Cybersecurity</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">Tax Planning</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">Investment Strategy</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">Cloud Solutions</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-semibold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-brand-gold shrink-0" />
              <span>123 Business Avenue, Suite 500<br />Financial District, NY 10004</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-brand-gold shrink-0" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-brand-gold shrink-0" />
              <span>contact@maxmatrix.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 space-y-4 md:space-y-0">
        <p>© {new Date().getFullYear()} Max Matrix Services. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};
