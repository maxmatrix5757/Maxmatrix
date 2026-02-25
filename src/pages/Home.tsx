import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Zap, BarChart3, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WHY_CHOOSE_US, IT_SERVICES, FINANCIAL_SERVICES } from '../constants';
import { ServiceCard } from '../components/ServiceCard';
import * as Icons from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gray/50 -skew-x-12 transform translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-brand-navy/5 px-4 py-2 rounded-full mb-6">
              <Shield size={16} className="text-brand-gold" />
              <span className="text-xs font-bold tracking-wider uppercase text-brand-navy/70">Trusted by 500+ Businesses</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-8">
              Precision <span className="text-brand-gold italic">IT</span> & <span className="text-brand-gold italic">Financial</span> Solutions.
            </h1>
            <p className="text-lg text-brand-navy/70 mb-10 max-w-lg leading-relaxed">
              Max Matrix provides high-trust, innovative consulting services designed to secure your digital infrastructure and optimize your financial growth.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact" className="btn-primary flex items-center justify-center">
                Get a Consultation <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/it-services" className="btn-outline flex items-center justify-center">
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://picsum.photos/seed/business/800/1000" 
                alt="Professional Business" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl z-20 max-w-xs border border-brand-navy/5">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold font-serif">98%</p>
                  <p className="text-xs text-brand-navy/50 font-medium">Client Retention</p>
                </div>
              </div>
              <p className="text-sm text-brand-navy/70 italic">"Their strategic approach transformed our operations and secured our future."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="section-padding bg-brand-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Dual Expertise, One Goal: Your Success</h2>
            <p className="text-brand-navy/60">We bridge the gap between technology and finance, providing a holistic approach to business optimization and security.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-brand-navy/5"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-brand-navy text-white rounded-2xl flex items-center justify-center">
                  <Zap size={32} />
                </div>
                <Link to="/it-services" className="text-brand-gold font-bold text-sm flex items-center hover:underline">
                  View All IT <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">IT Services</h3>
              <p className="text-brand-navy/60 mb-8">From cybersecurity to custom software, we build the digital foundation your business needs to scale safely.</p>
              <div className="grid grid-cols-2 gap-4">
                {IT_SERVICES.slice(0, 4).map(s => (
                  <div key={s.id} className="flex items-center text-sm font-medium">
                    <div className="w-2 h-2 bg-brand-gold rounded-full mr-2" />
                    {s.title}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-brand-navy/5"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-brand-gold text-white rounded-2xl flex items-center justify-center">
                  <BarChart3 size={32} />
                </div>
                <Link to="/financial-services" className="text-brand-navy font-bold text-sm flex items-center hover:underline">
                  View All Financial <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Financial Services</h3>
              <p className="text-brand-navy/60 mb-8">Strategic consulting and accounting support to optimize your capital and ensure long-term profitability.</p>
              <div className="grid grid-cols-2 gap-4">
                {FINANCIAL_SERVICES.slice(0, 4).map(s => (
                  <div key={s.id} className="flex items-center text-sm font-medium">
                    <div className="w-2 h-2 bg-brand-navy rounded-full mr-2" />
                    {s.title}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Why Industry Leaders Choose Max Matrix</h2>
              <p className="text-brand-navy/60 mb-10 leading-relaxed">
                In an era of rapid digital change and economic volatility, you need a partner who understands both the code and the ledger. We provide the stability and innovation required to thrive.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {WHY_CHOOSE_US.map((item, i) => {
                  // @ts-ignore
                  const Icon = Icons[item.icon];
                  return (
                    <div key={i} className="space-y-3">
                      <div className="text-brand-gold">
                        {Icon && <Icon size={32} />}
                      </div>
                      <h4 className="font-serif font-bold text-lg">{item.title}</h4>
                      <p className="text-sm text-brand-navy/60">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-brand-navy rounded-3xl overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/trust/800/800" 
                  alt="Trust and Security" 
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-10">
                <p className="text-white text-4xl md:text-6xl font-serif font-bold mb-4 italic">"Integrity in every interaction."</p>
                <p className="text-brand-gold font-bold tracking-widest uppercase text-sm">Our Core Philosophy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-navy text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Ready to Secure Your Future?</h2>
          <p className="text-white/60 mb-10 text-lg">
            Schedule a confidential consultation with our experts today and discover how we can help you achieve your business objectives.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact" className="btn-gold px-10">
              Book a Consultation
            </Link>
            <Link to="/about" className="border border-white/20 hover:bg-white/10 px-10 py-3 rounded-lg font-medium transition-all">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
