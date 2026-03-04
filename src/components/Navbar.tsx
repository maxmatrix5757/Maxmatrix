import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsLight(!isLight);
    document.documentElement.classList.toggle('light');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <span className="font-serif font-bold text-2xl tracking-tight transition-colors text-text-primary">
            MAXMATRIX
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-brand-purple ${
                location.pathname === item.path ? 'text-brand-purple' : 'text-text-primary/80'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors bg-text-primary/5 text-text-primary"
          >
            {isLight ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <Link to="/contact" className="btn-primary py-2 px-5 text-sm">
            Book a Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors bg-text-primary/5 text-text-primary"
          >
            {isLight ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button className="text-text-primary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-b border-white/5 overflow-hidden ${isLight ? 'bg-white' : 'bg-bg-main'}`}
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium flex justify-between items-center ${
                    location.pathname === item.path ? 'text-brand-purple' : 'text-text-primary'
                  }`}
                >
                  {item.label}
                  <ChevronRight size={18} className="opacity-30" />
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)} className="btn-primary text-center">
                Book a Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
