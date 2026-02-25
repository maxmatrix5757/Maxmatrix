import React from 'react';
import { motion } from 'motion/react';
import { FINANCIAL_SERVICES } from '../constants';
import { ServiceCard } from '../components/ServiceCard';
import { TrendingUp, PieChart, Landmark, Briefcase } from 'lucide-react';

const FinancialServices: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Strategic <span className="text-brand-gold italic">Financial</span> Guidance</h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Expert consulting and accounting services to optimize your capital, minimize risk, and ensure long-term financial health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FINANCIAL_SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Financial Approach */}
      <section className="section-padding bg-brand-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Our Financial Philosophy</h2>
            <p className="text-brand-navy/60 max-w-2xl mx-auto">We combine traditional wisdom with modern analytics to provide a balanced approach to wealth and business management.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center text-brand-gold shrink-0">
                  <TrendingUp size={28} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl mb-2">Growth Optimization</h4>
                  <p className="text-brand-navy/60">We identify untapped opportunities for revenue growth and operational efficiency.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center text-brand-gold shrink-0">
                  <PieChart size={28} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl mb-2">Risk Mitigation</h4>
                  <p className="text-brand-navy/60">Comprehensive risk assessment to protect your assets from market volatility and regulatory changes.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center text-brand-gold shrink-0">
                  <Landmark size={28} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl mb-2">Compliance & Ethics</h4>
                  <p className="text-brand-navy/60">Strict adherence to international financial standards and ethical practices.</p>
                </div>
              </div>
            </div>
            <div className="bg-brand-navy p-12 rounded-3xl text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-serif font-bold mb-6">"Capital is a tool, not just a number."</h3>
                <p className="text-white/60 mb-8 leading-relaxed">
                  We help you deploy your capital strategically, ensuring that every dollar works toward your ultimate business and personal goals.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <p className="font-bold">Expert Guidance</p>
                    <p className="text-xs opacity-50">Certified Financial Consultants</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialServices;
