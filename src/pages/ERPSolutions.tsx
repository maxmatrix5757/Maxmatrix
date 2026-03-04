import React from 'react';
import { motion } from 'motion/react';
import { ERP_SERVICES } from '../constants';
import { ServiceCard } from '../components/ServiceCard';
import { ClipboardList, Settings, Map, Users, Zap } from 'lucide-react';

const ERPSolutions: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding bg-bg-secondary overflow-hidden relative border-b border-white/5">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 border border-white rounded-full animate-pulse" />
          <div className="absolute bottom-10 left-10 w-96 h-96 border border-white rounded-full opacity-50" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="mb-8">ERP Solutions for <span className="accent-text italic">Growing Businesses</span></h1>
            <p className="text-text-muted leading-relaxed">
              We help businesses streamline operations by implementing ERP systems tailored to their specific needs. Our focus is simplicity, reliability, and long-term usability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {ERP_SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          <div className="flex justify-center">
            <a 
              href="mailto:max0matrixx@gmail.com?subject=IT Service Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10"
            >
              Contact for IT Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section-padding bg-bg-secondary border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="mb-6">Who This Is <span className="accent-text">For</span></h2>
            <p className="text-text-muted">
              Small and mid-sized businesses looking to improve operational efficiency, reporting accuracy, and internal control through ERP systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-12 h-12 bg-text-primary/5 text-brand-teal rounded-full flex items-center justify-center mx-auto mb-6 border border-text-primary/10">
                <Zap size={24} />
              </div>
              <h4 className="mb-2 text-text-primary">Efficiency</h4>
              <p className="text-xs text-text-muted">Streamline your daily operations and reduce manual overhead.</p>
            </div>
            <div className="card text-center">
              <div className="w-12 h-12 bg-text-primary/5 text-brand-purple rounded-full flex items-center justify-center mx-auto mb-6 border border-text-primary/10">
                <ClipboardList size={24} />
              </div>
              <h4 className="mb-2 text-text-primary">Accuracy</h4>
              <p className="text-xs text-text-muted">Get reliable real-time reporting and data you can trust.</p>
            </div>
            <div className="card text-center">
              <div className="w-12 h-12 bg-text-primary/5 text-brand-purple rounded-full flex items-center justify-center mx-auto mb-6 border border-text-primary/10">
                <Settings size={24} />
              </div>
              <h4 className="mb-2 text-text-primary">Control</h4>
              <p className="text-xs text-text-muted">Strengthen internal controls and business process management.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ERPSolutions;
