import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FINANCIAL_ADVISORY } from '../constants';
import { ServiceCard } from '../components/ServiceCard';
import { TrendingUp, PieChart, Landmark, Briefcase, Info } from 'lucide-react';

const FinancialAdvisory: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding bg-bg-secondary relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-purple via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="mb-8">Practical <span className="accent-text italic">Financial Advice</span> for Everyday Decisions</h1>
            <p className="text-text-muted leading-relaxed">
              We help individuals make informed decisions about how to invest, protect, and manage their money. Our advice is independent, unbiased, and focused on long-term financial well-being.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {FINANCIAL_ADVISORY.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          <div className="flex justify-center">
            <Link 
              to="/contact"
              state={{ from: 'financial' }}
              className="btn-primary px-10"
            >
              Contact for Financial Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="section-padding bg-bg-secondary border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="bg-bg-card border border-white/10 p-8 sm:p-12 rounded-3xl relative overflow-hidden max-w-4xl mx-auto text-center">
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-purple/20 text-brand-purple rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 border border-brand-purple/30">
                <Info size={32} />
              </div>
              <h3 className="mb-6">Important Note</h3>
              <p className="text-text-muted leading-relaxed mb-0">
                We provide advice only. We do not sell financial products or receive commissions from any provider. Our goal is your financial success, not product sales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mb-6">Our <span className="accent-text">Financial Philosophy</span></h2>
            <p className="text-text-muted max-w-2xl mx-auto">Independent, unbiased, and focused on long-term financial well-being.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-12 h-12 bg-text-primary/5 text-brand-teal rounded-full flex items-center justify-center mx-auto mb-6 border border-text-primary/10">
                <TrendingUp size={24} />
              </div>
              <h4 className="mb-2 text-text-primary">Informed Decisions</h4>
              <p className="text-xs text-text-muted">Empowering you with the knowledge to make the right choices.</p>
            </div>
            <div className="card text-center">
              <div className="w-12 h-12 bg-text-primary/5 text-brand-purple rounded-full flex items-center justify-center mx-auto mb-6 border border-text-primary/10">
                <PieChart size={24} />
              </div>
              <h4 className="mb-2 text-text-primary">Unbiased Advice</h4>
              <p className="text-xs text-text-muted">No hidden agendas or product-driven recommendations.</p>
            </div>
            <div className="card text-center">
              <div className="w-12 h-12 bg-text-primary/5 text-brand-purple rounded-full flex items-center justify-center mx-auto mb-6 border border-text-primary/10">
                <Landmark size={24} />
              </div>
              <h4 className="mb-2 text-text-primary">Long-term Focus</h4>
              <p className="text-xs text-text-muted">Building a foundation for sustainable financial growth.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialAdvisory;
